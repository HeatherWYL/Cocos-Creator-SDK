//
// Created by LXH on 2020/8/7.
//

#include "RtcChannelEventHandler.h"

namespace agora {
namespace common {
using namespace rtc;

RtcChannelEventHandler::RtcChannelEventHandler(
    ChannelEventHandler *mEventHandler)
    : mEventHandler(mEventHandler) {}

RtcChannelEventHandler::~RtcChannelEventHandler() { mEventHandler = nullptr; }

void RtcChannelEventHandler::onChannelWarning(IChannel *rtcChannel, int warn,
                                              const char *msg) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  std::string msgStr = msg ? msg : "";
  mEventHandler->functionCall<int, const char *>("onChannelWarning", channelId,
                                                 warn, msg);
}

void RtcChannelEventHandler::onChannelError(IChannel *rtcChannel, int err,
                                            const char *msg) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  std::string msgStr = msg ? msg : "";
  mEventHandler->functionCall<int, const char *>("onChannelError", channelId,
                                                 err, msg);
}

void RtcChannelEventHandler::onJoinChannelSuccess(IChannel *rtcChannel,
                                                  rtc::uid_t userId,
                                                  int elapsed) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  mEventHandler->functionCall<rtc::uid_t, int>("onJoinChannelSuccess",
                                               channelId, userId, elapsed);
}

void RtcChannelEventHandler::onRejoinChannelSuccess(IChannel *rtcChannel,
                                                    rtc::uid_t userId,
                                                    int elapsed) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  mEventHandler->functionCall<rtc::uid_t, int>("onRejoinChannelSuccess",
                                               channelId, userId, elapsed);
}

void RtcChannelEventHandler::onLeaveChannel(IChannel *rtcChannel,
                                            const RtcStats &stats) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  mEventHandler->functionCall("onLeaveChannel", channelId, stats);
}

void RtcChannelEventHandler::onClientRoleChanged(IChannel *rtcChannel,
                                                 CLIENT_ROLE_TYPE oldRole,
                                                 CLIENT_ROLE_TYPE newRole) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  mEventHandler->functionCall<int, int>("onClientRoleChanged", channelId,
                                        oldRole, newRole);
}

void RtcChannelEventHandler::onUserJoined(IChannel *rtcChannel,
                                          rtc::uid_t userId, int elapsed) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  mEventHandler->functionCall<rtc::uid_t, int>("onUserJoined", channelId,
                                               userId, elapsed);
}

void RtcChannelEventHandler::onUserOffline(IChannel *rtcChannel,
                                           rtc::uid_t userId,
                                           USER_OFFLINE_REASON_TYPE reason) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  mEventHandler->functionCall<rtc::uid_t, int>("onUserOffline", channelId,
                                               userId, reason);
}

void RtcChannelEventHandler::onConnectionLost(IChannel *rtcChannel) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  mEventHandler->functionCall("onConnectionLost", channelId);
}

void RtcChannelEventHandler::onRequestToken(IChannel *rtcChannel) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  mEventHandler->functionCall("onRequestToken", channelId);
}

void RtcChannelEventHandler::onTokenPrivilegeWillExpire(IChannel *rtcChannel,
                                                        const char *token) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  std::string tokenStr = token ? token : "";
  mEventHandler->functionCall<std::string>("onTokenPrivilegeWillExpire",
                                           channelId, tokenStr);
}

void RtcChannelEventHandler::onRtcStats(IChannel *rtcChannel,
                                        const RtcStats &stats) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  mEventHandler->functionCall("onRtcStats", channelId, stats);
}

void RtcChannelEventHandler::onNetworkQuality(IChannel *rtcChannel,
                                              rtc::uid_t userId, int txQuality,
                                              int rxQuality) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  mEventHandler->functionCall<rtc::uid_t, int, int>(
      "onNetworkQuality", channelId, userId, txQuality, rxQuality);
}

void RtcChannelEventHandler::onRemoteVideoStats(IChannel *rtcChannel,
                                                const RemoteVideoStats &stats) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  mEventHandler->functionCall("onRemoteVideoStats", channelId, stats);
}

void RtcChannelEventHandler::onRemoteAudioStats(IChannel *rtcChannel,
                                                const RemoteAudioStats &stats) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  mEventHandler->functionCall("onRemoteAudioStats", channelId, stats);
}

void RtcChannelEventHandler::onRemoteAudioStateChanged(
    IChannel *rtcChannel, rtc::uid_t userId, REMOTE_AUDIO_STATE state,
    REMOTE_AUDIO_STATE_REASON reason, int elapsed) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  mEventHandler->functionCall<rtc::uid_t, int, int, int>(
      "onRemoteAudioStateChanged", channelId, userId, state, reason, elapsed);
}

