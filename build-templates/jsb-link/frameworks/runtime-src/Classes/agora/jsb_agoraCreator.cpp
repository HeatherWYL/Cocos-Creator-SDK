//
//  jsb_agoraCreator.cpp
//  Created by on 20/8/3
//

#include "jsb_agoraCreator.h"

#if (CC_TARGET_PLATFORM == CC_PLATFORM_WINRT || CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID || CC_TARGET_PLATFORM == CC_PLATFORM_IOS || CC_TARGET_PLATFORM == CC_PLATFORM_MAC || CC_TARGET_PLATFORM == CC_PLATFORM_WIN32)

#include "scripting/js-bindings/manual/jsb_conversions.hpp"
#include "scripting/js-bindings/manual/jsb_global.h"
#include "cocos2d.h"
#include "platform/CCApplication.h"
#include "base/CCScheduler.h"

#include <cstddef>
#include <cstdio>
#include <cstdarg>

#include <string>
#include <vector>

#if defined(_WIN32)
#define WIN32_LEAN_AND_MEAN
#include <windows.h>
#define AGORA_CALL __cdecl
#if defined(AGORARTC_EXPORT)
#define AGORA_API extern "C" __declspec(dllexport)
#else
#define AGORA_API extern "C" __declspec(dllimport)
#endif
#elif defined(__APPLE__)
#define AGORA_API __attribute__((visibility("default"))) extern "C"
#define AGORA_CALL
#elif defined(__ANDROID__) || defined(__linux__) || defined(__linux)
#define AGORA_API extern "C" __attribute__((visibility("default")))
#define AGORA_CALL
#else
#define AGORA_API extern "C"
#define AGORA_CALL
#endif

#define MAX_NUM 17

#if defined(__APPLE__)

#include <AgoraRtcKit/IAgoraRtcEngine.h>
#include "IAgoraRtcEngine2.h"

#elif defined(__ANDROID__)

#include "IAgoraRtcEngine.h"
#include "IAgoraRtcEngine2.h"
#include <android/log.h>

#define LOG_TAG "android-debug"
#define LOGD(...) __android_log_print(ANDROID_LOG_DEBUG,LOG_TAG,__VA_ARGS__)

#endif

#include <cstring>

using namespace cocos2d;
using namespace agora::rtc;

class CagoraCreatorJsWrapper;

CagoraCreatorJsWrapper *g_SingleInstance;

se::Class *js_cocos2dx_agoraCreator_class = nullptr;

class CagoraCreatorJsWrapper : public IRtcEngineEventHandler {
public:
    CagoraCreatorJsWrapper();

    ~CagoraCreatorJsWrapper();

    void onWarning(int warn, const char *msg) override;

    void onError(int err, const char *msg) override;

    void onJoinChannelSuccess(const char *channel, uid_t uid, int elapsed) override;

    void onRejoinChannelSuccess(const char *channel, uid_t uid, int elapsed) override;

    void onLeaveChannel(const RtcStats &stats) override;

    void onClientRoleChanged(CLIENT_ROLE_TYPE oldRole, CLIENT_ROLE_TYPE newRole) override;

    void onUserJoined(uid_t uid, int elapsed) override;

    void onUserOffline(uid_t uid, USER_OFFLINE_REASON_TYPE reason) override;

    void onLastmileQuality(int quality) override;

//    void onLastmileProbeResult(const LastmileProbeResult &result) override;

    void onConnectionInterrupted() override;

    void onConnectionLost() override;

    void onConnectionBanned() override;

    void onApiCallExecuted(int err, const char *api, const char *result) override;

    void onRequestToken() override;

//    void onTokenPrivilegeWillExpire(const char *token) override;

    void
    onAudioQuality(uid_t uid, int quality, unsigned short delay, unsigned short lost) override;

    void onRtcStats(const RtcStats &stats) override;

    void onNetworkQuality(uid_t uid, int txQuality, int rxQuality) override;

//    void onLocalVideoStats(const LocalVideoStats &stats) override;
//
//    void onRemoteVideoStats(const RemoteVideoStats &stats) override;
//
//    void onLocalAudioStats(const LocalAudioStats &stats) override;
//
//    void onRemoteAudioStats(const RemoteAudioStats &stats) override;
//
//    void onLocalAudioStateChanged(LOCAL_AUDIO_STREAM_STATE state,
//                                  LOCAL_AUDIO_STREAM_ERROR error) override;
//
//    void
//    onRemoteAudioStateChanged(uid_t uid, REMOTE_AUDIO_STATE state, REMOTE_AUDIO_STATE_REASON reason,
//                              int elapsed) override;

    void onAudioVolumeIndication(const AudioVolumeInfo *speakers, unsigned int speakerNumber,
                                 int totalVolume) override;

    void onActiveSpeaker(uid_t uid) override;

//    void onVideoStopped() override;
//
//    void onFirstLocalVideoFrame(int width, int height, int elapsed) override;
//
//    void onFirstRemoteVideoDecoded(uid_t uid, int width, int height, int elapsed) override;
//
//    void onFirstRemoteVideoFrame(uid_t uid, int width, int height, int elapsed) override;

    void onUserMuteAudio(uid_t uid, bool muted) override;

//    void onUserMuteVideo(uid_t uid, bool muted) override;
//
//    void onUserEnableVideo(uid_t uid, bool enabled) override;

    void onAudioDeviceStateChanged(const char *deviceId, int deviceType, int deviceState) override;

    void onAudioDeviceVolumeChanged(MEDIA_DEVICE_TYPE deviceType, int volume, bool muted) override;

//    void onCameraReady() override;
//
//    void onCameraFocusAreaChanged(int x, int y, int width, int height) override;
//
//    void onFacePositionChanged(int imageWidth, int imageHeight, Rectangle *vecRectangle,
//                               int *vecDistance, int numFaces) override;
//
//    void onCameraExposureAreaChanged(int x, int y, int width, int height) override;

    void onAudioMixingFinished() override;

//    void onAudioMixingStateChanged(AUDIO_MIXING_STATE_TYPE state,
//                                   AUDIO_MIXING_ERROR_TYPE errorCode) override;

    void onRemoteAudioMixingBegin() override;

    void onRemoteAudioMixingEnd() override;

    void onAudioEffectFinished(int soundId) override;

//    void onFirstRemoteAudioDecoded(uid_t uid, int elapsed) override;
//
//    void onVideoDeviceStateChanged(const char *deviceId, int deviceType, int deviceState) override;
//
//    void onLocalVideoStateChanged(LOCAL_VIDEO_STREAM_STATE localVideoState,
//                                  LOCAL_VIDEO_STREAM_ERROR error) override;
//
//    void onVideoSizeChanged(uid_t uid, int width, int height, int rotation) override;
//
//    void
//    onRemoteVideoStateChanged(uid_t uid, REMOTE_VIDEO_STATE state, REMOTE_VIDEO_STATE_REASON reason,
//                              int elapsed) override;
//
//    void onUserEnableLocalVideo(uid_t uid, bool enabled) override;

    void onStreamMessage(uid_t uid, int streamId, const char *data, size_t length) override;

    void onStreamMessageError(uid_t uid, int streamId, int code, int missed, int cached) override;

    void onMediaEngineLoadSuccess() override;

    void onMediaEngineStartCallSuccess() override;

//    void onChannelMediaRelayStateChanged(CHANNEL_MEDIA_RELAY_STATE state,
//                                         CHANNEL_MEDIA_RELAY_ERROR code) override;
//
//    void onChannelMediaRelayEvent(CHANNEL_MEDIA_RELAY_EVENT code) override;

    void onFirstLocalAudioFrame(int elapsed) override;

    void onFirstRemoteAudioFrame(uid_t uid, int elapsed) override;

//    void onRtmpStreamingStateChanged(const char *url, RTMP_STREAM_PUBLISH_STATE state,
//                                     RTMP_STREAM_PUBLISH_ERROR errCode) override;

