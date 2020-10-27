namespace agora {
    /**
     * @ignore
     */
    export enum API_TYPE {
        INITIALIZE = 0,
        RELEASE = 1,
        SET_CHANNEL_PROFILE = 2,
        SET_CLIENT_ROLE = 3,
        JOIN_CHANNEL = 4,
        SWITCH_CHANNEL = 5,
        LEAVE_CHANNEL = 6,
        RE_NEW_TOKEN = 7,
        REGISTER_LOCAL_USER_ACCOUNT = 8,
        JOIN_CHANNEL_WITH_USER_ACCOUNT = 9,
        GET_USER_INFO_BY_USER_ACCOUNT = 10,
        GET_USER_INFO_BY_UID = 11,
        START_ECHO_TEST = 12,
        START_ECHO_TEST_2 = 13,
        STOP_ECHO_TEST = 14,
        ENABLE_VIDEO = 15,
        DISABLE_VIDEO = 16,
        SET_VIDEO_PROFILE = 17,
        SET_VIDEO_ENCODER_CONFIGURATION = 18,
        SET_CAMERA_CAPTURER_CONFIGURATION = 19,
        SET_UP_LOCAL_VIDEO = 20,
        SET_UP_REMOTE_VIDEO = 21,
        START_PREVIEW = 22,
        SET_REMOTE_USER_PRIORITY = 23,
        STOP_PREVIEW = 24,
        ENABLE_AUDIO = 25,
        ENABLE_LOCAL_AUDIO = 26,
        DISABLE_AUDIO = 27,
        SET_AUDIO_PROFILE = 28,
        MUTE_LOCAL_AUDIO_STREAM = 29,
        MUTE_ALL_REMOTE_AUDIO_STREAMS = 30,
        SET_DEFAULT_MUTE_ALL_REMOTE_AUDIO_STREAMS = 31,
        ADJUST_USER_PLAYBACK_SIGNAL_VOLUME = 32,
        MUTE_REMOTE_AUDIO_STREAM = 33,
        MUTE_LOCAL_VIDEO_STREAM = 34,
        ENABLE_LOCAL_VIDEO = 35,
        MUTE_ALL_REMOTE_VIDEO_STREAMS = 36,
        SET_DEFAULT_MUTE_ALL_REMOTE_VIDEO_STREAMS = 37,
        MUTE_REMOTE_VIDEO_STREAM = 38,
        SET_REMOTE_VIDEO_STREAM_TYPE = 39,
        SET_REMOTE_DEFAULT_VIDEO_STREAM_TYPE = 40,
        ENABLE_AUDIO_VOLUME_INDICATION = 41,
        START_AUDIO_RECORDING = 42,
        START_AUDIO_RECORDING2 = 43,
        STOP_AUDIO_RECORDING = 44,
        ENABLE_FACE_DETECTION = 62,
        SET_REMOTE_VOICE_POSITIONN = 73,
        SET_LOG_FILE = 79,
        SET_LOG_FILTER = 80,
        SET_LOG_FILE_SIZE = 81,
        SET_LOCAL_RENDER_MODE = 82,
        SET_LOCAL_RENDER_MODE_2 = 83,
        SET_REMOTE_RENDER_MODE = 84,
        SET_REMOTE_RENDER_MODE_2 = 85,
        SET_LOCAL_VIDEO_MIRROR_MODE = 86,
        ENABLE_DUAL_STREAM_MODE = 87,
        ADJUST_RECORDING_SIGNAL_VOLUME = 93,
        ADJUST_PLAYBACK_SIGNAL_VOLUME = 94,
        ENABLE_WEB_SDK_INTEROPER_ABILITY = 95,
        SET_VIDEO_QUALITY_PARAMETERS = 96,
        SET_LOCAL_PUBLISH_FALLBACK_OPTION = 97,
        SET_REMOTE_SUBSCRIBE_FALLBACK_OPTION = 98,
        SWITCH_CAMERA = 99,
        SWITCH_CAMERA_2 = 100,
        SET_DEFAULT_AUDIO_ROUTE_SPEAKER_PHONE = 101,
        SET_ENABLE_SPEAKER_PHONE = 102,
        ENABLE_IN_EAR_MONITORING = 103,
        SET_IN_EAR_MONITORING_VOLUME = 104,
        IS_SPEAKER_PHONE_ENABLED = 105,
        SET_AUDIO_SESSION_OPERATION_RESTRICTION = 106,
        ENABLE_LOOP_BACK_RECORDING = 107,
        START_SCREEN_CAPTURE_BY_DISPLAY_ID = 108,
        START_SCREEN_CAPTURE_BY_SCREEN_RECT = 109,
        START_SCREEN_CAPTURE_BY_WINDOW_ID = 110,
        SET_SCREEN_CAPTURE_CONTENT_HINT = 111,
        UPDATE_SCREEN_CAPTURE_PARAMETERS = 112,
        UPDATE_SCREEN_CAPTURE_REGION = 113,
        STOP_SCREEN_CAPTURE = 114,
        GET_CALL_ID = 117,
        RATE = 118,
        COMPLAIN = 119,
        GET_VERSION = 120,
        ENABLE_LAST_MILE_TEST = 121,
        DISABLE_LAST_MILE_TEST = 122,
        START_LAST_MILE_PROBE_TEST = 123,
        STOP_LAST_MILE_PROBE_TEST = 124,
        GET_ERROR_DESCRIPTION = 125,
        SET_ENCRYPTION_SECTRT = 126,
        SET_ENCRYPTION_MODE = 127,
        REGISTER_PACKET_OBSERVER = 128,
        CREATE_DATA_STREAM = 129,
        SEND_STREAM_MESSAGE = 130,
        ADD_PUBLISH_STREAM_URL = 131,
        REMOVE_PUBLISH_STREAM_URL = 132,
        SET_LIVE_TRANSCODING = 133,
        ADD_VIDEO_WATER_MARK = 134,
        ADD_VIDEO_WATER_MARK_2 = 135,
        CLEAR_VIDEO_WATER_MARKS = 136,
        SET_BEAUTY_EFFECT_OPTIONS = 137,
        ADD_INJECT_STREAM_URL = 138,
        START_CHANNEL_MEDIA_RELAY = 139,
        UPDATE_CHANNEL_MEDIA_RELAY = 140,
        STOP_CHANNEL_MEDIA_RELAY = 141,
        REMOVE_INJECT_STREAM_URL = 142,
        GET_CONNECTION_STATE = 143,
        REGISTER_MEDIA_META_DATA_OBSERVER = 144,
        SET_PARAMETERS = 145,
        SET_PLAYBACK_DEVICE_VOLUME = 146,
        PUBLISH = 147,
        UNPUBLISH = 148,
        CHANNEL_ID = 149,
        SEND_METADATA = 150,
        SET_MAX_META_SIZE = 151,
        PUSH_AUDIO_FRAME = 152,
        PUSH_AUDIO_FRAME_2 = 153,
        PULL_AUDIO_FRAME = 154,
        SET_EXTERN_VIDEO_SOURCE = 155,
        PUSH_VIDEO_FRAME = 156,
        ENABLE_ENCRYPTION = 157,
        SEND_CUSTOM_REPORT_MESSAGE = 158,
    }

    /**
     * @ignore
     */
    export enum API_TYPE_AUDIO_EFFECT {
        START_AUDIO_MIXING = 45,
        STOP_AUDIO_MIXING = 46,
        PAUSE_AUDIO_MIXING = 47,
        RESUME_AUDIO_MIXING = 48,
        SET_HIGH_QUALITY_AUDIO_PARAMETERS = 49,
        ADJUST_AUDIO_MIXING_VOLUME = 50,
        ADJUST_AUDIO_MIXING_PLAYOUT_VOLUME = 51,
        GET_AUDIO_MIXING_PLAYOUT_VOLUME = 52,
        ADJUST_AUDIO_MIXING_PUBLISH_VOLUME = 53,
        GET_AUDIO_MIXING_PUBLISH_VOLUME = 54,
        GET_AUDIO_MIXING_DURATION = 55,
        GET_AUDIO_MIXING_CURRENT_POSITION = 56,
        SET_AUDIO_MIXING_POSITION = 57,
        SET_AUDIO_MIXING_PITCH = 58,
        GET_EFFECTS_VOLUME = 59,
        SET_EFFECTS_VOLUME = 60,
        SET_VOLUME_OF_EFFECT = 61,
        PLAY_EFFECT = 63,
        STOP_EFFECT = 64,
        STOP_ALL_EFFECTS = 65,
        PRE_LOAD_EFFECT = 66,
        UN_LOAD_EFFECT = 67,
        PAUSE_EFFECT = 68,
        PAUSE_ALL_EFFECTS = 69,
        RESUME_EFFECT = 70,
        RESUME_ALL_EFFECTS = 71,
        ENABLE_SOUND_POSITION_INDICATION = 72,
        SET_LOCAL_VOICE_PITCH = 74,
        SET_LOCAL_VOICE_EQUALIZATION = 75,
        SET_LOCAL_VOICE_REVERB = 76,
        SET_LOCAL_VOICE_CHANGER = 77,
        SET_LOCAL_VOICE_REVERB_PRESET = 78,
        SET_EXTERNAL_AUDIO_SOURCE = 88,
        SET_EXTERNAL_AUDIO_SINK = 89,
        SET_RECORDING_AUDIO_FRAME_PARAMETERS = 90,
        SET_PLAYBACK_AUDIO_FRAME_PARAMETERS = 91,
        SET_MIXED_AUDIO_FRAME_PARAMETERS = 92,
    }

    /** @en
     * Media device states.
     */
    /** @cn
     * 设备状态。
     */
    export enum MEDIA_DEVICE_STATE_TYPE {
        /** @en
         * 1: The device is active.
         */
        /** @cn
         * 1: 设备正在使用。
         */
        MEDIA_DEVICE_STATE_ACTIVE = 1,
        /** @en
         * 2: The device is disabled.
         */
        /** @cn
         * 2: 设备被禁用。
         */
        MEDIA_DEVICE_STATE_DISABLED = 2,
        /** @en
         * 4: The device is not present.
         */
        /** @cn
         * 4: 没有此设备。
         */
        MEDIA_DEVICE_STATE_NOT_PRESENT = 4,
        /** @en
         * 8: The device is unplugged.
         */
        /** @cn
         * 8: 设备被拔出。
         */
        MEDIA_DEVICE_STATE_UNPLUGGED = 8
    }

    /** @en
     * Media device types.
     */
    /** @cn
     * 设备类型定义。
     */
    export enum MEDIA_DEVICE_TYPE {
        /** @en
         * -1: Unknown device type.
         */
        /** @cn
         * -1: 设备类型未知。
         */
        UNKNOWN_AUDIO_DEVICE = -1,
        /** @en
         * 0: Audio playback device.
         */
        /** @cn
         * 0: 音频播放设备。
         */
        AUDIO_PLAYOUT_DEVICE = 0,
        /** @en
         * 1: Audio recording device.
         */
        /** @cn
         * 1: 音频录制设备。
         */
        AUDIO_RECORDING_DEVICE = 1,
        /** @en
         * @ignore
         * 2: Video renderer.
         */
        /** @cn
         * @ignore
         * 2: 视频渲染设备。
        */
        VIDEO_RENDER_DEVICE = 2,
        /** @en
         * @ignore
         * 3: Video capturer.
         */
        /** @cn
         * @ignore
         * 3: 视频采集设备。
         */
        VIDEO_CAPTURE_DEVICE = 3,
        /** @en
         * 4: Application audio playback device.
         */
        /** @cn
         * 4: 音频应用播放设备。
         */
        AUDIO_APPLICATION_PLAYOUT_DEVICE = 4,
    }

    /** @en
     * The states of the local user's audio mixing file.
     */
    /** @cn
     * 音乐文件播放状态。
     */
    export enum AUDIO_MIXING_STATE_TYPE {
        /** @en
         * 710: The audio mixing file is playing after the method call of [startAudioMixing]{@link agora.startAudioMixing} or 
         * [resumeAudioMixing]{@link agora.resumeAudioMixing} succeeds.
         */
        /** @cn
         * 710: 音乐文件正常播放。
         * 该状态表示 SDK 处于以下阶段：
         * - 成功调用 [startAudioMixing]{@link agora.startAudioMixing} 播放音乐文件。
         * - 成功调用 [resumeAudioMixing]{@link agora.resumeAudioMixing} 恢复播放音乐文件。
         */
        AUDIO_MIXING_STATE_PLAYING = 710,
        /** @en
         * 711: The audio mixing file pauses playing after the method call of [pauseAudioMixing]{@link agora.pauseAudioMixing} succeeds.
         */
        /** @cn
         * 711: 音乐文件暂停播放。
         * 该状态表示 SDK 成功调用 [pauseAudioMixing]{@link agora.pauseAudioMixing} 暂停播放音乐文件。
         */
        AUDIO_MIXING_STATE_PAUSED = 711,
        /** @en
         * 713: The audio mixing file stops playing after the method call of [stopAudioMixing]{@link agora.stopAudioMixing} succeeds.
         */
        /** @cn
         * 713: 音乐文件停止播放。
         * 该状态表示 SDK 成功调用 [stopAudioMixing]{@link agora.stopAudioMixing} 停止播放音乐文件。
         */
        AUDIO_MIXING_STATE_STOPPED = 713,
        /** @en
         * 714: An exception occurs when playing the audio mixing file. See 
         * [AUDIO_MIXING_ERROR_TYPE]{@link agora.AUDIO_MIXING_ERROR_TYPE}.
         */
        /** @cn
         * 714: 音乐文件播放失败。
         * 错误类型详见 [AUDIO_MIXING_ERROR_TYPE]{@link agora.AUDIO_MIXING_ERROR_TYPE}
         */
        AUDIO_MIXING_STATE_FAILED = 714,
    }

    /** @en
     * The error codes of the local user's audio mixing file.
     */
    /** @cn
     * 混音音乐文件错误码。
     */
    export enum AUDIO_MIXING_ERROR_TYPE {
        /** @en
         * 701: The SDK cannot open the audio mixing file.
         */
        /** @cn
         * 701: 音乐文件打开出错。
         */
        AUDIO_MIXING_ERROR_CAN_NOT_OPEN = 701,
        /** @en
         * 702: The SDK opens the audio mixing file too frequently.
         */
        /** @cn
         * 702: 音乐文件打开太频繁。
         */
        AUDIO_MIXING_ERROR_TOO_FREQUENT_CALL = 702,
        /** @en
         * 703: The audio mixing file playback is interrupted.
         */
        /** @cn
         * 703: 音乐文件播放中断。
         */
        AUDIO_MIXING_ERROR_INTERRUPTED_EOF = 703,
        /** @en
         * 0: The SDK can open the audio mixing file.
         */
        /** @cn
         * 0: 音乐文件状态正常。
         */
        AUDIO_MIXING_ERROR_OK = 0,
    }

    /** @en
     * @ignore
     * Local video state types
     */
    /** @cn
     * @ignore
     * 本地视频状态
     */
    export enum LOCAL_VIDEO_STREAM_STATE {
        /** @en
         * 0: Initial state
         */
        /** @cn
         * 0: 本地视频默认初始状态。
         */
        LOCAL_VIDEO_STREAM_STATE_STOPPED = 0,
        /** @en
         * 1: The local video capturing device starts successfully.
         *
         * The SDK also reports this state when you share a maximized window by calling 
         * [startScreenCaptureByWindowId]{@link agora.startScreenCaptureByWindowId}.
         */
        /** @cn
         * 1: 本地视频采集设备启动成功。调用 [startScreenCaptureByWindowId]{@link agora.startScreenCaptureByWindowId} 
         * 方法共享窗口且共享窗口为最大化时，也会报告该状态。
         */
        LOCAL_VIDEO_STREAM_STATE_CAPTURING = 1,
        /** @en
         * 2: The first video frame is successfully encoded.
         */
        /** @cn
         * 2: 本地视频首帧编码成功。
         */
        LOCAL_VIDEO_STREAM_STATE_ENCODING = 2,
        /** @en
         * 3: The local video fails to start.
         */
        /** @cn
         * 3: 本地视频启动失败。
         */
        LOCAL_VIDEO_STREAM_STATE_FAILED = 3
    }

    /** @en
     * @ignore
     * Local video state error codes
     */
    /** @cn
     * 本地视频出错原因
     */
    export enum LOCAL_VIDEO_STREAM_ERROR {
        /** @en
         * 0: The local video is normal.
         */
        /** @cn
         * 0: 本地视频状态正常。
         */
        LOCAL_VIDEO_STREAM_ERROR_OK = 0,
        /** @en
         * 1: No specified reason for the local video failure.
         */
        /** @cn
         * 1: 出错原因不明确。
         */
        LOCAL_VIDEO_STREAM_ERROR_FAILURE = 1,
        /** @en
         * 2: No permission to use the local video capturing device.
         */
        /** @cn
         * 2: 没有权限启动本地视频采集设备。
         */
        LOCAL_VIDEO_STREAM_ERROR_DEVICE_NO_PERMISSION = 2,
        /** @en
         * 3: The local video capturing device is in use.
         */
        /** @cn
         * 3: 本地视频采集设备正在使用中。
         */
        LOCAL_VIDEO_STREAM_ERROR_DEVICE_BUSY = 3,
        /** @en
         * 4: The local video capture fails. Check whether the capturing device is working properly.
         */
        /** @cn
         * 4: 本地视频采集失败，建议检查采集设备是否正常工作。
         */
        LOCAL_VIDEO_STREAM_ERROR_CAPTURE_FAILURE = 4,
        /** @en
         * 5: The local video encoding fails.
         */
        /** @cn
         * 5: 本地视频编码失败。
         */
        LOCAL_VIDEO_STREAM_ERROR_ENCODE_FAILURE = 5,
        /** @en
         * 11: The shared window is minimized when you call 
         * [startScreenCaptureByWindowId]{@link agora.startScreenCaptureByWindowId} to share a window.
         */
        /** @cn
         * 11: 调用 [startScreenCaptureByWindowId]{@link agora.startScreenCaptureByWindowId} 方法共享窗口时，共享窗口处于最小化的状态。
         */
        LOCAL_VIDEO_STREAM_ERROR_SCREEN_CAPTURE_WINDOW_MINIMIZED = 11,
    }

    /** @en
     * Local audio state types.
     */
    /** @cn
     * 本地音频状态
     */
    export enum LOCAL_AUDIO_STREAM_STATE {
        /** @en
         * 0: The local audio is in the initial state.
         */
        /** @cn
         * 0: 本地音频默认初始状态。
         */
        LOCAL_AUDIO_STREAM_STATE_STOPPED = 0,
        /** @en
         * 1: The recording device starts successfully.
         */
        /** @cn
         * 1: 本地音频录制设备启动成功。
         */
        LOCAL_AUDIO_STREAM_STATE_RECORDING = 1,
        /** @en
         * 2: The first audio frame encodes successfully.
         */
        /** @cn
         * 2: 本地音频首帧编码成功。
         */
        LOCAL_AUDIO_STREAM_STATE_ENCODING = 2,
        /** @en
         * 3: The local audio fails to start.
         */
        /** @cn
         * 3: 本地音频启动失败。
         */
        LOCAL_AUDIO_STREAM_STATE_FAILED = 3
    }

    /** @en
     * Local audio state error codes.
     */
    /** @cn
     * 本地音频出错原因
     */
    export enum LOCAL_AUDIO_STREAM_ERROR {
        /** @en
         * 0: The local audio is normal.
         */
        /** @cn
         * 0: 本地音频状态正常。
         */
        LOCAL_AUDIO_STREAM_ERROR_OK = 0,
        /** @en
         * 1: No specified reason for the local audio failure.
         */
        /** @cn
         * 1: 本地音频出错原因不明确。
         */
        LOCAL_AUDIO_STREAM_ERROR_FAILURE = 1,
        /** @en
         * 2: No permission to use the local audio device.
         */
        /** @cn
         * 2: 没有权限启动本地音频录制设备。
         */
        LOCAL_AUDIO_STREAM_ERROR_DEVICE_NO_PERMISSION = 2,
        /** @en
         * 3: The microphone is in use.
         */
        /** @cn
         * 3: 本地音频录制设备已经在使用中。
         */
        LOCAL_AUDIO_STREAM_ERROR_DEVICE_BUSY = 3,
        /** @en
         * 4: The local audio recording fails. Check whether the recording device
         * is working properly.
         */
        /** @cn
         * 4: 本地音频录制失败，建议你检查录制设备是否正常工作。
         */
        LOCAL_AUDIO_STREAM_ERROR_RECORD_FAILURE = 4,
        /** @en
         * 5: The local audio encoding fails.
         */
        /** @cn
         * 5: 本地音频编码失败。
         */
        LOCAL_AUDIO_STREAM_ERROR_ENCODE_FAILURE = 5
    }

    /** @en
     * Audio recording qualities.
     */
    /** @cn
     * 录音音质。
     */
    export enum AUDIO_RECORDING_QUALITY_TYPE {
        /** @en
         * 0: Low quality. The sample rate is 32 kHz, and the file size is around
         * 1.2 MB after 10 minutes of recording.
         */
        /** @cn
         * 0: 低音质。采样率为 32 kHz，录制 10 分钟的文件大小为 1.2 M 左右。
         */
        AUDIO_RECORDING_QUALITY_LOW = 0,
        /** @en
         * 1: Medium quality. The sample rate is 32 kHz, and the file size is
         * around 2 MB after 10 minutes of recording.
         */
        /** @cn
         * 1: 中音质。采样率为 32 kHz，录制 10 分钟的文件大小为 2 M 左右。
         */
        AUDIO_RECORDING_QUALITY_MEDIUM = 1,
        /** @en
         * 2: High quality. The sample rate is 32 kHz, and the file size is
         * around 3.75 MB after 10 minutes of recording.
         */
        /** @cn
         * 2: 高音质。采样率为 32 kHz，录制 10 分钟的文件大小为 3.75 M 左右。
         */
        AUDIO_RECORDING_QUALITY_HIGH = 2,
    }

    /** @en
     * Network quality types.
     */
    /** @cn
     * 网络质量。
     */
    export enum QUALITY_TYPE {
        /** @en
         * 0: The network quality is unknown.
         */
        /** @cn
         * 0: 网络质量未知。
         */
        QUALITY_UNKNOWN = 0,
        /** @en
         * 1: The network quality is excellent.
         */
        /** @cn
         *  1: 网络质量极好。
         */
        QUALITY_EXCELLENT = 1,
        /** @en
         * 2: The network quality is quite good, but the bitrate may be slightly lower than excellent.
         */
        /** @cn
         * 2: 用户主观感觉和 excellent 差不多，但码率可能略低于 excellent。
         */
        QUALITY_GOOD = 2,
        /** @en
         * 3: Users can feel the communication slightly impaired.
         */
        /** @cn
         * 3: 用户主观感受有瑕疵但不影响沟通。
         */
        QUALITY_POOR = 3,
        /** @en
         * 4: Users cannot communicate smoothly.
         */
        /** @cn
         * 4: 勉强能沟通但不顺畅。
         */
        QUALITY_BAD = 4,
        /** @en
         * 5: The network is so bad that users can barely communicate.
         */
        /** @cn
         * 5: 网络质量非常差，基本不能沟通。
         */
        QUALITY_VBAD = 5,
        /** @en
         * 6: The network is down and users cannot communicate at all.
         */
        /** @cn
         * 6: 完全无法沟通。
         */
        QUALITY_DOWN = 6,
        /** @en
         * 7: Users cannot detect the network quality. (Not in use.)
         */
        /** @cn
         * 7: 暂时无法检测网络质量（未使用）。
         */
        QUALITY_UNSUPPORTED = 7,
        /** @en
         * 8: Detecting the network quality.
         */
        /** @cn
         * 8: 网络质量检测已开始还没完成。
         */
        QUALITY_DETECTING = 8,
    }

    /** @en
     * @ignore Video display modes.
     */
    /** @cn
     * @ignore
     * 设置视频显示模式。
     */
    export enum RENDER_MODE_TYPE {
        /** @en
         * 1: Uniformly scale the video until it fills the visible boundaries (cropped). One dimension of the video may have
         * clipped contents.
         */
         /** @cn
         * 1: 视频尺寸等比缩放。优先保证视窗被填满。因视频尺寸与显示视窗尺寸不一致而多出的视频将被截掉。
         */
        RENDER_MODE_HIDDEN = 1,
        /** @en
         * 2: Uniformly scale the video until one of its dimension fits the boundary (zoomed to fit). Areas that are not filled due
         * to disparity in the aspect ratio are filled with black.
         */
         /** @cn
         * 2: 视频尺寸等比缩放。优先保证视频内容全部显示。因视频尺寸与显示视窗尺寸不一致造成的视窗未被填满的区域填充黑色。
         */
        RENDER_MODE_FIT = 2,
        /** @en
         * @deprecated 3: This mode is deprecated.
         */
        /** @cn
         * @deprecated 3: 该模式已废弃。
         */
        RENDER_MODE_ADAPTIVE = 3,
        /** @en
         4: The fill mode. In this mode, the SDK stretches or zooms the video to fill the display window.
         */
        /** @cn
         * 4: 视频尺寸进行缩放和拉伸以充满显示视窗。
         */
        RENDER_MODE_FILL = 4,
    }

    /** @en
     * @ignore
     * Video mirror modes.
     */
    /** @cn
     * @ignore
     * 镜像模式类型。
     */
    export enum VIDEO_MIRROR_MODE_TYPE {
        /** @en
         * 0: (Default) The SDK enables the mirror mode.
         */
        /** @cn
         * 0:（默认）由 SDK 决定镜像模式：
         * - 本地视图镜像模式：如果你使用前置摄像头，默认启动本地视图镜像模式；如果你使用后置摄像头，默认关闭本地视图镜像模式。
         * - 远端用户视图镜像模式：默认关闭远端用户的镜像模式。
         */
        VIDEO_MIRROR_MODE_AUTO = 0,//determined by SDK
        /** @en
         * 1: Enable mirror mode.
         */
        /** @cn
         * 1: 启用镜像模式。
         */
        VIDEO_MIRROR_MODE_ENABLED = 1,//enabled mirror
        /** @en
         * 2: Disable mirror mode.
         */
        /** @cn
         * 2: 关闭镜像模式。
         */
        VIDEO_MIRROR_MODE_DISABLED = 2,//disable mirror
    }

    /** @en
     * @ignore
     * @deprecated Video profiles.
     */
    /** @cn
     * @ignore
     * @deprecated 横屏模式视频属性。
     */
    export enum VIDEO_PROFILE_TYPE {
        /** @en
         * 0: 160 * 120, frame rate 15 fps, bitrate 65 Kbps.
         */
        /** @cn
         * @deprecated
         * 0：分辨率 160 &times; 120，帧率 15 fps，码率 65 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_120P = 0,
        /** @en
         * 2: 120 * 120, frame rate 15 fps, bitrate 50 Kbps.
         */
        /** @cn
         * @deprecated
         * 2：分辨率 120 &times; 120，帧率 15 fps，码率 50 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_120P_3 = 2,
        /** @en
         * 10: 320*180, frame rate 15 fps, bitrate 140 Kbps.
         */
        /** @cn
         * @deprecated
         * 10：分辨率 320 &times; 180，帧率 15 fps，码率 140 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_180P = 10,
        /** @en
         * 12: 180 * 180, frame rate 15 fps, bitrate 100 Kbps.
         */
        /** @cn
         * @deprecated
         * 12：分辨率 180 &times; 180，帧率 15 fps，码率 100 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_180P_3 = 12,
        /** @en
         * 13: 240 * 180, frame rate 15 fps, bitrate 120 Kbps.
         */
        /** @cn
         * @deprecated
         * 13：分辨率 240 &times; 180，帧率 15 fps，码率 120 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_180P_4 = 13,
        /** @en
         * 20: 320 * 240, frame rate 15 fps, bitrate 200 Kbps.
         */
        /** @cn
         * @deprecated
         * 20：分辨率 320 &times; 240，帧率 15 fps，码率 200 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_240P = 20,
        /** @en
         * 22: 240 * 240, frame rate 15 fps, bitrate 140 Kbps.
         */
        /** @cn
         * @deprecated
         * 22：分辨率 240 &times; 240，帧率 15 fps，码率 140 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_240P_3 = 22,
        /** @en
         * 23: 424 * 240, frame rate 15 fps, bitrate 220 Kbps.
         */
        /** @cn
         * @deprecated
         * 23：分辨率 424 &times; 240，帧率 15 fps，码率 220 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_240P_4 = 23,
        /** @en
         * 30: 640 * 360, frame rate 15 fps, bitrate 400 Kbps.
         */
        /** @cn
         * @deprecated
         * 30：分辨率 640 &times; 360，帧率 15 fps，码率 400 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_360P = 30,
        /** @en
         * 32: 360 * 360, frame rate 15 fps, bitrate 260 Kbps.
         */
        /** @cn
         * @deprecated
         * 32：分辨率 360 &times; 360，帧率 15 fps，码率 260 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_360P_3 = 32,
        /** @en
         * 33: 640 * 360, frame rate 30 fps, bitrate 600 Kbps.
         */
        /** @cn
         * @deprecated
         * 33：分辨率 640 &times; 360，帧率 30 fps，码率 600 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_360P_4 = 33,
        /** @en
         * 35: 360 * 360, frame rate 30 fps, bitrate 400 Kbps.
         */
        /** @cn
         * @deprecated
         * 35：分辨率 360 &times; 360，帧率 30 fps，码率 400 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_360P_6 = 35,
        /** @en
         * 36: 480 * 360, frame rate 15 fps, bitrate 320 Kbps.
         */
        /** @cn
         * @deprecated
         * 36：分辨率 480 &times; 360，帧率 15 fps，码率 320 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_360P_7 = 36,
        /** @en
         * 37: 480 * 360, frame rate 30 fps, bitrate 490 Kbps.
         */
        /** @cn
         * @deprecated
         * 37：分辨率 480 &times; 360，帧率 30 fps，码率 490 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_360P_8 = 37,
        /** @en
         * 38: 640 * 360, frame rate 15 fps, bitrate 800 Kbps.
         * @note `LIVE_BROADCASTING` profile only.
         */
        /** @cn
         * @deprecated
         * 38：分辨率 640 &times; 360，帧率 15 fps，码率 800 Kbps。
         * @note 该视频属性仅适用于直播频道模式。
         */
        VIDEO_PROFILE_LANDSCAPE_360P_9 = 38,
        /** @en
         * 39: 640 * 360, frame rate 24 fps, bitrate 800 Kbps.
         * @note `LIVE_BROADCASTING` profile only.
         */
        /** @cn
         * @deprecated
         * 39：分辨率 640 &times; 360，帧率 24 fps，码率 800 Kbps。
         * @note 该视频属性仅适用于直播频道模式。
         */
        VIDEO_PROFILE_LANDSCAPE_360P_10 = 39,
        /** @en
         * 100: 640 * 360, frame rate 24 fps, bitrate 1000 Kbps.
         * @note `LIVE_BROADCASTING` profile only.
         */
        /** @cn
         * @deprecated 100: 分辨率 640 &times; 360，帧率 24 fps，码率 1000 Kbps。
         * @note 该属性仅适用于直播频道场景。
         */
        VIDEO_PROFILE_LANDSCAPE_360P_11 = 100,
        /** @en
         * 40: 640 * 480, frame rate 15 fps, bitrate 500 Kbps.
         */
        /** @cn
         * @deprecated
         * 40：分辨率 640 &times; 480，帧率 15 fps，码率 500 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_480P = 40,
        /** @en
         * 42: 480 * 480, frame rate 15 fps, bitrate 400 Kbps.
         */
        /** @cn
         * @deprecated
         * 42：分辨率 480 &times; 480，帧率 15 fps，码率 400 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_480P_3 = 42,
        /** @en
         * 43: 640 * 480, frame rate 30 fps, bitrate 750 Kbps.
         */
        /** @cn
         * @deprecated
         * 43：分辨率 640 &times; 480，帧率 30 fps，码率 750 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_480P_4 = 43,
        /** @en
         * 45: 480 * 480, frame rate 30 fps, bitrate 600 Kbps.
         */
        /** @cn
         * @deprecated
         * 45：分辨率 480 &times; 480，帧率 30 fps，码率 600 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_480P_6 = 45,
        /** @en
         * 47: 848 * 480, frame rate 15 fps, bitrate 610 Kbps.
         */
        /** @cn
         * @deprecated
         * 47：分辨率 848 &times; 480，帧率 15 fps，码率 610 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_480P_8 = 47,
        /** @en
         * 48: 848 * 480, frame rate 30 fps, bitrate 930 Kbps.
         */
        /** @cn
         * @deprecated
         * 48：分辨率 848 &times; 480，帧率 30 fps，码率 930 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_480P_9 = 48,
        /** @en
         * 49: 640 * 480, frame rate 10 fps, bitrate 400 Kbps.
         */
        /** @cn
         * @deprecated
         * 49：分辨率 640 &times; 480，帧率 10 fps，码率 400 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_480P_10 = 49,
        /** @en
         * 50: 1280 * 720, frame rate 15 fps, bitrate 1130 Kbps.
         */
        /** @cn
         * @deprecated
         * 50：分辨率 1280 &times; 720，帧率 15 fps，码率 1130 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_720P = 50,
        /** @en
         * 52: 1280 * 720, frame rate 30 fps, bitrate 1710 Kbps.
         */
        /** @cn
         * @deprecated
         * 52：分辨率 1280 &times; 720，帧率 30 fps，码率 1710 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_720P_3 = 52,
        /** @en
         * 54: 960 * 720, frame rate 15 fps, bitrate 910 Kbps.
         */
        /** @cn
         * @deprecated
         * 54：分辨率 960 &times; 720，帧率 15 fps，码率 910 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_720P_5 = 54,
        /** @en
         * 55: 960 * 720, frame rate 30 fps, bitrate 1380 Kbps.
         */
        /** @cn
         * @deprecated
         * 55：分辨率 960 &times; 720，帧率 30 fps，码率 1380 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_720P_6 = 55,
        /** @en
         * 60: 1920 * 1080, frame rate 15 fps, bitrate 2080 Kbps.
         */
        /** @cn
         * @deprecated
         * 60：分辨率 1920 &times; 1080，帧率 15 fps，码率 2080 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_1080P = 60,
        /** @en
         * 62: 1920 * 1080, frame rate 30 fps, bitrate 3150 Kbps.
         */
        /** @cn
         * @deprecated
         * 62：分辨率 1920 &times; 1080，帧率 30 fps，码率 3150 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_1080P_3 = 62,
        /** @en
         * 64: 1920 * 1080, frame rate 60 fps, bitrate 4780 Kbps.
         */
        /** @cn
         * @deprecated
         * 64：分辨率 1920 &times; 1080，帧率 60 fps，码率 4780 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_1080P_5 = 64,
        /** @en
         * 66: 2560 * 1440, frame rate 30 fps, bitrate 4850 Kbps.
         */
        /** @cn
         * @deprecated
         * 66：分辨率 2560 &times; 1440，帧率 30 fps，码率 4850 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_1440P = 66,
        /** @en
         * 67: 2560 * 1440, frame rate 60 fps, bitrate 6500 Kbps.
         */
        /** @cn
         * @deprecated
         * 67：分辨率 2560 &times; 1440，帧率 60 fps，码率 7350 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_1440P_2 = 67,
        /** @en
         * 70: 3840 * 2160, frame rate 30 fps, bitrate 6500 Kbps.
         */
        /** @cn
         * @deprecated
         * 70：分辨率 3840 &times; 2160，分辨率 30 fps，码率 8910 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_4K = 70,
        /** @en
         * 72: 3840 * 2160, frame rate 60 fps, bitrate 6500 Kbps.
         */
        /** @cn
         * @deprecated
         * 72：分辨率 3840 &times; 2160，帧率 60 fps，码率 13500 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_4K_3 = 72,
        /** @en
         * 1000: 120 * 160, frame rate 15 fps, bitrate 65 Kbps.
         */
        /** @cn
         * @deprecated 1000: 分辨率 120 &times; 160，帧率 15 fps，码率 65 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_120P = 1000,
        /** @en
         * 1002: 120 * 120, frame rate 15 fps, bitrate 50 Kbps.
         */
        /** @cn
         * @deprecated 1002: 分辨率 120 &times; 120，帧率 15 fps，码率 50 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_120P_3 = 1002,
        /** @en
         * 1010: 180 * 320, frame rate 15 fps, bitrate 140 Kbps.
         */
        /** @cn
         * @deprecated 1010: 分辨率 180 &times; 320，帧率 15 fps，码率 140 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_180P = 1010,
        /** @en
         * 1012: 180 * 180, frame rate 15 fps, bitrate 100 Kbps.
         */
        /** @cn
         * @deprecated 1012: 分辨率 180 &times; 180，帧率 15 fps，码率 100 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_180P_3 = 1012,
        /** @en
         * 1013: 180 * 240, frame rate 15 fps, bitrate 120 Kbps.
         */
        /** @cn
         * @deprecated 1013: 分辨率 180 &times; 240，帧率 15 fps，码率 120 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_180P_4 = 1013,
        /** @en
         * 1020: 240 * 320, frame rate 15 fps, bitrate 200 Kbps.
         */
        /** @cn
         * @deprecated 1020: 分辨率 240 &times; 320，帧率 15 fps，码率 200 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_240P = 1020,
        /** @en
         * 1022: 240 * 240, frame rate 15 fps, bitrate 140 Kbps.
         */
        /** @cn
         * @deprecated 1022: 分辨率 240 &times; 240，帧率 15 fps，码率 140 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_240P_3 = 1022,
        /** @en
         * 1023: 240 * 424, frame rate 15 fps, bitrate 220 Kbps.
         */
        /** @cn
         * @deprecated 1023: 分辨率 240 &times; 424，帧率 15 fps，码率 220 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_240P_4 = 1023,
        /** @en
         * 1030: 360 * 640, frame rate 15 fps, bitrate 400 Kbps.
         */
        /** @cn
         * @deprecated 1030: 分辨率 360 &times; 640，帧率 15 fps，码率 400 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_360P = 1030,
        /** @en
         * 1032: 360 * 360, frame rate 15 fps, bitrate 260 Kbps. 
         */
        /** @cn
         * @deprecated 1032: 分辨率 360 &times; 360，帧率 15 fps，码率 260 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_360P_3 = 1032,
        /** @en
         * 1033: 360 * 640, frame rate 30 fps, bitrate 600 Kbps. 
         */
        /** @cn
         * @deprecated 1033: 分辨率 360 &times; 640，帧率 30 fps，码率 600 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_360P_4 = 1033,
        /** @en
         * 1035: 360 * 360, frame rate 30 fps, bitrate 400 Kbps. 
         */
        /** @cn
         * @deprecated 1035: 分辨率 360 &times; 360，帧率 30 fps，码率 400 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_360P_6 = 1035,
        /** @en
         * 1036: 360 * 480, frame rate 15 fps, bitrate 320 Kbps. 
         */
        /** @cn
         * @deprecated 1036: 分辨率 360 &times; 480，帧率 15 fps，码率 320 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_360P_7 = 1036,
        /** @en
         * 1037: 360 * 480, frame rate 30 fps, bitrate 490 Kbps. 
         */
        /** @cn
         * @deprecated 1037: 分辨率 360 &times; 480，帧率 30 fps，码率 490 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_360P_8 = 1037,
        /** @en
         * 1038: 360 * 640, frame rate 15 fps, bitrate 800 Kbps.
         * @note `LIVE_BROADCASTING` profile only.
         */
        /** @cn
         * @deprecated 1038: 分辨率 360 &times; 640，帧率 15 fps，码率 800 Kbps。
         * @note 该属性仅适用于直播频道场景。
         */
        VIDEO_PROFILE_PORTRAIT_360P_9 = 1038,
        /** @en
         * 1039: 360 * 640, frame rate 24 fps, bitrate 800 Kbps.
         * @note `LIVE_BROADCASTING` profile only.
         */
        /** @cn
         * @deprecated 1039: 分辨率 360 &times; 640，帧率 24 fps，码率 800 Kbps。
         * @note 该属性仅适用于直播频道场景。
         */
        VIDEO_PROFILE_PORTRAIT_360P_10 = 1039,
        /** @en
         * 1100: 360 * 640, frame rate 24 fps, bitrate 1000 Kbps.
         * @note `LIVE_BROADCASTING` profile only.
         */
        /** @cn
         * @deprecated 1100: 分辨率 360 &times; 640，帧率 24 fps，码率 1000 Kbps。
         * @note 该属性仅适用于直播频道场景。
         */
        VIDEO_PROFILE_PORTRAIT_360P_11 = 1100,
        /** @en
         * 1040: 480 * 640, frame rate 15 fps, bitrate 500 Kbps.
         */
        /** @cn
         * @deprecated 1040: 分辨率 480 &times; 640，帧率 15 fps，码率 500 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_480P = 1040,
        /** @en
         * 1042: 480 * 480, frame rate 15 fps, bitrate 400 Kbps.
         */
        /** @cn
         * @deprecated 1042: 分辨率 480 &times; 480，帧率 15 fps，码率 400 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_480P_3 = 1042,
        /** @en
         * 1043: 480 * 640, frame rate 30 fps, bitrate 750 Kbps.
         */
        /** @cn
         * @deprecated 1043: 分辨率 480 &times; 640，帧率 30 fps，码率 750 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_480P_4 = 1043,
        /** @en
         * 1045: 480 * 480, frame rate 30 fps, bitrate 600 Kbps.
         */
        /** @cn
         * @deprecated 1045: 分辨率 480 &times; 480，帧率 30 fps，码率 600 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_480P_6 = 1045,
        /** @en
         * 1047: 480 * 848, frame rate 15 fps, bitrate 610 Kbps.
         */
        /** @cn
         * @deprecated 1047: 分辨率 480 &times; 848，帧率 15 fps，码率 610 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_480P_8 = 1047,
        /** @en
         * 1048: 480 * 848, frame rate 30 fps, bitrate 930 Kbps.
         */
        /** @cn
         * @deprecated 1048: 分辨率 480 &times; 848，帧率 30 fps，码率 930 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_480P_9 = 1048,
        /** @en
         * 1049: 480 * 640, frame rate 10 fps, bitrate 400 Kbps.
         */
        /** @cn
         * @deprecated 1049: 分辨率 480 &times; 640，帧率 10 fps，码率 400 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_480P_10 = 1049,
        /** @en
         * 1050: 720 * 1280, frame rate 15 fps, bitrate 1130 Kbps.
         */
        /** @cn
         * @deprecated 1050: 分辨率 分辨率 720 &times; 1280，帧率 15 fps，码率 1130 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_720P = 1050,
        /** @en
         * 1052: 720 * 1280, frame rate 30 fps, bitrate 1710 Kbps.
         */
        /** @cn
         * @deprecated 1052: 分辨率 分辨率 720 &times; 1280，帧率 30 fps，码率 1710 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_720P_3 = 1052,
        /** @en
         * 1054: 720 * 960, frame rate 15 fps, bitrate 910 Kbps.
         */
        /** @cn
         * @deprecated 1054: 分辨率 720 &times; 960，帧率 15 fps，码率 910 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_720P_5 = 1054,
        /** @en
         * 1055: 720 * 960, frame rate 30 fps, bitrate 1380 Kbps.
         */
        /** @cn
         * @deprecated 1055: 分辨率 720 &times; 960，帧率 30 fps，码率 1380 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_720P_6 = 1055,
        /** @en
         * 1060: 1080 * 1920, frame rate 15 fps, bitrate 2080 Kbps.
         */
        /** @cn
         * @deprecated 1060: 分辨率 1080 &times; 1920，帧率 15 fps，码率 2080 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_1080P = 1060,
        /** @en
         * 1062: 1080 * 1920, frame rate 30 fps, bitrate 3150 Kbps.
         */
        /** @cn
         * @deprecated 1062: 分辨率 1080 &times; 1920，帧率 30 fps，码率 3150 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_1080P_3 = 1062,
        /** @en
         * 1064: 1080 * 1920, frame rate 60 fps, bitrate 4780 Kbps.
         */
        /** @cn
         * @deprecated 1064: 分辨率 1080 &times; 1920，帧率 60 fps，码率 4780 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_1080P_5 = 1064,
        /** @en
         * 1066: 1440 * 2560, frame rate 30 fps, bitrate 4850 Kbps.
         */
        /** @cn
         * @deprecated 1066: 分辨率 分辨率 1440 &times; 2560，帧率 30 fps，码率 4850 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_1440P = 1066,
        /** @en
         * 1067: 1440 * 2560, frame rate 60 fps, bitrate 6500 Kbps.
         */
        /** @cn
         * @deprecated 1067: 分辨率 分辨率 1440 &times; 2560，帧率 60 fps，码率 6500 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_1440P_2 = 1067,
        /** @en
         * 1070: 2160 * 3840, frame rate 30 fps, bitrate 6500 Kbps.
         */
        /** @cn
         * @deprecated 1070: 分辨率 1440 &times; 3840，帧率 30 fps，码率 6500 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_4K = 1070,
        /** @en
         * 1072: 2160 * 3840, frame rate 60 fps, bitrate 6500 Kbps.
         */
        /** @cn
         * @deprecated 1072: 分辨率 2160 &times; 3840，帧率 60 fps，码率 6500 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_4K_3 = 1072,
        /** @en
         * Default 640 * 360, frame rate 15 fps, bitrate 400 Kbps.
         */
        /** @cn
         * @deprecated （默认）分辨率 640 &times; 360，帧率 15 fps，码率 400 Kbps。
         */
        VIDEO_PROFILE_DEFAULT = VIDEO_PROFILE_LANDSCAPE_360P,
    }

    /** @en
     * Audio profiles. Sets the sample rate, bitrate, encoding mode, and the number of channels.
     */
    /** @cn
     * 音频属性。
     * 设置采样率，码率，编码模式和声道数。
     */
    export enum AUDIO_PROFILE_TYPE // sample rate, bit rate, mono/stereo, speech/music codec
    {
        /** @en
         * 0: Default audio profile:
         * - For the interactive streaming profile: A sample rate of 48 KHz, music encoding, mono, and a bitrate of up to 64 Kbps.
         * - For the `COMMUNICATION` profile:
         *   - Windows: A sample rate of 16 KHz, music encoding, mono, and a bitrate of up to 16 Kbps.
         *   - Android/macOS/iOS: A sample rate of 32 KHz, music encoding, mono, and a bitrate of up to 18 Kbps.
         */
        /** @cn
         * 0: 默认值。
         * - 直播场景下：48 KHz 采样率，音乐编码，单声道，编码码率最大值为 64 Kbps。
         * - 通信场景下：
         *    - Windows 平台：16 KHz 采样率，音乐编码，单声道，编码码率最大值为 16 Kbps。
         *    - Android、macOS、iOS 平台：32 KHz 采样率，音乐编码，单声道，编码码率最大值为 18 Kbps。
         */
        AUDIO_PROFILE_DEFAULT = 0, // use default settings
        /** @en
         * 1: A sample rate of 32 KHz, audio encoding, mono, and a bitrate of up to 18 Kbps.
         */
        /** @cn
         * 1: 指定 32 KHz 采样率，语音编码，单声道，编码码率最大值为 18 Kbps。
         */
        AUDIO_PROFILE_SPEECH_STANDARD = 1, // 32Khz, 18Kbps, mono, speech
        /** @en
         * 2: A sample rate of 48 KHz, music encoding, mono, and a bitrate of up to 64 Kbps.
         */
        /** @cn
         * 2: 指定 48 KHz 采样率，音乐编码，单声道，编码码率最大值为 64 Kbps。
         */
        AUDIO_PROFILE_MUSIC_STANDARD = 2, // 48Khz, 48Kbps, mono, music
        /** @en
         * 3: A sample rate of 48 KHz, music encoding, stereo, and a bitrate of up to 80 Kbps.
         */
        /** @cn
         * 3: 指定 48 KHz 采样率，音乐编码，双声道，编码码率最大值为 80 Kbps。
         */
        AUDIO_PROFILE_MUSIC_STANDARD_STEREO = 3, // 48Khz, 56Kbps, stereo, music
        /** @en
         * 4: A sample rate of 48 KHz, music encoding, mono, and a bitrate of up to 96 Kbps.
         */
        /** @cn
         * 4: 指定 48 KHz 采样率，音乐编码，单声道，编码码率最大值为 96 Kbps。
         */
        AUDIO_PROFILE_MUSIC_HIGH_QUALITY = 4, // 48Khz, 128Kbps, mono, music
        /** @en
         * 5: A sample rate of 48 KHz, music encoding, stereo, and a bitrate of up to 128 Kbps.
         */
        /** @cn
         * 5: 指定 48 KHz 采样率，音乐编码，双声道，编码码率最大值为 128 Kbps。
         */
        AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO = 5, // 48Khz, 192Kbps, stereo, music
        /** @en
         * 6: A sample rate of 16 KHz, audio encoding, mono, and Acoustic Echo Cancellation (AES) enabled.
         */
        /** @cn
         * 6: 指定 16 KHz 采样率，语音编码，单声道，应用回声消除算法 AES。
         */
        AUDIO_PROFILE_IOT = 6,
        /** @en
         * The number of elements in the enumeration.
         */
        /** @cn
         * 枚举的数量。
         */
        AUDIO_PROFILE_NUM = 7,
    }

    /** @en
     * Audio application scenarios.
     */
    /** @cn
     * 设置音频应用场景。
     */
    export enum AUDIO_SCENARIO_TYPE // set a suitable scenario for your app type
    {
        /** @en
         * 0: Default audio scenario..
         */
        /** @cn
         * 0: 默认设置。
         */
        AUDIO_SCENARIO_DEFAULT = 0,
        /** @en
         * 1: Entertainment scenario where users need to frequently switch the user role.
         */
        /** @cn
         * 1: 娱乐应用，需要频繁上下麦的场景。
         */
        AUDIO_SCENARIO_CHATROOM_ENTERTAINMENT = 1,
        /** @en
         * 2: Education scenario where users want smoothness and stability.
         */
        /** @cn
         * 2: 教育应用，流畅度和稳定性优先。
         */
        AUDIO_SCENARIO_EDUCATION = 2,
        /** @en
         * 3: High-quality audio chatroom scenario where hosts mainly play music.
         */
        /** @cn
         * 3: 高音质语聊房应用。
         */
        AUDIO_SCENARIO_GAME_STREAMING = 3,
        /** @en
         * 4: Showroom scenario where a single host wants high-quality audio.
         */
        /** @cn
         * 4:  秀场应用，音质优先和更好的专业外设支持。
         */
        AUDIO_SCENARIO_SHOWROOM = 4,
        /** @en
         * 5: Gaming scenario for group chat that only contains the human voice.
         */
        /** @cn
         * 5: 游戏开黑。
         */
        AUDIO_SCENARIO_CHATROOM_GAMING = 5,
        /** @en
         * 6: IoT (Internet of Things) scenario where users use IoT devices with low power consumption.
         */
        /** @cn
         * 6: 物联网应用。
         */
        AUDIO_SCENARIO_IOT = 6,
        /** @en
         * The number of elements in the enumeration.
         */
        /** @cn
         * 枚举的数量。
         */
        AUDIO_SCENARIO_NUM = 7,
    }

    /** @en
     * The channel profile.
     */
    /** @cn
     * 频道使用场景。
     */
    export enum CHANNEL_PROFILE_TYPE {
        /** @en
         * (Default) Communication. This profile applies to scenarios such as an audio call or video call,
         * where all users can publish and subscribe to streams.
         */
        /** @cn
         * 0: （默认）通信场景。该场景下，频道内所有用户都可以发布和接收音、视频流。适用于语音通话、视频群聊等应用场景。
         */
        CHANNEL_PROFILE_COMMUNICATION = 0,
        /** @en
         * Live streaming. In this profile, uses have roles, namely, host and audience (default).
         *
         * A host both publishes and subscribes to streams, while an audience subscribes to streams only.
         * This profile applies to scenarios such as a chat room or interactive video streaming.
         */
        /** @cn
         * 1: 直播场景。该场景有主播和观众两种用户角色，可以通过 [setClientRole]{@link agora.setClientRole}
         * 设置。主播可以发布和接收音视频流，观众直接接收流。适用于语聊房、视频直播、互动大班课等应用场景。
         */
        CHANNEL_PROFILE_LIVE_BROADCASTING = 1,
        /** @en
         * 2: Agora recommends not using this profile.
         */
        /** @cn
         * 2: Agora 不推荐使用该场景。
         */
        CHANNEL_PROFILE_GAME = 2,
    }

    /** @en
     * Client roles in the live interactive streaming.
     */
    /** @cn
     * 直播场景里的用户角色。
     */
    export enum CLIENT_ROLE_TYPE {
        /** @en
         * 1: Host. A host can both send and receive streams.
         */
        /** @cn
         * 1: 主播。主播可以发流也可以收流。
         */
        CLIENT_ROLE_BROADCASTER = 1,
        /** @en
         * 2: Audience, the default role. An audience can only receive streams.
         */
        /** @cn
         * 2: （默认）观众。观众只能收流不能发流。
         */
        CLIENT_ROLE_AUDIENCE = 2,
    }

    /** @en
     * Reasons for a user being offline.
     */
    /** @cn
     * 用户离线原因。
     */
    export enum USER_OFFLINE_REASON_TYPE {
        /** @en
         * 0: The user quits the call.
         */
        /** @cn
         * 0: 用户主动离开。
         */
        USER_OFFLINE_QUIT = 0,
        /** @en
         * 1: The SDK times out and the user drops offline because no data packet is received within a certain period of time. If
         * the user quits the call and the message is not passed to the SDK (due to an unreliable channel), the SDK assumes the user
         * dropped offline.
         */
        /** @cn
         * 1: 因过长时间收不到对方数据包，超时掉线。注意：由于 SDK 使用的是不可靠通道，也有可能对方主动离开本方没收到对方离开消息而误判为超时掉线。
         */
        USER_OFFLINE_DROPPED = 1,
        /** @en
         * 2: (`LIVE_BROADCASTING` only.) The client role switched from the host to the audience. */
         /** @cn
          * 2: 用户身份从主播切换为观众时触发。
          */
        USER_OFFLINE_BECOME_AUDIENCE = 2,
    }

    /** @en
     * States of the RTMP streaming.
     */
    /** @cn
     * 推流状态
     */
    export enum RTMP_STREAM_PUBLISH_STATE {
        /** @en
         * The RTMP streaming has not started or has ended. This state is also triggered after you remove an RTMP address from
         * the CDN by calling [removePublishStreamUrl]{@link agora.removePublishStreamUrl}.
         */
        /** @cn
         * 推流未开始或已结束。成功调用  [removePublishStreamUrl]{@link agora.removePublishStreamUrl}  方法删除推流地址后，也会返回该状态。
         */
        RTMP_STREAM_PUBLISH_STATE_IDLE = 0,
        /** @en
         * The SDK is connecting to Agora streaming server and the RTMP server. This state is triggered after you call the
         * [addPublishStreamUrl]{@link agora.addPublishStreamUrl} method.
         */
        /** @cn
         * 正在连接 Agora 推流服务器和 RTMP 服务器。调用  [addPublishStreamUrl]{@link agora.addPublishStreamUrl}  方法后，会返回该状态
         */
        RTMP_STREAM_PUBLISH_STATE_CONNECTING = 1,
        /** @en
         * The RTMP streaming publishes. The SDK successfully publishes the RTMP streaming and returns this state.
         */
        /** @cn
         * 推流正在进行。成功推流后，会返回该状态。
         */
        RTMP_STREAM_PUBLISH_STATE_RUNNING = 2,
        /** @en
         * The RTMP streaming is recovering. When exceptions occur to the CDN, or the streaming is interrupted, the SDK tries to resume
         * RTMP streaming and returns this state.
         * - If the SDK successfully resumes the streaming, `RTMP_STREAM_PUBLISH_STATE_RUNNING(2)` returns.
         * - If the streaming does not resume within 60 seconds or server errors occur,
         * [RTMP_STREAM_PUBLISH_STATE_FAILURE]{@link agora.RTMP_STREAM_PUBLISH_STATE.RTMP_STREAM_PUBLISH_STATE_FAILURE}(4) returns.
         * You can also reconnect to the server by calling the [removePublishStreamUrl]{@link agora.removePublishStreamUrl} and
         * [addPublishStreamUrl]{@link agora.addPublishStreamUrl} methods.
         */
        /** @cn
         * 正在恢复推流。当 CDN 出现异常，或推流短暂中断时，SDK 会自动尝试恢复推流，并返回该状态。
         * - 如成功恢复推流，则进入状态 [RTMP_STREAM_PUBLISH_STATE_RUNNING]{@link agora.RTMP_STREAM_PUBLISH_STATE.RTMP_STREAM_PUBLISH_STATE_RUNNING} (2)。
         * - 如服务器出错或 60 秒内未成功恢复，则进入状态 [RTMP_STREAM_PUBLISH_STATE_FAILURE]{@link agora.RTMP_STREAM_PUBLISH_STATE.RTMP_STREAM_PUBLISH_STATE_FAILURE} (4)。
         * 如果觉得 60 秒太长，也可以主动调用 [removePublishStreamUrl]{@link agora.removePublishStreamUrl} 和 
         * [addPublishStreamUrl]{@link agora.addPublishStreamUrl} 方法尝试重连。
         */
        RTMP_STREAM_PUBLISH_STATE_RECOVERING = 3,
        /** @en
         * The RTMP streaming fails. See the `errCode` parameter for the detailed error information. You can also call the
         * [addPublishStreamUrl]{@link agora.addPublishStreamUrl} method to publish the RTMP streaming again.
         */
        /** @cn
         * 推流失败。失败后，你可以通过返回的错误码排查错误原因，也可以再次调用 [addPublishStreamUrl]{@link agora.addPublishStreamUrl} 重新尝试推流。
         */
        RTMP_STREAM_PUBLISH_STATE_FAILURE = 4,
    }

    /** @en
     * Error codes of the RTMP streaming.
     */
    /** @cn
     * 推流错误信息
     */
    export enum RTMP_STREAM_PUBLISH_ERROR {
        /** @en
         * The RTMP streaming publishes successfully.
         */
        /** @cn
         * 推流成功
         */
        RTMP_STREAM_PUBLISH_ERROR_OK = 0,
        /** @en
         * Invalid argument used. If, for example, you do not call the [setLiveTranscoding]{@link agora.setLiveTranscoding} method to
         * configure the [LiveTranscoding]{@link agora.LiveTranscoding} parameters before calling the
         * [addPublishStreamUrl]{@link agora.addPublishStreamUrl} method, the SDK returns this error. Check whether you set the
         * parameters in the *setLiveTranscoding* method properly.
         */
        /** @cn
         * 参数无效。请检查输入参数是否正确。例如如果你在调用 [addPublishStreamUrl]{@link agora.addPublishStreamUrl} 前没有调用 
         * [setLiveTranscoding]{@link agora.setLiveTranscoding} 设置转码参数，SDK 会返回该错误。
         */
        RTMP_STREAM_PUBLISH_ERROR_INVALID_ARGUMENT = 1,
        /** @en
         * The RTMP streaming is encrypted and cannot be published.
         */
        /** @cn
         * 推流已加密，不能推流。
         */
        RTMP_STREAM_PUBLISH_ERROR_ENCRYPTED_STREAM_NOT_ALLOWED = 2,
        /** @en
         * Timeout for the RTMP streaming. Call the [addPublishStreamUrl]{@link agora.addPublishStreamUrl} method to publish
         * the streaming again.
         */
        /** @cn
         * 推流超时未成功。可调用  [addPublishStreamUrl]{@link agora.addPublishStreamUrl}  重新推流。
         */
        RTMP_STREAM_PUBLISH_ERROR_CONNECTION_TIMEOUT = 3,
        /** @en
         * An error occurs in Agora's streaming server. Call the [addPublishStreamUrl]{@link agora.addPublishStreamUrl} method to
         * publish the streaming again.
         */
        /** @cn
         * 推流服务器出现错误。请调用  [addPublishStreamUrl]{@link agora.addPublishStreamUrl}  重新推流。
         */
        RTMP_STREAM_PUBLISH_ERROR_INTERNAL_SERVER_ERROR = 4,
        /** @en
         * An error occurs in the RTMP server.
         */
        /** @cn
         * RTMP 服务器出现错误。
         */
        RTMP_STREAM_PUBLISH_ERROR_RTMP_SERVER_ERROR = 5,
        /** @en
         * The RTMP streaming publishes too frequently.
         */
        /** @cn
         * 推流请求过于频繁。
         */
        RTMP_STREAM_PUBLISH_ERROR_TOO_OFTEN = 6,
        /** @en
         * The host publishes more than 10 URLs. Delete the unnecessary URLs before adding new ones.
         */
        /** @cn
         * 单个主播的推流地址数目达到上线 10。请删掉一些不用的推流地址再增加推流地址。
         */
        RTMP_STREAM_PUBLISH_ERROR_REACH_LIMIT = 7,
        /** @en
         * The host manipulates other hosts' URLs. Check your app logic.
         */
        /** @cn
         * 主播操作不属于自己的流。例如更新其他主播的流参数、停止其他主播的流。请检查 App 逻辑。
         */
        RTMP_STREAM_PUBLISH_ERROR_NOT_AUTHORIZED = 8,
        /** @en
         * Agora's server fails to find the RTMP streaming.
         */
        /** @cn
         * 服务器未找到这个流。
         */
        RTMP_STREAM_PUBLISH_ERROR_STREAM_NOT_FOUND = 9,
        /** @en
         * The format of the RTMP streaming URL is not supported. Check whether the URL format is correct.
         */
        /** @cn
         * 推流地址格式有错误。请检查推流地址格式是否正确。
         */
        RTMP_STREAM_PUBLISH_ERROR_FORMAT_NOT_SUPPORTED = 10,
    }

    /** @en
     * Events during the RTMP streaming.
     */
    /** @cn
     * RTMP 推流时发生的事件。
     */
    export enum RTMP_STREAMING_EVENT {
        /** @en
         * An error occurs when you add a background image or a watermark image to the RTMP stream.
         */
        /** @cn
         * RTMP 推流时，添加背景图或水印出错。
         */
        RTMP_STREAMING_EVENT_FAILED_LOAD_IMAGE = 1,
    }

    /** @en
     * States of importing an external media stream in the live interactive streaming.
     */
    /** @cn
     * 导入的外部视频源状态。
     */
    export enum INJECT_STREAM_STATUS {
        /** @en
         * 0: The external media stream imported successfully.
         */
        /** @cn
         * 0: 外部视频流导入成功。
         */
        INJECT_STREAM_STATUS_START_SUCCESS = 0,
        /** @en
         * 1: The external media stream already exists.
         */
        /** @cn
         * 1: 外部视频流已存在。
         */
        INJECT_STREAM_STATUS_START_ALREADY_EXISTS = 1,
        /** @en
         * 2: The external media stream to be imported is unauthorized.
         */
        /** @cn
         * 2: 外部视频流导入未经授权。
         */
        INJECT_STREAM_STATUS_START_UNAUTHORIZED = 2,
        /** @en
         * 3: Import external media stream timeout.
         */
        /** @cn
         * 3: 导入外部视频流超时。
         */
        INJECT_STREAM_STATUS_START_TIMEDOUT = 3,
        /** @en
         * 4: Import external media stream failed.
         */
        /** @cn
         * 4: 外部视频流导入失败。
         */
        INJECT_STREAM_STATUS_START_FAILED = 4,
        /** @en
         * 5: The external media stream stopped importing successfully.
         */
        /** @cn
         * 5: 外部视频流停止导入成功。
         */
        INJECT_STREAM_STATUS_STOP_SUCCESS = 5,
        /** @en
         * 6: No external media stream is found.
         */
        /** @cn
         * 6: 未找到要停止导入的外部视频流。
         */
        INJECT_STREAM_STATUS_STOP_NOT_FOUND = 6,
        /** @en
         * 7: The external media stream to be stopped importing is unauthorized.
         */
        /** @cn
         * 7: 要停止导入的外部视频流未经授权。
         */
        INJECT_STREAM_STATUS_STOP_UNAUTHORIZED = 7,
        /** @en
         * 8: Stop importing external media stream timeout.
         */
        /** @cn
         * 8: 停止导入外部视频流超时。
         */
        INJECT_STREAM_STATUS_STOP_TIMEDOUT = 8,
        /** @en
         * 9: Stop importing external media stream failed.
         */
        /** @cn
         * 9: 停止导入外部视频流失败。
         */
        INJECT_STREAM_STATUS_STOP_FAILED = 9,
        /** @en
         * 10: The external media stream is corrupted.
         */
        /** @cn
         * 10: 导入的外部视频流被中断。
         */
        INJECT_STREAM_STATUS_BROKEN = 10,
    }

    /** @en
     * @ignore
     * Remote video stream types.
     */
    /** @cn
     * @ignore
     * 视频流类型，视频流大小。
     */
    export enum REMOTE_VIDEO_STREAM_TYPE {
        /** @en
         * 0: High-stream video.
         */
        /** @cn
         * 0: 视频大流。
         */
        REMOTE_VIDEO_STREAM_HIGH = 0,
        /** @en
         * 1: Low-stream video.
         */
        /** @cn
         * 1: 视频小流。
         */
        REMOTE_VIDEO_STREAM_LOW = 1,
    }

    /** @en
     * The use mode of the audio data in the [onRecordAudioFrame]{@link agora.onRecordAudioFrame} or 
     * [onPlaybackAudioFrame]{@link agora.onPlaybackAudioFrame} callback.
     */
    /** @cn [onRecordAudioFrame]{@link agora.onRecordAudioFrame}  或  [onPlaybackAudioFrame]{@link agora.onPlaybackAudioFrame}  
     * 回调中返回的音频数据的使用模式
     */
    export enum RAW_AUDIO_FRAME_OP_MODE_TYPE {
        /** @en
         * 0: Read-only mode: Users only read the [AudioFrame]{@link agora.AudioFrame} data without modifying anything. For example, 
         * when users acquire the data with the Agora SDK, then push the RTMP streams. 
         */
        /** @cn
         * 0: 只读模式，用户仅从  [AudioFrame]{@link agora.AudioFrame}  获取原始数据，不作任何修改。例如: 若用户通过 Agora SDK 采集数据，自己进行 
         * RTMP 推流，则可以选择该模式。
         */
        RAW_AUDIO_FRAME_OP_MODE_READ_ONLY = 0,
        /** @en
         * 1: Write-only mode: Users replace the [AudioFrame]{@link agora.AudioFrame} data with their own data and pass the data to 
         * the SDK for encoding. For example, when users acquire the data. 
         */
        /** @cn
         * 1: 只写模式，用户替换  [AudioFrame]{@link agora.AudioFrame}  中的数据以供 SDK 编码传输。例如: 若用户自行采集数据，可选择该模式。
         */
        RAW_AUDIO_FRAME_OP_MODE_WRITE_ONLY = 1,
        /** @en
         * 2: Read and write mode: Users read the data from [AudioFrame]{@link agora.AudioFrame} , modify it, and then play it. 
         * For example, when users have their own sound-effect processing module and perform some voice pre-processing, such as 
         * a voice change. 
         */
        /** @cn
         * 2: 读写模式, 用户从  [AudioFrame]{@link agora.AudioFrame}  获取并修改数据、修改，并返回给 SDK 进行编码传输。例如: 若用户自己有音效
         * 处理模块，且想要根据实际需要对数据进行前处理(例如变声)，则可以选择该模式。
         */
        RAW_AUDIO_FRAME_OP_MODE_READ_WRITE = 2,
    }

    /** @en
     * Audio-sample rates.
     */
    /** @cn
     * 用于旁路推流的输出音频的采样率。
     */
    export enum AUDIO_SAMPLE_RATE_TYPE {
        /** @en
         * 32000: 32 kHz
         */
        /** @cn
         * 32000: 32 kHz
         */
        AUDIO_SAMPLE_RATE_32000 = 32000,
        /** @en
         * 44100: 44.1 kHz
         */
        /** @cn
         * 44100: 44.1 kHz
         */
        AUDIO_SAMPLE_RATE_44100 = 44100,
        /** @en
         * 48000: 48 kHz
         */
        /** @cn
         * 48000: 48 kHz
         */
        AUDIO_SAMPLE_RATE_48000 = 48000,
    }

    /** @en
     * @ignore Video codec profile types.
     */
    /** @cn
     * @ignore
     * 用于旁路推流的输出视频的编解码规格。
     */
    export enum VIDEO_CODEC_PROFILE_TYPE {
        /** @en
         * 66: Baseline video codec profile. Generally used in video calls on mobile phones.
         */
        /** @cn
         * 66: Baseline 级别的视频编码规格，一般用于低阶或需要额外容错的应用，比如视频通话、手机视频等。
         */
        VIDEO_CODEC_PROFILE_BASELINE = 66,
        /** @en
         * 77: Main video codec profile. Generally used in mainstream electronics such as MP4 players, portable video players,
         * PSP, and iPads.
         */
        /** @cn
         * 77: Main 级别的视频编码规格，一般用于主流消费类电子产品，如 mp4、便携的视频播放器、PSP 和 iPad 等。
         */
        VIDEO_CODEC_PROFILE_MAIN = 77,
        /** @en
         * 100: (Default) High video codec profile. Generally used in high-resolution live streaming or television.
         */
        /** @cn
         * 100: （默认）High 级别的视频编码规格，一般用于广播及视频碟片存储，高清电视。
         */
        VIDEO_CODEC_PROFILE_HIGH = 100,
    }

    /** @en
     * @ignore Video codec types
     */
    /** @cn
     * @ignore
     * 视频编码格式
     */
    export enum VIDEO_CODEC_TYPE {
        /** @en
         * Standard VP8
         */
        /** @cn
         * 标准 VP8
         */
        VIDEO_CODEC_VP8 = 1,
        /** @en
         * Standard H264
         */
        /** @cn
         * 标准 H264
         */
        VIDEO_CODEC_H264 = 2,
        /** @en
         * Enhanced VP8
         */
        /** @cn
         * 增强 VP8
         */
        VIDEO_CODEC_EVP = 3,
        /** @en
         * Enhanced H264
         */
        /** @cn
         * 增强 H264
         */
        VIDEO_CODEC_E264 = 4,
    }

    /** @en
     * Audio equalization band frequencies.
     */
    /** @cn
     * 语音音效均衡波段的中心频率。
     */
    export enum AUDIO_EQUALIZATION_BAND_FREQUENCY {
        /** @en
         * 0: 31 Hz
         */
        /** @cn
         * 0: 31 Hz
         */
        AUDIO_EQUALIZATION_BAND_31 = 0,
        /** @en
         * 1: 62 Hz
         */
        /** @cn
         * 1: 62 Hz
         */
        AUDIO_EQUALIZATION_BAND_62 = 1,
        /** @en
         * 2: 125 Hz
         */
        /** @cn
         * 2: 125 Hz
         */
        AUDIO_EQUALIZATION_BAND_125 = 2,
        /** @en
         * 3: 250 Hz
         */
        /** @cn
         * 3: 250 Hz
         */
        AUDIO_EQUALIZATION_BAND_250 = 3,
        /** @en
         * 4: 500 Hz
         */
        /** @cn
         * 4: 500 Hz
         */
        AUDIO_EQUALIZATION_BAND_500 = 4,
        /** @en
         * 5: 1 kHz
         */
        /** @cn
         * 5: 1 kHz
         */
        AUDIO_EQUALIZATION_BAND_1K = 5,
        /** @en
         * 6: 2 kHz
         */
        /** @cn
         * 6: 2 kHz
         */
        AUDIO_EQUALIZATION_BAND_2K = 6,
        /** @en
         * 7: 4 kHz
         */
        /** @cn
         * 7: 4 kHz
         */
        AUDIO_EQUALIZATION_BAND_4K = 7,
        /** @en
         * 8: 8 kHz
         */
        /** @cn
         * 8: 8 kHz
         */
        AUDIO_EQUALIZATION_BAND_8K = 8,
        /** @en
         * 9: 16 kHz
         */
        /** @cn
         * 9: 16 kHz
         */
        AUDIO_EQUALIZATION_BAND_16K = 9,
    }

    /** @en
     * Audio reverberation types.
     */
    /** @cn
     * 各混响音效 Key 所对应的值。
     */
    export enum AUDIO_REVERB_TYPE {
        /** @en
         * 0: The level of the dry signal (db). The value is between -20 and 10.
         */
        /** @cn
         * 0: 取值范围 [-20,10]，单位为 dB, 原始声音强度，即所谓的 dry signal。
         */
        AUDIO_REVERB_DRY_LEVEL = 0, // (dB, [-20,10]), the level of the dry signal
        /** @en
         * 1: The level of the early reflection signal (wet signal) (dB). The value is between -20 and 10.
         */
        /** @cn
         * 1: 取值范围 [-20,10]，单位为 dB, 早期反射信号强度，即所谓的 wet signal。
         */
        AUDIO_REVERB_WET_LEVEL = 1, // (dB, [-20,10]), the level of the early reflection signal (wet signal)
        /** @en
         * 2: The room size of the reflection. The value is between 0 and 100.
         */
        /** @cn
         * 2: 所需混响效果的房间尺寸，一般房间越大，混响越强，取值范围 [0,100]。
         */
        AUDIO_REVERB_ROOM_SIZE = 2, // ([0,100]), the room size of the reflection
        /** @en
         * 3: The length of the initial delay of the wet signal (ms). The value is between 0 and 200.
         */
        /** @cn
         * 3: 取值范围 [0,200]，单位为毫秒, wet signal 的初始延迟长度，以毫秒为单位。
         */
        AUDIO_REVERB_WET_DELAY = 3, // (ms, [0,200]), the length of the initial delay of the wet signal in ms
        /** @en
         * 4: The reverberation strength. The value is between 0 and 100.
         */
        /** @cn
         * 4: 取值范围 [0,100], 混响持续的强度。
         */
        AUDIO_REVERB_STRENGTH = 4, // ([0,100]), the strength of the reverberation
    }

    /** @en
     * Local voice changer options.
     */
    /** @cn
     * 预设的语音变声效果。
     */
    export enum VOICE_CHANGER_PRESET {
        /** @en
         * The original voice (no local voice change).
         */
        /** @cn
         * 原声，即关闭语音变声。
         */
        VOICE_CHANGER_OFF = 0x00000000, //Turn off the voice changer
        /** @en
         * The voice of an old man.
         */
        /** @cn
         * 变声：老男人。
         */
        VOICE_CHANGER_OLDMAN = 0x00000001,
        /** @en
         * The voice of a little boy.
         */
        /** @cn
         * 变声：小男孩。
         */
        VOICE_CHANGER_BABYBOY = 0x00000002,
        /** @en
         * The voice of a little girl.
         */
        /** @cn
         * 变声：小女孩。
         */
        VOICE_CHANGER_BABYGIRL = 0x00000003,
        /** @en
         * The voice of Zhu Bajie, a character in Journey to the West who has a voice like that of a growling bear.
         */
        /** @cn
         * 变声：猪八戒。
         */
        VOICE_CHANGER_ZHUBAJIE = 0x00000004,
        /** @en
         * The ethereal voice.
         */
        /** @cn
         * 变声：空灵。
         */
        VOICE_CHANGER_ETHEREAL = 0x00000005,
        /** @en
         * The voice of Hulk.
         */
        /** @cn
         * 变声：绿巨人。
         */
        VOICE_CHANGER_HULK = 0x00000006,
        /** @en
         * A more vigorous voice.
         */
        /** @cn
         * 美音：浑厚。
         */
        VOICE_BEAUTY_VIGOROUS = 0x00100001,//7,
        /** @en
         * A deeper voice.
         */
        /** @cn
         * 美音：低沉。
         */
        VOICE_BEAUTY_DEEP = 0x00100002,
        /** @en
         * A mellower voice.
         */
        /** @cn
         * 美音：圆润。
         */
        VOICE_BEAUTY_MELLOW = 0x00100003,
        /** @en
         * Falsetto.
         */
        /** @cn
         * 美音：假音。
         */
        VOICE_BEAUTY_FALSETTO = 0x00100004,
        /** @en
         * A fuller voice.
         */
        /** @cn
         * 美音：饱满。
         */
        VOICE_BEAUTY_FULL = 0x00100005,
        /** @en
         * A clearer voice.
         */
        /** @cn
         * 美音：清澈。
         */
        VOICE_BEAUTY_CLEAR = 0x00100006,
        /** @en
         * A more resounding voice.
         */
        /** @cn
         * 美音：高亢。
         */
        VOICE_BEAUTY_RESOUNDING = 0x00100007,
        /** @en
         * A more ringing voice.
         */
        /** @cn
         * 美音：嘹亮。
         */
        VOICE_BEAUTY_RINGING = 0x00100008,
        /** @en
         * A more spatially resonant voice.
         */
        /** @cn
         * 美音：空旷。
         */
        VOICE_BEAUTY_SPACIAL = 0x00100009,
        /** @en
         * (For male only) A more magnetic voice. Do not use it when the speaker is a female; otherwise, voice distortion occurs.
         */
        /** @cn
         * 语聊美声：磁性（男）。此枚举为男声定制化效果，不适用于女声。若女声使用此音效设置，则音频可能会产生失真。
         */
        GENERAL_BEAUTY_VOICE_MALE_MAGNETIC = 0x00200001,
        /** @en
         * (For female only) A fresher voice. Do not use it when the speaker is a male; otherwise, voice distortion occurs.
         */
        /** @cn
         * 语聊美声：清新（女）。此枚举为女声定制化效果，不适用于男声。若男声使用此音效设置，则音频可能会产生失真。
         */
        GENERAL_BEAUTY_VOICE_FEMALE_FRESH = 0x00200002,
        /** @en
         * (For female only) A more vital voice. Do not use it when the speaker is a male; otherwise, voice distortion occurs.
         */
        /** @cn
         * 语聊美声：活力（女）。此枚举为女声定制化效果，不适用于男声。若男声使用此音效设置，则音频可能会产生失真。
         */
        GENERAL_BEAUTY_VOICE_FEMALE_VITALITY = 0x00200003
    }

    /** @en
     * Local voice reverberation presets.
     */
    /** @cn
     * 预设的语音混响效果
     */
    export enum AUDIO_REVERB_PRESET {
        /** @en
         * Turn off local voice reverberation, that is, to use the original voice.
         */
        /** @cn
         * 原声，即关闭本地语音混响。
         */
        AUDIO_REVERB_OFF = 0x00000000, // Turn off audio reverb
        /** @en
         * The reverberation style typical of a KTV venue (enhanced).
         */
        /** @cn
         * KTV（增强版）。
         */
        AUDIO_REVERB_FX_KTV = 0x00100001,
        /** @en
         * The reverberation style typical of a concert hall (enhanced).
         */
        /** @cn
         * 演唱会（增强版）。
         */
        AUDIO_REVERB_FX_VOCAL_CONCERT = 0x00100002,
        /** @en
         * The reverberation style typical of an uncle's voice.
         */
        /** @cn
         * 大叔。
         */
        AUDIO_REVERB_FX_UNCLE = 0x00100003,
        /** @en
         * The reverberation style typical of a little sister's voice.
         */
        /** @cn
         * 小姐姐。
         */
        AUDIO_REVERB_FX_SISTER = 0x00100004,
        /** @en
         * The reverberation style typical of a recording studio (enhanced).
         */
        /** @cn
         * 录音棚（增强版）。
         */
        AUDIO_REVERB_FX_STUDIO = 0x00100005,
        /** @en
         * The reverberation style typical of popular music (enhanced).
         */
        /** @cn
         * 流行（增强版）。
         */
        AUDIO_REVERB_FX_POPULAR = 0x00100006,
        /** @en
         * The reverberation style typical of R&B music (enhanced).
         */
        /** @cn
         * R&B（增强版）。
         */
        AUDIO_REVERB_FX_RNB = 0x00100007,
        /** @en
         * The reverberation style typical of the vintage phonograph.
         */
        /** @cn
         * 留声机。
         */
        AUDIO_REVERB_FX_PHONOGRAPH = 0x00100008,
        /** @en
         * The reverberation style typical of popular music.
         */
        /** @cn
         * 流行。
         */
        AUDIO_REVERB_POPULAR = 0x00000001,
        /** @en
         * The reverberation style typical of R&B music.
         */
        /** @cn
         * R&B。
         */
        AUDIO_REVERB_RNB = 0x00000002,
        /** @en
         * The reverberation style typical of rock music.
         */
        /** @cn
         * 摇滚。
         */
        AUDIO_REVERB_ROCK = 0x00000003,
        /** @en
         * The reverberation style typical of hip-hop music.
         */
        /** @cn
         * 嘻哈。
         */
        AUDIO_REVERB_HIPHOP = 0x00000004,
        /** @en
         * The reverberation style typical of a concert hall.
         */
        /** @cn
         * 演唱会。
         */
        AUDIO_REVERB_VOCAL_CONCERT = 0x00000005,
        /** @en
         * The reverberation style typical of a KTV venue.
         */
        /** @cn
         * KTV。
         */
        AUDIO_REVERB_KTV = 0x00000006,
        /** @en
         * The reverberation style typical of a recording studio.
         */
        /** @cn
         * 录音棚。
         */
        AUDIO_REVERB_STUDIO = 0x00000007,
        /** @en
         * The reverberation of the virtual stereo. The virtual stereo is an effect that renders the monophonic
         * audio as the stereo audio, so that all users in the channel can hear the stereo voice effect.
         * To achieve better virtual stereo reverberation, Agora recommends setting `profile` in 
         * [setAudioProfile]{@link agora.setAudioProfile} as `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)`.
         */
        /** @cn
         * 虚拟立体声。虚拟立体声是指将单声道的音轨渲染出立体声的效果，使频道内所有用户听到有空间感的声音
         * 效果。为达到更好的虚拟立体声效果，Agora 推荐在调用该方法前将 `setAudioProfile` 的 `profile` 参
         * 数设置为 `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)`。
         */
        AUDIO_VIRTUAL_STEREO = 0x00200001
    }

    /** @en
     * Audio codec profile types. The default value is LC_ACC.
     */
    /** @cn
     * 用于旁路推流的输出音频的编解码规格，默认为 LC-AAC。
     */
    export enum AUDIO_CODEC_PROFILE_TYPE {
        /** @en
         * 0: LC-AAC, which is the low-complexity audio codec type.
         */
        /** @cn
         * 0: LC-AAC 规格，表示基本音频编码规格。
         */
        AUDIO_CODEC_PROFILE_LC_AAC = 0,
        /** @en
         * 1: HE-AAC, which is the high-efficiency audio codec type.
         */
        /** @cn
         * 1: HE-AAC 规格，表示高效音频编码规格。
         */
        AUDIO_CODEC_PROFILE_HE_AAC = 1,
    }

    /** @en
     * Remote audio states.
     */
    /** @cn
     * 远端音频流状态
     */
    export enum REMOTE_AUDIO_STATE {
        /** @en
         * 0: The remote audio is in the default state, probably due to
         * [REMOTE_AUDIO_REASON_LOCAL_MUTED]{@link agora.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_LOCAL_MUTED}(3),
         * [REMOTE_AUDIO_REASON_REMOTE_MUTED]{@link agora.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_REMOTE_MUTED} (5), or
         * [REMOTE_AUDIO_REASON_REMOTE_OFFLINE]{@link agora.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_REMOTE_OFFLINE} (7).
         */
        /** @cn
         * 0: 远端音频流默认初始状态。在
         * [REMOTE_AUDIO_REASON_LOCAL_MUTED]{@link agora.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_LOCAL_MUTED} (3)、
         * [REMOTE_AUDIO_REASON_REMOTE_MUTED]{@link agora.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_REMOTE_MUTED} (5) 或
         * [REMOTE_AUDIO_REASON_REMOTE_OFFLINE]{@link agora.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_REMOTE_OFFLINE} (7) 的情况下，会报告该状态。
         */
        REMOTE_AUDIO_STATE_STOPPED = 0,  // Default state, audio is started or remote user disabled/muted audio stream
        /** @en
         * 1: The first remote audio packet is received.
         */
        /** @cn
         * 1: 本地用户已接收远端音频首包。
         */
        REMOTE_AUDIO_STATE_STARTING = 1,  // The first audio frame packet has been received
        /** @en
         * 2: The remote audio stream is decoded and plays normally, probably
         * due to [REMOTE_AUDIO_REASON_NETWORK_RECOVERY]{@link agora.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_NETWORK_RECOVERY}(2),
         * [REMOTE_AUDIO_REASON_LOCAL_UNMUTED]{@link agora.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_LOCAL_UNMUTED}(4), or
         * [REMOTE_AUDIO_REASON_REMOTE_UNMUTED]{@link agora.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_REMOTE_UNMUTED}(6).
         */
        /** @cn
         * 2: 远端音频流正在解码，正常播放。在
         * [REMOTE_AUDIO_REASON_NETWORK_RECOVERY]{@link agora.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_NETWORK_RECOVERY} (2)、
         * [REMOTE_AUDIO_REASON_LOCAL_UNMUTED]{@link agora.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_LOCAL_UNMUTED} (4) 或
         * [REMOTE_AUDIO_REASON_REMOTE_UNMUTED]{@link agora.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_REMOTE_UNMUTED} (6) 的情况下，会报告该状态。
         */
        REMOTE_AUDIO_STATE_DECODING = 2,  // The first remote audio frame has been decoded or fronzen state ends
        /** @en
         * 3: The remote audio is frozen, probably due to
         * [REMOTE_AUDIO_REASON_NETWORK_CONGESTION]{@link agora.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_NETWORK_CONGESTION}(1).
         */
        /** @cn
         * 3: 远端音频流卡顿。在 [REMOTE_AUDIO_REASON_NETWORK_CONGESTION]{@link agora.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_NETWORK_CONGESTION} (1)
         * 的情况下，会报告该状态。
         */
        REMOTE_AUDIO_STATE_FROZEN = 3,    // Remote audio is frozen, probably due to network issue
        /** @en
         * 4: The remote audio fails to start, probably due to
         * [REMOTE_AUDIO_REASON_INTERNAL]{@link agora.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_INTERNAL}(0).
         */
        /** @cn
         * 4: 远端音频流播放失败。在 [REMOTE_AUDIO_REASON_INTERNAL]{@link agora.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_INTERNAL} (0)
         * 的情况下，会报告该状态。
         */
        REMOTE_AUDIO_STATE_FAILED = 4,    // Remote audio play failed
    }

    /** @en
     * Remote audio state reasons.
     */
    /** @cn
     * 远端音频流状态改变的具体原因
     */
    export enum REMOTE_AUDIO_STATE_REASON {
        /** @en
         * 0: Internal reasons.
         */
        /** @cn
         * 0: 内部原因。
         */
        REMOTE_AUDIO_REASON_INTERNAL = 0,
        /** @en
         * 1: Network congestion.
         */
        /** @cn
         * 1: 网络阻塞。
         */
        REMOTE_AUDIO_REASON_NETWORK_CONGESTION = 1,
        /** @en
         * 2: Network recovery.
         */
        /** @cn
         * 2: 网络恢复正常。
         */
        REMOTE_AUDIO_REASON_NETWORK_RECOVERY = 2,
        /** @en
         * 3: The local user stops receiving the remote audio stream or
         * disables the audio module.
         */
        /** @cn
         * 3: 本地用户停止接收远端音频流或本地用户禁用音频模块。
         */
        REMOTE_AUDIO_REASON_LOCAL_MUTED = 3,
        /** @en
         * 4: The local user resumes receiving the remote audio stream or
         * enables the audio module.
         */
        /** @cn
         * 4: 本地用户恢复接收远端音频流或本地用户启用音频模块。
         */
        REMOTE_AUDIO_REASON_LOCAL_UNMUTED = 4,
        /** @en
         * 5: The remote user stops sending the audio stream or disables the
         * audio module.
         */
        /** @cn
         * 5: 远端用户停止发送音频流或远端用户禁用音频模块。
         */
        REMOTE_AUDIO_REASON_REMOTE_MUTED = 5,
        /** @en
         * 6: The remote user resumes sending the audio stream or enables the
         * audio module.
         */
        /** @cn
         * 6: 远端用户恢复发送音频流或远端用户启用音频模块。
         */
        REMOTE_AUDIO_REASON_REMOTE_UNMUTED = 6,
        /** @en
         * 7: The remote user leaves the channel.
         */
        /** @cn
         * 7: 远端用户离开频道。
         */
        REMOTE_AUDIO_REASON_REMOTE_OFFLINE = 7,
    }

    /** @en
     * @ignore
     * The state of the remote video.
     */
    /** @cn
     * @ignore
     * 远端视频流状态。
     */
    export enum REMOTE_VIDEO_STATE {
        /** @en
         * 0: The remote video is in the default state, probably due to
         * [REMOTE_VIDEO_STATE_REASON_LOCAL_MUTED]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_LOCAL_MUTED}(3),
         * [REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED}(5),
         * or [REMOTE_VIDEO_STATE_REASON_REMOTE_OFFLINE]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_REMOTE_OFFLINE}(7).
         */
        /** @cn
         * 0: 远端视频默认初始状态。在 [REMOTE_VIDEO_STATE_REASON_LOCAL_MUTED]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_LOCAL_MUTED} (3)、
         * [REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED} (5) 或
         * [REMOTE_VIDEO_STATE_REASON_REMOTE_OFFLINE]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_REMOTE_OFFLINE} (7) 的情况下，会报告该状态。
         */
        REMOTE_VIDEO_STATE_STOPPED = 0,

        /** @en
         * 1: The first remote video packet is received.
         */
        /** @cn
         * 1: 本地用户已接收远端视频首包。
         */
        REMOTE_VIDEO_STATE_STARTING = 1,

        /** @en
         * 2: The remote video stream is decoded and plays normally, probably due to
         * [REMOTE_VIDEO_STATE_REASON_NETWORK_RECOVERY]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_NETWORK_RECOVERY}(2),
         * [REMOTE_VIDEO_STATE_REASON_LOCAL_UNMUTED]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_LOCAL_UNMUTED}(4),
         * [REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED}(6),
         * or [REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK_RECOVERY]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK_RECOVERY} (9).
         */
        /** @cn
         * 2: 远端视频流正在解码，正常播放。在
         * [REMOTE_VIDEO_STATE_REASON_NETWORK_RECOVERY]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_NETWORK_RECOVERY} (2)、
         * [REMOTE_VIDEO_STATE_REASON_LOCAL_UNMUTED]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_LOCAL_UNMUTED} (4)、
         * [REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED} (6) 或
         * [REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK_RECOVERY]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK_RECOVERY} (9) 的情况下，
         * 会报告该状态。
         */
        REMOTE_VIDEO_STATE_DECODING = 2,

        /** @en
         * 3: The remote video is frozen, probably due to
         * [REMOTE_VIDEO_STATE_REASON_NETWORK_CONGESTION]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_NETWORK_CONGESTION}(1)
         * or [REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK}(8).
         */
        /** @cn
         * 3: 远端视频流卡顿。在
         * [REMOTE_VIDEO_STATE_REASON_NETWORK_CONGESTION]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_NETWORK_CONGESTION} (1) 或
         * [REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK} (8) 的情况下，会报告该状态。
         */
        REMOTE_VIDEO_STATE_FROZEN = 3,

        /** @en
         * 4: The remote video fails to start, probably due to
         * [REMOTE_VIDEO_STATE_REASON_INTERNAL]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_INTERNAL}(0).
         */
        /** @cn
         * 4: 远端视频流播放失败。在
         * [REMOTE_VIDEO_STATE_REASON_INTERNAL]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_INTERNAL} (0) 的情况下，会报告该状态。
         */
        REMOTE_VIDEO_STATE_FAILED = 4
    }

    /** @en
     * The publishing state.
     */
    /** @cn
     * 发布状态。
     */
    export enum STREAM_PUBLISH_STATE {
        /** @en
         * 0: The initial publishing state after joining the channel.
         */
        /** @cn
         * 0: 加入频道后的初始发布状态。
         */
        PUB_STATE_IDLE = 0,
        /** @en
         * 1: Fails to publish the local stream. Possible reasons:
         * - The local user calls [muteLocalAudioStream(true)]{@link agora.muteLocalAudioStream} to stop sending local streams.
         * - The local user calls [disableAudio]{@link agora.disableAudio} to
         * disable the entire audio or video module.
         * - The local user calls [enableLocalAudio(false)]{@link agora.enableLocalAudio} to disable the local audio sampling or 
         * video capturing.
         * - The role of the local user is `AUDIENCE`.
         */
        /** @cn
         * 1: 发布失败。可能是因为：
         * - 本地用户调用  [muteLocalAudioStream(true)]{@link agora.muteLocalAudioStream}  或  
         * [muteLocalVideoStream(true)]{@link agora.muteLocalVideoStream}  停止发送本地媒体流。
         * - 本地用户调用  [disableAudio]{@link agora.disableAudio}  或  [disableVideo]{@link agora.disableVideo}  关闭本地音频或视频模块。
         * - 本地用户调用  [enableLocalAudio(false)]{@link agora.enableLocalAudio}  或  
         * [enableLocalVideo(false)]{@link agora.enableLocalVideo}  关闭本地音频或视频采集。
         * - 本地用户角色为观众。
         */
        PUB_STATE_NO_PUBLISHED = 1,
        /** @en
         * 2: Publishing.
         */
        /** @cn
         * 2: 正在发布。
         */
        PUB_STATE_PUBLISHING = 2,
        /** @en
         * 3: Publishes successfully.
         */
        /** @cn
         * 3: 发布成功。
         */
        PUB_STATE_PUBLISHED = 3
    }

    /** @en
     * The subscribing state.
     */
    /** @cn
     * 订阅状态。
     */
    export enum STREAM_SUBSCRIBE_STATE {
        /** @en
         * 0: The initial subscribing state after joining the channel.
         */
        /** @cn
         * 0: 加入频道后的初始订阅状态。
         */
        SUB_STATE_IDLE = 0,
        /** @en
         * 1: Fails to subscribe to the remote stream. Possible reasons:
         * - The remote user:
         *   - Calls [muteLocalAudioStream(true)]{@link agora.muteLocalAudioStream} to stop sending local streams.
         *   - Calls [disableAudio]{@link agora.disableAudio} to disable the
         * entire audio modules.
         *   - Calls [enableLocalAudio(false)]{@link agora.enableLocalAudio} 
         * to disable the local audio sampling.
         *   - The role of the remote user is `AUDIENCE`.
         * - The local user calls the following methods to stop receiving remote streams: 
         * Calls [muteRemoteAudioStream(true)]{@link agora.muteRemoteAudioStream},
         * [muteAllRemoteAudioStreams(true)]{@link agora.muteAllRemoteAudioStreams} , or
         * [setDefaultMuteAllRemoteAudioStreams(true)]{@link agora.setDefaultMuteAllRemoteAudioStreams} to stop receiving remote
         * audio streams.
         */
        /** @cn
         * 1: 订阅失败。可能是因为：
         * - 远端用户：
         *  - 调用  [muteLocalAudioStream(true)]{@link agora.muteLocalAudioStream}  或  
         * [muteLocalVideoStream(true)]{@link agora.muteLocalVideoStream}  停止发送本地媒体流。
         *  - 调用  [disableAudio]{@link agora.disableAudio}  或  [disableVideo]{@link agora.disableVideo}  关闭本地音频或视频模块。
         *  - 调用  [enableLocalAudio(false)]{@link agora.enableLocalAudio}  或  [enableLocalVideo(false)]{@link agora.enableLocalVideo} 
         * 关闭本地音频或视频采集。
         *  - 用户角色为观众。
         * - 本地用户调用以下方法停止接收远端媒体流：
         *  - 调用  [muteRemoteAudioStream(true)]{@link agora.muteRemoteAudioStream} 、  
         * [muteAllRemoteAudioStreams(true)]{@link agora.muteAllRemoteAudioStreams}  或  
         * [setDefaultMuteAllRemoteAudioStreams(true)]{@link agora.setDefaultMuteAllRemoteAudioStreams}  停止接收远端音频流。
         * - 调用  [muteRemoteVideoStream(true)]{@link agora.muteRemoteVideoStream} 、  
         * [muteAllRemoteVideoStreams(true)]{@link agora.muteAllRemoteVideoStreams}  或  
         * [setDefaultMuteAllRemoteVideoStreams(true)]{@link agora.setDefaultMuteAllRemoteVideoStreams}  停止接收远端音频流。
         */
        SUB_STATE_NO_SUBSCRIBED = 1,
        /** @en
         * 2: Subscribing.
         */
        /** @cn
         * 2: 正在订阅。
         */
        SUB_STATE_SUBSCRIBING = 2,
        /** @en
         * 3: Subscribes to and receives the remote stream successfully.
         */
        /** @cn
         * 3: 收到了远端流，订阅成功。
         */
        SUB_STATE_SUBSCRIBED = 3
    }

    /** @en
     * @ignore
     * The reason for the remote video state change. */
    /** @cn
     * @ignore
     * 远端视频流状态切换原因。
     */
    export enum REMOTE_VIDEO_STATE_REASON {
        /** @en
         * 0: Internal reasons.
         */
        /** @cn
         * 0: 内部原因。
         */
        REMOTE_VIDEO_STATE_REASON_INTERNAL = 0,

        /** @en
         * 1: Network congestion.
         */
        /** @cn
         * 1: 网络阻塞。
         */
        REMOTE_VIDEO_STATE_REASON_NETWORK_CONGESTION = 1,

        /** @en
         * 2: Network recovery.
         */
        /** @cn
         * 2: 网络恢复正常。
         */
        REMOTE_VIDEO_STATE_REASON_NETWORK_RECOVERY = 2,

        /** @en
         * 3: The local user stops receiving the remote video stream or disables the video module.
         */
        /** @cn
         * 3: 本地用户停止接收远端视频流或本地用户禁用视频模块。
         */
        REMOTE_VIDEO_STATE_REASON_LOCAL_MUTED = 3,

        /** @en
         * 4: The local user resumes receiving the remote video stream or enables the video module.
         */
        /** @cn
         * 4: 本地用户恢复接收远端视频流或本地用户启动视频模块。
         */
        REMOTE_VIDEO_STATE_REASON_LOCAL_UNMUTED = 4,

        /** @en
         * 5: The remote user stops sending the video stream or disables the video module.
         */
        /** @cn
         * 5: 远端用户停止发送视频流或远端用户禁用视频模块。
         */
        REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED = 5,

        /** @en
         * 6: The remote user resumes sending the video stream or enables the video module.
         */
        /** @cn
         * 6: 远端用户恢复发送视频流或远端用户启用视频模块。
         */
        REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED = 6,

        /** @en
         * 7: The remote user leaves the channel.
         */
        /** @cn
         * 7: 远端用户离开频道。
         */
        REMOTE_VIDEO_STATE_REASON_REMOTE_OFFLINE = 7,

        /** @en
         * 8: The remote audio-and-video stream falls back to the audio-only stream due to poor network conditions.
         */
        /** @cn
         * 8: 弱网情况下，远端音视频流回退为音频流。
         */
        REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK = 8,

        /** @en
         * 9: The remote audio-only stream switches back to the audio-and-video stream after the network conditions improve.
         */
        /** @cn
         * 9: 网络情况改善时，远端音频流恢复为音视频流。
         */
        REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK_RECOVERY = 9
    }

    /** @en
     * @ignore
     * Video frame rates.
     */
    /** @cn
     * @ignore
     * 视频帧率。
     */
    export enum FRAME_RATE {
        /** @en
         * 1: 1 fps
         */
        /** @cn
         * 1: 1 fps
         */
        FRAME_RATE_FPS_1 = 1,
        /** @en
         * 7: 7 fps
         */
        /** @cn
         * 7: 7 fps
         */
        FRAME_RATE_FPS_7 = 7,
        /** @en
         * 10: 10 fps
         */
        /** @cn
         * 10: 10 fps
         */
        FRAME_RATE_FPS_10 = 10,
        /** @en
         * 15: 15 fps
         */
        /** @cn
         * 15: 15 fps
         */
        FRAME_RATE_FPS_15 = 15,
        /** @en
         * 24: 24 fps
         */
        /** @cn
         * 24: 24 fps
         */
        FRAME_RATE_FPS_24 = 24,
        /** @en
         * 30: 30 fps
         */
        /** @cn
         * 30: 30 fps
         */
        FRAME_RATE_FPS_30 = 30,
        /** @en
         * 60: 60 fps (Windows and macOS only)
         */
        /** ce
         * n60: 60 fps 仅适用于 WINDOWS 和 macOS 平台
         */
        FRAME_RATE_FPS_60 = 60,
    }

    /** @en
     * @ignore
     * Video output orientation modes.
     */
    /** @cn
     * @ignore
     * 视频编码的方向模式。
     */
    export enum ORIENTATION_MODE {
        /** @en
         * 0: (Default) Adaptive mode.
         *
         * The video encoder adapts to the orientation mode of the video input device.
         *
         * - If the width of the captured video from the SDK is greater than the height, the encoder sends the video in landscape mode.
         * The encoder also sends the rotational information of the video, and the receiver uses the rotational information to rotate
         * the received video.
         * - When you use a custom video source, the output video from the encoder inherits the orientation of the original video. If
         * the original video is in portrait mode, the output video from the encoder is also in portrait mode. The encoder also sends
         * the rotational information of the video to the receiver.
         */
        /** @cn
         * 0: （默认）该模式下 SDK 输出的视频方向与采集到的视频方向一致。接收端会根据收到的视频旋转信息对视频进行旋转。该模式适用于接收端可以调整视频方向的场景。
         * - 如果采集的视频是横屏模式，则输出的视频也是横屏模式；
         * - 如果采集的视频是竖屏模式，则输出的视频也是竖屏模式。
         */
        ORIENTATION_MODE_ADAPTIVE = 0,
        /** @en
         * 1: Landscape mode.
         *
         * The video encoder always sends the video in landscape mode. The video encoder rotates the original video before sending
         * it and the rotational information is 0. This mode applies to scenarios involving CDN live streaming.
         */
        /** @cn
         * 1: 该模式下 SDK 固定输出风景（横屏）模式的视频。如果采集到的视频是竖屏模式，则视频编码器会对其进行裁剪。该模式适用于当接收端无法
         * 调整视频方向时，如使用旁路推流场景下。
         */
        ORIENTATION_MODE_FIXED_LANDSCAPE = 1,
        /** @en
         * 2: Portrait mode.
         *
         * The video encoder always sends the video in portrait mode. The video encoder rotates the original video before sending it
         * and the rotational information is 0. This mode applies to scenarios involving CDN live streaming.
         */
        /** @cn
         * 2: 该模式下 SDK 固定输出人像（竖屏）模式的视频，如果采集到的视频是横屏模式，则视频编码器会对其进行裁剪。该模式适用于当接收端无法
         * 调整视频方向时，如使用旁路推流场景下。
         */
        ORIENTATION_MODE_FIXED_PORTRAIT = 2,
    }

    /** @en
     * @ignore
     * Video degradation preferences when the bandwidth is a constraint.
     */
    /** @cn
     * @ignore
     * 带宽受限时的视频编码降级偏好
     */
    export enum DEGRADATION_PREFERENCE {
        /** @en
         * 0: (Default) Degrade the frame rate in order to maintain the video quality.
         */
        /** @cn
         * （默认）降低编码帧率以保证视频质量
         */
        MAINTAIN_QUALITY = 0,
        /** @en
         * 1: Degrade the video quality in order to maintain the frame rate.
         */
        /** @cn
         * 降低视频质量以保证编码帧率
         */
        MAINTAIN_FRAMERATE = 1,
        /** @en
         * 2: (For future use) Maintain a balance between the frame rate and video quality.
         */
        /** @cn
         * 预留参数，暂不支持
         */
        MAINTAIN_BALANCED = 2,
    }

    /** @en
     * @ignore
     * Stream fallback options.
     */
    /** @cn
     * @ignore
     * 音视频流回退处理选项。
     */
    export enum STREAM_FALLBACK_OPTIONS {
        /** @en
         * 0: No fallback behavior for the local/remote video stream when the uplink/downlink network conditions are poor. The
         * quality of the stream is not guaranteed.
         */
        /** @cn
         * 0: 上行/下行网络较弱时，不对音视频流作回退处理，但不能保证音视频流的质量。
         */
        STREAM_FALLBACK_OPTION_DISABLED = 0,
        /** @en
         * 1: Under poor downlink network conditions, the remote video stream, to which you subscribe, falls back to the
         * low-stream (low resolution and low bitrate) video. You can set this option only in the
         * [setRemoteSubscribeFallbackOption]{@link agora.setRemoteSubscribeFallbackOption} method. Nothing happens when you set this
         * in the [setLocalPublishFallbackOption]{@link agora.setLocalPublishFallbackOption} method.
         */
        /** @cn
         * 1: 在下行网络条件较差时只接收视频小流（低分辨率、低码率视频流）。该选项只对  
         * [setRemoteSubscribeFallbackOption]{@link agora.setRemoteSubscribeFallbackOption}  有效，对  
         * [setLocalPublishFallbackOption]{@link agora.setLocalPublishFallbackOption}  方法无效。
         */
        STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW =1,
        /** @en
         * 2: Under poor uplink network conditions, the published video stream falls back to audio only.
         *
         * Under poor downlink network conditions, the remote video stream, to which you subscribe, first falls back to the
         * low-stream (low resolution and low bitrate) video; and then to an audio-only stream if the network conditions worsen.
         */
        /** @cn
         * 2: 上行/下行网络较弱时，先尝试只接收视频小流（低分辨率、低码率视频流）；如果网络环境无法显示视频，则再回退到只接收远端订阅的音频流。
         */
        STREAM_FALLBACK_OPTION_AUDIO_ONLY = 2,
    }

    /** @en
     * @ignore
     * Camera capturer configuration.
     */
    /** @cn
     * @ignore
     * 摄像头采集偏好。
    */
    export enum CAPTURER_OUTPUT_PREFERENCE {
        /** @en
         * 0: (Default) self-adapts the camera output parameters to the system performance and network conditions to balance
         * CPU consumption and video preview quality.
         */
        /** @cn
         * （默认）自动调整采集参数。SDK 根据实际的采集设备性能及网络情况，选择合适的摄像头输出参数，在设备性能及视频预览质量之间，维持平衡。
         */
        CAPTURER_OUTPUT_PREFERENCE_AUTO = 0,
        /** @en
         * 1: Prioritizes the system performance. The SDK chooses the dimension and frame rate of the local camera capture
         * closest to those set by [setVideoEncoderConfiguration]{@link agora.setVideoEncoderConfiguration}
         */
        /** @cn
         * 优先保证设备性能。SDK 根据用户在  [setVideoEncoderConfiguration]{@link agora.setVideoEncoderConfiguration}  
         * 中设置编码器的分辨率和帧率，选择最接近的摄像头输出参数，从而保证设备性能。在这种情况下，预览质量接近于编码器的输出质量。
         */
        CAPTURER_OUTPUT_PREFERENCE_PERFORMANCE = 1,
        /** @en
         * 2: Prioritizes the local preview quality. The SDK chooses higher camera output parameters to improve the local
         * video preview quality. This option requires extra CPU and RAM usage for video pre-processing.
         */
        /** @cn
         * 优先保证视频预览质量。SDK选择较高的摄像头输出参数，从而提高预览视频的质量。在这种情况下，会消耗更多的 CPU 及内存做视频前处理。
         */
        CAPTURER_OUTPUT_PREFERENCE_PREVIEW = 2,
    }

    /** @en
     * The priority of the remote user.
     */
    /** @cn
     * 远端用户的需求优先级。如果将某个用户的优先级设为高，那么发给这个用户的音视频流的优先级就会高于其他用户。
     */
    export enum PRIORITY_TYPE {
        /** @en
         * 50: The user's priority is high.
         */
        /** @cn
         * 用户需求优先级为高。
         */
        PRIORITY_HIGH = 50,
        /** @en
         * 100: (Default) The user's priority is normal.
         */
        /** @cn
         * （默认）用户需求优先级为正常。
         */
        PRIORITY_NORMAL = 100,
    }

    /** @en
     * Connection states.
     */
    /** @cn
     * 网络连接状态。
     */
    export enum CONNECTION_STATE_TYPE {
        /** @en
         * 1: The SDK is disconnected from Agora's edge server.
         * - This is the initial state before calling the [joinChannel]{@link agora.joinChannel} method.
         * - The SDK also enters this state when the application calls the [leaveChannel]{@link agora.leaveChannel} method.
         */
        /** @cn
         * 1: 网络连接断开。
         * 该状态表示 SDK 处于:
         * - 调用  [joinChannel]{@link agora.joinChannel}  加入频道前的初始化阶段;
         * - 或调用  [leaveChannel]{@link agora.leaveChannel}  后的离开频道阶段。
         */
        CONNECTION_STATE_DISCONNECTED = 1,
        /** @en
         * 2: The SDK is connecting to Agora's edge server.
         * - When the application calls the [joinChannel]{@link agora.joinChannel} method, the SDK starts to establish a
         * connection to the specified channel, triggers the [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged}
         * callback, and switches to the `CONNECTION_STATE_CONNECTING` state.
         * - When the SDK successfully joins the channel, it triggers the `onConnectionStateChanged` callback and switches to the
         * [CONNECTION_STATE_CONNECTED]{@link agora.CONNECTION_STATE_TYPE.CONNECTION_STATE_CONNECTED} state.
         * - After the SDK joins the channel and when it finishes initializing the media engine, the SDK triggers the
         * [onJoinChannelSuccess]{@link AgoraRtcEvents.onJoinChannelSuccess} callback.
         */
        /** @cn
         * 2: 建立网络连接中。
         * 该状态表示 SDK 在调用  [joinChannel]{@link agora.joinChannel}  后正在与指定的频道建立连接。
         * - 如果成功加入频道，App 会收到  [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged}  回调，
         * 通知当前网络状态变成 [CONNECTION_STATE_CONNECTED]{@link agora.CONNECTION_STATE_TYPE.CONNECTION_STATE_CONNECTED} 。
         * - 建立连接后，SDK 还会初始化媒体，一切就绪后会回调  [onJoinChannelSuccess]{@link AgoraRtcEvents.onJoinChannelSuccess}  。
         */
        CONNECTION_STATE_CONNECTING = 2,
        /** @en
         * 3: The SDK is connected to Agora's edge server and has joined a channel. You can now publish or subscribe to a media
         * stream in the channel.
         *
         * If the connection to the channel is lost because, for example, if the network is down or switched, the SDK automatically
         * tries to reconnect and triggers:
         * - The [onConnectionInterrupted]{@link AgoraRtcEvents.onConnectionInterrupted} callback (deprecated).
         * - The [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged} callback and switches to the
         * [CONNECTION_STATE_RECONNECTING]{@link agora.CONNECTION_STATE_TYPE.CONNECTION_STATE_RECONNECTING} state.
         */
        /** @cn
         * 3: 网络已连接。
         * 该状态表示用户已经加入频道，可以在频道内发布或订阅媒体流。
         * 如果因网络断开或切换而导致 SDK 与频道的连接中断，SDK 会自动重连，此时应用程序会收到：
         * -  [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged}  回调，通知当前网络状态变成 
         * [CONNECTION_STATE_RECONNECTING]{@link agora.CONNECTION_STATE_TYPE.CONNECTION_STATE_RECONNECTING} 。
         * - 同时会收到  [onConnectionInterrupted]{@link AgoraRtcEvents.onConnectionInterrupted}  回调（已废弃）。
         */
        CONNECTION_STATE_CONNECTED = 3,
        /** @en
         * 4: The SDK keeps rejoining the channel after being disconnected from a joined channel because of network issues.
         *
         * - If the SDK cannot rejoin the channel within 10 seconds after being disconnected from Agora's edge server,
         * the SDK triggers the [onConnectionLost]{@link AgoraRtcEvents.onConnectionLost} callback, stays in the
         * [CONNECTION_STATE_RECONNECTING]{@link agora.CONNECTION_STATE_TYPE.CONNECTION_STATE_RECONNECTING} state, and keeps
         * rejoining the channel.
         * - If the SDK fails to rejoin the channel 20 minutes after being disconnected from Agora's edge server, the SDK
         * triggers the [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged} callback, switches to the
         * [CONNECTION_STATE_FAILED]{@link agora.CONNECTION_STATE_TYPE.CONNECTION_STATE_FAILED} state, and stops rejoining the channel.
         */
        /** @cn
         * 4: 重新建立网络连接中。
         * 该状态表示 SDK 之前曾加入过频道，但因网络等原因连接中断了，此时 SDK 会自动尝试重新接入频道。
         * - 如果 SDK 无法在 10 秒内重新加入频道，则  [onConnectionLost]{@link AgoraRtcEvents.onConnectionLost}  会被触发，SDK 会一直保持在 
         * [CONNECTION_STATE_RECONNECTING]{@link agora.CONNECTION_STATE_TYPE.CONNECTION_STATE_RECONNECTING} 的状态，并不断尝试重新加入频道。
         * - 如果 SDK 在断开连接后，20 分钟内还是没能重新加入频道，则应用程序会收到  
         * [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged}  回调，通知的网络状态进入 
         * [CONNECTION_STATE_FAILED]{@link agora.CONNECTION_STATE_TYPE.CONNECTION_STATE_FAILED} ，SDK 停止尝试重连。
         */
        CONNECTION_STATE_RECONNECTING = 4,
        /** @en
         * 5: The SDK fails to connect to Agora's edge server or join the channel.
         *
         * You must call the [leaveChannel]{@link agora.leaveChannel} method to leave this state, and call the
         * [joinChannel]{@link agora.joinChannel} method again to rejoin the channel.
         *
         * If the SDK is banned from joining the channel by Agora's edge server (through the RESTful API), the SDK triggers the
         * [onConnectionBanned]{@link AgoraRtcEvents.onConnectionBanned} (deprecated) and
         * [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged} callbacks.
         */
        /** @cn
         * 5: 网络连接失败。
         * 该状态表示 SDK 已不再尝试重新加入频道，用户必须要调用  [leaveChannel]{@link agora.leaveChannel}  离开频道。
         * - 如果用户还想重新加入频道，则需要再次调用  [joinChannel]{@link agora.joinChannel}  。
         * - 如果 SDK 因服务器端使用 RESTful API 禁止加入频道，则应用程序会收到  [onConnectionBanned]{@link AgoraRtcEvents.onConnectionBanned}  
         * 回调（已废弃）和  [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged}  回调。
         */
        CONNECTION_STATE_FAILED = 5,
    }

    /** @en
     * Reasons for a connection state change.
     */
    /** @cn
     * 引起网络连接状态发生改变的原因。
     */
    export enum CONNECTION_CHANGED_REASON_TYPE {
        /** @en
         * 0: The SDK is connecting to Agora's edge server.
         */
        /** @cn
         * 0: 建立网络连接中。
         */
        CONNECTION_CHANGED_CONNECTING = 0,
        /** @en
         * 1: The SDK has joined the channel successfully.
         */
        /** @cn
         * 1: 成功加入频道。
         */
        CONNECTION_CHANGED_JOIN_SUCCESS = 1,
        /** @en
         * 2: The connection between the SDK and Agora's edge server is interrupted.
         */
        /** @cn
         * 2: 网络连接中断。 
         */
        CONNECTION_CHANGED_INTERRUPTED = 2,
        /** @en
         * 3: The connection between the SDK and Agora's edge server is banned by Agora's edge server.
         */
        /** @cn
         * 3: 网络连接被服务器禁止。
         */
        CONNECTION_CHANGED_BANNED_BY_SERVER = 3,
        /** @en
         * 4: The SDK fails to join the channel for more than 20 minutes and stops reconnecting to the channel.
         */
        /** @cn
         * 4: 加入频道失败。SDK 在尝试加入频道 20 分钟后还是没能加入频道，会返回该状态，并停止尝试重连。
         */
        CONNECTION_CHANGED_JOIN_FAILED = 4,
        /** @en
         * 5: The SDK has left the channel.
         */
        /** @cn
         * 5: 离开频道。
         */
        CONNECTION_CHANGED_LEAVE_CHANNEL = 5,
        /** @en
         * 6: The connection failed since Appid is not valid.
         */
        /** @cn
         * 6: 不是有效的 APP ID。请更换有效的 APP ID 重新加入频道。 
         */
        CONNECTION_CHANGED_INVALID_APP_ID = 6,
        /** @en
         * 7: The connection failed since channel name is not valid.
         */
        /** @cn
         * 7: 不是有效的频道名。请更换有效的频道名重新加入频道。 
         */
        CONNECTION_CHANGED_INVALID_CHANNEL_NAME = 7,
        /** @en
         * 8: The connection failed since token is not valid, possibly because:
         *
         * - The App Certificate for the project is enabled in Console, but you do not use Token when joining the channel.
         * If you enable the App Certificate, you must use a token to join the channel.
         * - The uid that you specify in the [joinChannel]{@link agora.joinChannel} method is different from the uid that
         * you pass for generating the token.
         */
        /** @cn
         * 8: 生成的 Token 无效。一般有以下原因：
         * - 在控制台上启用了 App Certificate，但加入频道未使用 Token。当启用了 App Certificate，必须使用 Token。
         * - 在调用  [joinChannel]{@link agora.joinChannel}  加入频道时指定的 uid 与生成 Token 时传入的 uid 不一致。
         */
        CONNECTION_CHANGED_INVALID_TOKEN = 8,
        /** @en
         * 9: The connection failed since token is expired.
         */
        /** @cn
         * 9: 当前使用的 Token 过期，不再有效，需要重新在你的服务端申请生成 Token。 
         */
        CONNECTION_CHANGED_TOKEN_EXPIRED = 9,
        /** @en
         * 10: The connection is rejected by server.
         */
        /** @cn
         * 10: 此用户被服务器禁止。 
         */
        CONNECTION_CHANGED_REJECTED_BY_SERVER = 10,
        /** @en
         * 11: The connection changed to reconnecting since SDK has set a proxy server.
         */
        /** @cn
         * 11: 由于设置了代理服务器，SDK 尝试重连。 
         */
        CONNECTION_CHANGED_SETTING_PROXY_SERVER = 11,
        /** @en
         * 12: When SDK is in connection failed, the renew token operation will make it connecting.
         */
        /** @cn
         * 12: 更新 Token 引起网络连接状态改变。 
         */
        CONNECTION_CHANGED_RENEW_TOKEN = 12,
        /** @en
         * 13: The IP Address of SDK client has changed. i.e., Network type or IP/Port changed by network operator might
         * change client IP address.
         */
        /** @cn
         * 13: 客户端 IP 地址变更，可能是由于网络类型，或网络运营商的 IP 或端口发生改变引起。
         */
        CONNECTION_CHANGED_CLIENT_IP_ADDRESS_CHANGED = 13,
        /** @en
         * 14: Timeout for the keep-alive of the connection between the SDK and Agora's edge server. The connection state
         * changes to [CONNECTION_STATE_RECONNECTING]{@link agora.CONNECTION_STATE_TYPE.CONNECTION_STATE_RECONNECTING}.
         */
        /** @cn
         * 14: SDK 和服务器连接保活超时，进入自动重连状态 
         * [CONNECTION_STATE_RECONNECTING]{@link agora.CONNECTION_STATE_TYPE.CONNECTION_STATE_RECONNECTING}。
         */
        CONNECTION_CHANGED_KEEP_ALIVE_TIMEOUT = 14,
    }

    /** @en
     * Network type.
     */
    /** @cn
     * 网络连接类型
     */
    export enum NETWORK_TYPE {
        /** @en
         * -1: The network type is unknown.
         */
        /** @cn
         * -1: 网络连接类型未知。 
         */
        NETWORK_TYPE_UNKNOWN = -1,
        /** @en
         * 0: The SDK disconnects from the network.
         */
        /** @cn
         * 0: 网络连接已断开。
         */
        NETWORK_TYPE_DISCONNECTED = 0,
        /** @en
         * 1: The network type is LAN.
         */
        /** @cn
         * 1: 网络类型为 LAN。
         */
        NETWORK_TYPE_LAN = 1,
        /** @en
         * 2: The network type is Wi-Fi(including hotspots).
         */
        /** @cn
         * 2: 网络类型为 Wi-Fi(包含热点）。
         */
        NETWORK_TYPE_WIFI = 2,
        /** @en
         * 3: The network type is mobile 2G.
         */
        /** @cn
         * 3: 网络类型为 2G 移动网络。
         */
        NETWORK_TYPE_MOBILE_2G = 3,
        /** @en
         * 4: The network type is mobile 3G.
         */
        /** @cn
         * 4: 网络类型为 3G 移动网络。
         */
        NETWORK_TYPE_MOBILE_3G = 4,
        /** @en
         * 5: The network type is mobile 4G.
         */
        /** @cn
         * 5: 网络类型为 4G 移动网络。
         */
        NETWORK_TYPE_MOBILE_4G = 5,
    }

    /** @en
     * States of the last-mile network probe test.
     */
    /** @cn
     * Last mile 质量探测结果的状态。
     */
    export enum LASTMILE_PROBE_RESULT_STATE {
        /** @en
         * 1: The last-mile network probe test is complete.
         */
        /** @cn
         * 1: 表示本次 last mile 质量探测的结果是完整的。
         */
        LASTMILE_PROBE_RESULT_COMPLETE = 1,
        /** @en
         * 2: The last-mile network probe test is incomplete and the bandwidth estimation is not available, probably due to
         * limited test resources.
         */
        /** @cn
         * 2: 表示本次 last mile 质量探测未进行带宽预测，因此结果不完整。一个可能的原因是测试资源暂时受限。
         */
        LASTMILE_PROBE_RESULT_INCOMPLETE_NO_BWE = 2,
        /** @en
         * 3: The last-mile network probe test is not carried out, probably due to poor network conditions. */
        /** @cn
         * 3: 未进行 last mile 质量探测。一个可能的原因是网络连接中断。
         */
        LASTMILE_PROBE_RESULT_UNAVAILABLE = 3
    }

    /** @en
     * Audio output routing.
     */
    /** @cn
     * 语音路由
     */
    export enum AUDIO_ROUTE_TYPE {
        /** @en
         * Default.
         */
        /** @cn
         * 使用默认的语音路由
         */
        AUDIO_ROUTE_DEFAULT = -1,
        /** @en
         * Headset.
         */
        /** @cn
         * 使用耳机为语音路由
         */
        AUDIO_ROUTE_HEADSET = 0,
        /** @en
         * Earpiece.
         */
        /** @cn
         * 使用听筒为语音路由
         */
        AUDIO_ROUTE_EARPIECE = 1,
        /** @en
         * Headset with no microphone.
         */
        /** @cn
         * 使用不带麦的耳机为语音路由
         */
        AUDIO_ROUTE_HEADSET_NO_MIC = 2,
        /** @en
         * Speakerphone.
         */
        /** @cn
         * 使用手机的扬声器为语音路由
         */
        AUDIO_ROUTE_SPEAKERPHONE = 3,
        /** @en
         * Loudspeaker.
         */
        /** @cn
         * 使用外接的扬声器为语音路由
         */
        AUDIO_ROUTE_LOUDSPEAKER = 4,
        /** @en
         * Bluetooth headset.
         */
        /** @cn
         * 使用蓝牙耳机为语音路由
         */
        AUDIO_ROUTE_BLUETOOTH = 5,
        /** @en
         * USB peripheral.
         */
        /** @cn
         * 使用 USB 外围设备为语音路由（仅适用于 macOS）
         */
        AUDIO_ROUTE_USB = 6,
        /** @en
         * HDMI peripheral.
         */
        /** @cn
         * 使用 HDMI 外围设备为语音路由（仅适用于 macOS）
         */
        AUDIO_ROUTE_HDMI = 7,
        /** @en
         * DisplayPort peripheral.
         */
        /** @cn
         * 使用 DisplayPort 外围设备为语音路由（仅适用于 macOS）
         */
        AUDIO_ROUTE_DISPLAYPORT = 8,
        /** @en
         * Apple AirPlay.
         */
        /** @cn
         * 使用 Apple AirPlay 为语音路由（仅适用于 macOS）
         */
        AUDIO_ROUTE_AIRPLAY = 9,
    }

    /** @en
     * Audio session restriction.
     */
    /** @cn
     * 音频会话控制权限
     * Agora SDK 对 Audio Session 的控制权限
     */
    export enum AUDIO_SESSION_OPERATION_RESTRICTION {
        /** @en
         * No restriction, the SDK has full control of the audio session operations.
         */
        /** @cn
         * 没有限制，SDK 可以完全控制 Audio Session 操作。
         */
        AUDIO_SESSION_OPERATION_RESTRICTION_NONE = 0,
        /** @en
         * The SDK does not change the audio session category.
         */
        /** @cn
         * SDK 不能更改 Audio Session 的 category。
         */
        AUDIO_SESSION_OPERATION_RESTRICTION_SET_CATEGORY = 1,
        /** @en
         * The SDK does not change any setting of the audio session (category, mode, categoryOptions).
         */
        /** @cn
         * SDK 不能更改 Audio Session 的 category，mode，categoryOptions。
         */
        AUDIO_SESSION_OPERATION_RESTRICTION_CONFIGURE_SESSION = 1 << 1,
        /** @en
         * The SDK keeps the audio session active when leaving a channel.
         */
        /** @cn
         * 离开某个频道时，SDK 会保持 Audio Session 处于活动状态。
         */
        AUDIO_SESSION_OPERATION_RESTRICTION_DEACTIVATE_SESSION = 1 << 2,
        /** @en
         * The SDK does not configure the audio session anymore.
         */
        /** @cn
         * 限制 SDK 对 Audio Session 进行任何操作，SDK 将不能再对 Audio Session 进行任何配置。
         */
        AUDIO_SESSION_OPERATION_RESTRICTION_ALL = 1 << 7,
    }

    /** @en
     * @ignore
     * The direction of the camera.
     */
    /** @cn
     * @ignore
     * 摄像头方向
     */
    export enum CAMERA_DIRECTION {
        /** @en
         * The rear camera.
         */
        /** @cn
         * 0: 后置摄像头
         */
        CAMERA_REAR = 0,
        /** @en
         * The front camera.
         */
        /** @cn
         * 1: 前置摄像头
         */
        CAMERA_FRONT = 1,
    }

    /** @en
     * @ignore
     * Quality change of the local video in terms of target frame rate and target bit rate since last count.
     */
    /** @cn
     * @ignore
     * 自上次统计后本地视频质量的自适应情况（基于目标帧率和目标码率）。
     */
    export enum QUALITY_ADAPT_INDICATION {
        /** @en
         * The quality of the local video stays the same.
         */
        /** @cn
         * 本地视频质量不变。
         */
        ADAPT_NONE = 0,
        /** @en
         * The quality improves because the network bandwidth increases.
         */
        /** @cn
         * 因网络带宽增加，本地视频质量改善。
         */
        ADAPT_UP_BANDWIDTH = 1,
        /** @en
         * The quality worsens because the network bandwidth decreases.
         */
        /** @cn
         * 因网络带宽减少，本地视频质量变差。
         */
        ADAPT_DOWN_BANDWIDTH = 2,
    }

    /** @en
     * The error code in CHANNEL_MEDIA_RELAY_ERROR.
     */
    /** @cn
     * 跨频道媒体流转发出错的错误码。
     */
    export enum CHANNEL_MEDIA_RELAY_ERROR {
        /** @en
         * 0: The state is normal.
         */
        /** @cn
         * 0: 一切正常。
         */
        RELAY_OK = 0,
        /** @en
         * 1: An error occurs in the server response.
         */
        /** @cn
         * 1: 服务器回应出错。
         */
        RELAY_ERROR_SERVER_ERROR_RESPONSE = 1,
        /** @en
         * 2: No server response. You can call the
         * [leaveChannel]{@link agora.leaveChannel} method to leave the channel.
         */
        /** @cn
         * 2: 服务器无回应。你可以调用 [leaveChannel]{@link agora.leaveChannel}  方法离开频道。
         */
        RELAY_ERROR_SERVER_NO_RESPONSE = 2,
        /** @en
         * 3: The SDK fails to access the service, probably due to limited
         * resources of the server.
         */
        /** @cn
         * 3: SDK 无法获取服务，可能是因为服务器资源有限导致。
         */
        RELAY_ERROR_NO_RESOURCE_AVAILABLE = 3,
        /** @en
         * 4: Fails to send the relay request.
         */
        /** @cn
         * 4: 发起跨频道转发媒体流请求失败。
         */
        RELAY_ERROR_FAILED_JOIN_SRC = 4,
        /** @en
         * 5: Fails to accept the relay request.
         */
        /** @cn
         * 5: 接受跨频道转发媒体流请求失败。
         */
        RELAY_ERROR_FAILED_JOIN_DEST = 5,
        /** @en
         * 6: The server fails to receive the media stream.
         */
        /** @cn
         * 6: 服务器接收跨频道转发媒体流失败。
         */
        RELAY_ERROR_FAILED_PACKET_RECEIVED_FROM_SRC = 6,
        /** @en
         * 7: The server fails to send the media stream.
         */
        /** @cn
         * 7: 服务器发送跨频道转发媒体流失败。
         */
        RELAY_ERROR_FAILED_PACKET_SENT_TO_DEST = 7,
        /** @en
         * 8: The SDK disconnects from the server due to poor network
         * connections. You can call the [leaveChannel]{@link agora.leaveChannel} method to leave the channel.
         */
        /** @cn
         * 8: SDK 因网络质量不佳与服务器断开。你可以调用
         *  [leaveChannel]{@link agora.leaveChannel}  方法离开当前频道。
         */
        RELAY_ERROR_SERVER_CONNECTION_LOST = 8,
        /** @en
         * 9: An internal error occurs in the server.
         */
        /** @cn
         * 9: 服务器内部出错。
         */
        RELAY_ERROR_INTERNAL_ERROR = 9,
        /** @en
         * 10: The token of the source channel has expired.
         */
        /** @cn
         * 10: 源频道的 Token 已过期。
         */
        RELAY_ERROR_SRC_TOKEN_EXPIRED = 10,
        /** @en
         * 11: The token of the destination channel has expired.
         */
        /** @cn
         * 11: 目标频道的 Token 已过期。
         */
        RELAY_ERROR_DEST_TOKEN_EXPIRED = 11,
    }

    /** @en
     * The event code in CHANNEL_MEDIA_RELAY_EVENT.
     */
    /** @cn
     * 跨频道媒体流转发事件码。
     */
    export enum CHANNEL_MEDIA_RELAY_EVENT {
        /** @en
         * 0: The user disconnects from the server due to poor network
         * connections.
         */
        /** @cn
         * 0: 网络中断导致用户与服务器连接断开。
         */
        RELAY_EVENT_NETWORK_DISCONNECTED = 0,
        /** @en
         * 1: The network reconnects.
         */
        /** @cn
         * 1: 用户与服务器建立连接。
         */
        RELAY_EVENT_NETWORK_CONNECTED = 1,
        /** @en
         * 2: The user joins the source channel.
         */
        /** @cn
         * 2: 用户已加入源频道。
         */
        RELAY_EVENT_PACKET_JOINED_SRC_CHANNEL = 2,
        /** @en
         * 3: The user joins the destination channel.
         */
        /** @cn
         * 3: 用户已加入目标频道。
         */
        RELAY_EVENT_PACKET_JOINED_DEST_CHANNEL = 3,
        /** @en
         * 4: The SDK starts relaying the media stream to the destination channel.
         */
        /** @cn
         * 4: SDK 开始向目标频道发送数据包。
         */
        RELAY_EVENT_PACKET_SENT_TO_DEST_CHANNEL = 4,
        /** @en
         * @ignore 5: The server receives the video stream from the source channel.
         */
        /** @cn
         * 5: 服务器收到了目标频道发送的视频流。
         */
        RELAY_EVENT_PACKET_RECEIVED_VIDEO_FROM_SRC = 5,
        /** @en
         * 6: The server receives the audio stream from the source channel.
         */
        /** @cn
         * 6: 服务器收到了目标频道发送的音频流。
         */
        RELAY_EVENT_PACKET_RECEIVED_AUDIO_FROM_SRC = 6,
        /** @en
         * 7: The destination channel is updated.
         */
        /** @cn
         * 7: 目标频道已更新。
         */
        RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL = 7,
        /** @en
         * 8: The destination channel update fails due to internal reasons.
         */
        /** @cn
         * 8: 内部原因导致目标频道更新失败。
         */
        RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL_REFUSED = 8,
        /** @en
         * 9: The destination channel does not change, which means that the
         * destination channel fails to be updated.
         */
        /** @cn
         * 9: 目标频道未发生改变，即目标频道更新失败。
         */
        RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL_NOT_CHANGE = 9,
        /** @en
         * 10: The destination channel name is `null`.
         */
        /** @cn
         * 10: 目标频道名为 NULL。
         */
        RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL_IS_NULL = 10,
        /** @en
         * @ignore 11: The video profile is sent to the server.
         */
        /** @cn
         * 11: 视频属性已发送至服务器。
         */
        RELAY_EVENT_VIDEO_PROFILE_UPDATE = 11,
    }

    /** @en
     * The state code in CHANNEL_MEDIA_RELAY_STATE.
     */
    /** @cn
     * 跨频道媒体流转发状态码。
     */
    export enum CHANNEL_MEDIA_RELAY_STATE {
        /** @en
         * 0: The SDK is initializing.
         */
        /** @cn
         * 0: SDK 正在初始化。
         */
        RELAY_STATE_IDLE = 0,
        /** @en
         * 1: The SDK tries to relay the media stream to the destination channel.
         */
        /** @cn
         * 1: SDK 尝试跨频道。
         */
        RELAY_STATE_CONNECTING = 1,
        /** @en
         * 2: The SDK successfully relays the media stream to the destination
         * channel.
         */
        /** @cn
         * 2: 源频道主播成功加入目标频道。
         */
        RELAY_STATE_RUNNING = 2,
        /** @en
         * 3: A failure occurs. See the details in code.
         */
        /** @cn
         * 3: 发生异常，详见 `code` 中提示的错误信息。
         */
        RELAY_STATE_FAILURE = 3,
    }

    /** @en
     * @ignore
     * (Recommended) The standard bitrate set in the [setVideoEncoderConfiguration]{@link agora.setVideoEncoderConfiguration} method.
     *
     * In this mode, the bitrates differ between the live interactive streaming and communication profiles:
     * - `COMMUNICATION` profile: The video bitrate is the same as the base bitrate.
     * - `LIVE_BROADCASTING` profile: The video bitrate is twice the base bitrate.
     */
    /** @cn
     * @ignore
     * [setVideoEncoderConfiguration]{@link agora.setVideoEncoderConfiguration}  的标准码率。（推荐）标准码率模式。该模式下，
     * 视频在通信和直播场景下的码率有所不同：通信场景下，码率与基准码率一致；直播场景下，码率对照基准码率翻倍。
     */
    export const STANDARD_BITRATE = 0

    /** @en
     * @ignore
     * The compatible bitrate set in the [setVideoEncoderConfiguration]{@link agora.setVideoEncoderConfiguration} method.
     * The bitrate remains the same regardless of the channel profile. If you choose this mode in the `LIVE_BROADCASTING` profile, the
     * video frame rate may be lower than the set value.
     */
    /** @cn
     * @ignore
     * [setVideoEncoderConfiguration]{@link agora.setVideoEncoderConfiguration}  的兼容码率。 适配码率模式。该模式下，
     * 视频在通信和直播场景下的码率均与基准码率一致。直播下如果选择该模式，视频帧率可能会低于设置的值。
     */
    export const COMPATIBLE_BITRATE = -1

    /** @en
     * @ignore
     * Use the default minimum bitrate.
     */
    /** @cn
     * @ignore
     * 使用系统默认最低编码码率。
     */
    export const DEFAULT_MIN_BITRATE = -1

    /** @en
     * @deprecated
     * Lifecycle of the CDN live video stream.
     */
    /** @cn
     * @deprecated
     * 服务端转码推流的生命周期。
     */
    export enum RTMP_STREAM_LIFE_CYCLE_TYPE {
        /** @en
         * Bind to the channel lifecycle. If all hosts leave the channel, the CDN live streaming stops after 30 seconds.
         */
        /** @cn
         * @deprecated 跟频道生命周期绑定，即频道内所有主播离开，服务端转码推流会在 30 秒之后停止。
         */
        RTMP_STREAM_LIFE_CYCLE_BIND2CHANNEL = 1,
        /** @en
         * Bind to the owner of the RTMP stream. If the owner leaves the channel, the CDN live streaming stops immediately.
         */
        /** @cn
         * @deprecated 跟启动服务端转码推流的主播生命周期绑定，即该主播离开，服务端转码推流会立即停止。
         */
        RTMP_STREAM_LIFE_CYCLE_BIND2OWNER = 2,
    }

    /** @en
     * @ignore
     * Content hints for screen sharing.
     */
    /** @cn
     * @ignore
     * 屏幕共享的内容类型
     */
    export enum VideoContentHint {
        /** @en
         * (Default) No content hint.
         */
        /** @cn
         * （默认）无指定的内容类型。
         */
        CONTENT_HINT_NONE,
        /** @en
         * Motion-intensive content. Choose this option if you prefer smoothness or when you are sharing a video clip, movie, or
         * video game.
         */
        /** @cn
         * 内容类型为动画。当共享的内容是视频、电影或视频游戏时，推荐选择该内容类型。
         */
        CONTENT_HINT_MOTION,
        /** @en
         * Motionless content. Choose this option if you prefer sharpness or when you are sharing a picture, PowerPoint slide, or text.
         */
        /** @cn
         * 内容类型为细节。当共享的内容是图片或文字时，推荐选择该内容类型。
         */
        CONTENT_HINT_DETAILS
    }

    /** @en
     * Regions for connection.
     */
    /** @cn
     * 访问区域。
     */
    export enum AREA_CODE {
        /** @en
         * Mainland China.
         */
        /** @cn
         * 中国大陆。
         */
        AREA_CODE_CN = (1 << 0),
        /** @en
         * North America.
         */
        /** @cn
         * 北美区域。
         */
        AREA_CODE_NA = (1 << 1),
        /** @en
         * Europe.
         */
        /** @cn
         * 欧洲区域。
         */
        AREA_CODE_EUR = (1 << 2),
        /** @en
         * Asia, excluding Mainland China.
         */
        /** @cn
         * 除中国大陆以外的亚洲区域。
         */
        AREA_CODE_AS = (1 << 3),
        /** @en
         * Japan.
         */
        /** @cn
         * 日本区域。
         */
        AREA_CODE_JAPAN = (1 << 4),
        /** @en
         * India.
         */
        /** @cn
         * 印度区域。
         */
        AREA_CODE_INDIA = (1 << 5),
        /** @en
         * (Default) Global.
         */
        /** @cn
         * （默认）全球。
         */
        AREA_CODE_GLOBAL = (0xFFFFFFFF)
    }

    /**
     * @ignore
     */
    export enum ENCRYPTION_CONFIG {
        ENCRYPTION_FORCE_SETTING = (1 << 0),
        ENCRYPTION_FORCE_DISABLE_PACKET = (1 << 1)
    }

    /** @en
     * Encryption mode.
     */
    /** @cn
     * 内置加密模式。
     */
    export enum ENCRYPTION_MODE {
        /** @en
         * 1: (Default) 128-bit AES encryption, XTS mode.
         */
        /** @cn
         * 1:（默认）128 位 AES 加密，XTS 模式。
         */
        AES_128_XTS = 1,
        /** @en
         * 2: 128-bit AES encryption, ECB mode.
         */
        /** @cn
         * 2: 128 位 AES 加密，ECB 模式。
         */
        AES_128_ECB = 2,
        /** @en
         * 3: 256-bit AES encryption, XTS mode.
         */
        /** @cn
         * 3: 256 位 AES 加密，XTS 模式。
         */
        AES_256_XTS = 3,
        /** @en
         * 4: 128-bit SM4 encryption, ECB mode.
         */
        /** @cn
         * 4: 128 位 SM4 加密，ECB 模式。
         */
        SM4_128_ECB = 4,
        /** @en
         * Enumerator boundary.
         */
        /** @cn
         * 枚举值边界。
         */
        MODE_END,
    }

    /** @en
     * Error code.
     */
    /** @cn
     * 错误代码
     * 错误代码意味着 SDK 遇到不可恢复的错误，需要应用程序干预，例如打开摄像头失败会返回错误，应用程序需要提示用户不能使用摄像头。
     */
    export enum ERROR_CODE_TYPE {
        /** @en
         * 0: No error occurs.
         */
        /** @cn
         * 0: 没有错误。
         */
        ERR_OK = 0,
        //1~1000
        /** @en
         * 1: A general error occurs (no specified reason).
         */
        /** @cn
         * 1: 一般性的错误（没有明确归类的错误原因）。
         */
        ERR_FAILED = 1,
        /** @en
         * 2: An invalid parameter is used. For example, the specific channel name includes illegal characters.
         */
        /** @cn
         * 2: API 调用了无效的参数。例如指定的频道名含有非法字符。
         */
        ERR_INVALID_ARGUMENT = 2,
        /** @en
         * 3: The SDK module is not ready. Possible solutions:
         * - Check the audio device.
         * - Check the completeness of the application.
         * - Re-initialize the Agora engine.
         */
        /** @cn
         * 3: RTC 引擎初始化失败。处理方法：
         * - 检查音频设备状态。
         * - 检查程序集完整性。
         * - 尝试重新初始化 RTC 引擎。
         */
        ERR_NOT_READY = 3,
        /** @en
         * 4: The SDK does not support this function.
         */
        /** @cn
         * 4: RTC 引擎当前状态不支持此项操作。
         */
        ERR_NOT_SUPPORTED = 4,
        /** @en
         * 5: The request is rejected.
         */
        /** @cn
         * 5: 调用被拒绝。
         */
        ERR_REFUSED = 5,
        /** @en
         * 6: The buffer size is not big enough to store the returned data.
         */
        /** @cn
         * 6: 传入的缓冲区大小不足以存放返回的数据。
         */
        ERR_BUFFER_TOO_SMALL = 6,
        /** @en
         * 7: The SDK is not initialized before calling this method.
         */
        /** @cn
         * 7: SDK 尚未初始化，就调用其 API。请确认在调用 API 之前已初始化 Agora  引擎。
         */
        ERR_NOT_INITIALIZED = 7,
        /** @en
         * 9: No permission exists. Check if the user has granted access to the audio or video device.
         */
        /** @cn
         * 9: 没有操作权限，请检查用户是否授予 app 音视频设备使用权限。
         */
        ERR_NO_PERMISSION = 9,
        /** @en
         * 10: An API method timeout occurs. Some API methods require the SDK to return the execution result, and this error occurs if
         * the request takes too long (more than 10 seconds) for the SDK to process.
         */
        /** @cn
         * 10: API 调用超时。有些 API 调用需要 SDK 返回结果，如果 SDK 处理事件过长，超过 10 秒没有返回，会出现此错误。
         */
        ERR_TIMEDOUT = 10,
        /** @en
         * 11: The request is canceled. This is for internal SDK use only, and it does not return to the application through any method
         * or callback.
         */
        /** @cn
         * 11: 请求被取消。仅供 SDK 内部使用，不通过 API 或者回调事件返回给 App。
         */
        ERR_CANCELED = 11,
        /** @en
         * 12: The method is called too often. This is for internal SDK use only, and it does not return to the application through any
         * method or callback.
         */
        /** @cn
         * 12: 调用频率太高。仅供 SDK 内部使用，不通过 API 或者回调事件返回给 App。
         */
        ERR_TOO_OFTEN = 12,
        /** @en
         * 13: The SDK fails to bind to the network socket. This is for internal SDK use only, and it does not return to the application
         * through any method or callback.
         */
        /** @cn
         * 13: SDK 内部绑定到网络 Socket 失败。仅供 SDK 内部使用，不通过 API 或者回调事件返回给 App。
         */
        ERR_BIND_SOCKET = 13,
        /** @en
         * 14: The network is unavailable. This is for internal SDK use only, and it does not return to the application through any
         * method or callback.
         */
        /** @cn
         * 14: 网络不可用。仅供 SDK 内部使用，不通过 API 或者回调事件返回给 App。
         */
        ERR_NET_DOWN = 14,
        /** @en
         * 15: No network buffers are available. This is for internal SDK internal use only, and it does not return to the application
         * through any method or callback.
         */
        /** @cn
         * 15: 没有网络缓冲区可用。仅供 SDK 内部使用，不通过 API 或者回调事件返回给 App。
         */
        ERR_NET_NOBUFS = 15,
        /** @en
         * 17: The request to join the channel is rejected.
         *
         * - This error usually occurs when the user is already in the channel, and still calls the method to join the channel, for
         * example, [joinChannel]{@link agora.joinChannel} .
         * - This error usually occurs when the user tries to join a channel during a call test
         * ([startEchoTest]{@link agora.startEchoTest}). Once you call [startEchoTest]{@link agora.startEchoTest} , you need to call
         * [stopEchoTest]{@link agora.stopEchoTest} before joining a channel.
         */
        /** @cn
         * 17: 加入频道被拒绝。一般有以下原因：
         * - 用户已进入频道，再次调用加入频道的 API，例如  [joinChannel]{@link agora.joinChannel}  ，会返回此错误。停止调用该方法即可。
         * - 用户在调用  [startEchoTest]{@link agora.startEchoTest}  进行通话测试时，尝试加入频道。通话测试开始后，需要先调用  
         * [stopEchoTest]{@link agora.stopEchoTest}  结束当前测试，再加入频道。
         */
        ERR_JOIN_CHANNEL_REJECTED = 17,
        /** @en
         * 18: The request to leave the channel is rejected.
         *
         * This error usually occurs:
         * - When the user has left the channel and still calls [leaveChannel]{@link agora.leaveChannel} to leave the channel.
         * In this case, stop calling [leaveChannel]{@link agora.leaveChannel}.
         * - When the user has not joined the channel and still calls [leaveChannel]{@link agora.leaveChannel} to leave the channel.
         * In this case, no extra operation is needed.
         */
        /** @cn
         * 18: 离开频道失败。一般有以下原因：
         * - 用户已离开频道，再次调用退出频道的 API，例如  [leaveChannel]{@link agora.leaveChannel}  ，会返回此错误。停止调用该方法即可。
         * - 用户尚未加入频道，就调用退出频道的 API。这种情况下无需额外操作。
         */
        ERR_LEAVE_CHANNEL_REJECTED = 18,
        /** @en
         * 19: Resources are occupied and cannot be reused.
         */
        /** @cn
         * 19: 资源已被占用，不能重复使用。
         */
        ERR_ALREADY_IN_USE = 19,
        /** @en
         * 20: The SDK gives up the request due to too many requests.
         */
        /** @cn
         * 20: SDK 放弃请求，可能由于请求次数太多。
         */
        ERR_ABORTED = 20,
        /** @en
         * 21: In Windows, specific firewall settings can cause the SDK to fail to initialize and crash.
         */
        /** @cn
         * 21: Windows 下特定的防火墙设置导致 SDK 初始化失败然后崩溃。
         */
        ERR_INIT_NET_ENGINE = 21,
        /** @en
         * 22: The application uses too much of the system resources and the SDK fails to allocate the resources.
         */
        /** @cn
         * 22: 当用户 App 占用资源过多，或系统资源耗尽时，SDK 分配资源失败会返回该错误。
         */
        ERR_RESOURCE_LIMITED = 22,
        /** @en
         * 101: The specified App ID is invalid. Please try to rejoin the channel with a valid App ID.
         */
        /** @cn
         * 101: 不是有效的 App ID。请更换有效的 App ID 重新加入频道。
         */
        ERR_INVALID_APP_ID = 101,
        /** @en
         * 102: The specified channel name is invalid. Please try to rejoin the channel with a valid channel name.
         */
        /** @cn
         * 102: 不是有效的频道名。请更换有效的频道名重新加入频道。
         */
        ERR_INVALID_CHANNEL_NAME = 102,
        /** @en
         * 103: Fails to get server resources in the specified region. Please try to specify another region when calling
         * [init]{@link agora.init} .
         */
        /** @cn
         * 103: 无法获取当前指定区域的服务器资源。请在调用  [initialize]{@link agora.initialize}  方法时尝试指定其他区域。
         */
        ERR_NO_SERVER_RESOURCES = 103,
        /** @en
         * @deprecated 109: Use `CONNECTION_CHANGED_TOKEN_EXPIRED(9)` in the
         * [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged} callback instead.
         *
         * The token expired due to one of the following reasons:
         * - Authorized Timestamp expired: The timestamp is represented by the number of seconds elapsed since 1/1/1970. The user can
         * use the Token to access the Agora service within 24 hours after the Token is generated. If the user does not access the
         * Agora service after 24 hours, this Token is no longer valid.
         * - Call Expiration Timestamp expired: The timestamp is the exact time when a user can no longer use the Agora service
         * (for example, when a user is forced to leave an ongoing call). When a value is set for the Call Expiration Timestamp,
         * it does not mean that the token will expire, but that the user will be banned from the channel.
         */
        /** @cn
         * @deprecated
         * 109: 从 v2.4.1 起废弃。请改用  [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged}  回调中的 
         * `CONNECTION_CHANGED_TOKEN_EXPIRED(9)`。
         * 
         * 当前使用的 Token 过期，不再有效。一般有以下原因：
         * - Token 授权时间戳无效：Token 授权时间戳为 Token 生成时的时间戳，自 1970 年 1 月 1 日开始到当前时间的描述。授权该 Token 在生成后的 
         * 24 小时内可以访问 Agora 服务。如果 24 小时内没有访问，则该 Token 无法再使用。需要重新在服务端申请生成 Token。
         * - Token 服务到期时间戳已过期：用户设置的服务到期时间戳小于当前时间戳，无法继续使用 Agora 服务（比如正在进行的通话会被强制终止）；
         * 设置服务到期时间并不意味着 Token 失效，而仅仅用于限制用户使用当前服务的时间。需要重新在服务端申请生成 Token。
         */
        ERR_TOKEN_EXPIRED = 109,
        /** @en
         * @deprecated 110: Use `CONNECTION_CHANGED_INVALID_TOKEN(8)` in the
         * [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged} callback instead.
         *
         * The token is invalid due to one of the following reasons:
         * - The App Certificate for the project is enabled in Console, but the user is still using the App ID. Once the App
         * Certificate is enabled, the user must use a token.
         * - The uid is mandatory, and users must set the same uid as the one set in the [joinChannel]{@link agora.joinChannel} method.
         */
        /** @cn
         * @deprecated
         * 110: 从 v2.4.1 起废弃。请改用  [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged}  回调中的 
         * `CONNECTION_CHANGED_INVALID_TOKEN(8)`。
         * 
         * 生成的 Token 无效，一般有以下原因：
         * - 用户在控制台上启用了 App Certificate，但仍旧在代码里仅使用了 App ID。当启用了 App Certificate，必须使用 Token。
         * - 字段 `uid` 为生成 Token 的必须字段，用户在调用  [joinChannel]{@link agora.joinChannel}  加入频道时必须设置相同的 `uid`。
         */
        ERR_INVALID_TOKEN = 110,
        /** @en
         * 111: The internet connection is interrupted. This applies to the Agora Web SDK only.
         */
        /** @cn
         * 111: 网络连接中断。仅适用于 Agora Web SDK。
         */
        ERR_CONNECTION_INTERRUPTED = 111, // only used in web sdk
        /** @en
         * 112: The internet connection is lost. This applies to the Agora Web SDK only.
         */
        /** @cn
         * 112: 网络连接丢失。仅适用于 Agora Web SDK。
         */
        ERR_CONNECTION_LOST = 112, // only used in web sdk
        /** @en
         * 113: The user is not in the channel when calling the method.
         */
        /** @cn
         * 113: 用户不在频道内。
         */
        ERR_NOT_IN_CHANNEL = 113,
        /** @en
         * 114: The size of the sent data is over 1024 bytes when the user calls the
         * [sendStreamMessage]{@link agora.sendStreamMessage} method.
         */
        /** @cn
         * 114: 在调用  [sendStreamMessage]{@link agora.sendStreamMessage}  时，当发送的数据长度大于 1024 个字节时，会发生该错误。
         */
        ERR_SIZE_TOO_LARGE = 114,
        /** @en
         * 115: The bitrate of the sent data exceeds the limit of 6 Kbps when the user calls the
         * [sendStreamMessage]{@link agora.sendStreamMessage} method.
         */
        /** @cn
         * 115: 在调用  [sendStreamMessage]{@link agora.sendStreamMessage}  时，当发送的数据频率超过限制时（6 KB/s），会发生该错误。
         */
        ERR_BITRATE_LIMIT = 115,
        /** @en
         * 116: Too many data streams (over 5 streams) are created when the user calls the
         * [createDataStream]{@link agora.createDataStream} method.
         */
        /** @cn
         * 116: 在调用  [createDataStream]{@link agora.createDataStream}  时，如果创建的数据通道过多（超过 5 个通道），会发生该错误。
         */
        ERR_TOO_MANY_DATA_STREAMS = 116,
        /** @en
         * 117: The data stream transmission timed out.
         */
        /** @cn
         * 117: 数据流发送超时。
         */
        ERR_STREAM_MESSAGE_TIMEOUT = 117,
        /** @en
         * 119: Switching roles fail. Please try to rejoin the channel.
         */
        /** @cn
         * 119: 切换角色失败。请尝试重新加入频道。
         */
        ERR_SET_CLIENT_ROLE_NOT_AUTHORIZED = 119,
        /** @en120: Decryption fails. The user may have used a different encryption password to join the channel. Check your settings
         * or try rejoining the channel.
         */
        /** @cn
         * 120: 解密失败，可能是用户加入频道用了不同的密码。请检查加入频道时的设置，或尝试重新加入频道。
         */
        ERR_DECRYPTION_FAILED = 120,
        /** @en
         * 123: The client is banned by the server.
         */
        /** @cn
         * 123: 此用户被服务器禁止。
         */
        ERR_CLIENT_IS_BANNED_BY_SERVER = 123,
        /** @en
         * 124: Incorrect watermark file parameter.
         */
        /** @cn
         * 124: 水印文件参数错误。
         */
        ERR_WATERMARK_PARAM = 124,
        /** @en
         * 125: Incorrect watermark file path.
         */
        /** @cn
         * 125: 水印文件路径错误。
         */
        ERR_WATERMARK_PATH = 125,
        /** @en
         * 126: Incorrect watermark file format.
         */
        /** @cn
         * 126: 水印文件格式错误。
         */
        ERR_WATERMARK_PNG = 126,
        /** @en
         * 127: Incorrect watermark file information.
         */
        /** @cn
         * 127: 水印文件信息错误。
         */
        ERR_WATERMARKR_INFO = 127,
        /** @en
         * 128: Incorrect watermark file data format.
         */
        /** @cn
         * 128: 水印文件数据格式错误。
         */
        ERR_WATERMARK_ARGB = 128,
        /** @en
         * 129: An error occurs in reading the watermark file.
         */
        /** @cn
         * 129: 水印文件读取错误。
         */
        ERR_WATERMARK_READ = 129,
        /** @en
         * 130: Encryption is enabled when the user calls the [addPublishStreamUrl]{@link agora.addPublishStreamUrl} method
         * (CDN live streaming does not support encrypted streams).
         */
        /** @cn
         * 130: 在调用  [addPublishStreamUrl]{@link agora.addPublishStreamUrl}  时，如果开启了加密，则会返回该错误(推流不支持加密流)。   
         */
        ERR_ENCRYPTED_STREAM_NOT_ALLOWED_PUBLISH = 130,
        /** @en
         * 134: The user account is invalid.
         */
        /** @cn
         * 134: 无效的 User account.
         */
        ERR_INVALID_USER_ACCOUNT = 134,

        /** @en
         * 151: CDN related errors. Remove the original URL address and add a new one by calling the
         * [removePublishStreamUrl]{@link agora.removePublishStreamUrl} and [addPublishStreamUrl]{@link agora.addPublishStreamUrl} methods.
         */
        /** @cn
         * 151: CDN 相关错误。请调用  [removePublishStreamUrl]{@link agora.removePublishStreamUrl}  方法删除原来的推流地址，然后调用  
         * [addPublishStreamUrl]{@link agora.addPublishStreamUrl}  方法重新推流到新地址。
         */
        ERR_PUBLISH_STREAM_CDN_ERROR = 151,
        /** @en
         * 152: The host publishes more than 10 URLs. Delete the unnecessary URLs before adding new ones.
         */
        /** @cn
         * 152: 单个主播的推流地址数目达到上限 10。请删掉一些不用的推流地址再增加推流地址。
         */
        ERR_PUBLISH_STREAM_NUM_REACH_LIMIT = 152,
        /** @en
         * 153: The host manipulates other hosts' URLs. Check your app logic.
         */
        /** @cn
         * 153: 操作不属于主播自己的流，如更新其他主播的流参数、停止其他主播的流。请检查 App 逻辑。
         */
        ERR_PUBLISH_STREAM_NOT_AUTHORIZED = 153,
        /** @en
         * 154: An error occurs in Agora's streaming server. Call the addPublishStreamUrl method to publish the streaming again.
         */
        /** @cn
         * 154: 推流服务器出现错误。请调用  [addPublishStreamUrl]{@link agora.addPublishStreamUrl}  重新推流     */
            ERR_PUBLISH_STREAM_INTERNAL_SERVER_ERROR = 154,
        /** @en
         * 155: The server fails to find the stream.
         */
        /** @cn
         * 155: 服务器无法找到数据流。
         */
        ERR_PUBLISH_STREAM_NOT_FOUND = 155,
        /** @en
         * 156: The format of the RTMP stream URL is not supported. Check whether the URL format is correct.
         */
        /** @cn
         * 156: 推流地址格式有错误。请检查推流地址格式是否正确
         */
        ERR_PUBLISH_STREAM_FORMAT_NOT_SUPPORTED = 156,

        //signaling: 400~600
        /**
         * @ignore
         */
        ERR_LOGOUT_OTHER = 400,  //
        /**
         * @ignore
         */
        ERR_LOGOUT_USER = 401,  // logout by user
        /**
         * @ignore
         */
        ERR_LOGOUT_NET = 402,  // network failure
        /**
         * @ignore
         */
        ERR_LOGOUT_KICKED = 403,  // login in other device
        /**
         * @ignore
         */
        ERR_LOGOUT_PACKET = 404,  //
        /**
         * @ignore
         */
        ERR_LOGOUT_TOKEN_EXPIRED = 405,  // token expired
        /**
         * @ignore
         */
        ERR_LOGOUT_OLDVERSION = 406,  //
        /**
         * @ignore
         */
        ERR_LOGOUT_TOKEN_WRONG = 407,
        /**
         * @ignore
         */
        ERR_LOGOUT_ALREADY_LOGOUT = 408,
        /**
         * @ignore
         */
        ERR_LOGIN_OTHER = 420,
        /**
         * @ignore
         */
        ERR_LOGIN_NET = 421,
        /**
         * @ignore
         */
        ERR_LOGIN_FAILED = 422,
        /**
         * @ignore
         */
        ERR_LOGIN_CANCELED = 423,
        /**
         * @ignore
         */
        ERR_LOGIN_TOKEN_EXPIRED = 424,
        /**
         * @ignore
         */
        ERR_LOGIN_OLD_VERSION = 425,
        /**
         * @ignore
         */
        ERR_LOGIN_TOKEN_WRONG = 426,
        /**
         * @ignore
         */
        ERR_LOGIN_TOKEN_KICKED = 427,
        /**
         * @ignore
         */
        ERR_LOGIN_ALREADY_LOGIN = 428,
        /**
         * @ignore
         */
        ERR_JOIN_CHANNEL_OTHER = 440,
        /**
         * @ignore
         */
        ERR_SEND_MESSAGE_OTHER = 440,
        /**
         * @ignore
         */
        ERR_SEND_MESSAGE_TIMEOUT = 441,
        /**
         * @ignore
         */
        ERR_QUERY_USERNUM_OTHER = 450,
        /**
         * @ignore
         */
        ERR_QUERY_USERNUM_TIMEOUT = 451,
        /**
         * @ignore
         */
        ERR_QUERY_USERNUM_BYUSER = 452,
        /**
         * @ignore
         */
        ERR_LEAVE_CHANNEL_OTHER = 460,
        /**
         * @ignore
         */
        ERR_LEAVE_CHANNEL_KICKED = 461,
        /**
         * @ignore
         */
        ERR_LEAVE_CHANNEL_BYUSER = 462,
        /**
         * @ignore
         */
        ERR_LEAVE_CHANNEL_LOGOUT = 463,
        /**
         * @ignore
         */
        ERR_LEAVE_CHANNEL_DISCONNECTED = 464,
        /**
         * @ignore
         */
        ERR_INVITE_OTHER = 470,
        /**
         * @ignore
         */
        ERR_INVITE_REINVITE = 471,
        /**
         * @ignore
         */
        ERR_INVITE_NET = 472,
        /**
         * @ignore
         */
        ERR_INVITE_PEER_OFFLINE = 473,
        /**
         * @ignore
         */
        ERR_INVITE_TIMEOUT = 474,
        /**
         * @ignore
         */
        ERR_INVITE_CANT_RECV = 475,


        //1001~2000
        /** @en
         * 1001: Fails to load the media engine.
         */
        /** @cn
         * 1001: 加载媒体引擎失败。
         */
        ERR_LOAD_MEDIA_ENGINE = 1001,
        /** @en
         * 1002: Fails to start the call after enabling the media engine.
         */
        /** @cn
         * 1002: 启动媒体引擎开始通话失败。请尝试重新进入频道。
         */
        ERR_START_CALL = 1002,
        /** @en
         * @deprecated 1003: Fails to start the camera.
         * Use `LOCAL_VIDEO_STREAM_ERROR_CAPTURE_FAILURE(4)` in the
         * [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged} callback instead.
         */
        /** @cn
         * @deprecated
         * 1003: 从 v2.4.1 起废弃。请改用  [onLocalVideoStateChanged]{@link AgoraRtcEvents.onLocalVideoStateChanged} 回调中的 
         * `LOCAL_VIDEO_STREAM_ERROR_CAPTURE_FAILURE(4)`。
         * 启动摄像头失败，请检查摄像头是否被其他应用占用，或者尝试重新进入频道。
         */
        ERR_START_CAMERA = 1003,
        /** @en
         * 1004: Fails to start the video rendering module.
         */
        /** @cn
         * 1004: 启动视频渲染模块失败。
         */
        ERR_START_VIDEO_RENDER = 1004,
        /** @en
         * 1005: A general error occurs in the Audio Device Module (no specified reason). Check if the audio device is used by
         * another application, or try rejoining the channel.
         */
        /** @cn
         * 1005: 音频设备模块：音频设备出现错误（未明确指明为何种错误）。请检查音频设备是否被其他应用占用，或者尝试重新进入频道。
         */
        ERR_ADM_GENERAL_ERROR = 1005,
        /** @en
         * 1006: Audio Device Module: An error occurs in using the Java resources.
         */
        /** @cn
         * 1006: 音频设备模块：使用 Java 资源出现错误。
         */
        ERR_ADM_JAVA_RESOURCE = 1006,
        /** @en
         * 1007: Audio Device Module: An error occurs in setting the sampling frequency.
         */
        /** @cn
         * 1007: 音频设备模块：设置的采样频率出现错误。
         */
        ERR_ADM_SAMPLE_RATE = 1007,
        /** @en
         * 1008: Audio Device Module: An error occurs in initializing the playback device.
         */
        /** @cn
         * 1008: 音频设备模块：初始化播放设备出现错误。请检查播放设备是否被其他应用占用，或者尝试重新进入频道。
         */
        ERR_ADM_INIT_PLAYOUT = 1008,
        /** @en
         * 1009: Audio Device Module: An error occurs in starting the playback device.
         */
        /** @cn
         * 1009: 音频设备模块：启动播放设备出现错误。请检查播放设备是否正常，或者尝试重新进入频道。
         */
        ERR_ADM_START_PLAYOUT = 1009,
        /** @en
         * 1010: Audio Device Module: An error occurs in stopping the playback device.
         */
        /** @cn
         * 1010: 音频设备模块：停止播放设备出现错误。
         */
        ERR_ADM_STOP_PLAYOUT = 1010,
        /** @en
         * 1011: Audio Device Module: An error occurs in initializing the recording device.
         */
        /** @cn
         * 1011: 音频设备模块：初始化录音设备时出现错误。请检查录音设备是否正常，或者尝试重新进入频道。
         */
        ERR_ADM_INIT_RECORDING = 1011,
        /** @en
         * 1012: Audio Device Module: An error occurs in starting the recording device.
         */
        /** @cn
         * 1012: 音频设备模块：启动录音设备出现错误。请检查录音设备是否正常，或者尝试重新进入频道。
         */
        ERR_ADM_START_RECORDING = 1012,
        /** @en
         * 1013: Audio Device Module: An error occurs in stopping the recording device.
         */
        /** @cn
         * 1013: 音频设备模块：停止录音设备出现错误。
         */
        ERR_ADM_STOP_RECORDING = 1013,
        /** @en
         * 1015: Audio Device Module: A playback error occurs. Check your playback device and try rejoining the channel.
         */
        /** @cn
         * 1015: 音频设备模块：运行时播放出现错误。请检查播放设备是否正常，或者尝试重新进入频道。
         */
        ERR_ADM_RUNTIME_PLAYOUT_ERROR = 1015,
        /** @en
         * 1017: Audio Device Module: A recording error occurs.
         */
        /** @cn
         * 1017: 音频设备模块：运行时录音错误。请检查录音设备是否正常，或者尝试重新进入频道。
         */
        ERR_ADM_RUNTIME_RECORDING_ERROR = 1017,
        /** @en
         * 1018: Audio Device Module: Fails to record.
         */
        /** @cn
         * 1018: 音频设备模块：录音失败。
         */
        ERR_ADM_RECORD_AUDIO_FAILED = 1018,
        /** @en
         * 1022: Audio Device Module: An error occurs in initializing the
         * loopback device.
         */
        /** @cn
         * 1022: 音频设备模块：初始化 Loopback 设备错误。
        */
        ERR_ADM_INIT_LOOPBACK = 1022,
        /** @en
         * 1023: Audio Device Module: An error occurs in starting the loopback
         * device.
         */
        /** @cn
         * 1023: 音频设备模块：启动 Loopback 设备错误。
        */
        ERR_ADM_START_LOOPBACK = 1023,
        /** @en
         * 1027: Audio Device Module: No recording permission exists. Check if the
         *  recording permission is granted.
         */
        /** @cn
         * 1027: 音频设备模块：没有录音权限。请检查是否已经打开权限允许录音。
         */
        ERR_ADM_NO_PERMISSION = 1027,
        /** @en
         * 1033: Audio device module: The device is occupied.
         */
        /** @cn
         * 1033: 音频设备模块：录制设备被占用。
         */
        ERR_ADM_RECORD_AUDIO_IS_ACTIVE = 1033,
        /** @en
         * 1101: Audio device module: A fatal exception occurs.
         */
        /** @cn
         * 1101: 音频设备模块：严重异常。
         */
        ERR_ADM_ANDROID_JNI_JAVA_RESOURCE = 1101,
        /** @en
         * 1108: Audio device module: The recording frequency is lower than 50.
         * 0 indicates that the recording is not yet started. We recommend
         * checking your recording permission.
         */
        /** @cn
         * 1108: 音频设备模块：录制频率低于 50，常见为 0，即采集未启动，建议检查录音权限。
         */
        ERR_ADM_ANDROID_JNI_NO_RECORD_FREQUENCY = 1108,
        /** @en
         * 1109: The playback frequency is lower than 50. 0 indicates that the
         * playback is not yet started. We recommend checking if you have created
         * too many AudioTrack instances.
         */
        /** @cn
         * 1109: 音频设备模块：播放频率低于 50，常见为 0，即播放未启动，建议检查是否 AudioTrack 实例过多。
         */
        ERR_ADM_ANDROID_JNI_NO_PLAYBACK_FREQUENCY = 1109,
        /** @en
         * 1111: Audio device module: AudioRecord fails to start up. A ROM system
         * error occurs. We recommend the following options to debug:
         * - Restart your App.
         * - Restart your cellphone.
         * - Check your recording permission.
         */
        /** @cn
         * 1111: 音频设备模块：AudioRecord 启动失败，系统 ROM 报错，建议重启 App 或重启手机、检查录音权限。
         */
        ERR_ADM_ANDROID_JNI_JAVA_START_RECORD = 1111,
        /** @en
         * 1112: Audio device module: AudioTrack fails to start up. A ROM system
         * error occurs. We recommend the following options to debug:
         * - Restart your App.
         * - Restart your cellphone.
         * - Check your playback permission.
         */
        /** @cn
         * 1112: 音频设备模块：AudioTrack 启动失败，系统 ROM 报错，建议重启 App 或重启手机、检查播放权限。
         */
        ERR_ADM_ANDROID_JNI_JAVA_START_PLAYBACK = 1112,
        /** @en
         * 1115: Audio device module: AudioRecord returns error. The SDK will
         * automatically restart AudioRecord.
         */
        /** @cn
         * 1115: 音频设备模块：AudioRecord 数据返回错误、SDK 会自动处理、重启 AudioRecord。
         */
        ERR_ADM_ANDROID_JNI_JAVA_RECORD_ERROR = 1115,
        /** @deprecated */
        ERR_ADM_ANDROID_OPENSL_CREATE_ENGINE = 1151,
        /** @deprecated */
        ERR_ADM_ANDROID_OPENSL_CREATE_AUDIO_RECORDER = 1153,
        /** @deprecated */
        ERR_ADM_ANDROID_OPENSL_START_RECORDER_THREAD = 1156,
        /** @deprecated */
        ERR_ADM_ANDROID_OPENSL_CREATE_AUDIO_PLAYER = 1157,
        /** @deprecated */
        ERR_ADM_ANDROID_OPENSL_START_PLAYER_THREAD = 1160,
        /** @en
         * 1201: Audio device module: The current device does not support audio
         * input, possibly because you have mistakenly configured the audio session
         *  category, or because some other app is occupying the input device. We
         * recommend terminating all background apps and re-joining the channel.
         */
        /** @cn
         * 1201: 音频设备模块：当前设备不支持音频输入，可能的原因是 Audio Session 的 category 
         * 配置不对或音频输入设备被占用。建议把后台所有 App 杀掉，重新加入频道。
         */
        ERR_ADM_IOS_INPUT_NOT_AVAILABLE = 1201,
        /** @en
         * 1206: Audio device module: Cannot activate the Audio Session.
         */
        /** @cn
         * 1206: 音频设备模块：Audio Session 无法被启动。
         */
        ERR_ADM_IOS_ACTIVATE_SESSION_FAIL = 1206,
        /** @en
         * 1210: Audio device module: Fails to initialize the audio device,
         * normally because the audio device parameters are wrongly set.
         */
        /** @cn
         * 1210: 音频设备模块：初始化音频设备出错。一般出错是因为音频设备的设置参数错误。
         */
        ERR_ADM_IOS_VPIO_INIT_FAIL = 1210,
        /** @en
         * 1213: Audio device module: Fails to re-initialize the audio device,
         * normally because the audio device parameters are wrongly set.
         */
        /** @cn
         * 1213: 音频设备模块：重新初始化音频设备出错。一般出错是因为音频设备的设置参数错误。
         */
        ERR_ADM_IOS_VPIO_REINIT_FAIL = 1213,
        /** @en
         * 1214: Fails to re-start up the Audio Unit, possibly because the audio session category is not compatible 
         * with the settings of the Audio Unit.
         */
        /** @cn
         * 1214: 音频设备模块：重新启动 Audio Unit 出错。一般出错是因为 Audio Session 的 category 设置与 Audio Unit 的设置不兼容。
         */
        ERR_ADM_IOS_VPIO_RESTART_FAIL = 1214,
        /** @ignore */
        ERR_ADM_IOS_SET_RENDER_CALLBACK_FAIL = 1219,
        /** @deprecated */
        ERR_ADM_IOS_SESSION_SAMPLERATR_ZERO = 1221,
        /** @en
         * 1301: Audio device module: An audio driver abnomality or a
         * compatibility issue occurs. Solutions: Disable and restart the audio
         * device, or reboot the system
         */
        /** @cn
         * 1301: 音频设备模块：音频驱动异常或者兼容性问题 解决方案：禁用并重新启用音频设备，或者重启机器。
         */
        ERR_ADM_WIN_CORE_INIT = 1301,
        /** @en
         * 1303: Audio device module: A recording driver abnomality or a
         * compatibility issue occurs. Solutions: Disable and restart the audio
         * device, or reboot the system.
         */
        /** @cn
         * 1303: 音频设备模块：音频驱动异常或者兼容性问题 解决方案：禁用并重新启用音频设备，或者重启机器。
         */
        ERR_ADM_WIN_CORE_INIT_RECORDING = 1303,
        /** @en
         * 1306: Audio device module: A playout driver abnomality or a
         * compatibility issue occurs. Solutions: Disable and restart the audio
         * device, or reboot the system.
         */
        /** @cn
         * 1306: 音频设备模块：音频驱动异常或者兼容性问题 解决方案：禁用并重新启用音频设备，或者重启机器。
         */
        ERR_ADM_WIN_CORE_INIT_PLAYOUT = 1306,
        /** @en
         * 1307: Audio device module: No audio device is available. Solutions:
         * Plug in a proper audio device.
         */
        /** @cn
         * 1307: 音频设备模块：无可用音频设备 解决方案：插入音频设备。
         */
        ERR_ADM_WIN_CORE_INIT_PLAYOUT_NULL = 1307,
        /** @en
         * 1309: Audio device module: An audio driver abnomality or a
         * compatibility issue occurs. Solutions: Disable and restart the audio
         * device, or reboot the system.
         */
        /** @cn
         * 1309: 音频设备模块：音频驱动异常或者兼容性问题 解决方案：禁用并重新启用音频设备，或者重启机器。
         */
        ERR_ADM_WIN_CORE_START_RECORDING = 1309,
        /** @en
         * 1311: Audio device module: Insufficient system memory or poor device
         * performance. Solutions: Reboot the system or replace the device.
         */
        /** @cn
         * 1311: 音频设备模块：系统内存不足或者机器性能较差 解决方案：重启机器或者更换机器。
         */
        ERR_ADM_WIN_CORE_CREATE_REC_THREAD = 1311,
        /** @en
         * 1314: Audio device module: An audio driver abnormality occurs.
         * Solutions:
         * - Disable and then re-enable the audio device.
         * - Reboot the system.
         * - Upgrade your audio card driver.*/
        /** @cn
         * 1314: 音频设备模块：音频驱动异常 解决方案：禁用并重新启用音频设备，或者重启机器，或者更新声卡驱动。
         */
        ERR_ADM_WIN_CORE_CAPTURE_NOT_STARTUP = 1314,
        /** @en
         * 1319: Audio device module: Insufficient system memory or poor device
         * performance. Solutions: Reboot the system or replace the device. */
        /** @cn
         * 1319: 音频设备模块：系统内存不足或者机器性能较差 解决方案：重启机器或者更换机器。
         */
        ERR_ADM_WIN_CORE_CREATE_RENDER_THREAD = 1319,
        /** @en
         * 1320: Audio device module: An audio driver abnormality occurs.
         * Solutions:
         * - Disable and then re-enable the audio device.
         * - Reboot the system.
         * - Replace the device.
         */
        /** @cn
         * 1320: 音频设备模块：音频驱动异常 解决方案：禁用并重新启用音频设备，或者重启机器，或者更新声卡驱动。
         */
        ERR_ADM_WIN_CORE_RENDER_NOT_STARTUP = 1320,
        /** @en
         * 1322: Audio device module: No audio sampling device is available.
         * Solutions: Plug in a proper recording device.
         */
        /** @cn
         * 1322: 音频设备模块：无可用音频采集设备。解决方案：插入音频设备。
         */
        ERR_ADM_WIN_CORE_NO_RECORDING_DEVICE = 1322,
        /** @en
         * 1323: Audio device module: No audio playout device is available.
         * Solutions: Plug in a proper playback device.
         */
        /** @cn
         * 1323: 音频设备模块：无可用音频播放设备。解决方案：插入音频设备。
         */
        ERR_ADM_WIN_CORE_NO_PLAYOUT_DEVICE = 1323,
        /** @en
         * 1351: Audio device module: An audio driver abnormality or a
         * compatibility issue occurs. Solutions:
         * - Disable and then re-enable the audio device.
         * - Reboot the system.
         * - Upgrade your audio card driver.
         */
        /** @cn
         * 1351: 音频设备模块：音频驱动异常或者兼容性问题 解决方案：禁用并重新启用音频设备，或者重启机器，或者更新声卡驱动。
         */
        ERR_ADM_WIN_WAVE_INIT = 1351,
        /** @en
         * 1353: Audio device module: An audio driver abnormality occurs.
         * Solutions:
         * - Disable and then re-enable the audio device.
         * - Reboot the system.
         * - Upgrade your audio card driver.
         */
        /** @cn
         * 1353: 音频设备模块：音频驱动异常 解决方案：禁用并重新启用音频设备，或者重启机器，或者更新声卡驱动。
         */
        ERR_ADM_WIN_WAVE_INIT_RECORDING = 1353,
        /** @en
         * 1354: Audio device module: An audio driver abnormality occurs.
         * Solutions:
         * - Disable and then re-enable the audio device.
         * - Reboot the system.
         * - Upgrade your audio card driver.
         */
        /** @cn
         * 1354: 音频设备模块：音频驱动异常 解决方案：禁用并重新启用音频设备，或者重启机器，或者更新声卡驱动。
         */
        ERR_ADM_WIN_WAVE_INIT_MICROPHONE = 1354,
        /** @en
         * 1355: Audio device module: An audio driver abnormality occurs.
         * Solutions:
         * - Disable and then re-enable the audio device.
         * - Reboot the system.
         * - Upgrade your audio card driver. */
        /** @cn
         * 1355: 音频设备模块：音频驱动异常 解决方案：禁用并重新启用音频设备，或者重启机器，或者更新声卡驱动。
         */
        ERR_ADM_WIN_WAVE_INIT_PLAYOUT = 1355,
        /** @en
         * 1356: Audio device module: An audio driver abnormality occurs.
         * Solutions:
         * - Disable and then re-enable the audio device.
         * - Reboot the system.
         * - Upgrade your audio card driver.
         */
        /** @cn
         * 1356: 音频设备模块：音频驱动异常 解决方案：禁用并重新启用音频设备，或者重启机器，或者更新声卡驱动。
         */
        ERR_ADM_WIN_WAVE_INIT_SPEAKER = 1356,
        /** @en
         * 1357: Audio device module: An audio driver abnormality occurs.
         * Solutions:
         * - Disable and then re-enable the audio device.
         * - Reboot the system.
         * - Upgrade your audio card driver. */
        /** @cn
         * 1357: 音频设备模块：音频驱动异常 解决方案：禁用并重新启用音频设备，或者重启机器，或者更新声卡驱动。
         */
        ERR_ADM_WIN_WAVE_START_RECORDING = 1357,
        /** @en
         * 1358: Audio device module: An audio driver abnormality occurs.
         * Solutions:
         * - Disable and then re-enable the audio device.
         * - Reboot the system.
         * - Upgrade your audio card driver.*/
        /** @cn
         * 1358: 音频设备模块：音频驱动异常 解决方案：禁用并重新启用音频设备，或者重启机器，或者更新声卡驱动。
         */
        ERR_ADM_WIN_WAVE_START_PLAYOUT = 1358,
        /** @en
         * 1359: Audio Device Module: No recording device exists.
         */
        /** @cn
         * 1359: 音频设备模块：无录制设备。请检查是否有可用的录放音设备或者录放音设备是否已经被其他应用占用。
         */
        ERR_ADM_NO_RECORDING_DEVICE = 1359,
        /** @en
         * 1360: Audio Device Module: No playback device exists.
         */
        /** @cn
         * 1360: 音频设备模块：无播放设备。
         */
        ERR_ADM_NO_PLAYOUT_DEVICE = 1360,

        // VDM error code starts from 1500
        /** @en
         * 1501: Video Device Module: The camera is unauthorized.
         */
        /** @cn
         * 1501: 视频设备模块：没有摄像头使用权限。请检查是否已经打开摄像头权限。
         */
        ERR_VDM_CAMERA_NOT_AUTHORIZED = 1501,

        // VDM error code starts from 1500
        /** @en
         * @deprecated 1502: Video Device Module: The camera in use.
         *
         * Use `LOCAL_VIDEO_STREAM_ERROR_DEVICE_BUSY(3)` in the
         * [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged} callback instead.
         */
        /** @cn
         * @deprecated 1502: 视频设备模块：摄像头正在使用中。
         * 从 v2.4.1 起废弃。请改用  [onLocalVideoStateChanged]{@link AgoraRtcEvents.onLocalVideoStateChanged}  回调中的 
         * `LOCAL_VIDEO_STREAM_ERROR_DEVICE_BUSY(3)`。
         */
        ERR_VDM_WIN_DEVICE_IN_USE = 1502,

        // VCM error code starts from 1600
        /** @en
         * 1600: Video Device Module: An unknown error occurs.
         */
        /** @cn
         * 1600: 视频设备模块：未知错误。
         */
        ERR_VCM_UNKNOWN_ERROR = 1600,
        /** @en
         * 1601: Video Device Module: An error occurs in initializing the video encoder.
         */
        /** @cn
         * 1601: 视频设备模块：视频编码器初始化错误。该错误为严重错误，请尝试重新加入频道。
         */
        ERR_VCM_ENCODER_INIT_ERROR = 1601,
        /** @en
         * 1602: Video Device Module: An error occurs in encoding.
         */
        /** @cn
         * 1602: 视频设备模块：视频编码器错误。该错误为严重错误，请尝试重新加入频道。
         */
        ERR_VCM_ENCODER_ENCODE_ERROR = 1602,
        /** @en
         * 1603: Video Device Module: An error occurs in setting the video encoder.
         */
        /** @cn
         * 1603: 视频设备模块：视频编码器设置错误。
         */
        ERR_VCM_ENCODER_SET_ERROR = 1603,
    }

    /** @en
     * The contrast level, used with the `lightening` parameter.
     */
    /** @cn
     * 亮度明暗对比度。
     */
    export enum LIGHTENING_CONTRAST_LEVEL {
        /** @en
         * Low contrast level.
         */
        /** @cn
         * 低对比度。
         */
        LIGHTENING_CONTRAST_LOW = 0,
        /** @en
         * (Default) Normal contrast level.
         */
        /** @cn
         * 正常对比度。
         */
        LIGHTENING_CONTRAST_NORMAL,
        /** @en
         * High contrast level.
         */
        /** @cn
         * 高对比度。
         */
        LIGHTENING_CONTRAST_HIGH
    }

    /** @en
     * Output log filter level.
     */
    /** @cn
     * 日志过滤分级
     */
    export enum LOG_FILTER_TYPE {
        /** @en
         * 0: Do not output any log information.
         */
        /** @cn
         * 0: 不输出日志信息。
         */
        LOG_FILTER_OFF = 0,
        /** @en
         * 0x080f: Output all log information.
         * Set your log filter as debug if you want to get the most complete log file.
         */
        /** @cn
         * 0x080f: 输出所有 API 日志信息。
         * 如果你想获取最完整的日志，可以将日志级别设为该等级。
         */
        LOG_FILTER_DEBUG = 0x080f,
        /** @en
         * 0x000f: Output CRITICAL, ERROR, WARNING, and INFO level log information.
         * We recommend setting your log filter as this level.
         */
        /** @cn
         * 0x000f: 输出 CRITICAL、ERROR、WARNING 和 INFO 级别的日志信息。
         * 我们推荐你将日志级别设为该等级。
         */
        LOG_FILTER_INFO = 0x000f,
        /** @en
         * 0x000e: Outputs CRITICAL, ERROR, and WARNING level log information.
         */
        /** @cn
         * 0x000e: 输出 CRITICAL、ERROR 和 WARNING 级别的日志信息。
         */
        LOG_FILTER_WARN = 0x000e,
        /** @en
         * 0x000c: Outputs CRITICAL and ERROR level log information.
         */
        /** @cn
         * 0x000c: 输出 CRITICAL 和 ERROR 级别的日志信息。
         */
        LOG_FILTER_ERROR = 0x000c,
        /** @en
         * 0x0008: Outputs CRITICAL level log information.
         */
        /** @cn
         * 0x0008: 输出 CRITICAL 级别的日志信息。
         */
        LOG_FILTER_CRITICAL = 0x0008,
        /** @ignore */
        LOG_FILTER_MASK = 0x80f,
    }

    /** @en
     * @ignore
     * Metadata type of the observer.
     * @note We only support video metadata for now.
     */

    /** @cn
     * @ignore
     * 观测器的 Metadata 类型。当前仅支持视频类型的 Metadata 。
     */
    export enum METADATA_TYPE {
        /** @en
         * -1: the metadata type is unknown.
         */
        /** @cn
         * Metadata 类型未知
         */
        UNKNOWN_METADATA = -1,
        /** @en
         * 0: the metadata type is video.
         */
        /** @cn
         * Metadata 类型为视频
         */
        VIDEO_METADATA = 0,
    }

    /** @en
     * @ignore
     * The video pixel format.
     */
    /** @cn
     * @ignore
     * 视频像素格式
     */
    export enum VIDEO_PIXEL_FORMAT {
        /** @en
         * 0: The video pixel format is unknown.
         */
        /** @cn
         * 0: 格式未知
         */
        VIDEO_PIXEL_UNKNOWN = 0,
        /** @en
         * 1: The video pixel format is I420.
         */
        /** @cn
         * 1: I420 格式
         */
        VIDEO_PIXEL_I420 = 1,
        /** @en
         * 2: The video pixel format is BGRA.
         */
        /** @cn
         * 2: BGRA 格式
         */
        VIDEO_PIXEL_BGRA = 2,
        /** @en
         * 3: The video pixel format is NV21.
         */
        /** @cn
         * 3: NV21 格式
         */
        VIDEO_PIXEL_NV21 = 3,
        /** @en
         * 4: The video pixel format is RGBA.
         */
        /** @cn
         * 4: RGBA 格式
         */
        VIDEO_PIXEL_RGBA = 4,
        /** @en
         * 5: The video pixel format is IMC2.
         */
        /** @cn
         * 5: IMC2 格式
         */
        VIDEO_PIXEL_IMC2 = 5,
        /** @en
         * 7: The video pixel format is ARGB.
         */
        /** @cn
         * 7: ARGB 格式
         */
        VIDEO_PIXEL_ARGB = 7,
        /** @en
         * 8: The video pixel format is NV12.
         */
        /** @cn
         * 8: NV12 格式
         */
        VIDEO_PIXEL_NV12 = 8,
        /** @en
         * 16: The video pixel format is I422.
         */
        /** @cn
         * 16: I422 格式
         */
        VIDEO_PIXEL_I422 = 16,
    }

    /** @en
     * Warning code.
     */
    /** @cn
     * 警告代码
     * 警告代码意味着 SDK 遇到问题，但有可能恢复，警告代码仅起告知作用，一般情况下应用程序可以忽略警告代码。
     */
    export enum WARN_CODE_TYPE {
        /** @en
         * 8: The specified view is invalid. Specify a view when using the video call function.
         */
        /** @cn
         * 8: 指定的 view 无效，使用视频功能时需要指定 view，如果 view 尚未指定，则返回该警告。
         */
        WARN_INVALID_VIEW = 8,
        /** @en
         * 16: Failed to initialize the video function, possibly caused by a lack of resources. The users cannot see the video
         * while the voice communication is not affected.
         */
        /** @cn
         * 16: 初始化视频功能失败。有可能是因视频资源被占用导致的。用户无法看到视频画面，但不影响语音通信。
         */
        WARN_INIT_VIDEO = 16,
        /** @en
         * 20: The request is pending, usually due to some module not being ready, and the SDK postponed processing the request.
         */
        /** @cn
         * 20: 请求处于待定状态。一般是由于某个模块还没准备好，请求被延迟处理。
         */
        WARN_PENDING = 20,
        /** @en
         * 103: No channel resources are available. Maybe because the server cannot allocate any channel resource.
         */
        /** @cn
         * 103: 没有可用的频道资源。可能是因为服务端没法分配频道资源。
         */
        WARN_NO_AVAILABLE_CHANNEL = 103,
        /** @en
         * 104: A timeout occurs when looking up the channel. When joining a channel, the SDK looks up the specified channel. This
         * warning usually occurs when the network condition is too poor for the SDK to connect to the server.
         */
        /** @cn
         * 104: 查找频道超时。在加入频道时 SDK 先要查找指定的频道，出现该警告一般是因为网络太差，连接不到服务器。
         */
        WARN_LOOKUP_CHANNEL_TIMEOUT = 104,
        /** @en
         * @deprecated 105: The server rejects the request to look up the channel. The server cannot process this request or the
         * request is illegal.
         *
         * Use CONNECTION_CHANGED_REJECTED_BY_SERVER(10) in the [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged}
         * callback instead.
         */
        /** @cn
         * @deprecated
         * 105: 查找频道请求被服务器拒绝。服务器可能没有办法处理这个请求或请求是非法的。从 v2.4.1 起废弃。请改用  
         * [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged}  回调中的 CONNECTION_CHANGED_REJECTED_BY_SERVER(10)。
         */
        WARN_LOOKUP_CHANNEL_REJECTED = 105,
        /** @en
         * 106: A timeout occurs when opening the channel. Once the specific channel is found, the SDK opens the channel.
         * This warning usually occurs when the network condition is too poor for the SDK to connect to the server.
         */
        /** @cn
         * 106: 打开频道超时。查找到指定频道后，SDK 接着打开该频道，超时一般是因为网络太差，连接不到服务器。
         */
        WARN_OPEN_CHANNEL_TIMEOUT = 106,
        /** @en
         * 107: The server rejects the request to open the channel. The server cannot process this request or the request is illegal.
         */
        /** @cn
         * 107: 打开频道请求被服务器拒绝。服务器可能没有办法处理该请求或该请求是非法的。
         */
        WARN_OPEN_CHANNEL_REJECTED = 107,

        // sdk: 100~1000
        /** @en
         * 111: A timeout occurs when switching to the live video.
         */
        /** @cn
         * 111: 切换直播视频超时。
         */
        WARN_SWITCH_LIVE_VIDEO_TIMEOUT = 111,
        /** @en
         * 118: A timeout occurs when setting the client role in the live interactive streaming profile.
         */
        /** @cn
         * 118: 直播场景下设置用户角色超时。
         */
        WARN_SET_CLIENT_ROLE_TIMEOUT = 118,
        /** @en
         * 121: The ticket to open the channel is invalid.
         */
        /** @cn
         * 121: TICKET 非法，打开频道失败。
         */
        WARN_OPEN_CHANNEL_INVALID_TICKET = 121,
        /** @en
         * 122: Try connecting to another server.
         */
        /** @cn
         * 122: 尝试打开另一个服务器。
         */
        WARN_OPEN_CHANNEL_TRY_NEXT_VOS = 122,
        /** @en
         * 131: The channel connection cannot be recovered.
         */
        /** @cn
         * 131: 频道连接不可恢复。
         */
        WARN_CHANNEL_CONNECTION_UNRECOVERABLE = 131,
        /** @en
         * 132: The IP address has changed.
         */
        /** @cn
         * 132: IP 已改变。
         */
        WARN_CHANNEL_CONNECTION_IP_CHANGED = 132,
        /** @en
         * 133: The port has changed.
         */
        /** @cn
         * 133: 端口已改变。
         */
        WARN_CHANNEL_CONNECTION_PORT_CHANGED = 133,
        /** @en
         * 701: An error occurs in opening the audio mixing file.
         */
        /** @cn
         * 701: 打开伴奏出错。
         */
        WARN_AUDIO_MIXING_OPEN_ERROR = 701,
        /** @en
         * 1014: Audio Device Module: A warning occurs in the playback device.
         */
        /** @cn
         * 1014: 音频设备模块：运行时播放设备出现警告。
         */
        WARN_ADM_RUNTIME_PLAYOUT_WARNING = 1014,
        /** @en
         * 1016: Audio Device Module: a warning occurs in the recording device.
         */
        /** @cn
         * 1016: 音频设备模块：运行时录音设备出现警告。
         */
        WARN_ADM_RUNTIME_RECORDING_WARNING = 1016,
        /** @en
         * 1019: Audio Device Module: no valid audio data is recorded.
         */
        /** @cn
         * 1019: 音频设备模块：没有采集到有效的声音数据。
         */
        WARN_ADM_RECORD_AUDIO_SILENCE = 1019,
        /** @en
         * 1020: Audio device module: The audio playback frequency is abnormal, which may cause audio freezes. This abnormality
         * is caused by high CPU usage. Agora recommends stopping other apps.
         */
        /** @cn
         * 1020: 音频设备模块：播放频率异常，可能造成音频卡顿。该异常原因为系统 CPU 占用率高，建议结束其他可能占用 CPU 的 app。
         */
        WARN_ADM_PLAYOUT_MALFUNCTION = 1020,
        /** @en
         * 1021: Audio device module: the audio recording frequency is abnormal, which may cause audio freezes. This abnormality
         * is caused by high CPU usage. Agora recommends stopping other apps.
         */
         /** @cn
          * 1021: 音频设备模块：录制频率异常，可能造成音频卡顿。该异常原因为系统 CPU 占用率高，建议结束其他可能占用 CPU 的 app。
         */
        WARN_ADM_RECORD_MALFUNCTION = 1021,
        /** @en
         * 1025: The audio playback or recording is interrupted by system events (such as a phone call).
         */
        /** @cn
         * 1025: 播放或录制音频时被系统事件（如来电）干扰。
        */
        WARN_ADM_CALL_INTERRUPTION = 1025,
        /** @en
         * 1029: During a call, the audio session category should be set to
         * AVAudioSessionCategoryPlayAndRecord, and agora monitors this value.
         * If the audio session category is set to other values, this warning code
         * is triggered and agora will forcefully set it back to
         * AVAudioSessionCategoryPlayAndRecord.
         */
        /** @cn
         * 1029：在通话过程中，Audio Session 的 category 必须设置成 AVAudioSessionCategoryPlayAndRecord，agora 会监控这个属性值。
         * 当这个值被修改成其他值的时候会触发这个告警，并强制设置回 AVAudioSessionCategoryPlayAndRecord。
         */
        WARN_ADM_IOS_CATEGORY_NOT_PLAYANDRECORD = 1029,
        /** @en
         * 1031: Audio Device Module: The recorded audio voice is too low.
         */
        /** @cn
         * 1031: 音频设备模块：录到的声音太低。
         */
        WARN_ADM_RECORD_AUDIO_LOWLEVEL = 1031,
        /** @en
         * 1032: Audio Device Module: The playback audio voice is too low.
         */
        /** @cn
         * 1032: 音频设备模块：播放的声音太低。
         */
        WARN_ADM_PLAYOUT_AUDIO_LOWLEVEL = 1032,
        /** @en
         * 1033: Audio device module: The audio recording device is occupied.
         */
        /** @cn
         * 1033: 音频设备模块：录制设备被占用。
         */
        WARN_ADM_RECORD_AUDIO_IS_ACTIVE = 1033,
        /** @en
         * 1040: Audio device module: An exception occurs with the audio drive.
         * Solutions:
         * - Disable or re-enable the audio device.
         * - Re-enable your device.
         * - Update the sound card drive.
         */
        /** @cn
         * 1040: 音频设备模块：音频驱动异常。解决方案：禁用并重新启用音频设备，或者重启机器，或者更新声卡驱动
         */
        WARN_ADM_WINDOWS_NO_DATA_READY_EVENT = 1040,
        /** @en
         * 1042: Audio device module: The audio recording device is different from the audio playback device,
         * which may cause echoes problem. Agora recommends using the same audio device to record and playback
         * audio.
         */
        /** @cn
         * 1042: 音频采集设备和播放设备不一致，可能引起回声，建议使用同一设备采集和播放音频。
         */
        WARN_ADM_INCONSISTENT_AUDIO_DEVICE = 1042,
        /** @en
         * 1051: (Communication profile only) Audio processing module: A howling sound is detected when recording the audio data.
         */
        /** @cn
         * 1051: （仅通信场景）音频信号处理模块：录制音频时监测到啸叫。
         */
        WARN_APM_HOWLING = 1051,
        /** @en
         * 1052: Audio Device Module: The device is in the glitch state.
         */
        /** @cn
         * 1052: 音频设备模块：音频播放会卡顿。
         */
        WARN_ADM_GLITCH_STATE = 1052,
        /** @en
         * 1053: Audio Processing Module: A residual echo is detected, which may be caused by the belated scheduling of system threads
         * or the signal overflow.
         */
        /** @cn
         * 1053: 音频信号处理模块：检测到残余回声，该回声可能由系统线程调度不及时或信号溢出导致。
         */
        WARN_APM_RESIDUAL_ECHO = 1053,
        /** @ignore */
        WARN_ADM_WIN_CORE_NO_RECORDING_DEVICE = 1322,
        /** @en
         * 1323: Audio device module: No available playback device.
         * Solution: Plug in the audio device.
         */
        /** @cn
         * 1323: 音频设备模块：无可用音频播放设备。解决方案：插入音频设备
         */
        WARN_ADM_WIN_CORE_NO_PLAYOUT_DEVICE = 1323,
        /** @en
         * Audio device module: The capture device is released improperly.
         * Solutions:
         * - Disable or re-enable the audio device.
         * - Re-enable your device.
         * - Update the sound card drive.
         */
        /** @cn
         * 1324: 音频设备模块：音频采集释放有误。解决方案：禁用并重新启用音频设备，或者重启机器，或者更新声卡驱动。
         */
        WARN_ADM_WIN_CORE_IMPROPER_CAPTURE_RELEASE = 1324,
        /** @en
         * 1610: Super-resolution warning: The original video dimensions of the remote user exceed 640 * 480.
         */
        /** @cn
         * 1610: 超分告警：远端用户的原始视频流的分辨率超出了可以应用超分辨率算法的要求。
         */
        WARN_SUPER_RESOLUTION_STREAM_OVER_LIMITATION = 1610,
        /** @en
         * 1611: Super-resolution warning: Another user is using super resolution.
         */
        /** @cn
         * 1611: 超分告警：已指定一个远端用户使用超分辨率算法。
         */
        WARN_SUPER_RESOLUTION_USER_COUNT_OVER_LIMITATION = 1611,
        /** @en
         * 1612: The device is not supported.
         */
        /** @cn
         * 1612: 超分告警：当前设备不支持超分算法。
         */
        WARN_SUPER_RESOLUTION_DEVICE_NOT_SUPPORTED = 1612,
        /** @ignore */
        WARN_RTM_LOGIN_TIMEOUT = 2005,
        /** @ignore */
        WARN_RTM_KEEP_ALIVE_TIMEOUT = 2009
    }
}

namespace agora {
    /** @en
     * The uplink or downlink last-mile network probe test result.
     */
    /** @cn
     * 上行或下行 Last mile 网络质量探测结果。
     */
    export interface LastmileProbeOneWayResult {
        /** @en
         * The packet loss rate (%).
         */
        /** @cn
         * 丢包率。
         */
        packetLossRate: number
        /** @en
         * The network jitter (ms).
         */
        /** @cn
         * 网络抖动 (ms)。
         */
        jitter: number
        /** @en
         * The estimated available bandwidth (bps).
         */
        /** @cn
         * 可用网络带宽预估 (bps)。
         */
        availableBandwidth: number
    }

    /** @en
     * The uplink and downlink last-mile network probe test result.
     */
    /** @cn
     * 上行或下行 Last mile 网络质量探测结果。
     */
    export interface LastmileProbeResult {
        /** @en
         * The state of the probe test. See [LASTMILE_PROBE_RESULT_STATE]{@link agora.LASTMILE_PROBE_RESULT_STATE}.
         */
        /** @cn
         * Last mile 质量探测结果的状态。详见: [LASTMILE_PROBE_RESULT_STATE]{@link agora.LASTMILE_PROBE_RESULT_STATE}。
         */
        state: LASTMILE_PROBE_RESULT_STATE
        /** @en
         * The uplink last-mile network probe test result. See [LastmileProbeOneWayResult]{@link agora.LastmileProbeOneWayResult}.
         */
        /** @cn
         * 上行网络质量报告。详见: [LastmileProbeOneWayResult]{@link agora.LastmileProbeOneWayResult}。
         */
        uplinkReport: LastmileProbeOneWayResult
        /** @en
         * The downlink last-mile network probe test result. See [LastmileProbeOneWayResult]{@link agora.LastmileProbeOneWayResult}.
         */
        /** @cn
         * 下行网络质量报告。详见: [LastmileProbeOneWayResult]{@link agora.LastmileProbeOneWayResult}。
         */
        downlinkReport: LastmileProbeOneWayResult
        /** @en
         * The round-trip delay time (ms).
         */
        /** @cn
         * 往返时延 (ms)。
         */
        rtt: number
    }

    /** @en
     * Configurations of the last-mile network probe test.
     */
    /** @cn
     * Last mile 网络探测配置。
     */
    export interface LastmileProbeConfig {
        /** @en
         * Sets whether or not to test the uplink network. Some users, for example, the audience in a `LIVE_BROADCASTING` channel,
         * do not need such a test:
         * - true: test.
         * - false: do not test.
         */
        /** @cn
         * 是否探测上行网络。有些用户，如直播频道中的普通观众，不需要进行网络探测:
         * - true: 探测。
         * - false: 不探测。
         */
        probeUplink: boolean
        /** @en
         * Sets whether or not to test the downlink network:
         * - true: test.
         * - false: do not test.
         */
        /** @cn
         * 是否探测下行网络。
         * - true: 探测。
         * - false: 不探测。
         */
        probeDownlink: boolean
        /** @en
         * The expected maximum sending bitrate (bps) of the local user. The value ranges between 100000 and 5000000.
         */
        /** @cn
         * 用户期望的最高发送码率，单位为 bps，范围为 [100000, 5000000]。Agora 推荐参考  
         * [setVideoEncoderConfiguration]{@link agora.setVideoEncoderConfiguration}  中的码率值设置该参数的值。
         */
        expectedUplinkBitrate: number
        /** @en
         * The expected maximum receiving bitrate (bps) of the local user. The value ranges between 100000 and 5000000.
         */
        /** @cn
         * 用户期望的最高接收码率，单位为 bps，范围为 [100000, 5000000]。
         */
        expectedDownlinkBitrate: number
    }

    /** @en
     * Properties of the audio volume information.
     *
     * An array containing the user ID and volume information for each speaker.
     */
    /** @cn
     * 以数组的形式返回每个说话者的用户 ID 和音量信息。
     */
    export interface AudioVolumeInfo {
        /** @en
         * The user ID.
         * - In the local user's callback, `uid` = 0.
         * - In the remote users' callback, `uid` is the ID of a remote user whose instantaneous volume is one of the three highest.
         */
        /** @cn
         * 用户 ID。
         * - 在本地用户的回调中，`uid` 为 `0`。
         * - 在远端用户的回调中，`uid` 为瞬时音量最高的远端用户（最多 3 位）的 ID。
         */
        uid: number
        /** @en
         * The volume of each user after audio mixing. The value ranges between 0 (lowest volume) and 255 (highest volume). 
         * In the local user's callback, `volume` = `totalVolume`.
         */
        /** @cn
         * 用户的音量，取值范围为 [0,255]。如果用户调用了 [startAudioMixing]{@link agora.startAudioMixing}，则 `volume` 为用户混音后的音量。
         */
        volume: number
        /** @en
         * Voice activity status of the local user.
         * - 0: The local user is not speaking.
         * - 1: The local user is speaking.
         * 
         * **Note**
         * 
         * - The `vad` parameter cannot report the voice activity status of remote users. In the remote users' callback, `vad` is 
         * always 0.
         * - To use this parameter, you must set the `report_vad` parameter to `true` when calling 
         * [enableAudioVolumeIndication]{@link agora.enableAudioVolumeIndication}.
         */
        /** @cn
         * 本地用户的人声状态。
         * - `0`: 本地无人声。
         * - `1`: 本地有人声。
         * 
         * **Note**
         * 
         * - `vad` 无法报告远端用户的人声状态。对于远端用户，`vad` 的值始终为 `0`。
         * - 如需使用此参数，请在调用 [enableAudioVolumeIndication]{@link agora.enableAudioVolumeIndication} 时设置 `report_vad` 为 `true`。
         */
        vad: number
        /** @en
         * The channel name the user is in.
         */
        /** @cn
         * 用户所在频道的频道名称。
         */
        channelId: string
    }

    /** @en
     * Statistics of the channel.
     */
    /** @cn
     * 通话相关的统计信息。
     */
    export interface RtcStats {
        /** @en
         * Call duration (s), represented by an aggregate value.
         */
        /** @cn
         * 通话时长（秒）。
         */
        duration: number
        /** @en
         * Total number of bytes transmitted, represented by an aggregate value.
         */
        /** @cn
         * 发送字节数（bytes）。
         */
        txBytes: number
        /** @en
         * Total number of bytes received, represented by an aggregate value.
         */
        /** @cn
         * 接收字节数（bytes）。
         */
        rxBytes: number
        /** @en
         * Total number of audio bytes sent (bytes), represented
         * by an aggregate value.
         */
        /** @cn
         * 发送音频字节数（bytes），累计值。
         */
        txAudioBytes: number
        /** @en
         * @ignore Total number of video bytes sent (bytes), represented
         * by an aggregate value.
         */
        /** @cn
         * @ignore
         * 发送视频字节数（bytes），累计值。
         */
        txVideoBytes: number
        /** @en
         * Total number of audio bytes received (bytes) before
         * network countermeasures, represented by an aggregate value.
         */
        /** @cn
         * 接收音频字节数（bytes），累计值。
         */
        rxAudioBytes: number
        /** @en
         * @ignore
         * Total number of video bytes received (bytes),
         * represented by an aggregate value.
         */
        /** @cn
         * @ignore
         * 接收视频字节数（bytes），累计值。
         */
        rxVideoBytes: number
        /** @en
         * Transmission bitrate (Kbps), represented by an instantaneous value.
         */
        /** @cn
         * 发送码率（Kbps）。
         */
        txKBitRate: number
        /** @en
         * Receive bitrate (Kbps), represented by an instantaneous value.
         */
        /** @cn
         * 接收码率（Kbps）。
         */
        rxKBitRate: number
        /** @en
         * Audio receive bitrate (Kbps), represented by an instantaneous value.
         */
        /** @cn
         * 音频接收码率 (Kbps）。
         */
        rxAudioKBitRate: number
        /** @en
         * Audio transmission bitrate (Kbps), represented by an instantaneous value.
         */
        /** @cn
         * 音频包的发送码率 (Kbps）。
         */
        txAudioKBitRate: number
        /** @en
         * @ignore Video receive bitrate (Kbps), represented by an instantaneous value.
         */
        /** @cn
         * @ignore
         * 视频接收码率 (Kbps）。
         */
        rxVideoKBitRate: number
        /** @en
         * @ignore
         * Video transmission bitrate (Kbps), represented by an instantaneous value.
         */
        /** @cn
         * @ignore
         * 视频发送码率 (Kbps）。
         */
        txVideoKBitRate: number
        /** @en
         * Client-server latency (ms)
         */
        /** @cn
         * 客户端-接入服务器延时 (毫秒)。
         */
        lastmileDelay: number
        /** @en
         * The packet loss rate (%) from the local client to Agora's edge server,
         * before using the anti-packet-loss method.
         */
        /** @cn
         * 弱网对抗前客户端到 Agora 边缘服务器的丢包率 (%)。
         */
        txPacketLossRate: number
        /** @en
         * The packet loss rate (%) from Agora's edge server to the local client,
         * before using the anti-packet-loss method.
         */
        /** @cn
         * 弱网对抗前 Agora 边缘服务器下行发送到客户端的丢包率 (%)
         */
        rxPacketLossRate: number
        /** @en
         * Number of users in the channel.
         * - `COMMUNICATION` profile: The number of users in the channel.
         * - `LIVE_BROADCASTING` profile:
         *   -  If the local user is an audience: The number of users in the channel = The number of hosts in the channel + 1.
         *   -  If the user is a host: The number of users in the channel = The number of hosts in the channel.
         */
        /** @cn
         * 当前频道内的用户人数。
         * - 通信场景下，当前频道内的用户人数。
         * - 直播场景下，
         *     - 如果本地用户为观众，为频道内的主播人数 + 1；
         *     - 如果本地用户为主播，为频道内的主播人数。
         */
        userCount: number
        /** @en
         * Application CPU usage (%).
         */
        /** @cn
         * 当前 App 的 CPU 使用率 (%)。
         */
        cpuAppUsage: number
        /** @en
         * System CPU usage (%).
         *
         * In the multi-kernel environment, this member represents the average CPU usage.
         * The value **=** 100 **-** System Idle Progress in Task Manager (%).
         */
        /** @cn
         * 当前系统的 CPU 使用率 (%)。在多核环境中，该成员指多核 CPU 的平均使用率。计算方式为 100 - 任务管理中显示的系统空闲进程 CPU（%）。
         */
        cpuTotalUsage: number
        /** @en
         * The round-trip time delay from the client to the local router.
         *
         * @note (iOS only) Since v3.1.2, this parameter is disabled by default. See
         * [FAQ](https://docs.agora.io/en/faq/local_network_privacy) for details. If you need to enable this parameter,
         * contact [support@agora.io](mailto:support@agora.io).
         */
        /** @cn
         * 客户端到本地路由器的往返时延 (ms)
         * 
         * @note （仅 iOS）自 3.1.2 版本起，该参数默认不生效。详见 [FAQ](https://docs.agora.io/cn/faq/local_network_privacy)。
         * 如需启用该参数，请[提交工单](https://agora-ticket.agora.io/)联系声网技术支持。
         */
        gatewayRtt: number
        /** @en
         * The memory usage ratio of the app (%).
         *
         * @note This value is for reference only. Due to system limitations, you may not get the value of this member.
         */
        /** @cn
         * 当前 App 的内存占比 (%)
         * 
         * @note 该值仅作参考。受系统限制可能无法获取。
         */
        memoryAppUsageRatio: number
        /** @en
         * The memory usage ratio of the system (%).
         *
         * @note This value is for reference only. Due to system limitations, you may not get the value of this member.
         */
        /** @cn
         * 当前系统的内存占比 (%)
         * @note 该值仅作参考。受系统限制可能无法获取。
         */
        memoryTotalUsageRatio: number
        /** @en
         * The memory usage of the app (KB).
         *
         * @note This value is for reference only. Due to system limitations, you may not get the value of this member.
         */
        /** @cn
         * 当前 App 的内存大小 (KB)
         * @note 该值仅作参考。受系统限制可能无法获取。
         */
        memoryAppUsageInKbytes: number
    }

    /** @en
     * @ignore
     * Statistics of the local video stream.
     */
    /** @cn
     * @ignore
     * 本地视频流上传统计信息。
     */
    export interface LocalVideoStats {
        /** @en
         * Bitrate (Kbps) sent in the reported interval, which does not include
         * the bitrate of the retransmission video after packet loss.
         */
        /** @cn
         * 实际发送码率 (Kbps)。
         *
         * @note
         * 不包含丢包后重传视频等的发送码率。
         */
        sentBitrate: number
        /** @en
         * Frame rate (fps) sent in the reported interval, which does not include
         * the frame rate of the retransmission video after packet loss.
         */
        /** @cn
         * 实际发送帧率 (fps)。
         *
         * @note
         * 不包含丢包后重传视频等的发送帧率。
         */
        sentFrameRate: number
        /** @en
         * The encoder output frame rate (fps) of the local video.
         */
        /** @cn
         * 本地视频编码器的输出帧率，单位为 fps。
         */
        encoderOutputFrameRate: number
        /** @en
         * The render output frame rate (fps) of the local video.
         */
        /** @cn
         * 本地视频渲染器的输出帧率，单位为 fps
         */
        rendererOutputFrameRate: number
        /** @en
         * The target bitrate (Kbps) of the current encoder. This value is estimated by the SDK based on the current network conditions.
         */
        /** @cn
         * 当前编码器的目标编码码率 (Kbps)，该码率为 SDK 根据当前网络状况预估的一个值。
         */
        targetBitrate: number
        /** @en
         * The target frame rate (fps) of the current encoder.
         */
        /** @cn
         * 当前编码器的目标编码帧率 (fps)。
         */
        targetFrameRate: number
        /** @en
         * Quality change of the local video in terms of target frame rate and
         * target bit rate in this reported interval. See [QUALITY_ADAPT_INDICATION]{@link agora.QUALITY_ADAPT_INDICATION}.
         */
        /** @cn
         * 统计周期内本地视频质量（基于目标帧率和目标码率）的自适应情况。详见： [QUALITY_ADAPT_INDICATION]{@link agora.QUALITY_ADAPT_INDICATION} 。
         */
        qualityAdaptIndication: QUALITY_ADAPT_INDICATION
        /** @en
         * The encoding bitrate (Kbps), which does not include the bitrate of the
         * re-transmission video after packet loss.
         */
        /** @cn
         * 视频编码码率（Kbps）。
         *
         * @note
         * 不包含丢包后重传视频等的编码码率。
         */
        encodedBitrate: number
        /** @en
         * The width of the encoding frame (px).
         */
        /** @cn
         * 视频编码宽度（px）。
         */
        encodedFrameWidth: number
        /** @en
         * The height of the encoding frame (px).
         */
        /** @cn
         * 视频编码高度（px）。
         */
        encodedFrameHeight: number
        /** @en
         * The value of the sent frames, represented by an aggregate value.
         */
        /** @cn
         * 视频发送的帧数，累计值。
         */
        encodedFrameCount: number
        /** @en
         * The codec type of the local video: [VIDEO_CODEC_TYPE]{@link agora.VIDEO_CODEC_TYPE}.
         */
        /** @cn
         * 视频的编码类型：[VIDEO_CODEC_TYPE]{@link agora.VIDEO_CODEC_TYPE}。
         */
        codecType: VIDEO_CODEC_TYPE
        /** @en
         * The video packet loss rate (%) from the local client to the Agora edge server before applying the anti-packet
         * loss strategies.
         */
        /** @cn
         * 弱网对抗前客户端到 Agora 边缘服务器的视频丢包率 (%)。
         */
        txPacketLossRate: number
        /** @en
         * The capture frame rate (fps) of the local video.
         */
        /** @cn
         * 本地视频采集帧率 (fps)。
         */
        captureFrameRate: number
    }

    /** @en
     * @ignore
     * Statistics of the remote video stream.
     */
    /** @cn
     * @ignore
     * 远端视频流的统计信息。
     */
    export interface RemoteVideoStats {
        /** @en
         * User ID of the remote user sending the video streams.
         */
        /** @cn
         * 远端用户 ID，指定是哪个用户的视频流。
         */
        uid: number
        /** @en
         * @deprecated
         * Time delay (ms).
         *
         * In scenarios where audio and video is synchronized, you can use the value of
         * `networkTransportDelay` and `jitterBufferDelay` in `RemoteAudioStats` to know the delay statistics of the remote video.
         */
        /** @cn
         * @deprecated
         * 延时 (毫秒)。
         * 在有音画同步机制的音视频场景中，你可以参考 RemoteAudioStats 里的 `networkTransportDelay`
         * 和 `jitterBufferDelay` 成员的值，了解视频的延迟数据。
         */
        delay: number
        /** @en
         * Width (pixels) of the video stream.
         */
        /** @cn
         * 视频流的宽度（像素）。
         */
        width: number
        /** @en
         * Height (pixels) of the video stream.
         */
        /** @cn
         * 视频流的高度（像素）。
         */
        height: number
        /** @en
         * Bitrate (Kbps) received since the last count.
         */
        /** @cn
         * （上次统计后）接收到的码率(Kbps)。
         */
        receivedBitrate: number
        /** @en
         * The decoder output frame rate (fps) of the remote video.
         */
        /** @cn
         * 远端视频解码器的输出帧率，单位为 fps。
         */
        decoderOutputFrameRate: number
        /** @en
         * The render output frame rate (fps) of the remote video.
         */
        /** @cn
         * 远端视频渲染器的输出帧率，单位为 fps。
         */
        rendererOutputFrameRate: number
        /** @en
         * Packet loss rate (%) of the remote video stream after using the anti-packet-loss method.
         */
        /** @cn
         * 远端视频在使用抗丢包技术之后的丢包率(%)。
         */
        packetLossRate: number
        /** @en
         * The type of the remote video stream: [REMOTE_VIDEO_STREAM_TYPE]{@link agora.REMOTE_VIDEO_STREAM_TYPE}.
         */
        /** @cn
         * 视频流类型，大流或小流。
         */
        rxStreamType: REMOTE_VIDEO_STREAM_TYPE
        /** @en
         * The total freeze time (ms) of the remote video stream after the remote user joins the channel.
         * In a video session where the frame rate is set to no less than 5 fps, video freeze occurs when
         * the time interval between two adjacent renderable video frames is more than 500 ms.
         */
        /** @cn
         * 远端用户在加入频道后发生视频卡顿的累计时长（ms）。通话过程中，视频帧率设置不低于 5 fps 时，连续渲染的两帧视频之间间隔超过 500 ms，
         * 则记为一次视频卡顿。
         */
        totalFrozenTime: number
        /** @en
         * The total video freeze time as a percentage (%) of the total time when the video is available.
         */
        /** @cn
         * 远端用户在加入频道后发生视频卡顿的累计时长占视频总有效时长的百分比 (%)。视频有效时长是指远端用户加入频道后视频未被停止发送或禁用的时长。
         */
        frozenRate: number
        /** @en
         * The total time (ms) when the remote user in the Communication profile or the remote
         * broadcaster in the Live-broadcast profile neither stops sending the video stream nor
         * disables the video module after joining the channel.
         */
        /** @cn
         * 视频有效时长（毫秒），即远端用户/主播加入频道后，既没有停止发送视频流，也没有禁用视频模块的通话时长。
         */
        totalActiveTime: number
        /** @en
         * The total publish duration (ms) of the remote video stream.
         */
        /** @cn
         * 远端视频流的累计发布时长（毫秒）。
         */
        publishDuration: number
    }

    /** @en
     * Audio statistics of the local user
     */
    /** @cn
     * 本地音频统计数据
     */
    export interface LocalAudioStats {
        /** @en
         * The number of channels.
         */
        /** @cn
         * 声道数。
         */
        numChannels: number
        /** @en
         * The sample rate (Hz).
         */
        /** @cn
         * 发送的采样率，单位为 Hz。
         */
        sentSampleRate: number
        /** @en
         * The average sending bitrate (Kbps).
         */
        /** @cn
         * 发送码率的平均值，单位为 Kbps。
         */
        sentBitrate: number
        /** @en
         * The audio packet loss rate (%) from the local client to the Agora edge server before applying the anti-packet loss strategies.
         */
        /** @cn
         * 弱网对抗前本端到 Agora 边缘服务器的音频丢包率 (%)。
         */
        txPacketLossRate: number
    }

    /** @en
     * Audio statistics of a remote user
     */
    /** @cn
     * 远端用户的音频统计
     */
    export interface RemoteAudioStats {
        /** @en
         * User ID of the remote user sending the audio streams.
         */
        /** @cn
         * 用户 ID，指定是哪个用户/主播的音频流。
         */
        uid: number
        /** @en
         * Audio quality received by the user: [QUALITY_TYPE]{@link agora.QUALITY_TYPE}.
         */
        /** @cn
         * 远端用户发送的音频流质量：[QUALITY_TYPE]{@link agora.QUALITY_TYPE}。
         */
        quality: number
        /** @en
         * Network delay (ms) from the sender to the receiver.
         */
        /** @cn
         * 音频发送端到接收端的网络延迟（毫秒）
         */
        networkTransportDelay: number
        /** @en
         * Network delay (ms) from the receiver to the jitter buffer.
         */
        /** @cn
         * 接收端到网络抖动缓冲的网络延迟（毫秒）
         */
        jitterBufferDelay: number
        /** @en
         * The audio frame loss rate in the reported interval.
         */
        /** @cn
         * 统计周期内的远端音频流的丢帧率 (%)。
         */
        audioLossRate: number
        /** @en
         * The number of channels.
         */
        /** @cn
         * 声道数。
         */
        numChannels: number
        /** @en
         * The sample rate (Hz) of the received audio stream in the reported
         * interval.
         */
        /** @cn
         * 统计周期内接收到的远端音频采样率。
         */
        receivedSampleRate: number
        /** @en
         * The average bitrate (Kbps) of the received audio stream in the
         * reported interval.
         */
        /** @cn
         * 接收流在统计周期内的平均码率（Kbps）。
         */
        receivedBitrate: number
        /** @en
         * The total freeze time (ms) of the remote audio stream after the remote user joins the channel. In a session, audio
         * freeze occurs when the audio frame loss rate reaches 4%.
         */
        /** @cn
         * 远端用户在加入频道后发生音频卡顿的累计时长（ms）。通话过程中，音频丢帧率达到 4% 即记为一次音频卡顿。
         */
        totalFrozenTime: number
        /** @en
         * The total audio freeze time as a percentage (%) of the total time when the audio is available.
         */
        /** @cn
         * 远端用户在加入频道后发生音频卡顿的累计时长占音频总有效时长的百分比 (%)。音频有效时长是指远端用户加入频道后音频未被停止发送或禁用的时长。
         */
        frozenRate: number
        /** @en
         * The total time (ms) when the remote user in the `COMMUNICATION` profile or the remote host in
         * the `LIVE_BROADCASTING` profile neither stops sending the audio stream nor disables the audio module after joining the channel.
         */
        /** @cn
         * 音频有效时长（毫秒），即远端用户/主播加入频道后，既没有停止发送音频流，也没有禁用音频模块的通话时长。
         */
        totalActiveTime: number
        /** @en
         * The total publish duration (ms) of the remote audio stream.
         */
        /** @cn
         * 远端音频流的累计发布时长（毫秒）。
         */
        publishDuration: number
    }

    /** @en
     * @ignore
     * Video dimensions.
     */
    /** @cn
     * @ignore
     * 视频尺寸。
     */
    export class VideoDimensions {
        /** @en
         * Width (pixels) of the video.
         */
        /** @cn
         * 视频帧宽度 (pixel)。
         */
        width: number
        /** @en
         * Height (pixels) of the video.
         */
        /** @cn
         * 视频帧高度 (pixel)。
         */
        height: number

        constructor(width: number = 640, height: number = 480) {
            this.width = width
            this.height = height
        }
    }

    /** @en
     * @ignore
     * Video encoder configurations.
     */
    /** @cn
     * @ignore
     * 视频编码器配置的属性。
     */
    export class VideoEncoderConfiguration {
        /** @en
         * The video frame dimensions (px) used to specify the video quality and measured by the total number of pixels along a
         * frame's width and height: [VideoDimensions]{@link agora.VideoDimensions}. The default value is 640 x 360.
         */
        /** @cn
         * 视频编码的分辨率 (px)。
         * 视频编码的像素，用于衡量编码质量，以长 &times; 宽表示，默认值为 640 x 360。用户可以自行设置分辨率: 
         * [VideoDimensions]{@link agora.VideoDimensions}。
         */
        dimensions: VideoDimensions
        /** @en
         * The frame rate of the video: [FRAME_RATE]{@link agora.FRAME_RATE}. The default value is 15.
         *
         * Note that we do not recommend setting this to a value greater than 30.
         */
        /** @cn
         * 视频编码的帧率: [FRAME_RATE]{@link agora.FRAME_RATE} 。默认值为 15。该值不建议大于 30.
         */
        frameRate: FRAME_RATE
        /** @en
         * The minimum frame rate of the video. The default value is -1.
         */
        /** @cn
         * 视频的最小帧率。默认值为 -1。
         */
        minFrameRate: number
        /** @en
         The video encoding bitrate (Kbps).

         Choose one of the following options:

         - [STANDARD_BITRATE]{@link agora.STANDARD_BITRATE}: (Recommended) The standard bitrate.
         - The `COMMUNICATION` profile: the encoding bitrate equals the base bitrate.
         - The `LIVE_BROADCASTING` profile: the encoding bitrate is twice the base bitrate.
         - [COMPATIBLE_BITRATE]{@link agora.COMPATIBLE_BITRATE}: The compatible bitrate: the bitrate stays the same regardless of the
         profile.

         The `COMMUNICATION` profile prioritizes smoothness, while the `LIVE_BROADCASTING` profile prioritizes video quality (requiring
         a higher bitrate). We recommend setting the bitrate mode as `STANDARD_BITRATE` to address this difference.

         The following table lists the recommended video encoder configurations, where the base bitrate applies to the `COMMUNICATION`
         profile. Set your bitrate based on this table. If you set a bitrate beyond the proper range, the SDK automatically sets it
         to within the range.

         @note In the following table, **Base Bitrate** applies to the `COMMUNICATION` profile, and **Live Bitrate** applies to the
         `LIVE_BROADCASTING` profile.

         | Resolution             | Frame Rate (fps) | Base Bitrate (Kbps)                    | Live Bitrate (Kbps)                    |
         |------------------------|------------------|----------------------------------------|----------------------------------------|
         | 160 * 120              | 15               | 65                                     | 130                                    |
         | 120 * 120              | 15               | 50                                     | 100                                    |
         | 320 * 180              | 15               | 140                                    | 280                                    |
         | 180 * 180              | 15               | 100                                    | 200                                    |
         | 240 * 180              | 15               | 120                                    | 240                                    |
         | 320 * 240              | 15               | 200                                    | 400                                    |
         | 240 * 240              | 15               | 140                                    | 280                                    |
         | 424 * 240              | 15               | 220                                    | 440                                    |
         | 640 * 360              | 15               | 400                                    | 800                                    |
         | 360 * 360              | 15               | 260                                    | 520                                    |
         | 640 * 360              | 30               | 600                                    | 1200                                   |
         | 360 * 360              | 30               | 400                                    | 800                                    |
         | 480 * 360              | 15               | 320                                    | 640                                    |
         | 480 * 360              | 30               | 490                                    | 980                                    |
         | 640 * 480              | 15               | 500                                    | 1000                                   |
         | 480 * 480              | 15               | 400                                    | 800                                    |
         | 640 * 480              | 30               | 750                                    | 1500                                   |
         | 480 * 480              | 30               | 600                                    | 1200                                   |
         | 848 * 480              | 15               | 610                                    | 1220                                   |
         | 848 * 480              | 30               | 930                                    | 1860                                   |
         | 640 * 480              | 10               | 400                                    | 800                                    |
         | 1280 * 720             | 15               | 1130                                   | 2260                                   |
         | 1280 * 720             | 30               | 1710                                   | 3420                                   |
         | 960 * 720              | 15               | 910                                    | 1820                                   |
         | 960 * 720              | 30               | 1380                                   | 2760                                   |
         | 1920 * 1080            | 15               | 2080                                   | 4160                                   |
         | 1920 * 1080            | 30               | 3150                                   | 6300                                   |
         | 1920 * 1080            | 60               | 4780                                   | 6500                                   |
         | 2560 * 1440            | 30               | 4850                                   | 6500                                   |
         | 2560 * 1440            | 60               | 6500                                   | 6500                                   |
         | 3840 * 2160            | 30               | 6500                                   | 6500                                   |
         | 3840 * 2160            | 60               | 6500                                   | 6500                                   |
         */
        /** @cn
         视频编码码率，单位为 Kbps:
         你可以根据场景需要参照下表手动设置你想要的码率。若设置的视频码率超出合理范围，SDK 会自动按照合理区间处理码率。你也可以直接选择如下任意一种模式进行设置：
         - [STANDARD_BITRATE]{@link agora.STANDARD_BITRATE} : (推荐) 标准码率模式。该模式下，视频在通信和直播场景下的码率有所不同：通信场景下，码率与
         基准码率一致；直播场景下，码率对照基准码率翻倍。
         - [COMPATIBLE_BITRATE]{@link agora.COMPATIBLE_BITRATE} : 适配码率模式。该模式下，视频在通信和直播场景下的码率均与基准码率一致。直播下如果选择
         该模式，视频帧率可能会低于设置的值。

         Agora 在通信和直播场景下采用不同的编码方式，以提升不同场景下的用户体验。通信场景保证流畅，而直播场景则更注重画面质量，因此直播场景对码率的需求大于
         通信场景。所以声网推荐将该参数设置为 [STANDARD_BITRATE]{@link agora.STANDARD_BITRATE} 。
         
         @note 该表中的基准码率适用于通信场景。直播场景下通常需要较大码率来提升视频质量。声网推荐通过设置 
         [STANDARD_BITRATE]{@link agora.STANDARD_BITRATE} 模式来实现。你也可以直接将码率值设为基准码率值 &times; 2。

         |分辨率                   |帧率（fps）        |通信码率（Kbps）                           |直播码率（Kbps）                          |
         |------------------------|------------------|----------------------------------------|----------------------------------------|
         | 160 &times; 120        | 15               | 65                                     | 130                                    |
         | 120 &times; 120        | 15               | 50                                     | 100                                    |
         | 320 &times; 180        | 15               | 140                                    | 280                                    |
         | 180 &times; 180        | 15               | 100                                    | 200                                    |
         | 240 &times; 180        | 15               | 120                                    | 240                                    |
         | 320 &times; 240        | 15               | 200                                    | 400                                    |
         | 240 &times; 240        | 15               | 140                                    | 280                                    |
         | 424 &times; 240        | 15               | 220                                    | 440                                    |
         | 640 &times; 360        | 15               | 400                                    | 800                                    |
         | 360 &times; 360        | 15               | 260                                    | 520                                    |
         | 640 &times; 360        | 30               | 600                                    | 1200                                   |
         | 360 &times; 360        | 30               | 400                                    | 800                                    |
         | 480 &times; 360        | 15               | 320                                    | 640                                    |
         | 480 &times; 360        | 30               | 490                                    | 980                                    |
         | 640 &times; 480        | 15               | 500                                    | 1000                                   |
         | 480 &times; 480        | 15               | 400                                    | 800                                    |
         | 640 &times; 480        | 30               | 750                                    | 1500                                   |
         | 480 &times; 480        | 30               | 600                                    | 1200                                   |
         | 848 &times; 480        | 15               | 610                                    | 1220                                   |
         | 848 &times; 480        | 30               | 930                                    | 1860                                   |
         | 640 &times; 480        | 10               | 400                                    | 800                                    |
         | 1280 &times; 720       | 15               | 1130                                   | 2260                                   |
         | 1280 &times; 720       | 30               | 1710                                   | 3420                                   |
         | 960 &times; 720        | 15               | 910                                    | 1820                                   |
         | 960 &times; 720        | 30               | 1380                                   | 2760                                   |
         | 1920 &times; 1080      | 15               | 2080                                   | 4160                                   |
         | 1920 &times; 1080      | 30               | 3150                                   | 6300                                   |
         | 1920 &times; 1080      | 60               | 4780                                   | 6500                                   |
         | 2560 &times; 1440      | 30               | 4850                                   | 6500                                   |
         | 2560 &times; 1440      | 60               | 6500                                   | 6500                                   |
         | 3840 &times; 2160      | 30               | 6500                                   | 6500                                   |
         | 3840 &times; 2160      | 60               | 6500                                   | 6500                                   |
         */
        bitrate: number
        /** @en
         * The minimum encoding bitrate (Kbps).
         *
         * The SDK automatically adjusts the encoding bitrate to adapt to the network conditions. Using a value greater than the default
         * value forces the video encoder to output high-quality images but may cause more packet loss and hence sacrifice the smoothness
         * of the video transmission. That said, unless you have special requirements for image quality, Agora does not recommend
         * changing this value.
         *
         * @note This parameter applies only to the `LIVE_BROADCASTING` profile.
         */
        /** @cn
         * 最低编码码率，单位为 Kbps。
         * SDK 会根据网络状况自动调整视频编码码率。将参数设为高于默认值可强制视频编码器输出高质量图片，但在网络状况不佳情况下可能导致网络丢包并影响视频播放的流畅度造成卡顿。因此如非对画质有特殊需求，声网建议不要修改该参数的值。
         * @note 该参数仅适用于直播场景。
         */
        minBitrate: number
        /** @en
         * The video orientation mode of the video: [ORIENTATION_MODE]{@link agora.ORIENTATION_MODE}.
         */
        /** @cn
         * 视频编码的方向模式: [ORIENTATION_MODE]{@link agora.ORIENTATION_MODE} 。
         */
        orientationMode: ORIENTATION_MODE
        /** @en
         * The video encoding degradation preference under limited bandwidth:
         * [DEGRADATION_PREFERENCE]{@link agora.DEGRADATION_PREFERENCE}.
         */
        /** @cn
         * 带宽受限时，视频编码降级偏好: [DEGRADATION_PREFERENCE]{@link agora.DEGRADATION_PREFERENCE} 。
         */
        degradationPreference: DEGRADATION_PREFERENCE
        /** @en
         * Sets the mirror mode of the published local video stream. It only affects the video that the remote user sees. See
         * [VIDEO_MIRROR_MODE_TYPE]{@link agora.VIDEO_MIRROR_MODE_TYPE}.
         *
         * @note: The SDK disables the mirror mode by default.
         */
        /** @cn
         * 设置本地发送视频的镜像模式，只影响远端用户看到的视频画面。详见 [VIDEO_MIRROR_MODE_TYPE]{@link agora.VIDEO_MIRROR_MODE_TYPE}
         * @note 默认关闭镜像模式。
         */
        mirrorMode: VIDEO_MIRROR_MODE_TYPE

        constructor(
            dimensions: VideoDimensions = new VideoDimensions(),
            frameRate: FRAME_RATE = FRAME_RATE.FRAME_RATE_FPS_15,
            minFrameRate: number = -1,
            bitrate: number = STANDARD_BITRATE,
            minBitrate: number = DEFAULT_MIN_BITRATE,
            orientationMode: ORIENTATION_MODE = ORIENTATION_MODE.ORIENTATION_MODE_ADAPTIVE,
            degradationPreference: DEGRADATION_PREFERENCE = DEGRADATION_PREFERENCE.MAINTAIN_QUALITY,
            mirrorMode: VIDEO_MIRROR_MODE_TYPE = VIDEO_MIRROR_MODE_TYPE.VIDEO_MIRROR_MODE_AUTO
        ) {
            this.dimensions = dimensions
            this.frameRate = frameRate
            this.minFrameRate = minFrameRate
            this.bitrate = bitrate
            this.minBitrate = minBitrate
            this.orientationMode = orientationMode
            this.degradationPreference = degradationPreference
            this.mirrorMode = mirrorMode
        }
    }

    /** @en
     * @ignore
     * The video and audio properties of the user displaying the video in the CDN live. Agora supports a maximum of 17 transcoding
     * users in a CDN streaming channel.
     */
    /** @cn
     * @ignore
     * TranscodingUser 用于管理参与旁路直播的音视频转码合图的用户。最多支持 17 人同时参与转码合图。
     */
    export class TranscodingUser {
        /** @en
         * User ID of the user displaying the video in the CDN live.
         */
        /** @cn
         * 旁路主播的用户 ID。
         */
        uid: number
        /** @en
         * Horizontal position (pixel) of the video frame relative to the top left corner.
         */
        /** @cn
         * 左上角的横向偏移。
         */
        x: number
        /** @en
         * Vertical position (pixel) of the video frame relative to the top left corner.
         */
        /** @cn
         * 左上角的纵向偏移。
         */
        y: number
        /** @en
         * Width (pixel) of the video frame. The default value is 360.
         */
        /** @cn
         * 推流视频的总宽度，默认值 360，单位为像素。
         */
        width: number
        /** @en
         * Height (pixel) of the video frame. The default value is 640.
         */
        /** @cn
         * 推流视频的总高度，默认值 640，单位为像素。
         */
        height: number
        /** @en
         * The layer index of the video frame. An integer. The value range is [0, 100].
         * - 0: (Default) Bottom layer.
         * - 100: Top layer.
         *
         * **Note**
         * - If `zOrder` is beyond this range, the SDK reports [ERR_INVALID_ARGUMENT]{@link agora.ERROR_CODE_TYPE.ERR_INVALID_ARGUMENT}.
         * - As of v3.1.2, the SDK supports `zOrder` = 0.
         */
        /** @cn
         * 视频帧图层编号。
         * - 0:（默认）表示该区域图像位于最下层，
         * - 100: 表示该区域图像位于最上层。
         * @note
         * - 如果取值小于 0 或大于 100，会返回错误 [ERR_INVALID_ARGUMENT]{@link agora.ERR_INVALID_ARGUMENT} 。
         * - 从 v3.1.2 开始，支持将 `zOrder` 设置为 0。
         */
        zOrder: number
        /** @en
         * The transparency level of the user's video. The value ranges between 0 and 1.0:
         * - 0: Completely transparent
         * - 1.0: (Default) Opaque
         */
        /** @cn
         * 直播视频上用户视频的透明度。
         * - 0: 该区域图像完全透明；
         * - 1:（默认）该区域图像完全不透明。
         */
        alpha: number
        /** @en
         * The audio channel of the sound. The default value is 0:
         * - 0: (Default) Supports dual channels at most, depending on the upstream of the host.
         * - 1: The audio stream of the host uses the FL audio channel. If the upstream of the host uses multiple audio channels,
         * these channels are mixed into mono first.
         * - 2: The audio stream of the host uses the FC audio channel. If the upstream of the host uses multiple audio channels,
         * these channels are mixed into mono first.
         * - 3: The audio stream of the host uses the FR audio channel. If the upstream of the host uses multiple audio channels,
         * these channels are mixed into mono first.
         * - 4: The audio stream of the host uses the BL audio channel. If the upstream of the host uses multiple audio channels,
         * these channels are mixed into mono first.
         * - 5: The audio stream of the host uses the BR audio channel. If the upstream of the host uses multiple audio channels,
         * these channels are mixed into mono first.
         *
         * @note If your setting is not 0, you may need a specialized player.
         */
        /** @cn
         * 音频所在声道。取值范围为 [0, 5]，默认值为 0：
         * - 0: (推荐) 默认混音设置，最多支持双声道，与主播端上行音频相关。
         * - 1: 对应主播的音频，推流中位于 FL 声道。如果主播端上行音频是多声道，会先把多声道混音成单声道。
         * - 2: 对应主播的音频，推流中位于 FC 声道。如果主播端上行音频是多声道，会先把多声道混音成单声道。
         * - 3: 对应主播的音频，推流中位于 FR 声道。如果主播端上行音频是多声道，会先把多声道混音成单声道。
         * - 4: 对应主播的音频，推流中位于 BL 声道。如果主播端上行音频是多声道，会先把多声道混音成单声道。
         * - 5: 对应主播的音频，推流中位于 BR 声道。如果主播端上行音频是多声道，会先把多声道混音成单声道。
         * @note 选项不为 0 时，需要特殊的播放器支持。
         */
        audioChannel: number

        constructor(uid: number, x: number, y: number, width: number, height: number, zOrder: number, alpha: number = 1.0, audioChannel: number) {
            this.uid = uid
            this.x = x
            this.y = y
            this.width = width
            this.height = height
            this.zOrder = zOrder
            this.alpha = alpha
            this.audioChannel = audioChannel
        }
    }

    /** @en
     * @ignore
     * Image properties.
     *
     * The properties of the watermark and background images.
     */
    /** @cn
     * @ignore
     * 图像属性。
     * 用于设置直播视频的水印和背景图片的属性。
     */
    export class RtcImage {
        /** @en
         * HTTP/HTTPS URL address of the image on the live video. The maximum length of this parameter is 1024 bytes.
         */
        /** @cn
         * 直播视频上图片的 HTTP/HTTPS 地址。字符长度不得超过 1024 字节。
         */
        url: string
        /** @en
         * Horizontal position of the image from the upper left of the live video.
         */
        /** @cn
         * 水印或背景图片在视频帧左上角的横轴坐标。
         */
        x: number
        /** @en
         * Vertical position of the image from the upper left of the live video.
         */
        /** @cn
         * 水印或背景图片在视频帧左上角的纵轴坐标。
         */
        y: number
        /** @en
         * Width of the image on the live video.
         */
        /** @cn
         * 水印或背景图片在视频帧上的宽度。
         */
        width: number
        /** @en
         * Height of the image on the live video.
         */
        /** @cn
         * 水印或背景图片在视频帧上的高度。
         */
        height: number

        constructor(url: string, x: number, y: number, width: number, height: number) {
            this.url = url
            this.x = x
            this.y = y
            this.width = width
            this.height = height
        }
    }

    /** @en
     * @ignore
     * The configuration for advanced features of the RTMP streaming with transcoding.
     */
    /** @cn
     * @ignore
     * 转码推流的高级功能配置。
     */
    export class LiveStreamAdvancedFeature {
        static LBHQ = "lbhq"
        static VEO = "veo"
        featureName: string
        opened: boolean

        constructor(featureName: string, opened: boolean) {
            this.featureName = featureName
            this.opened = opened
        }
    }

    /** @en
     * @ignore
     * A struct for managing CDN live audio/video transcoding settings.
     */
    /** @cn
     * @ignore
     * LiveTranscoding 定义。
     */
    export class LiveTranscoding {
        /** @en
         * The width of the video in pixels. The default value is 360.
         * - When pushing video streams to the CDN, ensure that `width` is at least 64; otherwise, the Agora server adjusts the value
         * to 64.
         * - When pushing audio streams to the CDN, set `width` and `height` as 0.
         */
        /** @cn
         * 推流视频的总宽度，默认值 360，单位为像素。
         * - 如果推视频流，`width` 值不得低于 64，否则 Agora 会调整为 64。
         * - 如果推音频流，请将 `width` 和 `height` 设为 0。
         */
        width: number
        /** @en
         * The height of the video in pixels. The default value is 640.
         * - When pushing video streams to the CDN, ensure that `height` is at least 64; otherwise, the Agora server adjusts the value
         * to 64.
         * - When pushing audio streams to the CDN, set `width` and `height` as 0.
         */
        /** @cn
         * 推流视频的总高度，默认值 640，单位为像素。
         * - 如果推视频流，`height` 值不得低于 64，否则 Agora 会调整为 64。
         * - 如果推音频流，请将 `width` 和 `height` 设为 0。
         */
        height: number
        /** @en
         * Bitrate of the CDN live output video stream. The default value is 400 Kbps.
         *
         * Set this parameter according to the Video Bitrate Table. If you set a bitrate beyond the proper range, the SDK automatically
         * adapts it to a value within the range.
         */
        /** @cn
         * 用于旁路推流的输出视频的码率。 单位为 Kbps。 400 Kbps 为默认值。用户可以根据 Video Profile 参考表中的码率值进行设置；如果设置的码率超出合理
         * 范围，Agora 服务器会在合理区间内自动调整码率值。
         */
        videoBitrate: number
        /** @en
         * Frame rate of the output video stream set for the CDN live streaming. The default value is 15 fps, and the value range
         * is (0,30].
         *
         * @note The Agora server adjusts any value over 30 to 30.
         */
        /** @cn
         * 用于旁路推流的输出视频的帧率。取值范围是 (0,30]，单位为 fps。15 fps 为默认值。
         * @note Agora 会将所有高于 30 fps 的帧率统一设为 30 fps。
         */
        videoFramerate: number
        /** @en
         * @deprecated Latency mode:
         * - true: Low latency with unassured quality.
         * - false: (Default) High latency with assured quality.
         */
        /** @cn
         * @deprecated
         * - true: 低延时，不保证画质；
         * - false:（默认值）高延时，保证画质。
         */
        lowLatency: boolean
        /** @en
         * Video GOP in frames. The default value is 30 fps.
         */
        /** @cn
         * 用于旁路直播的输出视频的 GOP。单位为帧。默认值为 30 帧。
         */
        videoGop: number
        /** @en
         * Self-defined video codec profile: [VIDEO_CODEC_PROFILE_TYPE]{@link agora.VIDEO_CODEC_PROFILE_TYPE}.
         *
         * @note If you set this parameter to other values, Agora adjusts it to the default value of 100.
         */
        /** @cn
         * 用于旁路推流的输出视频的编码规格: [VIDEO_CODEC_PROFILE_TYPE]{@link agora.VIDEO_CODEC_PROFILE_TYPE} 。
         * @note 如果你将这个参数设为其他值，Agora 会将其设为默认值 100。
         */
        videoCodecProfile: VIDEO_CODEC_PROFILE_TYPE
        /** @en
         * The background color in RGB hex value. Value only. Do not include a preceeding #. For example, 0xFFB6C1 (light pink).
         * The default value is 0x000000 (black).
         */
        /** @cn
         * 用于旁路直播的输出视频的背景色，格式为 RGB 定义下的十六进制整数，不要带 # 号，如 0xFFB6C1 表示浅粉色。默认 0x000000，黑色。
         */
        backgroundColor: number
        /** @en
         * The number of users in the live interactive streaming. The default value is 0.
         */
        /** @cn
         * 参与合图的用户数量，默认 0。
         */
        userCount: number
        /** @en
         * TranscodingUser
         */
        /** @cn
         * TranscodingUser
         */
        transcodingUsers: TranscodingUser[]
        /** @en
         * Reserved property. Extra user-defined information to send SEI for the H.264/H.265 video stream to the CDN live client.
         * Maximum length: 4096 Bytes.
         *
         * For more information on SEI frame, see [SEI-related questions](https://docs.agora.io/en/faq/sei).
         */
        /** @cn
         * 预留参数：用户自定义的发送到旁路推流客户端的信息。用于填充 H.264/H.265 视频中 SEI 帧内容。长度限制 4096 字节。关于 SEI 的详细信息，
         * 详见 [SEI 帧相关问题](https://docs.agora.io/cn/faq/sei)。
         */
        transcodingExtraInfo: string
        /** @en
         * @deprecated 
         * The metadata sent to the CDN live client defined by the RTMP or HTTP-FLV metadata.
         */
        /** @cn
         * @deprecated 
         * 发送给 CDN 客户端的 metadata。
         */
        metadata: string
        /** @en
         * The watermark image added to the CDN live publishing stream.
         * Ensure that the format of the image is PNG. Once a watermark image is added, the audience of the CDN live publishing stream
         * can see the watermark image. See [RtcImage]{@link agora.RtcImage}.
         */
        /** @cn
         * 用于旁路直播的输出视频上的水印图片。添加后所有旁路直播的观众都可以看到水印。水印图片的定义详见 [RtcImage]{@link agora.RtcImage}。必须为 PNG 格式。
         */
        watermark: RtcImage
        /** @en
         * The background image added to the CDN live publishing stream.
         *
         * Once a background image is added, the audience of the CDN live publishing stream can see the background image.
         * See [RtcImage]{@link agora.RtcImage}.
         */
        /** @cn
         * 用于旁路直播的输出视频上的背景图片。添加后所有旁路直播的观众都可以看到背景图片。背景图片的定义详见 [RtcImage]{@link agora.RtcImage}。
         */
        backgroundImage: RtcImage
        /** @en
         * Self-defined audio-sample rate: [AUDIO_SAMPLE_RATE_TYPE]{@link agora.AUDIO_SAMPLE_RATE_TYPE}.
         */
        /** @cn
         * 自定义音频采样率: [AUDIO_SAMPLE_RATE_TYPE]{@link agora.AUDIO_SAMPLE_RATE_TYPE} 。
         */
        audioSampleRate: AUDIO_SAMPLE_RATE_TYPE
        /** @en
         * Bitrate of the CDN live audio output stream. The default value is 48 Kbps, and the highest value is 128.
         */
        /** @cn
         * 用于旁路推流的输出音频的码率。单位为 Kbps，默认值为 48，最大值为 128。
         */
        audioBitrate: number
        /** @en
         * The numbder of audio channels for the CDN live stream. Agora recommends choosing 1 (mono), or 2 (stereo) audio channels.
         * Special players are required if you choose option 3, 4, or 5:
         * - 1: (Default) Mono.
         * - 2: Stereo.
         * - 3: Three audio channels.
         * - 4: Four audio channels.
         * - 5: Five audio channels.
         */
        /** @cn
         * 用于旁路推流的输出音频的声道数，默认值为 1。取值范围为 [1,5] 中的整型，建议取 1 或 2：
         * - 1: 单声道（默认）
         * - 2: 双声道
         * - 3: 三声道
         * - 4: 四声道
         * - 5: 五声道
         */
        audioChannels: 1 | 2 | 3 | 4 | 5
        /** @en
         * @ignore
         * Self-defined audio codec profile: [AUDIO_CODEC_PROFILE_TYPE]{@link agora.AUDIO_CODEC_PROFILE_TYPE}.
         */
        /** @cn
         * @ignore
         * 用于旁路推流的输出视频的编码规格: [AUDIO_CODEC_PROFILE_TYPE]{@link agora.AUDIO_CODEC_PROFILE_TYPE} 。
         */
        audioCodecProfile: AUDIO_CODEC_PROFILE_TYPE
        /** @en
         * @ignore
         * Advanced features of the RTMP streaming with transcoding. See [LiveStreamAdvancedFeature]{@link agora.LiveStreamAdvancedFeature}.
         */
        /** @cn
         * 转码推流的高级功能。详见 [LiveStreamAdvancedFeature]{@link agora.LiveStreamAdvancedFeature}。
         */
        advancedFeatures: LiveStreamAdvancedFeature

        /** @en
         * The number of enabled advanced features. The default value is 0.
         */
        /** @cn
         * 开启的高级功能数量。默认值为 0。
         */
        advancedFeatureCount: number

        constructor(
            width: number = 360,
            height: number = 640,
            videoBitrate: number = 400,
            videoFramerate: number = 15,
            lowLatency: boolean = false,
            videoGop: number = 30,
            videoCodecProfile: VIDEO_CODEC_PROFILE_TYPE = VIDEO_CODEC_PROFILE_TYPE.VIDEO_CODEC_PROFILE_HIGH,
            backgroundColor: number = 0x000000,
            userCount: number = 0,
            transcodingUsers: TranscodingUser[],
            transcodingExtraInfo: string,
            metadata: string,
            watermark: RtcImage,
            backgroundImage: RtcImage,
            audioSampleRate: AUDIO_SAMPLE_RATE_TYPE = AUDIO_SAMPLE_RATE_TYPE.AUDIO_SAMPLE_RATE_48000,
            audioBitrate: number = 48,
            audioChannels: 1 | 2 | 3 | 4 | 5 = 1,
            audioCodecProfile: AUDIO_CODEC_PROFILE_TYPE = AUDIO_CODEC_PROFILE_TYPE.AUDIO_CODEC_PROFILE_LC_AAC,
            advancedFeatures: LiveStreamAdvancedFeature,
            advancedFeatureCount: number = 0
        ) {
            this.width = width
            this.height = height
            this.videoBitrate = videoBitrate
            this.videoFramerate = videoFramerate
            this.lowLatency = lowLatency
            this.videoGop = videoGop
            this.videoCodecProfile = videoCodecProfile
            this.backgroundColor = backgroundColor
            this.userCount = userCount
            this.transcodingUsers = transcodingUsers
            this.transcodingExtraInfo = transcodingExtraInfo
            this.metadata = metadata
            this.watermark = watermark
            this.backgroundImage = backgroundImage
            this.audioSampleRate = audioSampleRate
            this.audioBitrate = audioBitrate
            this.audioChannels = audioChannels
            this.audioCodecProfile = audioCodecProfile
            this.advancedFeatures = advancedFeatures
            this.advancedFeatureCount = advancedFeatureCount
        }
    }

    /** @en
     * @ignore
     * Camera capturer configuration.
     */
    /** @cn
     * 摄像头采集偏好设置
     */
    export class CameraCapturerConfiguration {
        /** @en
         * Camera capturer preference settings. See: [CAPTURER_OUTPUT_PREFERENCE]{@link agora.CAPTURER_OUTPUT_PREFERENCE}.
         */
        /** @cn
         * 摄像头采集偏好，详见 [CAPTURER_OUTPUT_PREFERENCE]{@link agora.CAPTURER_OUTPUT_PREFERENCE}。
         */
        preference: CAPTURER_OUTPUT_PREFERENCE
        /** @en
         * Camera direction settings (for Android/iOS only). See: [CAMERA_DIRECTION]{@link agora.CAMERA_DIRECTION}.
         */
        /** @cn
         * （仅适用于 Android 和 iOS 平台）摄像头方向，详见 [CAMERA_DIRECTION]{@link agora.CAMERA_DIRECTION}。
         */
        cameraDirection: CAMERA_DIRECTION

        constructor(preference: CAPTURER_OUTPUT_PREFERENCE, cameraDirection: CAMERA_DIRECTION) {
            this.preference = preference
            this.cameraDirection = cameraDirection
        }
    }

    /** @en
     * Configuration of the injected media stream.
     */
    /** @cn
     * InjectStreamConfig 定义。
     */
    export class InjectStreamConfig {
        /** @en
         * Width of the injected stream in the live interactive streaming. The default value is 0 (same width as the original stream).
         */
        /** @cn
         * 添加进入直播的外部视频源宽度。默认值为 0，即保留视频源原始宽度。
         */
        width: number
        /** @en
         * Height of the injected stream in the live interactive streaming. The default value is 0 (same height as the original stream).
         */
        /** @cn
         * 添加进入直播的外部视频源高度。默认值为 0，即保留视频源原始高度。
         */
        height: number
        /** @en
         * Video GOP (in frames) of the injected stream in the live interactive streaming. The default value is 30 fps.
         */
        /** @cn
         * 用于旁路直播的输出视频的 GOP。单位为帧。默认值为 30 帧。
         */
        videoGop: number
        /** @en
         * Video frame rate of the injected stream in the live interactive streaming. The default value is 15 fps.
         */
        /** @cn
         * 添加进入直播的外部视频源帧率。默认值为 15 fps。
         */
        videoFramerate: number
        /** @en
         * Video bitrate of the injected stream in the live interactive streaming. The default value is 400 Kbps.
         *
         * @note The setting of the video bitrate is closely linked to the resolution. If the video bitrate you set is beyond a reasonable
         * range, the SDK sets it within a reasonable range.
         */
        /** @cn
         * 添加进入直播的外部视频源码率。默认设置为 400 Kbps。
         * @note 视频码率的设置与分辨率相关。如果设置的视频码率超出合理范围，SDK 会按照合理区间自动设置码率。
         */
        videoBitrate: number
        /** @en
         * Audio-sample rate of the injected stream in the live interactive streaming:
         * [AUDIO_SAMPLE_RATE_TYPE]{@link agora.AUDIO_SAMPLE_RATE_TYPE}. The default value is 48000 Hz.
         *
         * @note We recommend setting the default value.
         */
        /** @cn
         * 添加进入直播的外部音频采样率。默认值为 48000。详见 [AUDIO_SAMPLE_RATE_TYPE]{@link agora.AUDIO_SAMPLE_RATE_TYPE} 。
         * @note 声网建议目前采用默认值，不要自行设置。
         */
        audioSampleRate: AUDIO_SAMPLE_RATE_TYPE
        /** @en
         * Audio bitrate of the injected stream in the live interactive streaming. The default value is 48.
         *
         * @note We recommend setting the default value.
         */
        /** @cn
         * 添加进入直播的外部音频码率。默认值为 48 Kbps。
         * @note 声网建议目前采用默认值，不要自行设置。
         */
        audioBitrate: number
        /** @en
         * Audio channels in the live interactive streaming.
         *
         * - 1: (Default) Mono
         * - 2: Two-channel stereo
         *
         * @note We recommend setting the default value.
         */
        /** @cn
         * 添加进入直播的外部音频频道。
         * - 1: 单声道（默认）
         * - 2: 双声道
         * @note 声网建议目前采用默认值，不要自行设置。
         */
        audioChannels: number

        constructor(
            width: number = 0,
            height: number = 0,
            videoGop: number = 30,
            videoFramerate: number = 15,
            videoBitrate: number = 400,
            audioSampleRate: AUDIO_SAMPLE_RATE_TYPE = AUDIO_SAMPLE_RATE_TYPE.AUDIO_SAMPLE_RATE_48000,
            audioBitrate: number = 48,
            audioChannels: number = 1) {
            this.width = width
            this.height = height
            this.videoGop = videoGop
            this.videoFramerate = videoFramerate
            this.videoBitrate = videoBitrate
            this.audioSampleRate = audioSampleRate
            this.audioBitrate = audioBitrate
            this.audioChannels = audioChannels
        }
    }

    /** @en
     * The definition of [ChannelMediaInfo]{@link agora.ChannelMediaInfo}.
     */
    /** @cn
     * [ChannelMediaInfo]{@link agora.ChannelMediaInfo} 类定义。
     */
    export class ChannelMediaInfo {
        /** @en
         * The channel name.
         */
        /** @cn
         * 频道名。
         */
        channelName: string
        /** @en
         * The token that enables the user to join the channel.
         */
        /** @cn
         * 能加入频道的 Token。
         */
        token: string
        /** @en
         * The user ID.
         */
        /** @cn
         * 用户 ID。
         */
        uid: number

        constructor(channelName: string, token: string, uid: number) {
            this.channelName = channelName
            this.token = token
            this.uid = uid
        }
    }

    /** @en
     * The definition of [ChannelMediaRelayConfiguration]{@link agora.ChannelMediaRelayConfiguration}.
     */
    /** @cn
     * [ChannelMediaRelayConfiguration]{@link agora.ChannelMediaRelayConfiguration} 类定义。
     */
    export class ChannelMediaRelayConfiguration {
        /** @en
         * The information of the source channel: `ChannelMediaInfo`. It contains the following members:
         * - `channelName`: The name of the source channel. The default value is `null`, which means the SDK applies the name of the
         * current channel.
         * - `uid`: The unique ID to identify the relay stream in the source channel. The default value is 0, which means the SDK generates a
         * random UID. You must set it as 0.
         * - `token`: The token for joining the source channel. It is generated with the `channelName` and `uid` you set in `srcInfo`.
         *   - If you have not enabled the App Certificate, set this parameter as the default value `null`, which means the SDK applies
         * the App ID.
         *   - If you have enabled the App Certificate, you must use the `token` generated with the `channelName` and `uid`, and the
         * `uid` must be set as 0.
         */
        /** @cn
         * 源频道信息指针 `ChannelMediaInfo`，包含如下成员：
         * - `channelName`：源频道名。默认值为 `NULL`，表示 SDK 填充当前的频道名。
         * - `uid`：标识源频道中的转发媒体流的 UID。默认值为 0，表示 SDK 随机分配一个 `uid`。请确保设为 0。
         * - `token`：能加入源频道的 `token`。由你在 `srcInfo` 中设置的 `channelName` 和 `uid` 生成。
         *   - 如未启用 App Certificate，可直接将该参数设为默认值 `NULL`，表示 SDK 填充 App ID。
         *   - 如已启用 App Certificate，则务必填入使用 `channelName` 和 `uid` 生成的 `token`，且其中的 `uid` 必须为 0。
         */
        srcInfo: ChannelMediaInfo
        /** @en
         * The information of the destination channel: `ChannelMediaInfo`. It contains the following members:
         * - `channelName`: The name of the destination channel.
         * - `uid`: The unique ID to identify the relay stream in the destination channel. The value ranges from 0 to (2<sup>32</sup>-1). 
         * To avoid UID conflicts, do not set this parameter as the `uid` of the host in the destination channel, and ensure that 
         * this `uid` is different from any other `uid` in the destination channel. The default value is 0, which means the SDK
         * generates a random UID.
         * - `token`: The token for joining the destination channel. It is generated with the `channelName` and `uid` you set in
         * `destInfos`.
         *   - If you have not enabled the App Certificate, set this parameter as the default value `null`, which means the SDK
         * applies the App ID.
         *   - If you have enabled the App Certificate, you must use the `token` generated with the `channelName` and `uid`.
         */
        /** @cn
         * 目标频道信息指针 `ChannelMediaInfo`，包含如下成员：
         * - `channelName`：目标频道的频道名。
         * - `uid`：标识目标频道中的转发媒体流的 UID。取值范围为 0 到（2<sup>32</sup>-1），请确保不要将该参数设为目标频道的主播的 UID，并与目标频道中的所有 UID 不同。默认值为 0，表示 SDK 随机分配一个 UID。
         * - `token`：能加入目标频道的 `token`。由你在 `destInfos` 中设置的 `channelName` 和 `uid` 生成。
         *   - 如未启用 App Certificate，可直接将该参数设为默认值 `NULL`，表示 SDK 填充 App ID。
         *   - 如已启用 App Certificate，则务必填入使用 `channelName` 和 `uid` 生成的 `token`。
         */
        destInfos: ChannelMediaInfo[]
        /** @en
         * The number of destination channels. The default value is 0, and the
         * value range is [0,4). Ensure that the value of this parameter
         * corresponds to the number of `ChannelMediaInfo` structs you define in
         * `destInfos`.
         */
        /** @cn
         * 目标频道数量，默认值为 0，取值范围为 [0，4]。该参数应与你在 `destInfos`
         * 中定义的 `ChannelMediaInfo` 数组的数目一致。
         */
        destCount: number

        constructor(srcInfo: ChannelMediaInfo, destInfos: ChannelMediaInfo[], destCount: number) {
            this.srcInfo = srcInfo
            this.destInfos = destInfos
            this.destCount = destCount
        }
    }

    /** @en
     * The relative location of the region to the screen or window.
     */
    /** @cn
     * 待共享区域相对于整个屏幕或窗口的位置，如不填，则表示共享整个屏幕或窗口。
     */
    export class Rectangle {
        /** @en
         * The horizontal offset from the top-left corner.
         */
        /** @cn
         * 左上角的横向偏移。
         */
        x: number
        /** @en
         * The vertical offset from the top-left corner.
         */
        /** @cn
         * 左上角的纵向偏移。
         */
        y: number
        /** @en
         * The width of the region.
         */
        /** @cn
         * 待共享区域的宽。
         */
        width: number
        /** @en
         * The height of the region.
         */
        /** @cn
         * 待共享区域的高。
         */
        height: number

        constructor(x: number = 0, y: number = 0, width: number = 0, height: number = 0) {
            this.x = x
            this.y = y
            this.width = width
            this.height = height
        }
    }

    /** @en
     * @deprecated
     * Definition of the rectangular region.
     */
    /** @cn
     * @deprecated
     * 定义视图区域。
     */
    export class Rect {
        /** @en
         * Y-axis of the top line.
         */
        /** @cn
         * 视图上边对应的纵坐标
         */
        top: number
        /** @en
         * X-axis of the left line.
         */
        /** @cn
         * 视图左边对应的横坐标
         */
        left: number
        /** @en
         * Y-axis of the bottom line.
         */
        /** @cn
         * 视图底边对应的纵坐标
         */
        bottom: number
        /** @en
         * X-axis of the right line.
         */
        /** @cn
         * 视图右边对应的横坐标
         */
        right: number

        constructor(top: number = 0, left: number = 0, bottom: number = 0, right: number = 0) {
            this.top = top
            this.left = left
            this.bottom = bottom
            this.right = right
        }
    }

    /** @en
     * @ignore The options of the watermark image to be added.
     */
    /** @cn
     * @ignore
     * 待添加的水印图片的设置选项。
     */
    export class WatermarkOptions {
        /** @en
         * Sets whether or not the watermark image is visible in the local video preview:
         * - true: (Default) The watermark image is visible in preview.
         * - false: The watermark image is not visible in preview.
         */
        /** @cn
         * 是否将水印设为预览时本地可见：
         * - true：(默认) 预览时水印本地可见；
         * - false：预览时水印本地不可见。
         */
        visibleInPreview: boolean
        /** @en
         * The watermark position in the landscape mode. See [Rectangle]{@link agora.Rectangle}.
         */
        /** @cn
         * 视频编码模式为横屏时的水印坐标。详见 [Rectangle]{@link agora.Rectangle}。
         */
        positionInLandscapeMode: Rectangle
        /** @en
         * The watermark position in the portrait mode. See [Rectangle]{@link agora.Rectangle}.
         */
        /** @cn
         * 视频编码模式为竖屏时的水印坐标。详见 [Rectangle]{@link agora.Rectangle}。
         */
        positionInPortraitMode: Rectangle

        constructor(
            visibleInPreview: boolean = true,
            positionInLandscapeMode: Rectangle = new Rectangle(),
            positionInPortraitMode: Rectangle = new Rectangle()
        ) {
            this.visibleInPreview = visibleInPreview
            this.positionInLandscapeMode = positionInLandscapeMode
            this.positionInPortraitMode = positionInPortraitMode
        }
    }

    /** @en
     * @ignore
     * Screen sharing encoding parameters.
     */
    /** @cn
     * @ignore
     * 屏幕共享的编码参数配置。
     */
    export class ScreenCaptureParameters {
        /** @en
         * The maximum encoding dimensions of the shared region in terms of width * height.
         *
         * The default value is 1920 * 1080 pixels, that is, 2073600 pixels. Agora uses the value of this parameter to calculate
         * the charges.
         * If the aspect ratio is different between the encoding dimensions and screen dimensions, Agora applies the following
         * algorithms for encoding. Suppose the encoding dimensions are 1920 x 1080:
         * - If the value of the screen dimensions is lower than that of the encoding dimensions, for example, 1000 * 1000, the
         * SDK uses 1000 * 1000 for encoding.
         * - If the value of the screen dimensions is higher than that of the encoding dimensions, for example, 2000 * 1500, the
         * SDK uses the maximum value under 1920 * 1080 with the aspect ratio of the screen dimension (4:3) for encoding, that is,
         * 1440 * 1080.
         */
        /** @cn
         * 屏幕共享视频发送的最大像素值。
         * 默认值为 1920 &times; 1080，即 2073600 像素。该像素值为计费标准。
         * 当共享的屏幕分辨率宽高比与该值设置不一致时，SDK 按如下策略进行编码。假设 dimensions 为 1920 &times; 1080：
         * - 如果屏幕分辨率小于 dimensions，如 1000 &times; 1000，SDK 直接按 1000 &times; 1000 进行编码。
         * - 如果屏幕分辨率大于 dimensions，如 2000 &times; 1500，SDK 按屏幕分辨率的宽高比，即 4：3，取 dimensions 以内的最大分辨率进行编码，
         * 即 1440 &times; 1080。
         */
        dimensions: VideoDimensions
        /** @en
         * The frame rate (fps) of the shared region.
         *
         * The default value is 5. We do not recommend setting this to a value greater than 15.
         */
        /** @cn
         * 共享视频的帧率，单位为 fps；默认值为 5，建议不要超过 15。
         */
        frameRate: number
        /** @en
         * The bitrate (Kbps) of the shared region.
         *
         * The default value is 0 (the SDK works out a bitrate according to the dimensions of the current screen).
         */
        /** @cn
         * 共享视频的码率，单位为 Kbps；默认值为 0，表示 SDK 根据当前共享屏幕的分辨率计算出一个合理的值。
         */
        bitrate: number
        /** @en
         * Sets whether or not to capture the mouse for screen sharing:
         * - true: (Default) Capture the mouse.
         * - false: Do not capture the mouse.
         */
        /** @cn
         * 是否采集鼠标用于屏幕共享
         * - true: （默认）采集鼠标
         * - false: 不采集鼠标
         */
        captureMouseCursor: boolean
        /** @en
         * Whether to bring the window to the front when calling
         * [startScreenCaptureByWindowId]{@link agora.startScreenCaptureByWindowId} to share the window:
         * - true: Bring the window to the front.
         * - false: (Default) Do not bring the window to the front.
         */
        /** @cn
         * 调用  [startScreenCaptureByWindowId]{@link agora.startScreenCaptureByWindowId}  方法共享窗口时，是否将该窗口前置。
         * - true: 前置窗口。
         * - false:（默认）不前置窗口。
         */
        windowFocus: boolean
        /** @en
         * A list of IDs of windows to be blocked.
         *
         * - When calling [startScreenCaptureByScreenRect]{@link agora.startScreenCaptureByScreenRect} to start screen sharing,
         * you can use this parameter to block the specified windows.
         * - When calling [updateScreenCaptureParameters]{@link agora.updateScreenCaptureParameters} to update the configuration
         * for screen sharing, you can use this parameter to dynamically block the specified windows during screen sharing.
         */
        /** @cn
         * 待屏蔽窗口的 ID 列表。
         * - 调用  [startScreenCaptureByScreenRect]{@link agora.startScreenCaptureByScreenRect}  开启屏幕共享时，
         * 你可以通过该参数屏蔽指定的窗口。
         * - 开启屏幕共享后，你可以在调用  [updateScreenCaptureParameters]{@link agora.updateScreenCaptureParameters}  更新屏幕共享的配置参数时，
         * 通过该参数动态屏蔽指定的窗口。
         */
        excludeWindowList: any[]
        /** @en
         * The number of windows to be blocked.
         */
        /** @cn
         * 待屏蔽窗口的数量。
         */
        excludeWindowCount: number

        constructor(
            dimensions: VideoDimensions = new VideoDimensions(1920, 1080),
            frameRate: number = 5,
            bitrate: number = STANDARD_BITRATE,
            captureMouseCursor: boolean = true,
            windowFocus: boolean = false,
            excludeWindowList: any[],
            excludeWindowCount: number = 0
        ) {
            this.dimensions = dimensions
            this.frameRate = frameRate
            this.bitrate = bitrate
            this.captureMouseCursor = captureMouseCursor
            this.windowFocus = windowFocus
            this.excludeWindowList = excludeWindowList
            this.excludeWindowCount = excludeWindowCount
        }
    }

    /** @en
     * @ignore
     * Video display settings of the `VideoCanvas` class.
     */
    /** @cn
     * @ignore
     * `VideoCanvas` 类的视频显示设置。
     */
    export class VideoCanvas {
        /** @en
         * Video display window (view).
         */
        /** @cn
         * 视频显示窗口 (view)。
         */
        view: any
        /** @en
         * The rendering mode of the video view. See [RENDER_MODE_TYPE]{@link agora.RENDER_MODE_TYPE}.
         */
        /** @cn
         * 视频渲染模式，详见 [RENDER_MODE_TYPE]{@link agora.RENDER_MODE_TYPE}。
         */
        renderMode: number
        /** @en
         * The unique channel name for the AgoraRTC session in the string format. The string length must be less than 64 bytes.
         * Supported character scopes are:
         * - All lowercase English letters: a to z.
         * - All uppercase English letters: A to Z.
         * - All numeric characters: 0 to 9.
         * - The space character.
         * - Punctuation characters and other symbols, including: "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=",
         * ".", ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ",".
         *
         * @note The default value is the empty string "". Use the default value if the user joins the channel using the
         * [joinChannel]{@link agora.joinChannel} method in the Agora engine. The `VideoCanvas` struct defines the video canvas of
         * the user in the channel.
         */
        /** @cn
         * 能标识频道的频道名，长度在 64 字节以内的字符。以下为支持的字符集范围（共 89 个字符）：
         * - 26 个小写英文字母 a~z；
         * - 26 个大写英文字母 A~Z；
         * - 10 个数字 0~9；
         * - 空格；
         * - "!"、"#"、"$"、"%"、"&"、"("、")"、"+"、"-"、":"、";"、"<"、"="、"."、">"、"?"、"@"、"["、"]"、"^"、"_"、" {"、"}"、"|"、"~"、","。
         * @note 该参数默认值为空字符 ""。如果用户是通过 agora 类的  [joinChannel]{@link agora.joinChannel}  方法加入频道的，则将参数设为默认值，
         * 表示该用户在频道内的渲染视图。
         */
        channelId: string
        /** @en
         * The user ID.
         */
        /** @cn
         * 用户 ID
         */
        uid: number
        /** @ignore */
        priv: any // private data (underlying video engine denotes it)
        /** @en
         * The mirror mode of the video view. See [VIDEO_MIRROR_MODE_TYPE]{@link agora.VIDEO_MIRROR_MODE_TYPE}.
         *
         * @note
         * - For the mirror mode of the local video view: If you use a front camera, the SDK enables the mirror mode by default; if you
         * use a rear camera, the SDK disables the mirror mode by default.
         * - For the mirror mode of the remote video view: The SDK disables the mirror mode by default.
         */
        /** @cn
         * 视图镜像模式，详见 [VIDEO_MIRROR_MODE_TYPE]{@link agora.VIDEO_MIRROR_MODE_TYPE}
         * @note
         * - 本地视图镜像模式：如果你使用前置摄像头，默认启动本地视图镜像模式；如果你使用后置摄像头，默认关闭本地视图镜像模式。
         * - 远端用户视图镜像模式：默认关闭远端用户的镜像模式。
         */
        mirrorMode: VIDEO_MIRROR_MODE_TYPE

        constructor(
            view: any,
            renderMode: number = RENDER_MODE_TYPE.RENDER_MODE_HIDDEN,
            channelId: string,
            uid: number = 0,
            priv: any,
            mirrorMode: VIDEO_MIRROR_MODE_TYPE = VIDEO_MIRROR_MODE_TYPE.VIDEO_MIRROR_MODE_AUTO
        ) {
            this.view = view
            this.renderMode = renderMode
            this.channelId = channelId
            this.uid = uid
            this.priv = priv
            this.mirrorMode = mirrorMode
        }
    }

    /** @en
     * @ignore
     * Image enhancement options.
     */
    /** @cn
     * @ignore
     * 美颜选项。
     */
    export class BeautyOptions {
        /** @en
         * The contrast level, used with the `lightening` parameter.
         */
        /** @cn
         * 亮度明暗对比度。
         */
        lighteningContrastLevel: LIGHTENING_CONTRAST_LEVEL
        /** @en
         * The brightness level. The value ranges from 0.0 (original) to 1.0.
         */
        /** @cn
         * 亮度，取值范围为 [0.0, 1.0]，其中 0.0 表示原始亮度。可用来实现美白等视觉效果。
         */
        lighteningLevel: number
        /** @en
         * The sharpness level. The value ranges between 0 (original) and 1. This parameter is usually used to remove blemishes.
         */
        /** @cn
         * 平滑度，取值范围为 [0.0, 1.0]，其中 0.0 表示原始平滑等级。可用来实现祛痘、磨皮等视觉效果。
         */
        smoothnessLevel: number
        /** @en
         * The redness level. The value ranges between 0 (original) and 1. This parameter adjusts the red saturation level.
         */
        /** @cn
         * 红色度，取值范围为 [0.0, 1.0]，其中 0.0 表示原始红色度。可用来实现红润肤色等视觉效果。
         */
        rednessLevel: number

        constructor(
            lighteningContrastLevel: LIGHTENING_CONTRAST_LEVEL = LIGHTENING_CONTRAST_LEVEL.LIGHTENING_CONTRAST_NORMAL,
            lighteningLevel: number = 0,
            smoothnessLevel: number = 0,
            rednessLevel: number = 0
        ) {
            this.lighteningContrastLevel = lighteningContrastLevel
            this.lighteningLevel = lighteningLevel
            this.smoothnessLevel = smoothnessLevel
            this.rednessLevel = rednessLevel
        }
    }

    /** @en
     * The UserInfo interface.
     */
    /** @cn
     * UserInfo 的定义。
     */
    export interface UserInfo {
        /** @en
         * The user ID.
         */
        /** @cn
         * 用户 ID。
         */
        uid: number
        /** @en
         * The user account.
         */
        /** @cn
         * 用户 Account。
         */
        userAccount: string
    }

    /** @en
     * Configurations of built-in encryption schemas.
     */
    /** @cn
     * 配置内置加密模式和密钥。
     */
    export class EncryptionConfig {
        /** @en
         * Encryption mode. The default encryption mode is `AES_128_XTS`. See [ENCRYPTION_MODE]{@link agora.ENCRYPTION_MODE}.
         */
        /** @cn
         * 内置加密模式，默认为 `AES_128_XTS` 加密模式。详见 [ENCRYPTION_MODE]{@link agora.ENCRYPTION_MODE}
         */
        encryptionMode: ENCRYPTION_MODE
        /** @en
         * Encryption key in string type.
         *
         * @note If you do not set an encryption key or set it as `null`, you cannot use the built-in encryption, and the SDK returns
         * -2(`ERR_INVALID_ARGUMENT`).
         */
        /** @cn
         * 内置加密密钥，字符串类型。
         *
         * @note 如果未指定该参数或将该参数设置为空，则无法启用内置加密，且 SDK 会返回错误码 
         * [ERR_INVALID_ARGUMENT]{@link agora.ERR_INVALID_ARGUMENT} (-2)。
         */
        encryptionKey: string

        constructor(encryptionMode: ENCRYPTION_MODE = ENCRYPTION_MODE.AES_128_XTS, encryptionKey: string) {
            this.encryptionMode = encryptionMode
            this.encryptionKey = encryptionKey
        }
    }

    /** @en
     * The channel media options.
     */
    /** @cn
     * 频道媒体设置选项。
     */
    export class ChannelMediaOptions {
        /** @en
         * Determines whether to subscribe to audio streams when the user joins the channel:
         * - true: (Default) Subscribe.
         * - false: Do not subscribe.
         *
         * This member serves a similar function to the [muteAllRemoteAudioStreams]{@link agora.muteAllRemoteAudioStreams} method.
         * After joining the channel, you can call the `muteAllRemoteAudioStreams` method to set whether to subscribe to audio streams
         * in the channel.
         */
        /** @cn
         * 设置加入频道时是否自动订阅音频流：
         * - true：（默认）订阅。
         * - false：不订阅。
         * 
         * 该成员功能与 [muteAllRemoteAudioStreams]{@link agora.muteAllRemoteAudioStreams} 相同。 加入频道后，你可以通过 
         * `muteAllRemoteAudioStreams` 方法重新设置是否订阅频道内的远端音频流。
         */
        autoSubscribeAudio: boolean
        /** @en
         * @ignore
         * Determines whether to subscribe to video streams when the user joins the channel:
         * - true: (Default) Subscribe.
         * - false: Do not subscribe.
         *
         * This member serves a similar function to the [muteAllRemoteVideoStreams]{@link agora.muteAllRemoteVideoStreams} method.
         * After joining the channel, you can call the `muteAllRemoteVideoStreams` method to set whether to subscribe to video streams
         * in the channel.
         */
        /** @cn
         * 设置加入频道是是否自动订阅视频流：
         * - true：（默认）订阅。
         * - false：不订阅。
         * 
         * 该成员功能与 [muteAllRemoteVideoStreams]{@link agora.muteAllRemoteVideoStreams} 相同。 加入频道后，你可以通过 
         * `muteAllRemoteVideoStreams` 方法重新设置是否订阅频道内的远端视频流。
         */
        autoSubscribeVideo: boolean

        constructor(autoSubscribeAudio: boolean = true, autoSubscribeVideo: boolean = true) {
            this.autoSubscribeAudio = autoSubscribeAudio
            this.autoSubscribeVideo = autoSubscribeVideo
        }
    }

    /** @en
     * The defination of [Metadata]{@link agora.Metadata}.
     */
    /** @cn
     * [Metadata]{@link agora.Metadata} 定义。
     */
    export class Metadata {
        /** @en
         * The User ID.
         * - For the receiver: the ID of the user who sent the metadata.
         * - For the sender: ignore it.
         */
        /** @cn
         * 用户 ID。
         * - 对于接收者：发送该 Metadata 的远端用户的 ID
         * - 对于发送人：请忽略。
         */
        uid: number
        /** @en
         * Buffer size of the sent or received metadata.
         */
        /** @cn
         * 接收到的或发送的 Metadata 的缓存大小。
         */
        size: number
        /** @en
         * Buffer address of the sent or received metadata.
         */
        /** @cn
         * 接收到的或发送的 Metadata 的缓存地址。
         */
        buffer: Uint8Array
        /** @en
         * Timestamp (ms) of the frame following the metadata.
         */
        /** @cn
         * Metadata 的时间戳，单位为毫秒。
         */
        timeStampMs: number

        constructor(uid: number, size: number, buffer: Uint8Array, timeStampMs: number) {
            this.uid = uid;
            this.size = size;
            this.buffer = buffer;
            this.timeStampMs = timeStampMs;
        }
    }
}

/** @en
 * The `AgoraRtcEvents` class reports runtime events to the applications.
 */
/** @cn
 * `AgoraRtcEvents` 类用于向应用程序发送回调通知。
 */
declare class AgoraRtcEvents {
    /** @en
     * Reports a warning during SDK runtime.
     *
     * In most cases, the application can ignore the warning reported by the SDK because the SDK can usually fix
     * the issue and resume running. For example, when losing connection with the server, the SDK may report
     * [WARN_LOOKUP_CHANNEL_TIMEOUT]{@link agora.WARN_CODE_TYPE.WARN_LOOKUP_CHANNEL_TIMEOUT} and automatically
     * try to reconnect.
     */
    /** @cn
     * 发生警告回调。
     * 该回调方法表示 SDK 运行时出现了（网络或媒体相关的）警告。通常情况下，SDK 上报的警告信息 App 可以忽略，SDK 会自动恢复。比如和服务器失去连接时，
     * SDK 可能会上报 [WARN_OPEN_CHANNEL_TIMEOUT]{@link agora.WARN_OPEN_CHANNEL_TIMEOUT} 警告，同时自动尝试重连。
     */
    onWarning:
        /** @en
         * @param warn Warning code: [WARN_CODE_TYPE]{@link agora.WARN_CODE_TYPE}.
         * @param msg The warning message.
         */
        /** @cn
         * @param warn 警告代码： [WARN_CODE_TYPE]{@link agora.WARN_CODE_TYPE} 。
         * @param msg 警告描述。
         */
        (warn: agora.WARN_CODE_TYPE, msg: string) => void

    /** @en
     * Reports an error during SDK runtime.
     *
     * In most cases, the SDK cannot fix the issue and resume running. The SDK requires the application to take
     * action or informs the user about the issue.
     *
     * For example, the SDK reports an [ERR_START_CALL]{@link agora.ERROR_CODE_TYPE.ERR_START_CALL} error when
     * failing to initialize a call. The application informs the user that the call initialization failed and
     * invokes the [leaveChannel]{@link agora.leaveChannel} method to leave the channel.
     */
    /** @cn
     * 发生错误回调。
     * 该回调方法表示 SDK 运行时出现了（网络或媒体相关的）错误。通常情况下，SDK 上报的错误意味着 SDK 无法自动恢复，需要 App 干预或提示用户。 
     * 比如启动通话失败时，SDK 会上报 [ERR_START_CALL]{@link agora.ERR_START_CALL} 错误。App 可以提示用户启动通话失败，并调用  
     * [leaveChannel]{@link agora.leaveChannel}  退出频道。
     */
    onError:
        /** @en
         * @param err Error code: [ERROR_CODE_TYPE]{@link agora.ERROR_CODE_TYPE}.
         * @param msg The error message.
         */
        /** @cn
         * @param err 错误代码： [ERROR_CODE_TYPE]{@link agora.ERROR_CODE_TYPE} 。
         * @param msg 错误描述。
         */
        (err: agora.ERROR_CODE_TYPE, msg: string) => void

    /** @en
     * Occurs when a user joins a channel.
     *
     * This callback notifies the application that a user joins a specified channel when the application calls
     * the [joinChannel]{@link agora.joinChannel} method.
     *
     * The channel name assignment is based on `channelId` specified in the `joinChannel` method.
     * If the `uid` is not specified in the `joinChannel` method, the server automatically assigns a `uid`.
     */
    /** @cn
     * 加入频道回调。
     * 该回调方法表示该客户端成功加入了指定的频道。
     * channel ID 基于  [joinChannel]{@link agora.joinChannel}  中指定的 channel name 分配。如果调用 `joinChannel` 时并没有指定 user ID。
     * 服务器会自动分配一个。
     */
    onJoinChannelSuccess:
        /** @en
         * @param channel The channel name.
         * @param uid User ID of the user joining the channel.
         * @param elapsed Time elapsed (ms) from the user calling the `joinChannel` method until the SDK triggers this callback.
         */
        /** @cn
         * @param channel 频道名。
         * @param  uid 用户 ID。如果  [joinChannel]{@link agora.joinChannel}  中指定了 uid，则此处返回该 ID；否则使用 Agora 服务器自动分配的 ID。
         * @param  elapsed 从  [joinChannel]{@link agora.joinChannel}  开始到发生此事件过去的时间（毫秒）。
         */
        (channel: string, uid: number, elapsed: number) => void

    /** @en
     * Occurs when a user rejoins the channel after disconnection due to network problems.
     *
     * When a user loses connection with the server because of network problems, the SDK automatically tries to
     * reconnect and triggers this callback upon reconnection.
     */
    /** @cn
     * 重新加入频道回调。
     * 有时候由于网络原因，客户端可能会和服务器失去连接，SDK 会进行自动重连，自动重连成功后触发此回调方法。
     */
    onRejoinChannelSuccess:
        /** @en
         * @param channel The channel name.
         * @param uid User ID of the user rejoining the channel.
         * @param elapsed Time elapsed (ms) from starting to reconnect until the SDK triggers this callback.
         */
        /** @cn
         * @param channel 频道名。
         * @param uid 用户 ID。
         * @param elapsed 从开始重连到重连成功的时间（毫秒）。
         */
        (channel: string, uid: number, elapsed: number) => void

    /** @en
     * Occurs when a user leaves the channel.
     *
     * This callback notifies the application that a user leaves the channel when the application calls the
     * [leaveChannel]{@link agora.leaveChannel} method.
     *
     * The application retrieves information, such as the call duration and statistics.
     */
    /** @cn
     * 离开频道回调。
     * App 调用  [leaveChannel]{@link agora.leaveChannel}  方法时，SDK提示 App 离开频道成功。在该回调方法中，App 可以得到此次通话的总通话时长、
     * SDK 收发数据的流量等信息。App 通过该回调获取通话时长以及 SDK 接收到或发送的数据统计信息。
     */
    onLeaveChannel:
        /** @en
         * @param stats The statistics of the call: [RtcStats]{@link agora.RtcStats}.
         */
        /** @cn
         * @param stats 通话的统计数据: [RtcStats]{@link agora.RtcStats}。
         */
        (stats: agora.RtcStats) => void

    /** @en
     * Occurs when the user role switches in the live interactive streaming. For example, from a host to an audience or vice versa.
     *
     * This callback notifies the application of a user role switch when the application calls the
     * [setClientRole]{@link agora.setClientRole} method.
     *
     * The SDK triggers this callback when the local user switches the user role by calling the `setClientRole` method
     * after joining the channel.
     */
    /** @cn
     * 直播场景下用户角色已切换回调。
     * 直播场景下，当用户切换角色时会触发此回调，即主播切换为观众时，或观众切换为主播时。
     * 该回调由本地用户在加入频道后调用  [setClientRole]{@link agora.setClientRole}  改变用户角色触发的。
     */
    onClientRoleChanged:
        /** @en
         * @param oldRole Role that the user switches from: [CLIENT_ROLE_TYPE]{@link agora.CLIENT_ROLE_TYPE}.
         * @param newRole Role that the user switches to: [CLIENT_ROLE_TYPE]{@link agora.CLIENT_ROLE_TYPE}.
         */
        /** @cn
         * @param oldRole 切换前的角色: [CLIENT_ROLE_TYPE]{@link agora.CLIENT_ROLE_TYPE} 。
         * @param newRole 切换后的角色: [CLIENT_ROLE_TYPE]{@link agora.CLIENT_ROLE_TYPE} 。
         */
        (oldRole: agora.CLIENT_ROLE_TYPE, newRole: agora.CLIENT_ROLE_TYPE) => void

    /** @en
     * Occurs when a remote user (`COMMUNICATION`)/ host (`LIVE_BROADCASTING`) joins the channel.
     *
     * - `COMMUNICATION` profile: This callback notifies the application that another user joins the channel. If other users are
     * already in the channel, the SDK also reports to the application on the existing users.
     * - `LIVE_BROADCASTING` profile: This callback notifies the application that the host joins the channel. If other hosts are
     * already in the channel, the SDK also reports to the application on the existing hosts. We recommend limiting the number of
     * hosts to 17.
     *
     * The SDK triggers this callback under one of the following circumstances:
     * - A remote user/host joins the channel by calling the [joinChannel]{@link agora.joinChannel} method.
     * - A remote user switches the user role to the host by calling the [setClientRole]{@link agora.setClientRole} method after
     * joining the channel.
     * - A remote user/host rejoins the channel after a network interruption.
     * - The host injects an online media stream into the channel by calling the [addInjectStreamUrl]{@link agora.addInjectStreamUrl}
     * method.
     *
     * @note In the `LIVE_BROADCASTING` profile:
     * - The host receives this callback when another host joins the channel.
     * - The audience in the channel receives this callback when a new host joins the channel.
     * - When a web application joins the channel, the SDK triggers this callback as long as the web application publishes streams.
     */
    /** @cn
     * 远端用户（通信场景）/主播（直播场景）加入当前频道回调。
     * - 通信场景下，该回调提示有远端用户加入了频道，并返回新加入用户的 ID；如果加入之前，已经有其他用户在频道中了，新加入的用户也会收到这些已有用户加入频道的回调。
     * - 直播场景下，该回调提示有主播加入了频道，并返回该主播的 ID。如果在加入之前，已经有主播在频道中了，新加入的用户也会收到已有主播加入频道的回调。声网建议连麦主播不超过 17 人。
     * 
     * 该回调在如下情况下会被触发：
     * - 远端用户/主播调用  [joinChannel]{@link agora.joinChannel}  方法加入频道
     * - 远端用户加入频道后调用  [setClientRole]{@link agora.setClientRole}  将用户角色改变为主播
     * - 远端用户/主播网络中断后重新加入频道
     * - 主播通过调用  [addInjectStreamUrl]{@link agora.addInjectStreamUrl}  方法成功输入在线媒体流
     * 
     * @note 直播场景下，
     * - 主播间能相互收到新主播加入频道的回调，并能获得该主播的 uid。
     * - 观众也能收到新主播加入频道的回调，并能获得该主播的 uid。
     * - 当 Web 端加入直播频道时，只要 Web 端有推流，SDK 会默认该 Web 端为主播，并触发该回调。
     */
    onUserJoined:
        /** @en
         * @param uid User ID of the user or host joining the channel.
         * @param elapsed Time delay (ms) from the local user calling the `joinChannel` method until the SDK triggers this callback.
         */
        /** @cn
         * @param uid 新加入频道的远端用户/主播 ID。
         * @param elapsed 从本地用户调用  [joinChannel]{@link agora.joinChannel}  到该回调触发的延迟（毫秒)。
         */
        (uid: number, elapsed: number) => void

    /** @en
     * Occurs when a remote user (`COMMUNICATION`)/ host (`LIVE_BROADCASTING`) leaves the channel.
     *
     * Reasons why the user is offline:
     * - Leave the channel: When the user/host leaves the channel, the user/host sends a goodbye message. When the message is received,
     * the SDK assumes that the user/host leaves the channel.
     * - Drop offline: When no data packet of the user or host is received for a certain period of time, the SDK assumes that the
     * user/host drops offline. Unreliable network connections may lead to false detections, so we recommend using the Agora RTM SDK
     * for more reliable offline detection.
     */
    /** @cn
     * 远端用户（通信场景）/主播（直播场景）离开当前频道回调。
     * 提示有远端用户/主播离开了频道（或掉线）。用户离开频道有两个原因，即正常离开和超时掉线：
     * - 正常离开的时候，远端用户/主播会发送类似“再见”的消息。接收此消息后，判断用户离开频道。
     * - 超时掉线的依据是，在一定时间内（直播场景稍有延时），
     * 用户没有收到对方的任何数据包，则判定为对方掉线。在网络较差的情况下，有可能会误报。
     * 我们建议使用 Agora 实时消息 SDK 来做可靠的掉线检测。
     */
    onUserOffline:
        /** @en
         * @param uid User ID of the user leaving the channel or going offline.
         * @param reason Reason why the user is offline: [USER_OFFLINE_REASON_TYPE]{@link agora.USER_OFFLINE_REASON_TYPE}.
         */
        /** @cn
         * @param uid 离线用户或主播的用户 ID。
         * @param reason 离线原因: [USER_OFFLINE_REASON_TYPE]{@link agora.USER_OFFLINE_REASON_TYPE} 。
         */
        (uid: number, reason: agora.USER_OFFLINE_REASON_TYPE) => void

    /** @en
     * Reports the last mile network quality of the local user once every two seconds before the user joins the channel.
     *
     * Last mile refers to the connection between the local device and Agora edge server. After the application calls the
     * [enableLastmileTest]{@link agora.enableLastmileTest} method, this callback reports once every two seconds the uplink and
     * downlink last mile network conditions of the local user before the user joins the channel.
     */
    /** @cn
     * 通话前网络上下行 last mile 质量报告回调。
     * 该回调描述本地用户在加入频道前的 last mile 网络探测的结果，其中 last mile 是指设备到 Agora 边缘服务器的网络状态。
     * 在调用  [enableLastmileTest]{@link agora.enableLastmileTest}  之后，该回调函数每 2 秒触发一次。如果远端有多个用户/主播，该回调
     * 每 2 秒会被触发多次。
     */
    onLastmileQuality:
        /** @en
         * @param quality The last mile network quality: [QUALITY_TYPE]{@link agora.QUALITY_TYPE}.
         */
        /** @cn
         * @param quality 网络上下行质量，基于上下行网络的丢包率和抖动计算，探测结果主要反映上行网络的状态。
         * 详见: [QUALITY_TYPE]{@link agora.QUALITY_TYPE} 。
         */
        (quality: agora.QUALITY_TYPE) => void

    /** @en
     * Reports the last-mile network probe result.
     *
     * The SDK triggers this callback within 30 seconds after the app calls the
     * [startLastmileProbeTest]{@link agora.startLastmileProbeTest} method.
     */
    /** @cn
     * 通话前网络质量探测报告回调。
     * 通话前网络上下行 Last mile 质量探测报告回调。在调用  [startLastmileProbeTest]{@link agora.startLastmileProbeTest}  之后，
     * SDK 会在约 30 秒内返回该回调。
     */
    onLastmileProbeResult:
        /** @en
         * @param result The uplink and downlink last-mile network probe test result. See
         * [LastmileProbeResult]{@link agora.LastmileProbeResult}.
         */
        /** @cn
         * @param result 上下行 Last mile 质量探测结果。 详见: [LastmileProbeResult]{@link agora.LastmileProbeResult}。
         */
        (result: agora.LastmileProbeResult) => void

    /** @en
     * Occurs when the connection between the SDK and the server is interrupted.
     *
     * @deprecated This method is deprecated and replaced by the [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged}
     * callback.
     *
     * The SDK triggers this callback when it loses connection with the server for more than four seconds after the connection is
     * established.
     *
     * After triggering this callback, the SDK tries reconnecting to the server. You can use this callback to implement pop-up
     * reminders.
     *
     * This callback is different from [onConnectionLost]{@link AgoraRtcEvents.onConnectionLost}:
     * - The SDK triggers the `onConnectionInterrupted` callback when it loses connection
     * with the server for more than four seconds after it successfully joins the channel.
     * - The SDK triggers the `onConnectionLost` callback when it loses connection with the
     * server for more than 10 seconds, whether or not it joins the channel.
     *
     * If the SDK fails to rejoin the channel 20 minutes after being disconnected from Agora edge server, the SDK stops rejoining
     * the channel.
     */
    /** @cn
     * 网络连接中断回调。
     * @deprecated 该方法已废弃，被  [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged}  取代。
     * SDK 在和服务器建立连接后，失去了网络连接超过 4 秒，会触发该回调。在触发事件后，SDK 会主动重连服务器，所以该事件可以用于 UI 提示。
     * 与  [onConnectionLost]{@link AgoraRtcEvents.onConnectionLost}  回调的区别是：
     * - `onConnectionInterrupted` 回调一定是发生在加入频道成功后，且 SDK 刚失去和服务器连接超过 4 秒时触发。
     * - `onConnectionLost` 回调是无论之前加入频道是否成功，只要 10 秒内和服务器无法建立连接都会触发。
     * 如果 SDK 在断开连接后，20 分钟内还是没能重新加入频道，SDK 会停止尝试重连。
     */
    onConnectionInterrupted: () => void

    /** @en
     * Occurs when the SDK cannot reconnect to Agora edge server 10 seconds after its connection to the server is interrupted.
     *
     * The SDK triggers this callback when it cannot connect to the server 10 seconds after calling the
     * [joinChannel]{@link agora.joinChannel} method, whether or not it is in the channel.
     *
     * This callback is different from [onConnectionInterrupted]{@link AgoraRtcEvents.onConnectionInterrupted}:
     * - The SDK triggers the `onConnectionInterrupted` callback when it loses connection with the server for more than
     * four seconds after it successfully joins the channel.
     * - The SDK triggers the [onConnectionLost]{@link AgoraRtcEvents.onConnectionLost} callback when it loses connection with
     * the server for more than 10 seconds, whether or not it joins the channel.
     *
     * If the SDK fails to rejoin the channel 20 minutes after being disconnected from Agora edge server, the SDK stops
     * rejoining the channel.
     */
    /** @cn
     * 网络连接丢失回调。
     * SDK 在调用  [joinChannel]{@link agora.joinChannel}  后无论是否加入成功，只要 10 秒和服务器无法连接就会触发该回调。
     * 
     * 与  [onConnectionInterrupted]{@link AgoraRtcEvents.onConnectionInterrupted}  的区别是：
     * - `onConnectionInterrupted` 回调一定是发生在加入频道成功后，且 SDK 刚失去和服务器连接超过 4 秒时触发。
     * - `onConnectionLost` 回调是无论之前加入频道是否成功，只要 10 秒内和服务器无法建立连接都会触发。
     * 
     * 如果 SDK 在断开连接后，20 分钟内还是没能重新加入频道，SDK 会停止尝试重连。
     */
    onConnectionLost: () => void

    /** @en
     * Occurs when your connection is banned by the Agora Server.
     *
     * @deprecated This method is deprecated and replaced by the
     * [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged} callback.
     */
    /** @cn
     * @deprecated
     * 连接已被服务器禁止回调。该回调已废弃，被  [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged}  取代。
     * 当你被服务端禁掉连接的权限时，会触发该回调。
     */
    onConnectionBanned: () => void

    /** @en
     * Occurs when a method is executed by the SDK.
     */
    /** @cn
     * API 方法已执行回调。
     */
    onApiCallExecuted:
        /** @en
         * @param err The error code ([ERROR_CODE_TYPE]{@link agora.ERROR_CODE_TYPE}) returned by the SDK when a method call fails.
         * If the SDK returns 0, then the method call is successful.
         * @param api The method executed by the SDK.
         * @param result The result of the method call.
         */
        /** @cn
         * @param err 当该方法调用失败时 SDK 返回的错误码。如果方法调用失败，会返回错误码 [ERROR_CODE_TYPE]{@link agora.ERROR_CODE_TYPE} 。
         * 如果该方法调用成功，SDK 将返回 0。
         * @param api SDK 执行的 API。
         * @param result SDK 调用 API 的调用结果。
         */
        (err: agora.ERROR_CODE_TYPE, api: string, result: string) => void

    /** @en
     * Occurs when the token expires.
     *
     * After a token is specified by calling the [joinChannel]{@link agora.joinChannel} method, if the SDK losses connection
     * with the Agora server due to network issues, the token may expire after a certain period of time and a new token may be
     * required to reconnect to the server.
     *
     * This callback notifies the app to generate a new token and call `joinChannel` to rejoin the channel with the new token.
     */
    /** @cn
     * Token 已过期回调。
     * 在调用  [joinChannel]{@link agora.joinChannel} , 时如果指定了 Token，由于 Token 具有一定的时效，在通话过程中 SDK 可能由于网络原因
     * 和服务器失去连接，重连时可能需要新的 Token。
     * 该回调通知 App 需要生成新的 Token，然后调用 `joinChannel`，使用新的 Token 重新加入频道。
     */
    onRequestToken: () => void

    /** @en
     * Occurs when the token expires in 30 seconds.
     *
     * The user becomes offline if the token used in the [joinChannel]{@link agora.joinChannel} method expires. The SDK
     * triggers this callback 30 seconds before the token expires to remind the application to get a new token. Upon
     * receiving this callback, generate a new token on the server and call the [renewToken]{@link agora.renewToken} method
     * to pass the new token to the SDK.
     */
    /** @cn
     * Token 服务即将过期回调。
     * 在调用  [joinChannel]{@link agora.joinChannel}  时如果指定了 Token，由于 Token 具有一定的时效，在通话过程中如果 Token 即将失效，SDK 
     * 会提前 30 秒触发该回调，提醒 App 更新 Token。 当收到该回调时，用户需要重新在服务端生成新的 Token，然后调用 
     * [renewToken]{@link agora.renewToken}  将新生成的 Token 传给 SDK。
     */
    onTokenPrivilegeWillExpire:
        /** @en
         * @param token The token that expires in 30 seconds.
         */
        /** @cn
         * @param token 即将服务失效的 Token。
         */
        (token: string) => void

    /** @en
     * Reports the statistics of the audio stream from each remote user/host.
     *
     * @deprecated This method is deprecated. Use the [onRemoteAudioStats]{@link AgoraRtcEvents.onRemoteAudioStats} callback instead.
     *
     * The SDK triggers this callback once every two seconds to report the audio quality of each remote user/host sending an
     * audio stream. If a channel has multiple users/hosts sending audio streams, the SDK triggers this callback as many times.
     */
    /** @cn
     * @deprecated 远端声音质量回调。
     * 该方法已废弃。请改用  [onRemoteAudioStats]{@link AgoraRtcEvents.onRemoteAudioStats}  方法。
     * 该回调描述远端用户在通话中的音频质量，针对每个远端用户/主播每 2 秒触发一次。如果远端同时存在多个用户/主播，该回调每 2 秒会被触发多次。
     */
    onAudioQuality:
        /** @en
         * @param uid User ID of the speaker.
         * @param quality Audio quality of the user: [QUALITY_TYPE]{@link agora.QUALITY_TYPE}.
         * @param delay Time delay (ms) of sending the audio packet from the sender to the receiver, including the time delay of
         * audio sampling pre-processing, transmission, and the jitter buffer.
         * @param lost Packet loss rate (%) of the audio packet sent from the sender to the receiver.
         */
        /** @cn
         * @param uid 用户 ID，指定是谁发的音频流。
         * @param quality 语音质量，详见: [QUALITY_TYPE]{@link agora.QUALITY_TYPE} 。
         * @param delay 音频包从发送端到接收端的延迟（毫秒）。包括声音采样前处理、网络传输、网络抖动缓冲引起的延迟。
         * @param lost 音频包从发送端到接收端的丢包率 (%)。
         */
        (uid: number, quality: agora.QUALITY_TYPE, delay: number, lost: number) => void

    /** @en
     * Reports the statistics of the current call.
     *
     * The SDK triggers this callback once every two seconds after the user joins the channel.
     */
    /** @cn
     * 当前通话统计回调。
     * SDK 定期向 App 报告当前通话的统计信息，每两秒触发一次。
     */
    onRtcStats:
        /** @en
         * @param stats Statistics of the Agora engine: [RtcStats]{@link agora.RtcStats}.
         */
        /** @cn
         * @param stats RTC 引擎统计数据: [RtcStats]{@link agora.RtcStats}。
         */
        (stats: agora.RtcStats) => void

    /** @en
     * Reports the last mile network quality of each user in the channel once every two seconds.
     *
     * Last mile refers to the connection between the local device and Agora edge server. This callback reports once every two
     * seconds the last mile network conditions of each user in the channel. If a channel includes multiple users, the SDK triggers
     * this callback as many times.
     */
    /** @cn
     * 通话中每个用户的网络上下行 last mile 质量报告回调。
     * 该回调描述每个用户在通话中的 last mile 网络状态，其中 last mile 是指设备到 Agora 边缘服务器的网络状态。
     * 该回调每 2 秒触发一次。如果远端有多个用户，该回调每 2 秒会被触发多次。
     */
    onNetworkQuality:
        /** @en
         * @param uid User ID. The network quality of the user with this `uid` is reported. If `uid` is 0, the local network quality
         * is reported.
         * @param txQuality Uplink transmission quality rating of the user in terms of the transmission bitrate, packet loss rate,
         * average RTT (Round-Trip Time), and jitter of the uplink network. `txQuality` is a quality rating helping you understand
         * how well the current uplink network conditions can support the selected VideoEncoderConfiguration. For example, a 1000
         * Kbps uplink network may be adequate for video frames with a resolution of 640 * 480 and a frame rate of 15 fps in the
         * `LIVE_BROADCASTING` profile, but may be inadequate for resolutions higher than 1280 * 720.
         * See [QUALITY_TYPE]{@link agora.QUALITY_TYPE}.
         * @param rxQuality Downlink network quality rating of the user in terms of the packet loss rate, average RTT, and jitter
         * of the downlink network. See [QUALITY_TYPE]{@link agora.QUALITY_TYPE}.
         */
        /** @cn
         * @param uid 用户 ID。表示该回调报告的是持有该 ID 的用户的网络质量。当 uid 为 0 时，返回的是本地用户的网络质量。
         * @param txQuality 该用户的上行网络质量，基于发送码率、上行丢包率、平均往返时延和网络抖动计算。该值代表当前的上行网络质量，
         * 帮助判断是否可以支持当前设置的视频编码属性。假设上行码率是 1000 Kbps，那么支持直播场景下 640 &times; 480 的分辨率、15 fps 的帧率没有问题，
         * 但是支持 1280 &times; 720 的分辨率就会有困难。详见 [QUALITY_TYPE]{@link agora.QUALITY_TYPE} 。
         * @param rxQuality 该用户的下行网络质量，基于下行网络的丢包率、平均往返延时和网络抖动计算。详见 [QUALITY_TYPE]{@link agora.QUALITY_TYPE} 。
         */
        (uid: number, txQuality: agora.QUALITY_TYPE, rxQuality: agora.QUALITY_TYPE) => void

    /** @en
     * @ignore
     * Reports the statistics of the local video stream.
     *
     * The SDK triggers this callback once every two seconds for each
     * user/host. If there are multiple users/hosts in the channel, the SDK
     * triggers this callback as many times.
     *
     * @note If you have called the [enableDualStreamMode]{@link agora.enableDualStreamMode} method, the
     * [onLocalVideoStats]{@link agora.onLocalVideoStats} callback reports the statistics of the high-video
     * stream (high bitrate, and high-resolution video stream).
     */
    /** @cn
     * @ignore
     * 本地视频流统计信息回调。
     * 该回调描述本地设备发送视频流的统计信息，每 2 秒触发一次。
     * 
     * @note 如果你调用了 [enableDualStreamMode]{@link agora.enableDualStreamMode} 方法，该回调会报告视频大流的统计信息。
     */
    onLocalVideoStats:
        /** @en
         * @param stats Statistics of the local video stream. See [LocalVideoStats]{@link agora.LocalVideoStats}.
         */
        /** @cn
         * @param stats 本地视频流统计信息。详见: [LocalVideoStats]{@link agora.LocalVideoStats}。
         */
        (stats: agora.LocalVideoStats) => void

    /** @en
     * @ignore
     * Reports the statistics of the video stream from each remote user/host.
     *
     * The SDK triggers this callback once every two seconds for each remote
     * user/host. If a channel includes multiple remote users, the SDK
     * triggers this callback as many times.
     */
    /** @cn
     * @ignore
     * 通话中远端视频流的统计信息回调。
     *
     * 该回调描述远端用户在通话中端到端的视频流统计信息，
     * 针对每个远端用户/主播每 2 秒触发一次。如果远端同时存在多个用户/主播，
     * 该回调每 2 秒会被触发多次。
     */
    onRemoteVideoStats:
        /** @en
         * @param stats Statistics of the remote video stream. See [RemoteVideoStats]{@link agora.RemoteVideoStats}.
         */
        /** @cn
         * @param stats 远端视频统计数据。详见: [RemoteVideoStats]{@link agora.RemoteVideoStats} 。
         */
        (stats: agora.RemoteVideoStats) => void

    /** @en
     * Reports the statistics of the local audio stream.
     *
     * The SDK triggers this callback once every two seconds.
     */
    /** @cn
     * 通话中本地音频流的统计信息回调。
     *
     * 该回调描述本地设备发送音频流的统计信息。SDK 每 2 秒触发该回调一次。
     */
    onLocalAudioStats:
        /** @en
         * @param stats The statistics of the local audio stream. See [LocalAudioStats]{@link agora.LocalAudioStats}.
         */
        /** @cn
         * @param stats 本地音频统计数据。详见 [LocalAudioStats]{@link agora.LocalAudioStats}。
         */
        (stats: agora.LocalAudioStats) => void

    /** @en
     * Reports the statistics of the audio stream from each remote user/host.
     *
     * This callback replaces the [onAudioQuality]{@link AgoraRtcEvents.onAudioQuality} callback.
     *
     * The SDK triggers this callback once every two seconds for each remote user/host. If a channel includes multiple remote
     * users, the SDK triggers this callback as many times.
     */
    /** @cn
     * 通话中远端音频流的统计信息回调。用于取代  [onAudioQuality]{@link AgoraRtcEvents.onAudioQuality}  回调。
     * 该回调描述远端用户在通话中端到端的音频流统计信息。该回调函数针对每个发送音频流的远端用户/主播每 2 秒触发一次。如果远端有多个用户/主播发送音频流，
     * 该回调每 2 秒会被触发多次。
     */
    onRemoteAudioStats:
        /** @en
         * @param stats The statistics of the received remote audio streams. See [RemoteAudioStats]{@link agora.RemoteAudioStats}.
         */
        /** @cn
         * @param stats 接收到的远端音频统计数据，详细定义见: [RemoteAudioStats]{@link agora.RemoteAudioStats}。
         */
        (stats: agora.RemoteAudioStats) => void

    /** @en
     * Occurs when the local audio state changes.
     * This callback indicates the state change of the local audio stream,
     * including the state of the audio recording and encoding, and allows
     * you to troubleshoot issues when exceptions occur.
     *
     * @note
     * When the state is [LOCAL_AUDIO_STREAM_STATE_FAILED(3)]{@link agora.LOCAL_AUDIO_STREAM_STATE.LOCAL_AUDIO_STREAM_STATE_FAILED},
     * see the `error` parameter for details.
     */

    /** @cn
     * 本地音频状态发生改变回调。
     *
     * 本地音频的状态发生改变时（包括本地麦克风录制状态和音频编码状态），
     * SDK 会触发该回调报告当前的本地音频状态。在本地音频出现故障时，
     * 该回调可以帮助你了解当前音频的状态以及出现故障的原因，方便你排查问题。
     *
     * @note
     * 当状态为 [LOCAL_AUDIO_STREAM_STATE_FAILED]{@link agora.LOCAL_AUDIO_STREAM_STATE.LOCAL_AUDIO_STREAM_STATE_FAILED} (3) 时，
     * 你可以在 `error` 参数中查看返回的错误信息。
     */
    onLocalAudioStateChanged:
        /** @en
         * @param state State of the local audio. See [LOCAL_AUDIO_STREAM_STATE]{@link agora.LOCAL_AUDIO_STREAM_STATE}.
         * @param error The error information of the local audio. See [LOCAL_AUDIO_STREAM_ERROR]{@link agora.LOCAL_AUDIO_STREAM_ERROR}.
         */
        /** @cn
         * @param state 当前的本地音频状态。详见 [LOCAL_AUDIO_STREAM_STATE]{@link agora.LOCAL_AUDIO_STREAM_STATE} 。
         * @param error 本地音频出错原因。详见 [LOCAL_AUDIO_STREAM_ERROR]{@link agora.LOCAL_AUDIO_STREAM_ERROR} 。
         */
        (state: agora.LOCAL_AUDIO_STREAM_STATE, error: agora.LOCAL_AUDIO_STREAM_ERROR) => void

    /** @en
     * Occurs when the remote audio state changes.
     *
     * This callback indicates the state change of the remote audio stream.
     *
     * @note This callback does not work properly when the number of users (in the `COMMUNICATION` profile) or hosts (in the
     * `LIVE_BROADCASTING` profile) in the channel exceeds 17.
     */
    /** @cn
     * 远端音频流状态发生改变回调。
     * 远端用户/主播音频状态发生改变时，SDK 会触发该回调向本地用户报告当前的远端音频流状态。
     * @note 频道内的用户（通信场景）或主播（直播场景）人数超过 17 人时，该回调不生效。
     */
    onRemoteAudioStateChanged:
        /** @en
         * @param uid ID of the remote user whose audio state changes.
         * @param state State of the remote audio. See [REMOTE_AUDIO_STATE]{@link agora.REMOTE_AUDIO_STATE}.
         * @param reason The reason of the remote audio state change.
         * See [REMOTE_AUDIO_STATE_REASON]{@link agora.REMOTE_AUDIO_STATE_REASON}.
         * @param elapsed Time elapsed (ms) from the local user calling the [joinChannel]{@link agora.joinChannel} method until the SDK
         * triggers this callback.
         */
        /** @cn
         * @param uid 发生音频状态改变的远端用户 ID。
         * @param state 远端音频流状态。 详见 [REMOTE_AUDIO_STATE]{@link agora.REMOTE_AUDIO_STATE} 。
         * @param reason 远端音频流状态改变的具体原因。详见 [REMOTE_AUDIO_STATE_REASON]{@link agora.REMOTE_AUDIO_STATE_REASON} 。
         * @param elapsed 从本地用户调用  [joinChannel]{@link agora.joinChannel} 方法到发生本事件经历的时间，单位为 ms。
         */
        (uid: number, state: agora.REMOTE_AUDIO_STATE, reason: agora.REMOTE_AUDIO_STATE_REASON, elapsed: number) => void

    /** @en
     * Occurs when the audio publishing state changes.
     *
     * This callback indicates the publishing state change of the local audio stream.
     */
    /** @cn
     * 音频发布状态改变回调。
     */
    onAudioPublishStateChanged:
        /** @en
         * @param channel The channel name.
         * @param oldState The previous publishing state. For details, see [STREAM_PUBLISH_STATE]{@link agora.STREAM_PUBLISH_STATE}.
         * @param newState The current publishing state. For details, see [STREAM_PUBLISH_STATE]{@link agora.STREAM_PUBLISH_STATE}.
         * @param elapseSinceLastState The time elapsed (ms) from the previous state to the current state.
         */
        /** @cn
         * @param channel 频道名。
         * @param oldState 之前的发布状态，详见 [STREAM_PUBLISH_STATE]{@link agora.STREAM_PUBLISH_STATE}
         * @param newState 当前的发布状态，详见 [STREAM_PUBLISH_STATE]{@link agora.STREAM_PUBLISH_STATE}
         * @param elapseSinceLastState 两次状态变化时间间隔（毫秒）。
         */
        (channel: string, oldState: agora.STREAM_PUBLISH_STATE, newState: agora.STREAM_PUBLISH_STATE, elapseSinceLastState: number) => void

    /** @en
     * @ignore
     * Occurs when the video publishing state changes.
     *
     * This callback indicates the publishing state change of the local video stream.
     */
    /** @cn
     * @ignore
     * 视频发布状态改变回调。
     */
    onVideoPublishStateChanged:
        /** @en
         * @param channel The channel name.
         * @param oldState The previous publishing state. For details, see [STREAM_PUBLISH_STATE]{@link agora.STREAM_PUBLISH_STATE}.
         * @param newState The current publishing state. For details, see [STREAM_PUBLISH_STATE]{@link agora.STREAM_PUBLISH_STATE}.
         * @param elapseSinceLastState The time elapsed (ms) from the previous state to the current state.
         */
        /** @cn
         * @param channel 频道名。
         * @param oldState 之前的发布状态，详见 [STREAM_PUBLISH_STATE]{@link agora.STREAM_PUBLISH_STATE}
         * @param newState 当前的发布状态，详见 [STREAM_PUBLISH_STATE]{@link agora.STREAM_PUBLISH_STATE}
         * @param elapseSinceLastState 两次状态变化时间间隔（毫秒）。
         */
        (channel: string, oldState: agora.STREAM_PUBLISH_STATE, newState: agora.STREAM_PUBLISH_STATE, elapseSinceLastState: number) => void

    /** @en
     * Occurs when the audio subscribing state changes.
     *
     * This callback indicates the subscribing state change of a remote audio stream.
     */
    /** @cn
     * 音频订阅状态发生改变回调。
     */
    onAudioSubscribeStateChanged:
        /** @en
         * @param channel The channel name.
         * @param uid The ID of the remote user.
         * @param oldState The previous subscribing state. For details, see [STREAM_SUBSCRIBE_STATE]{@link agora.STREAM_SUBSCRIBE_STATE}.
         * @param newState The current subscribing state. For details, see [STREAM_SUBSCRIBE_STATE]{@link agora.STREAM_SUBSCRIBE_STATE}.
         * @param elapseSinceLastState The time elapsed (ms) from the previous state to the current state.
         */
        /** @cn
         * @param channel 频道名。
         * @param uid 远端用户的 ID。
         * @param oldState 之前的订阅状态，详见 [STREAM_SUBSCRIBE_STATE]{@link agora.STREAM_SUBSCRIBE_STATE}
         * @param newState 当前的订阅状态，详见 [STREAM_SUBSCRIBE_STATE]{@link agora.STREAM_SUBSCRIBE_STATE}
         * @param elapseSinceLastState 两次状态变化时间间隔（毫秒）。
         */
        (channel: string, uid: number, oldState: agora.STREAM_SUBSCRIBE_STATE, newState: agora.STREAM_SUBSCRIBE_STATE, elapseSinceLastState: number) => void

    /** @en
     * @ignore
     * Occurs when the audio subscribing state changes.
     *
     * This callback indicates the subscribing state change of a remote video stream.
     */
    /** @cn
     * @ignore
     * 视频订阅状态发生改变回调。
     */
    onVideoSubscribeStateChanged:
        /** @en
         * @param channel The channel name.
         * @param uid The ID of the remote user.
         * @param oldState The previous subscribing state. For details, see [STREAM_SUBSCRIBE_STATE]{@link agora.STREAM_SUBSCRIBE_STATE}.
         * @param newState The current subscribing state. For details, see [STREAM_SUBSCRIBE_STATE]{@link agora.STREAM_SUBSCRIBE_STATE}.
         * @param elapseSinceLastState The time elapsed (ms) from the previous state to the current state.
         */
        /** @cn
         * @param channel 频道名。
         * @param uid 远端用户的 ID。
         * @param oldState 之前的订阅状态，详见 [STREAM_SUBSCRIBE_STATE]{@link agora.STREAM_SUBSCRIBE_STATE}
         * @param newState 当前的订阅状态，详见 [STREAM_SUBSCRIBE_STATE]{@link agora.STREAM_SUBSCRIBE_STATE}
         * @param elapseSinceLastState 两次状态变化时间间隔（毫秒）。
         */
        (channel: string, uid: number, oldState: agora.STREAM_SUBSCRIBE_STATE, newState: agora.STREAM_SUBSCRIBE_STATE, elapseSinceLastState: number) => void

    /** @en
     * Reports the volume information of users.
     * 
     * By default, this callback is disabled. You can enable it by calling [enableAudioVolumeIndication]{@link agora.enableAudioVolumeIndication}. 
     * Once this callback is enabled and users send streams in the channel, the SDK triggers the `onAudioVolumeIndication` callback at 
     * the time interval set in `enableAudioVolumeIndication`.
     * 
     * The SDK triggers two independent `onAudioVolumeIndication` callbacks simultaneously, which separately report the volume 
     * information of the local user who sends a stream and the remote users (up to three) whose instantaneous volumes are the highest.
     * 
     * @note After you enable this callback, calling [muteLocalAudioStream]{@link agora.muteLocalAudioStream} affects the SDK's behavior 
     * as follows:
     * 
     * - If the local user calls `muteLocalAudioStream`, the SDK stops triggering the local user's callback.
     * - 20 seconds after a remote user whose volume is one of the three highest calls `muteLocalAudioStream`, the remote users' callback 
     * excludes this remote user's information; 20 seconds after all remote users call muteLocalAudioStream, the SDK stops triggering the 
     * remote users' callback.
     */
    /** @cn
     * 用户音量提示回调。
     * 该回调默认禁用，你可以通过 [enableAudioVolumeIndication]{@link agora.enableAudioVolumeIndication} 开启。开启后，只要频道内有发流用户，
     * SDK 会在加入频道后按 `enableAudioVolumeIndication `中设置的时间间隔触发 `onAudioVolumeIndication` 回调。每次会触发两个 
     * `onAudioVolumeIndication` 回调，一个报告本地发流用户的音量相关信息，另一个报告瞬时音量最高的远端用户（最多 3 位）的音量相关信息。
     * 
     * @note 启用该功能后，如果有用户将自己静音（调用了 [muteLocalAudioStream]{@link agora.muteLocalAudioStream}），SDK 行为会受如下影响：
     * - 本地用户静音后，SDK 立即停止报告本地用户的音量提示回调。
     * - 瞬时音量最高的远端用户静音后 20 秒，远端的音量提示回调中将不再包含该用户；如果远端所有用户都将自己静音，20 秒后 SDK 停止报告远端用户的音量提示回调。
     */
    onAudioVolumeIndication:
        /** @en
         * @param speakers The volume information of users. See [AudioVolumeInfo]{@link agora.AudioVolumeInfo}.
         * An empty speakers array in the callback indicates that no remote user is in the channel or sending a stream at the moment.
         * @param speakerNumber Total number of users.
         * - In the local user’s callback, when the local user sends a stream: `speakerNumber` = 1.
         * - In the remote users' callback, the value ranges between 0 and 3. If the number of remote users who send streams is 
         * greater than or equal to three, `speakerNumber` = 3.
         * @param totalVolume Total volume after audio mixing. The value ranges between 0 (lowest volume) and 255 (highest volume).
         * - In the local user’s callback, `totalVolume` is the volume of the local user who sends a stream.
         * - In the remote users' callback, `totalVolume` is the sum of the volume of all remote users (at most three) whose 
         * instantaneous volumes are the highest.
         * 
         * If the user calls [startAudioMixing]{@link agora.startAudioMixing}, `totalVolume` is the sum of the voice volume and audio-mixing volume.
         */
        /** @cn
         * @param speakers 用户音量信息，详见 [AudioVolumeInfo]{@link agora.AudioVolumeInfo} 数组。
         * 如果 `speakers` 为空，则表示远端用户不发流或没有远端用户。
         * @param speakerNumber 用户数量。
         * - 在本地用户的回调中，只要本地用户在发流，`speakerNumber` 始终为 `1`。
         * - 在远端用户的回调中，`speakerNumber `取值范围为 `[0,3]`。如果远端发流用户数量大于 3，则此回调中 `speakerNumber` 值为 `3`。
         * @param totalVolume 混音后的总音量，取值范围为 [0,255]。
         * - 在本地用户的回调中，`totalVolume` 为本地发流用户的音量。
         * - 在远端用户的回调中，`totalVolume` 为瞬时音量最高的远端用户（最多 3 位）混音后的总音量。
         * 
         * 如果用户调用了 [startAudioMixing]{@link agora.startAudioMixing}，则 `totalVolume` 为混音后的音量。
         */
        (speakers: agora.AudioVolumeInfo[], speakerNumber: number, totalVolume: number) => void

    /** @en
     * Occurs when the most active speaker is detected.
     * 
     * After a successful call of [enableAudioVolumeIndication]{@link agora.enableAudioVolumeIndication}, the SDK continuously 
     * determines which remote user has the loudest volume. The remote user determined to be the loudest and most continuous speaker 
     * is considered the most active user.
     * 
     * When the number of users is more than or equal to two and an active speaker exists, the SDK triggers this callback and reports 
     * the `uid` of the most active speaker.
     * 
     * - If the most active speaker is always the same user, the SDK triggers this callback only once.
     * - If the most active speaker changes to another user, the SDK triggers this callback again and reports the `uid` of the new 
     * active speaker.
     */
    /** @cn
     * 监测到最活跃用户回调。
     * 成功调用  [enableAudioVolumeIndication]{@link agora.enableAudioVolumeIndication}  后，SDK 会持续监测音量最大的远端用户，并统计该用户
     * 被判断为音量最大者的次数。当前时间段内，该次数累积最多的远端用户为最活跃的用户。
     * 
     * 当频道内用户数量大于或等于 2 且有活跃用户时，SDK 会触发该回调并报告最活跃用户的 `uid`。
     * - 如果最活跃用户一直是同一位用户，则 SDK 不会再次触发 `onActiveSpeaker` 回调。
     * - 如果最活跃用户有变化，则 SDK 会再次触发该回调并报告新的最活跃用户的 `uid`。
     * @param uid 远端最活跃用户的 ID。
     */
    onActiveSpeaker:
        /** @en
         * @param uid User ID of the active speaker. A `uid` of 0 represents the local user.
         */
        /** @cn
         * @param uid 远端最活跃用户的 ID。
         */
        (uid: number) => void

    /** @en
     * @ignore
     * Occurs when the video stops playing.
     *
     * @deprecated This method is deprecated. Use `LOCAL_VIDEO_STREAM_STATE_STOPPED(0)` in the
     * [onLocalVideoStateChanged]{@link AgoraRtcEvents.onLocalVideoStateChanged} callback instead.
     *
     * The application can use this callback to change the configuration of the view (for example, displaying other pictures in the
     * view) after the video stops playing.
     */
    /** @cn
     * @ignore
     * 视频功能已停止回调。
     * @deprecated 请改用  [onLocalVideoStateChanged]{@link AgoraRtcEvents.onLocalVideoStateChanged}  回调中的 
     * `LOCAL_VIDEO_STREAM_STATE_STOPPED(0)`。
     * 提示视频功能已停止。 App 如需在停止视频后对 view 做其他处理（比如显示其他画面），可以在这个回调中进行。
     */
    onVideoStopped: () => void

    /** @en
     * @ignore
     * Occurs when the first local video frame is displayed/rendered on the local video view.
     */
    /** @cn
     * @ignore
     * 已显示本地视频首帧回调。
     * 本地视频首帧显示在本地视图上时，SDK 会触发此回调。
     */
    onFirstLocalVideoFrame:
        /** @en
         * @param width Width (px) of the first local video frame.
         * @param height Height (px) of the first local video frame.
         * @param elapsed Time elapsed (ms) from the local user calling the [joinChannel]{@link agora.joinChannel} method until the
         * SDK triggers this callback. If you call the [startPreview]{@link agora.startPreview} method before calling the `joinChannel`
         * method, then `elapsed` is the time elapsed from calling the `startPreview` method until the SDK triggers this callback.
         */
        /** @cn
         * @param width 本地渲染视频的宽 (px) 。
         * @param height 本地渲染视频的高 (px)。
         * @param elapsed 从调用  [joinChannel]{@link agora.joinChannel}  到发生此事件过去的时间（毫秒）。如果在 
         * [joinChannel]{@link agora.joinChannel} 前调用了 [startPreview]{@link agora.startPreview}，则是从 
         * [startPreview]{@link agora.startPreview} 到发生此事件过去的时间。
         */
        (width: number, height: number, elapsed: number) => void

    /** @en
     * @ignore
     * Occurs when the first video frame is published.
     *
     * The SDK triggers this callback under one of the following circumstances:
     * - The local client enables the video module and calls [joinChannel]{@link agora.joinChannel} successfully.
     * - The local client calls [muteLocalVideoStream(true)]{@link agora.muteLocalVideoStream} and
     * [muteLocalVideoStream(false)]{@link agora.muteLocalVideoStream} in sequence.
     * - The local client calls [disableVideo]{@link agora.disableVideo} and [enableVideo]{@link agora.enableVideo} in sequence.
     */
    /** @cn
     * 已发布本地视频首帧回调。
     * 
     * SDK 会在以下三种时机触发该回调：
     * - 开启本地视频的情况下，调用  [joinChannel]{@link agora.joinChannel}  成功加入频道后。
     * - 调用  [muteLocalVideoStream(true)]{@link agora.muteLocalVideoStream} ，再调用 
     * [muteLocalVideoStream(false)]{@link agora.muteLocalVideoStream} 后。
     * - 调用  [disableVideo]{@link agora.disableVideo} ，再调用  [enableVideo]{@link agora.enableVideo}  后。
     */
    onFirstLocalVideoFramePublished:
        /** @en
         * @param elapsed The time elapsed (ms) from the local client calling [joinChannel]{@link agora.joinChannel} until the SDK
         * triggers this callback.
         */
        /** @cn
         * @param elapsed 从调用  [joinChannel]{@link agora.joinChannel}  方法到触发该回调的时间间隔（毫秒）。
         */
        (elapsed: number) => void

    /** @en
     * @ignore
     * Occurs when the first remote video frame is received and decoded.
     *
     * @deprecated This callback is deprecated and replaced by the [onRemoteVideoStateChanged]{@link agora.onRemoteVideoStateChanged()}
     * callback with the following parameters:
     * - [REMOTE_VIDEO_STATE_STARTING(1)]{@link agora.REMOTE_VIDEO_STATE.REMOTE_VIDEO_STATE_STARTING}
     * - [REMOTE_VIDEO_STATE_DECODING(2)]{@link agora.REMOTE_VIDEO_STATE.REMOTE_VIDEO_STATE_DECODING}
     *
     * This callback is triggered in either of the following scenarios:
     *
     * - The remote user joins the channel and sends the video stream.
     * - The remote user stops sending the video stream and re-sends it after 15 seconds. Reasons for such an interruption include:
     *  <ul><li>The remote user leaves the channel.</li>
     *  <li>The remote user drops offline.</li>
     *  <li>The remote user calls the [muteLocalVideoStream]{@link agora.muteLocalVideoStream} method to stop sending the video
     * stream.</li>
     *  <li>The remote user calls the [disableVideo]{@link agora.disableVideo} method to disable video.</li></ul>
     *
     * The application can configure the user view settings in this callback.
     */
    /** @cn
     * @ignore
     * 已接收到远端视频并完成解码回调。
     *
     * @deprecated 该回调已被废弃，请改用  [onRemoteVideoStateChanged]{@link agora.onRemoteVideoStateChanged}  回调的：
     * - [REMOTE_VIDEO_STATE_STARTING]{@link agora.REMOTE_VIDEO_STATE.REMOTE_VIDEO_STATE_STARTING} (1)。
     * - [REMOTE_VIDEO_STATE_DECODING]{@link agora.REMOTE_VIDEO_STATE.REMOTE_VIDEO_STATE_DECODING} (2)。
     *
     * 引擎收到第一帧远端视频流并解码成功时，触发此调用。
     * App 可在此回调中设置该用户的 view。有两种情况：
     * - 远端用户首次上线后发送视频。
     * - 远端用户视频离线再上线后发送视频。出现这种中断的可能原因包括：
     *  - 远端用户离开频道。
     *  - 远端用户掉线。
     *  - 远端用户调用  [muteLocalVideoStream]{@link agora.muteLocalVideoStream}  方法停止发送本地视频流。
     * - 远端用户调用  [disableVideo]{@link agora.disableVideo}  方法关闭视频模块。
     */
    onFirstRemoteVideoDecoded:
        /** @en
         * @param uid User ID of the remote user sending the video stream.
         * @param width Width (px) of the video stream.
         * @param height Height (px) of the video stream.
         * @param elapsed Time elapsed (ms) from the local user calling the [joinChannel]{@link agora.joinChannel} method until the SDK
         * triggers this callback.
         */
        /** @cn
         * @param uid 用户 ID，指定是哪个用户的视频流。
         * @param width 视频流宽（px）。
         * @param height 视频流高（px）。
         * @param elapsed 从本地调用  [joinChannel]{@link agora.joinChannel}  开始到该回调触发的延迟（毫秒)。
         */
        (uid: number, width: number, height: number, elapsed: number) => void

    /** @en
     * @ignore
     * Occurs when the first remote video frame is rendered.
     *
     * The SDK triggers this callback when the first frame of the remote video is displayed in the user's video window.
     * The application can retrieve the time elapsed from a user joining the channel until the first video frame is displayed.
     */
    /** @cn
     * @ignore
     * 已显示首帧远端视频回调。
     * 第一帧远端视频显示在视图上时，触发此调用。 App 可在此调用中获知出图时间（elapsed）。
     */
    onFirstRemoteVideoFrame:
        /** @en
         * @param uid User ID of the remote user sending the video stream.
         * @param width Width (px) of the video frame.
         * @param height Height (px) of the video stream.
         * @param elapsed Time elapsed (ms) from the local user calling the [joinChannel]{@link agora.joinChannel} method until the SDK
         * triggers this callback.
         */
        /** @cn
         * @param uid 用户 ID，指定是哪个用户的视频流。
         * @param width 视频流宽（px）。
         * @param height 视频流高（px）。
         * @param elapsed 从本地调用  [joinChannel]{@link agora.joinChannel}  到发生此事件过去的时间（毫秒)。
         */
        (uid: number, width: number, height: number, elapsed: number) => void

    /** @en
     * Occurs when a remote user's audio stream playback pauses/resumes.
     *
     * @deprecated This method is deprecated, use the  [onRemoteAudioStateChanged]{@link AgoraRtcEvents.onRemoteAudioStateChanged}
     * callback instead.
     *
     * The SDK triggers this callback when the remote user stops or resumes sending the audio stream by calling the
     * [muteLocalAudioStream]{@link agora.muteLocalAudioStream} method.
     *
     * @note This callback does not work properly when the number of users (in the `COMMUNICATION` profile) or hosts (in the
     * `LIVE_BROADCASTING` profile) in the channel exceeds 17.
     */
    /** @cn
     * 远端用户静音回调。
     * @deprecated 该回调已废弃。请改用  [onRemoteAudioStateChanged]{@link AgoraRtcEvents.onRemoteAudioStateChanged} 提示有远端用户已将其
     * 音频流静音（或取消静音）。
     * 该回调是由远端用户调用  [muteLocalAudioStream]{@link agora.muteLocalAudioStream}  方法关闭或开启音频发送触发的。
     * @note 频道内的用户（通信场景）或主播（直播场景）人数超过 17 人时，该回调不生效。
     */
    onUserMuteAudio:
        /** @en
         * @param uid User ID of the remote user.
         * @param muted Whether the remote user's audio stream is muted/unmuted:
         * - true: Muted.
         * - false: Unmuted.
         */
        /** @cn
         * @param uid 用户 ID。
         * @param muted 该用户是否静音：
         * - true: 该用户已将音频静音；
         * - false: 该用户取消了音频静音。
         */
        (uid: number, muted: boolean) => void

    /** @en
     * @ignore
     * Occurs when a remote user's video stream playback pauses/resumes.
     *
     * You can also use the [onRemoteVideoStateChanged]{@link agora.onRemoteVideoStateChanged()} callback with the following
     * parameters:
     * - [REMOTE_VIDEO_STATE_STOPPED(0)]{@link agora.REMOTE_VIDEO_STATE.REMOTE_VIDEO_STATE_STOPPED} and
     * [REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED(5)]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED}.
     * - [REMOTE_VIDEO_STATE_DECODING]{@link agora.REMOTE_VIDEO_STATE.REMOTE_VIDEO_STATE_DECODING} (2) and
     * [REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED(6)]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED}.
     *
     * The SDK triggers this callback when the remote user stops or resumes sending the video stream by calling the
     * [muteLocalVideoStream]{@link agora.muteLocalVideoStream} method.
     *
     * @note This callback does not work properly when the number of users (in the `COMMUNICATION` profile) or hosts (in the
     * `LIVE_BROADCASTING` profile) in the channel exceeds 17.
     */
    /** @cn
     * @ignore
     * 远端用户暂停/恢复发送视频流回调。
     * @deprecated 该回调已废弃。你也可以使用
     *  [onRemoteVideoStateChanged]{@link agora.onRemoteVideoStateChanged()}  回调的：
     * - [REMOTE_VIDEO_STATE_STOPPED]{@link agora.REMOTE_VIDEO_STATE_STOPPED} (0) 和
     * [REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED]{@link agora.REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED} (5) 。
     * - [REMOTE_VIDEO_STATE_DECODING]{@link agora.REMOTE_VIDEO_STATE_DECODING} (2) 和
     * [REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED]{@link agora.REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED} (6)。
     *
     * 该回调是由远端用户调用  [muteLocalVideoStream]{@link agora.muteLocalVideoStream     }  方法关闭或开启视频发送触发的。
     *
     * @note 频道内的用户（通信场景）或主播（直播场景）人数超过 17 人时，该回调不生效。
     */
    onUserMuteVideo:
        /** @en
         * @param uid User ID of the remote user.
         * @param muted Whether the remote user's video stream playback is paused/resumed:
         * - true: Paused.
         * - false: Resumed.
         */
        /** @cn
         * @param uid 远端用户 ID。
         * @param muted 该用户是否暂停发送其视频流
         * - true: 该用户已暂停发送其视频流；
         * - false: 该用户已恢复发送其视频流。
         */
        (uid: number, muted: boolean) => void

    /** @en
     * @ignore
     * Occurs when a specific remote user enables/disables the video
     * module.
     *
     * @deprecated This callback is deprecated and replaced by the
     * [onRemoteVideoStateChanged]{@link agora.onRemoteVideoStateChanged} callback with the following parameters:
     * - [REMOTE_VIDEO_STATE_STOPPED]{@link agora.REMOTE_VIDEO_STATE.REMOTE_VIDEO_STATE_STOPPED} (0) and
     * [REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED} (5).
     * - [REMOTE_VIDEO_STATE_DECODING]{@link agora.REMOTE_VIDEO_STATE.REMOTE_VIDEO_STATE_DECODING} (2) and
     * [REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED} (6).
     *
     * Once the video module is disabled, the remote user can only use a
     * voice call. The remote user cannot send or receive any video from
     * other users.
     *
     * The SDK triggers this callback when the remote user enables or disables
     * the video module by calling the
     * [enableVideo]{@link agora.enableVideo} or [disableVideo]{@link agora.disableVideo} method.
     *
     * @note This callback returns invalid when the number of users in a
     * channel exceeds 17.
     */
    /** @cn
     * @ignore
     * 远端用户开关本地视频采集回调。
     *
     * @deprecated 该回调已被废弃，请改用  [onRemoteVideoStateChanged]{@link agora.onRemoteVideoStateChanged} 回调的：
     * - [REMOTE_VIDEO_STATE_STOPPED]{@link agora.REMOTE_VIDEO_STATE.REMOTE_VIDEO_STATE_STOPPED} (0) 和
     * [REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED} (5)。
     * - [REMOTE_VIDEO_STATE_DECODING]{@link agora.REMOTE_VIDEO_STATE.REMOTE_VIDEO_STATE_DECODING} (2) 和
     * [REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED} (6)。
     *
     * 提示有远端用户开关了本地视频采集。关闭视频功能是指该用户只能进行语音通话，不能显示、
     * 发送自己的视频，也不能接收、显示别人的视频。
     * 该回调是由远端用户调用  [enableVideo]{@link agora.enableVideo} 或 [disableVideo]{@link agora.disableVideo} 方法开启或关闭视频模块触发的。
     */
    onUserEnableVideo:
        /** @en
         * @param uid User ID of the remote user.
         * @param enabled Whether the remote user enables/disables the video
         * module:
         * - true: Enable. The remote user can enter a video session.
         * - false: Disable. The remote user can only enter a voice session, and
         * cannot send or receive any video stream.
         */
        /** @cn
         * @param uid 用户 ID，提示是哪个用户的视频流。
         * @param enabled
         * - true: 该用户已启用了视频功能。启用后，该用户可以进行视频通话或直播。
         * - false: 该用户已关闭了视频功能。关闭后，该用户只能进行语音通话或直播，不能显示、
         * 发送自己的视频，也不能接收、显示别人的视频。
         */
        (uid: number, enabled: boolean) => void

    /** @en
     * @ignore
     * Occurs when the audio device state changes.
     *
     * This callback notifies the application that the system's audio device state is changed. For example, a headset is
     * unplugged from the device.
     */
    /** @cn
     * @ignore
     * 音频设备变化回调。
     * 提示系统音频设备状态发生改变，比如耳机被拔出。
     */
    onAudioDeviceStateChanged:
        /** @en
         * @param deviceId The device ID.
         * @param deviceType Device type: [MEDIA_DEVICE_TYPE]{@link agora.MEDIA_DEVICE_TYPE}.
         * @param deviceState Device state: [MEDIA_DEVICE_STATE_TYPE]{@link agora.MEDIA_DEVICE_STATE_TYPE}.
         */
        /** @cn
         * @param deviceId 设备 ID。
         * @param deviceType 设备类型定义: [MEDIA_DEVICE_TYPE]{@link agora.MEDIA_DEVICE_TYPE} 。
         * @param deviceState 设备状态定义: [MEDIA_DEVICE_STATE_TYPE]{@link agora.MEDIA_DEVICE_STATE_TYPE} 。
         */
        (deviceId: string, deviceType: agora.MEDIA_DEVICE_TYPE, deviceState: agora.MEDIA_DEVICE_STATE_TYPE) => void

    /** @en
     * @ignore
     * Occurs when the volume of the playback device, microphone, or application changes.
     */
    /** @cn
     * @ignore
     * 回放、录音设备、或 App 的音量发生改变。
     */
    onAudioDeviceVolumeChanged:
        /** @en
         * @param deviceType Device type: [MEDIA_DEVICE_TYPE]{@link agora.MEDIA_DEVICE_TYPE}.
         * @param volume Volume of the device. The value ranges between 0 and 255.
         * @param muted
         * - true: The audio device is muted.
         * - false: The audio device is not muted.
         */
        /** @cn
         * @param deviceType 设备类型定义: [MEDIA_DEVICE_TYPE]{@link agora.MEDIA_DEVICE_TYPE} 。
         * @param volume 音量：范围 [0,255]。
         * @param muted
         * - true: 音频设备已被静音；
         * - false: 音频设备未被静音。
         */
        (deviceType: agora.MEDIA_DEVICE_TYPE, volume: number, muted: boolean) => void

    /** @en
     * @ignore
     * Occurs when the camera turns on and is ready to capture the video.
     *
     * @deprecated This method is deprecated. Use
     * [LOCAL_VIDEO_STREAM_STATE_CAPTURING(1)]{@link agora.LOCAL_VIDEO_STREAM_STATE.LOCAL_VIDEO_STREAM_STATE_CAPTURING}
     * in the [onLocalVideoStateChanged]{@link AgoraRtcEvents.onLocalVideoStateChanged} callback instead.
     *
     * If the camera fails to turn on, fix the error reported in the [onError]{@link AgoraRtcEvents.onError} callback.
     */
     /** @cn
      * @ignore
      * @deprecated 摄像头就绪回调。
      * 提示已成功打开摄像头，可以开始捕获视频。如果摄像头打开失败，可在  [onError]{@link AgoraRtcEvents.onError}  中处理相应错误。
      * 该回调已废弃。请改用  [onLocalVideoStateChanged]{@link AgoraRtcEvents.onLocalVideoStateChanged}  回调中的 
      * [LOCAL_VIDEO_STREAM_STATE_CAPTURING]{@link agora.LOCAL_VIDEO_STREAM_STATE.LOCAL_VIDEO_STREAM_STATE_CAPTURING} (1)。
      */
    onCameraReady: () => void

    /** @en
     * @ignore
     * Occurs when the camera focus area changes.
     *
     * The SDK triggers this callback when the local user changes the camera focus position by calling the
     * `setCameraFocusPositionInPreview` method.
     * @note This callback is for Android and iOS only.
     */
    /** @cn
     * @ignore
     * 相机对焦区域已改变回调。
     * 该回调表示相机的对焦区域发生了改变。
     * 该回调是由本地用户调用 setCameraFocusPositionInPreview 方法改变对焦位置触发的。
     * 
     * @note 该回调只适用于 Android 和 iOS 平台。
     */
    onCameraFocusAreaChanged:
        /** @en
         * @param x x coordinate of the changed camera focus area.
         * @param y y coordinate of the changed camera focus area.
         * @param width Width of the changed camera focus area.
         * @param height Height of the changed camera focus area.
         */
        /** @cn
         * @param x 发生改变的对焦区域的 x 坐标。
         * @param y 发生改变的对焦区域的 y 坐标。
         * @param width 发生改变的对焦区域的宽度。
         * @param height 发生改变的对焦区域的高度。
         */
        (x: number, y: number, width: number, height: number) => void

    /** @en
     * @ignore
     * Reports the face detection result of the local user. Applies to Android and iOS only.
     *
     * Once you enable face detection by calling [enableFaceDetection]{@link agora.enableFaceDetection} (true), you can get the
     * following information on the local user in real-time:
     * - The width and height of the local video.
     * - The position of the human face in the local video.
     * - The distance between the human face and the device screen. This value is based on the fitting calculation of the local
     * video size and the position of the human face.
     *
     * @note
     * - If the SDK does not detect a face, it reduces the frequency of this callback to reduce power consumption on the local device.
     * - The SDK stops triggering this callback when a human face is in close proximity to the screen.
     * - On Android, the `distance` value reported in this callback may be slightly different from the actual distance. Therefore,
     * Agora does not recommend using it for accurate calculation.
     */
    /** @cn
     * @ignore
     * 报告本地人脸检测结果。仅适用于 Android 和 iOS 平台。
     *
     * 调用  [enableFaceDetection]{@link agora.enableFaceDetection} (true) 开启本地人脸检测后，你可以通过该回调实时获取以下人脸检测的信息：
     * - 摄像头采集的画面大小
     * - 人脸在画面中的位置
     * - 人脸距设备屏幕的距离
     *
     * 其中，人脸距设备屏幕的距离由 SDK 通过摄像头采集的画面大小和人脸在画面中的位置拟合计算得出。
     * @note
     * - 当检测到摄像头前没有人脸时，该回调触发频率会降低，以节省设备耗能。
     * - 当人脸距离设备屏幕过近时，SDK 不会触发该回调。
     * - Android 平台上，人脸距设备屏幕的距离（`distance`）值有一定误差，请不要用它进行精确计算。
     */
    onFacePositionChanged:
        /** @en
         * @param imageWidth The width (px) of the local video.
         * @param imageHeight The height (px) of the local video.
         * @param vecRectangle The position and size of the human face on the local video. See [Rectangle]{@link agora.Rectangle}
         * - `x`: The x coordinate (px) of the human face in the local video. Taking the top left corner of the captured video as the origin,
         * the x coordinate represents the relative lateral displacement of the top left corner of the human face to the origin.
         * - `y`: The y coordinate (px) of the human face in the local video. Taking the top left corner of the captured video as the origin,
         * the y coordinate represents the relative longitudinal displacement of the top left corner of the human face to the origin.
         * - `width`: The width (px) of the human face in the captured video.
         * - `height`: The height (px) of the human face in the captured video.
         * @param vecDistance The distance (cm) between the human face and the screen.
         * @param numFaces The number of faces detected. If the value is 0, it means that no human face is detected.
         */
        /** @cn
         * @param imageWidth 摄像头采集画面的宽度 (px)。
         * @param imageHeight 摄像头采集画面的高度 (px)。
         * @param vecRectangle 检测到的人脸信息：
         * - `x`：人脸在画面中的 x 坐标 (px)。以摄像头采集画面的左上角为原点，x 坐标为人脸左上角相对于原点的横向位移。
         * - `y`：人脸在画面中的 y 坐标 (px)。以摄像头采集画面的左上角为原点，y 坐标为人脸左上角相对原点的纵向位移。
         * - `width`：人脸在画面中的宽度 (px)。
         * - `height`：人脸在画面中的高度 (px)。
         * @param vecDistance 人脸距设备屏幕的距离 (cm)。
         * @param numFaces 检测的人脸数量。如果为 0，则表示没有检测到人脸。
         */
        (imageWidth: number, imageHeight: number, vecRectangle: agora.Rectangle[], vecDistance: number[], numFaces: number) => void

    /** @en
     * @ignore
     * Occurs when the camera exposure area changes.
     *
     * The SDK triggers this callback when the local user changes the camera exposure position by calling the
     * `setCameraExposurePosition` method.
     *
     * @note This callback is for Android and iOS only.
     */
    /** @cn
     * @ignore
     * 摄像头曝光区域已改变回调。
     * 该回调是由本地用户调用 `setCameraExposurePosition` 方法改变曝光位置触发的。
     * @note 该回调只适用于 Android 和 iOS 平台。
     */
    onCameraExposureAreaChanged:
        /** @en
         * @param x x coordinate of the changed camera exposure area.
         * @param y y coordinate of the changed camera exposure area.
         * @param width Width of the changed camera exposure area.
         * @param height Height of the changed camera exposure area.
         */
        /** @cn
         * @param x 发生改变的曝光区域的 x 坐标。
         * @param y 发生改变的曝光区域的 y 坐标。
         * @param width 发生改变的曝光区域的宽度。
         * @param height 发生改变的曝光区域的高度。
         */
        (x: number, y: number, width: number, height: number) => void

    /** @en
     * Occurs when the audio mixing file playback finishes.
     *
     * @deprecated This method is deprecated. Use [onAudioMixingStateChanged]{@link AgoraRtcEvents.onAudioMixingStateChanged} instead.
     *
     * You can start an audio mixing file playback by calling the [startAudioMixing]{@link agora.startAudioMixing} method.
     * The SDK triggers this callback when the audio mixing file playback finishes.
     *
     * If the `startAudioMixing` method call fails, an error code returns in the [onError]{@link AgoraRtcEvents.onError} callback.
     */
    /** @cn
     * 本地音乐文件播放已结束回调。
     * @deprecated 该回调已废弃。请改用 [onAudioMixingStateChanged]{@link AgoraRtcEvents.onAudioMixingStateChanged}。
     * 当调用  [startAudioMixing]{@link agora.startAudioMixing}  播放本地音乐文件结束后，会触发该回调。如果调用 
     * [startAudioMixing]{@link agora.startAudioMixing} 失败，会在  [onError]{@link AgoraRtcEvents.onError}  回调里返回错误码 。
     */
    onAudioMixingFinished: () => void

    /** @en
     * Occurs when the state of the local user's audio mixing file changes.
     * 
     * When the state of the audio mixing file changes, the SDK triggers this callback and reports the audio mixing status and 
     * the error code of the audio playback failure.
     * 
     * If the local audio mixing file does not exist, or if the SDK does not support the file format or cannot access the music 
     * file URL, the SDK returns [WARN_AUDIO_MIXING_OPEN_ERROR]{@link agora.WARN_AUDIO_MIXING_OPEN_ERROR} (701).
     */
    /** @cn
     * 本地用户的音乐文件播放状态已改变回调。
     * 该回调在音乐文件播放状态发生改变时触发，并报告当前的播放状态和错误码。
     * 如果本地音乐文件不存在、文件格式不支持或无法访问在线音乐文件 URL，SDK 会返回警告码 
     * [WARN_AUDIO_MIXING_OPEN_ERROR]{@link agora.WARN_AUDIO_MIXING_OPEN_ERROR} (701)。
     */
    onAudioMixingStateChanged:
        /** @en
         * @param state The state code. See [AUDIO_MIXING_STATE_TYPE]{@link agora.AUDIO_MIXING_STATE_TYPE}.
         * @param errorCode The error code. See [AUDIO_MIXING_ERROR_TYPE]{@link agora.AUDIO_MIXING_ERROR_TYPE}.
         */
        /** @cn
         * @param state 音乐文件播放状态，详见 [AUDIO_MIXING_STATE_TYPE]{@link agora.AUDIO_MIXING_STATE_TYPE}
         * @param errorCode 错误码，详见 [AUDIO_MIXING_ERROR_TYPE]{@link agora.AUDIO_MIXING_ERROR_TYPE}
         */
        (state: agora.AUDIO_MIXING_STATE_TYPE, errorCode: agora.AUDIO_MIXING_ERROR_TYPE) => void

    /** @en
     * Occurs when a remote user starts audio mixing.
     * When a remote user calls [startAudioMixing]{@link agora.startAudioMixing} to play the background music, the SDK reports
     * this callback.
     */
    /** @cn
     * 远端音乐文件播放已开始回调。
     * 当远端有用户调用  [startAudioMixing]{@link agora.startAudioMixing}  播放本地音乐文件，会触发该回调。
     */
    onRemoteAudioMixingBegin: () => void

    /** @en
     * Occurs when a remote user finishes audio mixing.
     */
    /** @cn
     * 远端音乐文件播放已结束回调。
     * 当远端有用户播放本地音乐文件结束，会触发该回调。
     */
    onRemoteAudioMixingEnd: () => void

    /** @en
     * Occurs when the local audio effect playback finishes.
     *
     * The SDK triggers this callback when the local audio effect file playback finishes.
     */
    /** @cn
     * 本地音效文件播放已结束回调。
     * 当播放音效结束后，会触发该回调。
     */
    onAudioEffectFinished:
        /** @en
         * @param soundId ID of the local audio effect. Each local audio effect has a unique ID.
         */
        /** @cn
         * @param soundId 指定音效的 ID。每个音效均有唯一的 ID。
         */
        (soundId: number) => void

    /** @en
     * Occurs when the SDK decodes the first remote audio frame for playback.
     *
     * @deprecated This callback is deprecated. Use [onRemoteAudioStateChanged]{@link AgoraRtcEvents.onRemoteAudioStateChanged} instead.
     *
     * This callback is triggered in either of the following scenarios:
     * - The remote user joins the channel and sends the audio stream.
     * - The remote user stops sending the audio stream and re-sends it after 15 seconds. Reasons for such an interruption include:
     *   - The remote user leaves channel.
     *   - The remote user drops offline.
     *   - The remote user calls the [muteLocalAudioStream]{@link agora.muteLocalAudioStream} method to stop sending the local
     * audio stream.
     *   - The remote user calls the [disableAudio]{@link agora.disableAudio} method to disable audio.
     */
    /** @cn
     * 已解码远端音频首帧的回调。
     * @deprecated 该回调已废弃。请改用  [onRemoteAudioStateChanged]{@link AgoraRtcEvents.onRemoteAudioStateChanged} SDK 完成远端音频首帧解码，
     * 并发送给音频模块用以播放时，会触发此回调。有两种情况：
     * - 远端用户首次上线后发送音频
     * - 远端用户音频离线再上线发送音频。音频离线指本地在 15 秒内没有收到音频包，可能有如下原因：
     *     - 远端用户离开频道
     *     - 远端用户掉线
     *     - 远端用户调用  [muteLocalAudioStream]{@link agora.muteLocalAudioStream}  方法停止发送音频流
     *     - 远端用户调用  [disableAudio]{@link agora.disableAudio}  方法关闭音频
     */
    onFirstRemoteAudioDecoded:
        /** @en
         * @param uid User ID of the remote user sending the audio stream.
         * @param elapsed Time elapsed (ms) from the local user calling the [joinChannel]{@link agora.joinChannel} method until the
         * SDK triggers this callback.
         */
        /** @cn
         * @param uid 远端用户 ID
         * @param elapsed 从本地用户调用  [joinChannel]{@link agora.joinChannel}  直至该回调触发的延迟，单位为毫秒。
         */
        (uid: number, elapsed: number) => void

    /** @en
     * @ignore
     * Occurs when the video device state changes.
     *
     * @note On a Windows device with an external camera for video capturing, the video disables once the external camera is
     * unplugged.
     */
    /** @cn
     * @ignore
     * 视频设备变化回调。
     * 该回调提示系统视频设备状态发生改变，比如被拔出或移除。如果设备已使用外接摄像头采集，外接摄像头被拔开后，视频会中断。
     */
    onVideoDeviceStateChanged:
        /** @en
         * @param deviceId The device ID of the video device that changes state.
         * @param deviceType Device type: [MEDIA_DEVICE_TYPE]{@link agora.MEDIA_DEVICE_TYPE}.
         * @param deviceState Device state: [MEDIA_DEVICE_STATE_TYPE]{@link agora.MEDIA_DEVICE_STATE_TYPE}.
         */
        /** @cn
         * @param deviceId 设备 ID。
         * @param deviceType 设备类型: [MEDIA_DEVICE_TYPE]{@link agora.MEDIA_DEVICE_TYPE} 。
         * @param deviceState 设备状态: [MEDIA_DEVICE_STATE_TYPE]{@link agora.MEDIA_DEVICE_STATE_TYPE} 。
         */
        (deviceId: string, deviceType: agora.MEDIA_DEVICE_TYPE, deviceState: agora.MEDIA_DEVICE_STATE_TYPE) => void

    /** @en
     * @ignore
     * Occurs when the local video stream state changes.
     *
     * This callback indicates the state of the local video stream, including camera capturing and video encoding, and allows you
     * to troubleshoot issues when exceptions occur.
     *
     * @note For some device models, the SDK will not trigger this callback when the state of the local video changes while
     * the local video capturing device is in use, so you have to make your own timeout judgment.
     */
    /** @cn
     * @ignore
     * 本地视频状态发生改变回调
     * 本地视频的状态发生改变时，SDK 会触发该回调返回当前的本地视频状态。
     * 在本地视频出现故障时，你可以通过该回调了解当前视频的状态以及出现故障的原因，方便排查问题。
     * @note 对某些机型而言，当本地视频采集设备正在使用中时，SDK 不会在本地视频状态发生改变时触发该回调，你需要自行做超时判断。
     */
    onLocalVideoStateChanged:
        /** @en
         * @param localVideoState State type [LOCAL_VIDEO_STREAM_STATE]{@link agora.LOCAL_VIDEO_STREAM_STATE}. When the state is
         * `LOCAL_VIDEO_STREAM_STATE_FAILED(3)`, see the `error` parameter for details.
         * @param error The detailed error information: [LOCAL_VIDEO_STREAM_ERROR]{@link agora.LOCAL_VIDEO_STREAM_ERROR}.
         */
        /** @cn
         * @param localVideoState 本地视频状态，详见: [LOCAL_VIDEO_STREAM_STATE]{@link agora.LOCAL_VIDEO_STREAM_STATE} 。当本地视频状态为 [LOCAL_VIDEO_STREAM_STATE_FAILED]{@link agora.LOCAL_VIDEO_STREAM_STATE_FAILED} (3) 时，你可以在 `error` 参数中查看返回的错误原因。
         * @param error 本地视频出错原因，详见: [LOCAL_VIDEO_STREAM_ERROR]{@link agora.LOCAL_VIDEO_STREAM_ERROR} 。
         */
        (localVideoState: agora.LOCAL_VIDEO_STREAM_STATE, error: agora.LOCAL_VIDEO_STREAM_ERROR) => void

    /** @en
     * @ignore
     * Occurs when the video size or rotation of a specified user changes.
     */
    /** @cn
     * @ignore
     * 本地或远端视频大小和旋转信息发生改变回调。
     */
    onVideoSizeChanged:
        /** @en
         * @param uid User ID of the remote user or local user (0) whose video size or rotation changes.
         * @param width New width (pixels) of the video.
         * @param height New height (pixels) of the video.
         * @param rotation New rotation of the video [0 to 360).
         */
        /** @cn
         * @param uid 图像尺寸和旋转信息发生变化的用户的用户 ID（本地用户的 uid 为 0）。
         * @param width 视频流的宽度（像素）。
         * @param height 视频流的高度（像素）。
         * @param rotation 旋转信息 [0,360)。
         */
        (uid: number, width: number, height: number, rotation: number) => void

    /** @en
     * @ignore
     * Occurs when the remote video state changes.
     *
     * @note This callback does not work properly when the number of users (in the `COMMUNICATION` profile) or
     * hosts (in the `LIVE_BROADCASTING` profile) in the channel exceeds 17.
     */
    /** @cn
     * @ignore
     * 远端视频状态发生改变回调。
     * @note 频道内的用户（通信场景）或主播（直播场景）人数超过 17 人时，该回调不生效。
     */
    onRemoteVideoStateChanged:
        /** @en
         * @param uid ID of the remote user whose video state changes.
         * @param state State of the remote video. See [REMOTE_VIDEO_STATE]{@link agora.REMOTE_VIDEO_STATE}.
         * @param reason The reason of the remote video state change. See
         * [REMOTE_VIDEO_STATE_REASON]{@link agora.REMOTE_VIDEO_STATE_REASON}.
         * @param elapsed Time elapsed (ms) from the local user calling the
         * [joinChannel]{@link agora.joinChannel} method until the SDK triggers this callback.
         */
        /** @cn
         * @param uid 发生视频状态改变的远端用户 ID。
         * @param state 远端视频流状态。详见 [REMOTE_VIDEO_STATE]{@link agora.REMOTE_VIDEO_STATE} 。
         * @param reason 远端视频流状态改变的具体原因。详见 [REMOTE_VIDEO_STATE_REASON]{@link agora.REMOTE_VIDEO_STATE_REASON} 。
         * @param elapsed 从本地用户调用  [joinChannel]{@link agora.joinChannel}  方法到发生本事件经历的时间，单位为 ms。
         */
        (uid: number, state: agora.REMOTE_VIDEO_STATE, reason: agora.REMOTE_VIDEO_STATE_REASON, elapsed: number) => void

    /** @en
     * @ignore
     * Occurs when a specified remote user enables/disables the local video
     * capturing function.
     *
     * @deprecated This callback is deprecated and replaced by the
     * [onRemoteVideoStateChanged]{@link agora.onRemoteVideoStateChanged} callback with the following parameters:
     * - [REMOTE_VIDEO_STATE_STOPPED]{@link agora.REMOTE_VIDEO_STATE.REMOTE_VIDEO_STATE_STOPPED} (0) and
     * [REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED} (5).
     * - [REMOTE_VIDEO_STATE_DECODING]{@link agora.REMOTE_VIDEO_STATE.REMOTE_VIDEO_STATE_DECODING} (2) and
     * [REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED} (6).
     *
     * This callback is only applicable to the scenario when the user only
     * wants to watch the remote video without sending any video stream to the
     * other user.
     *
     * The SDK triggers this callback when the remote user resumes or stops
     * capturing the video stream by calling the
     * [enableLocalVideo]{@link agora.enableLocalVideo} method.
     */
    /** @cn
     * @ignore
     * 其他用户启用/关闭本地视频。
     *
     * @deprecated 从 v2.9.0。该回调已被废弃，请改用 [onRemoteVideoStateChanged]{@link agora.onRemoteVideoStateChanged} 回调的：
     * - [REMOTE_VIDEO_STATE_STOPPED]{@link agora.REMOTE_VIDEO_STATE.REMOTE_VIDEO_STATE_STOPPED} (0) 和
     * [REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED} (5)。
     * - [REMOTE_VIDEO_STATE_DECODING]{@link agora.REMOTE_VIDEO_STATE.REMOTE_VIDEO_STATE_DECODING} (2) 和
     * [REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED} (6)。
     *
     * 提示有其他用户启用/关闭了本地视频功能。关闭视频功能是指该用户只能进行语音通话，
     * 不能显示、发送自己的视频，也不能接收、显示别人的视频。
     *
     * 该回调是由远端用户调用 [enableLocalVideo]{@link agora.enableLocalVideo} 方法开启或关闭视频采集触发的。
     */
    onUserEnableLocalVideo:
        /** @en
         * @param uid User ID of the remote user.
         * @param enabled Whether the specified remote user enables/disables the
         * local video capturing function:
         * - true: Enable. Other users in the channel can see the video of this
         * remote user.
         * - false: Disable. Other users in the channel can no longer receive the
         * video stream from this remote user, while this remote user can still
         * receive the video streams from other users.
         */
        /** @cn
         * @param uid 用户 ID，提示是哪个用户的视频流。
         * @param enabled
         * - true: 该用户已启用视频功能。启用后，其他用户可以接收到该用户的视频流。
         * - false: 该用户已关闭视频功能。关闭后，该用户仍然可以接收其他用户的视频流，
         * 但其他用户接收不到该用户的视频流。
         */
        (uid: number, enabled: boolean) => void

    /** @en
     * Occurs when the local user receives the data stream from the remote user within five seconds.
     *
     * The SDK triggers this callback when the local user receives the stream message that the remote user sends by calling the
     * [sendStreamMessage]{@link agora.sendStreamMessage} method.
     */
    /** @cn
     * 接收到对方数据流消息的回调。
     * 该回调表示本地用户收到了远端用户调用  [sendStreamMessage]{@link agora.sendStreamMessage}  方法发送的流消息。
     */
    onStreamMessage:
        /** @en
         * @param uid User ID of the remote user sending the message.
         * @param streamId Stream ID.
         * @param data The data received by the local user.
         * @param length Length of the data in bytes.
         */
        /** @cn
         * @param uid 发送消息的用户 ID。
         * @param streamId Stream ID。
         * @param data 接收到的数据。
         * @param length 数据长度。
         */
        (uid: number, streamId: number, data: Uint8Array, length: number) => void

    /** @en
     * Occurs when the local user does not receive the data stream from the remote user within five seconds.
     *
     * The SDK triggers this callback when the local user fails to receive the stream message that the remote user sends by
     * calling the [sendStreamMessage]{@link agora.sendStreamMessage} method.
     */
    /** @cn
     * 接收对方数据流消息发生错误的回调。
     * 该回调表示本地用户未收到远端用户调用 [sendStreamMessage]{@link agora.sendStreamMessage} 方法发送的流消息。
     */
    onStreamMessageError:
        /** @en
         * @param uid User ID of the remote user sending the message.
         * @param streamId Stream ID.
         * @param code Error code: [ERROR_CODE_TYPE]{@link agora.ERROR_CODE_TYPE}.
         * @param missed Number of lost messages.
         * @param cached Number of incoming cached messages when the data stream is interrupted.
         */
        /** @cn
         * @param uid 发送消息的用户 ID。
         * @param streamId Stream ID。
         * @param code 错误码: [ERROR_CODE_TYPE]{@link agora.ERROR_CODE_TYPE}。
         * @param missed 丢失的消息数量。
         * @param cached 数据流中断时，后面缓存的消息数量。
         */
        (uid: number, streamId: number, code: number, missed: number, cached: number) => void

    /** @en
     * Occurs when the media engine loads.
     */
    /** @cn
     * 媒体引擎成功加载的回调。
     */
    onMediaEngineLoadSuccess: () => void

    /** @en
     * Occurs when the media engine call starts.
     */
    /** @cn
     * 媒体引擎成功启动的回调。
     */
    onMediaEngineStartCallSuccess: () => void

    /** @en
     * Occurs when the state of the media stream relay changes.
     *
     * The SDK returns the state of the current media relay with any error
     * message.
     */
    /** @cn
     * 跨频道媒体流转发状态发生改变回调。
     *
     * 当跨频道媒体流转发状态发生改变时，SDK 会触发该回调，
     * 并报告当前的转发状态以及相关的错误信息。
     */
    onChannelMediaRelayStateChanged:
        /** @en
         * @param state The state code in [CHANNEL_MEDIA_RELAY_STATE]{@link agora.CHANNEL_MEDIA_RELAY_STATE}.
         * @param code The error code in [CHANNEL_MEDIA_RELAY_ERROR]{@link agora.CHANNEL_MEDIA_RELAY_ERROR}.
         */
        /** @cn
         * @param state 跨频道媒体流转发状态。详见 [CHANNEL_MEDIA_RELAY_STATE]{@link agora.CHANNEL_MEDIA_RELAY_STATE} 。
         * @param code 跨频道媒体流转发出错的错误码。详见 [CHANNEL_MEDIA_RELAY_ERROR]{@link agora.CHANNEL_MEDIA_RELAY_ERROR} 。
         */
        (state: agora.CHANNEL_MEDIA_RELAY_STATE, code: agora.CHANNEL_MEDIA_RELAY_ERROR) => void

    /** @en
     * Reports events during the media stream relay.
     */
    /** @cn
     * 跨频道媒体流转发事件回调。
     *
     * 该回调报告跨频道媒体流转发过程中发生的事件。
     */
    onChannelMediaRelayEvent:
        /** @en
         * @param code The event code in [CHANNEL_MEDIA_RELAY_EVENT]{@link agora.CHANNEL_MEDIA_RELAY_EVENT}.
         */
        /** @cn
         * @param code 跨频道媒体流转发事件码。详见 [CHANNEL_MEDIA_RELAY_EVENT]{@link agora.CHANNEL_MEDIA_RELAY_EVENT}。
         */
        (code: agora.CHANNEL_MEDIA_RELAY_EVENT) => void

    /** @en
     * Occurs when the engine sends the first local audio frame.
     *
     * @deprecated This callback is deprecated. Use the
     * [onFirstLocalAudioFramePublished]{@link AgoraRtcEvents.onFirstLocalAudioFramePublished} callback instead.
     */
    /** @cn
     * 已发送本地音频首帧回调。
     *
     * @deprecated 该回调已废弃，请改用  [onFirstLocalAudioFramePublished]{@link AgoraRtcEvents.onFirstLocalAudioFramePublished}  回调。
     */
    onFirstLocalAudioFrame:
        /** @en
         * @param elapsed Time elapsed (ms) from the local user calling [joinChannel]{@link agora.joinChannel} until the SDK triggers
         * this callback.
         */
        /** @cn
         * @param elapsed 从调用  [joinChannel]{@link agora.joinChannel}  方法直至该回调被触发的时间。
         */
        (elapsed: number) => void

    /** @en
     * Occurs when the first audio frame is published.
     *
     * The SDK triggers this callback under one of the following circumstances:
     * - The local client enables the audio module and calls [joinChannel]{@link agora.joinChannel} successfully.
     * - The local client calls [muteLocalAudioStream(true)]{@link agora.muteLocalAudioStream} and
     * [muteLocalAudioStream(false)]{@link agora.muteLocalAudioStream} in sequence.
     * - The local client calls [disableAudio]{@link agora.disableAudio} and [enableAudio]{@link agora.enableAudio} in sequence.
     */
    /** @cn
     * 已发布本地音频首帧回调。
     * 
     * SDK 会在以下三种时机触发该回调：
     * - 开启本地音频的情况下，调用  [joinChannel]{@link agora.joinChannel}  成功加入频道后。
     * - 调用  [muteLocalAudioStream(true)]{@link agora.muteLocalAudioStream} ，再调用  
     * [muteLocalAudioStream(false)]{@link agora.muteLocalAudioStream}  后。     * - 调用  [disableAudio]{@link agora.disableAudio} ，
     * 再调用  [enableAudio]{@link agora.enableAudio}  后。
     */
    onFirstLocalAudioFramePublished:
        /** @en
         * @param elapsed The time elapsed (ms) from the local client calling [joinChannel]{@link agora.joinChannel} until the
         * SDK triggers this callback.
         */
        /** @cn
         * @param elapsed 从调用  [joinChannel]{@link agora.joinChannel}  方法到触发该回调的时间间隔（毫秒）。
         */
        (elapsed: number) => void

    /** @en
     * Occurs when the engine receives the first audio frame from a specific remote user.
     *
     * @deprecated This callback is deprecated. Use [onRemoteAudioStateChanged]{@link AgoraRtcEvents.onRemoteAudioStateChanged} instead.
     */
    /** @cn
     * 已接收远端音频首帧回调。
     * @deprecated 该回调已废弃。请改用  [onRemoteAudioStateChanged]{@link AgoraRtcEvents.onRemoteAudioStateChanged}。
     */
    onFirstRemoteAudioFrame:
        /** @en
         * @param uid User ID of the remote user.
         * @param elapsed Time elapsed (ms) from the remote user calling [joinChannel]{@link agora.joinChannel} until the SDK triggers
         * this callback.
         */
        /** @cn
         * @param uid 发送音频帧的远端用户的用户 ID。
         * @param elapsed 从调用  [joinChannel]{@link agora.joinChannel}  方法直至该回调被触发的时间。
         */
        (uid: number, elapsed: number) => void

    /** @en
     * Occurs when the state of the RTMP streaming changes.
     *
     * The SDK triggers this callback to report the result of the local user calling the
     * [addPublishStreamUrl]{@link agora.addPublishStreamUrl} or [removePublishStreamUrl]{@link agora.removePublishStreamUrl} method.
     *
     * This callback indicates the state of the RTMP streaming. When exceptions occur, you can troubleshoot issues by referring to
     * the detailed error descriptions in the `errCode` parameter.
     */
    /** @cn
     * RTMP 推流状态发生改变回调。
     * 
     * 该回调返回本地用户调用  [addPublishStreamUrl]{@link agora.addPublishStreamUrl}  或  
     * [removePublishStreamUrl]{@link agora.removePublishStreamUrl}  方法的结果。
     * RTMP 推流状态发生改变时，SDK 会触发该回调，并在回调中明确状态发生改变的 URL 地址及当前推流状态。
     * 该回调方便推流用户了解当前的推流状态；推流出错时，你可以通过返回的错误码了解出错的原因，方便排查问题。
     */
    onRtmpStreamingStateChanged:
        /** @en
         * @param url The RTMP URL address.
         * @param state The RTMP streaming state. See: [RTMP_STREAM_PUBLISH_STATE]{@link agora.RTMP_STREAM_PUBLISH_STATE}.
         * @param errCode The detailed error information for streaming.
         * See [RTMP_STREAM_PUBLISH_ERROR]{@link agora.RTMP_STREAM_PUBLISH_ERROR}.
         */
        /** @cn
         * @param url 推流状态发生改变的 URL 地址。
         * @param state 当前的推流状态，详见 [RTMP_STREAM_PUBLISH_STATE]{@link agora.RTMP_STREAM_PUBLISH_STATE} 。
         * @param errCode 推流错误信息，详见 [RTMP_STREAM_PUBLISH_ERROR]{@link agora.RTMP_STREAM_PUBLISH_ERROR} 。
         */
        (url: string, state: agora.RTMP_STREAM_PUBLISH_STATE, errCode: agora.RTMP_STREAM_PUBLISH_ERROR) => void

    /** @en
     * Reports events during the RTMP streaming.
     */
    /** @cn
     * RTMP 推流事件回调。
     */
    onRtmpStreamingEvent:
        /** @en
         * @param url The RTMP streaming URL.
         * @param eventCode The event code. See [RTMP_STREAMING_EVENT]{@link agora.RTMP_STREAMING_EVENT}.
         */
        /** @cn
         * @param url RTMP 推流 URL。
         * @param eventCode RTMP 推流事件码。详见 [RTMP_STREAMING_EVENT]{@link agora.RTMP_STREAMING_EVENT}。
         */
        (url: string, eventCode: agora.RTMP_STREAMING_EVENT) => void

    /** @en
     * Reports the result of calling the [addPublishStreamUrl]{@link agora.addPublishStreamUrl} method. (CDN live only.)
     *
     * @deprecated This method is deprecated, use the [onRtmpStreamingStateChanged]{@link AgoraRtcEvents.onRtmpStreamingStateChanged}
     * callback instead.
     */
    /** @cn
     * 旁路推流已开启回调。
     * @deprecated 此方法已废弃，请改用  [onRtmpStreamingStateChanged]{@link AgoraRtcEvents.onRtmpStreamingStateChanged}
     * 该回调用于通知主播推流状态。
     */
    onStreamPublished:
        /** @en
         * @param url The RTMP URL address.
         * @param error Error code: [ERROR_CODE_TYPE]{@link agora.ERROR_CODE_TYPE}. Main errors include:
         * - 0(ERR_OK): The publishing succeeds.
         * - -1(ERR_FAILED): The publishing fails.
         * - -2(ERR_INVALID_ARGUMENT): Invalid argument used. If, for example, you did not call 
         * [setLiveTranscoding]{@link agora.setLiveTranscoding} to configure LiveTranscoding before calling 
         * [addPublishStreamUrl]{@link agora.addPublishStreamUrl} , the SDK reports 
         * [ERR_INVALID_ARGUMENT]{@link agora.ERR_INVALID_ARGUMENT}.
         * - -10(ERR_TIMEDOUT): The publishing timed out.
         * - -19(ERR_ALREADY_IN_USE): The chosen URL address is already in use for CDN live streaming.
         * - -22(ERR_RESOURCE_LIMITED): The backend system does not have enough resources for the CDN live streaming.
         * - -130(ERR_ENCRYPTED_STREAM_NOT_ALLOWED_PUBLISH): You cannot publish an encrypted stream.
         * - -151(ERR_PUBLISH_STREAM_CDN_ERROR)
         * - -152(ERR_PUBLISH_STREAM_NUM_REACH_LIMIT)
         * - -153(ERR_PUBLISH_STREAM_NOT_AUTHORIZED)
         * - -154(ERR_PUBLISH_STREAM_INTERNAL_SERVER_ERROR)
         * - -156(ERR_PUBLISH_STREAM_FORMAT_NOT_SUPPORTED)
         */
        /** @cn
         * @param url 主播推流的 URL 地址 。
         * @param error [ERROR_CODE_TYPE]{@link agora.ERROR_CODE_TYPE} 。
         * - 0(ERR_OK): 推流成功。
         * - -1(ERR_FAILED): 推流失败。
         * - -2(ERR_INVALID_ARGUMENT): 参数错误。如果你在调用  [addPublishStreamUrl]{@link agora.addPublishStreamUrl}  前没有调用  
         * [setLiveTranscoding]{@link agora.setLiveTranscoding}  配置 LiveTranscoding ，SDK 会回调 
         * [ERR_INVALID_ARGUMENT]{@link agora.ERR_INVALID_ARGUMENT} 。
         * - -10(ERR_TIMEDOUT): 推流超时未成功。
         * - -19(ERR_ALREADY_IN_USE): 推流地址已推流。
         * - -22(ERR_RESOURCE_LIMITED): 后台没有足够资源推流。
         * - -130(ERR_ENCRYPTED_STREAM_NOT_ALLOWED_PUBLISH): 推流已加密不能推流。
         * - -151(ERR_PUBLISH_STREAM_CDN_ERROR)
         * - -152(ERR_PUBLISH_STREAM_NUM_REACH_LIMIT)
         * - -153(ERR_PUBLISH_STREAM_NOT_AUTHORIZED)
         * - -154(ERR_PUBLISH_STREAM_INTERNAL_SERVER_ERROR)
         * - -156(ERR_PUBLISH_STREAM_FORMAT_NOT_SUPPORTED)
         */
        (url: string, error: number) => void

    /** @en
     * Reports the result of calling the [removePublishStreamUrl]{@link agora.removePublishStreamUrl} method. (CDN live only.)
     *
     * @deprecated This method is deprecated, use the
     * [onRtmpStreamingStateChanged]{@link AgoraRtcEvents.onRtmpStreamingStateChanged} callback instead.
     *
     * This callback indicates whether you have successfully removed an RTMP stream from the CDN.
     */
    /** @cn
     * 旁路推流已停止回调。
     * @deprecated 此方法已废弃，请改用  [onRtmpStreamingStateChanged]{@link AgoraRtcEvents.onRtmpStreamingStateChanged}
     * 回调用于通知主播停止推流成功。
     */
    onStreamUnpublished:
        /** @en
         * @param url The RTMP URL address.
         */
        /** @cn
         * @param url 被删除的 RTMP 推流地址。
         */
        (url: string) => void

    /** @en
     * Occurs when the publisher's transcoding is updated.
     *
     * When the `LiveTranscoding` class in the [setLiveTranscoding]{@link agora.setLiveTranscoding} method updates, the SDK
     * triggers the `onTranscodingUpdated` callback to report the update information to the local host.
     *
     * @note If you call the `setLiveTranscoding` method to set the `LiveTranscoding` class for the first time, the SDK does not
     * trigger the `onTranscodingUpdated` callback.
     */
    /** @cn
     * 旁路推流设置已被更新回调。
     *
     * [setLiveTranscoding]{@link agora.setLiveTranscoding}  方法中的直播参数 `LiveTranscoding` 更新时，`onTranscodingUpdated` 
     * 回调会被触发并向主播报告更新信息。
     * 
     * @note 首次调用 `setLiveTranscoding` 方法设置转码参数 `LiveTranscoding` 时，不会触发此回调。
     */
    onTranscodingUpdated: () => void

    /** @en
     * Occurs when a voice or video stream URL address is added to the live interactive streaming.
     */
    /** @cn
     * 输入在线媒体流状态回调。
     */
    onStreamInjectedStatus:
        /** @en
         * @param url The URL address of the externally injected stream.
         * @param uid User ID.
         * @param status State of the externally injected stream: [INJECT_STREAM_STATUS]{@link agora.INJECT_STREAM_STATUS}.
         */
        /** @cn
         * @param url 在线媒体流的地址。
         * @param uid 用户 ID。
         * @param status 输入的在线媒体流状态: [INJECT_STREAM_STATUS]{@link agora.INJECT_STREAM_STATUS} 。
         */
        (url: string, uid: number, status: agora.INJECT_STREAM_STATUS) => void

    /** @en
     * Occurs when the local audio route changes.
     *
     * The SDK triggers this callback when the local audio route switches to an earpiece, speakerphone, headset, or Bluetooth device.
     *
     * @note This callback is for Android and iOS only.
     */
    /** @cn
     * 语音路由已发生变化回调。
     * 当语音路由发生变化时，SDK 会触发此回调。
     */
    onAudioRouteChanged:
        /** @en
         * @param routing Audio output routing. See: [AUDIO_ROUTE_TYPE]{@link agora.AUDIO_ROUTE_TYPE}.
         */
        /** @cn
         * @param routing 当前的语音路由。详见： [AUDIO_ROUTE_TYPE]{@link agora.AUDIO_ROUTE_TYPE} 。
         */
        (routing: agora.AUDIO_ROUTE_TYPE) => void

    /** @en
     * @ignore
     * Occurs when the published media stream falls back to an audio-only stream due to poor network conditions or switches back
     * to the video after the network conditions improve.
     *
     * If you call [setLocalPublishFallbackOption]{@link agora.setLocalPublishFallbackOption} and set `option` as
     * [STREAM_FALLBACK_OPTION_AUDIO_ONLY,]{@link agora.STREAM_FALLBACK_OPTIONS.STREAM_FALLBACK_OPTION_AUDIO_ONLY,} the SDK triggers 
     * this callback when the published stream falls back to audio-only mode due to poor uplink conditions, or when the audio stream 
     * switches back to the video after the uplink network condition improves.
     *
     * @note If the local stream fallbacks to the audio-only stream, the remote user receives the
     * [onUserMuteVideo]{@link AgoraRtcEvents.onUserMuteVideo} callback.
     */
    /** @cn
     * @ignore
     * 本地发布流已回退为音频流回调。
     * 如果你调用了  [setLocalPublishFallbackOption]{@link agora.setLocalPublishFallbackOption}  接口并将 option 设置为 
     * [STREAM_FALLBACK_OPTION_AUDIO_ONLY]{@link agora.STREAM_FALLBACK_OPTIONS.STREAM_FALLBACK_OPTION_AUDIO_ONLY} ，当上行网络环境不理想、
     * 本地发布的媒体流回退为音频流时，或当上行网络改善、媒体流恢复为音视频流时，会触发该回调。
     * @note 如果本地发流已回退为音频流，远端的 App 上会收到  [onUserMuteVideo]{@link AgoraRtcEvents.onUserMuteVideo}  的回调事件。
     */
    onLocalPublishFallbackToAudioOnly:
        /** @en
         * @param isFallbackOrRecover Whether the published stream falls back to audio-only or switches back to the video:
         * - true: The published stream falls back to audio-only due to poor network conditions.
         * - false: The published stream switches back to the video after the network conditions improve.
         */
        /** @cn
         * @param isFallbackOrRecover
         * - true: 由于网络环境不理想，本地发布的媒体流已回退为音频流；
         * - false: 由于网络环境改善，发布的音频流已恢复为音视频流。
         */
        (isFallbackOrRecover: boolean) => void

    /** @en
     * @ignore
     * Occurs when the remote media stream falls back to audio-only stream
     * due to poor network conditions or switches back to the video stream
     * after the network conditions improve.
     *
     * If you call
     * [setRemoteSubscribeFallbackOption]{@link agora.setRemoteSubscribeFallbackOption} and set
     * `option` as [STREAM_FALLBACK_OPTION_AUDIO_ONLY,]{@link agora.STREAM_FALLBACK_OPTIONS.STREAM_FALLBACK_OPTION_AUDIO_ONLY,} the SDK triggers this
     * callback when the remote media stream falls back to audio-only mode due
     * to poor uplink conditions, or when the remote media stream switches
     * back to the video after the uplink network condition improves.
     *
     * @note Once the remote media stream switches to the low stream due to
     * poor network conditions, you can monitor the stream switch between a
     * high and low stream in the [RemoteVideoStats]{@link agora.RemoteVideoStats} callback.
     */
    /** @cn
     * @ignore
     * 远端订阅流已回退为音频流回调。
     * 
     * 如果你调用了  [setRemoteSubscribeFallbackOption]{@link agora.setRemoteSubscribeFallbackOption}  接口并将 option 设置为 
     * [STREAM_FALLBACK_OPTION_AUDIO_ONLY]{@link agora.STREAM_FALLBACK_OPTIONS.STREAM_FALLBACK_OPTION_AUDIO_ONLY} ，当下行
     * 网络环境不理想、仅接收远端音频流时，或当下行网络改善、恢复订阅音视频流时，会触发该回调。
     * 
     * @note 远端订阅流因弱网环境不能同时满足音视频而回退为小流时，你可以使用 [RemoteVideoStats]{@link agora.RemoteVideoStats} 
     * 来监控远端视频大小流的切换。
     */
    onRemoteSubscribeFallbackToAudioOnly:
        /** @en
         * @param uid ID of the remote user sending the stream.
         * @param isFallbackOrRecover Whether the remotely subscribed media stream
         * falls back to audio-only or switches back to the video:
         * - true: The remotely subscribed media stream falls back to audio-only
         * due to poor network conditions.
         * - false: The remotely subscribed media stream switches back to the
         * video stream after the network conditions improved.
         */
        /** @cn
         * @param uid 远端用户的用户 ID。
         * @param  isFallbackOrRecover
         * - true: 由于网络环境不理想，远端订阅流已回退为音频流；
         * - false: 由于网络环境改善，订阅的音频流已恢复为音视频流。
         */
        (uid: number, isFallbackOrRecover: boolean) => void

    /** @en
     * Reports the transport-layer statistics of each remote audio stream.
     *
     * @deprecated This callback is deprecated and replaced by the
     * [onRemoteAudioStats]{@link agora.onRemoteAudioStats()} callback.
     *
     * This callback reports the transport-layer statistics, such as the
     * packet loss rate and network time delay, once every two seconds after
     * the local user receives an audio packet from a remote user.
     */
    /** @cn
     * @deprecated
     * 通话中远端音频流传输的统计信息回调。
     *
     * 该回调已被废弃，请改用  [onRemoteAudioStats]{@link agora.onRemoteAudioStats()}。
     * 该回调描述远端用户通话中端到端的网络统计信息，通过音频包计算，用客观的数据，如丢包、
     * 网络延迟等，展示当前网络状态。
     *
     * 通话中，当用户收到远端用户/主播发送的音频数据包后 ，会每 2 秒触发一次该回调。
     *
     * 和 [onRemoteAudioStats]{@link AgoraRtcEvents.onRemoteAudioStats}  回调相比，该回调以数据展示当前网络状态，因此更客观。
     */
    onRemoteAudioTransportStats:
        /** @en
         * @param uid  User ID of the remote user sending the audio packet.
         * @param delay Network time delay (ms) from the remote user sending the
         * audio packet to the local user.
         * @param lost Packet loss rate (%) of the audio packet sent from the
         * remote user.
         * @param rxKBitRate  Received bitrate (Kbps) of the audio packet sent
         * from the remote user.
         */
        /** @cn
         * @param uid  用户 ID，指定是哪个用户/主播的音频包。
         * @param delay 音频包从发送端到接收端的延时（毫秒）。
         * @param lost 音频包从发送端到接收端的丢包率 (%)。
         * @param rxKBitRate  远端音频包的接收码率（Kbps）。
         */
        (uid: number, delay: number, lost: number, rxKBitRate: number) => void

    /** @en
     * @ignore
     * Reports the transport-layer statistics of each remote video stream.
     *
     * @deprecated This callback is deprecated and replaced by the
     * [onRemoteVideoStats]{@link agora.onRemoteVideoStats} callback.
     * This callback reports the transport-layer statistics, such as the
     * packet loss rate and network time delay, once every two seconds after
     * the local user receives a video packet from a remote user.
     */
    /** @cn
     * @ignore
     * @deprecated 通话中远端视频流传输的统计信息回调。
     *
     * 该回调已被废弃，请改用  [onRemoteVideoStats]{@link agora.onRemoteVideoStats()} 。
     * 该回调描述远端用户通话中端到端的网络统计信息，通过视频包计算，用客观的数据，如丢包、
     * 网络延迟等，展示当前网络状态。
     *
     * 通话中，当用户收到远端用户/主播发送的视频数据包后，会每 2 秒触发一次该回调。
     *
     * 和  [onRemoteVideoStats]{@link AgoraRtcEvents.onRemoteVideoStats}  回调相比，该回调以数据展示当前网络状态，因此更客观。
     */
    onRemoteVideoTransportStats:
        /** @en
         * @param uid User ID of the remote user sending the video packet.
         * @param delay Network time delay (ms) from the remote user sending the
         * video packet to the local user.
         * @param lost Packet loss rate (%) of the video packet sent from the
         * remote user.
         * @param rxKBitRate Received bitrate (Kbps) of the video packet sent
         * from the remote user.
         */
        /** @cn
         * @param uid 用户 ID，指定是哪个用户/主播的视频包。
         * @param delay 视频包从发送端到接收端的延时（毫秒）。
         * @param lost 视频包从发送端到接收端的丢包率 (%)。
         * @param rxKBitRate 远端视频包的接收码率（Kbps）。
         */
        (uid: number, delay: number, lost: number, rxKBitRate: number) => void

    /** @en
     * Occurs when the microphone is enabled/disabled.
     *
     * @deprecated The [onMicrophoneEnabled]{@link agora.onMicrophoneEnabled} callback is
     * deprecated. Use [LOCAL_AUDIO_STREAM_STATE_STOPPED]{@link agora.LOCAL_AUDIO_STREAM_STATE.LOCAL_AUDIO_STREAM_STATE_STOPPED} (0)
     * or [LOCAL_AUDIO_STREAM_STATE_RECORDING]{@link agora.LOCAL_AUDIO_STREAM_STATE.LOCAL_AUDIO_STREAM_STATE_RECORDING} (1) in the
     * [onLocalAudioStateChanged]{@link agora.onLocalAudioStateChanged} callback instead.
     *
     * The SDK triggers this callback when the local user resumes or stops
     * capturing the local audio stream by calling the
     * [enbaleLocalAudio]{@link agora.enableLocalAudio} method.
     */
    /** @cn
     * 麦克风状态已改变回调。
     *
     * @deprecated 从 v2.9.0。此方法已被废弃，请改用  [onLocalAudioStateChanged]{@link agora.onLocalAudioStateChanged}  回调的：
     * - [LOCAL_AUDIO_STREAM_STATE_STOPPED]{@link agora.LOCAL_AUDIO_STREAM_STATE.LOCAL_AUDIO_STREAM_STATE_STOPPED} (0)。
     * - [LOCAL_AUDIO_STREAM_STATE_RECORDING]{@link agora.LOCAL_AUDIO_STREAM_STATE.LOCAL_AUDIO_STREAM_STATE_RECORDING} (1)。
     *
     * 该回调由本地用户调用
     *  [enableLocalAudio]{@link agora.enableLocalAudio} 方法开启或关闭本地音频采集触发的.
     */
    onMicrophoneEnabled:
        /** @en
         * @param enabled Whether the microphone is enabled/disabled:
         * - true: Enabled.
         * - false: Disabled.
         */
        /** @cn
         * @param enabled
         * - true: 麦克风已启用；
         * - false: 麦克风已禁用。
         */
        (enabled: boolean) => void

    /** @en
     * Occurs when the connection state between the SDK and the server changes.
     */
    /** @cn
     * 网络连接状态已改变回调。
     * 该回调在网络连接状态发生改变的时候触发，并告知用户当前的网络连接状态和引起网络状态改变的原因。
     */
    onConnectionStateChanged:
        /** @en
         * @param state See [CONNECTION_STATE_TYPE]{@link agora.CONNECTION_STATE_TYPE}.
         * @param reason See [CONNECTION_CHANGED_REASON_TYPE]{@link agora.CONNECTION_CHANGED_REASON_TYPE}.
         */
        /** @cn
         * @param state 详见： [CONNECTION_STATE_TYPE]{@link agora.CONNECTION_STATE_TYPE} 。
         * @param reason 详见： [CONNECTION_CHANGED_REASON_TYPE]{@link agora.CONNECTION_CHANGED_REASON_TYPE} 。
         */
        (state: agora.CONNECTION_STATE_TYPE, reason: agora.CONNECTION_CHANGED_REASON_TYPE) => void

    /** @en
     * Occurs when the local network type changes.
     *
     * When the network connection is interrupted, this callback indicates whether the interruption is caused by a network
     * type change or poor network conditions.
     */
    /** @cn
     * 本地网络类型发生改变回调。
     * 本地网络连接类型发生改变时，SDK 会触发该回调，并在回调中明确当前的网络连接类型。
     * 你可以通过该回调获取正在使用的网络类型；当连接中断时，该回调能辨别引起中断的原因是网络切换还是网络条件不好。
     */
    onNetworkTypeChanged:
        /** @en
         * @param type See [NETWORK_TYPE]{@link agora.NETWORK_TYPE}.
         */
        /** @cn
         * @param type 详见： [NETWORK_TYPE]{@link agora.NETWORK_TYPE} 。
         */
        (type: agora.NETWORK_TYPE) => void

    /** @en
     * Occurs when the local user successfully registers a user account by calling the
     * [registerLocalUserAccount]{@link agora.registerLocalUserAccount} method or joins a channel by calling the
     * [joinChannelWithUserAccount]{@link agora.joinChannelWithUserAccount} method.This callback reports the user
     * ID and user account of the local user.
     */
    /** @cn
     * 本地用户成功注册 User Account 回调。
     * 本地用户成功调用  [registerLocalUserAccount]{@link agora.registerLocalUserAccount}  方法注册用户 User Account 或
     * 调用  [joinChannelWithUserAccount]{@link agora.joinChannelWithUserAccount}  加入频道后，
     * SDK 会触发该回调，并告知本地用户的 UID 和 User Account。
     */
    onLocalUserRegistered:
        /** @en
         * @param uid The ID of the local user.
         * @param userAccount The user account of the local user.
         */
        /** @cn
         * @param uid 本地用户的 UID
         * @param userAccount 本地用户的 User Account
         */
        (uid: number, userAccount: string) => void

    /** @en
     * Occurs when the SDK gets the user ID and user account of the remote user.
     *
     * After a remote user joins the channel, the SDK gets the UID and user account of the remote user,
     * caches them in `userInfo`, and triggers this callback on the local client.
     */
    /** @cn
     * 远端用户信息已更新回调。
     * 远端用户加入频道后， SDK 会获取到该远端用户的 UID 和 User Account，然后缓存一个包含了远端用户 UID 和 User Account 的 Mapping 表，
     * 并在本地触发该回调。
     */
    onUserInfoUpdated:
        /** @en
         * @param uid The ID of the remote user.
         * @param info [UserInfo]{@link agora.UserInfo} contains the user ID and user account of the remote user.
         */
        /** @cn
         * @param uid 远端用户的 UID
         * @param info 标识用户信息的 [UserInfo]{@link agora.UserInfo}，包含用户 UID 和 User Account
         */
        (uid: number, info: agora.UserInfo) => void

    /** @en
     * @ignore
     * Occurs when the local user receives the metadata.
     */
    /** @cn
     * @ignore
     * 接收端已收到 Metadata。
     * 当接收到远端用户发送的 Metadata 时，SDK 会触发该回调。
     */
    onMetadataReceived:
        /** @en
         * @param metadata The received [Metadata]{@link agora.Metadata}.
         */
        /** @cn
         * @param metadata 接收到的 [Metadata]{@link agora.Metadata}。
         */
        (metadata: agora.Metadata) => void
}

/**
 * @ignore
 */
declare class AgoraRtcEvents extends AgoraRtcEvents {
    callNativeMethod: (apiType: number, jsonParam?: string, extra?: any) => any

    callNativeMethodAudioEffect: (apiType: number, jsonParam?: string) => any

    beginApiTest: (casePath: string) => void

    handleAPICase: (apiType: number, paramsJson: string) => void

    compareAndDumpApiTestResult: (casePath: string, dumpPath: string) => void

    beginagoraEventTest: (casePath: string) => void

    logEngineEventCase: (eventType: string, paramsJson: string) => void

    compareAndDumpagoraEventTestResult: (casePath: string, dumpPath: string) => void
}

namespace agora {
    /**
     * @ignore
     */
    const isWeb = typeof AgoraRTC !== 'undefined'
    /**
     * @ignore
     */
    const event = new cc.EventTarget()

    /**
     * @ignore
     */
    let bridge: AgoraRtcEvents
    /**
     * @ignore
     */
    let client: AgoraRTC.Client
    /**
     * @ignore
     */
    let localStream: AgoraRTC.Stream
    /**
     * @ignore
     */
    let remoteStreams = new Map<string | number, AgoraRTC.Stream>()

    if (!isWeb) {
        bridge = new AgoraRtcEvents()
    }

    /**
     * @ignore
     */
    function initNativeEvent() {
        bridge.onWarning = function (warn, msg) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onWarning', JSON.stringify({warn, msg}))
            }
            event.emit('warning', warn, msg)
        }
        bridge.onError = function (err, msg) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onError', JSON.stringify({err, msg}))
            }
            event.emit('error', err, msg)
        }
        bridge.onJoinChannelSuccess = function (channel, uid, elapsed) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onJoinChannelSuccess', JSON.stringify({channel, uid, elapsed}))
            }
            event.emit('join-channel-success', channel, uid, elapsed)
            event.emit('joinChannelSuccess', channel, uid, elapsed)
        }
        bridge.onRejoinChannelSuccess = function (channel, uid, elapsed) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onRejoinChannelSuccess', JSON.stringify({channel, uid, elapsed}))
            }
            event.emit('rejoin-channel-success', channel, uid, elapsed)
            event.emit('rejoinChannelSuccess', channel, uid, elapsed)
        }
        bridge.onLeaveChannel = function (stats) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onLeaveChannel', JSON.stringify({stats}))
            }
            event.emit('leave-channel', stats)
            event.emit('leaveChannel', stats)
        }
        bridge.onClientRoleChanged = function (oldRole, newRole) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onClientRoleChanged', JSON.stringify({oldRole, newRole}))
            }
            event.emit('client-role-changed', oldRole, newRole)
            event.emit('clientRoleChanged', oldRole, newRole)
        }
        bridge.onUserJoined = function (uid, elapsed) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onUserJoined', JSON.stringify({uid, elapsed}))
            }
            event.emit('user-joined', uid, elapsed)
            event.emit('userJoined', uid, elapsed)
        }
        bridge.onUserOffline = function (uid, reason) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onUserOffline', JSON.stringify({uid, reason}))
            }
            event.emit('user-offline', uid, reason)
            event.emit('userOffline', uid, reason)
        }
        bridge.onLastmileQuality = function (quality) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onLastmileQuality', JSON.stringify({quality}))
            }
            event.emit('lastmileQuality', quality)
        }
        bridge.onLastmileProbeResult = function (result) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onLastmileProbeResult', JSON.stringify({result}))
            }
            event.emit('lastmileProbeResult', result)
        }
        bridge.onConnectionInterrupted = function () {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onConnectionInterrupted', JSON.stringify({}))
            }
            event.emit('connection-interrupted')
            event.emit('connectionInterrupted')
        }
        bridge.onConnectionLost = function () {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onConnectionLost', JSON.stringify({}))
            }
            event.emit('connection-lost')
            event.emit('connectionLost')
        }
        bridge.onConnectionBanned = function () {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onConnectionBanned', JSON.stringify({}))
            }
            event.emit('connection-banned')
            event.emit('connectionBanned')
        }
        bridge.onApiCallExecuted = function (err, api, result) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onApiCallExecuted', JSON.stringify({err, api, result}))
            }
            event.emit('apiCallExecuted', err, api, result)
        }
        bridge.onRequestToken = function () {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onRequestToken', JSON.stringify({}))
            }
            event.emit('request-token')
            event.emit('requestToken')
        }
        bridge.onTokenPrivilegeWillExpire = function (token) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onTokenPrivilegeWillExpire', JSON.stringify({token}))
            }
            event.emit('tokenPrivilegeWillExpire', token)
        }
        bridge.onAudioQuality = function (uid, quality, delay, lost) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onAudioQuality', JSON.stringify({uid, quality, delay, lost}))
            }
            event.emit('audio-quality', uid, quality, delay, lost)
            event.emit('audioQuality', uid, quality, delay, lost)
        }
        bridge.onRtcStats = function (stats) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onRtcStats', JSON.stringify({stats}))
            }
            event.emit('rtcStats', stats)
        }
        bridge.onNetworkQuality = function (uid, txQuality, rxQuality) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onNetworkQuality', JSON.stringify({uid, txQuality, rxQuality}))
            }
            event.emit('network-quality', uid, txQuality, rxQuality)
            event.emit('networkQuality', uid, txQuality, rxQuality)
        }
        bridge.onLocalVideoStats = function (stats) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onLocalVideoStats', JSON.stringify({stats}))
            }
            event.emit('localVideoStats', stats)
        }
        bridge.onRemoteVideoStats = function (stats) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onRemoteVideoStats', JSON.stringify({stats}))
            }
            event.emit('remoteVideoStats', stats)
        }
        bridge.onLocalAudioStats = function (stats) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onLocalAudioStats', JSON.stringify({stats}))
            }
            event.emit('localAudioStats', stats)
        }
        bridge.onRemoteAudioStats = function (stats) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onRemoteAudioStats', JSON.stringify({stats}))
            }
            event.emit('remoteAudioStats', stats)
        }
        bridge.onLocalAudioStateChanged = function (state, error) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onLocalAudioStateChanged', JSON.stringify({state, error}))
            }
            event.emit('localAudioStateChanged', state, error)
        }
        bridge.onRemoteAudioStateChanged = function (uid, state, reason, elapsed) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onRemoteAudioStateChanged', JSON.stringify({uid, state, reason, elapsed}))
            }
            event.emit('remoteAudioStateChanged', uid, state, reason, elapsed)
        }
        bridge.onAudioPublishStateChanged = function (channel, oldState, newState, elapseSinceLastState) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onAudioPublishStateChanged', JSON.stringify({
                    channel,
                    oldState,
                    newState,
                    elapseSinceLastState
                }))
            }
            event.emit('audioPublishStateChanged', channel, oldState, newState, elapseSinceLastState)
        }
        bridge.onVideoPublishStateChanged = function (channel, oldState, newState, elapseSinceLastState) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onVideoPublishStateChanged', JSON.stringify({
                    channel,
                    oldState,
                    newState,
                    elapseSinceLastState
                }))
            }
            event.emit('videoPublishStateChanged', channel, oldState, newState, elapseSinceLastState)
        }
        bridge.onAudioSubscribeStateChanged = function (channel, uid, oldState, newState, elapseSinceLastState) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onAudioSubscribeStateChanged', JSON.stringify({
                    channel,
                    oldState,
                    newState,
                    elapseSinceLastState
                }))
            }
            event.emit('audioSubscribeStateChanged', channel, uid, oldState, newState, elapseSinceLastState)
        }
        bridge.onVideoSubscribeStateChanged = function (channel, uid, oldState, newState, elapseSinceLastState) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onVideoSubscribeStateChanged', JSON.stringify({
                    channel,
                    oldState,
                    newState,
                    elapseSinceLastState
                }))
            }
            event.emit('videoSubscribeStateChanged', channel, uid, oldState, newState, elapseSinceLastState)
        }
        bridge.onAudioVolumeIndication = function (speakers, speakerNumber, totalVolume) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onAudioVolumeIndication', JSON.stringify({
                    speakers,
                    speakerNumber,
                    totalVolume
                }))
            }
            event.emit('audio-volume-indication', speakers, speakerNumber, totalVolume)
            event.emit('audioVolumeIndication', speakers, speakerNumber, totalVolume)
        }
        bridge.onActiveSpeaker = function (uid) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onActiveSpeaker', JSON.stringify({uid}))
            }
            event.emit('activeSpeaker', uid)
        }
        bridge.onVideoStopped = function () {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onVideoStopped', JSON.stringify({}))
            }
            event.emit('videoStopped')
        }
        bridge.onFirstLocalVideoFrame = function (width, height, elapsed) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onFirstLocalVideoFrame', JSON.stringify({width, height, elapsed}))
            }
            event.emit('firstLocalVideoFrame', width, height, elapsed)
        }
        bridge.onFirstLocalVideoFramePublished = function (elapsed) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onFirstLocalVideoFramePublished', JSON.stringify({elapsed}))
            }
            event.emit('firstLocalVideoFramePublished', elapsed)
        }
        bridge.onFirstRemoteVideoDecoded = function (uid, width, height, elapsed) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onFirstRemoteVideoDecoded', JSON.stringify({uid, width, height, elapsed}))
            }
            event.emit('firstRemoteVideoDecoded', uid, width, height, elapsed)
        }
        bridge.onFirstRemoteVideoFrame = function (uid, width, height, elapsed) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onFirstRemoteVideoFrame', JSON.stringify({uid, width, height, elapsed}))
            }
            event.emit('firstRemoteVideoFrame', uid, width, height, elapsed)
        }
        bridge.onUserMuteAudio = function (uid, muted) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onUserMuteAudio', JSON.stringify({uid, muted}))
            }
            event.emit('user-mute-audio', uid, muted)
            event.emit('userMuteAudio', uid, muted)
        }
        bridge.onUserMuteVideo = function (uid, muted) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onUserMuteVideo', JSON.stringify({uid, muted}))
            }
            event.emit('userMuteVideo', uid, muted)
        }
        bridge.onUserEnableVideo = function (uid, enabled) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onUserEnableVideo', JSON.stringify({uid, enabled}))
            }
            event.emit('userEnableVideo', uid, enabled)
        }
        bridge.onAudioDeviceStateChanged = function (deviceId, deviceType, deviceState) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onAudioDeviceStateChanged', JSON.stringify({
                    deviceId,
                    deviceType,
                    deviceState
                }))
            }
            event.emit('audioDeviceStateChanged', deviceId, deviceType, deviceState)
        }
        bridge.onAudioDeviceVolumeChanged = function (deviceType, volume, muted) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onAudioDeviceVolumeChanged', JSON.stringify({deviceType, volume, muted}))
            }
            event.emit('audioDeviceVolumeChanged', deviceType, volume, muted)
        }
        bridge.onCameraReady = function () {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onCameraReady', JSON.stringify({}))
            }
            event.emit('cameraReady')
        }
        bridge.onCameraFocusAreaChanged = function (x, y, width, height) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onCameraFocusAreaChanged', JSON.stringify({x, y, width, height}))
            }
            event.emit('cameraFocusAreaChanged', x, y, width, height)
        }
        bridge.onFacePositionChanged = function (imageWidth, imageHeight, vecRectangle, vecDistance, numFaces) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onFacePositionChanged', JSON.stringify({
                    imageWidth,
                    imageHeight,
                    vecRectangle,
                    vecDistance,
                    numFaces
                }))
            }
            event.emit('facePositionChanged', imageWidth, imageHeight, vecRectangle, vecDistance, numFaces)
        }
        bridge.onCameraExposureAreaChanged = function (x, y, width, height) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onCameraExposureAreaChanged', JSON.stringify({x, y, width, height}))
            }
            event.emit('cameraExposureAreaChanged', x, y, width, height)
        }
        bridge.onAudioMixingFinished = function () {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onAudioMixingFinished', JSON.stringify({}))
            }
            event.emit('audioMixingFinished')
        }
        bridge.onAudioMixingStateChanged = function (state, errorCode) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onAudioMixingStateChanged', JSON.stringify({state, errorCode}))
            }
            event.emit('audioMixingStateChanged', state, errorCode)
        }
        bridge.onRemoteAudioMixingBegin = function () {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onRemoteAudioMixingBegin', JSON.stringify({}))
            }
            event.emit('remoteAudioMixingBegin')
        }
        bridge.onRemoteAudioMixingEnd = function () {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onRemoteAudioMixingEnd', JSON.stringify({}))
            }
            event.emit('remoteAudioMixingEnd')
        }
        bridge.onAudioEffectFinished = function (soundId) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onAudioEffectFinished', JSON.stringify({soundId}))
            }
            event.emit('audioEffectFinished', soundId)
        }
        bridge.onFirstRemoteAudioDecoded = function (uid, elapsed) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onFirstRemoteAudioDecoded', JSON.stringify({uid, elapsed}))
            }
            event.emit('firstRemoteAudioDecoded', uid, elapsed)
        }
        bridge.onVideoDeviceStateChanged = function (deviceId, deviceType, deviceState) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onVideoDeviceStateChanged', JSON.stringify({
                    deviceId,
                    deviceType,
                    deviceState
                }))
            }
            event.emit('videoDeviceStateChanged', deviceId, deviceType, deviceState)
        }
        bridge.onLocalVideoStateChanged = function (localVideoState, error) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onLocalVideoStateChanged', JSON.stringify({localVideoState, error}))
            }
            event.emit('localVideoStateChanged', localVideoState, error)
        }
        bridge.onVideoSizeChanged = function (uid, width, height, rotation) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onVideoSizeChanged', JSON.stringify({uid, width, height, rotation}))
            }
            event.emit('videoSizeChanged', uid, width, height, rotation)
        }
        bridge.onRemoteVideoStateChanged = function (uid, state, reason, elapsed) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onRemoteVideoStateChanged', JSON.stringify({uid, state, reason, elapsed}))
            }
            event.emit('remoteVideoStateChanged', uid, state, reason, elapsed)
        }
        bridge.onUserEnableLocalVideo = function (uid, enabled) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onUserEnableLocalVideo', JSON.stringify({uid, enabled}))
            }
            event.emit('userEnableLocalVideo', uid, enabled)
        }
        bridge.onStreamMessage = function (uid, streamId, data, length) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onStreamMessage', JSON.stringify({
                    uid,
                    streamId,
                    data: String.fromCharCode.apply(null, data),
                    length
                }))
            }
            event.emit('streamMessage', uid, streamId, data, length)
        }
        bridge.onStreamMessageError = function (uid, streamId, code, missed, cached) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onStreamMessageError', JSON.stringify({uid, streamId, code, missed, cached}))
            }
            event.emit('streamMessageError', uid, streamId, code, missed, cached)
        }
        bridge.onMediaEngineLoadSuccess = function () {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onMediaEngineLoadSuccess', JSON.stringify({}))
            }
            event.emit('mediaEngineLoadSuccess')
        }
        bridge.onMediaEngineStartCallSuccess = function () {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onMediaEngineStartCallSuccess', JSON.stringify({}))
            }
            event.emit('mediaEngineStartCallSuccess')
        }
        bridge.onChannelMediaRelayStateChanged = function (state, code) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onChannelMediaRelayStateChanged', JSON.stringify({state, code}))
            }
            event.emit('channelMediaRelayStateChanged', state, code)
        }
        bridge.onChannelMediaRelayEvent = function (code) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onChannelMediaRelayEvent', JSON.stringify({code}))
            }
            event.emit('channelMediaRelayEvent', code)
        }
        bridge.onFirstLocalAudioFrame = function (elapsed) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onFirstLocalAudioFrame', JSON.stringify({elapsed}))
            }
            event.emit('firstLocalAudioFrame', elapsed)
        }
        bridge.onFirstLocalAudioFramePublished = function (elapsed) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onFirstLocalAudioFramePublished', JSON.stringify({elapsed}))
            }
            event.emit('firstLocalAudioFramePublished', elapsed)
        }
        bridge.onFirstRemoteAudioFrame = function (uid, elapsed) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onFirstRemoteAudioFrame', JSON.stringify({uid, elapsed}))
            }
            event.emit('firstRemoteAudioFrame', uid, elapsed)
        }
        bridge.onRtmpStreamingStateChanged = function (url, state, errCode) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onRtmpStreamingStateChanged', JSON.stringify({url, state, errCode}))
            }
            event.emit('rtmpStreamingStateChanged', url, state, errCode)
        }
        bridge.onRtmpStreamingEvent = function (url, eventCode) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onRtmpStreamingEvent', JSON.stringify({url, eventCode}))
            }
            event.emit('rtmpStreamingEvent', url, eventCode)
        }
        bridge.onStreamPublished = function (url, error) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onStreamPublished', JSON.stringify({url, error}))
            }
            event.emit('streamPublished', url, error)
        }
        bridge.onStreamUnpublished = function (url) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onStreamUnpublished', JSON.stringify({url}))
            }
            event.emit('streamUnpublished', url)
        }
        bridge.onTranscodingUpdated = function () {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onTranscodingUpdated', JSON.stringify({}))
            }
            event.emit('transcodingUpdated')
        }
        bridge.onStreamInjectedStatus = function (url, uid, status) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onStreamInjectedStatus', JSON.stringify({url, uid, status}))
            }
            event.emit('streamInjectedStatus', url, uid, status)
        }
        bridge.onAudioRouteChanged = function (routing) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onAudioRouteChanged', JSON.stringify({routing}))
            }
            event.emit('audio-routing-changed', routing)
            event.emit('audioRouteChanged', routing)
        }
        bridge.onLocalPublishFallbackToAudioOnly = function (isFallbackOrRecover) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onLocalPublishFallbackToAudioOnly', JSON.stringify({isFallbackOrRecover}))
            }
            event.emit('localPublishFallbackToAudioOnly', isFallbackOrRecover)
        }
        bridge.onRemoteSubscribeFallbackToAudioOnly = function (uid, isFallbackOrRecover) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onRemoteSubscribeFallbackToAudioOnly', JSON.stringify({
                    uid,
                    isFallbackOrRecover
                }))
            }
            event.emit('remoteSubscribeFallbackToAudioOnly', uid, isFallbackOrRecover)
        }
        bridge.onRemoteAudioTransportStats = function (uid, delay, lost, rxKBitRate) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onRemoteAudioTransportStats', JSON.stringify({uid, delay, lost, rxKBitRate}))
            }
            event.emit('remoteAudioTransportStats', uid, delay, lost, rxKBitRate)
        }
        bridge.onRemoteVideoTransportStats = function (uid, delay, lost, rxKBitRate) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onRemoteVideoTransportStats', JSON.stringify({uid, delay, lost, rxKBitRate}))
            }
            event.emit('remoteVideoTransportStats', uid, delay, lost, rxKBitRate)
        }
        bridge.onMicrophoneEnabled = function (enabled) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onMicrophoneEnabled', JSON.stringify({enabled}))
            }
            event.emit('microphoneEnabled', enabled)
        }
        bridge.onConnectionStateChanged = function (state, reason) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onConnectionStateChanged', JSON.stringify({state, reason}))
            }
            event.emit('connectionStateChanged', state, reason)
        }
        bridge.onNetworkTypeChanged = function (type) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onNetworkTypeChanged', JSON.stringify({type}))
            }
            event.emit('networkTypeChanged', type)
        }
        bridge.onLocalUserRegistered = function (uid, userAccount) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onLocalUserRegistered', JSON.stringify({uid, userAccount}))
            }
            event.emit('localUserRegistered', uid, userAccount)
        }
        bridge.onUserInfoUpdated = function (uid, info) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onUserInfoUpdated', JSON.stringify({uid, info}))
            }
            event.emit('userInfoUpdated', uid, info)
        }
        bridge.onMetadataReceived = function ({uid, size, buffer, timeStampMs}) {
            if (bridge.logEngineEventCase) {
                bridge.logEngineEventCase('onMetadataReceived', JSON.stringify({
                    uid,
                    size,
                    buffer: String.fromCharCode.apply(null, buffer),
                    timeStampMs
                }))
            }
            event.emit('metadataReceived', {uid, size, buffer, timeStampMs})
        }
    }

    /**
     * @ignore
     */

    function initWebEvent() {
        client.on('first-audio-frame-decode', (evt: { stream: AgoraRTC.Stream }) => {
            event.emit('firstRemoteAudioDecoded', evt.stream.getId(), 0)
        })
        client.on('first-video-frame-decode', (evt: { stream: AgoraRTC.Stream }) => {
            evt.stream.getStats((stats) => {
                event.emit('firstRemoteVideoDecoded', evt.stream.getId(), (stats as AgoraRTC.RemoteStreamStats).videoReceiveResolutionWidth, (stats as AgoraRTC.RemoteStreamStats).videoReceiveResolutionHeight, 0)
            })
        })
        client.on('stream-published', (evt: { stream: AgoraRTC.Stream }) => {
            event.emit('firstLocalAudioFramePublished', 0)
            event.emit('firstLocalVideoFramePublished', 0)
        })
        client.on('stream-unpublished', (evt: { stream: AgoraRTC.Stream, options: { streamType: REMOTE_VIDEO_STREAM_TYPE } }) => {
            event.emit('localAudioStateChanged', LOCAL_AUDIO_STREAM_STATE.LOCAL_AUDIO_STREAM_STATE_STOPPED, LOCAL_AUDIO_STREAM_ERROR.LOCAL_AUDIO_STREAM_ERROR_OK)
            event.emit('localVideoStateChanged', LOCAL_VIDEO_STREAM_STATE.LOCAL_VIDEO_STREAM_STATE_STOPPED, LOCAL_VIDEO_STREAM_ERROR.LOCAL_VIDEO_STREAM_ERROR_OK)
        })
        client.on('stream-added', (evt: { stream: AgoraRTC.Stream }) => {
            client.subscribe(evt.stream)
            remoteStreams.set(evt.stream.getId(), evt.stream)

            event.emit('remoteAudioStateChanged', evt.stream.getId(), REMOTE_AUDIO_STATE.REMOTE_AUDIO_STATE_STARTING, REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_INTERNAL, 0)
            event.emit('remoteVideoStateChanged', evt.stream.getId(), REMOTE_VIDEO_STATE.REMOTE_VIDEO_STATE_STARTING, REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_INTERNAL, 0)
        })
        client.on('stream-removed', (evt: { uid: string, stream: AgoraRTC.Stream }) => {
            client.unsubscribe(evt.stream)
            remoteStreams.delete(evt.stream.getId())

            event.emit('remoteAudioStateChanged', evt.stream.getId(), REMOTE_AUDIO_STATE.REMOTE_AUDIO_STATE_STOPPED, REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_INTERNAL, 0)
            event.emit('remoteVideoStateChanged', evt.stream.getId(), REMOTE_VIDEO_STATE.REMOTE_VIDEO_STATE_STOPPED, REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_INTERNAL, 0)
        })
        client.on('stream-subscribed', (evt: { stream: AgoraRTC.Stream }) => {
            evt.stream.play('Cocos2dGameContainer');

            event.emit('audioSubscribeStateChanged', undefined, evt.stream.getId(), STREAM_SUBSCRIBE_STATE.SUB_STATE_IDLE, STREAM_SUBSCRIBE_STATE.SUB_STATE_SUBSCRIBED, 0)
            event.emit('videoSubscribeStateChanged', undefined, evt.stream.getId(), STREAM_SUBSCRIBE_STATE.SUB_STATE_IDLE, STREAM_SUBSCRIBE_STATE.SUB_STATE_SUBSCRIBED, 0)
        })
        client.on('peer-online', (evt) => {
            event.emit('user-joined', evt.uid, 0)
            event.emit('userJoined', evt.uid, 0)
        })
        client.on('peer-leave', (evt) => {
            event.emit('user-offline', evt.uid, evt.reason, 0)
            event.emit('userOffline', evt.uid, evt.reason, 0)
        })
        client.on('mute-audio', (evt: { uid: string }) => {
            event.emit('user-mute-audio', evt.uid, true)
            event.emit('userMuteAudio', evt.uid, true)
        })
        client.on('unmute-audio', (evt: { uid: string }) => {
            event.emit('user-mute-audio', evt.uid, false)
            event.emit('userMuteAudio', evt.uid, false)
        })
        client.on('mute-video', (evt: { uid: string }) => {
            event.emit('userMuteVideo', evt.uid, true)
        })
        client.on('unmute-video', (evt: { uid: string }) => {
            event.emit('userMuteVideo', evt.uid, false)
        })
        client.on('crypt-error', (evt: { cryptType: string }) => {
        })
        client.on('client-banned', (evt: { uid: string, attr: string }) => {
            event.emit('connection-banned')
            event.emit('connectionBanned')
        })
        client.on('active-speaker', (evt: { uid: string }) => {
            event.emit('activeSpeaker', evt.uid)
        })
        client.on('volume-indicator', (evt: { attr: { uid: string, level: number }[] }) => {
            const speakers = []
            let sumVolume = 0
            evt.attr.forEach(function ({uid, level}, index) {
                speakers.push({uid, volume: level})
                sumVolume += level
            });
            event.emit('audio-volume-indication', speakers, speakers.length, sumVolume / speakers.length)
            event.emit('audioVolumeIndication', speakers, speakers.length, sumVolume / speakers.length)
        })
        client.on('liveStreamingStarted', (evt: { url: string }) => {
            event.emit('rtmpStreamingStateChanged', evt.url, RTMP_STREAM_PUBLISH_STATE.RTMP_STREAM_PUBLISH_STATE_RUNNING, null)
        })
        client.on('liveStreamingFailed', (evt: { url: string }) => {
            event.emit('rtmpStreamingStateChanged', evt.url, RTMP_STREAM_PUBLISH_STATE.RTMP_STREAM_PUBLISH_STATE_FAILURE, null)
        })
        client.on('liveStreamingStopped', (evt: { url: string }) => {
            event.emit('rtmpStreamingStateChanged', evt.url, RTMP_STREAM_PUBLISH_STATE.RTMP_STREAM_PUBLISH_STATE_IDLE, null)
        })
        client.on('liveTranscodingUpdated', (evt: { reason: string }) => {
            event.emit('transcodingUpdated')
        })
        client.on('streamInjectedStatus', (evt: { url: string, uid: string, status: INJECT_STREAM_STATUS }) => {
            event.emit('streamInjectedStatus', evt.url, evt.uid, evt.status)
        })
        client.on('onTokenPrivilegeWillExpire', (evt) => {
            event.emit('tokenPrivilegeWillExpire')
        })
        client.on('onTokenPrivilegeDidExpire', (evt) => {
        })
        client.on('error', (evt) => {
            event.emit('error', ERROR_CODE_TYPE.ERR_FAILED, evt.reason)
        })
        client.on('network-type-changed', (evt: { networkType: string }) => {
            event.emit('networkTypeChanged', evt.networkType)
        })
        client.on('recording-device-changed', (evt: { device: MediaDeviceInfo, state: string, initAt: number }) => {
            event.emit('recordingDeviceChanged', evt.state, evt.device)
        })
        client.on('playout-device-changed', (evt: { device: MediaDeviceInfo, state: string, initAt: number }) => {
            event.emit('playoutDeviceChanged', evt.state, evt.device)
        })
        client.on('camera-changed', (evt: { device: MediaDeviceInfo, state: string, initAt: number }) => {
        })
        client.on('stream-type-changed', (evt: { uid: string, streamType: number }) => {
        })
        client.on('connection-state-change', (evt) => {
            const state = {
                'DISCONNECTED': CONNECTION_STATE_TYPE.CONNECTION_STATE_DISCONNECTED,
                'CONNECTING': CONNECTION_STATE_TYPE.CONNECTION_STATE_CONNECTING,
                'CONNECTED': CONNECTION_STATE_TYPE.CONNECTION_STATE_CONNECTED,
                'DISCONNECTING': undefined,
            }
            if (state[evt.curState] !== undefined) {
                event.emit('connectionStateChanged', state[evt.curState], null)
            }
        })
        client.on('stream-reconnect-start', (evt) => {
        })
        client.on('stream-reconnect-end', (evt) => {
        })
        client.on('client-role-changed', (evt) => {
            event.emit('client-role-changed', null, evt.role)
            event.emit('clientRoleChanged', null, evt.role)
        })
        client.on('reconnect', () => {
            event.emit('connectionStateChanged', CONNECTION_STATE_TYPE.CONNECTION_STATE_RECONNECTING, null)
        })
        client.on('connected', () => {
            event.emit('connectionStateChanged', CONNECTION_STATE_TYPE.CONNECTION_STATE_CONNECTED, null)
        })
        client.on('network-quality', (stats) => {
            event.emit('networkQuality', 0, stats.uplinkNetworkQuality, stats.downlinkNetworkQuality)
        })
        client.on('stream-fallback', (evt) => {
            event.emit('remoteSubscribeFallbackToAudioOnly', evt.uid, evt.attr === 1)
        })
        client.on('stream-updated', (evt) => {
            // TODO
        })
        client.on('exception', (evt) => {
            event.emit('warning', evt.code, evt.msg)
        })
        client.on('enable-local-video', (evt) => {
            event.emit('userEnableVideo', evt.uid, true)
        })
        client.on('disable-local-video', (evt) => {
            event.emit('userEnableVideo', evt.uid, false)
        })
        client.on('channel-media-relay-event', (evt) => {
            event.emit('channelMediaRelayEvent', evt.code)
        })
        client.on('channel-media-relay-state', (evt) => {
            event.emit('channelMediaRelayStateChanged', evt.state, evt.code)
        })
    }

    /**
     * @ignore
     */
    function callNativeMethod(apiType: API_TYPE, param: {} = {}, extra?: any): any {
        return bridge.callNativeMethod(apiType, JSON.stringify(param), extra)
    }

    /**
     * @ignore
     */
    function callNativeMethodAudioEffect(apiType: API_TYPE_AUDIO_EFFECT, param: {} = {}): any {
        return bridge.callNativeMethodAudioEffect(apiType, JSON.stringify(param))
    }

    /** @en
     * Initializes the Agora engine.
     *
     * Unless otherwise specified, all the methods provided by the Agora engine are executed asynchronously. Agora recommends calling
     * these methods in the same thread.
     *
     * **Note**
     * - You must initializes the Agora engine before calling any other method.
     * - You can initializes the Agora engine either by calling this method or by calling
     * [initWithAreaCode]{@link agora.initWithAreaCode}. The difference between `initWithAreaCode` and this method is that
     * `initWithAreaCode` enables you to specify the region for connection.
     *
     * @param appId The App ID issued to you by Agora. See
     * [How to get the App ID](https://docs.agora.io/en/Agora%20Platform/token#getappid). Only users in apps with the same App ID can
     * join the same channel and communicate with each other. To change your
     * App ID, call [release]{@link agora.release} to `release` the current Agora engine, and after `release` returns `0`, call
     * `init` to initializes the Agora engine with a new App ID.
     * 
     * @return
     * - The Agora engine, if the method call succeeds.
     * - < 0, if the method call fails.
     *   - ERR_INVALID_APP_ID(101): The app ID is invalid. Check if it is in the correct format.
     */
    /** @cn
     * 初始化 Agora 引擎。
     *
     * Agora 引擎内的所有接口函数，如无特殊说明，都是异步调用，对接口的调用建议在同一个线程进行。
     *
     * @note
     * - 请确保在调用其他 API 前先调用该方法初始化 Agora 引擎。
     * - 调用该方法和 [initWithAreaCode]{@link agora.initWithAreaCode} 均能初始化 Agora 引擎。该方法与 `initWithAreaCode` 的区别在于，
     * `initWithAreaCode` 支持在初始化 Agora 引擎时指定访问区域。
     *
     * @param appId Agora 为 app 开发者签发的 App ID，详见[获取 App ID](https://docs.agora.io/cn/Agora%20Platform/token#getappid)。
     * 使用同一个 App ID 的 app 才能进入同一个频道进行通话或直播。如需更换 App ID，必须先
     * 调用 [release]{@link agora.release} 销毁当前 Agora 引擎，并在 `release` 成功返回后，再调用 `init` 重新初始化 Agora 引擎。
     * 
     * @return
     * - 方法调用成功，返回一个 Agora 引擎。
     * - 方法调用失败，返回错误码。
     *   - ERR_INVALID_APP_ID(-101): App ID 无效。请更换有效的 App ID 重新初始化。建议你检查 App ID 的格式是否有效。
     */
    export function init(appId: string): number {
        return initWithAreaCode(appId, AREA_CODE.AREA_CODE_GLOBAL)
    }

    /** @en
     * Initializes the Agora engine.
     *
     * Unless otherwise specified, all the methods provided by the Agora engine are executed asynchronously. Agora recommends calling
     * these methods in the same thread.
     *
     * **Note**
     * - You must initializes the Agora engine before calling any other method.
     * - You can initializes the Agora engine either by calling this method or by calling [init]{@link agora.init}. The difference
     * between `init` and this method is that this method enables you to specify the region for connection.
     * - The SDK supports initializing only one Agora engine for an app for now.
     *
     * @param appId The App ID issued to you by Agora. See
     * [How to get the App ID](https://docs.agora.io/en/Agora%20Platform/token#getappid). Only users in apps with the same App ID can
     * join the same channel and communicate with each other. Use an App ID to initialize only one Agora engine. To change your
     * App ID, call [release]{@link agora.release} to `release` the current Agora engine, and after `release` returns `0`, call
     * `initWithAreaCode` to initializes the Agora engine with a new App ID.
     * @param areaCode The region for connection. This advanced feature applies to scenarios that have regional restrictions.
     *
     * For the regions that Agora supports, see [AREA_CODE]{@link agora.AREA_CODE}. After specifying the region, the SDK connects to
     * the Agora servers within that region.
     * @note The SDK supports specifying only one region.
     * 
     * @return
     * - The Agora engine, if the method call succeeds.
     * - < 0, if the method call fails.
     *   - ERR_INVALID_APP_ID(101): The app ID is invalid. Check if it is in the correct format.
     */
    /** @cn
     * 初始化 Agora 引擎。
     *
     * Agora 引擎内的所有接口函数，如无特殊说明，都是异步调用，对接口的调用建议在同一个线程进行。
     *
     * @note
     * - 请确保在调用其他 API 前先调用该方法初始化 Agora 引擎。
     * - 调用该方法和 [initWithAreaCode]{@link agora.initWithAreaCode} 均能初始化 Agora 引擎。该方法与 `initWithAreaCode` 的区别在于，
     * 该方法支持在初始化 Agora 引擎时指定访问区域。
     *
     * @param appId Agora 为 app 开发者签发的 App ID，详见[获取 App ID](https://docs.agora.io/cn/Agora%20Platform/token#getappid)。
     * 使用同一个 App ID 的 app 才能进入同一个频道进行通话或直播。如需更换 App ID，必须先
     * 调用 [release]{@link agora.release} 销毁当前 Agora 引擎，并在 `release` 成功返回后，再调用 `init` 重新初始化 Agora 引擎。
     * @param areaCode 服务器的访问区域。该功能为高级设置，适用于有访问安全限制的场景。<p>支持的区域详见 [AREA_CODE]{@link agora.AREA_CODE}。
     * 指定访问区域后，Agora SDK 会连接指定区域内的 Agora 服务器。
     * @note 仅支持指定单个访问区域。
     * 
     * @return
     * - 方法调用成功，返回一个 Agora 引擎。
     * - 方法调用失败，返回错误码。
     *   - ERR_INVALID_APP_ID(-101): App ID 无效。请更换有效的 App ID 重新初始化。建议你检查 App ID 的格式是否有效。
     */
    export function initWithAreaCode(appId: string, areaCode: AREA_CODE): number {
        if (isWeb) {
            const areas = {
                [AREA_CODE.AREA_CODE_CN]: AgoraRTC.AREAS.CHINA,
                [AREA_CODE.AREA_CODE_NA]: AgoraRTC.AREAS.NORTH_AMERICA,
                [AREA_CODE.AREA_CODE_EUR]: AgoraRTC.AREAS.EUROPE,
                [AREA_CODE.AREA_CODE_AS]: AgoraRTC.AREAS.ASIA,
                [AREA_CODE.AREA_CODE_JAPAN]: AgoraRTC.AREAS.JAPAN,
                [AREA_CODE.AREA_CODE_INDIA]: AgoraRTC.AREAS.INDIA,
                [AREA_CODE.AREA_CODE_GLOBAL]: AgoraRTC.AREAS.GLOBAL,
            }
            const config: AgoraRTC.ClientConfig = {
                codec: 'h264',
                mode: 'live',
                areaCode: [areas[areaCode]]
            }
            client = AgoraRTC.createClient(config)
            initWebEvent()
            client.init(appId)
            return 0
        } else {
            initNativeEvent()
            return callNativeMethod(API_TYPE.INITIALIZE, {appId, areaCode})
        }
    }

    /** @en
     * Releases all resources of the Agora engine.
     * 
     * Use this method for apps in which users occasionally make voice or video calls. When users do not make calls, you can free up 
     * resources for other operations. Once you call `release` to release the Agora engine, you cannot use any method or 
     * callback in the SDK any more. 
     * 
     * If you want to use the real-time communication functions again, you must call [init]{@link agora.init} to initialize a 
     * new Agora engine.
     * 
     * @note If you want to reinitialize the Agora engine after releasing the current one, ensure that you wait till the 
     * `release` method completes executing.
     */
    /** @cn
     * 销毁 Agora 引擎。
     *
     * 该方法释放 Agora SDK 使用的所有资源。有些 app 只在用户需要时才进行实时音视频通信，不需要时则将资源释放出来用于其他操作，该方法适用于此类情况。
     * 调用 `release` 方法后，你将无法再使用 SDK 的其它方法和回调。如需再次使用实时音视频通信功能，你必须重新调用 `create` 方法重新初始化 Agora 引擎。
     *
     * @note
     * - 该方法为同步调用，需要等待 Agora 引擎资源释放后才能执行其他操作，所以我们建议在子线程中调用该方法，避免主线程阻塞。此外，我们<b>不建议</b>在 SDK 
     * 的回调中调用 `release`，否则由于 SDK 要等待回调返回才能回收相关的对象资源，会造成死锁。
     * - 如需在销毁后重新初始化 Agora 引擎，需要等待 `release` 方法执行结束后再重新初始化。
     */
    export function release() {
        callNativeMethod(API_TYPE.RELEASE)
    }

    /** @en
     * Listens for the events during the Agora engine runtime.
     */
    /** @cn
     *  在 Agora 引擎运行期间监听事件。
     */
    export function on<T extends Function>(type: string, callback: T, target?: any, useCapture?: boolean): T {
        return event.on(type, callback, target, useCapture)
    }

    /** @en
     * Stops monitoring the events during the Agora engine runtime.
     */
    /** @cn
     * 停止在 Agora 引擎运行期间监听事件。
     */
    export function off(type: string, callback?: Function, target?: any) {
        event.off(type, callback, target)
    }

    /** @en
     * Sets the channel profile of the Agora engine.
     *
     * The Agora engine differentiates channel profiles and applies optimization algorithms accordingly.
     * For example, it prioritizes smoothness and low latency for a video call, and prioritizes video quality for the live interactive
     * video streaming.
     *
     * @warning
     * - To ensure the quality of real-time communication, we recommend that all users in a channel use the same channel profile.
     * - Call this method before calling [joinChannel]{@link agora.joinChannel} . You cannot set the channel profile once you have
     * joined the channel.
     * - The default audio route and video encoding bitrate are different in different channel profiles. For details, see
     * [setDefaultAudioRouteToSpeakerphone]{@link agora.setDefaultAudioRouteToSpeakerphone}.
     *
     * @param profile The channel profile of the Agora engine. See [CHANNEL_PROFILE_TYPE]{@link agora.CHANNEL_PROFILE_TYPE}.
     *
     * @return
     * - 0(`ERR_OK`): Success.
     * - < 0: Failure.
     *  - -2(`ERR_INVALID_ARGUMENT`): The parameter is invalid.
     *  - -7(`ERR_NOT_INITIALIZED`): The SDK is not initialized.
     */
    /** @cn
     * 设置频道场景。
     *
     * 该方法用于设置 Agora 频道场景。Agora 会针对不同的使用场景采用不同的优化策略，如通信场景偏好流畅，直播场景偏好画质。
     *
     * @warning
     * - 为保证实时音视频质量，我们建议相同频道内的用户使用同一种频道场景。
     * - 该方法必须在  [joinChannel]{@link agora.joinChannel}  前调用和进行设置，进入频道后无法再设置。
     * - 不同的频道场景下，SDK 的默认音频路由和默认视频编码码率是不同的，详见  
     * [setDefaultAudioRouteToSpeakerphone]{@link agora.setDefaultAudioRouteToSpeakerphone} 和  
     * [setVideoEncoderConfiguration]{@link agora.setVideoEncoderConfiguration}  方法中的说明。
     * 
     * @param profile 频道使用场景: [CHANNEL_PROFILE_TYPE]{@link agora.CHANNEL_PROFILE_TYPE}。
     *
     * @return
     * - 0(ERR_OK): 方法调用成功。
     * - < 0: 方法调用失败。
     *  - -2 (ERR_INVALID_ARGUMENT): 参数无效。
     *  - -7(ERR_NOT_INITIALIZED): SDK 尚未初始化。
     */
    export function setChannelProfile(profile: CHANNEL_PROFILE_TYPE): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.SET_CHANNEL_PROFILE, {profile})
    }

    /** @en
     * Sets the role of the user, such as a host or an audience (default), before joining a channel in the live interactive streaming.
     *
     * This method can be used to switch the user role in the live interactive streaming after the user joins a channel.
     *
     * In the `LIVE_BROADCASTING` profile, when a user switches user roles after joining a channel, a successful
     * `setClientRole` method call triggers the following callbacks:
     * - The local client: [onClientRoleChanged]{@link AgoraRtcEvents.onClientRoleChanged}
     * - The remote client: [onUserJoined]{@link AgoraRtcEvents.onUserJoined} or
     * [onUserOffline]{@link AgoraRtcEvents.onUserOffline}(BECOME_AUDIENCE)
     *
     * @note This method applies only to the `LIVE_BROADCASTING` profile.
     *
     * @param role Sets the role of the user. See [CLIENT_ROLE_TYPE]{@link agora.CLIENT_ROLE_TYPE}.
     *
     * @return
     * - 0(ERR_OK): Success.
     * - < 0: Failure.
     *  - -1(ERR_FAILED): A general error occurs (no specified reason).
     *  - -2(ERR_INVALID_ARGUMENT): The parameter is invalid.
     *  - -7(ERR_NOT_INITIALIZED): The SDK is not initialized.
     */
    /** @cn
     * 设置用户角色。
     *
     * 在加入频道前，用户需要通过本方法设置观众（默认）或主播。在加入频道后，用户可以通过本方法切换用户角色。
     *
     * 直播场景下，如果你在加入频道后调用该方法切换用户角色，调用成功后，本地会触发  
     * [onClientRoleChanged]{@link AgoraRtcEvents.onClientRoleChanged}  回调；
     * 远端会触发  [onUserJoined]{@link AgoraRtcEvents.onUserJoined}  回调或  
     * [onUserOffline]{@link AgoraRtcEvents.onUserOffline}(BECOME_AUDIENCE) 回调。
     * 
     * @note 该方法仅适用于直播场景。
     *
     * @param role 直播场景里的用户角色: [CLIENT_ROLE_TYPE]{@link agora.CLIENT_ROLE_TYPE}
     *
     * @return
     * - 0(ERR_OK): 方法调用成功。
     * - < 0: 方法调用失败。
     *  - -1(ERR_FAILED): 一般性的错误（未明确归类）。
     *  - -2(ERR_INALID_ARGUMENT): 参数无效。
     *  - -7(ERR_NOT_INITIALIZED): SDK 尚未初始化。
     */
    export function setClientRole(role: CLIENT_ROLE_TYPE): number {
        if (isWeb) {
            const roles = new Map<CLIENT_ROLE_TYPE, 'audience' | 'host'>([
                [CLIENT_ROLE_TYPE.CLIENT_ROLE_AUDIENCE, 'audience'],
                [CLIENT_ROLE_TYPE.CLIENT_ROLE_BROADCASTER, 'host'],
            ])
            client.setClientRole(roles.get(role))
            return ERROR_CODE_TYPE.ERR_OK
        }
        return callNativeMethod(API_TYPE.SET_CLIENT_ROLE, {role})
    }

    /** @en
     * Joins a channel with the user ID.
     *
     * Users in the same channel can talk to each other, and multiple users in the same channel can start a group chat. Users with
     * different App IDs cannot call each other.
     *
     * You must call the [leaveChannel]{@link agora.leaveChannel} method to exit the current call before entering another channel.
     *
     * A successful [joinChannel]{@link agora.joinChannel} method call triggers the following callbacks:
     * - The local client: [onJoinChannelSuccess]{@link AgoraRtcEvents.onJoinChannelSuccess}
     * - The remote client: [onUserJoined]{@link AgoraRtcEvents.onUserJoined} , if the user joining the channel is in the `COMMUNICATION`
     * profile, or is a host in the `LIVE_BROADCASTING` profile.
     *
     * When the connection between the client and Agora server is interrupted due to poor network conditions, the SDK tries reconnecting
     * to the server. When the local client successfully rejoins the channel, the SDK triggers the
     * [onRejoinChannelSuccess]{@link AgoraRtcEvents.onRejoinChannelSuccess} callback on the local client.
     *
     * @note A channel does not accept duplicate uids, such as two users with the same `uid`. If you set `uid` as 0, the system
     * automatically assigns a `uid`. If you want to join a channel from different devices, ensure that each device has a different uid.
     *
     * @warning Ensure that the App ID used for creating the token is the same App ID used by the [init]{@link agora.init} method for
     * initializing the Agora engine. Otherwise, the CDN live streaming may fail.
     *
     * @param token The token for authentication:
     * - In situations not requiring high security: You can use the temporary token generated at Console. For details, see
     * [Get a temporary token](https://docs.agora.io/en/Agora%20Platform/token?platform=All%20Platforms#get-a-temporary-token).
     * - In situations requiring high security: Set it as the token generated at your server. For details, see
     * [Get a token](https://docs.agora.io/en/Agora%20Platform/token?platform=All%20Platforms#generatetoken).
     * @param channelId The unique channel name for the Agora RTC session in the string format smaller than 64 bytes.
     * Supported characters:
     * - All lowercase English letters: a to z.
     * - All uppercase English letters: A to Z.
     * - All numeric characters: 0 to 9.
     * - The space character.
     * - Punctuation characters and other symbols, including: "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".",
     * ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ",".
     * @param info (Optional) The additional information about the channel. This parameter can be set to `null` or contain channel
     * related information. Other users in the channel will not receive this message.
     * @param uid (Optional) User ID. A 32-bit unsigned integer with a value ranging from 1 to 2<sup>32</sup>-1. The `uid` must be unique.
     * If a `uid` is not assigned (or set to `0`), the SDK assigns and returns a `uid` in the
     * [onJoinChannelSuccess]{@link AgoraRtcEvents.onJoinChannelSuccess} callback. Your application must record and maintain the returned
     * `uid` since the SDK does not do so.
     * @return
     * - 0(ERR_OK): Success.
     * - < 0: Failure.
     *   - -2(ERR_INVALID_ARGUMENT): The parameter is invalid.
     *   - -3(ERR_NOT_READY): The SDK fails to be initialized. You can try re-initializing the SDK.
     */
    /** @cn
     * 加入频道。
     * 
     * 该方法让用户加入通话频道，在同一个频道内的用户可以互相通话，多个用户加入同一个频道，可以群聊。 使用不同 App ID 的 App 是不能互通的。如果已在通话中，
     * 用户必须调用  [leaveChannel]{@link agora.leaveChannel}  退出当前通话，才能进入下一个频道。
     * 成功调用该方加入频道后，本地会触发  [onJoinChannelSuccess]{@link AgoraRtcEvents.onJoinChannelSuccess}  回调；通信场景下的用户和直播场景下
     * 的主播加入频道后，远端会触发  [onUserJoined]{@link AgoraRtcEvents.onUserJoined}  回调。
     * 在网络状况不理想的情况下，客户端可能会与 Agora 的服务器失去连接；SDK 会自动尝试重连，重连成功后，本地会触发  
     * [onRejoinChannelSuccess]{@link AgoraRtcEvents.onRejoinChannelSuccess}  回调。
     * 
     * @note 频道内每个用户的用户 ID 必须是唯一的。如果将 uid 设为 0，系统将自动分配一个 uid。如果想要从不同的设备同时接入同一个频道，请确保
     * 每个设备上使用的 uid 是不同的。
     * @warning 请务必确保用于生成 Token 的 App ID 和  [initialize]{@link agora.initialize}  方法初始化引擎时用的是同一个 App ID，
     * 否则会造成旁路推流失败。
     * 
     * @param token 动态秘钥。
     * - 安全要求不高: 将值设为 NULL。
     * - 安全要求高: 将值设置为 Token。如果你已经启用了 App Certificate, 请务必使用 Token。
     * @param channelId 标识通话的频道名称，长度在 64 字节以内的字符串。以下为支持的字符集范围（共 89 个字符）:
     * - 26 个小写英文字母 a~z；
     * - 26 个大写英文字母 A~Z；
     * - 10个数字 0~9；
     * - 空格；
     * - "!"、"#"、"$"、"%"、"&"、"("、")"、"+"、"-"、":"、";"、"<"、"="、"."、">"、"?"、"@"、"["、"]"、"^"、"_"、" {"、"}"、"|"、"~"、","。
     * @param info (非必选项) 开发者需加入的任何附加信息。一般可设置为空字符串，或频道相关信息。该信息不会传递给频道内的其他用户。
     * @param uid (非必选项) 用户ID，32位无符号整数。建议设置范围：1到 2<sup>32</sup>-1，并保证唯一性。如果不指定（即设为0），SDK 会自动分配一个，并在 
     * [onJoinChannelSuccess]{@link AgoraRtcEvents.onJoinChannelSuccess}  回调方法中返回，App 层必须记住该返回值并维护，SDK不对该返回值进行维护。
     * 
     * @return
     * - 0(ERR_OK): 方法调用成功。
     * - < 0: 方法调用失败。
     *    - -2(ERR_INALID_ARGUMENT): 参数无效。
     *    - -3(ERR_NOT_READY): SDK 初始化失败，请尝试重新初始化 SDK。
     */
    export function joinChannel(token: string, channelId: string, info: string = '', uid: number = 0): number {
        if (isWeb) {
            client.join(token, channelId, uid, (uid) => {
                const spec: AgoraRTC.StreamSpec = {streamID: uid, audio: true, video: true, screen: false}
                localStream = AgoraRTC.createStream(spec)
                localStream.init(() => {
                    localStream.play('Cocos2dGameContainer')
                    client.publish(localStream)
                })

                event.emit('join-channel-success', channelId, uid, 0);
                event.emit('joinChannelSuccess', channelId, uid, 0)
            })
            return ERROR_CODE_TYPE.ERR_OK
        }
        return callNativeMethod(API_TYPE.JOIN_CHANNEL, {token, channelId, info, uid})
    }

    /** @en
     * Switches to a different channel.
     *
     * This method allows the audience of a `LIVE_BROADCASTING` channel to switch to a different channel.
     *
     * After the user successfully switches to another channel, the [onLeaveChannel]{@link AgoraRtcEvents.onLeaveChannel}
     * and [onJoinChannelSuccess]{@link AgoraRtcEvents.onJoinChannelSuccess} callbacks are triggered to indicate that the
     * user has left the original channel and joined a new one.
     *
     * @note
     * This method applies to the audience role in a `LIVE_BROADCASTING` channel only.
     *
     * @param token The token for authentication:
     * - In situations not requiring high security: You can use the temporary token generated at Console. For details, see
     * [Get a temporary token](https://docs.agora.io/en/Agora%20Platform/token?platform=All%20Platforms#get-a-temporary-token).
     * - In situations requiring high security: Set it as the token generated at your server. For details, see
     * [Get a token](https://docs.agora.io/en/Agora%20Platform/token?platform=All%20Platforms#generatetoken).
     * @param channelId The unique channel name for the Agora RTC session in the string format smaller than 64 bytes.
     * Supported characters:
     * - All lowercase English letters: a to z.
     * - All uppercase English letters: A to Z.
     * - All numeric characters: 0 to 9.
     * - The space character.
     * - Punctuation characters and other symbols, including: "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".",
     * ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ",".
     *
     * @return
     * - 0(ERR_OK): Success.
     * - < 0: Failure.
     *  - -1(ERR_FAILED): A general error occurs (no specified reason).
     *  - -2(ERR_INVALID_ARGUMENT): The parameter is invalid.
     *  - -5(ERR_REFUSED): The request is rejected, probably because the user is not an audience.
     *  - -7(ERR_NOT_INITIALIZED): The SDK is not initialized.
     *  - -102(ERR_INVALID_CHANNEL_NAME): The channel name is invalid.
     *  - -113(ERR_NOT_IN_CHANNEL): The user is not in the channel.
     */
    /** @cn
     * 快速切换直播频道。
     *
     * 当直播频道中的观众想从一个频道切换到另一个频道时，可以调用该方法，实现快速切换。
     *
     * 成功调用该方切换频道后，本地会先收到离开原频道的回调
     *  [onLeaveChannel]{@link AgoraRtcEvents.onLeaveChannel} ，再收到成功加入新频道的回调 
     * [onJoinChannelSuccess]{@link AgoraRtcEvents.onJoinChannelSuccess}。
     * @note 该方法仅适用于直播场景中，角色为观众的用户。
     *
     * @param token 在服务器端生成的用于鉴权的 Token：
     * - 安全要求不高：你可以使用控制台生成的临时 Token，详见
     * [获取临时 Token](https://docs.agora.io/cn/Agora%20Platform/token?platfor%20*%20m=All%20Platforms#获取临时-token)。
     * - 安全要求高：将值设为你的服务端生成的正式 Token，详见
     * [获取正式 Token](https://docs.agora.io/cn/Agora%20Platform/token?platfor%20*%20m=All%20Platforms#获取正式-token)。
     * @param channelId 标识频道的频道名，最大不超过 64 字节。以下为支持的字符集范围
     * （共 89 个字符）：
     * - 26 个小写英文字母 a-z
     * - 26 个大写英文字母 A-Z
     * - 10 个数字 0-9
     * - 空格
     * - "!"，"#"，"$"，"%"，"&"，"("，")"，"+"，"-"，":"，";"，"<"，"="，"."，">"，
     * "?"，"@"，"["，"]"，"^"，"_"，" {"， "}"，"|"，"~"，","
     *
     * @return
     * - 0(ERR_OK): 方法调用成功。
     * - < 0: 方法调用失败。
     *  - -1(ERR_FAILED): 一般性的错误（未明确归类）。
     *  - -2(ERR_INALID_ARGUMENT): 参数无效。
     *  - -5(ERR_REFUSED): 调用被拒绝。可能因为用户角色不是观众。
     *  - -7(ERR_NOT_INITIALIZED): SDK 尚未初始化。
     *  - -102(ERR_INVALID_CHANNEL_NAME): 频道名无效。请更换有效的频道名。
     *  - -113(ERR_NOT_IN_CHANNEL): 用户不在频道内。
     */
    export function switchChannel(token: string, channelId: string): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.SWITCH_CHANNEL, {token, channelId})
    }

    /** @en
     * Allows a user to leave a channel, such as hanging up or exiting a call.
     *
     * After joining a channel, the user must call the `leaveChannel` method to end the call before joining another channel.
     *
     * This method returns `0` if the user leaves the channel and releases all resources related to the call.
     *
     * This method call is asynchronous, and the user has not left the channel when the method call returns. Once the user leaves the
     * channel, the SDK triggers the [onLeaveChannel]{@link AgoraRtcEvents.onLeaveChannel} callback. A successful
     * [leaveChannel]{@link agora.leaveChannel} method call triggers the following callbacks:
     * - The local client: [onLeaveChannel]{@link AgoraRtcEvents.onLeaveChannel}.
     * - The remote client: [onUserOffline]{@link AgoraRtcEvents.onUserOffline}, if the user leaving the channel is in the
     * `COMMUNICATION` channel, or is a host in the `LIVE_BROADCASTING` profile.
     *
     * **Note**
     * - If you call the [release]{@link agora.release} method immediately after the `leaveChannel` method, the `leaveChannel` process
     * interrupts, and the [onLeaveChannel]{@link AgoraRtcEvents.onLeaveChannel} callback is not triggered.
     * - If you call the `leaveChannel` method during a CDN live streaming, the SDK triggers the
     * [removePublishStreamUrl]{@link agora.removePublishStreamUrl} method.
     *
     * @return - 0(ERR_OK): Success.
     * - < 0: Failure.
     *   - -1(ERR_FAILED): A general error occurs (no specified reason).
     *   - -2(ERR_INVALID_ARGUMENT): The parameter is invalid.
     *   - -7(ERR_NOT_INITIALIZED): The SDK is not initialized.
     */
    /** @cn
     * 离开频道。
     * 离开频道，即挂断或退出通话。
     * 当调用  [joinChannel]{@link agora.joinChannel}  方法后，必须调用 `leaveChannel` 结束通话，否则无法开始下一次通话。 不管当前是否在通话中，
     * 都可以调用 `leaveChannel`，没有副作用。该方法会把会话相关的所有资源释放掉。
     * 该方法是异步操作，调用返回时并没有真正退出频道。在真正退出频道后，SDK 会触发  [onLeaveChannel]{@link AgoraRtcEvents.onLeaveChannel}  回调。
     * 成功调用该方法离开频道后，本地会触发  [onLeaveChannel]{@link AgoraRtcEvents.onLeaveChannel}  回调；通信场景下的用户和直播场景下的主播离开频道
     * 后，远端会触发  [onUserOffline]{@link AgoraRtcEvents.onUserOffline}  回调。
     * @note
     * - 如果你调用了 `leaveChannel` 后立即调用 [release]{@link agora.release} ，SDK 将无法触发  
     * [onLeaveChannel]{@link AgoraRtcEvents.onLeaveChannel}  回调。
     * - 如果你在旁路推流时调用 `leaveChannel` 方法， SDK 将自动调用  [removePublishStreamUrl]{@link agora.removePublishStreamUrl}  方法。
     * @return
     * - 0(ERR_OK): 方法调用成功。
     * - < 0: 方法调用失败。
     *    - -1(ERR_FAILED): 一般性的错误（未明确归类）。
     *    - -2(ERR_INALID_ARGUMENT): 参数无效。
     *    - -7(ERR_NOT_INITIALIZED): SDK 尚未初始化。
     */
    export function leaveChannel(): number {
        if (isWeb) {
            client.leave(() => {
                event.emit('leave-channel', null)
                event.emit('leaveChannel', null)
            })
            return ERROR_CODE_TYPE.ERR_OK
        }
        return callNativeMethod(API_TYPE.LEAVE_CHANNEL)
    }

    /** @en
     * Gets a new token when the current token expires after a period of time.
     *
     * The `token` expires after a period of time once the token schema is enabled when:
     * - The SDK triggers the [onTokenPrivilegeWillExpire]{@link AgoraRtcEvents.onTokenPrivilegeWillExpire} callback, or
     * - The [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged} reports `CONNECTION_CHANGED_TOKEN_EXPIRED(9)`.
     *
     * The application should call this method to get the new `token`. Failure to do so will result in the SDK disconnecting from the
     * server.
     *
     * @param token The new token.
     *
     * @return
     * - 0(ERR_OK): Success.
     * - < 0: Failure.
     *   - -1(ERR_FAILED): A general error occurs (no specified reason).
     *   - -2(ERR_INVALID_ARGUMENT): The parameter is invalid.
     *   - -7(ERR_NOT_INITIALIZED): The SDK is not initialized.
     */
    /** @cn
     * 更新 Token。
     * 该方法用于更新 Token。如果启用了 Token 机制，过一段时间后使用的 Token 会失效。当：
     * - 发生  [onTokenPrivilegeWillExpire]{@link AgoraRtcEvents.onTokenPrivilegeWillExpire}  回调时，或发生
     * -  [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged}  回调报告 `CONNECTION_CHANGED_TOKEN_EXPIRED(9)` 时。
     * App 应重新获取 Token，然后调用该方法更新 Token，否则 SDK 无法和服务器建立连接。
     * @param token 新的 Token。
     * @return
     * - 0(ERR_OK): 方法调用成功。
     * - < 0: 方法调用失败。
     *    - -1(ERR_FAILED): 一般性的错误（未明确归类）。
     *    - -2(ERR_INALID_ARGUMENT): 参数无效。
     *    - -7(ERR_NOT_INITIALIZED): SDK 尚未初始化。
     */
    export function renewToken(token: string): number {
        if (isWeb) {
            client.renewToken(token)
            return ERROR_CODE_TYPE.ERR_OK
        }
        return callNativeMethod(API_TYPE.RE_NEW_TOKEN, {token})
    }

    /** @en
     * Registers a user account.
     *
     * Once registered, the user account can be used to identify the local user when the user joins the channel. After the user
     * successfully registers a user account, the SDK triggers the
     * [onLocalUserRegistered]{@link AgoraRtcEvents.onLocalUserRegistered} callback on the local client, reporting the user ID and
     * user account of the local user.
     *
     * To join a channel with a user account, you can choose either of the following:
     *
     * - Call the `registerLocalUserAccount` method to create a user account, and then the
     * [joinChannelWithUserAccount]{@link agora.joinChannelWithUserAccount} method to join the channel.
     * - Call the `joinChannelWithUserAccount` method to join the channel.
     *
     * The difference between the two is that for the former, the time elapsed between calling the `joinChannelWithUserAccount` method
     * and joining the channel is shorter than the latter.
     *
     * **Note**
     * - Ensure that you set the `userAccount` parameter. Otherwise, this method does not take effect.
     * - Ensure that the value of the `userAccount` parameter is unique in the channel.
     * - To ensure smooth communication, use the same parameter type to identify the user. For example, if a user joins the channel
     * with a user ID, then ensure all the other users use the user ID too. The same applies to the user account. If a user joins
     * the channel with the Agora Web SDK, ensure that the uid of the user is set to the same parameter type.
     *
     * @param appId The App ID of your project.
     * @param userAccount The user account. The maximum length of this parameter is 255 bytes. Ensure that you set this parameter
     * and do not set it as `null`. Supported character scopes are:
     * - All lowercase English letters: a to z.
     * - All uppercase English letters: A to Z.
     * - All numeric characters: 0 to 9.
     * - The space character.
     * - Punctuation characters and other symbols, including: "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".",
     * ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ",".
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 注册本地用户 User Account。
     * 该方法为本地用户注册一个 User Account。注册成功后，该 User Account 即可标识该本地用户的身份，用户可以使用它加入频道。成功注册 User Account 后，
     * 本地会触发  [onLocalUserRegistered]{@link AgoraRtcEvents.onLocalUserRegistered}  回调，告知本地用户的 UID 和 User Account。
     * 该方法为可选。如果你希望用户使用 User Account 加入频道，可以选用以下两种方式：
     * - 先调用  [registerLocalUserAccount]{@link agora.registerLocalUserAccount}  方法注册 Account，再调用  
     * [joinChannelWithUserAccount]{@link agora.joinChannelWithUserAccount}  方法加入频道
     * - 直接调用  [joinChannelWithUserAccount]{@link agora.joinChannelWithUserAccount}  方法加入频道
     * 
     * 两种方式的区别在于，提前调用  [registerLocalUserAccount]{@link agora.registerLocalUserAccount} ，可以缩短使用  
     * [joinChannelWithUserAccount]{@link agora.joinChannelWithUserAccount}  进入频道的时间。
     * 
     * @note
     * - `userAccount` 不能为空，否则该方法不生效。
     * - 请确保在该方法中设置的 `userAccount` 在频道中的唯一性。
     * - 为保证通信质量，请确保频道内使用同一类型的数据标识用户身份。即同一频道内需要统一使用 UID 或 User Account。如果有用户通过 Agora Web SDK 加入频道，
     * 请确保 Web 加入的用户也是同样类型。
     * @param appId 你的项目在 Agora 控制台注册的 App ID
     * @param userAccount 用户 User Account。该参数为必填，最大不超过 255 字节，不可填 `null`。请确保注册的 User Account 的唯一性。以下为支持的字符
     * 集范围（共 89 个字符）：
     * - 26 个小写英文字母 a-z
     * - 26 个大写英文字母 A-Z
     * - 10 个数字 0-9
     * - 空格
     * - "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@",
     * "[", "]", "^", "_", " {", "}", "|", "~", ","
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function registerLocalUserAccount(appId: string, userAccount: string): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.REGISTER_LOCAL_USER_ACCOUNT, {appId, userAccount})
    }

    /** @en
     * Joins the channel with a user account.
     *
     * After the user successfully joins the channel, the SDK triggers the following callbacks:
     *
     * - The local client: [onLocalUserRegistered]{@link AgoraRtcEvents.onLocalUserRegistered} and
     * [onJoinChannelSuccess]{@link AgoraRtcEvents.onJoinChannelSuccess}.
     * - The remote client: [onUserJoined]{@link AgoraRtcEvents.onUserJoined} and
     * [onUserInfoUpdated]{@link AgoraRtcEvents.onUserInfoUpdated}, if the user joining the channel is in the `COMMUNICATION` profile, or
     * is a host in the `LIVE_BROADCASTING` profile.
     *
     * **Note**
     * - To ensure smooth communication, use the same parameter type to identify the user. For example, if a user joins the channel
     * with a user ID, then ensure all the other users use the user ID too. The same applies to the user account.
     * - If a user joins the
     * channel with the Agora Web SDK, ensure that the uid of the user is set to the same parameter type.
     *
     * @param token The token for authentication:
     * - In situations not requiring high security: You can use the temporary token generated at Console. For details, see
     * [Get a temporary token](https://docs.agora.io/en/Agora%20Platform/token?platform=All%20Platforms#get-a-temporary-token).
     * - In situations requiring high security: Set it as the token generated at your server. For details, see
     * [Get a token](https://docs.agora.io/en/Agora%20Platform/token?platform=All%20Platforms#generatetoken).
     * @param channelId The channel name. The maximum length of this parameter is 64 bytes. Supported character scopes are:
     * - All lowercase English letters: a to z.
     * - All uppercase English letters: A to Z.
     * - All numeric characters: 0 to 9.
     * - The space character.
     * - Punctuation characters and other symbols, including: "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=",
     * ".", ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ",".
     * @param userAccount The user account. The maximum length of this parameter is 255 bytes. Ensure that you set this parameter
     * and do not set it as `null`. Supported character scopes are:
     * - All lowercase English letters: a to z.
     * - All uppercase English letters: A to Z.
     * - All numeric characters: 0 to 9.
     * - The space character.
     * - Punctuation characters and other symbols, including: "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=",
     * ".", ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ",".
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     *   - -2(`ERR_INVALID_ARGUMENT`)
     *   - -3(`ERR_NOT_READY`)
     *   - -5(`ERR_REFUSED`)
     */
    /** @cn
     * 使用 User Account 加入频道。
     *  该方法允许本地用户使用 User Account 加入频道。成功加入频道后，会触发以下回调：
     * - 本地： [onLocalUserRegistered]{@link AgoraRtcEvents.onLocalUserRegistered}  和  
     * [onJoinChannelSuccess]{@link AgoraRtcEvents.onJoinChannelSuccess}  回调
     * - 远端：通信场景下的用户和直播场景下的主播加入频道后，远端会依次触发  [onUserJoined]{@link AgoraRtcEvents.onUserJoined}  和  
     * [onUserInfoUpdated]{@link AgoraRtcEvents.onUserInfoUpdated}  回调
     * 
     * @note 为保证通信质量，请确保频道内使用同一类型的数据标识用户身份。即同一频道内需要统一使用 UID 或 User Account。
     * 如果有用户通过 Agora Web SDK 加入频道，请确保 Web 加入的用户也是同样类型。
     * 
     * @param token 在 App 服务器端生成的用于鉴权的 Token：
     * - 安全要求不高：你可以使用控制台生成的临时 Token，详见 [获取临时 Token](https://docs.agora.io/cn/Audio%20Broadcast/token?platform=All%20Platforms#get-a-temporary-token)。
     * - 安全要求高：将值设为你的服务端生成的正式 Token，详见 [获取正式 Token](https://docs.agora.io/cn/Audio%20Broadcast/token?platform=All%20Platforms#generatetoken)。
     * @param channelId 标识频道的频道名，最大不超过 64 字节。以下为支持的字符集范围（共 89 个字符）：
     * - 26 个小写英文字母 a-z
     * - 26 个大写英文字母 A-Z
     * - 10 个数字 0-9
     * - 空格
     * - "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", 
     * "~", ","
     * @param userAccount 用户 User Account。该参数为必需，最大不超过 255 字节，不可为 `null`。请确保注册的 User Account 的唯一性。以下为支持
     * 的字符集范围（共 89 个字符）：
     * - 26 个小写英文字母 a-z
     * - 26 个大写英文字母 A-Z
     * - 10 个数字 0-9
     * - 空格
     * - "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@",
     * "[", "]", "^", "_", " {", "}", "|", "~", ","
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     *    - [ERR_INVALID_ARGUMENT]{@link agora.ERR_INVALID_ARGUMENT} (-2)
     *    - [ERR_NOT_READY]{@link agora.ERR_NOT_READY} (-3)
     *    - [ERR_REFUSED]{@link agora.ERR_REFUSED} (-5)
     */
    export function joinChannelWithUserAccount(token: string, channelId: string, userAccount: string): number {
        if (isWeb) {
            client.join(token, channelId, userAccount, (uid) => {
                const spec: AgoraRTC.StreamSpec = {streamID: uid, audio: true, video: true, screen: false}
                localStream = AgoraRTC.createStream(spec)
                localStream.init(() => {
                    localStream.play('Cocos2dGameContainer')
                    client.publish(localStream)
                })

                event.emit('join-channel-success', channelId, uid, 0)
                event.emit('joinChannelSuccess', channelId, uid, 0)
            })
            return ERROR_CODE_TYPE.ERR_OK
        }
        return callNativeMethod(API_TYPE.JOIN_CHANNEL_WITH_USER_ACCOUNT, {token, channelId, userAccount})
    }

    /** @en
     * Gets the user information by passing in the user account.
     *
     * After a remote user joins the channel, the SDK gets the user ID and user account of the remote user, caches them
     * in [UserInfo]{@link agora.UserInfo}, and triggers the
     * [onUserInfoUpdated]{@link AgoraRtcEvents.onUserInfoUpdated}  callback on the local client.
     *
     * After receiving the [onUserInfoUpdated]{@link AgoraRtcEvents.onUserInfoUpdated} callback, you can call this method
     * to get the user ID of the remote user from the `UserInfo` interface by passing in the user account.
     *
     * @param userAccount The user account of the user. Ensure that you set this parameter.
     *
     * @return A [UserInfo]{@link agora.UserInfo} interface that identifies the user.
     */
    /** @cn
     * 通过 User Account 获取用户信息。
     * 远端用户加入频道后，SDK 会获取到该远端用户的 UID 和 User Account，然后缓存一个包含了远端用户 UID 和 User Account 的 Mapping 表，
     * 并在本地触发  [onUserInfoUpdated]{@link AgoraRtcEvents.onUserInfoUpdated}  回调。收到这个回调后，你可以调用该方法，
     * 通过传入 User Account 获取包含了指定用户 UID 的 `UserInfo`。
     * @param userAccount 用户 User Account。该参数为必填
     * @param[in, out] userInfo 标识用户信息的 `UserInfo`:
     * - 输入值：一个 `UserInfo`
     * - 输出值：一个包含了用户 User Account 和 UID 的 `UserInfo`
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function getUserInfoByUserAccount(userAccount: string): UserInfo {
        if (isWeb) {
            return null
        }
        return callNativeMethod(API_TYPE.GET_USER_INFO_BY_USER_ACCOUNT, {userAccount})
    }

    /** @en
     * Gets the user information by passing in the user ID.
     *
     * After a remote user joins the channel, the SDK gets the user ID and user account of the remote user,
     * caches [UserInfo]{@link agora.UserInfo}, and triggers the
     * [onUserInfoUpdated]{@link AgoraRtcEvents.onUserInfoUpdated} callback on the local client.
     *
     * After receiving the [onUserInfoUpdated]{@link AgoraRtcEvents.onUserInfoUpdated} callback, you can call this method
     * to get the user account of the remote user from the `UserInfo` interface by passing in the user ID.
     *
     * @param uid The user ID of the remote user. Ensure that you set this parameter.
     *
     * @return A [UserInfo]{@link agora.UserInfo} interface that identifies the user.
     */
    /** @cn
     * 通过 UID 获取用户信息。
     * 远端用户加入频道后， SDK 会获取到该远端用户的 UID 和 User Account，然后缓存一个包含了远端用户 UID 和 User Account 的 Mapping 表，
     * 并在本地触发  [onUserInfoUpdated]{@link AgoraRtcEvents.onUserInfoUpdated}  回调。收到这个回调后，你可以调用该方法，
     * 通过传入 UID 获取包含了指定用户 User Account 的 `UserInfo`。
     * @param uid 用户 UID。该参数为必填
     *
     * @return 标识用户信息的 [UserInfo]{@link agora.UserInfo}。
     */
    export function getUserInfoByUid(uid: number): UserInfo {
        if (isWeb) {
            return null
        }
        return callNativeMethod(API_TYPE.GET_USER_INFO_BY_UID, {uid})
    }

    /** @en
     * Starts an audio call test.
     *
     * This method starts an audio call test to determine whether the audio devices (for example, headset and speaker)
     * and the network connection are working properly.
     *
     * In the audio call test, you record your voice. If the recording plays back within the set time interval, the
     * audio devices and the network connection are working properly.
     *
     * **Note**
     * - Call this method before joining a channel.
     * - After calling this method, call the [stopEchoTest]{@link agora.stopEchoTest} method to end the test.
     * Otherwise, the app cannot run the next echo test, or call the [joinChannel]{@link agora.joinChannel} method.
     * - In the `LIVE_BROADCASTING` profile, only a host can call this method.
     *
     * @param intervalInSeconds The time interval (s) between when you speak and when the recording plays back.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 开始语音通话回路测试。
     * 该方法启动语音通话测试，目的是测试系统的音频设备（耳麦、扬声器等）和网络连接是否正常。
     * 在测试过程中，用户先说一段话，声音会在设置的时间间隔（单位为秒）后回放出来。
     * 如果用户能正常听到自己刚才说的话，就表示系统音频设备和网络连接都是正常的。
     * @note
     * - 请在加入频道前调用该方法。
     * - 调用 `startEchoTest` 后必须调用  [stopEchoTest]{@link agora.stopEchoTest}  以结束测试，否则不能进行下一次回声测试，也无法加入频道。
     * - 直播场景下，该方法仅能由用户角色为主播的用户调用。
     * @param intervalInSeconds 设置返回语音通话回路测试结果的时间间隔，取值范围为 [2, 10]，单位为秒，默认为 10 秒。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function startEchoTest(intervalInSeconds?: number): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        if (intervalInSeconds === undefined) {
            return callNativeMethod(API_TYPE.START_ECHO_TEST)
        }
        return callNativeMethod(API_TYPE.START_ECHO_TEST_2, {intervalInSeconds})
    }

    /** @en
     * Stops the audio call test.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 停止语音通话回路测试。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function stopEchoTest(): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.STOP_ECHO_TEST)
    }

    /** @en
     * @ignore
     * Enables the video module.
     *
     * Call this method either before joining a channel or during a call. If this method is called before joining a
     * channel, the call starts in the video mode. If this method is called during an audio call, the audio mode
     * switches to the video mode. To disable the video module, call the [disableVideo]{@link agora.disableVideo} method.
     *
     * A successful [enableVideo]{@link agora.enableVideo} method call triggers the
     * [onUserEnableVideo]{@link AgoraRtcEvents.onUserEnableVideo}(true) callback on the remote client.
     *
     * **Note**
     * - This method affects the internal engine and can be called after the [leaveChannel]{@link agora.leaveChannel} method.
     * - This method resets the internal engine and takes some time to take effect. We recommend using the following
     * API methods to control the video engine modules separately:
     *   - [enableLocalVideo]{@link agora.enableLocalVideo}: Whether to enable the camera to create the local video stream.
     *   - [muteLocalVideoStream]{@link agora.muteLocalVideoStream}: Whether to publish the local video stream.
     *   - [muteRemoteVideoStream]{@link agora.muteRemoteVideoStream}: Whether to subscribe to and play the remote video stream.
     *   - [muteAllRemoteVideoStreams]{@link agora.muteAllRemoteVideoStreams}: Whether to subscribe to and play all remote video streams.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 启用视频模块。
     * 该方法可以在加入频道前或者通话中调用，在加入频道前调用则自动开启视频模块；在通话中调用则由音频模式切换为视频模式。 调用  
     * [disableVideo]{@link agora.disableVideo}  方法可关闭视频模式。
     * 成功调用该方法后，远端会触发  [onUserEnableVideo]{@link AgoraRtcEvents.onUserEnableVideo}  (true) 回调。
     * 
     * @note
     * - 该方法设置内部引擎为启用状态，在  [leaveChannel]{@link agora.leaveChannel}  后仍然有效。
     * - 该方法重置整个引擎，响应时间较慢，因此声网建议使用如下方法来控制视频模块：
     *   -  [enableLocalVideo]{@link agora.enableLocalVideo} : 是否启动摄像头采集并创建本地视频流。
     *   -  [muteLocalVideoStream]{@link agora.muteLocalVideoStream} : 是否发布本地视频流。
     *   -  [muteRemoteVideoStream]{@link agora.muteRemoteVideoStream} : 是否接收并播放远端视频流。
     *   -  [muteAllRemoteVideoStreams]{@link agora.muteAllRemoteVideoStreams} : 是否接收并播放所有远端视频流。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function enableVideo(): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.ENABLE_VIDEO)
    }

    /** @en
     * @ignore
     * Disables the video module.
     *
     * This method can be called before joining a channel or during a call. If this method is called before joining a
     * channel, the call starts in audio mode. If this method is called during a video call, the video mode switches
     * to the audio mode. To enable the video module, call the [enableVideo]{@link agora.enableVideo} method.
     *
     * A successful [disableVideo]{@link agora.disableVideo} method call triggers the
     * [onUserEnableVideo]{@link AgoraRtcEvents.onUserEnableVideo} (false) callback on the remote client.
     *
     * **Note**
     * - This method affects the internal engine and can be called after the [leaveChannel]{@link agora.leaveChannel} method.
     * - This method resets the internal engine and takes some time to take effect. We recommend using the following API
     * methods to control the video engine modules separately:
     *   - [enableLocalVideo]{@link agora.enableLocalVideo} : Whether to enable the camera to create the local video stream.
     *   - [muteLocalVideoStream]{@link agora.muteLocalVideoStream} : Whether to publish the local video stream.
     *   - [muteRemoteVideoStream]{@link agora.muteRemoteVideoStream} : Whether to subscribe to and play the remote video stream.
     *   - [muteAllRemoteVideoStreams]{@link agora.muteAllRemoteVideoStreams} : Whether to subscribe to and play all remote video streams.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 关闭视频模块。
     * 该方法可以在加入频道前或者通话中调用，在加入频道前调用，则自动开启纯音频模式，在通话中调用则由视频模式切换为纯音频频模式。 
     * 调用  [enableVideo]{@link agora.enableVideo}  方法可开启视频模式。
     * 成功调用该方法后，远端会触发  [onUserEnableVideo]{@link AgoraRtcEvents.onUserEnableVideo}(false) 回调
     * @note
     * - 该方法设置内部引擎为禁用状态，在  [leaveChannel]{@link agora.leaveChannel}  后仍然有效。
     * - 该方法重置整个引擎，响应时间较慢，因此声网建议使用如下方法来控制视频模块：
     *   -  [enableLocalVideo]{@link agora.enableLocalVideo} : 是否启动摄像头采集并创建本地视频流。
     *   -  [muteLocalVideoStream]{@link agora.muteLocalVideoStream} : 是否发布本地视频流。
     *   -  [muteRemoteVideoStream]{@link agora.muteRemoteVideoStream} : 是否接收并播放远端视频流。
     *   -  [muteAllRemoteVideoStreams]{@link agora.muteAllRemoteVideoStreams} : 是否接收并播放所有远端视频流。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function disableVideo(): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.DISABLE_VIDEO)
    }

    /** @en
     * @ignore
     * Sets the video profile.
     *
     * @deprecated This method is deprecated. Use the [setVideoEncoderConfiguration]{@link agora.setVideoEncoderConfiguration}
     * method instead.
     *
     * Each video profile includes a set of parameters, such as the resolution, frame rate, and bitrate. If the camera
     * device does not support the specified resolution, the SDK automatically chooses a suitable camera resolution,
     * keeping the encoder resolution specified by the `setVideoProfile` method.
     *
     * **Note**
     * - If you do not need to set the video profile after joining the channel, call this method before the
     * [enableVideo]{@link agora.enableVideo} method to reduce the render time of the first video frame.
     * - Always set the video profile before calling the [joinChannel]{@link agora.joinChannel} or
     * [startPreview]{@link agora.startPreview} method.
     *
     * @param profile Sets the video profile. See [VIDEO_PROFILE_TYPE]{@link agora.VIDEO_PROFILE_TYPE}.
     * @param swapWidthAndHeight Sets whether to swap the width and height of the video stream:
     * - true: Swap the width and height.
     * - false: (Default) Do not swap the width and height.
     * The width and height of the output video are consistent with the set video profile.
     *
     * @note Since the landscape or portrait mode of the output video can be decided directly by the video profile,
     * We recommend setting `swapWidthAndHeight` to `false` (default).
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * @deprecated
     * 设置视频编码配置。
     * 该方法已废弃。请改用  [setVideoEncoderConfiguration]{@link agora.setVideoEncoderConfiguration}  方法。
     * 该方法设置视频编码属性（Profile）。每个属性对应一套视频参数，如分辨率、帧率、码率等。 当设备的摄像头不支持指定的分辨率时，Agora SDK 
     * 会自动选择一个合适的摄像头分辨率，但是编码分辨率仍然用 `setVideoProfile` 指定的。
     * @note
     * - 如果用户加入频道后不需要重新设置视频编码属性，则 声网建议在  [enableVideo]{@link agora.enableVideo}  前调用该方法，可以加快首帧出图的时间。
     * - 应在调用  [joinChannel]{@link agora.joinChannel}  或  [startPreview]{@link agora.startPreview}  前设置视频属性。
     * @param profile 视频属性。详见: [VIDEO_PROFILE_TYPE]{@link agora.VIDEO_PROFILE_TYPE} 。
     * @param swapWidthAndHeight SDK 会按照你选择的视频属性 (profile) 输出固定宽高的视频。该参数设置是否交换宽和高：
     * - true: 交换宽和高
     * - false: 不交换宽和高（默认）
     * 你可以直接通过视频属性 (profile) 来定义输出的视频是 Landscape（横屏）还是 Portrait（竖屏）模式，因此 声网建议你将参数设置为默认值。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setVideoProfile(profile: VIDEO_PROFILE_TYPE, swapWidthAndHeight: boolean): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                const profiles = {
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_120P]: '120p_1',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_120P_3]: '120p_3',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_180P]: '180p_1',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_180P_3]: '180p_3',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_180P_4]: '180p_4',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_240P]: '240p_1',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_240P_3]: '240p_3',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_240P_4]: '240p_4',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_360P]: '360p_1',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_360P_3]: '360p_3',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_360P_4]: '360p_4',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_360P_6]: '360p_6',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_360P_7]: '360p_7',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_360P_8]: '360p_8',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_360P_9]: '360p_9',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_360P_10]: '360p_10',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_360P_11]: '360p_11',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_480P]: '480p_1',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_480P_3]: '480p_3',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_480P_4]: '480p_4',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_480P_6]: '480p_6',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_480P_8]: '480p_8',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_480P_9]: '480p_9',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_480P_10]: '480p_10',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_720P]: '720p_1',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_720P_3]: '720p_3',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_720P_5]: '720p_5',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_720P_6]: '720p_6',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_1080P]: '1080p_1',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_1080P_3]: '1080p_3',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_1080P_5]: '1080p_5',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_1440P]: '1440p_1',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_1440P_2]: '1440p_2',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_4K]: '4K_1',
                    [VIDEO_PROFILE_TYPE.VIDEO_PROFILE_LANDSCAPE_4K_3]: '4K_3',
                }
                if (profiles[profile] === undefined) {
                    return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
                } else {
                    localStream.setVideoProfile(profiles[profile])
                    return ERROR_CODE_TYPE.ERR_OK
                }
            }
        }
        return callNativeMethod(API_TYPE.SET_VIDEO_PROFILE, {profile, swapWidthAndHeight})
    }

    /** @en
     * @ignore
     * Sets the video encoder configuration.
     *
     * Each video encoder configuration corresponds to a set of video parameters, including the resolution, frame rate,
     * bitrate, and video orientation.
     *
     * The parameters specified in this method are the maximum values under ideal network conditions. If the video
     * engine cannot render the video using the specified parameters due to poor network conditions, the parameters
     * further down the list are considered until a successful configuration is found.
     *
     * @note If you do not need to set the video encoder configuration after joining the channel, you can call this
     * method before the [enableVideo]{@link agora.enableVideo} method to reduce the render time of the first video frame.
     *
     * @param config Sets the local video encoder configuration. See
     * [VideoEncoderConfiguration]{@link agora.VideoEncoderConfiguration}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 设置视频编码属性。
     * 设置本地视频的编码属性。
     * @param config 视频编码参数配置。详见: [VideoEncoderConfiguration]{@link agora.VideoEncoderConfiguration}。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setVideoEncoderConfiguration(config: VideoEncoderConfiguration): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                const configuration: AgoraRTC.VideoEncoderConfiguration = {
                    resolution: {width: config.dimensions.width, height: config.dimensions.height},
                    frameRate: {max: config.frameRate, min: config.minFrameRate},
                    bitrate: {max: config.bitrate, min: config.minBitrate}
                }
                localStream.setVideoEncoderConfiguration(configuration)
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethod(API_TYPE.SET_VIDEO_ENCODER_CONFIGURATION, {config})
    }

    /** @en
     * @ignore
     * Sets the camera capture configuration.
     *
     * For a video call or the live interactive video streaming, generally the SDK controls the camera output
     * parameters. When the default camera capturer settings do not meet special requirements or cause performance
     * problems, we recommend using this method to set the camera capturer configuration:
     * - If the resolution or frame rate of the captured raw video data are higher than those set by
     * [setVideoEncoderConfiguration]{@link agora.setVideoEncoderConfiguration}, processing video frames requires
     * extra CPU and RAM usage and degrades performance. We recommend setting `config` as
     * `CAPTURER_OUTPUT_PREFERENCE_PERFORMANCE(1)` to avoid such problems.
     * - If you do not need local video preview or are willing to sacrifice preview quality, we recommend setting
     * `config` as `CAPTURER_OUTPUT_PREFERENCE_PERFORMANCE(1)` to optimize CPU and RAM usage.
     * - If you want better quality for the local video preview, we recommend setting config as
     * `CAPTURER_OUTPUT_PREFERENCE_PREVIEW(2)`.
     *
     * @note Call this method before enabling the local camera. That said, you can call this method before calling
     * [joinChannel]{@link agora.joinChannel}, [enableVideo]{@link agora.enableVideo}, or
     * [enableLocalVideo]{@link agora.enableLocalVideo}, depending on which method you use to turn on your local camera.
     *
     * @param config Sets the camera capturer configuration. See
     * [CameraCapturerConfiguration]{@link agora.CameraCapturerConfiguration}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 设置摄像头采集偏好。
     * 一般的视频通话或直播中，默认由 SDK 自动控制摄像头的输出参数。在如下特殊场景中，默认的参数通常无法满足需求，或可能引起设备性能问题，
     * 我们推荐调用该方法设置摄像头的采集偏好：
     * - 使用原始音视频数据自采集接口时，如果 SDK 输出的分辨率和帧率高于  [setVideoEncoderConfiguration]{@link agora.setVideoEncoderConfiguration} 
     * 中指定的参数，在后续处理视频帧的时候，比如美颜功能时，会需要更高的 CPU 及内存，容易导致性能问题。在这种情况下，我们推荐将摄像头采集偏好设置
     * 为 `CAPTURER_OUTPUT_PREFERENCE_PERFORMANCE(1)`，避免性能问题。
     * - 如果没有本地预览功能或者对预览质量没有要求，我们推荐将采集偏好设置为 `CAPTURER_OUTPUT_PREFERENCE_PERFORMANCE(1)`，以优化 CPU 和内存的资源分配。
     * - 如果用户希望本地预览视频比实际编码发送的视频清晰，可以将采集偏好设置为 `CAPTURER_OUTPUT_PREFERENCE_PREVIEW(2)`。
     * @note 请在启动摄像头之前调用该方法，如  [joinChannel]{@link agora.joinChannel} ， [enableVideo]{@link agora.enableVideo}  或者  
     * [enableLocalVideo]{@link agora.enableLocalVideo}  之前。
     * 
     * @param config 摄像头采集偏好，详见 [CameraCapturerConfiguration]{@link agora.CameraCapturerConfiguration}。
     * 
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setCameraCapturerConfiguration(config: CameraCapturerConfiguration): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.SET_CAMERA_CAPTURER_CONFIGURATION, {config})
    }

    /** @en
     * @ignore
     * Starts the local video preview before joining the channel.
     *
     * Before calling this method, you must:
     * - Call the [setupLocalVideo]{@link agora.setupLocalVideo} method to set up the local preview window and
     * configure the attributes.
     * - Call the [enableVideo]{@link agora.enableVideo} method to enable video.
     *
     * @note Once the `startPreview` method is called to start the local video preview, if you leave the channel by
     * calling the [leaveChannel]{@link agora.leaveChannel} method, the local video preview remains until you call
     * the [stopPreview]{@link agora.stopPreview} method to disable it.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 开启视频预览。
     * 该方法用于在进入频道前启动本地视频预览。调用该 API 前，必须：
     * - 调用  [setupLocalVideo]{@link agora.setupLocalVideo}  设置预览窗口及属性；
     * - 调用  [enableVideo]{@link agora.enableVideo}  开启视频功能。
     * 
     * 启用了本地视频预览后，如果调用  [leaveChannel]{@link agora.leaveChannel}  退出频道，本地预览依然处于启动状态，如需要关闭本地预览，
     * 需要调用  [stopPreview]{@link agora.stopPreview} 。
     * 
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function startPreview(): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.START_PREVIEW)
    }

    /** @en
     * @ignore
     * Prioritizes a remote user's stream.
     *
     * Use this method with the [setRemoteSubscribeFallbackOption]{@link agora.setRemoteSubscribeFallbackOption} method.
     * If the fallback function is enabled for a subscribed stream, the SDK ensures the high-priority user gets the
     * best possible stream quality.
     *
     * @note The Agora SDK supports setting `userPriority` as `PRIORITY_HIGH` for one user only.
     *
     * @param uid The ID of the remote user.
     * @param userPriority Sets the priority of the remote user. See [PRIORITY_TYPE]{@link agora.PRIORITY_TYPE}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 设置远端用户流的优先级。
     * 设置远端用户的优先级。如果将某个用户的优先级设为高，那么发给这个用户的音视频流的优先级就会高于其他用户。
     * 
     * 弱网下 SDK 会优先保证高优先级用户收到的流的质量。
     * 
     * @note 目前 Agora SDK 仅允许将一名远端用户设为高优先级。
     * @param  uid  远端用户的 ID。
     * @param  userPriority 远端用户的需求优先级。详见: [PRIORITY_TYPE]{@link agora.PRIORITY_TYPE} 。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setRemoteUserPriority(uid: number, userPriority: PRIORITY_TYPE): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.SET_REMOTE_USER_PRIORITY, {uid, userPriority})
    }

    /** @en
     * @ignore
     * Stops the local video preview and disables video.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 停止视频预览。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function stopPreview(): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.STOP_PREVIEW)
    }

    /** @en
     * Enables the audio module.
     *
     * The audio mode is enabled by default.
     *
     * **Note**
     * - This method affects the internal engine and can be called after the [leaveChannel]{@link agora.leaveChannel}
     * method. You can call this method either before or after joining a channel.
     * - This method resets the internal engine and takes some time to take effect. We recommend using the following
     * API methods to control the audio engine modules separately:
     *   - [enableLocalAudio]{@link agora.enableLocalAudio}: Whether to enable the microphone to create the local audio stream.
     *   - [muteLocalAudioStream]{@link agora.muteLocalAudioStream}: Whether to publish the local audio stream.
     *   - [muteRemoteAudioStream]{@link agora.muteRemoteAudioStream}: Whether to subscribe to and play the remote audio stream.
     *   - [muteAllRemoteAudioStreams]{@link agora.muteAllRemoteAudioStreams}: Whether to subscribe to and play all remote audio streams.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 启用音频模块。
     * 启用音频模块（默认为开启状态）。
     * @note
     * - 该方法设置内部引擎为启用状态，在频道内和频道外均可调用。在  [leaveChannel]{@link agora.leaveChannel}  后仍然有效。
     * - 该方法重置整个引擎，响应时间较慢，因此声网建议使用如下方法来控制音频模块：
     *   -  [enableLocalAudio]{@link agora.enableLocalAudio} : 是否启动麦克风采集并创建本地音频流。
     *   -  [muteLocalAudioStream]{@link agora.muteLocalAudioStream} : 是否发布本地音频流。
     *   -  [muteRemoteAudioStream]{@link agora.muteRemoteAudioStream} : 是否接收并播放远端音频流。
     *   -  [muteAllRemoteAudioStreams]{@link agora.muteAllRemoteAudioStreams} : 是否接收并播放所有远端音频流。
     * 
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function enableAudio(): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.ENABLE_AUDIO)
    }

    /** @en
     * Disables/Re-enables the local audio function.
     *
     * The audio function is enabled by default. This method disables or re-enables the local audio function, that is,
     * to stop or restart local audio capturing.
     *
     * This method does not affect receiving or playing the remote audio streams,and `enableLocalAudio(false)` is
     * applicable to scenarios where the user wants to receive remote audio streams without sending any audio stream to
     * other users in the channel.
     *
     * Once the local audio function is disabled or re-enabled, the SDK triggers the
     * [onLocalAudioStateChanged]{@link AgoraRtcEvents.onLocalAudioStateChanged} callback, which reports
     * `LOCAL_AUDIO_STREAM_STATE_STOPPED(0)` or `LOCAL_AUDIO_STREAM_STATE_RECORDING(1)`.
     *
     * @note
     * This method is different from the [muteLocalAudioStream]{@link agora.muteLocalAudioStream} method:
     *   - `enableLocalAudio: Disables/Re-enables the local audio capturing and processing. If you disable or re-enable
     * local audio recording using the `enableLocalAudio` method, the local user may hear a pause in the remote audio
     * playback.
     *   - [muteLocalAudioStream]{@link agora.muteLocalAudioStream}: Sends/Stops sending the local audio streams.
     *
     * @param enabled Sets whether to disable/re-enable the local audio function:
     * - true: (Default) Re-enable the local audio function, that is, to start the local audio capturing device
     * (for example, the microphone).
     * - false: Disable the local audio function, that is, to stop local audio capturing.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 开关本地音频采集。
     * 当用户加入频道时，语音功能默认是开启的。该方法可以关闭或重新开启本地语音功能，即停止或重新开始本地音频采集。
     * 该方法不影响接收或播放远端音频流， [enableLocalAudio]{@link agora.enableLocalAudio} (false) 适用于只听不发的用户场景。
     * 语音功能关闭或重新开启后，会收到回调  [onLocalAudioStateChanged]{@link AgoraRtcEvents.onLocalAudioStateChanged} ，
     * 并报告 `LOCAL_AUDIO_STREAM_STATE_STOPPED(0)` 或 `LOCAL_AUDIO_STREAM_STATE_RECORDING(1)`。
     * @note
     * 该方法与  [muteLocalAudioStream]{@link agora.muteLocalAudioStream}  的区别在于：
     * -  [enableLocalAudio]{@link agora.enableLocalAudio} : 开启或关闭本地语音采集及处理。使用 `enableLocalAudio` 关闭或开启本地采集后，
     * 本地听远端播放会有短暂中断。
     * -  [muteLocalAudioStream]{@link agora.muteLocalAudioStream} : 停止或继续发送本地音频流。
     * 
     * @param enabled
     * - true: 重新开启本地语音功能，即开启本地语音采集（默认）；
     * - false: 关闭本地语音功能，即停止本地语音采集。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function enableLocalAudio(enabled: boolean): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                if (enabled) {
                    localStream.enableAudio()
                } else {
                    localStream.disableAudio()
                }
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethod(API_TYPE.ENABLE_LOCAL_AUDIO, {enabled})
    }

    /** @en
     * Disables the audio module.
     *
     * **Note**
     * - This method affects the internal engine and can be called after the [leaveChannel]{@link agora.leaveChannel}
     * method. You can call this method either before or after joining a channel.
     * - This method resets the internal engine and takes some time to take effect. We recommend using the
     * [enableLocalAudio]{@link agora.enableLocalAudio} and [muteLocalAudioStream]{@link agora.muteLocalAudioStream}
     * methods to capture, process, and send the local audio streams.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 关闭音频模块。
     * @note
     * - 该方法设置内部引擎为禁用状态，在频道内和频道外均可调用。在  [leaveChannel]{@link agora.leaveChannel}  后仍然有效。
     * - 该方法重置整个引擎，响应时间较慢，因此声网建议使用如下方法来控制音频模块：
     *   -  [enableLocalAudio]{@link agora.enableLocalAudio} : 是否启动麦克风采集并创建本地音频流。
     *   -  [muteLocalAudioStream]{@link agora.muteLocalAudioStream} : 是否发布本地音频流。
     *   -  [muteRemoteAudioStream]{@link agora.muteRemoteAudioStream} : 是否接收并播放远端音频流。
     *   -  [muteAllRemoteAudioStreams]{@link agora.muteAllRemoteAudioStreams} : 是否接收并播放所有远端音频流。
     * 
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function disableAudio(): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.DISABLE_AUDIO)
    }

    /** @en
     * Sets the audio parameters and application scenarios.
     *
     * **Note**
     * - The `setAudioProfile` method must be called before the [joinChannel]{@link agora.joinChannel} method.
     * - In the `COMMUNICATION` and `LIVE_BROADCASTING` profiles, the bitrate may be different from your settings due
     * to network self-adaptation.
     * - In scenarios requiring high-quality audio, for example, a music teaching scenario, we recommend setting
     * `profile` as `AUDIO_PROFILE_MUSIC_HIGH_QUALITY(4)` and `scenario` as `AUDIO_SCENARIO_GAME_STREAMING(3)`.
     *
     * @param  profile Sets the sample rate, bitrate, encoding mode, and the number of channels. See
     * [AUDIO_PROFILE_TYPE]{@link agora.AUDIO_PROFILE_TYPE}.
     * @param  scenario Sets the audio application scenario. See [AUDIO_SCENARIO_TYPE]{@link agora.AUDIO_SCENARIO_TYPE}.
     * Under different audio scenarios, the device uses different volume tracks, i.e. either the in-call volume or
     * the media volume. For details, see
     * [What is the difference between the in-call volume and the media volume?](https://docs.agora.io/en/faq/system_volume).
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 设置音频编码属性。
     * @note
     * - 该方法需要在 [joinChannel]{@link agora.joinChannel} 之前设置好， `joinChannel` 之后设置不生效。
     * - 通信和直播场景下，音质（码率）会有网络自适应的调整，通过该方法设置的是一个最高码率。
     * - 在有高音质需求的场景（例如音乐教学场景）中，建议将 `profile` 设置为 `AUDIO_PROFILE_MUSIC_HIGH_QUALITY(4)``，scenario` 设置为 
     * `AUDIO_SCENARIO_GAME_STREAMING(3)`。
     * 
     * @param  profile 设置采样率，码率，编码模式和声道数: [AUDIO_PROFILE_TYPE]{@link agora.AUDIO_PROFILE_TYPE}。
     * @param  scenario 设置音频应用场景: #AUDIO_SCENARIO_TYPE 。不同的音频场景下，设备的系统音量是不同的。详见
     * [如何区分媒体音量和通话音量](https://docs.agora.io/cn/faq/system_volume)。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setAudioProfile(profile: AUDIO_PROFILE_TYPE, scenario: AUDIO_SCENARIO_TYPE): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                const profiles = {
                    [AUDIO_PROFILE_TYPE.AUDIO_PROFILE_SPEECH_STANDARD]: 'speech_standard',
                    [AUDIO_PROFILE_TYPE.AUDIO_PROFILE_MUSIC_STANDARD]: 'music_standard',
                    [AUDIO_PROFILE_TYPE.AUDIO_PROFILE_MUSIC_STANDARD_STEREO]: 'standard_stereo',
                    [AUDIO_PROFILE_TYPE.AUDIO_PROFILE_MUSIC_HIGH_QUALITY]: 'high_quality',
                    [AUDIO_PROFILE_TYPE.AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO]: 'high_quality_stereo',
                }
                if (profiles[profile] === undefined) {
                    return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
                } else {
                    localStream.setAudioProfile(profiles[profile])
                    return ERROR_CODE_TYPE.ERR_OK
                }
            }
        }
        return callNativeMethod(API_TYPE.SET_AUDIO_PROFILE, {profile, scenario})
    }

    /** @en
     * Stops/Resumes sending the local audio stream.
     *
     * A successful `muteLocalAudioStream` method call triggers the [onUserMuteAudio]{@link AgoraRtcEvents.onUserMuteAudio}
     * callback on the remote client.
     *
     * **Note**
     * - When `mute` is set as `true`, this method does not disable the microphone, which does not affect any ongoing recording.
     * - If you call [setChannelProfile]{@link agora.setChannelProfile} after this method, the SDK resets whether or not to mute
     * the local audio according to the channel profile and user role. Therefore, we recommend calling this method after the
     * `setChannelProfile` method.
     *
     * @param mute Sets whether to send or stop sending the local audio stream:
     * - true: Stops sending the local audio stream.
     * - false: (Default) Sends the local audio stream.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 开关本地音频发送。
     * 该方法用于允许/禁止往网络发送本地音频流。
     * 成功调用该方法后，远端会触发  [onUserMuteAudio]{@link AgoraRtcEvents.onUserMuteAudio}  回调。
     * @note
     * - 该方法不影响录音状态，因为并没有禁用录音设备。
     * - 如果你在该方法后调用  [setChannelProfile]{@link agora.setChannelProfile}  方法，SDK 会根据你设置的频道场景以及用户角色，
     * 重新设置是否停止发送本地音频。因此我们建议在 `setChannelProfile` 后调用该方法。
     * @param mute
     * - true: 停止发送本地音频流；
     * - false: 继续发送本地音频流（默认）。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function muteLocalAudioStream(mute: boolean): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                if (mute) {
                    localStream.muteAudio()
                } else {
                    localStream.unmuteAudio()
                }
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethod(API_TYPE.MUTE_LOCAL_AUDIO_STREAM, {mute})
    }

    /** @en
     * Stops/Resumes receiving all remote users' audio streams.
     *
     * @param mute Sets whether to receive or stop receiving all remote users' audio streams.
     * - true: Stops receiving all remote users' audio streams.
     * - false: (Default) Receives all remote users' audio streams.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 接收／停止接收所有音频流。
     * @param mute
     * - true: 停止接收所有音频流；
     * - false: 继续接收所有音频流（默认）。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function muteAllRemoteAudioStreams(mute: boolean): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.MUTE_ALL_REMOTE_AUDIO_STREAMS, {mute})
    }

    /** @en
     * Stops/Resumes receiving all remote users' audio streams by default.
     *
     * You can call this method either before or after joining a channel. If you call `setDefaultMuteAllRemoteAudioStreams (true)`
     * after joining a channel, the remote audio streams of all subsequent users are not received.
     *
     * @note If you want to resume receiving the audio stream, call [muteRemoteAudioStream(false)]{@link agora.muteRemoteAudioStream},
     * and specify the ID of the remote user whose audio stream you want to receive. To receive the audio streams of multiple remote
     * users, call `muteRemoteAudioStream(false)` as many times. Calling `setDefaultMuteAllRemoteAudioStreams (false)` resumes
     * receiving the audio streams of subsequent users only.
     *
     * @param mute Sets whether to receive/stop receiving all remote users' audio streams by default:
     * - true:  Stops receiving all remote users' audio streams by default.
     * - false: (Default) Receives all remote users' audio streams by default.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 设置是否默认接收所有音频流。
     * 该方法在加入频道前后都可调用。如果在加入频道后调用 `setDefaultMuteAllRemoteAudioStreams(true)`，
     * 会接收不到后面加入频道的用户的音频流。
     * @note
     * 停止接收音频流后，如果想要恢复接收，请调用 [muteRemoteAudioStream(false)]{@link agora.muteRemoteAudioStream}，并指定你想要接收的远端用户的 ID。
     * 如果想恢复接收多个用户的音频流，则需要多次调用 `muteRemoteAudioStream`。 `setDefaultMuteAllRemoteAudioStreams(false)`
     * 只能恢复接收后面加入频道的用户的音频流。
     * @param mute
     * - true:  默认停止接收所有音频流；
     * - false: 默认接收所有音频流（默认）。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setDefaultMuteAllRemoteAudioStreams(mute: boolean): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.SET_DEFAULT_MUTE_ALL_REMOTE_AUDIO_STREAMS, {mute})
    }

    /** @en
     * Adjusts the playback volume of a specified remote user.
     *
     * You can call this method as many times as necessary to adjust the playback volume of different remote users, or to
     * repeatedly adjust the playback volume of the same remote user.
     *
     * **Note**
     * - Call this method after joining a channel.
     * - The playback volume here refers to the mixed volume of a specified remote user.
     * - This method can only adjust the playback volume of one specified remote user at a time. To adjust the playback volume of
     * different remote users, call the method as many times, once for each remote user.
     *
     * @param uid The ID of the remote user.
     * @param volume The playback volume of the specified remote user. The value ranges from 0 to 100:
     * - 0: Mute.
     * - 100: Original volume.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 调节本地播放的指定远端用户音量。
     * 你可以在通话中调用该方法调节指定远端用户在本地播放的音量。如需调节多个用户在本地播放的音量，则需多次调用该方法。
     * @note
     * - 请在加入频道后，调用该方法。
     * - 该方法调节的是本地播放的指定远端用户混音后的音量。
     * @param uid 远端用户 ID。
     * @param volume 播放音量，取值范围为 [0,100]:
     * - 0: 静音
     * - 100: 原始音量
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function adjustUserPlaybackSignalVolume(uid: number, volume: number): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.ADJUST_USER_PLAYBACK_SIGNAL_VOLUME, {uid, volume})
    }

    /** @en
     * Stops/Resumes receiving a specified remote user's audio stream.
     *
     * @note If you called the [muteAllRemoteAudioStreams]{@link agora.muteAllRemoteAudioStreams} method and set `mute`
     * as `true` to stop receiving all remote users' audio streams, call the `muteAllRemoteAudioStreams` method and set
     * `mute` as `false` before calling this method. The `muteAllRemoteAudioStreams` method sets all remote audio
     * streams, while the `muteAllRemoteAudioStreams` method sets a specified remote audio stream.
     *
     * @param userId User ID of the specified remote user sending the audio.
     * @param mute Sets whether to receive/stop receiving a specified remote user's audio stream:
     * - true: Stops receiving the specified remote user's audio stream.
     * - false: (Default) Receives the specified remote user's audio stream.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 接收／停止接收指定音频流。
     * @note 如果之前有调用过  [muteAllRemoteAudioStreams]{@link agora.muteAllRemoteAudioStreams}  (true) 停止订阅所有远端音频，
     * 在调用本 API 之前请确保你已调用  [muteAllRemoteAudioStreams]{@link agora.muteAllRemoteAudioStreams}  (false)。
     * `muteAllRemoteAudioStreams` 是全局控制，`muteRemoteAudioStream` 是精细控制。
     * @param userId 指定用户的 ID
     * @param mute
     * - true: 停止接收指定音频流；
     * - false: 继续接收指定音频流（默认）。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function muteRemoteAudioStream(userId: number, mute: boolean): number {
        if (isWeb) {
            const stream = remoteStreams.get(userId)
            if (stream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                if (mute) {
                    stream.muteAudio()
                } else {
                    stream.unmuteAudio()
                }
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethod(API_TYPE.MUTE_REMOTE_AUDIO_STREAM, {userId, mute})
    }

    /** @en
     * @ignore
     * Stops/Resumes sending the local video stream.
     *
     * A successful `muteLocalVideoStream` method call triggers the
     * [onUserMuteVideo]{@link AgoraRtcEvents.onUserMuteVideo} callback on the remote client.
     *
     * **Note**
     * - When set to `true`, this method does not disable the camera which does not affect the retrieval of the local
     * video streams. This method executes faster than the [enableLocalVideo]{@link agora.enableLocalVideo} method
     * which controls the sending of the local video stream.
     * - If you call [setChannelProfile]{@link agora.setChannelProfile} after this method, the SDK resets whether or
     * not to mute the local video according to the channel profile and user role. Therefore, we recommend calling
     * this method after the `setChannelProfile` method.
     *
     * @param mute Sets whether to send/stop sending the local video stream:
     * - true: Stop sending the local video stream.
     * - false: (Default) Send the local video stream.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 开关本地视频发送。
     * 成功调用该方法后，远端会触发  [onUserMuteVideo]{@link AgoraRtcEvents.onUserMuteVideo}  回调。
     * @note
     * - 调用该方法时，SDK 不再发送本地视频流，但摄像头仍然处于工作状态。相比于  [enableLocalVideo]{@link agora.enableLocalVideo}  (false) 
     * 用于控制本地视频流发送的方法，该方法响应速度更快。该方法不影响本地视频流获取，没有禁用摄像头。
     * - 如果你在该方法后调用  [setChannelProfile]{@link agora.setChannelProfile}  方法，SDK 会根据你设置的频道场景以及用户角色，
     * 重新设置是否停止发送本地视频。因此我们建议在 `setChannelProfile` 后调用该方法。
     * @param mute
     * - true: 不发送本地视频流
     * - false: 发送本地视频流（默认）。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function muteLocalVideoStream(mute: boolean): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                if (mute) {
                    localStream.muteVideo()
                } else {
                    localStream.unmuteVideo()
                }
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethod(API_TYPE.MUTE_LOCAL_VIDEO_STREAM, {mute})
    }

    /** @en
     * @ignore
     * Enables/Disables the local video capture.
     *
     * This method disables or re-enables the local video capturer, and does not affect receiving the remote video stream.
     *
     * After you call the [enableVideo]{@link agora.enableVideo} method, the local video capturer is enabled by default.
     * You can call `enableLocalVideo(false)` to disable the local video capturer. If you want to re-enable it, call
     * `[enableLocalVideo(true)`.
     *
     * After the local video capturer is successfully disabled or re-enabled, the SDK triggers the
     * [onUserEnableLocalVideo]{@link AgoraRtcEvents.onUserEnableLocalVideo} callback on the remote client.
     *
     * @note This method affects the internal engine and can be called after the [leaveChannel]{@link agora.leaveChannel} method.
     *
     * @param enabled Sets whether to disable/re-enable the local video, including the capturer, renderer, and sender:
     * - true: (Default) Re-enable the local video.
     * - false: Disable the local video. Once the local video is disabled, the remote users can no longer receive the
     * video stream of this user, while this user can still receive the video streams of the other remote users.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 开关本地视频采集。
     * 该方法禁用或重新启用本地视频采集，不影响接收远端视频。
     * 调用  [enableVideo]{@link agora.enableVideo}  后，本地视频即默认开启。你可以调用  
     * [enableLocalVideo(false)]{@link agora.enableLocalVideo}  关闭本地视频采集。关闭后如果想要重新开启，则可调用  
     * [enableLocalVideo(true)]{@link agora.enableLocalVideo} 。
     * 成功禁用或启用本地视频采集后，远端会触发  [onUserEnableLocalVideo]{@link AgoraRtcEvents.onUserEnableLocalVideo}  回调。
     * @note 该方法设置内部引擎为启用状态，在  [leaveChannel]{@link agora.leaveChannel}  后仍然有效。
     * @param  enabled
     * - true: 开启本地视频采集和渲染 (默认)；
     * - false: 关闭使用本地摄像头设备。关闭后，远端用户会接收不到本地用户的视频流；但本地用户依然可以接收远端用户的视频流。设置为 false 时，
     * 该方法不需要本地有摄像头。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function enableLocalVideo(enabled: boolean): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                if (enabled) {
                    localStream.enableVideo()
                } else {
                    localStream.disableVideo()
                }
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethod(API_TYPE.ENABLE_LOCAL_VIDEO, {enabled})
    }

    /** @en
     * @ignore
     * Stops/Resumes receiving all video stream from a specified remote user.
     *
     * @param  mute Sets whether to receive/stop receiving all remote users' video streams:
     * - true: Stop receiving all remote users' video streams.
     * - false: (Default) Receive all remote users' video streams.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 接收／停止接收所有远端视频流。
     * @param  mute
     * - true: 停止接收所有远端视频流；
     * - false: 允许接收所有远端视频流（默认）。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function muteAllRemoteVideoStreams(mute: boolean): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.MUTE_ALL_REMOTE_VIDEO_STREAMS, {mute})
    }

    /** @en
     * @ignore
     * Stops/Resumes receiving all remote users' video streams by default.
     *
     * You can call this method either before or after joining a channel. If you call `setDefaultMuteAllRemoteVideoStreams (true)`
     * after joining a channel, the remote video streams of all subsequent users are not received.
     *
     * @note If you want to resume receiving the video stream, call [muteRemoteVideoStream(false)]{@link agora.muteRemoteVideoStream},
     * and specify the ID of the remote user whose video stream you want to receive. To receive the video streams of multiple
     * remote users, call `muteRemoteVideoStream(false)` as many times. Calling `setDefaultMuteAllRemoteVideoStreams(false)`
     * resumes receiving the video streams of subsequent users only.
     *
     * @param mute Sets whether to receive/stop receiving all remote users' video streams by default:
     * - true: Stop receiving all remote users' video streams by default.
     * - false: (Default) Receive all remote users' video streams by default.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 设置是否默认停止接收视频流。
     * 该方法在加入频道前后都可调用。如果在加入频道后调用 `setDefaultMuteAllRemoteVideoStreams (true)`，会接收不到设置后加入频道的用户的视频流。
     * @note 停止接收视频流后，如果想要恢复接收，请调用  [muteRemoteVideoStream (false)]{@link agora.muteRemoteVideoStream} ，
     * 并指定你想要接收的远端用户 `uid`；如果想恢复接收多个用户的视频流，则需要多次调用 `muteRemoteVideoStream`。
     * `setDefaultMuteAllRemoteVideoStreams (false)` 只能恢复接收后面加入频道的用户的视频流。
     * @param mute
     * - true: 默认停止接收所有远端视频；
     * - false: 默认接收所有远端视频（默认）。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setDefaultMuteAllRemoteVideoStreams(mute: boolean): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.SET_DEFAULT_MUTE_ALL_REMOTE_VIDEO_STREAMS, {mute})
    }

    /** @en
     * @ignore
     * Stops/Resumes receiving the video stream from a specified remote user.
     *
     * @note If you called the [muteAllRemoteVideoStreams]{@link agora.muteAllRemoteVideoStreams} method and set `mute`
     * as `true` to stop receiving all remote video streams, call the `muteAllRemoteVideoStreams` method and set `mute`
     * as `false` before calling this method.
     *
     * @param userId User ID of the specified remote user.
     * @param mute Sets whether to stop/resume receiving the video stream from a specified remote user:
     * - true: Stop receiving the specified remote user's video stream.
     * - false: (Default) Receive the specified remote user's video stream.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 接收／停止接收指定远端用户的视频流。
     * @note 如果之前调用过  [muteAllRemoteVideoStreams]{@link agora.muteAllRemoteVideoStreams}  (true) 停止接收放所有远端视频流，在调用本 
     * API 之前请确保你已调用  [muteAllRemoteVideoStreams]{@link agora.muteAllRemoteVideoStreams}  (false) 。 
     * [muteAllRemoteVideoStreams]{@link agora.muteAllRemoteVideoStreams}  是全局控制， 
     * [muteRemoteVideoStream]{@link agora.muteRemoteVideoStream}  是精细控制。
     * @param userId 指定用户的用户 ID。
     * @param mute
     * - true: 停止接收指定远端用户的视频流；
     * - false: 允许接收指定远端用户的视频流（默认）。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function muteRemoteVideoStream(userId: number, mute: boolean): number {
        if (isWeb) {
            const stream = remoteStreams.get(userId)
            if (stream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                if (mute) {
                    stream.muteVideo()
                } else {
                    stream.unmuteVideo()
                }
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethod(API_TYPE.MUTE_REMOTE_VIDEO_STREAM, {userId, mute})
    }

    /** @en
     * @ignore
     * Sets the stream type of the remote video.
     *
     * Under limited network conditions, if the publisher has not disabled the dual-stream mode using `enableDualStreamMode(false)`,
     * the receiver can choose to receive either the high-quality video stream (the high resolution, and high bitrate video stream) or
     * the low-video stream (the low resolution, and low bitrate video stream).
     *
     * By default, users receive the high-quality video stream. Call this method if you want to switch to the low-video stream.
     * This method allows the app to adjust the corresponding video stream type based on the size of the video window to
     * reduce the bandwidth and resources.
     *
     * The aspect ratio of the low-video stream is the same as the high-quality video stream. Once the resolution of the high-quality
     * video stream is set, the system automatically sets the resolution, frame rate, and bitrate of the low-video stream.
     *
     * The method result returns in the [onApiCallExecuted]{@link AgoraRtcEvents.onApiCallExecuted} callback.
     *
     * @param userId ID of the remote user sending the video stream.
     * @param streamType  Sets the video-stream type. See [REMOTE_VIDEO_STREAM_TYPE]{@link agora.REMOTE_VIDEO_STREAM_TYPE}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 设置订阅的视频流类型。
     * 在网络条件受限的情况下，如果发送端没有调用  [enableDualStreamMode]{@link agora.enableDualStreamMode}  (false) 关闭双流模式，
     * 接收端可以选择接收大流还是小流。其中，大流可以接为高分辨率高码率的视频流， 小流则是低分辨率低码率的视频流。
     * 正常情况下，用户默认接收大流。如需接收小流，可以调用本方法进行切换。SDK 会根据视频窗口的大小动态调整对应视频流的大小，以节约带宽和计算资源。
     * 视频小流默认的宽高比和视频大流的宽高比一致。根据当前大流的宽高比，系统会自动分配小流的分辨率、帧率及码率。
     * 调用本方法的执行结果将在  [onApiCallExecuted]{@link AgoraRtcEvents.onApiCallExecuted}  中返回。
     * @param userId 用户 ID。
     * @param streamType 视频流类型: [REMOTE_VIDEO_STREAM_TYPE]{@link agora.REMOTE_VIDEO_STREAM_TYPE} 。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setRemoteVideoStreamType(userId: number, streamType: REMOTE_VIDEO_STREAM_TYPE): number {
        if (isWeb) {
            const stream = remoteStreams.get(userId)
            if (stream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                client.setRemoteVideoStreamType(stream, streamType)
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethod(API_TYPE.SET_REMOTE_VIDEO_STREAM_TYPE, {userId, streamType})
    }

    /** @en
     * @ignore
     * Sets the default stream type of remote videos.
     *
     * Under limited network conditions, if the publisher has not disabled the dual-stream mode using `enableDualStreamMode(false)`,
     * the receiver can choose to receive either the high-quality video stream (the high resolution, and high bitrate video stream) or
     * the low-video stream (the low resolution, and low bitrate video stream).
     *
     * By default, users receive the high-quality video stream. Call this method if you want to switch to the low-video stream.
     *
     * This method allows the app to adjust the corresponding video stream type based on the size of the video window to
     * reduce the bandwidth and resources. The aspect ratio of the low-video stream is the same as the high-quality video stream.
     * Once the resolution of the high-quality video stream is set, the system automatically sets the resolution, frame rate,
     * and bitrate of the low-video stream.
     *
     * The method result returns in the [onApiCallExecuted]{@link AgoraRtcEvents.onApiCallExecuted} callback.
     *
     * @param streamType Sets the default video-stream type. See [REMOTE_VIDEO_STREAM_TYPE]{@link agora.REMOTE_VIDEO_STREAM_TYPE}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 设置默认订阅的视频流类型。
     * 在网络条件受限的情况下，如果发送端没有调用  [enableDualStreamMode]{@link agora.enableDualStreamMode}  (false) 关闭双流模式，
     * 接收端可以选择接收大流还是小流。其中，大流可以接为高分辨率高码率的视频流， 小流则是低分辨率低码率的视频流。
     * 正常情况下，用户默认接收大流。如需默认接收所有用户的视频小流，可以调用本方法进行切换。SDK 会根据视频窗口的大小动态调整对应视频流的大小，以节约
     * 带宽和计算资源。视频小流默认的宽高比和视频大流的宽高比一致。根据当前大流的宽高比，系统会自动分配小流的分辨率、帧率及码率。
     * 调用本方法的执行结果将在  [onApiCallExecuted]{@link AgoraRtcEvents.onApiCallExecuted}  中返回。
     * @param streamType 视频流类型: [REMOTE_VIDEO_STREAM_TYPE]{@link agora.REMOTE_VIDEO_STREAM_TYPE} 。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setRemoteDefaultVideoStreamType(streamType: REMOTE_VIDEO_STREAM_TYPE): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.SET_REMOTE_DEFAULT_VIDEO_STREAM_TYPE, {streamType})
    }

    /** @en
     * Enables the [onAudioVolumeIndication]{@link AgoraRtcEvents.onAudioVolumeIndication} callback at a set time interval
     * to report on which users are speaking and the speakers' volume.
     *
     * Once this method is enabled, the SDK returns the volume indication in the
     * [onAudioVolumeIndication]{@link AgoraRtcEvents.onAudioVolumeIndication} callback at the set time interval, whether
     * or not any user is speaking in the channel.
     *
     * @param interval Sets the time interval between two consecutive volume indications:
     * - &le; 0: Disables the volume indication.
     * - > 0: Time interval (ms) between two consecutive volume indications. We recommend setting `interval` &gt; 200 ms.
     * Do not set `interval` &lt; 10 ms, or the `onAudioVolumeIndication` callback will not be triggered.
     * @param smooth  Smoothing factor sets the sensitivity of the audio volume indicator. The value ranges between
     * 0 and 10. The greater the value, the more sensitive the indicator. The recommended value is 3.
     * @param report_vad - true: Enable the voice activity detection of the local user. Once it is enabled, the `vad`
     * parameter of the `onAudioVolumeIndication` callback reports the voice activity status of the local user.
     * - false: (Default) Disable the voice activity detection of the local user. Once it is disabled, the `vad`
     * parameter of the `onAudioVolumeIndication` callback does not report the voice activity status of the local user,
     * except for the scenario where the engine automatically detects the voice activity of the local user.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 启用说话者音量提示。
     * 该方法允许 SDK 定期向 App 反馈当前谁在说话以及说话者的音量。启用该方法后，无论频道内是否有人说话，都会在  
     * [onAudioVolumeIndication]{@link AgoraRtcEvents.onAudioVolumeIndication}  回调中按设置的间隔时间返回音量提示。
     * @param interval 指定音量提示的时间间隔：
     * - &le; 0: 禁用音量提示功能；
     * - > 0: 返回音量提示的间隔，单位为毫秒。建议设置到大于 200 毫秒。最小不得少于 10 毫秒，否则会收不到  
     * [onAudioVolumeIndication]{@link AgoraRtcEvents.onAudioVolumeIndication}  回调。
     * @param smooth 平滑系数，指定音量提示的灵敏度。取值范围为 [0,10]，建议值为 3。数字越大，波动越灵敏；数字越小，波动越平滑。
     * @param report_vad
     * - true：开启本地人声检测功能。开启后，`onAudioVolumeIndication` 回调的 `vad` 参数会报告是否在本地检测到人声。
     * - false：（默认）关闭本地人声检测功能。除引擎自动进行本地人声检测的场景外，`onAudioVolumeIndication` 回调的 `vad` 参数不会报告是否在本地检测到人声。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function enableAudioVolumeIndication(interval: number, smooth: number, report_vad: boolean): number {
        if (isWeb) {
            client.enableAudioVolumeIndicator()
            return ERROR_CODE_TYPE.ERR_OK
        }
        return callNativeMethod(API_TYPE.ENABLE_AUDIO_VOLUME_INDICATION, {interval, smooth, report_vad})
    }

    /** @en
     * Starts an audio recording on the client.
     *
     * The SDK allows recording during a call. After successfully calling this method, you can record the audio of all
     * the users in the channel and get an audio recording file.
     *
     * Supported formats of the recording file are as follows:
     * - .wav: Large file size with high fidelity.
     * - .aac: Small file size with low fidelity.
     *
     * **Note**
     * - Ensure that the directory you use to save the recording file exists and is writable.
     * - This method is usually called after the `joinChannel` method. The recording automatically stops when you call
     * the `leaveChannel` method.
     * - For better recording effects, set quality as
     * [AUDIO_RECORDING_QUALITY_MEDIUM]{@link agora.AUDIO_RECORDING_QUALITY_TYPE.AUDIO_RECORDING_QUALITY_MEDIUM} or
     * [AUDIO_RECORDING_QUALITY_HIGH]{@link agora.AUDIO_RECORDING_QUALITY_TYPE.AUDIO_RECORDING_QUALITY_HIGH} when
     * `sampleRate` is 44.1 kHz or 48 kHz.
     *
     * @param filePath The absolute file path of the recording file. The string of the file name is in UTF-8, such as
     * /dir1/dir2/dir3/audio.aac.
     * @param quality Sets the audio recording quality. See
     * [AUDIO_RECORDING_QUALITY_TYPE]{@link agora.AUDIO_RECORDING_QUALITY_TYPE}.
     * @param sampleRate Sample rate (Hz) of the recording file. Supported values are as follows:
     * - 16000
     * - (Default) 32000
     * - 44100
     * - 48000
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 开始客户端录音。
     * Agora SDK 支持通话过程中在客户端进行录音。调用该方法后，你可以录制频道内所有用户的音频，并得到一个包含所有用户声音的录音文件。录音文件格式可以为:
     * - .wav: 文件大，音质保真度较高。
     * - .aac: 文件小，音质保真度较低。
     * @note
     * - 请确保你在该方法中指定的路径存在并且可写。
     * - 该接口需在  [joinChannel]{@link agora.joinChannel}  之后调用。如果调用  [leaveChannel]{@link agora.leaveChannel}  时还在录音，
     * 录音会自动停止。
     * - 为保证录音效果，当 `sampleRate` 设为 44.1 kHz 或 48 kHz 时，建议将 `quality` 设为 
     * [AUDIO_RECORDING_QUALITY_MEDIUM]{@link agora.AUDIO_RECORDING_QUALITY_TYPE.AUDIO_RECORDING_QUALITY_MEDIUM} 或 
     * [AUDIO_RECORDING_QUALITY_HIGH]{@link agora.AUDIO_RECORDING_QUALITY_TYPE.AUDIO_RECORDING_QUALITY_HIGH} 。
     * @param filePath 录音文件在本地保存的绝对路径，由用户自行指定，需精确到文件名及格式，例如：/dir1/dir2/dir3/audio.aac。
     * @param quality 录音音质。详见 [AUDIO_RECORDING_QUALITY_TYPE]{@link agora.AUDIO_RECORDING_QUALITY_TYPE} 。
     * @param sampleRate 录音采样率（Hz），可以设为以下值：
     * - 16000
     * - 32000（默认）
     * - 44100
     * - 48000
     * 
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function startAudioRecording(filePath: string, quality: AUDIO_RECORDING_QUALITY_TYPE, sampleRate?: number): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        if (sampleRate === undefined) {
            return callNativeMethod(API_TYPE.START_AUDIO_RECORDING, {filePath, quality})
        }
        return callNativeMethod(API_TYPE.START_AUDIO_RECORDING2, {filePath, sampleRate, quality})
    }

    /** @en
     * Stops an audio recording on the client.
     *
     * You can call this method before calling the [leaveChannel]{@link agora.leaveChannel} method else, the
     * recording automatically stops when the `leaveChannel` method is called.
     *
     * @return
     * - 0: Success
     * - < 0: Failure.
     */
    /** @cn
     * 停止客户端录音。
     * 停止录音。该接口需要在  [leaveChannel]{@link agora.leaveChannel}  之前调用，不然会在调用  [leaveChannel]{@link agora.leaveChannel}  
     * 时自动停止。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function stopAudioRecording(): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.STOP_AUDIO_RECORDING)
    }

    /** @en
     * Starts playing and mixing the music file.
     *
     * This method mixes the specified local audio file with the audio stream from the microphone, or replaces the
     * microphone's audio stream with the specified local audio file. You can choose whether the other user can hear
     * the local audio playback and specify the number of playback loops. This method also supports online music
     * playback.
     *
     * When the audio mixing file playback finishes after calling this method, the SDK triggers the
     * [onAudioMixingFinished]{@link AgoraRtcEvents.onAudioMixingFinished} callback.
     *
     * A successful `startAudioMixing` method call triggers the
     * [onAudioMixingStateChanged]{@link AgoraRtcEvents.onAudioMixingStateChanged}(PLAY) callback on the local client.
     *
     * When the audio mixing file playback finishes, the SDK triggers the `onAudioMixingStateChanged(STOPPED)`
     * callback on the local client.
     *
     * **Note**
     * - Call this method after joining a channel, otherwise issues may occur.
     * - If the local audio mixing file does not exist, or if the SDK does not support the file format or cannot
     * access the music file URL, the SDK returns `WARN_AUDIO_MIXING_OPEN_ERROR(-701)`.
     * - If you want to play an online music file, ensure that the time interval between calling this method is more
     * than 100 ms, or the `AUDIO_MIXING_ERROR_TOO_FREQUENT_CALL(702)` error code occurs.
     *
     * @param filePath The absolute path (including the suffixes of the filename) of the local or online audio file to
     * mix, for example, c:\music\audio.mp4. Supported audio formats: 3GP, ASF, ADTS, AVI, MP3, MP4, MPEG-4, SAMI, and
     * WAVE. For more information, see [Supported Media Formats in Media Foundation](https://docs.microsoft.com/en-us/windows/desktop/medfound/supported-media-formats-in-media-foundation).
     * @param loopback Sets which user can hear the audio mixing:
     * - true: Only the local user can hear the audio mixing.
     * - false: Both users can hear the audio mixing.
     * @param replace Sets the audio mixing content:
     * - true: Only publish the specified audio file. The audio stream from the microphone is not published.
     * - false: The local audio file is mixed with the audio stream from the microphone.
     * @param cycle Sets the number of playback loops:
     * - Positive integer: Number of playback loops.
     * - `-1`: Infinite playback loops.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 开始播放音乐文件。
     * 指定本地或在线音频文件来和麦克风采集的音频流进行混音和替换。替换是指用音频文件替换录音设备采集的音频流。该方法可以选择是否让对方听到本地播
     * 放的音频并指定循环播放的次数。成功调用该方法后，本地会触发 
     * [onAudioMixingStateChanged]{@link AgoraRtcEvents.onAudioMixingStateChanged}(PLAY) 回调。播放结束后，会收到  
     * `onAudioMixingStateChanged(STOPPED)` 回调。
     * @note
     * - 请在频道内调用该方法，如果在频道外调用该方法可能会出现问题。
     * - 如果本地音乐文件不存在、文件格式不支持、无法访问在线音乐文件 URL 都会返回警告码 `WARN_AUDIO_MIXING_OPEN_ERROR` = 701。
     * @param filePath 指定需要混音的本地或在线音频文件的绝对路径，例如：c:/music/audio.mp4。建议填写文件后缀名。若无法确定文件后缀名，可不填。
     * 支持的音频格式包括：3GP、ASF、ADTS、AVI、MP3、MP4、MPEG-4、SAMI 和 WAVE。
     * 详见 [Supported Media Formats in Media Foundation](https://docs.microsoft.com/zh-cn/windows/desktop/medfound/supported-media-formats-in-media-foundation) 。
     * @param loopback
     * - true: 只有本地用户可以听到混音的音频；
     * - false: 本地用户和远端用户都能听到混音的音频。
     * @param replace
     * - true: 只推送指定的本地音频文件或者线上音频文件，不传输麦克风收录的音频。
     * - false: 本地音频文件与来自麦克风的音频流混音。
     * @param cycle 循环播放次数：
     * - 正整数: 循环播放的次数；
     * - -1: 无限循环。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function startAudioMixing(filePath: string, loopback: boolean, replace: boolean, cycle: number): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                localStream.startAudioMixing({filePath, cycle, loop: loopback, playTime: 0, replace})
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.START_AUDIO_MIXING, {
            filePath,
            loopback,
            replace,
            cycle
        })
    }

    /** @en
     * Stops playing and mixing the music file.
     *
     * Call this method when you are in a channel.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 停止播放音乐文件。
     * 该方法停止播放音乐文件。请在频道内调用该方法。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function stopAudioMixing(): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                localStream.stopAudioMixing()
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.STOP_AUDIO_MIXING)
    }

    /** @en
     * Pauses playing and mixing the music file.
     *
     * Call this method when you are in a channel.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 暂停播放音乐文件。
     * 该方法暂停播放音乐文件。请在频道内调用该方法。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function pauseAudioMixing(): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                localStream.pauseAudioMixing()
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.PAUSE_AUDIO_MIXING)
    }

    /** @en
     * Resumes playing and mixing the music file.
     *
     * Call this method when you are in a channel.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 恢复播放音乐文件。
     * 该方法恢复混音，继续播放音乐文件。请在频道内调用该方法。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function resumeAudioMixing(): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                localStream.resumeAudioMixing()
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.RESUME_AUDIO_MIXING)
    }

    /** @en
     * Sets the high-quality audio preferences.
     *
     * @deprecated This callback is deprecated.
     *
     * Call this method and set all parameters before joining a channel.
     * Do not call this method again after joining a channel.
     *
     * @param fullband Sets whether to enable/disable full-band codec (48-kHz sample rate). Not compatible with SDK
     * versions before v1.7.4:
     * - true: Enable full-band codec.
     * - false: Disable full-band codec.
     * @param  stereo Sets whether to enable/disable stereo codec. Not compatible with SDK versions before v1.7.4:
     * - true: Enable stereo codec.
     * - false: Disable stereo codec.
     * @param fullBitrate Sets whether to enable/disable high-bitrate mode. Recommended in voice-only mode:
     * - true: Enable high-bitrate mode.
     * - false: Disable high-bitrate mode.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @deprecated 该方法已废弃。声网不建议你使用。如果你希望设置音频高音质选项，请改用  [setAudioProfile]{@link agora.setAudioProfile}  方法。
     * 设置音频高音质选项。
     * @param fullband 全频带编解码器（48 kHz 采样率）, 不兼容 v1.7.4 以前版本
     * - true：启用全频带编解码器
     * - false：禁用全频带编解码器
     * @param stereo 立体声编解码器，不兼容 v1.7.4 以前版本
     * - true：启用立体声编解码器
     * - false：禁用立体声编解码器
     * @param fullBitrate 高码率模式，建议仅在纯音频模式下使用
     * - true：启用高码率模式
     * - false：禁用高码率模式
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setHighQualityAudioParameters(fullband: boolean, stereo: boolean, fullBitrate: boolean): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_HIGH_QUALITY_AUDIO_PARAMETERS, {
            fullband,
            stereo,
            fullBitrate
        })
    }

    /** @en
     * Adjusts the volume during audio mixing.
     *
     * Call this method when you are in a channel.
     *
     * @note Calling this method does not affect the volume of audio effect file playback invoked by the
     * [playEffect]{@link agora.playEffect} method.
     *
     * @param volume Audio mixing volume. The value ranges between 0 and 100 (default).
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 调节音乐文件的播放音量。
     * 该方法调节混音音乐文件在本端和远端的播放音量大小。请在频道内调用该方法。
     * @note 调用该方法不影响调用  [playEffect]{@link agora.playEffect}  播放音效文件的音量。
     * @param volume 音乐文件音量范围为 0~100。100 （默认值）为原始文件音量。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function adjustAudioMixingVolume(volume: number): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                localStream.adjustAudioMixingVolume(volume)
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.ADJUST_AUDIO_MIXING_VOLUME, {volume})
    }

    /** @en
     * Adjusts the audio mixing volume for local playback.
     *
     * @note Call this method when you are in a channel.
     *
     * @param volume Audio mixing volume for local playback. The value ranges between 0 and 100 (default).
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 调节音乐文件本端播放音量。
     * 该方法调节混音音乐文件在本端的播放音量大小。请在频道内调用该方法。
     * @param volume 音乐文件音量范围为 0~100。100 （默认值） 为原始文件音量。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function adjustAudioMixingPlayoutVolume(volume: number): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.ADJUST_AUDIO_MIXING_PLAYOUT_VOLUME, {volume})
    }

    /** @en
     * Retrieves the audio mixing volume for local playback.
     *
     * This method helps troubleshoot audio volume related issues.
     *
     * @note Call this method when you are in a channel.
     *
     * @return
     * - &ge; 0: The audio mixing volume, if this method call succeeds. The value range is [0,100].
     * - < 0: Failure.
     */
    /** @cn
     * 获取音乐文件的本地播放音量。
     * 该方法获取混音的音乐文件本地播放音量，方便排查音量相关问题。
     * @note 请在频道内调用该方法。
     * @return
     * - &ge; 0: 方法调用成功则返回音量值，范围为 [0,100]
     * - < 0: 方法调用失败
     */
    export function getAudioMixingPlayoutVolume(): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.GET_AUDIO_MIXING_PLAYOUT_VOLUME)
    }

    /** @en
     * Adjusts the audio mixing volume for publishing (for remote users).
     *
     * @note Call this method when you are in a channel.
     *
     * @param volume Audio mixing volume for publishing. The value ranges between 0 and 100 (default).
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 调节音乐文件远端播放音量。
     * 该方法调节混音音乐文件在远端的播放音量大小。请在频道内调用该方法。
     * @param volume 音乐文件音量范围为 0~100。100 （默认值） 为原始文件音量。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function adjustAudioMixingPublishVolume(volume: number): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.ADJUST_AUDIO_MIXING_PUBLISH_VOLUME, {volume})
    }

    /** @en
     * Retrieves the audio mixing volume for publishing.
     *
     * This method helps troubleshoot audio volume related issues.
     *
     * @note Call this method when you are in a channel.
     *
     * @return
     * - &ge; 0: The audio mixing volume for publishing, if this method call succeeds. The value range is [0,100].
     * - < 0: Failure.
     */
    /** @cn
     * 获取音乐文件的远端播放音量
     * 该接口可以方便开发者排查音量相关问题。
     * @note 请在频道中调用该方法
     * @return
     * - &ge; 0：方法调用成功则返回音量值，范围为 [0, 100]。
     * - < 0：方法调用失败
     */
    export function getAudioMixingPublishVolume(): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.GET_AUDIO_MIXING_PUBLISH_VOLUME)
    }

    /** @en
     * Retrieves the duration (ms) of the music file.
     *
     * Call this method when you are in a channel.
     *
     * @return
     * - &ge; 0: The audio mixing duration, if this method call succeeds.
     * - < 0: Failure.
     */
    /** @cn
     * 获取音乐文件总时长。
     * 该方法获取音乐文件总时长，单位为毫秒。请在频道内调用该方法。
     * @return
     * - &ge; 0: 方法调用成功返回音乐文件时长。
     * - < 0: 方法调用失败
     */
    export function getAudioMixingDuration(): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                return <number>localStream.getAudioMixingDuration()
            }
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.GET_AUDIO_MIXING_DURATION)
    }

    /** @en
     * Retrieves the playback position (ms) of the music file.
     *
     * Call this method when you are in a channel.
     *
     * @return
     * - &ge; 0: The current playback position of the audio mixing, if this method call succeeds.
     * - < 0: Failure.
     */
    /** @cn
     * 获取音乐文件的播放进度。
     * 该方法获取当前音乐文件播放进度，单位为毫秒。请在频道内调用该方法。
     * @return
     * - &ge; 0: 方法调用成功返回音乐文件播放进度。
     * - < 0: 方法调用失败
     */
    export function getAudioMixingCurrentPosition(): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                return <number>localStream.getAudioMixingCurrentPosition()
            }
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.GET_AUDIO_MIXING_CURRENT_POSITION)
    }

    /** @en
     * Sets the playback position of the music file to a different starting position (the default plays from the beginning).
     *
     * @param pos The playback starting position (ms) of the music file.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 设置音乐文件的播放位置。
     * 该方法可以设置音频文件的播放位置，这样你可以根据实际情况播放文件，而非从头到尾播放整个文件。
     * @param pos 整数。进度条位置，单位为毫秒。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setAudioMixingPosition(pos: number): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                localStream.setAudioMixingPosition(pos)
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_AUDIO_MIXING_POSITION, {pos})
    }

    /** @en
     * Sets the pitch of the local music file.
     *
     * When a local music file is mixed with a local human voice, call this method to set the pitch of the local music file only.
     *
     * @note Call this method after calling [startAudioMixing]{@link agora.startAudioMixing}.
     *
     * @param pitch Sets the pitch of the local music file by chromatic scale. The default value is 0,
     * which means keeping the original pitch. The value ranges from -12 to 12, and the pitch value between
     * consecutive values is a chromatic value. The greater the absolute value of this parameter, the
     * higher or lower the pitch of the local music file.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 调整本地播放的音乐文件的音调。
     *
     * 本地人声和播放的音乐文件混音时，调用该方法可以仅调节音乐文件的音调。
     * @note
     * 该方法需在 [startAudioMixing]{@link agora.startAudioMixing} 后调用。
     * @param pitch 按半音音阶调整本地播放的音乐文件的音调，默认值为 0，即不调整音调。取值范围为 [-12,12]，
     * 每相邻两个值的音高距离相差半音。取值的绝对值越大，音调升高或降低得越多。
     * @return
     * - 0：方法调用成功
     * - < 0：方法调用失败
     */
    export function setAudioMixingPitch(pitch: number): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_AUDIO_MIXING_PITCH, {pitch})
    }

    /** @en
     * Retrieves the volume of the audio effects.
     *
     * The value ranges between 0.0 and 100.0.
     *
     * @return
     * - &ge; 0: Volume of the audio effects, if this method call succeeds.
     * - < 0: Failure.
     */
    /** @cn
     * 获取音效文件的播放音量。
     * 音量范围为 0~100。100 （默认值）为原始文件音量。
     * @return
     * - &ge; 0:音效文件的音量。
     * - < 0: 方法调用失败
     */
    export function getEffectsVolume(): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                return localStream.getEffectsVolume()[0].volume
            }
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.GET_EFFECTS_VOLUME)
    }

    /** @en
     * Sets the volume of the audio effects.
     *
     * @param volume Sets the volume of the audio effects. The value ranges between 0 and 100 (default).
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 设置音效文件的播放音量。
     * 音量范围为 0~100。100 （默认值）为原始文件音量。
     * @param volume 该方法设置音效的音量。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setEffectsVolume(volume: number): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                localStream.setEffectsVolume(volume)
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_EFFECTS_VOLUME, {volume})
    }

    /** @en
     * Sets the volume of a specified audio effect.
     *
     * @param soundId ID of the audio effect. Each audio effect has a unique ID.
     * @param volume Sets the volume of the specified audio effect. The value ranges between 0 and 100 (default).
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 实时调整音效文件的播放音量。
     * @param soundId 指定音效的 ID。每个音效均有唯一的 ID。
     * @param volume 播放音量。音量范围为 0~100。100 （默认值）为原始文件音量。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setVolumeOfEffect(soundId: number, volume: number): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                localStream.setVolumeOfEffect(soundId, volume)
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_VOLUME_OF_EFFECT, {soundId, volume})
    }

    /** @en
     * @ignore
     * Enables/Disables face detection for the local user. Applies to Android and iOS only.
     *
     * Once face detection is enabled, the SDK triggers the
     * [onFacePositionChanged]{@link AgoraRtcEvents.onFacePositionChanged} callback to report the face information of the
     * local user, which includes the following aspects:
     * - The width and height of the local video.
     * - The position of the human face in the local video.
     * - The distance between the human face and the device screen.
     *
     * @param enable Determines whether to enable the face detection function for the local user:
     * - true: Enable face detection.
     * - false: (Default) Disable face detection.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 开启/关闭本地人脸检测。仅适用于 Android 和 iOS。
     *
     * 开启本地人脸检测后，SDK 会触发  [onFacePositionChanged]{@link AgoraRtcEvents.onFacePositionChanged}  回调向你报告人脸检测的信息：
     * - 摄像头采集的画面大小
     * - 人脸在画面中的位置
     * - 人脸距设备屏幕的距离
     *
     * @param enable 是否开启人脸检测：
     * - true：开启人脸检测
     * - false：（默认）关闭人脸检测
     * @return
     * - 0：方法调用成功
     * - < 0：方法调用失败
     */
    export function enableFaceDetection(enabled: boolean): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.ENABLE_FACE_DETECTION, {enabled})
    }

    /** @en
     * Plays a specified local or online audio effect file.
     *
     * This method allows you to set the loop count, pitch, pan, and gain of the audio effect file, as well as whether
     * the remote user can hear the audio effect.
     *
     * To play multiple audio effect files simultaneously, call this method multiple times with different soundIds and
     * filePaths. We recommend playing no more than three audio effect files at the same time.
     *
     * @param soundId ID of the specified audio effect. Each audio effect has a unique ID.
     *
     * **Note**
     * - If the audio effect is preloaded into the memory through the [preloadEffect]{@link agora.preloadEffect}
     * method, the value of `soundID` must be the same as that in the `preloadEffect` method.
     * - Playing multiple online audio effect files simultaneously is not supported on macOS and Windows.
     * @param filePath Specifies the absolute path (including the suffixes of the filename) to the local audio effect
     * file or the URL of the online audio effect file, for example, c:/music/audio.mp4. Supported audio formats: mp3,
     * mp4, m4a, aac, 3gp, mkv and wav.
     * @param loopCount Sets the number of times the audio effect loops:
     * - 0: Play the audio effect once.
     * - 1: Play the audio effect twice.
     * - -1: Play the audio effect in an indefinite loop until the [stopEffect]{@link agora.stopEffect} or
     * [stopAllEffects]{@link agora.stopAllEffects} method is called.
     * @param pitch Sets the pitch of the audio effect. The value ranges between 0.5 and 2. The default value is 1
     * (no change to the pitch). The lower the value, the lower the pitch.
     * @param pan Sets the spatial position of the audio effect. The value ranges between -1.0 and 1.0:
     * - 0.0: The audio effect displays ahead.
     * - 1.0: The audio effect displays to the right.
     * - -1.0: The audio effect displays to the left.
     * @param gain  Sets the volume of the audio effect. The value ranges between 0 and 100 (default). The lower the
     * value, the lower the volume of the audio effect.
     * @param publish Sets whether or not to publish the specified audio effect to the remote stream:
     * - true: The locally played audio effect is published to the Agora Cloud and the remote users can hear it.
     * - false: The locally played audio effect is not published to the Agora Cloud and the remote users cannot hear it.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 播放指定音效文件。
     * 你可以多次调用该方法，通过传入不同的音效文件的 `soundID` 和 `filePath`，同时播放多个音效文件，实现音效叠加。为获得最佳用户体验，
     * 我们建议同时播放的音效文件不要超过 3 个。
     * @param soundId 指定音效的 ID。每个音效均有唯一的 ID。
     * 
     * **Note**
     * - 如果你已通过  [preloadEffect]{@link agora.preloadEffect}  将音效加载至内存，确保这里设置的 `soundId` 与  
     * [preloadEffect]{@link agora.preloadEffect}  设置的 `soundId` 相同。
     * - 在 macOS 和 Windows 上，该方法不支持同时播放多个在线音效文件。
     * @param filePath 音效文件的绝对路径或 URL 地址，例如：c:/music/audio.mp4。建议填写文件后缀名。若无法确定文件后缀名，可不填。
     * 支持的音频格式包括：mp3、mp4、m4a、aac、3gp、mkv 及 wav。
     * 详见 [Supported Media Formats in Media Foundation](https://docs.microsoft.com/zh-cn/windows/desktop/medfound/supported-media-formats-in-media-foundation) 。
     * @param loopCount 设置音效循环播放的次数：
     * - 0: 播放音效一次；
     * - 1: 播放音效两次；
     * - -1: 无限循环播放音效，直至调用  [stopEffect]{@link agora.stopEffect}  或  [stopAllEffects]{@link agora.stopAllEffects}  后停止。
     * @param pitch 设置音效的音调 取值范围为 [0.5, 2]。默认值为 1.0，表示不需要修改音调。取值越小，则音调越低。
     * @param pan 设置是否改变音效的空间位置。取值范围为 [-1.0, 1.0]:
     * - 0.0: 音效出现在正前方；
     * - 1.0: 音效出现在右边；
     * - -1.0: 音效出现在左边。
     * @param gain 设置是否改变单个音效的音量。取值范围为 [0.0, 100.0]。默认值为 100.0。取值越小，则音效的音量越低。
     * @param publish 设置是否将音效传到远端：
     * - true: 音效在本地播放的同时，会发布到 Agora 云端，因此远端用户也能听到该音效；
     * - false: 音效不会发布到 Agora 云端，因此只能在本地听到该音效。
     * @return
     * - 0：方法调用成功
     * - < 0：方法调用失败
     */
    export function playEffect(soundId: number, filePath: string, loopCount: number, pitch: number, pan: number, gain: number, publish: Boolean): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                localStream.playEffect({soundId, filePath, cycle: loopCount})
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.PLAY_EFFECT, {
            soundId,
            filePath,
            loopCount,
            pitch,
            pan,
            gain,
            publish
        })
    }

    /** @en
     * Stops playing a specified audio effect.
     *
     * @param soundId ID of the audio effect to stop playing. Each audio effect has a unique ID.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 停止播放指定音效文件。
     * @param soundId 指定音效文件的 ID。每个音效文件均有唯一的 ID。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function stopEffect(soundId: number): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                localStream.stopEffect(soundId)
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.STOP_EFFECT, {soundId})
    }

    /** @en
     * Stops playing all audio effects.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 停止播放所有音效文件。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function stopAllEffects(): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                localStream.stopAllEffects()
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.STOP_ALL_EFFECTS)
    }

    /** @en
     * Preloads a specified audio effect file into the memory.
     *
     * To ensure smooth communication, limit the size of the audio effect file. We recommend using this method to
     * preload the audio effect before calling the [joinChannel]{@link agora.joinChannel} method.
     * Supported audio formats: mp3, aac, m4a, 3gp, and wav.
     *
     * @note This method does not support online audio effect files.
     *
     * @param soundId ID of the audio effect. Each audio effect has a unique ID.
     * @param filePath The absolute path of the audio effect file.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 将音效文件加载至内存。
     * 该方法将指定音效文件预加载至内存。
     * @note 该方法不支持在线音频文件。
     * 为保证通信畅通，请注意控制预加载音效文件的大小，并在  [joinChannel]{@link agora.joinChannel}  前就使用该方法完成音效预加载。
     * 音频文件支持以下音频格式: mp3、aac、m4a、3gp，和 wav。
     * @param soundId 指定音效文件的 ID。每个音效文件均有唯一的 ID。
     * @param filePath 音效文件的绝对路径。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function preloadEffect(soundId: number, filePath: string): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                localStream.playEffect({filePath, soundId})
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.PRE_LOAD_EFFECT, {soundId, filePath})
    }

    /** @en
     * Releases a specified preloaded audio effect from the memory.
     *
     * @param soundId ID of the audio effect. Each audio effect has a unique ID.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 从内存释放某个预加载的音效文件。
     * @param soundId 指定音效文件的 ID。每个音效文件均有唯一的 ID
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function unloadEffect(soundId: number): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                localStream.unloadEffect(soundId)
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.UN_LOAD_EFFECT, {soundId})
    }

    /** @en
     * Pauses a specified audio effect.
     *
     * @param soundId ID of the audio effect. Each audio effect has a unique ID.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 暂停音效文件播放。
     * @param soundId 指定音效文件的 ID。每个音效文件均有唯一的 ID。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function pauseEffect(soundId: number): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                localStream.pauseEffect(soundId)
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.PAUSE_EFFECT, {soundId})
    }

    /** @en
     * Pauses all audio effects.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 暂停所有音效文件播放。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function pauseAllEffects(): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                localStream.pauseAllEffects()
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.PAUSE_ALL_EFFECTS)
    }

    /** @en
     * Resumes playing a specified audio effect.
     *
     * @param soundId ID of the audio effect. Each audio effect has a unique ID.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 恢复播放指定音效文件。
     * @param soundId 指定音效文件的 ID。每个音效文件均有唯一的 ID。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function resumeEffect(soundId: number): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                localStream.resumeEffect(soundId)
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.RESUME_EFFECT, {soundId})
    }

    /** @en
     * Resumes playing all audio effects.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 恢复播放所有音效文件。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function resumeAllEffects(): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                localStream.resumeAllEffects()
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.RESUME_ALL_EFFECTS)
    }

    /** @en
     * Enables/Disables stereo panning for remote users.
     *
     * Ensure that you call this method before [joinChannel]{@link agora.joinChannel} to enable stereo panning for
     * remote users so that the local user can track the position of a remote user by calling
     * [setRemoteVoicePosition]{@link agora.setRemoteVoicePosition}.
     *
     * @param enabled Sets whether or not to enable stereo panning for remote users:
     * - true: enables stereo panning.
     * - false: disables stereo panning.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 开启/关闭远端用户的语音立体声。
     * 如果想调用  [setRemoteVoicePosition]{@link agora.setRemoteVoicePosition}  实现听声辨位的功能，请确保在加入频道前调用该方法开启
     * 远端用户的语音立体声。
     * @param enabled 是否开启远端用户语音立体声：
     * - true: 开启
     * - false: 关闭
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function enableSoundPositionIndication(enabled: boolean): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.ENABLE_SOUND_POSITION_INDICATION, {enabled})
    }

    /** @en
     * Sets the sound position and gain of a remote user.
     *
     * When the local user calls this method to set the sound position of a remote user, the sound difference between
     * the left and right channels allows the local user to track the real-time position of the remote user, creating
     * a real sense of space. This method applies to massively multiplayer online games, such as Battle Royale games.
     *
     * **Note**
     * - For this method to work, enable stereo panning for remote users by calling the
     * [enableSoundPositionIndication]{@link agora.enableSoundPositionIndication} method before joining a channel.
     * - This method requires hardware support. For the best sound positioning, we recommend using a stereo speaker.
     *
     * @param uid The ID of the remote user.
     * @param pan The sound position of the remote user. The value ranges from -1.0 to 1.0:
     * - 0.0: the remote sound comes from the front.
     * - -1.0: the remote sound comes from the left.
     * - 1.0: the remote sound comes from the right.
     * @param gain Gain of the remote user. The value ranges from 0.0 to 100.0. The default value is 100.0
     * (the original gain of the remote user). The smaller the value, the less the gain.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 设置远端用户的语音位置。
     * 设置远端用户声音的空间位置和音量，方便本地用户听声辨位。
     * 通过调用该接口设置远端用户声音出现的位置，左右声道的声音差异会产生声音的方位感，从而判断出远端用户的实时位置。在多人在线游戏场景，如吃鸡游戏中，该方法能有效增加游戏角色的方位感，模拟真实场景。
     * @note 为获得最佳听觉体验，我们建议使用该方法时使用立体声外放。
     * @param uid 远端用户的 ID
     * @param pan 设置远端用户声音的空间位置，取值范围为 [-1.0,1.0]:
     * - (默认）0.0: 声音出现在正前方。
     * - -1.0: 声音出现在左边。
     * - 1.0: 声音出现在右边。
     * @param gain 设置远端用户声音的音量，取值范围为 [0.0,100.0]，默认值为 100.0，表示该用户的原始音量。取值越小，则音量越低。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setRemoteVoicePosition(uid: number, pan: number, gain: number): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.SET_REMOTE_VOICE_POSITIONN, {uid, pan, gain})
    }

    /** @en
     * Changes the voice pitch of the local speaker.
     *
     * @param pitch Sets the voice pitch. The value ranges between 0.5 and 2.0. The lower the value, the lower the
     * voice pitch. The default value is 1.0 (no change to the local voice pitch).
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 设置本地语音音调。
     * @param pitch 语音频率可以 [0.5,2.0] 范围内设置。取值越小，则音调越低。默认值为 1.0，表示不需要修改音调。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setLocalVoicePitch(pitch: number): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_LOCAL_VOICE_CHANGER, {pitch})
    }

    /** @en
     * Sets the local voice equalization effect.
     *
     * @param bandFrequency Sets the band frequency. The value ranges between 0 and 9, representing the respective
     * 10-band center frequencies of the voice effects, including 31, 62, 125, 500, 1k, 2k, 4k, 8k, and 16k Hz. See
     * [AUDIO_EQUALIZATION_BAND_FREQUENCY]{@link agora.AUDIO_EQUALIZATION_BAND_FREQUENCY}.
     * @param bandGain Sets the gain of each band in dB. The value ranges between -15 and 15.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 设置本地语音音效均衡。
     * @param bandFrequency 频谱子带索引。取值范围是 [0,9]，分别代表音效的 10 个频带。对应的中心频率为 
     * [31，62，125，250，500，1k，2k，4k，8k，16k] Hz。详见 
     * [AUDIO_EQUALIZATION_BAND_FREQUENCY]{@link agora.AUDIO_EQUALIZATION_BAND_FREQUENCY} 。
     * @param bandGain  每个 band 的增益，单位是 dB，每一个值的范围是 [-15,15]。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setLocalVoiceEqualization(bandFrequency: AUDIO_EQUALIZATION_BAND_FREQUENCY, bandGain: number): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_LOCAL_VOICE_EQUALIZATION, {
            bandFrequency,
            bandGain
        })
    }

    /** @en
     * Sets the local voice reverberation.
     *
     * You can also use [setLocalVoiceReverbPreset]{@link agora.setLocalVoiceReverbPreset} to use the preset reverberation effect,
     * such as pop music, R&B or rock music effects.
     *
     * @param reverbKey Sets the reverberation key. See [AUDIO_REVERB_TYPE]{@link agora.AUDIO_REVERB_TYPE}.
     * @param value Sets the value of the reverberation key.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 设置本地音效混响。
     * 你也可以调用 [setLocalVoiceReverbPreset]{@link agora.setLocalVoiceReverbPreset} 使用预设的音效混响，例如流行、R&B、摇滚音效。
     * @param reverbKey 混响音效 Key。该方法共有 5 个混响音效 Key:  [AUDIO_REVERB_TYPE]{@link agora.AUDIO_REVERB_TYPE} 。
     * @param value 各混响音效 Key 所对应的值：
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setLocalVoiceReverb(reverbKey: AUDIO_REVERB_TYPE, value: number): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_LOCAL_VOICE_REVERB, {reverbKey, value})
    }

    /** @en
     * Sets the local voice changer option.
     *
     * This method can be used to set the local voice effect for users in a `COMMUNICATION` channel or hosts in a
     * `LIVE_BROADCASTING` channel.
     *
     * Voice changer options include the following voice effects:
     * - `VOICE_CHANGER_XXX`: Changes the local voice to an old man, a little boy, or the Hulk. Applies to the voice
     * talk scenario.
     * - `VOICE_BEAUTY_XXX`: Beautifies the local voice by making it sound more vigorous, resounding, or adding spacial
     * resonance. Applies to the voice talk and singing scenario.
     * - `GENERAL_VOICE_BEAUTY_XXX`: Adds gender-based beautification effect to the local voice. Applies to the voice
     * talk scenario.
     *   - For a male-sounding voice: Adds magnetism to the voice.
     *   - For a female-sounding voice: Adds freshness or vitality to the voice.
     *
     * **Note**
     * - To achieve better voice effect quality, Agora recommends setting the profile parameter in
     * [setAudioProfile]{@link agora.setAudioProfile} as `AUDIO_PROFILE_MUSIC_HIGH_QUALITY(4)` or
     * `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)`.
     * - This method works best with the human voice, and Agora does not recommend using it for audio containing music
     * and a human voice.
     * - Do not use this method with [setLocalVoiceReverbPreset]{@link agora.setLocalVoiceReverbPreset}, because the
     * method called later overrides the one called earlier.
     *
     * @param voiceChanger Sets the local voice changer option. The default value is `VOICE_CHANGER_OFF`, which means
     * the original voice. See details in [VOICE_CHANGER_PRESET]{@link agora.VOICE_CHANGER_PRESET}.
     * Gender-based beatification effect works best only when assigned a proper gender:
     * - For a male-sounding voice: `GENERAL_BEAUTY_VOICE_MALE_MAGNETIC`.
     * - For a female-sounding voice: `GENERAL_BEAUTY_VOICE_FEMALE_FRESH` or `GENERAL_BEAUTY_VOICE_FEMALE_VITALITY`.
     *
     * Failure to do so can lead to voice distortion.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure. Check if the enumeration is properly set.
     */
    /** @cn
     * 设置本地语音变声、美音或语聊美声效果。
     *
     * 通信场景下的用户或直播场景下的主播均可调用该方法为本地语音设置以下效果。成功设置以后，频道内的所有用户均可听到声音效果。
     * - 变声效果：枚举值以 `VOICE_CHANGER` 为前缀。效果包括老男人、小男孩、小女孩、猪八戒、空灵和绿巨人，通常用于语聊场景。
     * - 美音效果：枚举值以 `VOICE_BEAUTY` 为前缀。效果包括浑厚、低沉、圆润、假音、饱满、清澈、高亢、嘹亮和空旷，通常用于语聊和唱歌场景。
     * - 语聊美声效果：枚举值以 `GENERAL_BEAUTY_VOICE` 为前缀。效果包括磁性（男）、清新（女）和活力（女），通常用于语聊场景。该功能主要细化了男声和女声各
     * 自的特点。
     *
     * @note
     * - 为达到更好的声音效果，Agora 推荐在调用该方法前将  [setAudioProfile]{@link agora.setAudioProfile}  的 `profile` 参数设置为 
     * `AUDIO_PROFILE_MUSIC_HIGH_QUALITY(4)` 或 `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)`。
     * - 该方法对人声的处理效果最佳，Agora 不推荐调用该方法处理含人声和音乐的音频数据。
     * - 该方法不能与  [setLocalVoiceReverbPreset]{@link agora.setLocalVoiceReverbPreset}  方法一同使用，否则先调的方法会不生效。
     * @param voiceChanger 预设本地语音变声、美音或语聊美声效果选项，默认值为 [VOICE_CHANGER_OFF]{@link agora.VOICE_CHANGER_OFF} ，即原声。
     * 详见 [VOICE_CHANGER_PRESET]{@link agora.VOICE_CHANGER_PRESET} 。
     * 
     * 设置语聊美声效果时，Agora 推荐使用 [GENERAL_BEAUTY_VOICE_MALE_MAGNETIC]{@link agora.GENERAL_BEAUTY_VOICE_MALE_MAGNETIC} 处理男声，
     * 使用 [GENERAL_BEAUTY_VOICE_FEMALE_FRESH]{@link agora.GENERAL_BEAUTY_VOICE_FEMALE_FRESH} 或 
     * [GENERAL_BEAUTY_VOICE_FEMALE_VITALITY]{@link agora.GENERAL_BEAUTY_VOICE_FEMALE_VITALITY} 处理女声，否则音频可能会产生失真。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setLocalVoiceChanger(voiceChanger: VOICE_CHANGER_PRESET): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_LOCAL_VOICE_CHANGER, {voiceChanger})
    }

    /** @en
     * Sets the local voice reverberation option, including the virtual stereo.
     *
     * This method sets the local voice reverberation for users in a `COMMUNICATION` channel or hosts in a `LIVE_BROADCASTING` channel.
     * After successfully calling this method, all users in the channel can hear the voice with reverberation.
     *
     * **Note**
     * - When calling this method with enumerations that begin with `AUDIO_REVERB_FX`, ensure that you set profile in
     * [setAudioProfile]{@link agora.setAudioProfile} as `AUDIO_PROFILE_MUSIC_HIGH_QUALITY(4)` or
     * `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)`; otherwise, this methods cannot set the corresponding voice
     * reverberation option.
     * - When calling this method with `AUDIO_VIRTUAL_STEREO`, Agora recommends setting the `profile` parameter in
     * `setAudioProfile` as `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)`.
     * - This method works best with the human voice, and Agora does not recommend using it for audio containing music
     * and a human voice.
     * - Do not use this method with [setLocalVoiceChanger]{@link agora.setLocalVoiceChanger}, because the method
     * called later overrides the one called earlier.
     *
     * @param reverbPreset The local voice reverberation option. The default value is `AUDIO_REVERB_OFF`,
     * which means the original voice.  See [AUDIO_REVERB_PRESET]{@link agora.AUDIO_REVERB_PRESET}.
     * To achieve better voice effects, Agora recommends the enumeration whose name begins with `AUDIO_REVERB_FX`.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 设置本地语音混响（含虚拟立体声效果）。
     * 通信场景下的用户或直播场景下的主播均可调用该方法设置本地语音混响。成功设置以后，频道内的所有用户均可听到声音效果。
     * @note
     * - 当使用以 `AUDIO_REVERB_FX` 为前缀的枚举值时，请确保在调用该方法前将  [setAudioProfile]{@link agora.setAudioProfile}  的 `profile` 参数
     * 设置为 `AUDIO_PROFILE_MUSIC_HIGH_QUALITY(4)` 或 `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)`，否则该方法设置无效。
     * - 当使用 [AUDIO_VIRTUAL_STEREO]{@link agora.AUDIO_VIRTUAL_STEREO} 时，Agora 推荐在调用该方法前将 `setAudioProfile` 的 `profile` 参数
     * 设置为 `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)`。
     * - 该方法对人声的处理效果最佳，Agora 不推荐调用该方法处理含人声和音乐的音频数据。
     * - 该方法不能与  [setLocalVoiceChanger]{@link agora.setLocalVoiceChanger}  方法一同使用，否则先调的方法会不生效。
     * @param reverbPreset 本地语音混响选项，默认值为 [AUDIO_REVERB_OFF]{@link agora.AUDIO_REVERB_OFF} ，即原声。详见 
     * [AUDIO_REVERB_PRESET]{@link agora.AUDIO_REVERB_PRESET} 。
     * 为达到更好的混响效果，Agora 推荐使用以 `AUDIO_REVERB_FX` 为前缀的枚举值。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setLocalVoiceReverbPreset(reverbPreset: AUDIO_REVERB_PRESET): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_LOCAL_VOICE_REVERB_PRESET, {reverbPreset})
    }

    /** @en
     * Sets the log files that the SDK outputs.
     *
     * By default, the SDK outputs five log files, `agorasdk.log`, `agorasdk_1.log`, `agorasdk_2.log`, `agorasdk_3.log`,
     * `agorasdk_4.log`, each with a default size of 1024 KB.
     *
     * These log files are encoded in UTF-8. The SDK writes the latest logs in `agorasdk.log`. When `agorasdk.log` is
     * full, the SDK deletes the log file with the earliest modification time among the other four, renames
     * `agorasdk.log` to the name of the deleted log file, and create a new `agorasdk.log` to record latest logs.
     *
     * @note Ensure that you call this method immediately after calling [init]{@link agora.init}, otherwise the output
     * logs may not be complete.
     *
     * @param filePath The absolute path of log files. The default file path is as follows:
     * - Android: `/storage/emulated/0/Android/data/<package name>/files/agorasdk.log`
     * - iOS: `App Sandbox/Library/caches/agorasdk.log`
     * 
     * Ensure that the directory for the log files exists and is writable. You can use this parameter to rename the log files.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 设置 Agora SDK 输出的日志文件。
     *
     * 默认情况下，SDK 会生成 `agorasdk.log`、`agorasdk_1.log`、`agorasdk_2.log`、`agorasdk_3.log`、`agorasdk_4.log` 这 5 个日志文件。
     * 每个文件的默认大小为 1024 KB。日志文件为 UTF-8 编码。最新的日志永远写在 `agorasdk.log` 中。`agorasdk.log` 写满后，SDK 会从 1-4 中删除修改时间最
     * 早的一个文件，然后将 `agorasdk.log` 重命名为该文件，并建立新的 `agorasdk.log` 写入最新的日志。
     *
     * @note 如需调用本方法，请在调用  [initialize]{@link agora.initialize}  方法初始化 Agora 引擎后立即调用，否则可能造成输出日志不完整。
     * @param filePath 日志文件的完整路径。默认路径为如下：
     * - Android: `/storage/emulated/0/Android/data/<package name>/files/agorasdk.log`
     * - iOS: `App Sandbox/Library/caches/agorasdk.log`
     * 
     * 请确保指定的目录存在而且可写。你可通过该参数修改日志文件名。
     *
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setLogFile(filePath: string): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.SET_LOG_FILE, {filePath})
    }

    /** @en
     * Sets the output log level of the SDK.
     *
     * You can use one or a combination of the log filter levels. The log level follows the sequence of `OFF`,
     * `CRITICAL`, `ERROR`, `WARNING`, `INFO`, and `DEBUG`. Choose a level to see the logs preceding that level.
     *
     * If you set the log level to `WARNING`, you see the logs within levels `CRITICAL`, `ERROR`, and `WARNING`.
     *
     * @param filter Sets the log filter level. See [LOG_FILTER_TYPE]{@link agora.LOG_FILTER_TYPE}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 设置日志输出等级。
     * 设置 Agora SDK 的输出日志输出等级。不同的输出等级可以单独或组合使用。日志级别顺序依次为 `OFF`、`CRITICAL`、`ERROR`、`WARNING`、`INFO` 和 `DEBUG`。
     * 选择一个级别，你就可以看到在该级别之前所有级别的日志信息。
     * 例如，你选择 `WARNING` 级别，就可以看到在 `CRITICAL`、`ERROR` 和 `WARNING` 级别上的所有日志信息。
     * 
     * @param filter 设置过滤等级: [LOG_FILTER_TYPE]{@link agora.LOG_FILTER_TYPE} 。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setLogFilter(filter: LOG_FILTER_TYPE): number {
        if (isWeb) {
            const levels = {
                [LOG_FILTER_TYPE.LOG_FILTER_DEBUG]: 0,
                [LOG_FILTER_TYPE.LOG_FILTER_INFO]: 1,
                [LOG_FILTER_TYPE.LOG_FILTER_WARN]: 2,
                [LOG_FILTER_TYPE.LOG_FILTER_ERROR]: 3,
                [LOG_FILTER_TYPE.LOG_FILTER_OFF]: 4,
            }
            if (levels[filter] === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
            } else {
                AgoraRTC.Logger.setLogLevel(levels[filter])
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethod(API_TYPE.SET_LOG_FILTER, {filter})
    }

    /** @en
     * Sets the size of a log file that the SDK outputs.
     *
     * By default, the SDK outputs five log files, `agorasdk.log`, `agorasdk_1.log`, `agorasdk_2.log`, `agorasdk_3.log`,
     * `agorasdk_4.log`, each with a default size of 1024 KB.
     *
     * These log files are encoded in UTF-8. The SDK writes the latest logs in `agorasdk.log`. When `agorasdk.log` is
     * full, the SDK deletes the log file with the earliest modification time among the other four, renames
     * `agorasdk.log` to the name of the deleted log file, and create a new `agorasdk.log` to record latest logs.
     *
     * @param fileSizeInKBytes The size (KB) of a log file. The default value is 1024 KB. If you set `fileSizeInKByte`
     * to 1024 KB, the SDK outputs at most 5 MB log files; if you set it to less than 1024 KB, the maximum size of a
     * log file is still 1024 KB.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 设置 Agora SDK 输出的单个日志文件大小。
     *
     * 默认情况下，SDK 会生成 `agorasdk.log`、`agorasdk_1.log`、`agorasdk_2.log`、`agorasdk_3.log`、`agorasdk_4.log` 这 5 个日志文件。
     * 每个文件的默认大小为 1024 KB。日志文件为 UTF-8 编码。最新的日志永远写在 `agorasdk.log` 中。`agorasdk.log` 写满后，SDK 会从 1-4 中删除修改时间最早的一个文件，
     * 然后将 `agorasdk.log` 重命名为该文件，并建立新的 `agorasdk.log` 写入最新的日志。
     *
     * @see  [setLogFile]{@link agora.setLogFile}      * @see  [setLogFilter]{@link agora.setLogFilter}      *
     * @param fileSizeInKBytes 单个日志文件的大小，单位为 KB。默认值为 1024 KB。如果你将 `fileSizeInKByte` 设为 1024 KB，SDK 会最多输出 5 MB 的日志文件。如果你将 `fileSizeInKByte` 设为小于 1024 KB，单个日志文件最大仍为 1024 KB。
     *
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setLogFileSize(fileSizeInKBytes: number): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.SET_LOG_FILE_SIZE, {fileSizeInKBytes})
    }

    /** @en
     * @ignore
     * Updates the display mode of the local video view.
     *
     * After initializing the local video view, you can call this method to update its rendering and mirror modes. It
     * affects only the video view that the local user sees, not the published local video stream.
     *
     * **Note**
     * - Ensure that you have called the [setupLocalVideo]{@link agora.setupLocalVideo} method to initialize the local
     * video view before calling this method.
     * - During a call, you can call this method as many times as necessary to update the display mode of the local
     * video view.
     *
     * @param renderMode The rendering mode of the local video view. See [RENDER_MODE_TYPE]{@link agora.RENDER_MODE_TYPE}.
     * @param mirrorMode The mirror mode of the local video view. See [VIDEO_MIRROR_MODE_TYPE]{@link agora.VIDEO_MIRROR_MODE_TYPE}.
     *
     * **Note**:
     *
     * If you use a front camera, the SDK enables the mirror mode by default; if you use a rear camera, the SDK
     * disables the mirror mode by default.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 更新本地视图显示模式。
     * 
     * 初始化本地用户视图后，你可以调用该方法更新本地用户视图的渲染和镜像模式。该方法只影响本地用户看到的视频画面，不影响本地发布视频。
     * 
     * @note
     * - 请在调用  [setupLocalVideo]{@link agora.setupLocalVideo}  方法初始化本地视图后，调用该方法。
     * - 你可以在通话中多次调用该方法，多次更新本地用户视图的显示模式。
     * 
     * @param renderMode 本地视图的渲染模式，详见 [RENDER_MODE_TYPE]{@link agora.RENDER_MODE_TYPE}。
     * @param mirrorMode
     * - 本地视图的镜像模式，详见 [VIDEO_MIRROR_MODE_TYPE]{@link agora.VIDEO_MIRROR_MODE_TYPE}
     * - **Note**: 如果你使用前置摄像头，默认启动本地用户视图镜像模式；如果你使用后置摄像头，默认关闭本地视图镜像模式。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setLocalRenderMode(renderMode: RENDER_MODE_TYPE, mirrorMode?: VIDEO_MIRROR_MODE_TYPE): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        if (mirrorMode === undefined) {
            return callNativeMethod(API_TYPE.SET_LOCAL_RENDER_MODE, {renderMode})
        }
        return callNativeMethod(API_TYPE.SET_LOCAL_RENDER_MODE_2, {renderMode, mirrorMode})
    }

    /** @en
     * @ignore
     * Updates the display mode of the video view of a remote user.
     *
     * After initializing the video view of a remote user, you can call this method to update its rendering and mirror
     * modes. This method affects only the video view that the local user sees.
     *
     * **Note**
     * - Ensure that you have called the [setupRemoteVideo]{@link agora.setupRemoteVideo} method to initialize the
     * remote video view before calling this method.
     * - During a call, you can call this method as many times as necessary to update the display mode of the video
     * view of a remote user.
     *
     * @param userId The ID of the remote user.
     * @param renderMode The rendering mode of the remote video view. See [RENDER_MODE_TYPE]{@link agora.RENDER_MODE_TYPE}.
     * @param mirrorMode The mirror mode of the remote video view. See [VIDEO_MIRROR_MODE_TYPE]{@link agora.VIDEO_MIRROR_MODE_TYPE}.
     *
     * **Note**:
     *
     * The SDK disables the mirror mode by default.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 更新远端视图显示模式。
     * 初始化远端用户视图后，你可以调用该方法更新远端用户视图在本地显示时的渲染和镜像模式。该方法只影响本地用户看到的视频画面。
     * 
     * @note
     * - 请在调用  [setupRemoteVideo]{@link agora.setupRemoteVideo}  方法初始化远端视图后，调用该方法。
     * - 你可以在通话中多次调用该方法，多次更新远端用户视图的显示模式。
     * 
     * @param userId 远端用户 ID。
     * @param renderMode 远端用户视图的渲染模式，详见 [RENDER_MODE_TYPE]{@link agora.RENDER_MODE_TYPE}
     * @param mirrorMode
     * - 远端用户视图的镜像模式，详见 [VIDEO_MIRROR_MODE_TYPE]{@link agora.VIDEO_MIRROR_MODE_TYPE}
     * - **Note**: 默认关闭远端用户的镜像模式。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setRemoteRenderMode(userId: number, renderMode: RENDER_MODE_TYPE, mirrorMode?: VIDEO_MIRROR_MODE_TYPE): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        if (mirrorMode === undefined) {
            return callNativeMethod(API_TYPE.SET_REMOTE_RENDER_MODE, {userId, renderMode})
        }
        return callNativeMethod(API_TYPE.SET_REMOTE_RENDER_MODE_2, {userId, renderMode, mirrorMode})
    }

    /** @en
     * @ignore
     * Sets the local video mirror mode.
     *
     * @deprecated This method is deprecated, use the [setupLocalVideo]{@link agora.setupLocalVideo} or
     * [setLocalRenderMode]{@link agora.setLocalRenderMode} method instead.
     *
     * You must call this method before calling the [startPreview]{@link agora.startPreview} method, otherwise the
     * mirror mode will not work.
     *
     * **Warning**
     * - Call this method after calling the `setupLocalVideo` method to initialize the local video view.
     * - During a call, you can call this method as many times as necessary to update the mirror mode of the local video view.
     *
     * @param mirrorMode Sets the local video mirror mode. See [VIDEO_MIRROR_MODE_TYPE]{@link agora.VIDEO_MIRROR_MODE_TYPE}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * @deprecated 该方法已废弃，请改用  [setupLocalVideo]{@link agora.setupLocalVideo}
     * 或  [setLocalRenderMode]{@link agora.setLocalRenderMode} 设置本地视频镜像模式。
     * @warning 请在调用 `setupLocalVideo` 方法初始化本地视图后，调用该方法。
     * @param mirrorMode  详见 [VIDEO_MIRROR_MODE_TYPE]{@link agora.VIDEO_MIRROR_MODE_TYPE}
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setLocalVideoMirrorMode(mirrorMode: VIDEO_MIRROR_MODE_TYPE): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.SET_LOCAL_VIDEO_MIRROR_MODE, {mirrorMode})
    }

    /** @en
     * @ignore
     * Sets the stream mode to the single-stream (default) or dual-stream mode. (`LIVE_BROADCASTING` only.)
     *
     * If the dual-stream mode is enabled, the receiver can choose to receive the high stream (high-resolution and
     * high-bitrate video stream), or the low stream (low-resolution and low-bitrate video stream).
     *
     * @param enabled Sets the stream mode:
     * - true: Dual-stream mode.
     * - false: Single-stream mode.
     */
    /** @cn
     * @ignore
     * 开关双流模式。
     * 该方法设置单流（默认）或者双流模式。发送端开启双流模式后，接收端可以选择接收大流还是小流。其中，大流指高分辨率、高码率的视频流，小流指低分辨率、
     * 低码率的视频流。
     * @param enabled
     * - true: 双流。
     * - false: 单流。
     */
    export function enableDualStreamMode(enabled: boolean): number {
        if (isWeb) {
            if (enabled) {
                client.enableDualStream()
            } else {
                client.disableDualStream()
            }
            return ERROR_CODE_TYPE.ERR_OK
        }
        return callNativeMethod(API_TYPE.ENABLE_DUAL_STREAM_MODE, {enabled})
    }

    /** @en
     * @ignore
     * Sets the external audio source. Please call this method before [joinChannel]{@link agora.joinChannel}.
     *
     * @param enabled Sets whether to enable/disable the external audio source:
     * - true: Enables the external audio source.
     * - false: (Default) Disables the external audio source.
     * @param sampleRate Sets the sample rate (Hz) of the external audio source, which can be set as 8000, 16000,
     * 32000, 44100, or 48000 Hz.
     * @param channels Sets the number of audio channels of the external audio source:
     * - 1: Mono.
     * - 2: Stereo.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 设置外部音频采集参数。请在  [joinChannel]{@link agora.joinChannel}  前调用该方法。
     * @param enabled
     * - true: 开启使用外部音频源的功能；
     * - false: 关闭使用外部音频源的功能（默认）。
     * @param sampleRate 外部音频源的采样率 (Hz)，可设置为 8000，16000，32000，44100 或 48000。
     * @param channels 外部音频源的通道数，可设置为 1 或 2:
     * - 1: 单声道
     * - 2: 双声道
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setExternalAudioSource(enabled: boolean, sampleRate: number, channels: number): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_EXTERNAL_AUDIO_SOURCE, {
            enabled,
            sampleRate,
            channels
        })
    }

    /** @en
     * @ignore
     * Sets the external audio sink.
     *
     * This method applies to scenarios where you want to use external audio
     * data for playback. After enabling the external audio sink, you can call
     * the [pullAudioFrame]{@link agora.pullAudioFrame} method to pull the
     * remote audio data, process it, and play it with the audio effects that you want.
     *
     * @note
     * Once you enable the external audio sink, the app will not retrieve any
     * audio data from the
     * [onPlaybackAudioFrame]{@link AgoraRtcEvents.onPlaybackAudioFrame} callback.
     *
     * @param enabled
     * - true: Enables the external audio sink.
     * - false: (Default) Disables the external audio sink.
     * @param sampleRate Sets the sample rate (Hz) of the external audio sink,
     * which can be set as 16000, 32000, 44100 or 48000.
     * @param channels Sets the number of audio channels of the external
     * audio sink:
     * - 1: Mono.
     * - 2: Stereo.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 设置外部音频渲染。
     *
     * 该方法适用于需要自行渲染音频的场景。开启外部音频渲染后，你可以通过调用 
     * [pullAudioFrame]{@link agora.pullAudioFrame}  方法拉取远端音频数据。
     * 
     * App 可以对拉取到的原始音频数据进行处理后再渲染，获取想要的音频效果。
     *
     * @note
     * 开启外部音频渲染后，App 会无法从
     *  [onPlaybackAudioFrame]{@link agora.onPlaybackAudioFrame}  回调中获得数据。
     * @param enabled
     * - true: 开启外部音频渲染。
     * - false: （默认）关闭外部音频渲染。
     * @param sampleRate 外部音频渲染的采样率 (Hz)，可设置为 16000，32000，44100 或 48000。
     * @param channels 外部音频渲染的声道数，可设置为 1 或 2:
     * - 1: 单声道
     * - 2: 双声道
     *
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setExternalAudioSink(enabled: boolean, sampleRate: number, channels: number): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_EXTERNAL_AUDIO_SINK, {
            enabled,
            sampleRate,
            channels
        })
    }

    /** @en
     * @ignore
     * Sets the audio recording format for the [onRecordAudioFrame]{@link AgoraRtcEvents.onRecordAudioFrame} callback.
     *
     * @param sampleRate Sets the sample rate (`samplesPerSec`) returned in the onRecordAudioFrame* callback, which can be set as 8000, 16000, 32000, 44100, or 48000 Hz.
     * @param channel Sets the number of audio channels (`channels`) returned in the *onRecordAudioFrame* callback:
     * - 1: Mono
     * - 2: Stereo
     * @param mode Sets the use mode (see [RAW_AUDIO_FRAME_OP_MODE_TYPE)]{@link agora.RAW_AUDIO_FRAME_OP_MODE_TYPE)} of the *onRecordAudioFrame* callback.
     * @param samplesPerCall Sets the number of samples returned in the *onRecordAudioFrame* callback. `samplesPerCall` is usually set as 1024 for RTMP streaming.
     * @note The SDK triggers the `onRecordAudioFrame` callback according to the sample interval. Ensure that the sample interval ≥ 0.01 (s). And, Sample interval (sec) = `samplePerCall`/(`sampleRate` × `channel`).
     * @return
     *     - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 设置录制的声音格式。
     * 该方法设置  [onRecordAudioFrame]{@link agora.onRecordAudioFrame}  回调的录制声音格式。
     * @param sampleRate 指定  [onRecordAudioFrame]{@link agora.onRecordAudioFrame}  中返回数据的采样率，可设置为 8000、 16000、 
     * 32000、 44100 或 48000。
     * @param channel 指定  [onRecordAudioFrame]{@link agora.onRecordAudioFrame}  中返回数据的通道数，可设置为 1 或 2:
     * - 1: 单声道
     * - 2: 双声道
     * @param mode  [onRecordAudioFrame]{@link agora.onRecordAudioFrame}  回调的使用模式: 
     * [RAW_AUDIO_FRAME_OP_MODE_TYPE]{@link agora.RAW_AUDIO_FRAME_OP_MODE_TYPE} 。
     * @param samplesPerCall 指定  [onRecordAudioFrame]{@link agora.onRecordAudioFrame}  中返回数据的采样点数，如 RTMP 推流应用中通常为 1024。
     * @note SDK 会根据该采样间隔触发 `onRecordAudioFrame` 回调。请确保采样间隔不得小于 0.01 (s)。其中，
     * 采样间隔 = samplesPerCall/(sampleRate × channel)。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    function setRecordingAudioFrameParameters(sampleRate: number, channel: number, mode: RAW_AUDIO_FRAME_OP_MODE_TYPE, samplesPerCall: number): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_RECORDING_AUDIO_FRAME_PARAMETERS, {
            sampleRate,
            channel,
            mode,
            samplesPerCall
        })
    }

    /** @en
     * @ignore
     * Sets the audio playback format for the [onPlaybackAudioFrame]{@link agora.onPlaybackAudioFrame} callback.
     * 
     * @param sampleRate Sets the sample rate (`samplesPerSec`) returned in the *onPlaybackAudioFrame* callback, 
     * which can be set as 8000, 16000, 32000, 44100, or 48000 Hz.
     * @param channel Sets the number of channels (`channels`) returned in the *onPlaybackAudioFrame* callback:
     * - 1: Mono
     * - 2: Stereo
     * @param mode Sets the use mode (see [RAW_AUDIO_FRAME_OP_MODE_TYPE)]{@link agora.RAW_AUDIO_FRAME_OP_MODE_TYPE)} of the 
     * `onPlaybackAudioFrame` callback.
     * @param samplesPerCall Sets the number of samples returned in the `onPlaybackAudioFrame` callback. `samplesPerCall` 
     * is usually set as 1024 for RTMP streaming.
     * @note The SDK triggers the `onPlaybackAudioFrame` callback according to the sample interval. Ensure that the sample 
     * interval ≥ 0.01 (s). And, Sample interval (sec) = `samplePerCall`/(`sampleRate` × `channel`).
     * 
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 设置播放的声音格式。
     * @param sampleRate 指定  [onPlaybackAudioFrame]{@link agora.onPlaybackAudioFrame}  中返回数据的采样率，可设置为 
     * 8000，16000，32000，44100 或 48000。
     * @param channel 指定  [onPlaybackAudioFrame]{@link agora.onPlaybackAudioFrame}  中返回数据的通道数，可设置为 1 或 2:
     * - 1: 单声道
     * - 2: 双声道
     * @param mode 指定  [onPlaybackAudioFrame]{@link agora.onPlaybackAudioFrame}  的使用模式: 
     * [RAW_AUDIO_FRAME_OP_MODE_TYPE]{@link agora.RAW_AUDIO_FRAME_OP_MODE_TYPE} 。
     * @param samplesPerCall 指定  [onPlaybackAudioFrame]{@link agora.onPlaybackAudioFrame}  中返回数据的采样点数，如RTMP推流应用中通常为 1024。
     * @note SDK 会根据该采样间隔触发 `onPlaybackAudioFrame` 回调。请确保采样间隔不得小于 0.01 (s)。其中，
     * 采样间隔 = samplesPerCall/(sampleRate × channel)。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    function setPlaybackAudioFrameParameters(sampleRate: number, channel: number, mode: RAW_AUDIO_FRAME_OP_MODE_TYPE, samplesPerCall: number): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_PLAYBACK_AUDIO_FRAME_PARAMETERS, {
            sampleRate,
            channel,
            mode,
            samplesPerCall
        })
    }

    /** @en
     * @ignore
     * Sets the mixed audio format for the [onMixedAudioFrame]{@link agora.onMixedAudioFrame} callback.
     * 
     * @param sampleRate Sets the sample rate (`samplesPerSec`) returned in the `onMixedAudioFrame` callback, which can be set as 
     * 8000, 16000, 32000, 44100, or 48000 Hz.
     * @param samplesPerCall Sets the number of samples (`samples`) returned in the *onMixedAudioFrame* callback. `samplesPerCall` 
     * is usually set as 1024 for RTMP streaming.
     * @note The SDK triggers the `onMixedAudioFrame` callback according to the sample interval. Ensure that the sample 
     * interval ≥ 0.01 (s). And, Sample interval (sec) = `samplePerCall`/(`sampleRate` × `channels`).
     * 
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 设置录制与播放声音混音后的数据格式
     * @param sampleRate 指定  [onMixedAudioFrame]{@link agora.onMixedAudioFrame}  中返回数据的采样率，可设置为 8000，16000，32000，
     * 44100 或 48000。
     * @param samplesPerCall 指定  [onMixedAudioFrame]{@link agora.onMixedAudioFrame}  中返回数据的采样点数，如 RTMP 推流应用中通常为 1024。
     * @note SDK 会根据该采样间隔触发 `onMixedAudioFrame` 回调。请确保采样间隔不得小于 0.01 (s)。其中，
     * 采样间隔 = samplesPerCall/(sampleRate × channels)。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    function setMixedAudioFrameParameters(sampleRate: number, samplesPerCall: number): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethodAudioEffect(API_TYPE_AUDIO_EFFECT.SET_MIXED_AUDIO_FRAME_PARAMETERS, {
            sampleRate,
            samplesPerCall
        })
    }

    /** @en
     * Adjusts the recording volume.
     *
     * @param volume Recording volume. To avoid echoes and improve call quality,
     * Agora recommends setting the value of volume between 0 and 100. If you
     * need to set the value higher than 100, contact support@agora.io first.
     * - 0: Mute.
     * - 100: Original volume.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 调节录音音量。
     * @param volume 录音信号音量。为避免回声并提升通话质量，Agora 建议将 volume 值设为 [0,100]。如果
     * volume 值需超过 100，联系[技术支持](https://agora-ticket.agora.io/):
     * - 0: 静音；
     * - 100: 原始音量。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function adjustRecordingSignalVolume(volume: number): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.ADJUST_RECORDING_SIGNAL_VOLUME, {volume})
    }

    /** @en
     * Adjusts the playback volume of all remote users.
     *
     * **Note**
     * - This method adjusts the playback volume that is the mixed volume of all remote users.
     * - (Since v3.1.2) To mute the local audio playback, call both the `adjustPlaybackSignalVolume` and
     * [adjustAudioMixingVolume]{@link agora.adjustAudioMixingVolume} methods and set the volume as `0`.
     *
     * @param volume The playback volume of all remote users. To avoid echoes and
     * improve call quality, Agora recommends setting the value of volume between
     * 0 and 100. If you need to set the value higher than 100, contact
     * support@agora.io first.
     * - 0: Mute.
     * - 100: Original volume.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 调节本地播放的所有远端用户音量。
     * @note
     * - 该方法调节的是本地播放的所有远端用户混音后的音量。
     * - 从 v3.1.2 开始，静音本地音频需同时调用 `adjustPlaybackSignalVolume` 和  
     * [adjustAudioMixingPlayoutVolume]{@link agora.adjustAudioMixingPlayoutVolume}  方法，并将 `volume` 设置为 `0`。
     * @param volume 播放音量。为避免回声并提升通话质量，Agora 建议将 volume 值设为 [0,100]。如果
     * volume 值需超过 100，联系[技术支持](https://agora-ticket.agora.io/):
     * - 0: 静音；
     * - 100: 原始音量。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function adjustPlaybackSignalVolume(volume: number): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.ADJUST_PLAYBACK_SIGNAL_VOLUME, {volume})
    }

    /** @en
     * Enables interoperability with the Agora Web SDK.
     *
     * @deprecated This method is deprecated. As of v3.1.2, the Native SDK automatically enables interoperability with
     * the Web SDK, so you no longer need to call this method.
     *
     * **Note**
     * - This method applies only to the `LIVE_BROADCASTING` profile. In the `COMMUNICATION` profile, interoperability
     * with the Agora Web SDK is enabled by default.
     * - If the channel has Web SDK users, ensure that you call this method, or the video of the Native user will be a
     * black screen for the Web user.
     *
     * @param enabled Sets whether to enable/disable interoperability with the Agora Web SDK:
     * - true: Enable.
     * - false: (Default) Disable.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @deprecated
     * 该方法已废弃。自 Native SDK v3.1.2 及之后，SDK 自动开启与 Web SDK 的互通，无需调用该方法开启。
     * 打开直播场景下与 Agora Web SDK 的互通。
     * @note
     * - 该方法仅适用于直播场景。通信场景默认打开与 Web SDK 的互通。
     * - 如果有用户通过 Web SDK 加入频道，请确保调用该方法，否则 Web 端用户看 Native 端的画面会是黑屏。
     * @param enabled
     * - true: 打开互通；
     * - false: 关闭互通（默认）。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function enableWebSdkInteroperability(enabled: boolean): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.ENABLE_WEB_SDK_INTEROPER_ABILITY, {enabled})
    }

    /** @en
     * @ignore
     * Sets the preferences for the high-quality video. (`LIVE_BROADCASTING` only).
     *
     * @deprecated This method is deprecated. Agora recommends using the `degradationPrefer` parameter of 
     * [VideoEncoderConfiguration]{@link agora.VideoEncoderConfiguration}.
     *
     * @param preferFrameRateOverImageQuality Sets the video quality preference:
     * - true: Frame rate over image quality.
     * - false: (Default) Image quality over frame rate.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 设置视频优化选项（仅适用于直播）。
     * @deprecated 该方法已废弃。Agora 建议使用 [VideoEncoderConfiguration]{@link agora.VideoEncoderConfiguration} 类中的 
     * `degradationPrefer` 参数设置视频质量偏好。该方法允许用户设置视频的优化选项。
     * 
     * @param preferFrameRateOverImageQuality 支持两种优化选项：
     * - true：画质和流畅度里，优先保证流畅度
     * - false：画质和流畅度里，优先保证画质 (默认)
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setVideoQualityParameters(preferFrameRateOverImageQuality: boolean): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.SET_VIDEO_QUALITY_PARAMETERS, {preferFrameRateOverImageQuality})
    }

    /** @en
     * @ignore
     * Sets the fallback option for the published video stream based on the network conditions.
     *
     * If `option` is set as
     * [STREAM_FALLBACK_OPTION_AUDIO_ONLY]{@link agora.STREAM_FALLBACK_OPTIONS.STREAM_FALLBACK_OPTION_AUDIO_ONLY}(2),
     * the SDK will:
     * - Disable the upstream video but enable audio only when the network conditions deteriorate and cannot support
     * both video and audio.
     * - Re-enable the video when the network conditions improve.
     *
     * When the published video stream falls back to audio only or when the audio-only stream switches back to the video,
     * the SDK triggers the [onLocalPublishFallbackToAudioOnly]{@link AgoraRtcEvents.onLocalPublishFallbackToAudioOnly} callback.
     *
     * @note Agora does not recommend using this method for CDN live streaming, because the remote CDN live user will
     * have a noticeable lag when the published video stream falls back to audio only.
     *
     * @param option Sets the fallback option for the published video stream. See
     * [STREAM_FALLBACK_OPTIONS]{@link agora.STREAM_FALLBACK_OPTIONS}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 设置弱网条件下发布的音视频流回退选项。
     * 
     * 网络不理想的环境下，实时通信音视频的质量都会下降。使用该接口并将 `option` 设置为 
     * [STREAM_FALLBACK_OPTION_AUDIO_ONLY]{@link agora.STREAM_FALLBACK_OPTIONS.STREAM_FALLBACK_OPTION_AUDIO_ONLY} (2) 后，
     * SDK 会在上行弱网且音视频质量严重受影响时，自动关断视频流，从而保证或提高音频质量。同时 SDK 会持续监控网络质量，并在网络质量改善时恢复音视频流。
     * 当本地推流回退为音频流时，或由音频流恢复为音视频流时，SDK 会触发本地发布的媒体流已回退为音频流  
     * [onLocalPublishFallbackToAudioOnly]{@link AgoraRtcEvents.onLocalPublishFallbackToAudioOnly}  回调。
     * 
     * @note 视频直播场景下，旁路推流的发流用户（即主播）设置 `STREAM_FALLBACK_OPTION_AUDIO_ONLY(2)` 可能导致 CDN 观众听到的声音有所延迟。
     * Agora 不建议主播使用视频流回退机制。
     * 
     * @param option 本地发流回退处理选项，详见 [STREAM_FALLBACK_OPTIONS]{@link agora.STREAM_FALLBACK_OPTIONS}。
     * 
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setLocalPublishFallbackOption(option: STREAM_FALLBACK_OPTIONS): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.SET_LOCAL_PUBLISH_FALLBACK_OPTION, {option})
    }

    /** @en
     * @ignore
     * Sets the fallback option for the remotely subscribed video stream based on the network conditions.
     *
     * The default setting for `option` is
     * [STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW]{@link agora.STREAM_FALLBACK_OPTIONS.STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW}(1),
     * where the remotely subscribed video stream falls back to the low-stream video (low resolution and low bitrate) under poor
     * downlink network conditions.
     *
     * If `option` is set as
     * [STREAM_FALLBACK_OPTION_AUDIO_ONLY]{@link agora.STREAM_FALLBACK_OPTIONS.STREAM_FALLBACK_OPTION_AUDIO_ONLY} (2), the
     * SDK automatically switches the video from a high-stream to a low-stream, or disables the video when the downlink network
     * conditions cannot support both audio and video to guarantee the quality of the audio. The SDK monitors the network quality
     * and restores the video stream when the network conditions improve.
     *
     * When the remotely subscribed video stream falls back to audio only or when the audio-only stream switches back to the video
     * stream, the SDK triggers the [onRemoteSubscribeFallbackToAudioOnly]{@link AgoraRtcEvents.onRemoteSubscribeFallbackToAudioOnly}
     * callback.
     *
     * @param  option  Sets the fallback option for the remotely subscribed video stream. See
     * [STREAM_FALLBACK_OPTIONS]{@link agora.STREAM_FALLBACK_OPTIONS}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 设置弱网条件下订阅的音视频流的回退选项。
     * 默认 `option` 为 
     * [STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW]{@link agora.STREAM_FALLBACK_OPTIONS.STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW}(1)。
     * 如果你使用本方法并将 `option` 设置为 
     * [STREAM_FALLBACK_OPTION_AUDIO_ONLY]{@link agora.STREAM_FALLBACK_OPTIONS.STREAM_FALLBACK_OPTION_AUDIO_ONLY}(2)，
     * SDK 会在下行弱网且音视频质量严重受影响时，将视频流切换为小流，或关断视频流，从而保证或提高音频质量。
     * 同时 SDK 会持续监控网络质量，并在网络质量改善时恢复音视频流。
     * 
     * 当远端订阅流回退为音频流时，或由音频流恢复为音视频流时，SDK 会触发 
     * [onRemoteSubscribeFallbackToAudioOnly]{@link AgoraRtcEvents.onRemoteSubscribeFallbackToAudioOnly}  回调。
     * 
     * @param  option 弱网条件下订阅的音视频流的回退选项。详见 [STREAM_FALLBACK_OPTIONS]{@link agora.STREAM_FALLBACK_OPTIONS}。
     * 
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setRemoteSubscribeFallbackOption(option: STREAM_FALLBACK_OPTIONS): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.SET_REMOTE_SUBSCRIBE_FALLBACK_OPTION, {option})
    }

    /** @en
     * @ignore
     * Switches between front and rear cameras.
     *
     * @note This method is for Android and iOS only.
     *
     * @param direction Sets the camera to be used. See [CAMERA_DIRECTION]{@link agora.CAMERA_DIRECTION}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 切换前置/后置摄像头
     * @note 该方法仅适用于 Android 和 iOS 平台。
     * 
     * @param direction 设置使用的摄像头。详见 [CAMERA_DIRECTION]{@link agora.CAMERA_DIRECTION}。
     * 
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function switchCamera(direction?: CAMERA_DIRECTION): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        if (direction === undefined) {
            return callNativeMethod(API_TYPE.SWITCH_CAMERA)
        }
        return callNativeMethod(API_TYPE.SWITCH_CAMERA_2, {direction})
    }

    /** @en
     * Sets the default audio playback route.
     *
     * This method sets whether the received audio is routed to the earpiece or speakerphone by default before joining a channel.
     *
     * If a user does not call this method, the audio is routed to the earpiece by default. If you need to change the default
     * audio route after joining a channel, call the [setEnableSpeakerphone]{@link agora.setEnableSpeakerphone} method.
     *
     * The default setting for each profile:
     * - `COMMUNICATION`: In a voice call, the default audio route is the earpiece.
     * - `LIVE_BROADCASTING`: Speakerphone.
     *
     * **Note**
     * - This method is for Android and iOS only.
     * - This method is applicable only to the `COMMUNICATION` profile.
     * - For iOS, this method only works in a voice call.
     * - Call this method before calling the [joinChannel]{@link agora.joinChannel} method.
     *
     * @param defaultToSpeaker Sets the default audio route:
     * - true: Route the audio to the speakerphone. If the playback device connects to the earpiece or Bluetooth, the
     * audio cannot be routed to the speakerphone.
     * - false: (Default) Route the audio to the earpiece. If a headset is plugged in, the audio is routed to the headset.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 设置默认的语音路由
     * 该方法设置接收到的语音从听筒或扬声器出声。如果用户不调用本方法，语音默认从听筒出声。
     * 各频道场景下默认的语音路由：
     * - 语音通话：听筒
     * - 视频通话：扬声器。如果有用户在频道中使用  [disableVideo]{@link agora.disableVideo}、
     * [muteLocalVideoStream]{@link agora.muteLocalVideoStream} 或 [muteAllRemoteVideoStreams]{@link agora.muteAllRemoteVideoStreams} 
     * 方法关闭视频，则语音路由会自动切换回听筒。
     * - 直播：扬声器
     * - 游戏语音：扬声器
     * @note
     * - 该方法仅适用于 Android 和 iOS 平台。
     * - 在 iOS 平台上，该方法只在纯音频模式下工作，在有视频的模式下不工作。
     * - 该方法需要在  [joinChannel]{@link agora.joinChannel}  前设置，否则不生效。如需在加入频道后更改默认语音路由，请调用  
     * [setEnableSpeakerphone]{@link agora.setEnableSpeakerphone}  方法。
     * @param defaultToSpeaker 设置默认的语音路由
     * - true: 语音路由为外放（扬声器）。如果设备连接了耳机或蓝牙，则无法切换到外放。
     * - false:（默认）语音路由为听筒。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setDefaultAudioRouteToSpeakerphone(defaultToSpeaker: boolean): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.SET_DEFAULT_AUDIO_ROUTE_SPEAKER_PHONE, {defaultToSpeaker})
    }

    /** @en
     * Enables/Disables the audio playback route to the speakerphone.
     *
     * This method sets whether the audio is routed to the speakerphone or earpiece.
     *
     * See the default audio route explanation in the
     * [setDefaultAudioRouteToSpeakerphone]{@link agora.setDefaultAudioRouteToSpeakerphone} method and check whether it
     * is necessary to call this method.
     *
     * **Note**
     * - This method is for Android and iOS only.
     * - Ensure that you have successfully called the [joinChannel]{@link agora.joinChannel} method before calling this method.
     * - After calling this method, the SDK returns the [onAudioRouteChanged]{@link AgoraRtcEvents.onAudioRouteChanged}
     * callback to indicate the changes.
     * - This method does not take effect if a headset is used.
     *
     * @param speakerOn Sets whether to route the audio to the speakerphone or earpiece:
     * - true: Route the audio to the speakerphone. If the playback device connects to the earpiece or Bluetooth, the
     * audio cannot be routed to the speakerphone.
     * - false: Route the audio to the earpiece. If a headset is plugged in, the audio is routed to the headset.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 启用/关闭扬声器播放
     * 
     * 该方法设置是否将语音路由设到扬声器（外放）。 你可以在  
     * [setDefaultAudioRouteToSpeakerphone]{@link agora.setDefaultAudioRouteToSpeakerphone}  方法中查看默认的语音路由。
     * 在 Android 上， [setAudioProfile]{@link agora.setAudioProfile}  中 `scenario` 及  
     * [setChannelProfile]{@link agora.setChannelProfile}  的设置
     * 会影响 `setEnableSpeakerphone` 的行为。`setEnableSpeakerphone` 不生效的情况如下：
     * - 当 `scenario` 为 [AUDIO_SCENARIO_GAME_STREAMING]{@link agora.AUDIO_SCENARIO_GAME_STREAMING} 时，所有用户都无法切换音频播放路由。
     * - 当 `scenario` 为 [AUDIO_SCENARIO_DEFAULT]{@link agora.AUDIO_SCENARIO_DEFAULT} 或 
     * [AUDIO_SCENARIO_SHOWROOM]{@link agora.AUDIO_SCENARIO_SHOWROOM} 时，直播场景中的观众无法切换音频播放路由，且当频道中只有一个主播时，
     * 该主播也无法切换音频播放路由。
     * - 当 `scenario` 为 [AUDIO_SCENARIO_EDUCATION]{@link agora.AUDIO_SCENARIO_EDUCATION} 时，直播场景中的观众无法切换音频播放路由。
     * 
     * @note
     * - 该方法仅适用于 Android 和 iOS 平台。
     * - 请确保在调用此方法前已调用过  [joinChannel]{@link agora.joinChannel}  方法。
     * - 调用该方法后，SDK 将返回  [onAudioRouteChanged]{@link AgoraRtcEvents.onAudioRouteChanged}  回调提示状态已更改。
     * 
     * @param speakerOn 设置是否切换语音路由到扬声器（外放）：
     * - true: 切换到外放。如果设备连接了耳机或蓝牙，则无法切换到外放。
     * - false: 切换到听筒。如果设备连接了耳机，则语音路由走耳机。
     * 
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setEnableSpeakerphone(speakerOn: boolean): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.SET_ENABLE_SPEAKER_PHONE, {speakerOn})
    }

    /** @en
     * Enables in-ear monitoring (for Android and iOS only).
     *
     * @param enabled Determines whether to enable in-ear monitoring.
     * - true: Enable.
     * - false: (Default) Disable.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 开启耳返功能。
     * @note
     * - 该方法仅适用于 Android 和 iOS 平台。
     * - 用户必须使用有线耳机才能听到耳返效果。
     * 
     * @param enabled 开启/关闭耳返功能：
     * - true：开启耳返功能
     * - false：关闭耳返功能(默认)
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function enableInEarMonitoring(enabled: boolean): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.ENABLE_IN_EAR_MONITORING, {enabled})
    }

    /** @en
     * Sets the volume of the in-ear monitor.
     *
     * @param volume Sets the volume of the in-ear monitor. The value ranges between 0 and 100 (default).
     *
     * @note This method is for Android and iOS only.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 设置耳返音量
     * @note
     * - 该方法仅适用于 Android 和 iOS 平台。
     * - 用户必须使用有线耳机才能听到耳返效果。
     * @param volume 设置耳返音量，取值范围在 [0,100]。默认值为 100
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setInEarMonitoringVolume(volume: number): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.SET_IN_EAR_MONITORING_VOLUME, {volume})
    }

    /** @en
     * Checks whether the speakerphone is enabled.
     *
     * @note This method is for Android and iOS only.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 查询扬声器启用状态
     * @note 该方法仅适用于 Android 和 iOS 平台。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function isSpeakerphoneEnabled(): boolean {
        if (isWeb) {
            return false
        }
        return callNativeMethod(API_TYPE.IS_SPEAKER_PHONE_ENABLED)
    }

    /** @en
     * Retrieves the current call ID.
     *
     * When a user joins a channel on a client, a `callId` is generated to identify the call from the client. Feedback
     * methods, such as [rate]{@link agora.rate} and [complain]{@link agora.complain} , must be called after the call
     * ends to submit feedback to the SDK.
     *
     * The `rate` and `complain` methods require the `callId` parameter retrieved from the `getCallId` method during a
     * call. `callId` is passed as an argument into the `rate` and `complain` methods after the call ends.
     *
     * @param callId The current call ID.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 获取当前通话 ID。
     * 客户端在每次  [joinChannel]{@link agora.joinChannel}  后会生成一个对应的 `CallId`，标识该客户端的此次通话。有些方法如 
     * [rate]{@link agora.rate}、[complain]{@link agora.complain}  需要在通话结束后调用，向 SDK 提交反馈，这些方法必须指定 `CallId` 参数。
     * 使用这些反馈方法，需要在通话过程中调用  [getCallId]{@link agora.getCallId}  方法获取 `CallId`，在通话结束后在反馈方法中作为参数传入。
     * @param callId 当前的通话 ID。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function getCallId(): string {
        if (isWeb) {
            return null
        }
        return callNativeMethod(API_TYPE.GET_CALL_ID)
    }

    /** @en
     * Allows a user to rate a call after the call ends.
     *
     * @param callId The ID of the call, retrieved from the [getCallId]{@link agora.getCallId} method.
     * @param rating  Rating of the call. The value is between 1 (lowest score) and 5 (highest score). If you set a
     * value out of this range, the `ERR_INVALID_ARGUMENT(-2)` error returns.
     * @param description (Optional) The description of the rating, with a string length of less than 800 bytes.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 给通话评分。
     * 该方法能够让用户为通话评分，一般在通话结束后调用。
     * @param callId 通话  [getCallId]{@link agora.getCallId}  函数获取的通话 ID。
     * @param rating  给通话的评分，最低 1 分，最高 5 分。如超过这个范围，SDK 会返回 `ERR_INVALID_ARGUMENT(-2)` 错误。
     * @param description (非必选项) 给通话的描述，可选，长度应小于 800 字节。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function rate(callId: string, rating: number, description?: string): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.RATE, {callId, rating, description})
    }

    /** @en
     * Allows a user to complain about the call quality after a call ends.
     *
     * @param callId The ID of the call, retrieved from the [getCallId]{@link agora.getCallId} method.
     * @param description (Optional) The description of the complaint, with a string length of less than 800 bytes.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 投诉通话质量。
     * 该方法让用户就通话质量进行投诉。一般在通话结束后调用。
     * @param callId 通话  [getCallId]{@link agora.getCallId}  函数获取的通话 ID。
     * @param description (非必选项) 给通话的描述，可选，长度应小于 800 字节。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function complain(callId: string, description: string): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.COMPLAIN, {callId, description})
    }

    /** @en
     * Retrieves the SDK version number.
     *
     * @return The version of the current SDK in the string format. For example, 3.1.2.
     */
    /** @cn
     * 获取 SDK 的版本信息
     * 
     * @return 当前的 SDK 版本号，格式为字符串，如 3.1.2。
     */
    export function getVersion(): string {
        if (isWeb) {
            return AgoraRTC.VERSION
        }
        return callNativeMethod(API_TYPE.GET_VERSION)
    }

    /** @en
     * Enables the network connection quality test.
     *
     * This method tests the quality of the users' network connections and is disabled by default.
     *
     * Before a user joins a channel or before an audience switches to a host, call this method to check the uplink network quality.
     *
     * This method consumes additional network traffic, and hence may affect communication quality.
     *
     * Call the [disableLastmileTest]{@link agora.disableLastmileTest} method to disable this test after receiving
     * the [onLastmileQuality]{@link AgoraRtcEvents.onLastmileQuality} callback, and before joining a channel.
     *
     * **Note**
     * - Do not call any other methods before receiving the `onLastmileQuality` callback. Otherwise, the callback may
     * be interrupted by other methods, and hence may not be triggered.
     * - A host should not call this method after joining a channel (when in a call).
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 启动网络测试。
     * 该方法启用网络连接质量测试，用于检测用户目前的网络接入质量（上行网络质量）。默认该功能为关闭状态。该方法主要用于以下场景:
     * - 用户加入频道前，可以调用该方法判断和预测目前的上行网络质量是否足够好。
     * - 直播场景下，当用户角色由观众切换为主播时，可以调用该方法判断和预测目前的上行网络质量是否足够好。
     * 
     * 启用该方法均会消耗网络流量，影响通话质量。用户必须在收到  [onLastmileQuality]{@link AgoraRtcEvents.onLastmileQuality}
     * 回调后须调用  [disableLastmileTest]{@link agora.disableLastmileTest}  停止测试，再加入频道或切换为主播。
     * @note
     * - 该方法请勿与  [startLastmileProbeTest]{@link agora.startLastmileProbeTest}  同时使用。
     * - 调用该方法后，在收到  [onLastmileQuality]{@link AgoraRtcEvents.onLastmileQuality}  回调前请勿调用其他方法，
     * 否则可能由于 API 操作过于频繁导致回调无法执行。
     * - 在直播场景中，如果本地用户为主播，请勿加入频道后调用该方法。
     * - 加入频道前调用该方法检测网络质量后，SDK 会占用一路视频的带宽，码率与 
     * [setVideoEncoderConfiguration]{@link agora.setVideoEncoderConfiguration} 中设置的码率相同。
     * 加入频道后，无论是否调用了  [disableLastmileTest]{@link agora.disableLastmileTest}  ，SDK 均会自动停止带宽占用。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function enableLastmileTest(): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.ENABLE_LAST_MILE_TEST)
    }

    /** @en
     * Disables the network connection quality test.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 关闭网络测试。
     * 
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function disableLastmileTest(): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.DISABLE_LAST_MILE_TEST)
    }

    /** @en
     * Starts the last-mile network probe test.
     *
     * This method starts the last-mile network probe test before joining a channel to get the uplink and downlink last-mile network
     * statistics, including the bandwidth, packet loss, jitter, and round-trip time (RTT).
     *
     * Call this method to check the uplink network quality before users join a channel or before an audience switches to a host.
     *
     * Once this method is enabled, the SDK returns the following callbacks:
     * - [onLastmileQuality]{@link AgoraRtcEvents.onLastmileQuality}: the SDK triggers this callback within two seconds
     * depending on the network conditions. This callback rates the network conditions and is more closely linked to the user experience.
     * - [onLastmileProbeResult]{@link AgoraRtcEvents.onLastmileProbeResult}: the SDK triggers this callback within 30 seconds depending
     * on the network conditions. This callback returns the real-time statistics of the network conditions and is more objective.
     *
     * **Note**
     * - This method consumes extra network traffic and may affect communication quality. We do not recommend calling this method
     * together with [enableLastmileTest]{@link agora.enableLastmileTest}.
     * - Do not call other methods before receiving the `onLastmileQuality` and `onLastmileProbeResult` callbacks. Otherwise,
     * the callbacks may be interrupted.
     * - In the `LIVE_BROADCASTING` profile, a host should not call this method after joining a channel.
     *
     * @param config Sets the configurations of the last-mile network probe test. See
     * [LastmileProbeConfig]{@link agora.LastmileProbeConfig}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 开始通话前网络质量探测。
     * 
     * 向用户反馈上下行网络的带宽、丢包、网络抖动和往返时延数据。
     * 
     * 启用该方法后，SDK 会依次返回如下 2 个回调：
     * -  [onLastmileQuality]{@link AgoraRtcEvents.onLastmileQuality} ，视网络情况约 2 秒内返回。该回调通过打分反馈上下行网络质量，
     * 更贴近用户的主观感受。
     * -  [onLastmileProbeResult]{@link AgoraRtcEvents.onLastmileProbeResult} ，视网络情况约 30 秒内返回。该回调通过具体数据反馈
     * 上下行网络质量，更加客观。
     * 
     * 该方法主要用于以下两种场景：
     * - 用户加入频道前，可以调用该方法判断和预测目前的上行网络质量是否足够好。
     * - 直播场景下，当用户角色想由观众切换为主播时，可以调用该方法判断和预测目前的上行网络质量是否足够好。
     * @note
     * - 该方法会消耗一定的网络流量，影响通话质量，因此我们建议不要和  [enableLastmileTest]{@link agora.enableLastmileTest}  同时使用。
     * - 调用该方法后，在收到  [onLastmileQuality]{@link AgoraRtcEvents.onLastmileQuality}  和  
     * [onLastmileProbeResult]{@link AgoraRtcEvents.onLastmileProbeResult}  回调之前请不要调用其他方法，否则可能会由于 API 操作
     * 过于频繁导致此方法无法执行。
     * - 在直播场景中，如果本地用户为主播，请勿加入频道后调用该方法。
     * 
     * @param config Last mile 网络探测配置，详见 [LastmileProbeConfig]{@link agora.LastmileProbeConfig}。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function startLastmileProbeTest(config: LastmileProbeConfig): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.START_LAST_MILE_PROBE_TEST, {config})
    }

    /** @en
     * Stops the last-mile network probe test.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 停止通话前网络质量探测。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function stopLastmileProbeTest(): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.STOP_LAST_MILE_PROBE_TEST)
    }

    /** @en
     * Retrieves the warning or error description.
     *
     * @param code Warning code or error code returned in the [onWarning]{@link AgoraRtcEvents.onWarning} or
     * [onError]{@link AgoraRtcEvents.onError} callback.
     *
     * @return See [WARN_CODE_TYPE]{@link agora.WARN_CODE_TYPE} or [ERROR_CODE_TYPE]{@link agora.ERROR_CODE_TYPE}.
     */
    /** @cn
     * 获取警告或错误描述。
     * @param code  [onWarning]{@link AgoraRtcEvents.onWarning}  或  [onError]{@link AgoraRtcEvents.onError}  提供的警告码或错误码。
     * 
     * @return [WARN_CODE_TYPE]{@link agora.WARN_CODE_TYPE} 或 [ERROR_CODE_TYPE]{@link agora.ERROR_CODE_TYPE}。
     */
    export function getErrorDescription(code: number): string {
        if (isWeb) {
            return null
        }
        return callNativeMethod(API_TYPE.GET_ERROR_DESCRIPTION, {code})
    }

    /** @en
     * Enables built-in encryption with an encryption password before users join a channel.
     *
     * @deprecated This method is deprecated from v3.1.2. Use the [enableEncryption]{@link agora.enableEncryption} instead.
     *
     * All users in a channel must use the same encryption password. The encryption password is automatically cleared
     * once a user leaves the channel.
     *
     * If an encryption password is not specified, the encryption functionality will be disabled.
     *
     * **Note**
     * - Do not use this method for CDN live streaming.
     * - For optimal transmission, ensure that the encrypted data size does not exceed the original data size + 16
     * bytes. 16 bytes is the maximum padding size for AES encryption.
     *
     * @param secret The encryption password.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 启用内置加密，并设置数据加密密码。
     * 
     * @deprecated 该方法自 v3.1.2 起废弃。请改用  [enableEncryption]{@link agora.enableEncryption}  方法。
     * 
     * 在加入频道之前，App 需调用 `setEncryptionSecret` 方法指定 `secret` 来启用内置的加密功能，同一频道内的所有用户应设置相同的 `secret`。
     * 当用户离开频道时，该频道的 `secret` 会自动清除。如果未指定 `secret` 或将 `secret` 设置为空，则无法激活加密功能。
     * 
     * @note
     * - 请不要在旁路推流时调用此方法。
     * - 为保证最佳传输效果，请确保加密后的数据大小不超过原始数据大小 + 16 字节。16 字节是 AES 通用加密模式下最大填充块大小。
     * @param secret 加密密码。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setEncryptionSecret(secret: string): number {
        if (isWeb) {
            client.setEncryptionSecret(secret)
            return ERROR_CODE_TYPE.ERR_OK
        }
        return callNativeMethod(API_TYPE.SET_ENCRYPTION_SECTRT, {secret})
    }

    /** @en
     * Sets the built-in encryption mode.
     *
     * @deprecated This method is deprecated from v3.1.2. Use the [enableEncryption]{@link agora.enableEncryption} instead.
     *
     * The Agora SDK supports built-in encryption, which is set to the `aes-128-xts` mode by default. Call this method
     * to use other encryption modes.
     * All users in the same channel must use the same encryption mode and password.
     *
     * Refer to the information related to the AES encryption algorithm on the differences between the encryption modes.
     *
     * @note Call the [setEncryptionSecret]{@link agora.setEncryptionSecret} method to enable the built-in encryption
     * function before calling this method.
     *
     * @param encryptionMode The set encryption mode:
     * - "aes-128-xts": (Default) 128-bit AES encryption, XTS mode.
     * - "aes-128-ecb": 128-bit AES encryption, ECB mode.
     * - "aes-256-xts": 256-bit AES encryption, XTS mode.
     * - "": When encryptionMode is set as `null`, the encryption mode is set as "aes-128-xts" by default.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 启用内置的加密方案。
     * @deprecated 该方法自 v3.1.2 起废弃。请改用 [enableEncryption]{@link agora.enableEncryption} 方法。
     * Agora Video SDK 支持内置加密方案，默认支持 AES-128-XTS。如需采用其他加密方案，可以调用本方法。同一频道内的所有用户必须设置相同的加密方式
     * 和 `secret` 才能进行通话。关于这几种加密方式的区别，请参考 AES 加密算法的相关资料。
     * @note 在调用本方法前，请先调用 [setEncryptionSecret]{@link agora.setEncryptionSecret} 启用内置加密功能。
     * @param encryptionMode 加密模式：
     * - "aes-128-xts": 128 位 AES 加密，XTS 模式；
     * - "aes-128-ecb":128 位 AES 加密，ECB 模式；
     * - "aes-256-xts": 256 位 AES 加密，XTS 模式；
     * - "": 设置为空字符串时，默认使用加密方式 "aes-128-xts"。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
	 */
    export function setEncryptionMode(encryptionMode: 'aes-128-xts' | 'aes-128-ecb' | 'aes-256-xts'): number {
        if (isWeb) {
            client.setEncryptionMode(encryptionMode)
            return ERROR_CODE_TYPE.ERR_OK
        }
        return callNativeMethod(API_TYPE.SET_ENCRYPTION_MODE, {encryptionMode})
    }

    /** @en
     * Enables/Disables the built-in encryption.
     *
     * In scenarios requiring high security, Agora recommends calling this method to enable the built-in encryption
     * before joining a channel.
     *
     * All users in the same channel must use the same encryption mode and encryption key. Once all users leave the
     * channel, the encryption key of this channel is automatically cleared.
     *
     * **Note**
     * - If you enable the built-in encryption, you cannot use the RTMP streaming function.
     * - Agora supports four encryption modes. If you choose an encryption mode (excepting `SM4_128_ECB` mode), you
     * need to add an external encryption library when integrating the Android or iOS SDK.
     *
     * @param enabled Whether to enable the built-in encryption:
     * - true: Enable the built-in encryption.
     * - false: Disable the built-in encryption.
     * @param config Configurations of built-in encryption schemas. See [EncryptionConfig]{@link agora.EncryptionConfig}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     *  - -2(ERR_INVALID_ARGUMENT): An invalid parameter is used. Set the parameter with a valid value.
     *  - -4(ERR_NOT_SUPPORTED): The encryption mode is incorrect or the SDK fails to load the external encryption
     * library. Check the enumeration or reload the external encryption library.
     *  - -7(ERR_NOT_INITIALIZED): The SDK is not initialized. Initialize the Agora engine before calling this method.
     */
    /** @cn
     * 开启或关闭内置加密。
     *
     * 在安全要求较高的场景下，Agora 建议你在加入频道前，调用 `enableEncryption` 方法开启内置加密。
     *
     * 同一频道内所有用户必须使用相同的加密模式和密钥。一旦所有用户都离开频道，该频道的加密密钥会自动清除。
     *
     * @note
     * - 如果开启了内置加密，则不能使用 RTMP 推流功能。
     * - Agora 支持 4 种加密模式。除 `SM4_128_ECB` 模式外，其他加密模式都需要在集成 SDK 时，额外添加加密库文件。详见《媒体流加密》。
     *
     * @param enabled 是否开启内置加密：
     * - true: 开启
     * - false: 关闭
     * @param config 配置内置加密模式和密钥。详见 [EncryptionConfig]{@link agora.EncryptionConfig}。
     *
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     *  - -2(ERR_INVALID_ARGUMENT): 调用了无效的参数。需重新指定参数。
     *  - -4(ERR_NOT_SUPPORTED): 设置的加密模式不正确或加载外部加密库失败。需检查枚举值是否正确或重新加载外部加密库。
     *  - -7(ERR_NOT_INITIALIZED): SDK 尚未初始化。需在调用 API 之前已初始化 Agora 引擎。
     */
    export function enableEncryption(enabled: boolean, config: EncryptionConfig): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.ENABLE_ENCRYPTION, {enabled, config})
    }

    /** @en
     * Registers a packet observer.
     *
     * The Agora SDK allows your application to register a packet observer to receive callbacks for voice or video packet transmission.
     *
     * **Note**
     * - The size of the packet sent to the network after processing should not exceed 1200 bytes, otherwise, the packet may fail to
     * be sent.
     * - Ensure that both receivers and senders call this method, otherwise, you may meet undefined behaviors such as no voice and
     * black screen.
     * - When you use CDN live streaming, recording or storage functions, Agora doesn't recommend calling this method.
     *
     * @param observer The registered packet observer.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 注册数据包观测器。
     * 该方法注册数据包观测器 (Packet Observer)。在 Agora SDK 发送/接收（语音、视频）网络包时，会回调你定义的接口，App 可用此接口对数据做处理，例如加解密。
     * @note
     * - 处理后发送到网络的包大小不应超过 1200 字节，否则有可能发送失败。
     * - 若需调用此方法，需确保接收端和发送端都调用此方法，否则会出现未定义行为（例如音频无声或视频黑屏）。
     * - 若在直播场景下使用 CDN 推流、录制或储存，Agora 不建议调用此方法。
     * @param observer IPacketObserver 。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function registerPacketObserver(observer: any): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.REGISTER_PACKET_OBSERVER, {observer})
    }

    /** @en
     * Creates a data stream.
     *
     * Each user can create up to five data streams during the lifecycle of the Agora engine.
     *
     * @note Set both the `reliable` and `ordered` parameters to `true` or `false`. Do not set one as `true` and the other as `false`.
     *
     * @param streamId The ID of the created data stream.
     * @param reliable Sets whether or not the recipients are guaranteed to receive the data stream from the sender within five seconds:
     * - true: The recipients receive the data stream from the sender within five seconds. If the recipient does not receive the
     * data stream within five seconds, an error is reported to the application.
     * - false: There is no guarantee that the recipients receive the data stream within five seconds and no error message is
     * reported for any delay or missing data stream.
     * @param ordered Sets whether or not the recipients receive the data stream in the sent order:
     * - true: The recipients receive the data stream in the sent order.
     * - false: The recipients do not receive the data stream in the sent order.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 创建数据流。
     * 该方法用于创建数据流。agora 生命周期内，每个用户最多只能创建 5 个数据流。频道内数据通道最多允许数据延迟 5 秒，若超过 5 秒接收方尚未收到数据流，
     * 则数据通道会向 App 报错。
     * @note 将 `reliable` 和 `ordered` 同时设为 `true` 或 `false`。不要一个设为 `true` 另一个设为 `false`。
     * @param streamId 数据流 ID。
     * @param reliable
     * - true: 接收方 5 秒内会收到发送方所发送的数据，否则会收到  [onStreamMessageError]{@link AgoraRtcEvents.onStreamMessageError} 
     * 回调获得相应报错信息。
     * - false: 接收方不保证收到，就算数据丢失也不会报错。
     * @param ordered
     * - true: 接收方 5 秒内会按照发送方发送的顺序收到数据包；
     * - false: 接收方不保证按照发送方发送的顺序收到数据包。
     * @return
     * - 0: 创建数据流成功。
     * - < 0: 创建数据流失败。
     */
    export function createDataStream(streamId: number, reliable: boolean, ordered: boolean): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.CREATE_DATA_STREAM, {streamId, reliable, ordered})
    }

    /** @en
     * Sends data stream messages to all users in a channel.
     *
     * The SDK has the following restrictions on this method:
     * - Up to 30 packets can be sent per second in a channel with each packet having a maximum size of 1 kB.
     * - Each client can send up to 6 kB of data per second.
     * - Each user can have up to five data streams simultaneously.
     *
     * A successful `sendStreamMessage` method call triggers the [onStreamMessage]{@link AgoraRtcEvents.onStreamMessage}
     * callback on the remote client, from which the remote user gets the stream message. A failed `sendStreamMessage`
     * method call triggers the [onStreamMessageError]{@link AgoraRtcEvents.onStreamMessageError} callback on the remote client.
     *
     * @note This method applies only to the `COMMUNICATION` profile or to the hosts in the `LIVE_BROADCASTING` profile.
     * If an audience in the `LIVE_BROADCASTING` profile calls this method, the audience may be switched to a host.
     *
     * @param streamId ID of the sent data stream, returned in the [createDataStream]{@link agora.createDataStream} method.
     * @param data The sent data.
     * @param length Length of the sent data.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 发送数据流。
     * 
     * 该方法发送数据流消息到频道内所有用户。SDK 对该方法的实现进行了如下限制：频道内每秒最多能发送 30 个包，且每个包最大为 1 KB。 API 须
     * 对数据通道的传送速率进行控制: 每个客户端每秒最多能发送 6 KB 数据。频道内每人最多能同时有 5 个数据通道。
     * 
     * 成功调用该方法后，远端会触发  [onStreamMessage]{@link AgoraRtcEvents.onStreamMessage}  回调，远端用户可以在该回调中获取接收
     * 到的流消息；若调用失败，远端会触发  [onStreamMessageError]{@link AgoraRtcEvents.onStreamMessageError}  回调。
     * 
     * @note
     * - 请确保在调用该方法前，已调用  [createDataStream]{@link agora.createDataStream}  创建了数据流。
     * - 该方法仅适用于通信场景以及直播场景下的主播用户，如果直播场景下的观众调用此方法可能会造成观众变主播。
     * @param  streamId  由  [createDataStream]{@link agora.createDataStream}  返回的数据流 ID。
     * @param data 自定义数据。
     * @param length 数据长度。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function sendStreamMessage(streamId: number, data: Uint8Array, length: number): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.SEND_STREAM_MESSAGE, {streamId, length}, data)
    }

    /** @en
     * Publishes the local stream to a specified CDN live RTMP address. (CDN live only.)
     *
     * The SDK returns the result of this method call in the [onStreamPublished]{@link AgoraRtcEvents.onStreamPublished} callback.
     *
     * The `addPublishStreamUrl` method call triggers the [onRtmpStreamingStateChanged]{@link AgoraRtcEvents.onRtmpStreamingStateChanged}
     * callback on the local client to report the state of adding a local stream to the CDN.
     *
     * **Note**
     * - Ensure that the user joins the channel before calling this method.
     * - Ensure that you enable the RTMP Converter service before using this function.
     * - This method adds only one stream RTMP URL address each time it is called.
     * - This method applies to `LIVE_BROADCASTING` only.
     *
     * @param url The CDN streaming URL in the RTMP format. The maximum length of this parameter is 1024 bytes. The RTMP URL address
     * must not contain special characters, such as Chinese language characters.
     * @param transcodingEnabled Sets whether transcoding is enabled/disabled:
     * - true: Enable transcoding. To [transcode](https://docs.agora.io/en/Agora%20Platform/terms?platform=All%20Platforms#transcoding)
     * the audio or video streams when publishing them to CDN live, often used for combining the audio and video streams of multiple
     * hosts in CDN live. If you set this parameter as `true`, ensure that you call the
     * [setLiveTranscoding]{@link agora.setLiveTranscoding} method before this method.
     * - false: Disable transcoding.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     *   - -2(ERR_INVALID_ARGUMENT): The RTMP URL address is `null` or has a string length of 0.
     *   - -7(ERR_NOT_INITIALIZED): You have not initialized the Agora engine when publishing the stream.
     */
    /** @cn
     * 增加旁路推流地址。
     * 
     * 调用该方法后，SDK会在本地触发  [onRtmpStreamingStateChanged]{@link AgoraRtcEvents.onRtmpStreamingStateChanged}  回调，
     * 报告增加旁路推流地址的状态。
     * @note
     * - 请确保在成功加入频道后才能调用该接口。
     * - 请确保已开通旁路推流的功能。
     * - 该方法每次只能增加一路旁路推流地址。若需推送多路流，则需多次调用该方法。
     * - 在直播场景中，只有角色为主播的用户才能调用该方法。
     * @param url CDN 推流地址，格式为 RTMP。该字符长度不能超过 1024 字节。url 不支持中文字符等特殊字符。
     * @param  transcodingEnabled
     * - true: 转码（ [转码]( https://docs.agora.io/cn/Agora%20Platform/terms?platform=All%20Platforms#转码) 是指在旁路推流
     * 时对音视频流进行转码处理后再推送到其他 RTMP 服务器。多适用于频道内有多个主播，需要进行混流、合图的场景）。如果设为 `true`，
     * 需先调用  [setLiveTranscoding]{@link agora.setLiveTranscoding}  方法。
     * - false: 不转码。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     *      - [ERR_INVALID_ARGUMENT]{@link agora.ERR_INVALID_ARGUMENT} (2): URL 为空或是长度为 0 的的字符串
     *      - [ERR_NOT_INITIALIZED]{@link agora.ERR_NOT_INITIALIZED} (7): 推流时未初始化引擎
     */
    export function addPublishStreamUrl(url: string, transcodingEnabled: boolean): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.ADD_PUBLISH_STREAM_URL, {url, transcodingEnabled})
    }

    /** @en
     * Removes an RTMP stream from the CDN. (CDN live only.)
     *
     * This method removes the RTMP URL address (added by the [addPublishStreamUrl]{@link agora.addPublishStreamUrl}
     * method) from a CDN live stream. The SDK returns the result of this method call in the
     * [onStreamUnpublished]{@link AgoraRtcEvents.onStreamUnpublished} callback.
     *
     * The `removePublishStreamUrl` method call triggers the
     * [onRtmpStreamingStateChanged]{@link AgoraRtcEvents.onRtmpStreamingStateChanged} callback on the local client to report the
     * state of removing an RTMP stream from the CDN.
     *
     * **Note**
     * - This method removes only one RTMP URL address each time it is called.
     * - The RTMP URL address must not contain special characters, such as Chinese language characters.
     * - This method applies to `LIVE_BROADCASTING` only.
     *
     * @param url The RTMP URL address to be removed. The maximum length of this parameter is 1024 bytes.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 删除旁路推流地址。
     * 调用该方法后，SDK 会在本地触发  [onRtmpStreamingStateChanged]{@link AgoraRtcEvents.onRtmpStreamingStateChanged}  回调，
     * 报告删除旁路推流地址的状态。
     * @note
     * - 该方法每次只能删除一路旁路推流地址。若需删除多路流，则需多次调用该方法。
     * - URL 不支持中文等特殊字符。
     * - 在直播场景中，只有角色为主播的用户才能调用该方法。
     * @param url 待删除的旁路推流地址，格式为 RTMP。该字符长度不能超过 1024 字节。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function removePublishStreamUrl(url: string): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.REMOVE_PUBLISH_STREAM_URL, {url})
    }

    /** @en
     * Sets the video layout and audio settings for CDN live. (CDN live only.)
     *
     * The SDK triggers the [onTranscodingUpdated]{@link AgoraRtcEvents.onTranscodingUpdated} callback when you call the
     * `setLiveTranscoding` method to update the transcoding setting.
     *
     * **Note**
     * - This method applies to `LIVE_BROADCASTING` only.
     * - Ensure that you enable the RTMP Converter service before using this function.
     * - If you call the `setLiveTranscoding` method to update the transcoding setting for the first time, the SDK does
     * not trigger the `onTranscodingUpdated` callback.
     *
     * @param transcoding Sets the CDN live audio/video transcoding settings. See [LiveTranscoding]{@link agora.LiveTranscoding}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 设置直播推流转码。
     * 该方法用于旁路推流的视图布局及音频设置等。调用该方法更新转码设置后本地会触发 
     * [onTranscodingUpdated]{@link AgoraRtcEvents.onTranscodingUpdated} 回调。
     * 
     * @note
     * - 在直播场景中，只有角色为主播的用户才能调用该方法。
     * - 请确保已开通旁路推流的功能。
     * - 首次调用该方法更新转码设置时，不会触发 `onTranscodingUpdated` 回调。
     * @param transcoding 详见 [LiveTranscoding]{@link agora.LiveTranscoding}。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setLiveTranscoding(transcoding: LiveTranscoding): number {
        if (isWeb) {
            const coding: AgoraRTC.LiveTranscoding = {
                audioBitrate: transcoding.audioBitrate,
                audioChannels: transcoding.audioChannels,
                audioSampleRate: transcoding.audioSampleRate,
                backgroundColor: transcoding.backgroundColor,
                height: transcoding.height,
                images: [transcoding.watermark],
                lowLatency: transcoding.lowLatency,
                transcodingUsers: transcoding.transcodingUsers,
                userCount: transcoding.userCount,
                videoBitrate: transcoding.videoBitrate,
                videoCodecProfile: transcoding.videoCodecProfile,
                videoFramerate: transcoding.videoFramerate,
                videoGop: transcoding.videoGop,
                width: transcoding.width,
            }
            client.setLiveTranscoding(coding)
            return ERROR_CODE_TYPE.ERR_OK
        }
        return callNativeMethod(API_TYPE.SET_LIVE_TRANSCODING, {transcoding})
    }

    /** @en
     * @ignore
     * Adds a watermark image to the local video.
     *
     * This method adds a PNG watermark image to the local video in the live streaming. Once the watermark image is added, all
     * the audience in the channel (CDN audience included), and the recording device can see and capture it. Agora supports
     * adding only one watermark image onto the local video, and the newly watermark image replaces the previous one.
     *
     * The watermark position depends on the settings in the [setVideoEncoderConfiguration]{@link agora.setVideoEncoderConfiguration}
     * method:
     * - If the orientation mode of the encoding video is
     * [ORIENTATION_MODE_FIXED_LANDSCAPE]{@link agora.ORIENTATION_MODE.ORIENTATION_MODE_FIXED_LANDSCAPE} or the landscape mode in
     * [ORIENTATION_MODE_ADAPTIVE]{@link agora.ORIENTATION_MODE.ORIENTATION_MODE_ADAPTIVE}, the watermark uses the landscape orientation.
     * - If the orientation mode of the encoding video is
     * [ORIENTATION_MODE_FIXED_PORTRAIT]{@link agora.ORIENTATION_MODE.ORIENTATION_MODE_FIXED_PORTRAIT} or the portrait mode in
     * [ORIENTATION_MODE_ADAPTIVE]{@link agora.ORIENTATION_MODE.ORIENTATION_MODE_ADAPTIVE}, the watermark uses the portrait orientation.
     * - When setting the watermark position, the region must be less than the dimensions set in the `setVideoEncoderConfiguration`
     * method. Otherwise, the watermark image will be cropped.
     *
     * **Note**
     * - Ensure that you have called the [enableVideo]{@link agora.enableVideo} method to enable the video module before calling this
     * method.
     * - If you only want to add a watermark image to the local video for the audience in the CDN live streaming channel to see and
     * capture, you can call this method or the [setLiveTranscoding]{@link agora.setLiveTranscoding} method.
     * - This method supports adding a watermark image in the PNG file format only. Supported pixel formats of the PNG image are RGBA,
     * RGB, Palette, Gray, and Alpha_gray.
     * - If the dimensions of the PNG image differ from your settings in this method, the image will be cropped or zoomed to conform
     * to your settings.
     * - If you have enabled the local video preview by calling the [startPreview]{@link agora.startPreview} method, you can use the
     * `visibleInPreview` member in the `WatermarkOptions` class to set whether or not the watermark is visible in preview.
     * - If you have enabled the mirror mode for the local video, the watermark on the local video is also mirrored. To avoid mirroring
     * the watermark, Agora recommends that you do not use the mirror and watermark functions for the local video at the same time.
     * You can implement the watermark function in your application layer.
     *
     * @param watermarkUrl The local file path of the watermark image to be added. This method supports adding a watermark image
     * from the local absolute or relative file path.
     * @param options The watermark's options to be added. See [WatermarkOptions]{@link agora.WatermarkOptions}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 添加本地视频水印。
     * 
     * 该方法将一张 PNG 图片作为水印添加到本地发布的直播视频流上，同一直播频道中的观众、旁路直播观众和录制设备都能看到或采集到该水印图片。
     * Agora 当前只支持在直播视频流中添加一个水印，后添加的水印会替换掉之前添加的水印。
     * 
     * 水印坐标和  [setVideoEncoderConfiguration]{@link agora.setVideoEncoderConfiguration}  方法中的设置有依赖关系：
     * - 如果视频编码方向/ [ORIENTATION_MODE]{@link agora.ORIENTATION_MODE} 固定为横屏或自适应模式下的横屏，那么水印使用横屏坐标。
     * - 如果视频编码方向/ `ORIENTATION_MODE` 固定为竖屏或自适应模式下的竖屏，那么水印使用竖屏坐标。
     * - 设置水印坐标时，水印的图像区域不能超出 `setVideoEncoderConfiguration` 方法中设置的视频尺寸，否则超出部分将被裁剪。
     * 
     * @note
     * - 你需要在调用  [enableVideo]{@link agora.enableVideo}  方法之后再调用本方法。
     * - 如果你只是在旁路直播（推流到CDN）中添加水印，你可以使用本方法或  [setLiveTranscoding]{@link agora.setLiveTranscoding}  方法设置水印。
     * - 待添加水印图片必须是 PNG 格式。本方法支持所有像素格式的 PNG 图片：RGBA、RGB、Palette、Gray 和 Alpha_gray。
     * - 如果待添加的 PNG 图片的尺寸与你在本方法中设置的尺寸不一致，SDK 会对 PNG 图片进行缩放或裁剪，以与设置相符。
     * - 如果你已经使用  [startPreview]{@link agora.startPreview}  方法开启本地视频预览，那么本方法的 `visibleInPreview` 可设置水印在预览时是否可见。     - 如果你已设置本地视频为镜像模式，那么此处的本地水印也为镜像。为避免本地用户看本地视频时的水印也被镜像，Agora 建议你不要对本地视频同时使用镜像和水印功能，请在应用层实现本地水印功能。
     * @param watermarkUrl 待添加的水印图片的本地路径。本方法支持从本地绝对/相对路径添加水印图片。
     * @param options 待添加的水印图片的设置选项，详见 [WatermarkOptions]{@link agora.WatermarkOptions} 。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function addVideoWatermark(watermarkUrl: string, options: WatermarkOptions): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.ADD_VIDEO_WATER_MARK_2, {watermarkUrl, options})
    }

    /** @en
     * @ignore
     * Removes the watermark image from the video stream added by the
     * [addVideoWatermark]{@link agora.addVideoWatermark} method.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 删除已添加的视频水印。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function clearVideoWatermarks(): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.CLEAR_VIDEO_WATER_MARKS)
    }

    /** @en
     * @ignore
     * Enables/Disables image enhancement and sets the options.
     *
     * **Note**
     * - Call this method after calling the [enableVideo]{@link agora.enableVideo} method.
     * - Currently this method does not apply for macOS.
     *
     * @param enabled Sets whether or not to enable image enhancement:
     * - true: enables image enhancement.
     * - false: disables image enhancement.
     * @param options Sets the image enhancement option. See BeautyOptions.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 设置美颜效果选项。
     * 开启本地美颜功能，并设置美颜效果选项。
     * @note
     * - 请在调用  [enableVideo]{@link agora.enableVideo}  方法后，调用该方法。
     * - 该方法目前不适用于 macOS 平台。
     * @param enabled 是否开启美颜功能：
     * - true: 开启。
     * - false: （默认）关闭。
     * @param options 美颜选项。详见: BeautyOptions 。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setBeautyEffectOptions(enabled: boolean, options: BeautyOptions): number {
        if (isWeb) {
            if (localStream === undefined) {
                return ERROR_CODE_TYPE.ERR_NOT_INITIALIZED
            } else {
                localStream.setBeautyEffectOptions(enabled, options)
                return ERROR_CODE_TYPE.ERR_OK
            }
        }
        return callNativeMethod(API_TYPE.SET_BEAUTY_EFFECT_OPTIONS, {enabled, options})
    }

    /** @en
     * Adds a voice or video stream URL address to the live streaming.
     *
     * The [onStreamPublished]{@link AgoraRtcEvents.onStreamPublished} callback returns the inject status. If this method
     * call is successful, the server pulls the voice or video stream and injects it into a live channel. This is
     * applicable to scenarios where all audience members in the channel can watch a live show and interact with each other.
     *
     * The `addInjectStreamUrl` method call triggers the following callbacks:
     * - The local client:
     *   - [onStreamInjectedStatus]{@link AgoraRtcEvents.onStreamInjectedStatus}, with the state of the injecting the online stream.
     *   - [onUserJoined]{@link AgoraRtcEvents.onUserJoined}(uid: 666), if the method call is successful and the online media stream
     * is injected into the channel.
     * - The remote client: [onUserJoined]{@link AgoraRtcEvents.onUserJoined}(uid: 666), if the method call is successful and the
     * online media stream is injected into the channel.
     *
     * **Note**
     * - Ensure that you enable the RTMP Converter service before using this function.
     * - This method applies to the SDK of v3.1.2 and later.
     * - This method applies to the `LIVE_BROADCASTING` profile only.
     * - You can inject only one media stream into the channel at the same time.
     *
     * @param url The URL address to be added to the ongoing streaming. Valid protocols are RTMP, HLS, and HTTP-FLV.
     * - Supported audio codec type: AAC.
     * - Supported video codec type: H264 (AVC).
     * @param config [InjectStreamConfig]{@link agora.InjectStreamConfig} contains the configuration of
     * the added voice or video stream.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     *   - -2(`ERR_INVALID_ARGUMENT`): The injected URL does not exist. Call this method again to inject the stream and
     * ensure that the URL is valid.
     *   - -3(`ERR_NOT_READY`): The user is not in the channel.
     *   - -4(`ERR_NOT_SUPPORTED`): The channel profile is not `LIVE_BROADCASTING`. Call the
     * [setChannelProfile]{@link agora.setChannelProfile} method and set the channel profile to `LIVE_BROADCASTING`
     * before calling this method.
     *   - -7(ERR_NOT_INITIALIZED): The SDK is not initialized. Ensure that the Agora engine is initialized before
     * calling this method.
     */
    /** @cn
     * 输入在线媒体流。
     * @note
     * - 请确保已开通旁路推流的功能。
     * - 该方法适用于 SDK v3.1.2 及之后的版本。
     * - 在直播场景中，只有角色为主播的用户才能调用该方法。
     * - 频道内同一时间只允许输入一个在线媒体流。
     * 
     * 该方法将正在播放的音视频作为音视频源导入到正在进行的直播中。可主要应用于赛事直播、多人看视频互动等直播场景。调用该方法后，SDK 会在本地触发  
     * [onStreamInjectedStatus]{@link AgoraRtcEvents.onStreamInjectedStatus}  回调，报告输入在线媒体流的状态；成功输入媒体流后，
     * 该音视频流会出现在频道中，频道内所有用户都会收到  [onUserJoined]{@link AgoraRtcEvents.onUserJoined}  回调，其中 `uid` 为 `666`。
     * 该音视频流会出现在频道中。
     * 
     * @param url 添加到直播中的视频流 URL 地址。支持 RTMP、HLS、HTTP-FLV 协议传输。
     * - 支持的音频编码格式：AAC；
     * - 支持的视频编码格式：H.264(AVC)。
     * @param config   所添加的视频流属性定义，详见: [InjectStreamConfig]{@link agora.InjectStreamConfig}。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     *    - [ERR_INVALID_ARGUMENT]{@link agora.ERR_INVALID_ARGUMENT} (2): 输入的 URL 为空。请重新调用该方法，并确认输入的媒体流的 URL 有效。
     *    - [ERR_NOT_READY]{@link agora.ERR_NOT_READY} (3): 用户没有加入频道。
     *    - [ERR_NOT_SUPPORTED]{@link agora.ERR_NOT_SUPPORTED} (4): 频道非直播场景。请调用  
     * [setChannelProfile]{@link agora.setChannelProfile}  并将频道设置为直播场景再调用该方法。
     *    - [ERR_NOT_INITIALIZED]{@link agora.ERR_NOT_INITIALIZED} (7): 引擎没有初始化。请确认调用该方法前已初始化 Agora 引擎。
     */
    export function addInjectStreamUrl(url: string, config: InjectStreamConfig): number {
        if (isWeb) {
            client.addInjectStreamUrl(url, config)
            return ERROR_CODE_TYPE.ERR_OK
        }
        return callNativeMethod(API_TYPE.ADD_INJECT_STREAM_URL, {url, config})
    }

    /** @en
     * Starts to relay media streams across channels.
     *
     * After a successful method call, the SDK triggers the
     * [onChannelMediaRelayStateChanged]{@link AgoraRtcEvents.onChannelMediaRelayStateChanged} and
     * [onChannelMediaRelayEvent]{@link AgoraRtcEvents.onChannelMediaRelayEvent} callbacks, and these callbacks return the
     * state and events of the media stream relay.
     * - If the `onChannelMediaRelayStateChanged` callback returns
     * [RELAY_STATE_RUNNING]{@link agora.CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_RUNNING}(2) and
     * [RELAY_OK]{@link agora.CHANNEL_MEDIA_RELAY_ERROR.RELAY_OK}(0), and the `onChannelMediaRelayEvent` callback returns
     * [RELAY_EVENT_PACKET_SENT_TO_DEST_CHANNEL]{@link agora.CHANNEL_MEDIA_RELAY_EVENT.RELAY_EVENT_PACKET_SENT_TO_DEST_CHANNEL}(4),
     * the host starts sending data to the destination channel.
     * - If the `onChannelMediaRelayStateChanged` callback returns
     * [RELAY_STATE_FAILURE]{@link agora.CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_FAILURE}(3), an exception occurs during
     * the media stream relay.
     *
     * **Note**
     * - Call this method after the [joinChannel]{@link agora.joinChannel()} method.
     * - This method takes effect only when you are a host in a `LIVE_BROADCASTING` channel.
     * - After a successful method call, if you want to call this method again, ensure that you call the
     * [stopChannelMediaRelay]{@link agora.stopChannelMediaRelay()} method to quit the current relay.
     * - Contact sales-us@agora.io before implementing this function.
     * - We do not support string user accounts in this API.
     *
     * @param configuration The configuration of the media stream relay:
     * [ChannelMediaRelayConfiguration]{@link agora.ChannelMediaRelayConfiguration}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 开始跨频道媒体流转发。该方法可用于实现跨频道连麦等场景。
     *
     * 成功调用该方法后，SDK 会触发
     *  [onChannelMediaRelayStateChanged]{@link AgoraRtcEvents.onChannelMediaRelayStateChanged}  和 
     * [onChannelMediaRelayEvent]{@link AgoraRtcEvents.onChannelMediaRelayEvent}  回调，并在回调中报告当前的跨频道媒体流转发状态和事件。
     * - 如果 [onChannelMediaRelayStateChanged]{@link AgoraRtcEvents.onChannelMediaRelayStateChanged}  回调报告 
     * [RELAY_STATE_RUNNING]{@link agora.CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_RUNNING} (2) 和 
     * [RELAY_OK]{@link agora.CHANNEL_MEDIA_RELAY_STATE.RELAY_OK} (0)，且 
     * [onChannelMediaRelayEvent]{@link AgoraRtcEvents.onChannelMediaRelayEvent}  回调报告 
     * [RELAY_EVENT_PACKET_SENT_TO_DEST_CHANNEL]{@link agora.CHANNEL_MEDIA_RELAY_STATE.RELAY_EVENT_PACKET_SENT_TO_DEST_CHANNEL} (4)，
     * 则表示 SDK 开始在源频道和目标频道之间转发媒体流。
     * - 如果
     *  `onChannelMediaRelayStateChanged`  回调报告 [RELAY_STATE_FAILURE]{@link agora.CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_FAILURE} (3)，
     * 则表示跨频道媒体流转发出现异常。
     *
     * @note
     * - 请在成功加入频道后调用该方法。
     * - 在直播场景中，只有角色为主播的用户才能调用该方法。
     * - 成功调用该方法后，若你想再次调用该方法，必须先调用 [stopChannelMediaRelay]{@link agora.stopChannelMediaRelay} 方法退出当前的转发状态。
     * - 跨频道媒体流转发功能需要[提交工单](https://agora-ticket.agora.io/)联系技术支持开通。
     * - 该功能不支持 String 型 UID。
     *
     * @param configuration 跨频道媒体流转发参数配置。详见
     * [ChannelMediaRelayConfiguration]{@link agora.ChannelMediaRelayConfiguration}。
     *
     * @return
     * - 0：方法调用成功。
     * - < 0：方法调用失败
     */
    export function startChannelMediaRelay(configuration: ChannelMediaRelayConfiguration): number {
        if (isWeb) {
            // @ts-ignore
            const config = new AgoraRTC.ChannelMediaRelayConfiguration()
            config.setSrcChannelInfo(configuration.srcInfo)
            configuration.destInfos.map((value) => {
                config.setDestChannelInfo(value.channelName, value)
            })
            client.startChannelMediaRelay(config, () => {
            })
            return ERROR_CODE_TYPE.ERR_OK
        }
        return callNativeMethod(API_TYPE.START_CHANNEL_MEDIA_RELAY, {configuration})
    }

    /** @en
     * Updates the channels for media stream relay.
     *
     * After a successful [startChannelMediaRelay]{@link agora.startChannelMediaRelay} method call, if you want to
     * relay the media  stream to more channels, or leave the current relay channel, you can call the
     * [updateChannelMediaRelay]{@link agora.updateChannelMediaRelay} method.
     *
     * After a successful method call, the SDK triggers the
     * [onChannelMediaRelayEvent]{@link AgoraRtcEvents.onChannelMediaRelayEvent} callback with the
     * [RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL]{@link agora.CHANNEL_MEDIA_RELAY_EVENT.RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL}(7)
     * state code.
     *
     * @note
     * Call this method after the `startChannelMediaRelay` method to update the destination channel.
     *
     * @param configuration The media stream relay configuration:
     * [ChannelMediaRelayConfiguration]{@link agora.ChannelMediaRelayConfiguration}.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 更新媒体流转发的频道。成功开始跨频道转发媒体流后，如果你希望将流转发到多个目标频道，
     * 或退出当前的转发频道，可以调用该方法。
     *
     * 成功调用该方法后，SDK 会触发
     *  [onChannelMediaRelayEvent]{@link AgoraRtcEvents.onChannelMediaRelayEvent}  回调，并在回调中报告状态码 
     * [RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL]{@link agora.CHANNEL_MEDIA_RELAY_EVENT.RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL} (7)。
     *
     * @note
     * 请在  [startChannelMediaRelay]{@link agora.startChannelMediaRelay} 方法后调用该方法，更新媒体流转发的频道。
     *
     * @param configuration 跨频道媒体流转发参数配置。详见
     * [ChannelMediaRelayConfiguration]{@link agora.ChannelMediaRelayConfiguration}。
     *
     * @return
     * - 0：方法调用成功。
     * - < 0：方法调用失败
     */
    export function updateChannelMediaRelay(configuration: ChannelMediaRelayConfiguration): number {
        if (isWeb) {
            // @ts-ignore
            const config = new AgoraRTC.ChannelMediaRelayConfiguration()
            config.setSrcChannelInfo(configuration.srcInfo)
            configuration.destInfos.map((value) => {
                config.setDestChannelInfo(value.channelName, value)
            })
            client.updateChannelMediaRelay(config, () => {
            })
            return ERROR_CODE_TYPE.ERR_OK
        }
        return callNativeMethod(API_TYPE.UPDATE_CHANNEL_MEDIA_RELAY, {configuration})
    }

    /** @en
     * Stops the media stream relay.
     *
     * Once the relay stops, the host quits all the destination channels.
     *
     * After a successful method call, the SDK triggers the
     * [onChannelMediaRelayStateChanged]{@link AgoraRtcEvents.onChannelMediaRelayStateChanged} callback. If the callback returns
     * [RELAY_STATE_IDLE]{@link agora.CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_IDLE}(0) and
     * [RELAY_OK]{@link agora.CHANNEL_MEDIA_RELAY_ERROR.RELAY_OK}(0), the host successfully stops the relay.
     *
     * @note
     * If the method call fails, the SDK triggers the `onChannelMediaRelayStateChanged` callback with the
     * [RELAY_ERROR_SERVER_NO_RESPONSE]{@link agora.CHANNEL_MEDIA_RELAY_ERROR.RELAY_ERROR_SERVER_NO_RESPONSE}(2) or
     * [RELAY_ERROR_SERVER_CONNECTION_LOST]{@link agora.CHANNEL_MEDIA_RELAY_ERROR.RELAY_ERROR_SERVER_CONNECTION_LOST}(8) state code.
     * You can leave the channel by calling the [leaveChannel]{@link agora.leaveChannel} method, and the media stream relay
     * automatically stops.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 停止跨频道媒体流转发。一旦停止，主播会退出所有目标频道。
     *
     * 成功调用该方法后，SDK 会触发
     *  [onChannelMediaRelayStateChanged]{@link AgoraRtcEvents.onChannelMediaRelayStateChanged}  回调。如果报告 
     * [RELAY_STATE_IDLE]{@link agora.CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_IDLE} (0) 和 
     * [RELAY_OK]{@link agora.CHANNEL_MEDIA_RELAY_STATE.RELAY_OK} (0)，则表示已停止转发媒体流。
     *
     * @note
     * 如果该方法调用不成功，SDK 会触发
     *  [onChannelMediaRelayStateChanged]{@link AgoraRtcEvents.onChannelMediaRelayStateChanged}  回调，并报告状态码 
     * [RELAY_ERROR_SERVER_NO_RESPONSE]{@link agora.CHANNEL_MEDIA_RELAY_ERROR.RELAY_ERROR_SERVER_NO_RESPONSE} (2) 或
     * [RELAY_ERROR_SERVER_CONNECTION_LOST]{@link agora.CHANNEL_MEDIA_RELAY_ERROR.RELAY_ERROR_SERVER_CONNECTION_LOST} (8)。你可以调用
     *  [leaveChannel]{@link agora.leaveChannel()}  方法离开频道，跨频道媒体流转发会自动停止。
     * @return
     * - 0：方法调用成功。
     * - < 0：方法调用失败
     */
    export function stopChannelMediaRelay(): number {
        if (isWeb) {
            client.stopChannelMediaRelay(() => {
            })
            return ERROR_CODE_TYPE.ERR_OK
        }
        return callNativeMethod(API_TYPE.STOP_CHANNEL_MEDIA_RELAY)
    }

    /** @en
     * Removes the voice or video stream URL address from the live streaming.
     *
     * This method removes the URL address (added by the [addInjectStreamUrl]{@link agora.addInjectStreamUrl} method) from the
     * live streaming.
     *
     * @note If this method is called successfully, the SDK triggers the [onUserOffline]{@link AgoraRtcEvents.onUserOffline} callback
     * and returns a stream `uid` of `666`.
     *
     * @param url The URL address of the injected stream to be removed.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 删除导入的外部媒体流。
     * @note 成功删除外部视频源 URL 地址后会触发  [onUserOffline]{@link AgoraRtcEvents.onUserOffline}  回调，`uid` 为 `666`。
     * @param url 已导入、待删除的外部视频源 URL 地址。
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function removeInjectStreamUrl(url: string): number {
        if (isWeb) {
            client.removeInjectStreamUrl(url)
            return ERROR_CODE_TYPE.ERR_OK
        }
        return callNativeMethod(API_TYPE.REMOVE_INJECT_STREAM_URL, {url})
    }

    /** @en
     * Agora supports reporting and analyzing customized messages.
     *
     * This function is in the beta stage with a free trial. The ability provided in its beta test version is reporting a maximum of
     * 10 message pieces within 6 seconds, with each message piece not exceeding 256 bytes.
     *
     * To try out this function, contact [support@agora.io](mailto:support@agora.io) and discuss the format of customized messages
     * with us.
     */
    /** @cn
     * 声网提供自定义数据上报和分析服务。
     *
     * 该服务当前处于免费内测期。内测期提供的能力为 6 秒内最多上报 10 条数据，每条自定义数据不能超过 256 字节，每个字符串不能超过 100 字节。
     * 如需试用该服务，请联系 sales@agora.io 开通并商定自定义数据格式。
     */
    export function sendCustomReportMessage(id: string, category: string, event: string, label: string, value: number): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.SEND_CUSTOM_REPORT_MESSAGE, {id, category, event, label, value})
    }

    /** @en
     * Gets the current connection state of the SDK.
     *
     * @return See [CONNECTION_STATE_TYPE]{@link agora.CONNECTION_STATE_TYPE}.
     */
    /** @cn
     * 获取当前网络连接状态。
     * 
     * @return [CONNECTION_STATE_TYPE]{@link agora.CONNECTION_STATE_TYPE}。
     */
    export function getConnectionState(): CONNECTION_STATE_TYPE {
        if (isWeb) {
            const state = {
                'DISCONNECTED': CONNECTION_STATE_TYPE.CONNECTION_STATE_DISCONNECTED,
                'CONNECTING': CONNECTION_STATE_TYPE.CONNECTION_STATE_CONNECTING,
                'CONNECTED': CONNECTION_STATE_TYPE.CONNECTION_STATE_CONNECTED,
                'DISCONNECTING': undefined,
            }
            return state[client.getConnectionState()]
        }
        return callNativeMethod(API_TYPE.GET_CONNECTION_STATE)
    }

    /** @en
     * @ignore
     * Sends the metadata.
     * 
     * **Note**
     * - Call this method after [registerMediaMetadataObserver]{@link agora.registerMediaMetadataObserver}.
     * - Ensure that the size of the metadata does not exceed the value set in the 
     * [setMaxMetadataSize]{@link agora.setMaxMetadataSize} callback.
     * 
     * @param uid ID of the user who sends the metadata.
     * @param size The size of the sent metadata.
     * @param buffer The sent metadata.
     * @param timeStampMs The timestamp (ms) of the metadata.
     * 
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * @ignore
     * 发送 Metadata。
     * 
     * @note 
     * - 该方法需要在 [registerMediaMetadataObserver]{@link agora.registerMediaMetadataObserver} 之后调用。
     * - 请确保在该方法中传入的 Metadata 大小不超过 [setMaxMetadataSize]{@link agora.setMaxMetadataSize} 中设定的值。
     * @param metadata 用户想要发送的 Metadata。
     * @param size 发送的 Metadata 的数据大小。
     * @param buffer 发送的 Metadata 数据。
     * @param timeStampMs 该 Metadata 的时间戳（毫秒）。
     * @return
     * - true:  发送
     * - false: 不发送
     * 
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function sendMetadata({uid, size, buffer, timeStampMs}: Metadata): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.SEND_METADATA, {uid, size, timeStampMs}, buffer)
    }

    /** @en
     * @ignore
     * Sets the maximum size of the [Metadata]{@link agora.Metadata}.
     * 
     * The metadata includes the following parameters:
     * - `uid`: ID of the user who sends the metadata.
     * - `size`: The size of the sent or received metadata.
     * - `buffer`: The sent or received metadata.
     * - `timeStampMs`: The timestamp (ms) of the metadata.
     * 
     * @note Call this method after [registerMediaMetadataObserver]{@link agora.registerMediaMetadataObserver}.
     * 
     * @param size The maximum size of the buffer of the metadata that you want to use. The highest value is 1024 bytes.
     * 
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** 请求最大的 Metadata 大小。
     * 
     * Metadata 结构体由如下字段组成：
     * - `uid`: 发送 Metadata 数据的用户 ID
     * - `size`: 发送或收到的 Metadata 的数据大小
     * - `buffer`: 发送或收到的 Metadata 数据
     * - `timeStampMs`: 该 Metadata 的时间戳（毫秒）
     * 
     * @note 该方法需要在 [registerMediaMetadataObserver]{@link agora.registerMediaMetadataObserver} 之后调用。
     * 
     * @parm size Metadata 中 buffer 的最大数据大小，单位为 Byte，最大值不超过 1024。
     * 
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setMaxMetadataSize(size: number): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.SET_MAX_META_SIZE, {size})
    }

    /** @en
     * @ignore
     * Registers the metadata observer.
     *
     * You need to specify the metadata type in this method.
     *
     * This method enables you to add synchronized metadata in the video stream for more diversified live interactive
     * streaming, such as sending shopping links, digital coupons, and online quizzes.
     *
     * **Note**
     * - Call this method before the [joinChannel]{@link agora.joinChannel} method.
     * - This method applies to the `LIVE_BROADCASTING` channel profile.
     *
     * @param type See [METADATA_TYPE]{@link agora.METADATA_TYPE}. The SDK supports `VIDEO_METADATA(0)` only for now.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 注册媒体 metadata 观测器用于接收或发送 metadata。
     * @note
     * - 请在  [joinChannel]{@link agora.joinChannel}  前调用该方法
     * - 该方法仅使用于直播场景
     * 
     * @param type 用户希望在观测器中使用的 METADATA 类型。目前仅支持 `VIDEO_METADATA(0)`。详见：[METADATA_TYPE]{@link agora.METADATA_TYPE}。
     * 
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function registerMediaMetadataObserver(type: METADATA_TYPE): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.REGISTER_MEDIA_META_DATA_OBSERVER, {type})
    }

    /** @en
     * Provides technical preview functionalities or special customizations by configuring the SDK with JSON options.
     *
     * The JSON options are not public by default. Agora is working on making commonly used JSON options public in a standard way.
     *
     * @param parameters Sets the parameter as a JSON string in the specified format.
     *
     * @return
     * - 0: Success.
     * - < 0: Failure.
     */
    /** @cn
     * 通过 JSON 配置 SDK 提供技术预览或特别定制功能。
     * JSON 选项默认不公开。声网工程师正在努力寻求以标准化方式公开 JSON 选项。
     * @param parameters JSON 字符串形式的参数
     * @return
     * - 0: 方法调用成功
     * - < 0: 方法调用失败
     */
    export function setParameters(parameters: string): number {
        if (isWeb) {
            return ERROR_CODE_TYPE.ERR_NOT_SUPPORTED
        }
        return callNativeMethod(API_TYPE.SET_PARAMETERS, {parameters})
    }
}

declare interface agora {
    /**
     * @event warning
     */
    on(evt: 'warning', cb: typeof AgoraRtcEvents.prototype.onWarning)

    /**
     * @event error
     */
    on(evt: 'error', cb: typeof AgoraRtcEvents.prototype.onError)

    /**
     * @deprecated
     *
     * @event join-channel-success
     */
    on(evt: 'join-channel-success', cb: typeof AgoraRtcEvents.prototype.onJoinChannelSuccess)

    /**
     * @event joinChannelSuccess
     */
    on(evt: 'joinChannelSuccess', cb: typeof AgoraRtcEvents.prototype.onJoinChannelSuccess)

    /**
     * @deprecated
     *
     * @event rejoin-channel-success
     */
    on(evt: 'rejoin-channel-success', cb: typeof AgoraRtcEvents.prototype.onRejoinChannelSuccess)

    /**
     * @event rejoinChannelSuccess
     */
    on(evt: 'rejoinChannelSuccess', cb: typeof AgoraRtcEvents.prototype.onRejoinChannelSuccess)

    /**
     * @deprecated
     *
     * @event leave-channel
     */
    on(evt: 'leave-channel', cb: typeof AgoraRtcEvents.prototype.onLeaveChannel)

    /**
     * @event leaveChannel
     */
    on(evt: 'leaveChannel', cb: typeof AgoraRtcEvents.prototype.onLeaveChannel)

    /**
     * @deprecated
     *
     * @event client-role-changed
     */
    on(evt: 'client-role-changed', cb: typeof AgoraRtcEvents.prototype.onClientRoleChanged)

    /**
     * @event clientRoleChanged
     */
    on(evt: 'clientRoleChanged', cb: typeof AgoraRtcEvents.prototype.onClientRoleChanged)

    /**
     * @deprecated
     *
     * @event user-joined
     */
    on(evt: 'user-joined', cb: typeof AgoraRtcEvents.prototype.onUserJoined)

    /**
     * @event userJoined
     */
    on(evt: 'userJoined', cb: typeof AgoraRtcEvents.prototype.onUserJoined)

    /**
     * @deprecated
     *
     * @event user-offline
     */
    on(evt: 'user-offline', cb: typeof AgoraRtcEvents.prototype.onUserOffline)

    /**
     * @event userOffline
     */
    on(evt: 'userOffline', cb: typeof AgoraRtcEvents.prototype.onUserOffline)

    /**
     * @event lastmileQuality
     */
    on(evt: 'lastmileQuality', cb: typeof AgoraRtcEvents.prototype.onLastmileQuality)

    /**
     * @event lastmileProbeResult
     */
    on(evt: 'lastmileProbeResult', cb: typeof AgoraRtcEvents.prototype.onLastmileProbeResult)

    /**
     * @deprecated
     *
     * @event connection-interrupted
     */
    on(evt: 'connection-interrupted', cb: typeof AgoraRtcEvents.prototype.onConnectionInterrupted)

    /**
     * @event connectionInterrupted
     */
    on(evt: 'connectionInterrupted', cb: typeof AgoraRtcEvents.prototype.onConnectionInterrupted)

    /**
     * @deprecated
     *
     * @event connection-lost
     */
    on(evt: 'connection-lost', cb: typeof AgoraRtcEvents.prototype.onConnectionLost)

    /**
     * @event connectionLost
     */
    on(evt: 'connectionLost', cb: typeof AgoraRtcEvents.prototype.onConnectionLost)

    /**
     * @deprecated
     *
     * @event connection-banned
     */
    on(evt: 'connection-banned', cb: typeof AgoraRtcEvents.prototype.onConnectionBanned)

    /**
     * @event connectionBanned
     */
    on(evt: 'connectionBanned', cb: typeof AgoraRtcEvents.prototype.onConnectionBanned)

    /**
     * @event apiCallExecuted
     */
    on(evt: 'apiCallExecuted', cb: typeof AgoraRtcEvents.prototype.onApiCallExecuted)

    /**
     * @deprecated
     *
     * @event request-token
     */
    on(evt: 'request-token', cb: typeof AgoraRtcEvents.prototype.onRequestToken)

    /**
     * @event requestToken
     */
    on(evt: 'requestToken', cb: typeof AgoraRtcEvents.prototype.onRequestToken)

    /**
     * @event tokenPrivilegeWillExpire
     */
    on(evt: 'tokenPrivilegeWillExpire', cb: typeof AgoraRtcEvents.prototype.onTokenPrivilegeWillExpire)

    /**
     * @deprecated
     *
     * @event audio-quality
     */
    on(evt: 'audio-quality', cb: typeof AgoraRtcEvents.prototype.onAudioQuality)

    /**
     * @event audioQuality
     */
    on(evt: 'audioQuality', cb: typeof AgoraRtcEvents.prototype.onAudioQuality)

    /**
     * @event rtcStats
     */
    on(evt: 'rtcStats', cb: typeof AgoraRtcEvents.prototype.onRtcStats)

    /**
     * @deprecated
     *
     * @event network-quality
     */
    on(evt: 'network-quality', cb: typeof AgoraRtcEvents.prototype.onNetworkQuality)

    /**
     * @event networkQuality
     */
    on(evt: 'networkQuality', cb: typeof AgoraRtcEvents.prototype.onNetworkQuality)

    /** @ignore
     * @event localVideoStats
     */
    on(evt: 'localVideoStats', cb: typeof AgoraRtcEvents.prototype.onLocalVideoStats)

    /** @ignore
     * @event remoteVideoStats
     */
    on(evt: 'remoteVideoStats', cb: typeof AgoraRtcEvents.prototype.onRemoteVideoStats)

    /**
     * @event localAudioStats
     */
    on(evt: 'localAudioStats', cb: typeof AgoraRtcEvents.prototype.onLocalAudioStats)

    /**
     * @event remoteAudioStats
     */
    on(evt: 'remoteAudioStats', cb: typeof AgoraRtcEvents.prototype.onRemoteAudioStats)

    /**
     * @event localAudioStateChanged
     */
    on(evt: 'localAudioStateChanged', cb: typeof AgoraRtcEvents.prototype.onLocalAudioStateChanged)

    /**
     * @event localAudioStateChanged
     */
    on(evt: 'localAudioStateChanged', cb: typeof AgoraRtcEvents.prototype.onLocalAudioStateChanged)

    /**
     * @event remoteAudioStateChanged
     */
    on(evt: 'remoteAudioStateChanged', cb: typeof AgoraRtcEvents.prototype.onRemoteAudioStateChanged)

    /**
     * @event audioPublishStateChanged
     */
    on(evt: 'audioPublishStateChanged', cb: typeof AgoraRtcEvents.prototype.onAudioPublishStateChanged)

    /** @ignore
     * @event videoPublishStateChanged
     */
    on(evt: 'videoPublishStateChanged', cb: typeof AgoraRtcEvents.prototype.onVideoPublishStateChanged)

    /**
     * @event audioSubscribeStateChanged
     */
    on(evt: 'audioSubscribeStateChanged', cb: typeof AgoraRtcEvents.prototype.onAudioSubscribeStateChanged)

    /** @ignore
     * @event videoSubscribeStateChanged
     */
    on(evt: 'videoSubscribeStateChanged', cb: typeof AgoraRtcEvents.prototype.onVideoSubscribeStateChanged)

    /**
     * @deprecated
     *
     * @event audio-volume-indication
     */
    on(evt: 'audio-volume-indication', cb: typeof AgoraRtcEvents.prototype.onAudioVolumeIndication)

    /**
     * @event audioVolumeIndication
     */
    on(evt: 'audioVolumeIndication', cb: typeof AgoraRtcEvents.prototype.onAudioVolumeIndication)

    /**
     * @event activeSpeaker
     */
    on(evt: 'activeSpeaker', cb: typeof AgoraRtcEvents.prototype.onActiveSpeaker)

    /** @ignore
     * @event videoStopped
     */
    on(evt: 'videoStopped', cb: typeof AgoraRtcEvents.prototype.onVideoStopped)

    /** @ignore
     * @event firstLocalVideoFrame
     */
    on(evt: 'firstLocalVideoFrame', cb: typeof AgoraRtcEvents.prototype.onFirstLocalVideoFrame)

    /** @ignore
     * @event firstLocalVideoFramePublished
     */
    on(evt: 'firstLocalVideoFramePublished', cb: typeof AgoraRtcEvents.prototype.onFirstLocalVideoFramePublished)

    /** @ignore
     * @deprecated
     *
     * @event firstRemoteVideoDecoded
     */
    on(evt: 'firstRemoteVideoDecoded', cb: typeof AgoraRtcEvents.prototype.onFirstRemoteVideoDecoded)

    /** @ignore
     * @event firstRemoteVideoFrame
     */
    on(evt: 'firstRemoteVideoFrame', cb: typeof AgoraRtcEvents.prototype.onFirstRemoteVideoFrame)

    /**
     * @deprecated
     *
     * @event user-mute-audio
     */
    on(evt: 'user-mute-audio', cb: typeof AgoraRtcEvents.prototype.onUserMuteAudio)

    /**
     * @deprecated
     *
     * @event userMuteAudio
     */
    on(evt: 'userMuteAudio', cb: typeof AgoraRtcEvents.prototype.onUserMuteAudio)

    /** @ignore
     * @event userMuteVideo
     */
    on(evt: 'userMuteVideo', cb: typeof AgoraRtcEvents.prototype.onUserMuteVideo)

    /** @ignore
     * @deprecated
     *
     * @event userEnableVideo
     */
    on(evt: 'userEnableVideo', cb: typeof AgoraRtcEvents.prototype.onUserEnableVideo)

    /** @ignore
     * @event audioDeviceStateChanged
     */
    on(evt: 'audioDeviceStateChanged', cb: typeof AgoraRtcEvents.prototype.onAudioDeviceStateChanged)

    /** @ignore
     * @event audioDeviceVolumeChanged
     */
    on(evt: 'audioDeviceVolumeChanged', cb: typeof AgoraRtcEvents.prototype.onAudioDeviceVolumeChanged)

    /** @ignore
     * @event cameraReady
     */
    on(evt: 'cameraReady', cb: typeof AgoraRtcEvents.prototype.onCameraReady)

    /** @ignore
     * @event cameraFocusAreaChanged
     */
    on(evt: 'cameraFocusAreaChanged', cb: typeof AgoraRtcEvents.prototype.onCameraFocusAreaChanged)

    /** @ignore
     * @event facePositionChanged
     */
    on(evt: 'facePositionChanged', cb: typeof AgoraRtcEvents.prototype.onFacePositionChanged)

    /** @ignore
     * @event cameraExposureAreaChanged
     */
    on(evt: 'cameraExposureAreaChanged', cb: typeof AgoraRtcEvents.prototype.onCameraExposureAreaChanged)

    /**
     * @event audioMixingFinished
     */
    on(evt: 'audioMixingFinished', cb: typeof AgoraRtcEvents.prototype.onAudioMixingFinished)

    /**
     * @event audioMixingStateChanged
     */
    on(evt: 'audioMixingStateChanged', cb: typeof AgoraRtcEvents.prototype.onAudioMixingStateChanged)

    /**
     * @event remoteAudioMixingBegin
     */
    on(evt: 'remoteAudioMixingBegin', cb: typeof AgoraRtcEvents.prototype.onRemoteAudioMixingBegin)

    /**
     * @event remoteAudioMixingEnd
     */
    on(evt: 'remoteAudioMixingEnd', cb: typeof AgoraRtcEvents.prototype.onRemoteAudioMixingEnd)

    /**
     * @event audioEffectFinished
     */
    on(evt: 'audioEffectFinished', cb: typeof AgoraRtcEvents.prototype.onAudioEffectFinished)

    /**
     * @deprecated
     *
     * @event firstRemoteAudioDecoded
     */
    on(evt: 'firstRemoteAudioDecoded', cb: typeof AgoraRtcEvents.prototype.onFirstRemoteAudioDecoded)

    /** @ignore
     * @event videoDeviceStateChanged
     */
    on(evt: 'videoDeviceStateChanged', cb: typeof AgoraRtcEvents.prototype.onVideoDeviceStateChanged)

    /** @ignore
     * @event localVideoStateChanged
     */
    on(evt: 'localVideoStateChanged', cb: typeof AgoraRtcEvents.prototype.onLocalVideoStateChanged)

    /** @ignore
     * @event videoSizeChanged
     */
    on(evt: 'videoSizeChanged', cb: typeof AgoraRtcEvents.prototype.onVideoSizeChanged)

    /** @ignore
     * @event remoteVideoStateChanged
     */
    on(evt: 'remoteVideoStateChanged', cb: typeof AgoraRtcEvents.prototype.onRemoteVideoStateChanged)

    /** @ignore
     * @deprecated
     *
     * @event userEnableLocalVideo
     */
    on(evt: 'userEnableLocalVideo', cb: typeof AgoraRtcEvents.prototype.onUserEnableLocalVideo)

    /**
     * @event streamMessage
     */
    on(evt: 'streamMessage', cb: typeof AgoraRtcEvents.prototype.onStreamMessage)

    /**
     * @event streamMessageError
     */
    on(evt: 'streamMessageError', cb: typeof AgoraRtcEvents.prototype.onStreamMessageError)

    /**
     * @event mediaEngineLoadSuccess
     */
    on(evt: 'mediaEngineLoadSuccess', cb: typeof AgoraRtcEvents.prototype.onMediaEngineLoadSuccess)

    /**
     * @event mediaEngineStartCallSuccess
     */
    on(evt: 'mediaEngineStartCallSuccess', cb: typeof AgoraRtcEvents.prototype.onMediaEngineStartCallSuccess)

    /**
     * @event channelMediaRelayStateChanged
     */
    on(evt: 'channelMediaRelayStateChanged', cb: typeof AgoraRtcEvents.prototype.onChannelMediaRelayStateChanged)

    /**
     * @event channelMediaRelayEvent
     */
    on(evt: 'channelMediaRelayEvent', cb: typeof AgoraRtcEvents.prototype.onChannelMediaRelayEvent)

    /**
     * @deprecated
     *
     * @event firstLocalAudioFrame
     */
    on(evt: 'firstLocalAudioFrame', cb: typeof AgoraRtcEvents.prototype.onFirstLocalAudioFrame)

    /**
     * @event firstLocalAudioFramePublished
     */
    on(evt: 'firstLocalAudioFramePublished', cb: typeof AgoraRtcEvents.prototype.onFirstLocalAudioFramePublished)

    /**
     * @deprecated
     *
     * @event firstRemoteAudioFrame
     */
    on(evt: 'firstRemoteAudioFrame', cb: typeof AgoraRtcEvents.prototype.onFirstRemoteAudioFrame)

    /**
     * @event rtmpStreamingStateChanged
     */
    on(evt: 'rtmpStreamingStateChanged', cb: typeof AgoraRtcEvents.prototype.onRtmpStreamingStateChanged)

    /**
     * @event rtmpStreamingEvent
     */
    on(evt: 'rtmpStreamingEvent', cb: typeof AgoraRtcEvents.prototype.onRtmpStreamingEvent)

    /**
     * @deprecated
     *
     * @event streamPublished
     */
    on(evt: 'streamPublished', cb: typeof AgoraRtcEvents.prototype.onStreamPublished)

    /**
     * @deprecated
     *
     * @event streamUnpublished
     */
    on(evt: 'streamUnpublished', cb: typeof AgoraRtcEvents.prototype.onStreamUnpublished)

    /** 
     * @event transcodingUpdated
     */
    on(evt: 'transcodingUpdated', cb: typeof AgoraRtcEvents.prototype.onTranscodingUpdated)

    /**
     * @event streamInjectedStatus
     */
    on(evt: 'streamInjectedStatus', cb: typeof AgoraRtcEvents.prototype.onStreamInjectedStatus)

    /**
     * @deprecated
     *
     * @event audio-routing-changed
     */
    on(evt: 'audio-routing-changed', cb: typeof AgoraRtcEvents.prototype.onAudioRouteChanged)

    /**
     * @event audioRouteChanged
     */
    on(evt: 'audioRouteChanged', cb: typeof AgoraRtcEvents.prototype.onAudioRouteChanged)

    /** @ignore
     * @event localPublishFallbackToAudioOnly
     */
    on(evt: 'localPublishFallbackToAudioOnly', cb: typeof AgoraRtcEvents.prototype.onLocalPublishFallbackToAudioOnly)

    /** @ignore
     * @event remoteSubscribeFallbackToAudioOnly
     */
    on(evt: 'remoteSubscribeFallbackToAudioOnly', cb: typeof AgoraRtcEvents.prototype.onRemoteSubscribeFallbackToAudioOnly)

    /**
     * @deprecated
     *
     * @event remoteAudioTransportStats
     */
    on(evt: 'remoteAudioTransportStats', cb: typeof AgoraRtcEvents.prototype.onRemoteAudioTransportStats)

    /** @ignore
     * @deprecated
     *
     * @event remoteVideoTransportStats
     */
    on(evt: 'remoteVideoTransportStats', cb: typeof AgoraRtcEvents.prototype.onRemoteVideoTransportStats)

    /**
     * @deprecated
     *
     * @event microphoneEnabled
     */
    on(evt: 'microphoneEnabled', cb: typeof AgoraRtcEvents.prototype.onMicrophoneEnabled)

    /**
     * @event connectionStateChanged
     */
    on(evt: 'connectionStateChanged', cb: typeof AgoraRtcEvents.prototype.onConnectionStateChanged)

    /**
     * @event networkTypeChanged
     */
    on(evt: 'networkTypeChanged', cb: typeof AgoraRtcEvents.prototype.onNetworkTypeChanged)

    /**
     * @event localUserRegistered
     */
    on(evt: 'localUserRegistered', cb: typeof AgoraRtcEvents.prototype.onLocalUserRegistered)

    /**
     * @event userInfoUpdated
     */
    on(evt: 'userInfoUpdated', cb: typeof AgoraRtcEvents.prototype.onUserInfoUpdated)

    /** @ignore
     * @event metadataReceived
     */
    on(evt: 'metadataReceived', cb: typeof AgoraRtcEvents.prototype.onMetadataReceived)
}

(window as any).agora = agora
