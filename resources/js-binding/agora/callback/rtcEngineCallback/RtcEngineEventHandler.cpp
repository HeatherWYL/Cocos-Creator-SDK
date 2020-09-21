#include "RtcEngineEventHandler.h"

namespace agora {
namespace common {
using namespace rtc;

RtcEngineEventHandler::RtcEngineEventHandler(EngineEventHandler *eventHandler)
    : mEventHandler(eventHandler) {}

RtcEngineEventHandler::~RtcEngineEventHandler() { mEventHandler = nullptr; }

void RtcEngineEventHandler::onJoinChannelSuccess(const char *channel,
                                                 rtc::uid_t uid, int elapsed) {
  if (!mEventHandler)
    return;

  std::string mChannel = channel ? channel : "";
  mEventHandler->functionCall<std::string, rtc::uid_t, int>(
      "onJoinChannelSuccess", mChannel, uid, elapsed);
}

void RtcEngineEventHandler::onLeaveChannel(const RtcStats &stats) {
  if (!mEventHandler)
    return;

  const RtcStats mStats = stats;
  mEventHandler->functionCall("onLeaveChannel", mStats);
}

void RtcEngineEventHandler::onRejoinChannelSuccess(const char *channel,
                                                   rtc::uid_t uid,
                                                   int elapsed) {
  if (!mEventHandler)
    return;

  std::string mChannel = channel ? channel : "";
  mEventHandler->functionCall<std::string, rtc::uid_t, int>(
      "onRejoinChannelSuccess", mChannel, uid, elapsed);
}

void RtcEngineEventHandler::onUserJoined(rtc::uid_t uid, int elapsed) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<rtc::uid_t, int>("onUserJoined", uid, elapsed);
}

void RtcEngineEventHandler::onClientRoleChanged(CLIENT_ROLE_TYPE oldRole,
                                                CLIENT_ROLE_TYPE newRole) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<int, int>("onClientRoleChanged", oldRole,
                                        newRole);
}

void RtcEngineEventHandler::onUserOffline(rtc::uid_t uid,
                                          USER_OFFLINE_REASON_TYPE reason) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<rtc::uid_t, int>("onUserOffline", uid, reason);
}

void RtcEngineEventHandler::onUserMuteAudio(rtc::uid_t uid, bool muted) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<rtc::uid_t, bool>("onUserMuteAudio", uid, muted);
}

void RtcEngineEventHandler::onFirstRemoteVideoDecoded(rtc::uid_t uid, int width,
                                                      int height, int elapsed) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<rtc::uid_t, int, int, int>(
      "onFirstRemoteVideoDecoded", uid, width, height, elapsed);
}

void RtcEngineEventHandler::onUserMuteVideo(rtc::uid_t uid, bool muted) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<rtc::uid_t, bool>("onUserMuteVideo", uid, muted);
}

void RtcEngineEventHandler::onAudioRouteChanged(AUDIO_ROUTE_TYPE routing) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<int>("onAudioRouteChanged", routing);
}

void RtcEngineEventHandler::onConnectionLost() {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall("onConnectionLost");
}

void RtcEngineEventHandler::onRequestToken() {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall("onRequestToken");
}

void RtcEngineEventHandler::onAudioVolumeIndication(
    const AudioVolumeInfo *speakers, unsigned int speakerNumber,
    int totalVolume) {
  if (!mEventHandler && !speakers)
    return;

  mEventHandler->functionCall("onAudioVolumeIndication", speakers,
                              speakerNumber, totalVolume);
}

void RtcEngineEventHandler::onWarning(int warn, const char *msg) {
  if (!mEventHandler)
    return;

  std::string message = msg ? msg : "";
  mEventHandler->functionCall<int, std::string>("onWarning", warn, message);
}

void RtcEngineEventHandler::onError(int err, const char *msg) {
  if (!mEventHandler)
    return;

  std::string message = msg ? msg : "";
  mEventHandler->functionCall<int, std::string>("onError", err, message);
}

void RtcEngineEventHandler::onRtcStats(const RtcStats &stats) {
  if (!mEventHandler)
    return;

  const RtcStats mStats = stats;
  mEventHandler->functionCall("onRtcStats", mStats);
}

void RtcEngineEventHandler::onAudioMixingFinished() {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall("onAudioMixingFinished");
}

void RtcEngineEventHandler::onVideoSizeChanged(rtc::uid_t uid, int width,
                                               int height, int rotation) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<rtc::uid_t, int, int, int>(
      "onVideoSizeChanged", uid, width, height, rotation);
}

void RtcEngineEventHandler::onConnectionInterrupted() {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall("onConnectionInterrupted");
}

