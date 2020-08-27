"use strict";
const path = require("fire-path");
const fs = require("fire-fs");
let utils = Editor.require("packages://cocos-services/panel/utils/utils.js");
let ProjHelper = Editor.require("packages://cocos-services/panel/utils/projHelper.js");
var projHelper;

function addUsesPermission(permission) {
  let manifestPath = this.androidPath + "/app/AndroidManifest.xml";
  if (!fs.existsSync(manifestPath)) return;
  let contents = fs.readFileSync(manifestPath, "utf8");
  if (contents.indexOf(permission) >= 0) return;
  var perStr = `    <uses-permission android:name="android.permission.${permission}"/>`;
  projHelper.insertCodeLine(manifestPath, "uses-permission", perStr);
}

module.exports = {
  /**
   * 开启服务时会调用此函数，在此函数中要完成的工作：
   *  若服务存在 js 版本的 sdk，则在此处就应该将 sdk 引入到用户的项目中
   * @param {String} projectPath 项目根路径
   * @param {Object} params 服务的参数 ( 若未填写则为 null )
   */
  onServiceEnable(projectPath, params) {
    // 在此处完成 js sdk 的引用
    // Todo...
    try {
      if (!fs.existsSync(projectPath + "/assets/agora")) utils.mkdirs(projectPath + "/assets/agora");
      var jsPath = __dirname + "/resources/js/agora.js";
      Editor.assetdb.refresh("db://assets/agora");
      if (!Editor.assetdb.exists("db://assets/agora/agora.js")) Editor.assetdb.import([jsPath], "db://assets/agora");

      utils.copyDir(
        path.join(__dirname, "/resources/ccservices-agora-preview-script"),
        projectPath + "/packages/ccservices-agora-preview-script"
      );
    } catch (e) {}
    utils.printToCreatorConsole("log", "Agora service js sdk installation is complete!");
  },

  /**
   * 关闭服务时会调用此函数，在此函数中要完成的工作：
   *  将开启服务时安装的 sdk 从用户项目中移除引用并删除
   * @param {String} projectPath 项目根路径
   * @param {Object} params 服务的参数(若未填写则为 null)
   */
  onServiceDisable(projectPath, params) {
    // 在此处完成 js sdk 的移除
    // Todo...
    try {
      if (Editor.assetdb.exists("db://assets/agora")) Editor.assetdb.delete(["db://assets/agora"]);
      utils.removeDir(projectPath + "/packages/ccservices-agora-preview-script");
    } catch (e) {}
    utils.printToCreatorConsole("log", "Agora service js sdk uninstallation is complete!");
  },

  /**
   * 当 Creator 构建项目时，且当前服务处于开启状态会调用此函数，在此函数中要完成的工作：
   *   将对应服务的 sdk 集成到项目中
   * @param {Object} options 编译选项
   * @param {Object} params 服务的参数(若未填写则为 null)
   */
  onBuildedProjectEnable(options, params) {
    projHelper = new ProjHelper(options);
    projHelper.Android.addUsesPermission = addUsesPermission;
    projHelper.Android.androidPath = path.join(options.dest, `frameworks/runtime-src/proj.android-studio`);

    // 在此处完成构建项目服务 sdk 的集成
    // Todo...
    if (options.platform === "android") {
      var apiRegRes = options.apiLevel.match(/\d+/);
      if (apiRegRes) {
        if (parseInt(apiRegRes[0]) < 23) {
          utils.printToCreatorConsole("warn", "The Agora service plugin requires an Android platform API level of at least 23, please choose a higher platform to rebuild.");
          return;
        }
      }
    }
    this.parseNative(options, params);

    this.praseHTML();

    utils.printToCreatorConsole("log", "Agora service installation is complete!");
  },

  /**
   * 当 Creator 构建项目时，且当前服务处于关闭状态会调用此函数，在此函数中要完成的工作：
   *   将对应服务的 sdk 集成到项目中
   * @param {Object} options 编译选项
   * @param {Object} params 服务的参数(若未填写则为 null)
   */
  onBuildedProjectDisable(options, params) {
    projHelper = new ProjHelper(options);

    // 在此处完成构建项目服务 sdk 的卸载
    // Todo...
    let filePath = path.join(options.dest, "frameworks/runtime-src/Classes/AppDelegate.cpp");
    fs.exists(filePath) && projHelper.noteCodeLine(filePath, "#define SERVICE_AGORA 1", "//");
    if (options.platform === "android") {
      this.uninstallAndroid(options);
      utils.printToCreatorConsole("log", "Agora service uninstallation is complete!");
    }
  },

  parseNative(options, params) {
    let projectFilePath = path.join(options.dest, "project.json");
    if (fs.existsSync(projectFilePath))
      utils.parseProjectJson(projectFilePath, "org.cocos2dx.javascript.service.ServiceAgora", true);
    this.copyFiles(options);
    this.modifyAppDelegate(options);
    if (options.platform === "android") this.android(options);
    else if (options.platform === "ios") this.ios(options, params);
  },

  modifyAppDelegate(options) {
    var runtimePath = path.join(options.dest, "frameworks/runtime-src");
    let AppDelegatePath = path.join(runtimePath, "Classes/AppDelegate.cpp");

    if (!fs.existsSync(AppDelegatePath)) return;
    let contents = fs.readFileSync(AppDelegatePath, "utf8");
    if (contents.indexOf("SERVICE_AGORA") >= 0) {
      projHelper.replaceCodeSegment(AppDelegatePath, "//#define SERVICE_AGORA 1", "#define SERVICE_AGORA 1");
    } else {
      let includeAgora = `
#define SERVICE_AGORA 1
#if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID || CC_TARGET_PLATFORM == CC_PLATFORM_IOS) && SERVICE_AGORA
#include "agora/AgoraManager.h"
#endif
`;
      let registerAgora = `
#if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID || CC_TARGET_PLATFORM == CC_PLATFORM_IOS) && SERVICE_AGORA
    AgoraManager::getInstance()->registerJSBCallback();
#endif
      `;
      projHelper.insertCodeLine(AppDelegatePath, "USING_NS_CC", includeAgora, true);
      projHelper.insertCodeLine(AppDelegatePath, "se->start()", registerAgora, true);
    }
  },

  praseHTML() {
    const agoraHtml = `
<script src="https://cdn.agora.io/sdk/release/AgoraRTCSDK-3.1.2.js" charset="utf-8"></script>
`;
    projHelper.insertScriptToIndexHTML(agoraHtml);
  },

  copyFiles(options) {
    var isCreator23x = fs.existsSync(`${options.dest}/frameworks/runtime-src/proj.android-studio/jni/CocosAndroid.mk`);
    utils.printToCreatorConsole('info', isCreator23x);
    var runtimePath = path.join(options.dest, "frameworks/runtime-src");
    var list = [];
    list.push({
      src: __dirname + "/resources/js-binding/agora",
      dst: path.join(runtimePath, "Classes/agora")
    });
    if (options.platform === "android") {
      list.push({
        src: __dirname + "/resources/src/android/ServiceAgora.java",
        dst: path.join(runtimePath, "proj.android-studio/app/src/org/cocos2dx/javascript/service/ServiceAgora.java")
      });
      list.push({
        src: __dirname + "/resources/sdk/android/lib/agora-rtc-sdk.jar",
        dst: path.join(runtimePath, "proj.android-studio/app/libs/agora-rtc-sdk.jar")
      });
      list.push({
        src: __dirname + "/resources/sdk/android/agora",
        dst: path.join(runtimePath, isCreator23x ? "proj.android-studio/jni/agora" : "proj.android-studio/app/jni/agora")
      });
    } else if (options.platform === "ios") {
      list.push({
        src: __dirname + "/resources/sdk/ios/agora",
        dst: path.join(runtimePath, "proj.ios_mac/ios/agora")
      });
    }
    utils.copyServicePackages(list);
  },

  isInstall(options) {
    var isCreator23x = fs.existsSync(`${options.dest}/frameworks/runtime-src/proj.android-studio/jni/CocosAndroid.mk`);
    let filePath = path.join(options.dest, "frameworks/runtime-src/proj.android-studio", isCreator23x ? 'jni/CocosAndroid.mk' : 'app/jni/Android.mk');
    if (!fs.existsSync(filePath)) return;
    let contents = fs.readFileSync(filePath, "utf8");
    return contents.indexOf("USE_AGORA") >= 0;
  },

  android(options) {
    var isCreator23x = fs.existsSync(`${options.dest}/frameworks/runtime-src/proj.android-studio/jni/CocosAndroid.mk`);
    let importAgora = `
#======================================= 
#=========Agora import segment==========
ifeq ($(USE_AGORA), 1)
LOCAL_MODULE := agora-rtc
LOCAL_SRC_FILES := $(LOCAL_PATH)/agora/$(TARGET_ARCH_ABI)/libagora-rtc-sdk.so
LOCAL_EXPORT_C_INCLUDES := $(LOCAL_PATH)/agora/include
include $(PREBUILT_SHARED_LIBRARY)
endif
#=======================================
        `;
    let usingAgora = isCreator23x ? `
#======================================
#==========Agora use segment===========
ifeq ($(USE_AGORA),1)
#traverse all the directory and subdirectory
define walk
  $(wildcard $(1)) $(foreach e, $(wildcard $(1)/*), $(call walk, $(e)))
endef

#find all the file recursively under jni/

ALLFILES = $(call walk, $(LOCAL_PATH)/../../Classes/agora)
FILE_LIST := $(filter %.cpp, $(ALLFILES))

LOCAL_SRC_FILES += $(FILE_LIST:$(LOCAL_PATH)/%=%)
LOCAL_C_INCLUDES += ../../Classes/agora \\
        ../../Classes/agora/callback \\
        ../../Classes/agora/common \\
        ../../Classes/agora/include \\
        ../../Classes/agora/observer \\
        ../../Classes/agora/rtcChannel \\
        ../../Classes/agora/rtcEngine \\
        ../../Classes/agora/test
LOCAL_SHARED_LIBRARIES := agora-rtc
endif
#======================================
        ` : `
#======================================
#==========Agora use segment===========
ifeq ($(USE_AGORA),1)
#traverse all the directory and subdirectory
define walk
  $(wildcard $(1)) $(foreach e, $(wildcard $(1)/*), $(call walk, $(e)))
endef

#find all the file recursively under jni/

ALLFILES = $(call walk, $(LOCAL_PATH)/../../Classes/agora)
FILE_LIST := $(filter %.cpp, $(ALLFILES))

LOCAL_SRC_FILES += $(FILE_LIST:$(LOCAL_PATH)/%=%)
LOCAL_C_INCLUDES += ../../../Classes/agora \\
        ../../../Classes/agora/callback \\
        ../../../Classes/agora/common \\
        ../../../Classes/agora/include \\
        ../../../Classes/agora/observer \\
        ../../../Classes/agora/rtcChannel \\
        ../../../Classes/agora/rtcEngine \\
        ../../../Classes/agora/test
LOCAL_SHARED_LIBRARIES := agora-rtc
endif
#======================================
        `;
    let useAgora = `
USE_AGORA := 1
ifeq ($(USE_AGORA),1)
APP_CPPFLAGS += -DSERVICE_AGORA
endif\n\n
        `;
    var asPath = path.join(options.dest, "frameworks/runtime-src/proj.android-studio");
    let androidMKPath = path.join(asPath, isCreator23x ? 'jni/CocosAndroid.mk' : 'app/jni/Android.mk');
    let applicationMKPath = path.join(asPath, isCreator23x ? 'jni/CocosApplication.mk' : 'app/jni/Application.mk');
    let buildGradePath = path.join(asPath, "app/build.gradle");
    if (this.isInstall(options)) {
      projHelper.replaceCodeSegment(applicationMKPath, "#USE_AGORA := 1", "USE_AGORA := 1");
      projHelper.replaceCodeSegment(buildGradePath, "//implementation 'com.android.support:appcompat-v7:23.4.0'", "implementation 'com.android.support:appcompat-v7:23.4.0");
      return;
    }
    projHelper.Android.addUsesPermission("WRITE_EXTERNAL_STORAGE");
    projHelper.Android.addUsesPermission("RECORD_AUDIO");
    projHelper.Android.addUsesPermission("MODIFY_AUDIO_SETTINGS");
    projHelper.Android.addUsesPermission("BLUETOOTH");
    projHelper.insertCodeLine(androidMKPath, /CLEAR_VARS/, importAgora);
    projHelper.insertCodeLine(androidMKPath, /cocos2dx_static/, usingAgora, true);
    projHelper.insertCodeLine(applicationMKPath, /NDK_DEBUG/, useAgora, true);
    let dependenciesCode = `
dependencies {
    implementation 'com.android.support:appcompat-v7:23.4.0'`;
    projHelper.replaceCodeSegment(buildGradePath, "dependencies {", dependenciesCode);

    var proguradRules = `
# Proguard Agora for release
-keep class io.agora.** { *; }
-dontwarn io.agora.**
`;
    var proguradPath = options.dest + "/frameworks/runtime-src/proj.android-studio/app/proguard-rules.pro";
    if (!fs.existsSync(proguradPath)) return;
    let contents = fs.readFileSync(proguradPath, "utf8");
    if (contents.indexOf("Agora") >= 0) return;
    projHelper.appendCodeLine(proguradPath, proguradRules);

  },
  ios(options, params) {
    let targetName = `${options.projectName}-mobile`;
    projHelper.iOS.addToHeaderSearchPaths('"$(SRCROOT)/ios/agora/include"');
    projHelper.iOS.addToHeaderSearchPaths('"$(SRCROOT)/../Classes/agora"');
    projHelper.iOS.addToHeaderSearchPaths('"$(SRCROOT)/../Classes/agora/callback"');
    projHelper.iOS.addToHeaderSearchPaths('"$(SRCROOT)/../Classes/agora/common"');
    projHelper.iOS.addToHeaderSearchPaths('"$(SRCROOT)/../Classes/agora/include"');
    projHelper.iOS.addToHeaderSearchPaths('"$(SRCROOT)/../Classes/agora/observer"');
    projHelper.iOS.addToHeaderSearchPaths('"$(SRCROOT)/../Classes/agora/rtcChannel"');
    projHelper.iOS.addToHeaderSearchPaths('"$(SRCROOT)/../Classes/agora/rtcEngine"');
    projHelper.iOS.addToHeaderSearchPaths('"$(SRCROOT)/../Classes/agora/test"');
    projHelper.iOS.addFrameworkToTarget("ios/agora/AgoraRtcCryptoLoader.framework", targetName);
    projHelper.iOS.addFrameworkToTarget("ios/agora/AgoraRtcKit.framework", targetName);
    projHelper.iOS.addFrameworkToTarget("/System/Library/Frameworks/CFNetwork.framework", targetName);
    projHelper.iOS.addFrameworkToTarget("/System/Library/Frameworks/CoreMedia.framework", targetName);
    projHelper.iOS.addFrameworkToTarget("/System/Library/Frameworks/CoreVideo.framework", targetName);
    projHelper.iOS.addFrameworkToTarget("/System/Library/Frameworks/CoreTelephony.framework", targetName);
    projHelper.iOS.addFrameworkToTarget("/System/Library/Frameworks/SystemConfiguration.framework", targetName);
    projHelper.iOS.addFrameworkToTarget("/System/Library/Frameworks/VideoToolbox.framework", targetName);
    projHelper.iOS.addFrameworkToTarget("/usr/lib/libresolv.9.tbd", targetName);
    projHelper.iOS.addSourceFileToProject("agora/callback/rtcChannnelCallback/RtcChannelEventHandler.cpp", "Classes", targetName);
    projHelper.iOS.addSourceFileToProject("agora/callback/rtcEngineCallback/RtcEngineEventHandler.cpp", "Classes", targetName);
    projHelper.iOS.addSourceFileToProject("agora/deviceManager/audioDeviceManager/AudioPlaybackDeviceManager.cpp", "Classes", targetName);
    projHelper.iOS.addSourceFileToProject("agora/deviceManager/audioDeviceManager/AudioRecordingDeviceManager.cpp", "Classes", targetName);
    projHelper.iOS.addSourceFileToProject("agora/deviceManager/videoDeviceManager/VideoDeviceManager.cpp", "Classes", targetName);
    projHelper.iOS.addSourceFileToProject("agora/observer/metadata/metadata_observer.cpp", "Classes", targetName);
    projHelper.iOS.addSourceFileToProject("agora/rtcChannel/RtcChannelBridge.cpp", "Classes", targetName);
    projHelper.iOS.addSourceFileToProject("agora/rtcEngine/RtcEngineBridge.cpp", "Classes", targetName);
    projHelper.iOS.addSourceFileToProject("agora/jsb_agoraCreator.cpp", "Classes", targetName);
    projHelper.iOS.addSourceFileToProject("agora/AgoraManager.cpp", "Classes", targetName);
    projHelper.iOS.addSourceFileToProject("agora/Extensions.cpp", "Classes", targetName);
    projHelper.iOS.addSourceFileToProject("agora/test/LogJson.cpp", "Classes", targetName);
    params.requireTips = "请求麦克风权限";
    let infoStr = `<dict>
	<key>NSMicrophoneUsageDescription</key>
    <string>${params.requireTips}</string>`;
    let infoPlistPath = options.dest + "/frameworks/runtime-src/proj.ios_mac/ios/Info.plist";
    projHelper.replaceCodeSegment(infoPlistPath, "<dict>", infoStr);
  },
  uninstallAndroid(options) {
    var isCreator23x = fs.existsSync(`${options.dest}/frameworks/runtime-src/proj.android-studio/jni/CocosAndroid.mk`);
    var runtimePath = path.join(options.dest, "frameworks/runtime-src");
    var list = [];
    list.push({
      src: __dirname + "/resources/src/android/ServiceAgora.java",
      dst: path.join(runtimePath, "proj.android-studio/app/src/org/cocos2dx/javascript/service/ServiceAgora.java")
    });
    list.push({
      src: __dirname + "/resources/sdk/android/lib/agora-rtc-sdk.jar",
      dst: path.join(runtimePath, "proj.android-studio/app/libs/agora-rtc-sdk.jar")
    });
    list.push({
      src: __dirname + "/resources/sdk/android/agora",
      dst: path.join(runtimePath, isCreator23x ? "proj.android-studio/jni/agora" : "proj.android-studio/app/jni/agora")
    });
    utils.deleteServicePackages(list);
    let filePath = path.join(options.dest, "frameworks/runtime-src/proj.android-studio", isCreator23x ? 'jni/CocosApplication.mk' : 'app/jni/Application.mk');
    fs.existsSync(filePath) && projHelper.noteCodeLine(filePath, "USE_AGORA := 1", "#");

    let buildGradePath = path.join(options.dest, "frameworks/runtime-src/proj.android-studio/app/build.gradle");
    fs.existsSync(buildGradePath) && projHelper.noteCodeLine(buildGradePath, "implementation 'com.android.support:appcompat-v7:23.4.0'", "//");

  }
};
