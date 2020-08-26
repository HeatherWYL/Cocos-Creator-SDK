//
// Created by LXH on 2020/8/7.
//

#pragma once

#include "IAgoraRtcEngine.h"
#include "scripting/js-bindings/manual/jsb_global.h"

namespace agora
{
	namespace common
	{
		se::Value
		toSeValue(int intValue);

		se::Value
		toSeValue(unsigned int uIntValue);

		se::Value
		toSeValue(const char* strValue);

		se::Value
		toSeValue(const agora::rtc::RtcStats& rtcStats);

		se::Value
		toSeValue(const agora::rtc::AudioVolumeInfo& audioVolumeInfo);

		se::Value
		toSeValue(const agora::rtc::AudioVolumeInfo* audioVolumeInfo, int length);

		se::Value
		toSeValue(const agora::rtc::LastmileProbeResult& lastmileProbeResult);

		se::Value
		toSeValue(const agora::rtc::LastmileProbeOneWayResult& lastmileProbeOneWayResult);

		se::Value
		toSeValue(const agora::rtc::LocalVideoStats& localVideoStats);

		se::Value
		toSeValue(const agora::rtc::RemoteVideoStats& remoteVideoStats);

		se::Value
		toSeValue(const agora::rtc::LocalAudioStats& localAudioStats);

		se::Value
		toSeValue(const agora::rtc::RemoteAudioStats& remoteAudioStats);

		se::Value
		toSeValue(const agora::rtc::UserInfo& userInfo);

		se::Value
		toSeValue(const agora::rtc::Rectangle& rectangle);

		se::Value
		toSeValue(const agora::rtc::Rectangle* rectangle, int length);
	}
}