    void onStreamPublished(const char *url, int error) override;

    void onStreamUnpublished(const char *url) override;

    void onTranscodingUpdated() override;

    void onStreamInjectedStatus(const char *url, uid_t uid, int status) override;

    void onAudioRouteChanged(AUDIO_ROUTE_TYPE routing) override;


    void onRemoteAudioTransportStats(uid_t uid, unsigned short delay, unsigned short lost,
                                     unsigned short rxKBitRate) override;

//    void onRemoteVideoTransportStats(uid_t uid, unsigned short delay, unsigned short lost,
//                                     unsigned short rxKBitRate) override;

    void onMicrophoneEnabled(bool enabled) override;

//    void onConnectionStateChanged(CONNECTION_STATE_TYPE state,
//                                  CONNECTION_CHANGED_REASON_TYPE reason) override;
//
//    void onNetworkTypeChanged(NETWORK_TYPE type) override;
//
//    void onLocalUserRegistered(uid_t uid, const char *userAccount) override;
//
//    void onUserInfoUpdated(uid_t uid, const UserInfo &info) override;

public:
    se::Object *_refObj = nullptr;
};

CagoraCreatorJsWrapper::CagoraCreatorJsWrapper() = default;

CagoraCreatorJsWrapper::~CagoraCreatorJsWrapper() = default;

void CagoraCreatorJsWrapper::onJoinChannelSuccess(const char *channel, uid_t uid, int elapsed) {
    CCLOG("[Agora]:onJoinChannelSuccess %s, %u, %d", channel, uid, elapsed);

    std::string channelName = channel;

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onJoinChannelSuccess", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;
            args.push_back(se::Value(channelName));
            args.push_back(se::Value(uid));
            args.push_back(se::Value(elapsed));

            func.toObject()->call(args, _refObj);
        }
    });
}

void CagoraCreatorJsWrapper::onLeaveChannel(const RtcStats &stats) {
    CCLOG("[Agora]:onLeaveChannel %d, %d", stats.txBytes, stats.rxBytes);

    RtcStats rtcStats = stats;

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onLeaveChannel", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;
            se::HandleObject obj(se::Object::createPlainObject());
            obj->setProperty("duration", se::Value(rtcStats.duration));
            obj->setProperty("txBytes", se::Value(rtcStats.txBytes));
            obj->setProperty("rxBytes", se::Value(rtcStats.rxBytes));
            obj->setProperty("txAudioBytes", se::Value(rtcStats.txAudioBytes));
            obj->setProperty("rxAudioBytes", se::Value(rtcStats.rxAudioBytes));
            obj->setProperty("txKBitRate", se::Value(rtcStats.txKBitRate));
            obj->setProperty("rxKBitRate", se::Value(rtcStats.rxKBitRate));
            obj->setProperty("txAudioKBitRate", se::Value(rtcStats.txAudioKBitRate));
            obj->setProperty("rxAudioKBitRate", se::Value(rtcStats.rxAudioKBitRate));
            obj->setProperty("cpuTotalUsage", se::Value(rtcStats.cpuTotalUsage));
            obj->setProperty("cpuAppUsage", se::Value(rtcStats.cpuAppUsage));
            obj->setProperty("lastmileDelay", se::Value(rtcStats.lastmileDelay));
            obj->setProperty("txPacketLossRate", se::Value(rtcStats.txPacketLossRate));
            obj->setProperty("rxPacketLossRate", se::Value(rtcStats.rxPacketLossRate));
            obj->setProperty("userCount", se::Value(rtcStats.userCount));
            obj->setProperty("cpuAppUsage", se::Value(rtcStats.cpuAppUsage));
            obj->setProperty("cpuTotalUsage", se::Value(rtcStats.cpuTotalUsage));
            obj->setProperty("gatewayRtt", se::Value(rtcStats.gatewayRtt));
            obj->setProperty("memoryAppUsageRatio", se::Value(rtcStats.memoryAppUsageRatio));
            obj->setProperty("memoryTotalUsageRatio", se::Value(rtcStats.memoryTotalUsageRatio));
            obj->setProperty("memoryAppUsageInKbytes", se::Value(rtcStats.memoryAppUsageInKbytes));
            args.push_back(se::Value(obj));

            func.toObject()->call(args, _refObj);
        }
    });
}

void
CagoraCreatorJsWrapper::onRejoinChannelSuccess(const char *channel, uid_t uid, int elapsed) {
    CCLOG("[Agora]:onRejoinChannelSuccess %s, %u, %d", channel, uid, elapsed);

    std::string channelName = channel;

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onRejoinChannelSuccess", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;
            args.push_back(se::Value(channelName));
            args.push_back(se::Value(uid));
            args.push_back(se::Value(elapsed));

            func.toObject()->call(args, _refObj);
        }
    });
}

void CagoraCreatorJsWrapper::onWarning(int warn, const char *msg) {
    CCLOG("[Agora]:onWarning %d, %s", warn, msg);

    std::string strMsg = msg ?: "";

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onWarning", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;
            args.push_back(se::Value(warn));
            args.push_back(se::Value(strMsg));

            func.toObject()->call(args, _refObj);
        }
    });
}

void CagoraCreatorJsWrapper::onError(int err, const char *msg) {
    CCLOG("[Agora]:onError %d, %s", err, msg);

    std::string strMsg = msg ?: "";

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onError", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;
            args.push_back(se::Value((int) err));
            args.push_back(se::Value(strMsg));

            func.toObject()->call(args, _refObj);
        }
    });
}

void CagoraCreatorJsWrapper::onAudioQuality(uid_t uid, int quality, unsigned short delay,
                                            unsigned short lost) {
    CCLOG("[Agora]:onAudioQuality %u, %d", uid, quality);

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onAudioQuality", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;
            args.push_back(se::Value(uid));
            args.push_back(se::Value(quality));
            args.push_back(se::Value(delay));
            args.push_back(se::Value(lost));

            func.toObject()->call(args, _refObj);
        }
    });
}

void CagoraCreatorJsWrapper::onAudioVolumeIndication(const AudioVolumeInfo *speakers,
                                                     unsigned int speakerNumber, int totalVolume) {
    CCLOG("[Agora]:onAudioVolumeIndication %d, %d", speakerNumber, totalVolume);

    if (!speakerNumber) return;

    AudioVolumeInfo speakersArr[MAX_NUM] = {0,};
    memcpy(speakersArr, speakers, speakerNumber * sizeof(AudioVolumeInfo));

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onAudioVolumeIndication", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;
            se::HandleObject arr(se::Object::createArrayObject(speakerNumber));
            for (uint32_t i = 0; i < speakerNumber; ++i) {
                se::HandleObject obj(se::Object::createPlainObject());
                obj->setProperty("uid", se::Value(speakersArr[i].uid));
                obj->setProperty("volume", se::Value(speakersArr[i].volume));
                obj->setProperty("vad", se::Value(speakersArr[i].vad));

                arr->setArrayElement(i, se::Value(obj));
            }
            args.push_back(se::Value(arr));
            args.push_back(se::Value(speakerNumber));
            args.push_back(se::Value(totalVolume));

            func.toObject()->call(args, _refObj);
        }
    });
}

