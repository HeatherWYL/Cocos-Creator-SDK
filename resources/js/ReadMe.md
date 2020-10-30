声网通过全球部署的虚拟网络，提供可以灵活搭配的 API 组合，为移动端到移动端以及移动端到 Web 端提供质量可靠的实时音视频通信

- [agora]{@link agora} 命名空间包含应用程序调用的主要方法
- [AgoraRtcEvents]{@link AgoraRtcEvents} 类用于向应用程序发送回调通知

### 频道管理

<table>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
<tr>
<td>[init]{@link agora.init}</td>
<td>初始化 Agora 引擎</td>
</tr>
<tr>
<td>[initWithAreaCode]{@link agora.initWithAreaCode}</td>
<td>初始化 Agora 引擎（指定访问区域）</td>
</tr>
<tr>
<td>[release]{@link agora.release}</td>
<td>销毁 Agora 引擎</td>
</tr>
<tr>
<td>[setChannelProfile]{@link agora.setChannelProfile}</td>
<td>设置频道场景</td>
</tr>
<tr>
<td>[setClientRole]{@link agora.setClientRole}</td>
<td>设置直播场景下的用户角色</td>
</tr>
<tr>
<td>[joinChannel]{@link agora.joinChannel}</td>
<td>加入频道</td>
</tr>
<tr>
<td>[switchChannel]{@link agora.switchChannel}</td>
<td>快速切换直播频道</td>
</tr>
<tr>
<td>[leaveChannel]{@link agora.leaveChannel}</td>
<td>离开频道</td>
</tr>
<tr>
<td>[renewToken]{@link agora.renewToken}</td>
<td>更新 Token</td>
</tr>
<tr>
<td>[getConnectionState]{@link agora.getConnectionState}</td>
<td>获取网络连接状态</td>
</tr>
</table>

### 频道事件

<table>
<tr>
<th>事件</th>
<th>描述</th>
</tr>
<tr>
<td>[onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged}</td>
<td>网络连接状态已改变回调</td>
</tr>
<tr>
<td>[onJoinChannelSuccess]{@link AgoraRtcEvents.onJoinChannelSuccess}</td>
<td>加入频道回调</td>
</tr>
<tr>
<td>[onRejoinChannelSuccess]{@link AgoraRtcEvents.onRejoinChannelSuccess}</td>
<td>重新加入频道回调</td>
</tr>
<tr>
<td>[onLeaveChannel]{@link AgoraRtcEvents.onLeaveChannel}</td>
<td>离开频道回调</td>
</tr>
<tr>
<td>[onClientRoleChanged]{@link AgoraRtcEvents.onClientRoleChanged}</td>
<td>用户角色已切换回调</td>
</tr>
<tr>
<td>[onUserJoined]{@link AgoraRtcEvents.onUserJoined}</td>
<td>远端用户加入当前频道回调</td>
</tr>
<tr>
<td>[onUserOffline]{@link AgoraRtcEvents.onUserOffline}</td>
<td>远端用户离开当前频道回调</td>
</tr>
<tr>
<td>[onNetworkTypeChanged]{@link AgoraRtcEvents.onNetworkTypeChanged}</td>
<td>本地网络类型发生改变回调</td>
</tr>
<tr>
<td>[onConnectionLost]{@link AgoraRtcEvents.onConnectionLost}</td>
<td>网络连接丢失回调</td>
</tr>
<tr>
<td>[onTokenPrivilegeWillExpire]{@link AgoraRtcEvents onTokenPrivilegeWillExpire}</td>
<td>Token 服务即将过期回调</td>
</tr>
<tr>
<td>[onRequestToken]{@link AgoraRtcEvents onRequestToken}</td>
<td>Token 已过期回调</td>
</tr>
</table>

### 音频管理

