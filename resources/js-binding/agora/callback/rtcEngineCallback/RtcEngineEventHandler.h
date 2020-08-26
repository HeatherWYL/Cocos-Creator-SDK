#pragma once

#include "../template_class_rtc_engine_event_handler.h"

namespace agora
{
	namespace common
	{
		class RtcEngineEventHandler : public rtc::IRtcEngineEventHandler
		{
		private:
			EngineEventHandler* mEventHandler = nullptr;

		public:
			RtcEngineEventHandler(EngineEventHandler* eventHandler);

			virtual ~RtcEngineEventHandler();

			void
			onJoinChannelSuccess(const char* channel, uid_t userId, int elapsed) override;

			void
			onLeaveChannel(const rtc::RtcStats& stats) override;

			void
			onRejoinChannelSuccess(const char* channel, uid_t userId, int elapsed) override;

			void
			onUserJoined(uid_t userId, int elapsed) override;

			void
			onClientRoleChanged(rtc::CLIENT_ROLE_TYPE oldRole,
				rtc::CLIENT_ROLE_TYPE newRole) override;

			void
			onUserOffline(uid_t userId, rtc::USER_OFFLINE_REASON_TYPE reason) override;

			void
			onUserMuteAudio(uid_t userId, bool muted) override;

			void
			onFirstRemoteVideoDecoded(uid_t userId, int width, int height, int elapsed) override;

			void
			onUserMuteVideo(uid_t userId, bool muted) override;

			void
			onAudioRouteChanged(rtc::AUDIO_ROUTE_TYPE routing) override;

			void
			onConnectionLost() override;

			void
			onRequestToken() override;

			void
			onAudioVolumeIndication(const rtc::AudioVolumeInfo* speakers,
				unsigned int speakerNumber,
				int totalVolume) override;

			void
			onWarning(int warn, const char* msg) override;

			void
			onError(int err, const char* msg) override;

			void
			onRtcStats(const rtc::RtcStats& stats) override;

			void
			onAudioMixingFinished() override;

			void
			onVideoSizeChanged(uid_t userId, int width, int height, int rotation) override;

			void
			onConnectionInterrupted() override;

			void
			onMicrophoneEnabled(bool enabled) override;

			void
			onAudioQuality(uid_t userId,
				int quality,
				unsigned short delay,
				unsigned short lost) override;

			void
			onRemoteVideoTransportStats(uid_t uid,
				unsigned short delay,
				unsigned short lost,
				unsigned short rxKBitRate) override;

			void
			onRemoteAudioTransportStats(uid_t uid,
				unsigned short delay,
				unsigned short lost,
				unsigned short rxKBitRate) override;

			void
			onStreamInjectedStatus(const char* url, uid_t userId, int status) override;

			void
			onTranscodingUpdated() override;

			void
			onStreamUnpublished(const char* url) override;

			void
			onStreamPublished(const char* url, int error) override;

			void
			onAudioDeviceVolumeChanged(rtc::MEDIA_DEVICE_TYPE deviceType,
				int volume,
				bool muted) override;

			void
			onActiveSpeaker(uid_t userId) override;

			void
			onFirstRemoteAudioFrame(uid_t userId, int elapsed) override;

			void
			onFirstLocalAudioFrame(int elapsed) override;

			void
			onMediaEngineStartCallSuccess() override;

			void
			onMediaEngineLoadSuccess() override;

			void
			onStreamMessageError(uid_t userId,
				int streamId,
				int code,
				int missed,
				int cached) override;

			void
			onStreamMessage(uid_t userId, int streamId, const char* data, size_t length) override;

			void
			onConnectionBanned() override;

			void
			onLastmileQuality(int quality) override;

			void
			onVideoStopped() override;

			void
			onApiCallExecuted(int err, const char* api, const char* result) override;

			void
			onTokenPrivilegeWillExpire(const char* token) override;

			void
			onNetworkQuality(uid_t uid, int txQuality, int rxQuality) override;