void RtcEngineEventHandler::onMicrophoneEnabled(bool enabled) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<bool>("onMicrophoneEnabled", enabled);
}

void RtcEngineEventHandler::onFirstRemoteAudioFrame(rtc::uid_t uid,
                                                    int elapsed) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<rtc::uid_t, int>("onFirstRemoteAudioFrame", uid,
                                               elapsed);
}

void RtcEngineEventHandler::onFirstLocalAudioFrame(int elapsed) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<int>("onFirstLocalAudioFrame", elapsed);
}

void RtcEngineEventHandler::onApiCallExecuted(int err, const char *api,
                                              const char *result) {
  if (!mEventHandler)
    return;

  std::string mApi = api ? api : "";
  std::string mResult = result ? result : "";
  mEventHandler->functionCall<int, std::string, std::string>(
      "onApiCallExecuted", err, mApi, mResult);
}

void RtcEngineEventHandler::onLastmileQuality(int quality) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<int>("onLastmileQuality", quality);
}

void RtcEngineEventHandler::onLastmileProbeResult(
    const LastmileProbeResult &result) {
  if (!mEventHandler)
    return;

  const LastmileProbeResult mResult = result;
  mEventHandler->functionCall("onLastmileProbeResult", mResult);
}

void RtcEngineEventHandler::onAudioQuality(rtc::uid_t uid, int quality,
                                           unsigned short delay,
                                           unsigned short lost) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<rtc::uid_t, int, unsigned short, unsigned short>(
      "onAudioQuality", uid, quality, delay, lost);
}

void RtcEngineEventHandler::onRemoteVideoTransportStats(
    rtc::uid_t uid, unsigned short delay, unsigned short lost,
    unsigned short rxKBitRate) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<rtc::uid_t, unsigned short, unsigned short,
                              unsigned short>("onRemoteVideoTransportStats",
                                              uid, delay, lost, rxKBitRate);
}

void RtcEngineEventHandler::onRemoteAudioTransportStats(
    rtc::uid_t uid, unsigned short delay, unsigned short lost,
    unsigned short rxKBitRate) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<rtc::uid_t, unsigned short, unsigned short,
                              unsigned short>("onRemoteAudioTransportStats",
                                              uid, delay, lost, rxKBitRate);
}

void RtcEngineEventHandler::onStreamInjectedStatus(const char *url,
                                                   rtc::uid_t uid, int status) {
  if (!mEventHandler)
    return;

  std::string mUrl = url ? url : "";
  mEventHandler->functionCall<std::string, rtc::uid_t, int>(
      "onStreamInjectedStatus", mUrl, uid, status);
}

void RtcEngineEventHandler::onTranscodingUpdated() {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall("onTranscodingUpdated");
}

void RtcEngineEventHandler::onStreamUnpublished(const char *url) {
  if (!mEventHandler)
    return;

  std::string mUrl = url ? url : "";
  mEventHandler->functionCall<std::string>("onStreamUnpublished", mUrl);
}

void RtcEngineEventHandler::onStreamPublished(const char *url, int error) {
  if (!mEventHandler)
    return;

  std::string mUrl = url ? url : "";
  mEventHandler->functionCall<std::string, int>("onStreamPublished", mUrl,
                                                error);
}

void RtcEngineEventHandler::onAudioDeviceVolumeChanged(
    MEDIA_DEVICE_TYPE deviceType, int volume, bool muted) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<int, int, bool>("onAudioDeviceVolumeChanged",
                                              deviceType, volume, muted);
}

void RtcEngineEventHandler::onActiveSpeaker(rtc::uid_t uid) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<rtc::uid_t>("onActiveSpeaker", uid);
}

void RtcEngineEventHandler::onMediaEngineStartCallSuccess() {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall("onMediaEngineStartCallSuccess");
}

void RtcEngineEventHandler::onMediaEngineLoadSuccess() {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall("onMediaEngineLoadSuccess");
}

void RtcEngineEventHandler::onStreamMessageError(rtc::uid_t uid, int streamId,
                                                 int code, int missed,
                                                 int cached) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<rtc::uid_t, int, int, int, int>(
      "onStreamMessageError", uid, streamId, code, missed, cached);
}

void RtcEngineEventHandler::onStreamMessage(rtc::uid_t uid, int streamId,
                                            const char *data, size_t length) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall("onStreamMessage", uid, streamId, data, length);
}

void RtcEngineEventHandler::onConnectionBanned() {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall("onConnectionBanned");
}

void RtcEngineEventHandler::onVideoStopped() {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall("onVideoStopped");
}