void CagoraCreatorJsWrapper::onRtcStats(const RtcStats &stats) {
    CCLOG("[Agora]:onRtcStats %d, %d", stats.txBytes, stats.rxBytes);

    RtcStats rtcStats = stats;

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onRtcStats", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;
            se::HandleObject obj(se::Object::createPlainObject());
            obj->setProperty("duration", se::Value(rtcStats.duration));
            obj->setProperty("txBytes", se::Value(rtcStats.txBytes));
            obj->setProperty("rxBytes", se::Value(rtcStats.rxBytes));
            obj->setProperty("txAudioBytes", se::Value(rtcStats.txAudioBytes));
            obj->setProperty("rxAudioBytes", se::Value(rtcStats.rxAudioBytes));
            obj->setProperty("txKBitRate", se::Value(rtcStats.txKBitRate));
            obj->setProperty("rxKBitRate", se::Value(rtcStats.rxKBitRate));
            obj->setProperty("txAudioKBitRate", se::Value(rtcStats.txAudioKBitRate));
            obj->setProperty("rxAudioKBitRate", se::Value(rtcStats.rxAudioKBitRate));
            obj->setProperty("cpuTotalUsage", se::Value(rtcStats.cpuTotalUsage));
            obj->setProperty("cpuAppUsage", se::Value(rtcStats.cpuAppUsage));
            obj->setProperty("lastmileDelay", se::Value(rtcStats.lastmileDelay));
            obj->setProperty("txPacketLossRate", se::Value(rtcStats.txPacketLossRate));
            obj->setProperty("rxPacketLossRate", se::Value(rtcStats.rxPacketLossRate));
            obj->setProperty("userCount", se::Value(rtcStats.userCount));
            obj->setProperty("cpuAppUsage", se::Value(rtcStats.cpuAppUsage));
            obj->setProperty("cpuTotalUsage", se::Value(rtcStats.cpuTotalUsage));
            obj->setProperty("gatewayRtt", se::Value(rtcStats.gatewayRtt));
            obj->setProperty("memoryAppUsageRatio", se::Value(rtcStats.memoryAppUsageRatio));
            obj->setProperty("memoryTotalUsageRatio", se::Value(rtcStats.memoryTotalUsageRatio));
            obj->setProperty("memoryAppUsageInKbytes", se::Value(rtcStats.memoryAppUsageInKbytes));
            args.push_back(se::Value(obj));

            func.toObject()->call(args, _refObj);
        }
    });
}

void CagoraCreatorJsWrapper::onAudioDeviceStateChanged(const char *deviceId, int deviceType,
                                                       int deviceState) {
    CCLOG("[Agora]:onAudioDeviceStateChanged %s, %d", deviceId, deviceType);

    if (!deviceId) return;

    std::string strDeviceId = deviceId;

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onAudioDeviceStateChanged", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;
            args.push_back(se::Value(deviceType));
            args.push_back(se::Value(deviceState));
            args.push_back(se::Value(strDeviceId));

            func.toObject()->call(args, _refObj);
        }
    });
}

void CagoraCreatorJsWrapper::onAudioMixingFinished() {
    CCLOG("[Agora]:onAudioMixingFinished");

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onAudioMixingFinished", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;

            func.toObject()->call(args, _refObj);
        }
    });
}

void CagoraCreatorJsWrapper::onRemoteAudioMixingBegin() {
    CCLOG("[Agora]:onRemoteAudioMixingBegin");

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onRemoteAudioMixingBegin", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;

            func.toObject()->call(args, _refObj);
        }
    });
}

void CagoraCreatorJsWrapper::onRemoteAudioMixingEnd() {
    CCLOG("[Agora]:onRemoteAudioMixingEnd");

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onRemoteAudioMixingEnd", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;

            func.toObject()->call(args, _refObj);
        }
    });
}

void CagoraCreatorJsWrapper::onAudioEffectFinished(int soundId) {
    CCLOG("[Agora]:onAudioEffectFinished");

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onAudioEffectFinished", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;
            args.push_back(se::Value(soundId));

            func.toObject()->call(args, _refObj);
        }
    });
}

void CagoraCreatorJsWrapper::onNetworkQuality(uid_t uid, int txQuality, int rxQuality) {
    CCLOG("[Agora]:onNetworkQuality %u, %d, %d", uid, txQuality, rxQuality);

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onNetworkQuality", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;
            args.push_back(se::Value(uid));
            args.push_back(se::Value(txQuality));
            args.push_back(se::Value(rxQuality));

            func.toObject()->call(args, _refObj);
        }
    });
}

void CagoraCreatorJsWrapper::onLastmileQuality(int quality) {
    CCLOG("[Agora]:onLastmileQuality %d", quality);

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onLastmileQuality", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;
            args.push_back(se::Value(quality));

            func.toObject()->call(args, _refObj);
        }
    });
}

void CagoraCreatorJsWrapper::onUserJoined(uid_t uid, int elapsed) {
    CCLOG("[Agora]:onUserJoined %u", uid);

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onUserJoined", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;
            args.push_back(se::Value(uid));
            args.push_back(se::Value(elapsed));

            func.toObject()->call(args, _refObj);
        }
    });
}

void CagoraCreatorJsWrapper::onUserOffline(uid_t uid, USER_OFFLINE_REASON_TYPE reason) {
    CCLOG("[Agora]:onUserOffline %u", uid);

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onUserOffline", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;
            args.push_back(se::Value(uid));
            args.push_back(se::Value(reason));

            func.toObject()->call(args, _refObj);
        }
    });
}

void CagoraCreatorJsWrapper::onUserMuteAudio(uid_t uid, bool muted) {
    CCLOG("[Agora]:onUserMuteAudio %u, %d", uid, muted);

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onUserMuteAudio", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;
            args.push_back(se::Value(uid));
            args.push_back(se::Value(muted));

            func.toObject()->call(args, _refObj);
        }
    });
}

void CagoraCreatorJsWrapper::onApiCallExecuted(int err, const char *api, const char *result) {
    CCLOG("[Agora]:onApiCallExecuted : %d, %s, %s", err, api, result);

    std::string apiMsg = api;
    std::string resultMsg = result;

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onApiCallExecuted", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;
            args.push_back(se::Value(err));
            args.push_back(se::Value(apiMsg));
            args.push_back(se::Value(resultMsg));

            func.toObject()->call(args, _refObj);
        }
    });
}

void CagoraCreatorJsWrapper::onConnectionLost() {
    CCLOG("[Agora]:onConnectionLost");

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onConnectionLost", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;

            func.toObject()->call(args, _refObj);
        }
    });
}

void CagoraCreatorJsWrapper::onConnectionInterrupted() {
    CCLOG("[Agora]:onConnectionInterrupted");

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onConnectionInterrupted", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;

            func.toObject()->call(args, _refObj);
        }
    });
}

void CagoraCreatorJsWrapper::onConnectionBanned() {
    CCLOG("[Agora]:onConnectionBanned");

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onConnectionBanned", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;

            func.toObject()->call(args, _refObj);
        }
    });
}

void CagoraCreatorJsWrapper::onStreamMessage(uid_t uid, int streamId, const char *data,
                                             size_t length) {}

void CagoraCreatorJsWrapper::onStreamMessageError(uid_t uid, int streamId, int code, int missed,
                                                  int cached) {}

void CagoraCreatorJsWrapper::onMediaEngineLoadSuccess() {}

void CagoraCreatorJsWrapper::onMediaEngineStartCallSuccess() {}

void CagoraCreatorJsWrapper::onRequestToken() {
    CCLOG("[Agora]:onRequestToken");

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onRequestToken", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;

            func.toObject()->call(args, _refObj);
        }
    });
}

void CagoraCreatorJsWrapper::onFirstLocalAudioFrame(int elapsed) {
    CCLOG("[Agora]:onFirstLocalAudioFrame : %d", elapsed);

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onFirstLocalAudioFrame", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;
            args.push_back(se::Value(elapsed));

            func.toObject()->call(args, _refObj);
        }
    });
}

void CagoraCreatorJsWrapper::onFirstRemoteAudioFrame(uid_t uid, int elapsed) {
    CCLOG("[Agora]:onFirstRemoteAudioFrame : %u, %d", uid, elapsed);

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onFirstRemoteAudioFrame", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;
            args.push_back(se::Value(uid));
            args.push_back(se::Value(elapsed));

            func.toObject()->call(args, _refObj);
        }
    });
}