<table>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
<tr>
<td>[enableAudio]{@link agora.enableAudio}</td>
<td>启用音频模块</td>
</tr>
<tr>
<td>[disableAudio]{@link agora.disableAudio}</td>
<td>关闭音频模块</td>
</tr>
<tr>
<td>[setAudioProfile]{@link agora.setAudioProfile}</td>
<td>设置音频编码属性</td>
</tr>
<tr>
<td>[adjustRecordingSignalVolume]{@link agora.adjustRecordingSignalVolume}</td>
<td>调节录音音量</td>
</tr>
<tr>
<td>[adjustUserPlaybackSignalVolume]{@link agora.adjustUserPlaybackSignalVolume}</td>
<td>调节本地播放的指定远端用户音量</td>
</tr>
<tr>
<td>[adjustPlaybackSignalVolume]{@link agora.adjustPlaybackSignalVolume}</td>
<td>调节本地播放的所有远端用户音量</td>
</tr>
<tr>
<td>[enableLocalAudio]{@link agora.enableLocalAudio}</td>
<td>开关本地音频采集</td>
</tr>
<tr>
<td>[muteLocalAudioStream]{@link agora.muteLocalAudioStream}</td>
<td>停止/恢复发送本地音频流</td>
</tr>
<tr>
<td>[muteRemoteAudioStream]{@link agora.muteRemoteAudioStream}</td>
<td>停止/恢复接收指定音频流</td>
</tr>
<tr>
<td>[muteAllRemoteAudioStreams]{@link agora.muteAllRemoteAudioStreams}</td>
<td>停止/恢复接收所有音频流</td>
</tr>
<tr>
<td>[setDefaultMuteAllRemoteAudioStreams]{@link agora.setDefaultMuteAllRemoteAudioStreams}</td>
<td>设置是否默认接收音频流</td>
</tr>
</table>

### 本地媒体事件

<table>
<tr>
<th>事件</th>
<th>描述</th>
</tr>
<tr>
<td>[onLocalAudioStateChanged]{@link AgoraRtcEvents.onLocalAudioStateChanged}</td>
<td>本地音频状态改变回调</td>
</tr>
<tr>
<td>[onFirstLocalAudioFramePublished]{@link AgoraRtcEvents.onFirstLocalAudioFramePublished}</td>
<td>已发布本地音频首帧回调</td>
</tr>
<tr>
<td>[onAudioPublishStateChanged]{@link AgoraRtcEvents.onAudioPublishStateChanged}</td>
<td>音频发布状态改变回调</td>
</tr>
</table>

### 远端媒体事件

<table>
<tr>
<th>事件</th>
<th>描述</th>
</tr>
<tr>
<td>[onRemoteAudioStateChanged]{@link AgoraRtcEvents.onRemoteAudioStateChanged}</td>
<td>远端用户音频状态已改变回调</td>
</tr>
<tr>
<td>[onAudioSubscribeStateChanged]{@link AgoraRtcEvents.onAudioSubscribeStateChanged}</td>
<td>音频订阅状态改变回调</td>
</tr>
</table>

### 数据统计事件

> 加入频道后，SDK 每隔 2 秒自动触发本组回调

<table>
<tr>
<th>事件</th>
<th>描述</th>
</tr>
<tr>
<td>[onRtcStats]{@link AgoraRtcEvents.onRtcStats}</td>
<td>当前通话统计回调</td>
</tr>
<tr>
<td>[onNetworkQuality]{@link AgoraRtcEvents.onNetworkQuality}</td>
<td>网络上下行质量报告回调</td>
</tr>
<tr>
<td>[onLocalAudioStats]{@link AgoraRtcEvents.onLocalAudioStats}</td>
<td>通话中本地音频流统计信息回调</td>
</tr>
<tr>
<td>[onRemoteAudioStats]{@link AgoraRtcEvents.onRemoteAudioStats}</td>
<td>通话中远端音频流的统计信息回调</td>
</tr>
</table>

### 音乐文件播放及混音