			void
			onLocalVideoStats(const rtc::LocalVideoStats& stats) override;

			void
			onRemoteVideoStats(const rtc::RemoteVideoStats& stats) override;

			void
			onRemoteAudioStats(const rtc::RemoteAudioStats& stats) override;

			void
			onFirstLocalVideoFrame(int width, int height, int elapsed) override;

			void
			onFirstRemoteVideoFrame(uid_t uid, int width, int height, int elapsed) override;

			void
			onUserEnableVideo(uid_t uid, bool enabled) override;

			void
			onAudioDeviceStateChanged(const char* deviceId,
				int deviceType,
				int deviceState) override;

			void
			onCameraReady() override;

			void
			onCameraFocusAreaChanged(int x, int y, int width, int height) override;

			void
			onCameraExposureAreaChanged(int x, int y, int width, int height) override;

			void
			onRemoteAudioMixingBegin() override;

			void
			onRemoteAudioMixingEnd() override;

			void
			onAudioEffectFinished(int soundId) override;

			void
			onVideoDeviceStateChanged(const char* deviceId,
				int deviceType,
				int deviceState) override;

			void
			onRemoteVideoStateChanged(uid_t uid,
				rtc::REMOTE_VIDEO_STATE state,
				rtc::REMOTE_VIDEO_STATE_REASON reason,
				int elapsed) override;

			void
			onUserEnableLocalVideo(uid_t uid, bool enabled) override;

			void
			onLocalPublishFallbackToAudioOnly(bool isFallbackOrRecover) override;

			void
			onRemoteSubscribeFallbackToAudioOnly(uid_t uid, bool isFallbackOrRecover) override;

			void
			onConnectionStateChanged(rtc::CONNECTION_STATE_TYPE state,
				rtc::CONNECTION_CHANGED_REASON_TYPE reason) override;

			void
			onAudioMixingStateChanged(rtc::AUDIO_MIXING_STATE_TYPE state,
				rtc::AUDIO_MIXING_ERROR_TYPE errorCode) override;

			void
			onFirstRemoteAudioDecoded(uid_t uid, int elapsed) override;

			void
			onLocalVideoStateChanged(rtc::LOCAL_VIDEO_STREAM_STATE localVideoState,
				rtc::LOCAL_VIDEO_STREAM_ERROR error) override;

			void
			onRtmpStreamingStateChanged(const char* url,
				rtc::RTMP_STREAM_PUBLISH_STATE state,
				rtc::RTMP_STREAM_PUBLISH_ERROR errCode) override;

			void
			onNetworkTypeChanged(rtc::NETWORK_TYPE type) override;

			void
			onLastmileProbeResult(const rtc::LastmileProbeResult& result) override;

			void
			onLocalUserRegistered(uid_t uid, const char* userAccount) override;

			void
			onUserInfoUpdated(uid_t uid, const rtc::UserInfo& info) override;

			void
			onLocalAudioStateChanged(rtc::LOCAL_AUDIO_STREAM_STATE state,
				rtc::LOCAL_AUDIO_STREAM_ERROR error) override;

			void
			onRemoteAudioStateChanged(uid_t uid,
				rtc::REMOTE_AUDIO_STATE state,
				rtc::REMOTE_AUDIO_STATE_REASON reason,
				int elapsed) override;

			void
			onLocalAudioStats(const rtc::LocalAudioStats& stats) override;

			void
			onChannelMediaRelayStateChanged(rtc::CHANNEL_MEDIA_RELAY_STATE state,
				rtc::CHANNEL_MEDIA_RELAY_ERROR code) override;

			void
			onChannelMediaRelayEvent(rtc::CHANNEL_MEDIA_RELAY_EVENT code) override;

#if defined(__ANDROID__) || (defined(__APPLE__) && TARGET_OS_IOS)

			void
			onFacePositionChanged(int imageWidth,
				int imageHeight,
				rtc::Rectangle* vecRectangle,
				int* vecDistance,
				int numFaces) override;

#endif
		};
	}
}