void CagoraCreatorJsWrapper::onActiveSpeaker(uid_t uid) {
    CCLOG("[Agora]:onActiveSpeaker : %u", uid);

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onActiveSpeaker", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;
            args.push_back(se::Value(uid));

            func.toObject()->call(args, _refObj);
        }
    });
}

void
CagoraCreatorJsWrapper::onClientRoleChanged(CLIENT_ROLE_TYPE oldRole, CLIENT_ROLE_TYPE newRole) {
    CCLOG("[Agora]:onClientRoleChanged : %d, %d", oldRole, newRole);

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onClientRoleChanged", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;
            args.push_back(se::Value(oldRole));
            args.push_back(se::Value(newRole));

            func.toObject()->call(args, _refObj);
        }
    });
}

// Only in Windows or Mac
void CagoraCreatorJsWrapper::onAudioDeviceVolumeChanged(MEDIA_DEVICE_TYPE deviceType, int volume,
                                                        bool muted) {
    CCLOG("[Agora]:onAudioDeviceVolumeChanged : %d, %d", deviceType, volume);

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onAudioDeviceVolumeChanged", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;
            args.push_back(se::Value(deviceType));
            args.push_back(se::Value(volume));
            args.push_back(se::Value(muted));

            func.toObject()->call(args, _refObj);
        }
    });
}

void CagoraCreatorJsWrapper::onStreamPublished(const char *url, int error) {}

void CagoraCreatorJsWrapper::onStreamUnpublished(const char *url) {}

void CagoraCreatorJsWrapper::onTranscodingUpdated() {}

void CagoraCreatorJsWrapper::onStreamInjectedStatus(const char *url, uid_t uid, int status) {}

void CagoraCreatorJsWrapper::onAudioRouteChanged(AUDIO_ROUTE_TYPE routing) {
    CCLOG("[Agora]:onAudioRoutingChanged : %d", routing);

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onAudioRoutingChanged", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;
            args.push_back(se::Value(routing));

            func.toObject()->call(args, _refObj);
        }
    });
}

void CagoraCreatorJsWrapper::onRemoteAudioTransportStats(
        uid_t uid, unsigned short delay, unsigned short lost,
        unsigned short rxKBitRate) {}

void CagoraCreatorJsWrapper::onMicrophoneEnabled(bool enabled) {
    CCLOG("[Agora]:onMicrophoneEnabled,enabled : %d", enabled);

    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]() {
        se::Value func;
        if (_refObj->getProperty("onMicrophoneEnabled", &func)) {
            se::ScriptEngine::getInstance()->clearException();
            se::AutoHandleScope hs;

            se::ValueArray args;
            args.push_back(se::Value(enabled));

            func.toObject()->call(args, _refObj);
        }
    });
}

static bool js_cocos2dx_extension_agoraCreator_initialize(se::State &s) {
    CCLOG("[Agora] initialize");

    auto *cobj = (IRtcEngine3 *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_initialize : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 2) {
        std::string appId;
        ok &= seval_to_std_string(args[0], &appId);

        int areaCode;
        ok &= seval_to_int32(args[1], &areaCode);

        RtcEngineContext ctx;
        ctx.eventHandler = g_SingleInstance;
        ctx.appId = appId.c_str();
        ctx.areaCode = areaCode;

        int ret = cobj->initialize(ctx);
        cobj->setAppType(APP_TYPE_COCOS);
        cobj->enableWebSdkInteroperability(true);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_initialize : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 2);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_initialize)

static bool js_cocos2dx_extension_agoraCreator_joinChannel(se::State &s) {
    CCLOG("[Agora] joinChannel");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_joinChannel : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 4) {
        std::string token;
        ok &= seval_to_std_string(args[0], &token);

        std::string channelId;
        ok &= seval_to_std_string(args[1], &channelId);

        std::string info;
        ok &= seval_to_std_string(args[2], &info);

        uint32_t uid;
        ok &= seval_to_uint32(args[3], &uid);

        int ret = cobj->joinChannel(token.c_str(), channelId.c_str(), info.c_str(), uid);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_joinChannel : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 4);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_joinChannel)

static bool js_cocos2dx_extension_agoraCreator_leaveChannel(se::State &s) {
    CCLOG("[Agora] leaveChannel");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_leaveChannel: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        int ret = cobj->leaveChannel();
        int32_to_seval(ret, &s.rval());
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 0);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_leaveChannel)

static bool js_cocos2dx_extension_agoraCreator_getVersion(se::State &s) {
    CCLOG("[Agora] getVersion");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_getVersion: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        int build = 0;
        const char *buildver = cobj->getVersion(&build);
        std::string strTemp(buildver);
        std_string_to_seval(strTemp, &s.rval());
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 0);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_getVersion)

static bool js_cocos2dx_extension_agoraCreator_getErrorDescription(se::State &s) {
    CCLOG("[Agora] getErrorDescription");

    auto cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_getErrorDescription: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        int code = 0;
        ok &= seval_to_int32(args[0], &code);

        const char *description = cobj->getErrorDescription(code);
        std::string strTemp(description);
        ok &= std_string_to_seval(strTemp, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_getErrorDescription : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_getErrorDescription)

static bool js_cocos2dx_extension_agoraCreator_setLogFilter(se::State &s) {
    CCLOG("[Agora] setLogFilter");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_setLogFilter: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        int filter = 0;
        ok &= seval_to_int32(args[0], &filter);

        int ret = cobj->setLogFilter(filter);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_setLogFilter : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_setLogFilter)

static bool js_cocos2dx_extension_agoraCreator_setLogFile(se::State &s) {
    CCLOG("[Agora] setLogFile");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_setLogFile: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::string strVal;
        ok &= seval_to_std_string(args[0], &strVal);

        int ret = cobj->setLogFile(strVal.c_str());
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_setLogFile : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_setLogFile)

static bool js_cocos2dx_extension_agoraCreator_renewToken(se::State &s) {
    CCLOG("[Agora] renewToken");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_renewToken : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::string token;
        ok &= seval_to_std_string(args[0], &token);

        int ret = cobj->renewToken(token.c_str());
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_renewToken : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_renewToken)

static bool js_cocos2dx_extension_agoraCreator_setChannelProfile(se::State &s) {
    CCLOG("Agora setChannelProfile");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_setChannelProfile: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        int profile = 0;
        ok &= seval_to_int32(args[0], &profile);

        int ret = cobj->setChannelProfile((agora::rtc::CHANNEL_PROFILE_TYPE) profile);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_setChannelProfile : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_setChannelProfile)

static bool js_cocos2dx_extension_agoraCreator_setClientRole(se::State &s) {
    CCLOG("[Agora] setClientRole");
    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_setClientRole: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        int role = 0;
        ok &= seval_to_int32(args[0], &role);

        int ret = cobj->setClientRole((agora::rtc::CLIENT_ROLE_TYPE) role);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_setClientRole : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_setClientRole)

static bool js_cocos2dx_extension_agoraCreator_enableLocalAudio(se::State &s) {
    CCLOG("[Agora] enableLocalAudio");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_enableLocalAudio: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        bool bVal;
        ok &= seval_to_boolean(args[0], &bVal);

        int ret = cobj->enableLocalAudio(bVal);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_enableLocalAudio : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_enableLocalAudio)

static bool js_cocos2dx_extension_agoraCreator_setAudioProfile(se::State &s) {
    CCLOG("[Agora] setAudioProfile");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_setAudioProfile: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 2) {
        int profile = 0;
        ok &= seval_to_int32(args[0], &profile);

        int scenario = 0;
        ok &= seval_to_int32(args[1], &scenario);

        int ret = cobj->setAudioProfile((agora::rtc::AUDIO_PROFILE_TYPE) profile,
                                        (agora::rtc::AUDIO_SCENARIO_TYPE) scenario);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_setAudioProfile : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 2);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_setAudioProfile)