<table>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
<tr>
<td>[startAudioMixing]{@link agora.startAudioMixing}</td>
<td>开始播放音乐文件</td>
</tr>
<tr>
<td>[stopAudioMixing]{@link agora.stopAudioMixing}</td>
<td>停止播放音乐文件</td>
</tr>
<tr>
<td>[pauseAudioMixing]{@link agora.pauseAudioMixing}</td>
<td>暂停播放音乐文件</td>
</tr>
<tr>
<td>[resumeAudioMixing]{@link agora.resumeAudioMixing}</td>
<td>恢复播放音乐文件</td>
</tr>
<tr>
<td>[adjustAudioMixingVolume]{@link agora.adjustAudioMixingVolume}</td>
<td>调节音乐文件播放音量</td>
</tr>
<tr>
<td>[adjustAudioMixingPlayoutVolume]{@link agora.adjustAudioMixingPlayoutVolume}</td>
<td>调节音乐文件的本地播放音量</td>
</tr>
<tr>
<td>[adjustAudioMixingPublishVolume]{@link agora.adjustAudioMixingPublishVolume}</td>
<td>调节音乐文件的远端播放音量</td>
</tr>
<tr>
<td>[setAudioMixingPitch]{@link agora.setAudioMixingPitch}</td>
<td>调整本地播放的音乐文件的音调</td>
</tr>
<tr>
<td>[getAudioMixingPlayoutVolume]{@link agora.getAudioMixingPlayoutVolume}</td>
<td>获取音乐文件的本地播放音量</td>
</tr>
<tr>
<td>[getAudioMixingPublishVolume]{@link agora.getAudioMixingPublishVolume}</td>
<td>获取音乐文件的远端播放音量</td>
</tr>
<tr>
<td>[getAudioMixingDuration]{@link agora.getAudioMixingDuration}</td>
<td>获取音乐文件播放时长</td>
</tr>
<tr>
<td>[getAudioMixingCurrentPosition]{@link agora.getAudioMixingCurrentPosition}</td>
<td>获取音乐文件的播放进度</td>
</tr>
<tr>
<td>[setAudioMixingPosition]{@link agora.setAudioMixingPosition}</td>
<td>设置音乐文件的播放位置</td>
</tr>
</table>

<table>
<tr>
<th>事件</th>
<th>描述</th>
</tr>
<tr>
<td>[onAudioMixingStateChanged]{@link AgoraRtcEvents.onAudioMixingStateChanged}</td>
<td>本地用户的音乐文件播放状态已改变回调</td>
</tr>
<tr>
<td>[onRemoteAudioMixingBegin]{@link AgoraRtcEvents.onRemoteAudioMixingBegin}</td>
<td>远端音乐文件播放已开始回调</td>
</tr>
<tr>
<td>[onRemoteAudioMixingEnd]{@link AgoraRtcEvents.onRemoteAudioMixingEnd}</td>
<td>远端音乐文件播放已结束回调</td>
</tr>
</table>

### 音效文件播放管理