void RtcEngineEventHandler::onTokenPrivilegeWillExpire(const char *token) {
  if (!mEventHandler)
    return;

  std::string mToken = token ? token : "";
  mEventHandler->functionCall<std::string>("onTokenPrivilegeWillExpire",
                                           mToken);
}

void RtcEngineEventHandler::onNetworkQuality(rtc::uid_t uid, int txQuality,
                                             int rxQuality) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<rtc::uid_t, int, int>("onNetworkQuality", uid,
                                                    txQuality, rxQuality);
}

void RtcEngineEventHandler::onLocalVideoStats(const LocalVideoStats &stats) {
  if (!mEventHandler)
    return;

  const LocalVideoStats mStats = stats;
  mEventHandler->functionCall("onLocalVideoStats", mStats);
}

void RtcEngineEventHandler::onLocalAudioStats(const LocalAudioStats &stats) {
  if (!mEventHandler)
    return;

  const LocalAudioStats mStats = stats;
  mEventHandler->functionCall("onLocalAudioStats", mStats);
}

void RtcEngineEventHandler::onRemoteVideoStats(const RemoteVideoStats &stats) {
  if (!mEventHandler)
    return;

  const RemoteVideoStats mStats = stats;
  mEventHandler->functionCall("onRemoteVideoStats", mStats);
}

void RtcEngineEventHandler::onRemoteAudioStats(const RemoteAudioStats &stats) {
  if (!mEventHandler)
    return;

  const RemoteAudioStats mStats = stats;
  mEventHandler->functionCall("onRemoteAudioStats", mStats);
}

void RtcEngineEventHandler::onFirstLocalVideoFrame(int width, int height,
                                                   int elapsed) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<int, int, int>("onFirstLocalVideoFrame", width,
                                             height, elapsed);
}

void RtcEngineEventHandler::onFirstRemoteVideoFrame(rtc::uid_t uid, int width,
                                                    int height, int elapsed) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<rtc::uid_t, int, int, int>(
      "onFirstRemoteVideoFrame", uid, width, height, elapsed);
}

void RtcEngineEventHandler::onUserEnableVideo(rtc::uid_t uid, bool enabled) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<rtc::uid_t, bool>("onUserEnableVideo", uid,
                                                enabled);
}

void RtcEngineEventHandler::onAudioDeviceStateChanged(const char *deviceId,
                                                      int deviceType,
                                                      int deviceState) {
  if (!mEventHandler)
    return;

  std::string mDeviceId = deviceId ? deviceId : "";
  mEventHandler->functionCall<std::string, int, int>(
      "onAudioDeviceStateChanged", mDeviceId, deviceType, deviceState);
}

void RtcEngineEventHandler::onCameraReady() {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall("onCameraReady");
}

void RtcEngineEventHandler::onCameraFocusAreaChanged(int x, int y, int width,
                                                     int height) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<int, int, int, int>("onCameraFocusAreaChanged", x,
                                                  y, width, height);
}

void RtcEngineEventHandler::onCameraExposureAreaChanged(int x, int y, int width,
                                                        int height) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<int, int, int, int>("onCameraExposureAreaChanged",
                                                  x, y, width, height);
}

void RtcEngineEventHandler::onRemoteAudioMixingBegin() {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall("onRemoteAudioMixingBegin");
}

void RtcEngineEventHandler::onRemoteAudioMixingEnd() {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall("onRemoteAudioMixingEnd");
}

void RtcEngineEventHandler::onAudioEffectFinished(int soundId) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<int>("onAudioEffectFinished", soundId);
}

void RtcEngineEventHandler::onVideoDeviceStateChanged(const char *deviceId,
                                                      int deviceType,
                                                      int deviceState) {
  if (!mEventHandler)
    return;

  std::string mDevieId = deviceId ? deviceId : "";
  mEventHandler->functionCall<std::string, int, int>(
      "onVideoDeviceStateChanged", mDevieId, deviceType, deviceState);
}

void RtcEngineEventHandler::onRemoteVideoStateChanged(
    rtc::uid_t uid, REMOTE_VIDEO_STATE state, REMOTE_VIDEO_STATE_REASON reason,
    int elapsed) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<rtc::uid_t, int, int, int>(
      "onRemoteVideoStateChanged", uid, state, reason, elapsed);
}

void RtcEngineEventHandler::onUserEnableLocalVideo(rtc::uid_t uid,
                                                   bool enabled) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<rtc::uid_t, bool>("onUserEnableLocalVideo", uid,
                                                enabled);
}