static bool js_cocos2dx_extension_agoraCreator_setDefaultMuteAllRemoteAudioStreams(se::State &s) {
    CCLOG("[Agora] setDefaultMuteAllRemoteAudioStreams");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_setDefaultMuteAllRemoteAudioStreams: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        bool bVal;
        ok &= seval_to_boolean(args[0], &bVal);

        int ret = cobj->setDefaultMuteAllRemoteAudioStreams(bVal);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_setDefaultMuteAllRemoteAudioStreams : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_setDefaultMuteAllRemoteAudioStreams)

static bool js_cocos2dx_extension_agoraCreator_setPlaybackDeviceVolume(se::State &s) {
    CCLOG("[Agora] setPlaybackDeviceVolume");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_setPlaybackDeviceVolume: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        int volume = 0;
        ok &= seval_to_int32(args[0], &volume);

        int ret = RtcEngineParameters(cobj).setPlaybackDeviceVolume(volume);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_setPlaybackDeviceVolume : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_setPlaybackDeviceVolume)

static bool js_cocos2dx_extension_agoraCreator_enableAudioVolumeIndication(se::State &s) {
    CCLOG("[Agora] enableAudioVolumeIndication");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_enableAudioVolumeIndication: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 3) {
        int interval = 0;
        ok &= seval_to_int32(args[0], &interval);

        int smooth = 0;
        ok &= seval_to_int32(args[1], &smooth);

        bool report_vad;
        ok &= seval_to_boolean(args[2], &report_vad);

        int ret = cobj->enableAudioVolumeIndication(interval, smooth, report_vad);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_enableAudioVolumeIndication : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 3);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_enableAudioVolumeIndication)

static bool js_cocos2dx_extension_agoraCreator_startAudioRecording(se::State &s) {
    CCLOG("[Agora] startAudioRecording");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_startAudioRecording : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 2) {
        std::string filePath;
        ok &= seval_to_std_string(args[0], &filePath);

        uint32_t quality;
        ok &= seval_to_uint32(args[1], &quality);

        int ret = cobj->startAudioRecording(filePath.c_str(),
                                            (agora::rtc::AUDIO_RECORDING_QUALITY_TYPE) quality);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_startAudioRecording : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 2);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_startAudioRecording)

static bool js_cocos2dx_extension_agoraCreator_stopAudioRecording(se::State &s) {
    CCLOG("[Agora] stopAudioRecording");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_stopAudioRecording: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        int ret = cobj->stopAudioRecording();
        int32_to_seval(ret, &s.rval());
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 0);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_stopAudioRecording)

static bool js_cocos2dx_extension_agoraCreator_startAudioMixing(se::State &s) {
    CCLOG("[Agora] startAudioMixing");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_startAudioMixing : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 4) {
        std::string filePath;
        ok &= seval_to_std_string(args[0], &filePath);

        bool loopback = true;
        ok &= seval_to_boolean(args[1], &loopback);

        bool replace = true;
        ok &= seval_to_boolean(args[2], &replace);

        int cycle;
        ok &= seval_to_int32(args[3], &cycle);

        int ret = cobj->startAudioMixing(filePath.c_str(), loopback, replace, cycle);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_startAudioMixing : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 4);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_startAudioMixing)

static bool js_cocos2dx_extension_agoraCreator_stopAudioMixing(se::State &s) {
    CCLOG("[Agora] stopAudioMixing");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_stopAudioMixing: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        int ret = cobj->stopAudioMixing();
        int32_to_seval(ret, &s.rval());
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 0);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_stopAudioMixing)

static bool js_cocos2dx_extension_agoraCreator_pauseAudioMixing(se::State &s) {
    CCLOG("[Agora] pauseAudioMixing");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_pauseAudioMixing: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        int ret = cobj->pauseAudioMixing();
        int32_to_seval(ret, &s.rval());
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 0);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_pauseAudioMixing)

static bool js_cocos2dx_extension_agoraCreator_resumeAudioMixing(se::State &s) {
    CCLOG("[Agora] resumeAudioMixing");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_resumeAudioMixing: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        int ret = cobj->resumeAudioMixing();
        int32_to_seval(ret, &s.rval());
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 0);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_resumeAudioMixing)

static bool js_cocos2dx_extension_agoraCreator_adjustAudioMixingVolume(se::State &s) {
    CCLOG("[Agora] adjustAudioMixingVolume");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_adjustAudioMixingVolume : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        int volume;
        ok &= seval_to_int32(args[0], &volume);

        int ret = cobj->adjustAudioMixingVolume(volume);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_adjustAudioMixingVolume : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_adjustAudioMixingVolume)

static bool js_cocos2dx_extension_agoraCreator_getAudioMixingDuration(se::State &s) {
    CCLOG("[Agora] getAudioMixingDuration");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_getAudioMixingDuration: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        int ret = cobj->getAudioMixingDuration();
        int32_to_seval(ret, &s.rval());
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 0);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_getAudioMixingDuration)

static bool js_cocos2dx_extension_agoraCreator_getAudioMixingCurrentPosition(se::State &s) {
    CCLOG("[Agora] getAudioMixingCurrentPosition");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_getAudioMixingCurrentPosition: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        int ret = cobj->getAudioMixingCurrentPosition();
        int32_to_seval(ret, &s.rval());
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 0);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_getAudioMixingCurrentPosition)

static bool js_cocos2dx_extension_agoraCreator_setAudioMixingPosition(se::State &s) {
    CCLOG("[Agora] setAudioMixingPosition");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_setAudioMixingPosition : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        int pos;
        ok &= seval_to_int32(args[0], &pos);

        int ret = cobj->setAudioMixingPosition(pos);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_setAudioMixingPosition : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_setAudioMixingPosition)

static bool js_cocos2dx_extension_agoraCreator_getEffectsVolume(se::State &s) {
    CCLOG("[Agora] getEffectsVolume");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_getEffectsVolume : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        int ret = cobj->getEffectsVolume();
        int32_to_seval(ret, &s.rval());
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 0);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_getEffectsVolume)

static bool js_cocos2dx_extension_agoraCreator_setEffectsVolume(se::State &s) {
    CCLOG("[Agora] setEffectsVolume");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_setEffectsVolume : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        int volume;
        ok &= seval_to_int32(args[0], &volume);

        int ret = cobj->setEffectsVolume(volume);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_setEffectsVolume : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_setEffectsVolume)

static bool js_cocos2dx_extension_agoraCreator_setVolumeOfEffect(se::State &s) {
    CCLOG("[Agora] setVolumeOfEffect");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_setVolumeOfEffect : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 2) {
        int soundId;
        ok &= seval_to_int32(args[0], &soundId);

        int volume;
        ok &= seval_to_int32(args[1], &volume);

        int ret = cobj->setVolumeOfEffect(soundId, volume);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_setVolumeOfEffect : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 2);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_setVolumeOfEffect)

static bool js_cocos2dx_extension_agoraCreator_playEffect(se::State &s) {
    CCLOG("[Agora] playEffect");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_playEffect : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 7) {
        int soundId = 0;
        ok &= seval_to_int32(args[0], &soundId);

        std::string filePath;
        ok &= seval_to_std_string(args[1], &filePath);

        int loopCount = 0;
        ok &= seval_to_int32(args[2], &loopCount);

        double pitch;
        ok &= seval_to_double(args[3], &pitch);

        double pan;
        ok &= seval_to_double(args[4], &pan);

        int gain = 0;
        ok &= seval_to_int32(args[5], &gain);

        bool publish = false;
        ok &= seval_to_boolean(args[6], &publish);

        int ret = cobj->playEffect(soundId, filePath.c_str(), loopCount, pitch, pan, gain, publish);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_playEffect : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d ", (int) argc, 7);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_playEffect)

static bool js_cocos2dx_extension_agoraCreator_stopEffect(se::State &s) {
    CCLOG("[Agora] stopEffect");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_stopEffect : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        int soundId = 0;
        ok &= seval_to_int32(args[0], &soundId);

        int ret = cobj->stopEffect(soundId);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_stopEffect : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_stopEffect)

static bool js_cocos2dx_extension_agoraCreator_stopAllEffects(se::State &s) {
    CCLOG("[Agora] stopAllEffects");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_stopAllEffects : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        int ret = cobj->stopAllEffects();
        int32_to_seval(ret, &s.rval());
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 0);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_stopAllEffects)

