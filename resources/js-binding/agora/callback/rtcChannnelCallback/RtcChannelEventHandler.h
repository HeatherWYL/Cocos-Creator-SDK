//
// Created by LXH on 2020/8/7.
//

#pragma once

#include "../../include/IAgoraRtcChannel.h"
#include "../template_class_rtc_channel_event_handler.h"

namespace agora
{
	namespace common
	{
		class RtcChannelEventHandler : public rtc::IChannelEventHandler
		{
		private:
			ChannelEventHandler* mEventHandler = nullptr;

		public:
			RtcChannelEventHandler(ChannelEventHandler* mEventHandler);

			virtual ~RtcChannelEventHandler();

			void
			onChannelWarning(rtc::IChannel* rtcChannel, int warn, const char* msg) override;

			void
			onChannelError(rtc::IChannel* rtcChannel, int err, const char* msg) override;

			void
			onJoinChannelSuccess(rtc::IChannel* rtcChannel, uid_t uid, int elapsed) override;

			void
			onRejoinChannelSuccess(rtc::IChannel* rtcChannel,
				uid_t uid,
				int elapsed) override;

			void
			onLeaveChannel(rtc::IChannel* rtcChannel,
				const rtc::RtcStats& stats) override;

			void
			onClientRoleChanged(rtc::IChannel* rtcChannel,
				rtc::CLIENT_ROLE_TYPE oldRole,
				rtc::CLIENT_ROLE_TYPE newRole) override;

			void
			onUserJoined(rtc::IChannel* rtcChannel, uid_t uid, int elapsed) override;

			void
			onUserOffline(rtc::IChannel* rtcChannel,
				uid_t uid,
				rtc::USER_OFFLINE_REASON_TYPE reason) override;

			void
			onConnectionLost(rtc::IChannel* rtcChannel) override;

			void
			onRequestToken(rtc::IChannel* rtcChannel) override;

			void
			onTokenPrivilegeWillExpire(rtc::IChannel* rtcChannel,
				const char* token) override;

			void
			onRtcStats(rtc::IChannel* rtcChannel,
				const rtc::RtcStats& stats) override;

			void
			onNetworkQuality(rtc::IChannel* rtcChannel,
				uid_t uid,
				int txQuality,
				int rxQuality) override;

			void
			onRemoteVideoStats(rtc::IChannel* rtcChannel,
				const rtc::RemoteVideoStats& stats) override;

			void
			onRemoteAudioStats(rtc::IChannel* rtcChannel,
				const rtc::RemoteAudioStats& stats) override;

			void
			onRemoteAudioStateChanged(rtc::IChannel* rtcChannel,
				uid_t uid,
				rtc::REMOTE_AUDIO_STATE state,
				rtc::REMOTE_AUDIO_STATE_REASON reason,
				int elapsed) override;

			void
			onActiveSpeaker(rtc::IChannel* rtcChannel, uid_t uid) override;

			void
			onVideoSizeChanged(rtc::IChannel* rtcChannel,
				uid_t uid,
				int width,
				int height,
				int rotation) override;

			void
			onRemoteVideoStateChanged(rtc::IChannel* rtcChannel,
				uid_t uid,
				rtc::REMOTE_VIDEO_STATE state,
				rtc::REMOTE_VIDEO_STATE_REASON reason,
				int elapsed) override;

			void
			onStreamMessage(rtc::IChannel* rtcChannel,
				uid_t uid,
				int streamId,
				const char* data,
				size_t length) override;

			void
			onStreamMessageError(rtc::IChannel* rtcChannel,
				uid_t uid,
				int streamId,
				int code,
				int missed,
				int cached) override;

			void
			onChannelMediaRelayStateChanged(rtc::IChannel* rtcChannel,
				rtc::CHANNEL_MEDIA_RELAY_STATE state,
				rtc::CHANNEL_MEDIA_RELAY_ERROR code) override;

			void
			onChannelMediaRelayEvent(rtc::IChannel* rtcChannel,
				rtc::CHANNEL_MEDIA_RELAY_EVENT code) override;

			void
			onRtmpStreamingStateChanged(rtc::IChannel* rtcChannel,
				const char* url,
				rtc::RTMP_STREAM_PUBLISH_STATE state,
				rtc::RTMP_STREAM_PUBLISH_ERROR errCode) override;

			void
			onTranscodingUpdated(rtc::IChannel* rtcChannel) override;

			void
			onStreamInjectedStatus(rtc::IChannel* rtcChannel,
				const char* url,
				uid_t uid,
				int status) override;

			void
			onLocalPublishFallbackToAudioOnly(rtc::IChannel* rtcChannel,
				bool isFallbackOrRecover) override;

			void
			onRemoteSubscribeFallbackToAudioOnly(rtc::IChannel* rtcChannel,
				uid_t uid,
				bool isFallbackOrRecover) override;

			void
			onConnectionStateChanged(rtc::IChannel* rtcChannel,
				rtc::CONNECTION_STATE_TYPE state,
				rtc::CONNECTION_CHANGED_REASON_TYPE reason) override;
		};
	}
}