void RtcEngineEventHandler::onLocalPublishFallbackToAudioOnly(
    bool isFallbackOrRecover) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<bool>("onLocalPublishFallbackToAudioOnly",
                                    isFallbackOrRecover);
}

void RtcEngineEventHandler::onRemoteSubscribeFallbackToAudioOnly(
    rtc::uid_t uid, bool isFallbackOrRecover) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<rtc::uid_t, bool>(
      "onRemoteSubscribeFallbackToAudioOnly", uid, isFallbackOrRecover);
}

void RtcEngineEventHandler::onConnectionStateChanged(
    CONNECTION_STATE_TYPE state, CONNECTION_CHANGED_REASON_TYPE reason) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<int, int>("onConnectionStateChanged", state,
                                        reason);
}

void RtcEngineEventHandler::onAudioMixingStateChanged(
    AUDIO_MIXING_STATE_TYPE state, AUDIO_MIXING_ERROR_TYPE errorCode) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<int, int>("onAudioMixingStateChanged", state,
                                        errorCode);
}

void RtcEngineEventHandler::onFirstRemoteAudioDecoded(rtc::uid_t uid,
                                                      int elapsed) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<rtc::uid_t, int>("onFirstRemoteAudioDecoded", uid,
                                               elapsed);
}

void RtcEngineEventHandler::onLocalVideoStateChanged(
    LOCAL_VIDEO_STREAM_STATE localVideoState, LOCAL_VIDEO_STREAM_ERROR error) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<int, int>("onLocalVideoStateChanged",
                                        localVideoState, error);
}

void RtcEngineEventHandler::onRtmpStreamingStateChanged(
    const char *url, RTMP_STREAM_PUBLISH_STATE state,
    RTMP_STREAM_PUBLISH_ERROR errCode) {
  if (!mEventHandler)
    return;

  std::string mUrl = url ? url : "";
  mEventHandler->functionCall<std::string, int, int>(
      "onRtmpStreamingStateChanged", mUrl, state, errCode);
}

void RtcEngineEventHandler::onNetworkTypeChanged(NETWORK_TYPE type) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<int>("onNetworkTypeChanged", type);
}

void RtcEngineEventHandler::onLocalUserRegistered(rtc::uid_t uid,
                                                  const char *userAccount) {
  if (!mEventHandler)
    return;

  std::string mUserAccount = userAccount ? userAccount : "";
  mEventHandler->functionCall<rtc::uid_t, std::string>("onLocalUserRegistered",
                                                       uid, mUserAccount);
}

void RtcEngineEventHandler::onUserInfoUpdated(rtc::uid_t uid,
                                              const UserInfo &info) {
  if (!mEventHandler)
    return;

  const UserInfo mInfo = info;
  mEventHandler->functionCall("onUserInfoUpdated", uid, mInfo);
}

void RtcEngineEventHandler::onLocalAudioStateChanged(
    LOCAL_AUDIO_STREAM_STATE state, LOCAL_AUDIO_STREAM_ERROR error) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<int, int>("onLocalAudioStateChanged", state,
                                        error);
}

void RtcEngineEventHandler::onRemoteAudioStateChanged(
    rtc::uid_t uid, REMOTE_AUDIO_STATE state, REMOTE_AUDIO_STATE_REASON reason,
    int elapsed) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<rtc::uid_t, int, int, int>(
      "onRemoteAudioStateChanged", uid, state, reason, elapsed);
}

void RtcEngineEventHandler::onChannelMediaRelayStateChanged(
    CHANNEL_MEDIA_RELAY_STATE state, CHANNEL_MEDIA_RELAY_ERROR code) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<int, int>("onChannelMediaRelayStateChanged",
                                        state, code);
}

void RtcEngineEventHandler::onChannelMediaRelayEvent(
    CHANNEL_MEDIA_RELAY_EVENT code) {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall<int>("onChannelMediaRelayEvent", code);
}

#if defined(__ANDROID__) || (defined(__APPLE__) && TARGET_OS_IOS)

void RtcEngineEventHandler::onFacePositionChanged(int imageWidth,
                                                  int imageHeight,
                                                  Rectangle *vecRectangle,
                                                  int *vecDistance,
                                                  int numFaces) {
  if (!mEventHandler)
    return;

  if (vecRectangle == nullptr || vecDistance == nullptr)
    return;

  mEventHandler->functionCall("onFacePositionChanged", imageWidth, imageHeight,
                              vecRectangle, vecDistance, numFaces);
}

#endif

void RtcEngineEventHandler::onTestEnd() {
  if (!mEventHandler)
    return;

  mEventHandler->functionCall("onTestEnd");
}

} // namespace common
} // namespace agora