static bool js_cocos2dx_extension_agoraCreator_preloadEffect(se::State &s) {
    CCLOG("[Agora] preloadEffect");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_preloadEffect : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 2) {
        int soundId = 0;
        ok &= seval_to_int32(args[0], &soundId);

        std::string filePath;
        ok &= seval_to_std_string(args[1], &filePath);

        int ret = cobj->preloadEffect(soundId, filePath.c_str());
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_preloadEffect : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 2);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_preloadEffect)

static bool js_cocos2dx_extension_agoraCreator_unloadEffect(se::State &s) {
    CCLOG("[Agora] unloadEffect");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_unloadEffect : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        int soundId = 0;
        ok &= seval_to_int32(args[0], &soundId);

        int ret = cobj->unloadEffect(soundId);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_unloadEffect : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_unloadEffect)

static bool js_cocos2dx_extension_agoraCreator_pauseEffect(se::State &s) {
    CCLOG("[Agora] pauseEffect");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_pauseEffect : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        int soundId = 0;
        ok &= seval_to_int32(args[0], &soundId);

        int ret = cobj->pauseEffect(soundId);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_pauseEffect : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_pauseEffect)

static bool js_cocos2dx_extension_agoraCreator_pauseAllEffects(se::State &s) {
    CCLOG("[Agora] pauseAllEffects");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_pauseAllEffects : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        int ret = cobj->pauseAllEffects();
        int32_to_seval(ret, &s.rval());
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 0);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_pauseAllEffects)

static bool js_cocos2dx_extension_agoraCreator_resumeEffect(se::State &s) {
    CCLOG("[Agora] resumeEffect");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_resumeEffect : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        int soundId = 0;
        ok &= seval_to_int32(args[0], &soundId);

        int ret = cobj->resumeEffect(soundId);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_resumeEffect : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_resumeEffect)

static bool js_cocos2dx_extension_agoraCreator_resumeAllEffects(se::State &s) {
    CCLOG("[Agora] resumeAllEffects");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_resumeAllEffects : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        int ret = cobj->resumeAllEffects();
        int32_to_seval(ret, &s.rval());
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 0);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_resumeAllEffects)

static bool js_cocos2dx_extension_agoraCreator_setLocalVoicePitch(se::State &s) {
    CCLOG("[Agora] setLocalVoicePitch");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_setLocalVoicePitch : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        double pitch = 0;
        ok &= seval_to_double(args[0], &pitch);

        int ret = cobj->setLocalVoicePitch(pitch);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_setLocalVoicePitch : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_setLocalVoicePitch)

static bool js_cocos2dx_extension_agoraCreator_setRemoteVoicePosition(se::State &s) {
    CCLOG("[Agora] setRemoteVoicePosition");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_setRemoteVoicePosition : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 3) {
        int uid;
        ok &= seval_to_int32(args[0], &uid);

        double pan = 0;
        ok &= seval_to_double(args[1], &pan);

        double gain = 0;
        ok &= seval_to_double(args[2], &gain);

        int ret = cobj->setRemoteVoicePosition(uid, pan, gain);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_setRemoteVoicePosition : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 3);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_setRemoteVoicePosition)

static bool js_cocos2dx_extension_agoraCreator_setVoiceOnlyMode(se::State &s) {
    CCLOG("[Agora] setVoiceOnlyMode");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_setVoiceOnlyMode: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        bool enable;
        ok &= seval_to_boolean(args[0], &enable);

        int ret = agora::ERROR_CODE_TYPE::ERR_NOT_SUPPORTED;
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_setVoiceOnlyMode : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_setVoiceOnlyMode)

static bool js_cocos2dx_extension_agoraCreator_setLocalVoiceEqualization(se::State &s) {
    CCLOG("[Agora] setLocalVoiceEqualization");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_setLocalVoiceEqualization : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 2) {
        int bandFrequency = 0;
        ok &= seval_to_int32(args[0], &bandFrequency);

        int bandGain = 0;
        ok &= seval_to_int32(args[1], &bandGain);

        int ret = cobj->setLocalVoiceEqualization(
                (agora::rtc::AUDIO_EQUALIZATION_BAND_FREQUENCY) bandFrequency, bandGain);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_setLocalVoiceEqualization : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 2);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_setLocalVoiceEqualization)

static bool js_cocos2dx_extension_agoraCreator_setLocalVoiceReverb(se::State &s) {
    CCLOG("[Agora] setLocalVoiceReverb");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_setLocalVoiceReverb : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 2) {
        int reverbKey = 0;
        ok &= seval_to_int32(args[0], &reverbKey);

        int value = 0;
        ok &= seval_to_int32(args[1], &value);

        int ret = cobj->setLocalVoiceReverb((agora::rtc::AUDIO_REVERB_TYPE) reverbKey, value);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_setLocalVoiceReverb : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 2);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_setLocalVoiceReverb)

static bool js_cocos2dx_extension_agoraCreator_pauseAudio(se::State &s) {
    CCLOG("[Agora] pauseAudio");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_pauseAudio : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        int ret = RtcEngineParameters(cobj).pauseAudio();
        int32_to_seval(ret, &s.rval());
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 0);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_pauseAudio)

static bool js_cocos2dx_extension_agoraCreator_resumeAudio(se::State &s) {
    CCLOG("[Agora] resumeAudio");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_resumeAudio : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        int ret = RtcEngineParameters(cobj).resumeAudio();
        int32_to_seval(ret, &s.rval());
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 0);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_resumeAudio)

static bool js_cocos2dx_extension_agoraCreator_adjustRecordingSignalVolume(se::State &s) {
    CCLOG("[Agora] adjustRecordingSignalVolume");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_adjustRecordingSignalVolume : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        int volume = 0;
        ok &= seval_to_int32(args[0], &volume);

        int ret = cobj->adjustRecordingSignalVolume(volume);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_adjustRecordingSignalVolume : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_adjustRecordingSignalVolume)

static bool js_cocos2dx_extension_agoraCreator_adjustPlaybackSignalVolume(se::State &s) {
    CCLOG("[Agora] adjustPlaybackSignalVolume");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_adjustPlaybackSignalVolume : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        int volume = 0;
        ok &= seval_to_int32(args[0], &volume);

        int ret = cobj->adjustPlaybackSignalVolume(volume);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_adjustPlaybackSignalVolume : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_adjustPlaybackSignalVolume)

static bool js_cocos2dx_extension_agoraCreator_setHighQualityAudioParameters(se::State &s) {
    CCLOG("[Agora] setHighQualityAudioParameters");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_setHighQualityAudioParameters: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 3) {
        bool fullband;
        ok &= seval_to_boolean(args[0], &fullband);

        bool stereo;
        ok &= seval_to_boolean(args[0], &stereo);

        bool fullBitrate;
        ok &= seval_to_boolean(args[0], &fullBitrate);

        int ret = cobj->setHighQualityAudioParameters(fullband, stereo, fullBitrate);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_setHighQualityAudioParameters : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 3);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_setHighQualityAudioParameters)