<table>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
<tr>
<td>[getEffectsVolume]{@link agora.getEffectsVolume}</td>
<td>获取音效文件的播放音量</td>
</tr>
<tr>
<td>[setEffectsVolume]{@link agora.setEffectsVolume}</td>
<td>设置音效文件的播放音量</td>
</tr>
<tr>
<td>[setVolumeOfEffect]{@link agora.setVolumeOfEffect}</td>
<td>实时调整音效文件的播放音量</td>
</tr>
<tr>
<td>[playEffect]{@link agora.playEffect}</td>
<td>播放指定音效文件</td>
</tr>
<tr>
<td>[stopEffect]{@link agora.stopEffect}</td>
<td>停止播放指定音效文件</td>
</tr>
<tr>
<td>[stopAllEffects]{@link agora.stopAllEffects}</td>
<td>停止播放所有音效文件</td>
</tr>
<tr>
<td>[preloadEffect]{@link agora.preloadEffect}</td>
<td>将音效文件加载至内存</td>
</tr>
<tr>
<td>[unloadEffect]{@link agora.unloadEffect}</td>
<td>从内存释放某个预加载的音效文件</td>
</tr>
<tr>
<td>[pauseEffect]{@link agora.pauseEffect}</td>
<td>暂停播放指定音效文件</td>
</tr>
<tr>
<td>[pauseAllEffects]{@link agora.pauseAllEffects}</td>
<td>暂停播放所有音效文件</td>
</tr>
<tr>
<td>[resumeEffect]{@link agora.resumeEffect}</td>
<td>恢复播放指定音效文件</td>
</tr>
<tr>
<td>[resumeAllEffects]{@link agora.resumeAllEffects}</td>
<td>恢复播放所有音效文件</td>
</tr>
</table>
<table>
<tr>
<th>事件</th>
<th>描述</th>
</tr>
<tr>
<td>[onAudioEffectFinished]{@link AgoraRtcEvents.onAudioEffectFinished}</td>
<td>本地音效文件播放已结束回调</td>
</tr>
</table>

### 变声与混响

<table>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
<tr>
<td>[setLocalVoiceChanger]{@link agora.setLocalVoiceChanger}</td>
<td>设置本地语音变声</td>
</tr>
<tr>
<td>[setLocalVoiceReverbPreset]{@link agora.setLocalVoiceReverbPreset}</td>
<td>设置预设的本地语音混响效果</td>
</tr>
<tr>
<td>[setLocalVoicePitch]{@link agora.setLocalVoicePitch}</td>
<td>设置本地语音音调</td>
</tr>
<tr>
<td>[setLocalVoiceEqualization]{@link agora.setLocalVoiceEqualization}</td>
<td>设置本地语音音效均衡</td>
</tr>
<tr>
<td>[setLocalVoiceReverb]{@link agora.setLocalVoiceReverb}</td>
<td>设置本地音效混响</td>
</tr>
</table>

### 听声辨位

<table>
<tr>
<th>方法</th>
<th>描述</th>
<tr>
<td>[enableSoundPositionIndication]{@link agora.enableSoundPositionIndication}</td>
<td>开启/关闭远端用户的语音立体声</td>
</tr>
<tr>
<td>[setRemoteVoicePosition]{@link agora.setRemoteVoicePosition}</td>
<td>设置远端用户的语音位置</td>
</tr>
</table>

### CDN 推流

> 该组方法仅适用于互动直播

<table>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
<tr>
<td>[setLiveTranscoding]{@link agora.setLiveTranscoding}</td>
<td>设置直播转码</td>
</tr>
<tr>
<td>[addPublishStreamUrl]{@link agora.addPublishStreamUrl}</td>
<td>增加旁路推流地址</td>
</tr>
<tr>
<td>[removePublishStreamUrl]{@link agora.removePublishStreamUrl}</td>
<td>删除旁路推流地址</td>
</tr>
</table>

<table>
<tr>
<th>事件</th>
<th>描述</th>
</tr>
<tr>
<td>[onRtmpStreamingStateChanged]{@link AgoraRtcEvents.onRtmpStreamingStateChanged}</td>
<td>旁路推流状态改变回调</td>
</tr>
<tr>
<td>[onRtmpStreamingEvent]{@link AgoraRtcEvents.onRtmpStreamingEvent}</td>
<td>RTMP 推流事件回调</td>
</tr>
<tr>
<td>[onTranscodingUpdated]{@link AgoraRtcEvents.onTranscodingUpdated}</td>
<td>旁路推流设置已被更新回调</td>
</tr>
</table>

### 跨频道媒体流转发

<table>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
<tr>
<td>[startChannelMediaRelay]{@link agora.startChannelMediaRelay}</td>
<td>开始跨频道媒体流转发</td>
</tr>
<tr>
<td>[updateChannelMediaRelay]{@link agora.updateChannelMediaRelay}</td>
<td>更新媒体流转发的频道</td>
</tr>
<tr>
<td>[stopChannelMediaRelay]{@link agora.stopChannelMediaRelay}</td>
<td>停止跨频道媒体流转发</td>
</tr>
</table>