void RtcChannelEventHandler::onActiveSpeaker(IChannel *rtcChannel,
                                             rtc::uid_t userId) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  mEventHandler->functionCall<rtc::uid_t>("onActiveSpeaker", channelId, userId);
}

void RtcChannelEventHandler::onVideoSizeChanged(IChannel *rtcChannel,
                                                rtc::uid_t userId, int width,
                                                int height, int rotation) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  mEventHandler->functionCall<rtc::uid_t, int, int, int>(
      "onVideoSizeChanged", channelId, userId, width, height, rotation);
}

void RtcChannelEventHandler::onRemoteVideoStateChanged(
    IChannel *rtcChannel, rtc::uid_t userId, REMOTE_VIDEO_STATE state,
    REMOTE_VIDEO_STATE_REASON reason, int elapsed) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  mEventHandler->functionCall<rtc::uid_t, int, int, int>(
      "onRemoteVideoStateChanged", channelId, userId, state, reason, elapsed);
}

void RtcChannelEventHandler::onStreamMessage(IChannel *rtcChannel,
                                             rtc::uid_t userId, int streamId,
                                             const char *data, size_t length) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  std::string dataStr = data ? data : "";
  mEventHandler->functionCall<rtc::uid_t, int, std::string, size_t>(
      "onStreamMessage", channelId, userId, streamId, dataStr, length);
}

void RtcChannelEventHandler::onStreamMessageError(IChannel *rtcChannel,
                                                  rtc::uid_t userId,
                                                  int streamId, int code,
                                                  int missed, int cached) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  mEventHandler->functionCall<rtc::uid_t, int, int, int, int>(
      "onStreamMessageError", channelId, userId, streamId, code, missed,
      cached);
}

void RtcChannelEventHandler::onChannelMediaRelayStateChanged(
    IChannel *rtcChannel, CHANNEL_MEDIA_RELAY_STATE state,
    CHANNEL_MEDIA_RELAY_ERROR code) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  mEventHandler->functionCall<int, int>("onChannelMediaRelayStateChanged",
                                        channelId, state, code);
}

void RtcChannelEventHandler::onChannelMediaRelayEvent(
    IChannel *rtcChannel, CHANNEL_MEDIA_RELAY_EVENT code) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  mEventHandler->functionCall<int>("onChannelMediaRelayEvent", channelId, code);
}

void RtcChannelEventHandler::onRtmpStreamingStateChanged(
    IChannel *rtcChannel, const char *url, RTMP_STREAM_PUBLISH_STATE state,
    RTMP_STREAM_PUBLISH_ERROR errCode) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  std::string urlStr = url ? url : "";
  mEventHandler->functionCall<std::string, int, int>(
      "onRtmpStreamingStateChanged", channelId, urlStr, state, errCode);
}

void RtcChannelEventHandler::onTranscodingUpdated(IChannel *rtcChannel) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  mEventHandler->functionCall("onTranscodingUpdated", channelId);
}

void RtcChannelEventHandler::onStreamInjectedStatus(IChannel *rtcChannel,
                                                    const char *url,
                                                    rtc::uid_t userId,
                                                    int status) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  std::string urlStr = url ? url : "";
  mEventHandler->functionCall<std::string, rtc::uid_t, int>(
      "onStreamInjectedStatus", channelId, urlStr, userId, status);
}

void RtcChannelEventHandler::onLocalPublishFallbackToAudioOnly(
    IChannel *rtcChannel, bool isFallbackOrRecover) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  mEventHandler->functionCall<bool>("onLocalPublishFallbackToAudioOnly",
                                    channelId, isFallbackOrRecover);
}

void RtcChannelEventHandler::onRemoteSubscribeFallbackToAudioOnly(
    IChannel *rtcChannel, rtc::uid_t userId, bool isFallbackOrRecover) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  mEventHandler->functionCall<rtc::uid_t, bool>(
      "onRemoteSubscribeFallbackToAudioOnly", channelId, userId,
      isFallbackOrRecover);
}

void RtcChannelEventHandler::onConnectionStateChanged(
    IChannel *rtcChannel, CONNECTION_STATE_TYPE state,
    CONNECTION_CHANGED_REASON_TYPE reason) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  mEventHandler->functionCall<int, int>("onConnectionStateChanged", channelId,
                                        state, reason);
}

void RtcChannelEventHandler::onTestEnd(IChannel *rtcChannel) {
  if (!mEventHandler)
    return;

  std::string channelId = rtcChannel->channelId();
  mEventHandler->functionCall("onTestEnd", channelId);
}

} // namespace common
} // namespace agora