static bool js_cocos2dx_extension_agoraCreator_enableWebSdkInteroperability(se::State &s) {
    CCLOG("[Agora] enableWebSdkInteroperability");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_enableWebSdkInteroperability: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        bool enabled;
        ok &= seval_to_boolean(args[0], &enabled);

        int ret = cobj->enableWebSdkInteroperability(enabled);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_enableWebSdkInteroperability : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_enableWebSdkInteroperability)

static bool js_cocos2dx_extension_agoraCreator_setInEarMonitoringVolume(se::State &s) {
    CCLOG("[Agora] setInEarMonitoringVolume");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_setInEarMonitoringVolume: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        int volume = 0;
        ok &= seval_to_int32(args[0], &volume);

        int ret = cobj->setInEarMonitoringVolume(volume);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_setInEarMonitoringVolume : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_setInEarMonitoringVolume)

static bool js_cocos2dx_extension_agoraCreator_isSpeakerphoneEnabled(se::State &s) {
    CCLOG("[Agora] isSpeakerphoneEnabled");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_isSpeakerphoneEnabled: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        bool ret = cobj->isSpeakerphoneEnabled();
        boolean_to_seval(ret, &s.rval());
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 0);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_isSpeakerphoneEnabled)

static bool js_cocos2dx_extension_agoraCreator_setEncryptionMode(se::State &s) {
    CCLOG("[Agora] setEncryptionMode");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_setEncryptionMode : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::string encryptionMode;
        ok &= seval_to_std_string(args[0], &encryptionMode);

        int ret = cobj->setEncryptionMode(encryptionMode.c_str());
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_setEncryptionMode : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_setEncryptionMode)

static bool js_cocos2dx_extension_agoraCreator_setEncryptionSecret(se::State &s) {
    CCLOG("[Agora] setEncryptionSecret");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_setEncryptionSecret : Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::string secret;
        ok &= seval_to_std_string(args[0], &secret);

        int ret = cobj->setEncryptionSecret(secret.c_str());
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_setEncryptionSecret : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_setEncryptionSecret)

static bool js_cocos2dx_extension_agoraCreator_enableAudio(se::State &s) {
    CCLOG("[Agora] enableAudio");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_enableAudio: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        int ret = cobj->enableAudio();
        int32_to_seval(ret, &s.rval());
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 0);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_enableAudio)

static bool js_cocos2dx_extension_agoraCreator_disableAudio(se::State &s) {
    CCLOG("[Agora] disableAudio");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_disableAudio: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        int ret = cobj->disableAudio();
        int32_to_seval(ret, &s.rval());
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 0);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_disableAudio)

static bool js_cocos2dx_extension_agoraCreator_muteLocalAudioStream(se::State &s) {
    CCLOG("[Agora] muteLocalAudioStream");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_muteLocalAudioStream: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        bool bVal;
        ok &= seval_to_boolean(args[0], &bVal);

        int ret = cobj->muteLocalAudioStream(bVal);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_muteLocalAudioStream : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 0);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_muteLocalAudioStream)

static bool js_cocos2dx_extension_agoraCreator_muteAllRemoteAudioStreams(se::State &s) {
    CCLOG("[Agora] muteAllRemoteAudioStreams");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_muteAllRemoteAudioStreams: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        bool bVal;
        ok &= seval_to_boolean(args[0], &bVal);

        int ret = cobj->muteAllRemoteAudioStreams(bVal);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_muteAllRemoteAudioStreams : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_muteAllRemoteAudioStreams)

static bool js_cocos2dx_extension_agoraCreator_muteRemoteAudioStream(se::State &s) {
    CCLOG("[Agora] muteRemoteAudioStream");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_muteRemoteAudioStream: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 2) {
        uint32_t uid;
        ok &= seval_to_uint32(args[0], &uid);

        bool bVal;
        ok &= seval_to_boolean(args[1], &bVal);

        int ret = cobj->muteRemoteAudioStream(uid, bVal);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_muteRemoteAudioStream : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 2);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_muteRemoteAudioStream)

static bool js_cocos2dx_extension_agoraCreator_setDefaultAudioRouteToSpeakerphone(se::State &s) {
    CCLOG("[Agora] setDefaultAudioRouteToSpeakerphone");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_setDefaultAudioRouteToSpeakerphone: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        bool bVal;
        ok &= seval_to_boolean(args[0], &bVal);

        int ret = cobj->setDefaultAudioRouteToSpeakerphone(bVal);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_setDefaultAudioRouteToSpeakerphone : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_setDefaultAudioRouteToSpeakerphone)

static bool js_cocos2dx_extension_agoraCreator_setEnableSpeakerphone(se::State &s) {
    CCLOG("[Agora] setEnableSpeakerphone");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_setEnableSpeakerphone: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        bool bVal;
        ok &= seval_to_boolean(args[0], &bVal);

        int ret = cobj->setEnableSpeakerphone(bVal);
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_setEnableSpeakerphone : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_setEnableSpeakerphone)

static bool js_cocos2dx_extension_agoraCreator_setParameters(se::State &s) {
    CCLOG("[Agora] setParameters");

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    SE_PRECONDITION2(cobj, false,
                     "js_cocos2dx_extension_agoraCreator_setParameters: Invalid Native Object");

    const auto &args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::string sStr;
        ok &= seval_to_std_string(args[0], &sStr);

        int ret = cobj->setParameters(sStr.c_str());
        int32_to_seval(ret, &s.rval());

        SE_PRECONDITION2(ok, false,
                         "js_cocos2dx_extension_agoraCreator_setParameters : Error processing arguments");
        return true;
    }

    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int) argc, 1);
    return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_setParameters)

static bool js_agoraCreator_finalize(se::State &s) {
    CCLOGINFO("jsbindings: finalizing JS object %p (agoraCreator)", s.nativeThisObject());

    auto *cobj = (IRtcEngine *) s.nativeThisObject();
    if (cobj) {
        agora::rtc::IRtcEngine::release();
    }

    if (g_SingleInstance) {
        delete g_SingleInstance;
        g_SingleInstance = nullptr;
    }

    return true;
}

SE_BIND_FINALIZE_FUNC(js_agoraCreator_finalize)

static bool js_cocos2dx_extension_agoraCreator_constructor(se::State &s) {
    CCLOG("[Agora] constructor");

    if (g_SingleInstance == nullptr) {
        g_SingleInstance = new CagoraCreatorJsWrapper();
    }

    se::Object *obj = s.thisObject();

    // link the native object with the javascript object
    g_SingleInstance->_refObj = obj;

    auto *mAgoraEngine = (IRtcEngine *) createAgoraRtcEngine();
    if (obj) {
        obj->setPrivateData(mAgoraEngine);
        se::Value func;
        if (obj->getProperty("_ctor", &func)) {
            func.toObject()->call(se::EmptyValueArray, obj);
        }
    }

    return true;
}

SE_BIND_CTOR(js_cocos2dx_extension_agoraCreator_constructor, js_cocos2dx_agoraCreator_class,
        js_agoraCreator_finalize
)

