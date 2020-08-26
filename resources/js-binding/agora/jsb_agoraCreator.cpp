//
//  jsb_agoraCreator.cpp
//  Created by on 20/8/3
//

#include "jsb_agoraCreator.h"

#if (CC_TARGET_PLATFORM == CC_PLATFORM_WINRT || CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID || CC_TARGET_PLATFORM == CC_PLATFORM_IOS || CC_TARGET_PLATFORM == CC_PLATFORM_MAC || CC_TARGET_PLATFORM == CC_PLATFORM_WIN32)

#include <cstddef>
#include <cstdio>
#include <cstdarg>
#include <cstring>
#include <string>
#include <vector>

#include "base/CCScheduler.h"
#include "cocos2d.h"
#include "platform/CCApplication.h"
#include "scripting/js-bindings/manual/jsb_global.h"
#include "scripting/js-bindings/manual/jsb_conversions.hpp"

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

#include "IAgoraRtcEngine.h"
#include "IAgoraRtcEngine2.h"
#include "Extensions.h"
#include "./rtcEngine/RtcEngineBridge.h"
#include "./callback/rtcEngineCallback/RtcEngineEventHandler.h"

using namespace cocos2d;
using namespace agora::rtc;
using namespace agora::common;

RtcEngineEventHandler* rtcEngineEventHandler;
EngineEventHandler* eventHandler;

se::Class* js_cocos2dx_agoraCreator_class = nullptr;

static bool
js_cocos2dx_extension_agoraCreator_finalize(se::State& s)
{
	auto* cobj = (RtcEngineBridge*)s.nativeThisObject();
	if (cobj)
	{
		cobj->release();
	}

	if (eventHandler)
	{
		delete eventHandler;
		eventHandler = nullptr;
	}

	if (rtcEngineEventHandler)
	{
		delete rtcEngineEventHandler;
		rtcEngineEventHandler = nullptr;
	}

	return true;
}

SE_BIND_FINALIZE_FUNC(js_cocos2dx_extension_agoraCreator_finalize)

static bool
js_cocos2dx_extension_agoraCreator_constructor(se::State& s)
{
	se::Object* obj = s.thisObject();

	if (!eventHandler)
	{
		// link the native object with the javascript object
		eventHandler = new EngineEventHandler(obj);
	}

	if (!rtcEngineEventHandler)
	{
		rtcEngineEventHandler = new RtcEngineEventHandler(eventHandler);
	}

	auto* mAgoraEngine = new RtcEngineBridge();
	mAgoraEngine->initEventHandler(rtcEngineEventHandler);

	if (obj)
	{
		obj->setPrivateData(mAgoraEngine);
		se::Value func;
		if (obj->getProperty("_ctor", &func))
		{
			func.toObject()->call(se::EmptyValueArray, obj);
		}
	}

	return true;
}

SE_BIND_CTOR(js_cocos2dx_extension_agoraCreator_constructor, js_cocos2dx_agoraCreator_class,
	js_cocos2dx_extension_agoraCreator_finalize)

static bool
js_cocos2dx_extension_agoraCreator_callNativeMethod(se::State& s)
{
	auto* cobj = (RtcEngineBridge*)s.nativeThisObject();
	SE_PRECONDITION2(cobj, false,
		"js_cocos2dx_extension_agoraCreator_callNativeMethod: Invalid Native Object");

	const auto& args = s.args();
	size_t argc = args.size();
	CC_UNUSED bool ok = true;
	if (argc == 2)
	{
		int api;
		ok &= seval_to_int32(args[0], &api);

		std::string parameters;
		ok &= seval_to_std_string(args[1], &parameters);

		switch ((API_TYPE)api)
		{
		case GET_VERSION:
		case GET_ERROR_DESCRIPTION:
		case GET_CALL_ID:
		{
			const char* res = cobj->callApi_str((API_TYPE)api, parameters);

			s.rval() = toSeValue(res);
		}
			break;

		case GET_USER_INFO_BY_USER_ACCOUNT:
		case GET_USER_INFO_BY_UID:
		{
			auto* p = new UserInfo;
			cobj->callApi((API_TYPE)api, parameters, reinterpret_cast<void*&>(p));

			s.rval() = toSeValue(*p);

			delete p;
		}
			break;

		case CREATE_DATA_STREAM:
		{
			auto* p = new int;

			cobj->callApi((API_TYPE)api, parameters, reinterpret_cast<void*&>(p));

			s.rval() = toSeValue(*p);
		}
			break;

		case SEND_STREAM_MESSAGE:
		{
		}
			break;

		case SET_UP_LOCAL_VIDEO:
		{
		}
			break;

		case SET_UP_REMOTE_VIDEO:
		{

		}
			break;

		case REGISTER_PACKET_OBSERVER:
		{
			// TODO
		}
			break;

		case SEND_METADATA:
		{

		}
			break;

		case SET_MAX_META_SIZE:
		{

		}
			break;

		case REGISTER_MEDIA_META_DATA_OBSERVER:
		{

		}
			break;

		default:
		{
			int ret = cobj->callApi((API_TYPE)api, parameters);
			int32_to_seval(ret, &s.rval());
		}
			break;
		}

		SE_PRECONDITION2(ok,
			false,
			"js_cocos2dx_extension_agoraCreator_callNativeMethod: Error processing arguments");
		return true;
	}

	SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
	return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_callNativeMethod)

static bool
js_cocos2dx_extension_agoraCreator_callNativeMethodAudioEffect(se::State& s)
{
	auto* cobj = (RtcEngineBridge*)s.nativeThisObject();
	SE_PRECONDITION2(cobj, false,
		"js_cocos2dx_extension_agoraCreator_callNativeMethodAudioEffect: Invalid Native Object");

	const auto& args = s.args();
	size_t argc = args.size();
	CC_UNUSED bool ok = true;
	if (argc == 2)
	{
		int api;
		ok &= seval_to_int32(args[0], &api);

		std::string parameters;
		ok &= seval_to_std_string(args[1], &parameters);

		int ret = cobj->callApi_audioEffect((API_TYPE_AUDIO_EFFECT)api, parameters);
		int32_to_seval(ret, &s.rval());

		SE_PRECONDITION2(ok,
			false,
			"js_cocos2dx_extension_agoraCreator_callNativeMethodAudioEffect: Error processing arguments");
		return true;
	}

	SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
	return false;
}

SE_BIND_FUNC(js_cocos2dx_extension_agoraCreator_callNativeMethodAudioEffect)

bool
js_register_cocos2dx_extension_agoraCreator(se::Object* obj)
{
	CCLOG("[Agora] js_register_cocos2dx_extension_agoraCreator");

	auto cls = se::Class::create("agoraCreator", obj, nullptr,
		_SE(js_cocos2dx_extension_agoraCreator_constructor));

	cls->defineFunction("callNativeMethod",
		_SE(js_cocos2dx_extension_agoraCreator_callNativeMethod));

	cls->defineFunction("callNativeMethodAudioEffect",
		_SE(js_cocos2dx_extension_agoraCreator_callNativeMethodAudioEffect));

	cls->defineFinalizeFunction(_SE(js_cocos2dx_extension_agoraCreator_finalize));
	cls->install();

	js_cocos2dx_agoraCreator_class = cls;

	se::ScriptEngine::getInstance()->clearException();
	return true;
}

bool
register_jsb_agoraCreator(se::Object* obj)
{
	CCLOG("[Agora] register_jsb_agoraCreator");
	return js_register_cocos2dx_extension_agoraCreator(obj);
}

#endif