<table>
<tr>
<th>事件</th>
<th>描述</th>
</tr>
<tr>
<td>[onChannelMediaRelayStateChanged]{@link AgoraRtcEvents.onChannelMediaRelayStateChanged}</td>
<td>跨频道媒体流转发状态发生改变回调</td>
</tr>
<tr>
<td>[onChannelMediaRelayEvent]{@link AgoraRtcEvents.onChannelMediaRelayEvent}</td>
<td>跨频道媒体流转发事件回调</td>
</tr>
</table>

### 音量提示

<table>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
<tr>
<td>[enableAudioVolumeIndication]{@link agora.enableAudioVolumeIndication}</td>
<td>启用说话者音量提示</td>
</tr>
</table>

<table>
<tr>
<th>事件</th>
<th>描述</th>
</tr>
<tr>
<td>[onAudioVolumeIndication]{@link AgoraRtcEvents.onAudioVolumeIndication}</td>
<td>提示频道内谁正在说话及说话者音量的回调</td>
</tr>
<tr>
<td>[onActiveSpeaker]{@link AgoraRtcEvents.onActiveSpeaker}</td>
<td>监测到最活跃用户回调</td>
</tr>
</table>

### 语音播放路由

<table>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
<tr>
<td>[setDefaultAudioRouteToSpeakerphone]{@link agora.setDefaultAudioRouteToSpeakerphone}</td>
<td>设置默认的音频播放路由</td>
</tr>
<tr>
<td>[setEnableSpeakerphone]{@link agora.setEnableSpeakerphone}</td>
<td>启用/关闭扬声器播放</td>
</tr>
<tr>
<td>[isSpeakerphoneEnabled]{@link agora.isSpeakerphoneEnabled}</td>
<td>查询扬声器启用状态</td>
</tr>
</table>

<table>
<tr>
<th>事件</th>
<th>描述</th>
</tr>
<tr>
<td>[onAudioRouteChanged]{@link AgoraRtcEvents.onAudioRouteChanged}</td>
<td>语音路由已改变回调</td>
</tr>
</table>

### 耳返控制

<table>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
<tr>
<td>[enableInEarMonitoring]{@link agora.enableInEarMonitoring}</td>
<td>开启耳返功能</td>
</tr>
<tr>
<td>[setInEarMonitoringVolume]{@link agora.setInEarMonitoringVolume}</td>
<td>设置耳返音量</td>
</tr>
</table>

### 通话前网络测试

<table>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
<tr>
<td>[startEchoTest]{@link agora.startEchoTest}</td>
<td>开始语音通话回路测试</td>
</tr>
<tr>
<td>[stopEchoTest]{@link agora.stopEchoTest}</td>
<td>停止语音通话回路测试</td>
</tr>
<tr>
<td>[enableLastmileTest]{@link agora.enableLastmileTest}</td>
<td>启用网络测试</td>
</tr>
<tr>
<td>[disableLastmileTest]{@link agora.disableLastmileTest}</td>
<td>关闭网络测试</td>
</tr>
<tr>
<td>[startLastmileProbeTest]{@link agora.startLastmileProbeTest}</td>
<td>开始通话前网络质量探测</td>
</tr>
<tr>
<td>[stopLastmileProbeTest]{@link agora.stopLastmileProbeTest}</td>
<td>停止通话前网络质量探测</td>
</tr>
</table>

<table>
<tr>
<th>事件</th>
<th>描述</th>
</tr>
<tr>
<td>[onLastmileQuality]{@link AgoraRtcEvents.onLastmileQuality}</td>
<td>本地网络质量报告回调</td>
</tr>
<tr>
<td>[onLastmileProbeResult]{@link AgoraRtcEvents.onLastmileProbeResult}</td>
<td>本地网络上下行 Last-mile 质量报告回调</td>
</tr>
</table>