bool js_register_cocos2dx_extension_agoraCreator(se::Object *obj) {
    CCLOG("[Agora] js_register_cocos2dx_extension_agoraCreator");

    auto cls = se::Class::create("agoraCreator", obj, nullptr,
                                 _SE(js_cocos2dx_extension_agoraCreator_constructor));

    cls->defineFunction("initialize", _SE(js_cocos2dx_extension_agoraCreator_initialize));
    cls->defineFunction("joinChannel", _SE(js_cocos2dx_extension_agoraCreator_joinChannel));
    cls->defineFunction("leaveChannel", _SE(js_cocos2dx_extension_agoraCreator_leaveChannel));
    cls->defineFunction("getVersion", _SE(js_cocos2dx_extension_agoraCreator_getVersion));
    cls->defineFunction("getErrorDescription",
                        _SE(js_cocos2dx_extension_agoraCreator_getErrorDescription));
    cls->defineFunction("setLogFilter", _SE(js_cocos2dx_extension_agoraCreator_setLogFilter));
    cls->defineFunction("setLogFile", _SE(js_cocos2dx_extension_agoraCreator_setLogFile));
    cls->defineFunction("renewToken", _SE(js_cocos2dx_extension_agoraCreator_renewToken));
    cls->defineFunction("setChannelProfile",
                        _SE(js_cocos2dx_extension_agoraCreator_setChannelProfile));
    cls->defineFunction("setClientRole", _SE(js_cocos2dx_extension_agoraCreator_setClientRole));

    cls->defineFunction("enableLocalAudio",
                        _SE(js_cocos2dx_extension_agoraCreator_enableLocalAudio));
    cls->defineFunction("setDefaultMuteAllRemoteAudioStreams",
                        _SE(js_cocos2dx_extension_agoraCreator_setDefaultMuteAllRemoteAudioStreams));

    cls->defineFunction("setInEarMonitoringVolume",
                        _SE(js_cocos2dx_extension_agoraCreator_setInEarMonitoringVolume));
    cls->defineFunction("isSpeakerphoneEnabled",
                        _SE(js_cocos2dx_extension_agoraCreator_isSpeakerphoneEnabled));
    cls->defineFunction("setEncryptionMode",
                        _SE(js_cocos2dx_extension_agoraCreator_setEncryptionMode));
    cls->defineFunction("enableWebSdkInteroperability",
                        _SE(js_cocos2dx_extension_agoraCreator_enableWebSdkInteroperability));
    cls->defineFunction("setHighQualityAudioParameters",
                        _SE(js_cocos2dx_extension_agoraCreator_setHighQualityAudioParameters));
    cls->defineFunction("adjustPlaybackSignalVolume",
                        _SE(js_cocos2dx_extension_agoraCreator_adjustPlaybackSignalVolume));
    cls->defineFunction("adjustRecordingSignalVolume",
                        _SE(js_cocos2dx_extension_agoraCreator_adjustRecordingSignalVolume));
    cls->defineFunction("resumeAudio", _SE(js_cocos2dx_extension_agoraCreator_resumeAudio));
    cls->defineFunction("pauseAudio", _SE(js_cocos2dx_extension_agoraCreator_pauseAudio));
    cls->defineFunction("setLocalVoiceReverb",
                        _SE(js_cocos2dx_extension_agoraCreator_setLocalVoiceReverb));
    cls->defineFunction("setLocalVoiceEqualization",
                        _SE(js_cocos2dx_extension_agoraCreator_setLocalVoiceEqualization));
    cls->defineFunction("setVoiceOnlyMode",
                        _SE(js_cocos2dx_extension_agoraCreator_setVoiceOnlyMode));
    cls->defineFunction("setRemoteVoicePosition",
                        _SE(js_cocos2dx_extension_agoraCreator_setRemoteVoicePosition));
    cls->defineFunction("setLocalVoicePitch",
                        _SE(js_cocos2dx_extension_agoraCreator_setLocalVoicePitch));
    cls->defineFunction("resumeAllEffects",
                        _SE(js_cocos2dx_extension_agoraCreator_resumeAllEffects));

    cls->defineFunction("resumeEffect", _SE(js_cocos2dx_extension_agoraCreator_resumeEffect));
    cls->defineFunction("pauseAllEffects", _SE(js_cocos2dx_extension_agoraCreator_pauseAllEffects));
    cls->defineFunction("pauseEffect", _SE(js_cocos2dx_extension_agoraCreator_pauseEffect));
    cls->defineFunction("unloadEffect", _SE(js_cocos2dx_extension_agoraCreator_unloadEffect));
    cls->defineFunction("preloadEffect", _SE(js_cocos2dx_extension_agoraCreator_preloadEffect));
    cls->defineFunction("stopAllEffects", _SE(js_cocos2dx_extension_agoraCreator_stopAllEffects));
    cls->defineFunction("stopEffect", _SE(js_cocos2dx_extension_agoraCreator_stopEffect));
    cls->defineFunction("playEffect", _SE(js_cocos2dx_extension_agoraCreator_playEffect));
    cls->defineFunction("setVolumeOfEffect",
                        _SE(js_cocos2dx_extension_agoraCreator_setVolumeOfEffect));
    cls->defineFunction("setEffectsVolume",
                        _SE(js_cocos2dx_extension_agoraCreator_setEffectsVolume));
    cls->defineFunction("getEffectsVolume",
                        _SE(js_cocos2dx_extension_agoraCreator_getEffectsVolume));
    cls->defineFunction("setAudioMixingPosition",
                        _SE(js_cocos2dx_extension_agoraCreator_setAudioMixingPosition));

    cls->defineFunction("getAudioMixingCurrentPosition",
                        _SE(js_cocos2dx_extension_agoraCreator_getAudioMixingCurrentPosition));
    cls->defineFunction("getAudioMixingDuration",
                        _SE(js_cocos2dx_extension_agoraCreator_getAudioMixingDuration));
    cls->defineFunction("adjustAudioMixingVolume",
                        _SE(js_cocos2dx_extension_agoraCreator_adjustAudioMixingVolume));
    cls->defineFunction("resumeAudioMixing",
                        _SE(js_cocos2dx_extension_agoraCreator_resumeAudioMixing));
    cls->defineFunction("pauseAudioMixing",
                        _SE(js_cocos2dx_extension_agoraCreator_pauseAudioMixing));
    cls->defineFunction("stopAudioMixing", _SE(js_cocos2dx_extension_agoraCreator_stopAudioMixing));
    cls->defineFunction("startAudioMixing",
                        _SE(js_cocos2dx_extension_agoraCreator_startAudioMixing));
    cls->defineFunction("stopAudioRecording",
                        _SE(js_cocos2dx_extension_agoraCreator_stopAudioRecording));
    cls->defineFunction("startAudioRecording",
                        _SE(js_cocos2dx_extension_agoraCreator_startAudioRecording));
    cls->defineFunction("enableAudioVolumeIndication",
                        _SE(js_cocos2dx_extension_agoraCreator_enableAudioVolumeIndication));
    // Non-mobile devices api
    //cls->defineFunction("setPlaybackDeviceVolume", _SE(js_cocos2dx_extension_agoraCreator_setPlaybackDeviceVolume));

    cls->defineFunction("enableAudio", _SE(js_cocos2dx_extension_agoraCreator_enableAudio));
    cls->defineFunction("disableAudio", _SE(js_cocos2dx_extension_agoraCreator_disableAudio));
    cls->defineFunction("muteLocalAudioStream",
                        _SE(js_cocos2dx_extension_agoraCreator_muteLocalAudioStream));
    cls->defineFunction("muteAllRemoteAudioStreams",
                        _SE(js_cocos2dx_extension_agoraCreator_muteAllRemoteAudioStreams));
    cls->defineFunction("muteRemoteAudioStream",
                        _SE(js_cocos2dx_extension_agoraCreator_muteRemoteAudioStream));
    cls->defineFunction("setDefaultAudioRouteToSpeakerphone",
                        _SE(js_cocos2dx_extension_agoraCreator_setDefaultAudioRouteToSpeakerphone));
    cls->defineFunction("setEnableSpeakerphone",
                        _SE(js_cocos2dx_extension_agoraCreator_setEnableSpeakerphone));

    cls->defineFunction("setParameters", _SE(js_cocos2dx_extension_agoraCreator_setParameters));

    cls->defineFinalizeFunction(_SE(js_agoraCreator_finalize));
    cls->install();

    js_cocos2dx_agoraCreator_class = cls;

    se::ScriptEngine::getInstance()->clearException();
    return true;
}

bool register_jsb_agoraCreator(se::Object *obj) {
    CCLOG("[Agora] register_jsb_agoraCreator");
    return js_register_cocos2dx_extension_agoraCreator(obj);
}

#endif