### 加密

<table>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
<tr>
<td>[enableEncryption]{@link agora.enableEncryption}</td>
<td>开启/关闭内置加密</td>
</tr>
<tr>
<td>[registerPacketObserver]{@link agora.registerPacketObserver}</td>
<td>注册数据包观测器</td>
</tr>
</table>


### 音频录制

<table>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
<tr>
<td>[startAudioRecording]{@link agora.startAudioRecording}</td>
<td>开始客户端录音</td>
</tr>
<tr>
<td>[stopAudioRecording]{@link agora.stopAudioRecording}</td>
<td>停止客户端录音</td>
</tr>
</table>

### 直播输入在线媒体流

> 该组方法仅适用于互动直播

<table>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
<tr>
<td>[addInjectStreamUrl]{@link agora.addInjectStreamUrl}</td>
<td>输入在线媒体流</td>
</tr>
<tr>
<td>[removeInjectStreamUrl]{@link agora.removeInjectStreamUrl}</td>
<td>删除输入的在线媒体流</td>
</tr>
</table>

<table>
<tr>
<th>事件</th>
<th>描述</th>
</tr>
<tr>
<td>[onStreamInjectedStatus]{@link AgoraRtcEvents.onStreamInjectedStatus}</td>
<td>输入在线媒体流状态回调</td>
</tr>
</table>

### 流消息

<table>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
<tr>
<td>[createDataStream]{@link agora.createDataStream}</td>
<td>创建数据流</td>
</tr>
<tr>
<td>[sendStreamMessage]{@link agora.sendStreamMessage}</td>
<td>发送数据流</td>
</tr>
</table>

<table>
<tr>
<th>事件</th>
<th>描述</th>
</tr>
<tr>
<td>[onStreamMessage]{@link AgoraRtcEvents.onStreamMessage}</td>
<td>接收到对方数据流消息的回调</td>
</tr>
<tr>
<td>[onStreamMessageError]{@link AgoraRtcEvents.onStreamMessageError}</td>
<td>接收对方数据流消息发生错误的回调</td>
</tr>
</table>

### 其他方法
<table>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
<tr>
<td>[sendCustomReportMessage]{@link agora.sendCustomReportMessage}</td>
<td>自定义数据上报</td>
</tr>
<tr>
<td>[getCallId]{@link agora.getCallId}</td>
<td>获取通话 ID</td>
</tr>
<tr>
<td>[rate]{@link agora.rate}</td>
<td>给通话评分</td>
</tr>
<tr>
<td>[complain]{@link agora.complain}</td>
<td>投诉通话质量</td>
</tr>
<tr>
<td>[getVersion]{@link agora.getVersion}</td>
<td>查询 SDK 版本号</td>
</tr>
<tr>
<td>[setLogFile]{@link agora.setLogFile}</td>
<td>设置日志文件</td>
</tr>
<tr>
<td>[setLogFilter]{@link agora.setLogFilter}</td>
<td>设置日志输出等级</td>
</tr>
<tr>
<td>[setLogFileSize]{@link agora.setLogFileSize}</td>
<td>设置日志文件大小</td>
</tr>
<tr>
<td>[getErrorDescription]{@link agora.getErrorDescription}</td>
<td>获取警告或错误描述</td>
</tr>
</table>


### 其他事件

<table>
<tr>
<th>事件</th>
<th>描述</th>
</tr>
<tr>
<td>[onWarning]{@link AgoraRtcEvents.onWarning}</td>
<td>发生警告回调</td>
</tr>
<tr>
<td>[onError]{@link AgoraRtcEvents.onError}</td>
<td>发生错误回调</td>
</tr>
<tr>
<td>[onApiCallExecuted]{@link AgoraRtcEvents onApiCallExecuted}</td>
<td>API 方法已执行回调</td>
</tr>
</table>