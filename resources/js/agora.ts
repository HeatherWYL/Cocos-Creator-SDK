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

    
    /** @cn
     * 设备状态。
     */
    export enum MEDIA_DEVICE_STATE_TYPE {
        
        /** @cn
         * 1: 设备正在使用。
         */
        MEDIA_DEVICE_STATE_ACTIVE = 1,
        
        /** @cn
         * 2: 设备被禁用。
         */
        MEDIA_DEVICE_STATE_DISABLED = 2,
        
        /** @cn
         * 4: 没有此设备。
         */
        MEDIA_DEVICE_STATE_NOT_PRESENT = 4,
        
        /** @cn
         * 8: 设备被拔出。
         */
        MEDIA_DEVICE_STATE_UNPLUGGED = 8
    }

    
    /** @cn
     * 设备类型定义。
     */
    export enum MEDIA_DEVICE_TYPE {
        
        /** @cn
         * -1: 设备类型未知。
         */
        UNKNOWN_AUDIO_DEVICE = -1,
        
        /** @cn
         * 0: 音频播放设备。
         */
        AUDIO_PLAYOUT_DEVICE = 0,
        
        /** @cn
         * 1: 音频录制设备。
         */
        AUDIO_RECORDING_DEVICE = 1,
        
        /** @cn
         * @ignore
         * 2: 视频渲染设备。
        */
        VIDEO_RENDER_DEVICE = 2,
        
        /** @cn
         * @ignore
         * 3: 视频采集设备。
         */
        VIDEO_CAPTURE_DEVICE = 3,
        
        /** @cn
         * 4: 音频应用播放设备。
         */
        AUDIO_APPLICATION_PLAYOUT_DEVICE = 4,
    }

    
    /** @cn
     * 音乐文件播放状态。
     */
    export enum AUDIO_MIXING_STATE_TYPE {
        
        /** @cn
         * 710: 音乐文件正常播放。
         * 该状态表示 SDK 处于以下阶段：
         * - 成功调用 [startAudioMixing]{@link agora.startAudioMixing} 播放音乐文件。
         * - 成功调用 [resumeAudioMixing]{@link agora.resumeAudioMixing} 恢复播放音乐文件。
         */
        AUDIO_MIXING_STATE_PLAYING = 710,
        
        /** @cn
         * 711: 音乐文件暂停播放。
         * 该状态表示 SDK 成功调用 [pauseAudioMixing]{@link agora.pauseAudioMixing} 暂停播放音乐文件。
         */
        AUDIO_MIXING_STATE_PAUSED = 711,
        
        /** @cn
         * 713: 音乐文件停止播放。
         * 该状态表示 SDK 成功调用 [stopAudioMixing]{@link agora.stopAudioMixing} 停止播放音乐文件。
         */
        AUDIO_MIXING_STATE_STOPPED = 713,
        
        /** @cn
         * 714: 音乐文件播放失败。
         * 错误类型详见 [AUDIO_MIXING_ERROR_TYPE]{@link agora.AUDIO_MIXING_ERROR_TYPE}
         */
        AUDIO_MIXING_STATE_FAILED = 714,
    }

    
    /** @cn
     * 混音音乐文件错误码。
     */
    export enum AUDIO_MIXING_ERROR_TYPE {
        
        /** @cn
         * 701: 音乐文件打开出错。
         */
        AUDIO_MIXING_ERROR_CAN_NOT_OPEN = 701,
        
        /** @cn
         * 702: 音乐文件打开太频繁。
         */
        AUDIO_MIXING_ERROR_TOO_FREQUENT_CALL = 702,
        
        /** @cn
         * 703: 音乐文件播放中断。
         */
        AUDIO_MIXING_ERROR_INTERRUPTED_EOF = 703,
        
        /** @cn
         * 0: 音乐文件状态正常。
         */
        AUDIO_MIXING_ERROR_OK = 0,
    }

    
    /** @cn
     * @ignore
     * 本地视频状态
     */
    export enum LOCAL_VIDEO_STREAM_STATE {
        
        /** @cn
         * 0: 本地视频默认初始状态。
         */
        LOCAL_VIDEO_STREAM_STATE_STOPPED = 0,
        
        /** @cn
         * 1: 本地视频采集设备启动成功。调用 [startScreenCaptureByWindowId]{@link agora.startScreenCaptureByWindowId} 
         * 方法共享窗口且共享窗口为最大化时，也会报告该状态。
         */
        LOCAL_VIDEO_STREAM_STATE_CAPTURING = 1,
        
        /** @cn
         * 2: 本地视频首帧编码成功。
         */
        LOCAL_VIDEO_STREAM_STATE_ENCODING = 2,
        
        /** @cn
         * 3: 本地视频启动失败。
         */
        LOCAL_VIDEO_STREAM_STATE_FAILED = 3
    }

    
    /** @cn
     * 本地视频出错原因
     */
    export enum LOCAL_VIDEO_STREAM_ERROR {
        
        /** @cn
         * 0: 本地视频状态正常。
         */
        LOCAL_VIDEO_STREAM_ERROR_OK = 0,
        
        /** @cn
         * 1: 出错原因不明确。
         */
        LOCAL_VIDEO_STREAM_ERROR_FAILURE = 1,
        
        /** @cn
         * 2: 没有权限启动本地视频采集设备。
         */
        LOCAL_VIDEO_STREAM_ERROR_DEVICE_NO_PERMISSION = 2,
        
        /** @cn
         * 3: 本地视频采集设备正在使用中。
         */
        LOCAL_VIDEO_STREAM_ERROR_DEVICE_BUSY = 3,
        
        /** @cn
         * 4: 本地视频采集失败，建议检查采集设备是否正常工作。
         */
        LOCAL_VIDEO_STREAM_ERROR_CAPTURE_FAILURE = 4,
        
        /** @cn
         * 5: 本地视频编码失败。
         */
        LOCAL_VIDEO_STREAM_ERROR_ENCODE_FAILURE = 5,
        
        /** @cn
         * 11: 调用 [startScreenCaptureByWindowId]{@link agora.startScreenCaptureByWindowId} 方法共享窗口时，共享窗口处于最小化的状态。
         */
        LOCAL_VIDEO_STREAM_ERROR_SCREEN_CAPTURE_WINDOW_MINIMIZED = 11,
    }

    
    /** @cn
     * 本地音频状态
     */
    export enum LOCAL_AUDIO_STREAM_STATE {
        
        /** @cn
         * 0: 本地音频默认初始状态。
         */
        LOCAL_AUDIO_STREAM_STATE_STOPPED = 0,
        
        /** @cn
         * 1: 本地音频录制设备启动成功。
         */
        LOCAL_AUDIO_STREAM_STATE_RECORDING = 1,
        
        /** @cn
         * 2: 本地音频首帧编码成功。
         */
        LOCAL_AUDIO_STREAM_STATE_ENCODING = 2,
        
        /** @cn
         * 3: 本地音频启动失败。
         */
        LOCAL_AUDIO_STREAM_STATE_FAILED = 3
    }

    
    /** @cn
     * 本地音频出错原因
     */
    export enum LOCAL_AUDIO_STREAM_ERROR {
        
        /** @cn
         * 0: 本地音频状态正常。
         */
        LOCAL_AUDIO_STREAM_ERROR_OK = 0,
        
        /** @cn
         * 1: 本地音频出错原因不明确。
         */
        LOCAL_AUDIO_STREAM_ERROR_FAILURE = 1,
        
        /** @cn
         * 2: 没有权限启动本地音频录制设备。
         */
        LOCAL_AUDIO_STREAM_ERROR_DEVICE_NO_PERMISSION = 2,
        
        /** @cn
         * 3: 本地音频录制设备已经在使用中。
         */
        LOCAL_AUDIO_STREAM_ERROR_DEVICE_BUSY = 3,
        
        /** @cn
         * 4: 本地音频录制失败，建议你检查录制设备是否正常工作。
         */
        LOCAL_AUDIO_STREAM_ERROR_RECORD_FAILURE = 4,
        
        /** @cn
         * 5: 本地音频编码失败。
         */
        LOCAL_AUDIO_STREAM_ERROR_ENCODE_FAILURE = 5
    }

    
    /** @cn
     * 录音音质。
     */
    export enum AUDIO_RECORDING_QUALITY_TYPE {
        
        /** @cn
         * 0: 低音质。采样率为 32 kHz，录制 10 分钟的文件大小为 1.2 M 左右。
         */
        AUDIO_RECORDING_QUALITY_LOW = 0,
        
        /** @cn
         * 1: 中音质。采样率为 32 kHz，录制 10 分钟的文件大小为 2 M 左右。
         */
        AUDIO_RECORDING_QUALITY_MEDIUM = 1,
        
        /** @cn
         * 2: 高音质。采样率为 32 kHz，录制 10 分钟的文件大小为 3.75 M 左右。
         */
        AUDIO_RECORDING_QUALITY_HIGH = 2,
    }

    
    /** @cn
     * 网络质量。
     */
    export enum QUALITY_TYPE {
        
        /** @cn
         * 0: 网络质量未知。
         */
        QUALITY_UNKNOWN = 0,
        
        /** @cn
         *  1: 网络质量极好。
         */
        QUALITY_EXCELLENT = 1,
        
        /** @cn
         * 2: 用户主观感觉和 excellent 差不多，但码率可能略低于 excellent。
         */
        QUALITY_GOOD = 2,
        
        /** @cn
         * 3: 用户主观感受有瑕疵但不影响沟通。
         */
        QUALITY_POOR = 3,
        
        /** @cn
         * 4: 勉强能沟通但不顺畅。
         */
        QUALITY_BAD = 4,
        
        /** @cn
         * 5: 网络质量非常差，基本不能沟通。
         */
        QUALITY_VBAD = 5,
        
        /** @cn
         * 6: 完全无法沟通。
         */
        QUALITY_DOWN = 6,
        
        /** @cn
         * 7: 暂时无法检测网络质量（未使用）。
         */
        QUALITY_UNSUPPORTED = 7,
        
        /** @cn
         * 8: 网络质量检测已开始还没完成。
         */
        QUALITY_DETECTING = 8,
    }

    
    /** @cn
     * @ignore
     * 设置视频显示模式。
     */
    export enum RENDER_MODE_TYPE {
        
         /** @cn
         * 1: 视频尺寸等比缩放。优先保证视窗被填满。因视频尺寸与显示视窗尺寸不一致而多出的视频将被截掉。
         */
        RENDER_MODE_HIDDEN = 1,
        
         /** @cn
         * 2: 视频尺寸等比缩放。优先保证视频内容全部显示。因视频尺寸与显示视窗尺寸不一致造成的视窗未被填满的区域填充黑色。
         */
        RENDER_MODE_FIT = 2,
        
        /** @cn
         * @deprecated 3: 该模式已废弃。
         */
        RENDER_MODE_ADAPTIVE = 3,
        
        /** @cn
         * 4: 视频尺寸进行缩放和拉伸以充满显示视窗。
         */
        RENDER_MODE_FILL = 4,
    }

    
    /** @cn
     * @ignore
     * 镜像模式类型。
     */
    export enum VIDEO_MIRROR_MODE_TYPE {
        
        /** @cn
         * 0:（默认）由 SDK 决定镜像模式：
         * - 本地视图镜像模式：如果你使用前置摄像头，默认启动本地视图镜像模式；如果你使用后置摄像头，默认关闭本地视图镜像模式。
         * - 远端用户视图镜像模式：默认关闭远端用户的镜像模式。
         */
        VIDEO_MIRROR_MODE_AUTO = 0,//determined by SDK
        
        /** @cn
         * 1: 启用镜像模式。
         */
        VIDEO_MIRROR_MODE_ENABLED = 1,//enabled mirror
        
        /** @cn
         * 2: 关闭镜像模式。
         */
        VIDEO_MIRROR_MODE_DISABLED = 2,//disable mirror
    }

    
    /** @cn
     * @ignore
     * @deprecated 横屏模式视频属性。
     */
    export enum VIDEO_PROFILE_TYPE {
        
        /** @cn
         * @deprecated
         * 0：分辨率 160 &times; 120，帧率 15 fps，码率 65 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_120P = 0,
        
        /** @cn
         * @deprecated
         * 2：分辨率 120 &times; 120，帧率 15 fps，码率 50 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_120P_3 = 2,
        
        /** @cn
         * @deprecated
         * 10：分辨率 320 &times; 180，帧率 15 fps，码率 140 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_180P = 10,
        
        /** @cn
         * @deprecated
         * 12：分辨率 180 &times; 180，帧率 15 fps，码率 100 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_180P_3 = 12,
        
        /** @cn
         * @deprecated
         * 13：分辨率 240 &times; 180，帧率 15 fps，码率 120 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_180P_4 = 13,
        
        /** @cn
         * @deprecated
         * 20：分辨率 320 &times; 240，帧率 15 fps，码率 200 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_240P = 20,
        
        /** @cn
         * @deprecated
         * 22：分辨率 240 &times; 240，帧率 15 fps，码率 140 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_240P_3 = 22,
        
        /** @cn
         * @deprecated
         * 23：分辨率 424 &times; 240，帧率 15 fps，码率 220 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_240P_4 = 23,
        
        /** @cn
         * @deprecated
         * 30：分辨率 640 &times; 360，帧率 15 fps，码率 400 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_360P = 30,
        
        /** @cn
         * @deprecated
         * 32：分辨率 360 &times; 360，帧率 15 fps，码率 260 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_360P_3 = 32,
        
        /** @cn
         * @deprecated
         * 33：分辨率 640 &times; 360，帧率 30 fps，码率 600 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_360P_4 = 33,
        
        /** @cn
         * @deprecated
         * 35：分辨率 360 &times; 360，帧率 30 fps，码率 400 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_360P_6 = 35,
        
        /** @cn
         * @deprecated
         * 36：分辨率 480 &times; 360，帧率 15 fps，码率 320 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_360P_7 = 36,
        
        /** @cn
         * @deprecated
         * 37：分辨率 480 &times; 360，帧率 30 fps，码率 490 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_360P_8 = 37,
        
        /** @cn
         * @deprecated
         * 38：分辨率 640 &times; 360，帧率 15 fps，码率 800 Kbps。
         * @note 该视频属性仅适用于直播频道模式。
         */
        VIDEO_PROFILE_LANDSCAPE_360P_9 = 38,
        
        /** @cn
         * @deprecated
         * 39：分辨率 640 &times; 360，帧率 24 fps，码率 800 Kbps。
         * @note 该视频属性仅适用于直播频道模式。
         */
        VIDEO_PROFILE_LANDSCAPE_360P_10 = 39,
        
        /** @cn
         * @deprecated 100: 分辨率 640 &times; 360，帧率 24 fps，码率 1000 Kbps。
         * @note 该属性仅适用于直播频道场景。
         */
        VIDEO_PROFILE_LANDSCAPE_360P_11 = 100,
        
        /** @cn
         * @deprecated
         * 40：分辨率 640 &times; 480，帧率 15 fps，码率 500 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_480P = 40,
        
        /** @cn
         * @deprecated
         * 42：分辨率 480 &times; 480，帧率 15 fps，码率 400 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_480P_3 = 42,
        
        /** @cn
         * @deprecated
         * 43：分辨率 640 &times; 480，帧率 30 fps，码率 750 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_480P_4 = 43,
        
        /** @cn
         * @deprecated
         * 45：分辨率 480 &times; 480，帧率 30 fps，码率 600 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_480P_6 = 45,
        
        /** @cn
         * @deprecated
         * 47：分辨率 848 &times; 480，帧率 15 fps，码率 610 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_480P_8 = 47,
        
        /** @cn
         * @deprecated
         * 48：分辨率 848 &times; 480，帧率 30 fps，码率 930 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_480P_9 = 48,
        
        /** @cn
         * @deprecated
         * 49：分辨率 640 &times; 480，帧率 10 fps，码率 400 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_480P_10 = 49,
        
        /** @cn
         * @deprecated
         * 50：分辨率 1280 &times; 720，帧率 15 fps，码率 1130 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_720P = 50,
        
        /** @cn
         * @deprecated
         * 52：分辨率 1280 &times; 720，帧率 30 fps，码率 1710 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_720P_3 = 52,
        
        /** @cn
         * @deprecated
         * 54：分辨率 960 &times; 720，帧率 15 fps，码率 910 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_720P_5 = 54,
        
        /** @cn
         * @deprecated
         * 55：分辨率 960 &times; 720，帧率 30 fps，码率 1380 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_720P_6 = 55,
        
        /** @cn
         * @deprecated
         * 60：分辨率 1920 &times; 1080，帧率 15 fps，码率 2080 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_1080P = 60,
        
        /** @cn
         * @deprecated
         * 62：分辨率 1920 &times; 1080，帧率 30 fps，码率 3150 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_1080P_3 = 62,
        
        /** @cn
         * @deprecated
         * 64：分辨率 1920 &times; 1080，帧率 60 fps，码率 4780 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_1080P_5 = 64,
        
        /** @cn
         * @deprecated
         * 66：分辨率 2560 &times; 1440，帧率 30 fps，码率 4850 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_1440P = 66,
        
        /** @cn
         * @deprecated
         * 67：分辨率 2560 &times; 1440，帧率 60 fps，码率 7350 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_1440P_2 = 67,
        
        /** @cn
         * @deprecated
         * 70：分辨率 3840 &times; 2160，分辨率 30 fps，码率 8910 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_4K = 70,
        
        /** @cn
         * @deprecated
         * 72：分辨率 3840 &times; 2160，帧率 60 fps，码率 13500 Kbps。
         */
        VIDEO_PROFILE_LANDSCAPE_4K_3 = 72,
        
        /** @cn
         * @deprecated 1000: 分辨率 120 &times; 160，帧率 15 fps，码率 65 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_120P = 1000,
        
        /** @cn
         * @deprecated 1002: 分辨率 120 &times; 120，帧率 15 fps，码率 50 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_120P_3 = 1002,
        
        /** @cn
         * @deprecated 1010: 分辨率 180 &times; 320，帧率 15 fps，码率 140 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_180P = 1010,
        
        /** @cn
         * @deprecated 1012: 分辨率 180 &times; 180，帧率 15 fps，码率 100 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_180P_3 = 1012,
        
        /** @cn
         * @deprecated 1013: 分辨率 180 &times; 240，帧率 15 fps，码率 120 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_180P_4 = 1013,
        
        /** @cn
         * @deprecated 1020: 分辨率 240 &times; 320，帧率 15 fps，码率 200 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_240P = 1020,
        
        /** @cn
         * @deprecated 1022: 分辨率 240 &times; 240，帧率 15 fps，码率 140 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_240P_3 = 1022,
        
        /** @cn
         * @deprecated 1023: 分辨率 240 &times; 424，帧率 15 fps，码率 220 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_240P_4 = 1023,
        
        /** @cn
         * @deprecated 1030: 分辨率 360 &times; 640，帧率 15 fps，码率 400 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_360P = 1030,
        
        /** @cn
         * @deprecated 1032: 分辨率 360 &times; 360，帧率 15 fps，码率 260 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_360P_3 = 1032,
        
        /** @cn
         * @deprecated 1033: 分辨率 360 &times; 640，帧率 30 fps，码率 600 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_360P_4 = 1033,
        
        /** @cn
         * @deprecated 1035: 分辨率 360 &times; 360，帧率 30 fps，码率 400 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_360P_6 = 1035,
        
        /** @cn
         * @deprecated 1036: 分辨率 360 &times; 480，帧率 15 fps，码率 320 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_360P_7 = 1036,
        
        /** @cn
         * @deprecated 1037: 分辨率 360 &times; 480，帧率 30 fps，码率 490 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_360P_8 = 1037,
        
        /** @cn
         * @deprecated 1038: 分辨率 360 &times; 640，帧率 15 fps，码率 800 Kbps。
         * @note 该属性仅适用于直播频道场景。
         */
        VIDEO_PROFILE_PORTRAIT_360P_9 = 1038,
        
        /** @cn
         * @deprecated 1039: 分辨率 360 &times; 640，帧率 24 fps，码率 800 Kbps。
         * @note 该属性仅适用于直播频道场景。
         */
        VIDEO_PROFILE_PORTRAIT_360P_10 = 1039,
        
        /** @cn
         * @deprecated 1100: 分辨率 360 &times; 640，帧率 24 fps，码率 1000 Kbps。
         * @note 该属性仅适用于直播频道场景。
         */
        VIDEO_PROFILE_PORTRAIT_360P_11 = 1100,
        
        /** @cn
         * @deprecated 1040: 分辨率 480 &times; 640，帧率 15 fps，码率 500 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_480P = 1040,
        
        /** @cn
         * @deprecated 1042: 分辨率 480 &times; 480，帧率 15 fps，码率 400 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_480P_3 = 1042,
        
        /** @cn
         * @deprecated 1043: 分辨率 480 &times; 640，帧率 30 fps，码率 750 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_480P_4 = 1043,
        
        /** @cn
         * @deprecated 1045: 分辨率 480 &times; 480，帧率 30 fps，码率 600 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_480P_6 = 1045,
        
        /** @cn
         * @deprecated 1047: 分辨率 480 &times; 848，帧率 15 fps，码率 610 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_480P_8 = 1047,
        
        /** @cn
         * @deprecated 1048: 分辨率 480 &times; 848，帧率 30 fps，码率 930 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_480P_9 = 1048,
        
        /** @cn
         * @deprecated 1049: 分辨率 480 &times; 640，帧率 10 fps，码率 400 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_480P_10 = 1049,
        
        /** @cn
         * @deprecated 1050: 分辨率 分辨率 720 &times; 1280，帧率 15 fps，码率 1130 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_720P = 1050,
        
        /** @cn
         * @deprecated 1052: 分辨率 分辨率 720 &times; 1280，帧率 30 fps，码率 1710 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_720P_3 = 1052,
        
        /** @cn
         * @deprecated 1054: 分辨率 720 &times; 960，帧率 15 fps，码率 910 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_720P_5 = 1054,
        
        /** @cn
         * @deprecated 1055: 分辨率 720 &times; 960，帧率 30 fps，码率 1380 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_720P_6 = 1055,
        
        /** @cn
         * @deprecated 1060: 分辨率 1080 &times; 1920，帧率 15 fps，码率 2080 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_1080P = 1060,
        
        /** @cn
         * @deprecated 1062: 分辨率 1080 &times; 1920，帧率 30 fps，码率 3150 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_1080P_3 = 1062,
        
        /** @cn
         * @deprecated 1064: 分辨率 1080 &times; 1920，帧率 60 fps，码率 4780 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_1080P_5 = 1064,
        
        /** @cn
         * @deprecated 1066: 分辨率 分辨率 1440 &times; 2560，帧率 30 fps，码率 4850 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_1440P = 1066,
        
        /** @cn
         * @deprecated 1067: 分辨率 分辨率 1440 &times; 2560，帧率 60 fps，码率 6500 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_1440P_2 = 1067,
        
        /** @cn
         * @deprecated 1070: 分辨率 1440 &times; 3840，帧率 30 fps，码率 6500 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_4K = 1070,
        
        /** @cn
         * @deprecated 1072: 分辨率 2160 &times; 3840，帧率 60 fps，码率 6500 Kbps。
         */
        VIDEO_PROFILE_PORTRAIT_4K_3 = 1072,
        
        /** @cn
         * @deprecated （默认）分辨率 640 &times; 360，帧率 15 fps，码率 400 Kbps。
         */
        VIDEO_PROFILE_DEFAULT = VIDEO_PROFILE_LANDSCAPE_360P,
    }

    
    /** @cn
     * 音频属性。
     * 设置采样率，码率，编码模式和声道数。
     */
    export enum AUDIO_PROFILE_TYPE // sample rate, bit rate, mono/stereo, speech/music codec
    {
        
        /** @cn
         * 0: 默认值。
         * - 直播场景下：48 KHz 采样率，音乐编码，单声道，编码码率最大值为 64 Kbps。
         * - 通信场景下：
         *    - Windows 平台：16 KHz 采样率，音乐编码，单声道，编码码率最大值为 16 Kbps。
         *    - Android、macOS、iOS 平台：32 KHz 采样率，音乐编码，单声道，编码码率最大值为 18 Kbps。
         */
        AUDIO_PROFILE_DEFAULT = 0, // use default settings
        
        /** @cn
         * 1: 指定 32 KHz 采样率，语音编码，单声道，编码码率最大值为 18 Kbps。
         */
        AUDIO_PROFILE_SPEECH_STANDARD = 1, // 32Khz, 18Kbps, mono, speech
        
        /** @cn
         * 2: 指定 48 KHz 采样率，音乐编码，单声道，编码码率最大值为 64 Kbps。
         */
        AUDIO_PROFILE_MUSIC_STANDARD = 2, // 48Khz, 48Kbps, mono, music
        
        /** @cn
         * 3: 指定 48 KHz 采样率，音乐编码，双声道，编码码率最大值为 80 Kbps。
         */
        AUDIO_PROFILE_MUSIC_STANDARD_STEREO = 3, // 48Khz, 56Kbps, stereo, music
        
        /** @cn
         * 4: 指定 48 KHz 采样率，音乐编码，单声道，编码码率最大值为 96 Kbps。
         */
        AUDIO_PROFILE_MUSIC_HIGH_QUALITY = 4, // 48Khz, 128Kbps, mono, music
        
        /** @cn
         * 5: 指定 48 KHz 采样率，音乐编码，双声道，编码码率最大值为 128 Kbps。
         */
        AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO = 5, // 48Khz, 192Kbps, stereo, music
        
        /** @cn
         * 6: 指定 16 KHz 采样率，语音编码，单声道，应用回声消除算法 AES。
         */
        AUDIO_PROFILE_IOT = 6,
        
        /** @cn
         * 枚举的数量。
         */
        AUDIO_PROFILE_NUM = 7,
    }

    
    /** @cn
     * 设置音频应用场景。
     */
    export enum AUDIO_SCENARIO_TYPE // set a suitable scenario for your app type
    {
        
        /** @cn
         * 0: 默认设置。
         */
        AUDIO_SCENARIO_DEFAULT = 0,
        
        /** @cn
         * 1: 娱乐应用，需要频繁上下麦的场景。
         */
        AUDIO_SCENARIO_CHATROOM_ENTERTAINMENT = 1,
        
        /** @cn
         * 2: 教育应用，流畅度和稳定性优先。
         */
        AUDIO_SCENARIO_EDUCATION = 2,
        
        /** @cn
         * 3: 高音质语聊房应用。
         */
        AUDIO_SCENARIO_GAME_STREAMING = 3,
        
        /** @cn
         * 4:  秀场应用，音质优先和更好的专业外设支持。
         */
        AUDIO_SCENARIO_SHOWROOM = 4,
        
        /** @cn
         * 5: 游戏开黑。
         */
        AUDIO_SCENARIO_CHATROOM_GAMING = 5,
        
        /** @cn
         * 6: 物联网应用。
         */
        AUDIO_SCENARIO_IOT = 6,
        
        /** @cn
         * 枚举的数量。
         */
        AUDIO_SCENARIO_NUM = 7,
    }

    
    /** @cn
     * 频道使用场景。
     */
    export enum CHANNEL_PROFILE_TYPE {
        
        /** @cn
         * 0: （默认）通信场景。该场景下，频道内所有用户都可以发布和接收音、视频流。适用于语音通话、视频群聊等应用场景。
         */
        CHANNEL_PROFILE_COMMUNICATION = 0,
        
        /** @cn
         * 1: 直播场景。该场景有主播和观众两种用户角色，可以通过 [setClientRole]{@link agora.setClientRole}
         * 设置。主播可以发布和接收音视频流，观众直接接收流。适用于语聊房、视频直播、互动大班课等应用场景。
         */
        CHANNEL_PROFILE_LIVE_BROADCASTING = 1,
        
        /** @cn
         * 2: Agora 不推荐使用该场景。
         */
        CHANNEL_PROFILE_GAME = 2,
    }

    
    /** @cn
     * 直播场景里的用户角色。
     */
    export enum CLIENT_ROLE_TYPE {
        
        /** @cn
         * 1: 主播。主播可以发流也可以收流。
         */
        CLIENT_ROLE_BROADCASTER = 1,
        
        /** @cn
         * 2: （默认）观众。观众只能收流不能发流。
         */
        CLIENT_ROLE_AUDIENCE = 2,
    }

    
    /** @cn
     * 用户离线原因。
     */
    export enum USER_OFFLINE_REASON_TYPE {
        
        /** @cn
         * 0: 用户主动离开。
         */
        USER_OFFLINE_QUIT = 0,
        
        /** @cn
         * 1: 因过长时间收不到对方数据包，超时掉线。注意：由于 SDK 使用的是不可靠通道，也有可能对方主动离开本方没收到对方离开消息而误判为超时掉线。
         */
        USER_OFFLINE_DROPPED = 1,
        
         /** @cn
          * 2: 用户身份从主播切换为观众时触发。
          */
        USER_OFFLINE_BECOME_AUDIENCE = 2,
    }

    
    /** @cn
     * 推流状态
     */
    export enum RTMP_STREAM_PUBLISH_STATE {
        
        /** @cn
         * 推流未开始或已结束。成功调用  [removePublishStreamUrl]{@link agora.removePublishStreamUrl}  方法删除推流地址后，也会返回该状态。
         */
        RTMP_STREAM_PUBLISH_STATE_IDLE = 0,
        
        /** @cn
         * 正在连接 Agora 推流服务器和 RTMP 服务器。调用  [addPublishStreamUrl]{@link agora.addPublishStreamUrl}  方法后，会返回该状态
         */
        RTMP_STREAM_PUBLISH_STATE_CONNECTING = 1,
        
        /** @cn
         * 推流正在进行。成功推流后，会返回该状态。
         */
        RTMP_STREAM_PUBLISH_STATE_RUNNING = 2,
        
        /** @cn
         * 正在恢复推流。当 CDN 出现异常，或推流短暂中断时，SDK 会自动尝试恢复推流，并返回该状态。
         * - 如成功恢复推流，则进入状态 [RTMP_STREAM_PUBLISH_STATE_RUNNING]{@link agora.RTMP_STREAM_PUBLISH_STATE.RTMP_STREAM_PUBLISH_STATE_RUNNING} (2)。
         * - 如服务器出错或 60 秒内未成功恢复，则进入状态 [RTMP_STREAM_PUBLISH_STATE_FAILURE]{@link agora.RTMP_STREAM_PUBLISH_STATE.RTMP_STREAM_PUBLISH_STATE_FAILURE} (4)。
         * 如果觉得 60 秒太长，也可以主动调用 [removePublishStreamUrl]{@link agora.removePublishStreamUrl} 和 
         * [addPublishStreamUrl]{@link agora.addPublishStreamUrl} 方法尝试重连。
         */
        RTMP_STREAM_PUBLISH_STATE_RECOVERING = 3,
        
        /** @cn
         * 推流失败。失败后，你可以通过返回的错误码排查错误原因，也可以再次调用 [addPublishStreamUrl]{@link agora.addPublishStreamUrl} 重新尝试推流。
         */
        RTMP_STREAM_PUBLISH_STATE_FAILURE = 4,
    }

    
    /** @cn
     * 推流错误信息
     */
    export enum RTMP_STREAM_PUBLISH_ERROR {
        
        /** @cn
         * 推流成功
         */
        RTMP_STREAM_PUBLISH_ERROR_OK = 0,
        
        /** @cn
         * 参数无效。请检查输入参数是否正确。例如如果你在调用 [addPublishStreamUrl]{@link agora.addPublishStreamUrl} 前没有调用 
         * [setLiveTranscoding]{@link agora.setLiveTranscoding} 设置转码参数，SDK 会返回该错误。
         */
        RTMP_STREAM_PUBLISH_ERROR_INVALID_ARGUMENT = 1,
        
        /** @cn
         * 推流已加密，不能推流。
         */
        RTMP_STREAM_PUBLISH_ERROR_ENCRYPTED_STREAM_NOT_ALLOWED = 2,
        
        /** @cn
         * 推流超时未成功。可调用  [addPublishStreamUrl]{@link agora.addPublishStreamUrl}  重新推流。
         */
        RTMP_STREAM_PUBLISH_ERROR_CONNECTION_TIMEOUT = 3,
        
        /** @cn
         * 推流服务器出现错误。请调用  [addPublishStreamUrl]{@link agora.addPublishStreamUrl}  重新推流。
         */
        RTMP_STREAM_PUBLISH_ERROR_INTERNAL_SERVER_ERROR = 4,
        
        /** @cn
         * RTMP 服务器出现错误。
         */
        RTMP_STREAM_PUBLISH_ERROR_RTMP_SERVER_ERROR = 5,
        
        /** @cn
         * 推流请求过于频繁。
         */
        RTMP_STREAM_PUBLISH_ERROR_TOO_OFTEN = 6,
        
        /** @cn
         * 单个主播的推流地址数目达到上线 10。请删掉一些不用的推流地址再增加推流地址。
         */
        RTMP_STREAM_PUBLISH_ERROR_REACH_LIMIT = 7,
        
        /** @cn
         * 主播操作不属于自己的流。例如更新其他主播的流参数、停止其他主播的流。请检查 App 逻辑。
         */
        RTMP_STREAM_PUBLISH_ERROR_NOT_AUTHORIZED = 8,
        
        /** @cn
         * 服务器未找到这个流。
         */
        RTMP_STREAM_PUBLISH_ERROR_STREAM_NOT_FOUND = 9,
        
        /** @cn
         * 推流地址格式有错误。请检查推流地址格式是否正确。
         */
        RTMP_STREAM_PUBLISH_ERROR_FORMAT_NOT_SUPPORTED = 10,
    }

    
    /** @cn
     * RTMP 推流时发生的事件。
     */
    export enum RTMP_STREAMING_EVENT {
        
        /** @cn
         * RTMP 推流时，添加背景图或水印出错。
         */
        RTMP_STREAMING_EVENT_FAILED_LOAD_IMAGE = 1,
    }

    
    /** @cn
     * 导入的外部视频源状态。
     */
    export enum INJECT_STREAM_STATUS {
        
        /** @cn
         * 0: 外部视频流导入成功。
         */
        INJECT_STREAM_STATUS_START_SUCCESS = 0,
        
        /** @cn
         * 1: 外部视频流已存在。
         */
        INJECT_STREAM_STATUS_START_ALREADY_EXISTS = 1,
        
        /** @cn
         * 2: 外部视频流导入未经授权。
         */
        INJECT_STREAM_STATUS_START_UNAUTHORIZED = 2,
        
        /** @cn
         * 3: 导入外部视频流超时。
         */
        INJECT_STREAM_STATUS_START_TIMEDOUT = 3,
        
        /** @cn
         * 4: 外部视频流导入失败。
         */
        INJECT_STREAM_STATUS_START_FAILED = 4,
        
        /** @cn
         * 5: 外部视频流停止导入成功。
         */
        INJECT_STREAM_STATUS_STOP_SUCCESS = 5,
        
        /** @cn
         * 6: 未找到要停止导入的外部视频流。
         */
        INJECT_STREAM_STATUS_STOP_NOT_FOUND = 6,
        
        /** @cn
         * 7: 要停止导入的外部视频流未经授权。
         */
        INJECT_STREAM_STATUS_STOP_UNAUTHORIZED = 7,
        
        /** @cn
         * 8: 停止导入外部视频流超时。
         */
        INJECT_STREAM_STATUS_STOP_TIMEDOUT = 8,
        
        /** @cn
         * 9: 停止导入外部视频流失败。
         */
        INJECT_STREAM_STATUS_STOP_FAILED = 9,
        
        /** @cn
         * 10: 导入的外部视频流被中断。
         */
        INJECT_STREAM_STATUS_BROKEN = 10,
    }

    
    /** @cn
     * @ignore
     * 视频流类型，视频流大小。
     */
    export enum REMOTE_VIDEO_STREAM_TYPE {
        
        /** @cn
         * 0: 视频大流。
         */
        REMOTE_VIDEO_STREAM_HIGH = 0,
        
        /** @cn
         * 1: 视频小流。
         */
        REMOTE_VIDEO_STREAM_LOW = 1,
    }

    
    /** @cn [onRecordAudioFrame]{@link agora.onRecordAudioFrame}  或  [onPlaybackAudioFrame]{@link agora.onPlaybackAudioFrame}  
     * 回调中返回的音频数据的使用模式
     */
    export enum RAW_AUDIO_FRAME_OP_MODE_TYPE {
        
        /** @cn
         * 0: 只读模式，用户仅从  [AudioFrame]{@link agora.AudioFrame}  获取原始数据，不作任何修改。例如: 若用户通过 Agora SDK 采集数据，自己进行 
         * RTMP 推流，则可以选择该模式。
         */
        RAW_AUDIO_FRAME_OP_MODE_READ_ONLY = 0,
        
        /** @cn
         * 1: 只写模式，用户替换  [AudioFrame]{@link agora.AudioFrame}  中的数据以供 SDK 编码传输。例如: 若用户自行采集数据，可选择该模式。
         */
        RAW_AUDIO_FRAME_OP_MODE_WRITE_ONLY = 1,
        
        /** @cn
         * 2: 读写模式, 用户从  [AudioFrame]{@link agora.AudioFrame}  获取并修改数据、修改，并返回给 SDK 进行编码传输。例如: 若用户自己有音效
         * 处理模块，且想要根据实际需要对数据进行前处理(例如变声)，则可以选择该模式。
         */
        RAW_AUDIO_FRAME_OP_MODE_READ_WRITE = 2,
    }

    
    /** @cn
     * 用于旁路推流的输出音频的采样率。
     */
    export enum AUDIO_SAMPLE_RATE_TYPE {
        
        /** @cn
         * 32000: 32 kHz
         */
        AUDIO_SAMPLE_RATE_32000 = 32000,
        
        /** @cn
         * 44100: 44.1 kHz
         */
        AUDIO_SAMPLE_RATE_44100 = 44100,
        
        /** @cn
         * 48000: 48 kHz
         */
        AUDIO_SAMPLE_RATE_48000 = 48000,
    }

    
    /** @cn
     * @ignore
     * 用于旁路推流的输出视频的编解码规格。
     */
    export enum VIDEO_CODEC_PROFILE_TYPE {
        
        /** @cn
         * 66: Baseline 级别的视频编码规格，一般用于低阶或需要额外容错的应用，比如视频通话、手机视频等。
         */
        VIDEO_CODEC_PROFILE_BASELINE = 66,
        
        /** @cn
         * 77: Main 级别的视频编码规格，一般用于主流消费类电子产品，如 mp4、便携的视频播放器、PSP 和 iPad 等。
         */
        VIDEO_CODEC_PROFILE_MAIN = 77,
        
        /** @cn
         * 100: （默认）High 级别的视频编码规格，一般用于广播及视频碟片存储，高清电视。
         */
        VIDEO_CODEC_PROFILE_HIGH = 100,
    }

    
    /** @cn
     * @ignore
     * 视频编码格式
     */
    export enum VIDEO_CODEC_TYPE {
        
        /** @cn
         * 标准 VP8
         */
        VIDEO_CODEC_VP8 = 1,
        
        /** @cn
         * 标准 H264
         */
        VIDEO_CODEC_H264 = 2,
        
        /** @cn
         * 增强 VP8
         */
        VIDEO_CODEC_EVP = 3,
        
        /** @cn
         * 增强 H264
         */
        VIDEO_CODEC_E264 = 4,
    }

    
    /** @cn
     * 语音音效均衡波段的中心频率。
     */
    export enum AUDIO_EQUALIZATION_BAND_FREQUENCY {
        
        /** @cn
         * 0: 31 Hz
         */
        AUDIO_EQUALIZATION_BAND_31 = 0,
        
        /** @cn
         * 1: 62 Hz
         */
        AUDIO_EQUALIZATION_BAND_62 = 1,
        
        /** @cn
         * 2: 125 Hz
         */
        AUDIO_EQUALIZATION_BAND_125 = 2,
        
        /** @cn
         * 3: 250 Hz
         */
        AUDIO_EQUALIZATION_BAND_250 = 3,
        
        /** @cn
         * 4: 500 Hz
         */
        AUDIO_EQUALIZATION_BAND_500 = 4,
        
        /** @cn
         * 5: 1 kHz
         */
        AUDIO_EQUALIZATION_BAND_1K = 5,
        
        /** @cn
         * 6: 2 kHz
         */
        AUDIO_EQUALIZATION_BAND_2K = 6,
        
        /** @cn
         * 7: 4 kHz
         */
        AUDIO_EQUALIZATION_BAND_4K = 7,
        
        /** @cn
         * 8: 8 kHz
         */
        AUDIO_EQUALIZATION_BAND_8K = 8,
        
        /** @cn
         * 9: 16 kHz
         */
        AUDIO_EQUALIZATION_BAND_16K = 9,
    }

    
    /** @cn
     * 各混响音效 Key 所对应的值。
     */
    export enum AUDIO_REVERB_TYPE {
        
        /** @cn
         * 0: 取值范围 [-20,10]，单位为 dB, 原始声音强度，即所谓的 dry signal。
         */
        AUDIO_REVERB_DRY_LEVEL = 0, // (dB, [-20,10]), the level of the dry signal
        
        /** @cn
         * 1: 取值范围 [-20,10]，单位为 dB, 早期反射信号强度，即所谓的 wet signal。
         */
        AUDIO_REVERB_WET_LEVEL = 1, // (dB, [-20,10]), the level of the early reflection signal (wet signal)
        
        /** @cn
         * 2: 所需混响效果的房间尺寸，一般房间越大，混响越强，取值范围 [0,100]。
         */
        AUDIO_REVERB_ROOM_SIZE = 2, // ([0,100]), the room size of the reflection
        
        /** @cn
         * 3: 取值范围 [0,200]，单位为毫秒, wet signal 的初始延迟长度，以毫秒为单位。
         */
        AUDIO_REVERB_WET_DELAY = 3, // (ms, [0,200]), the length of the initial delay of the wet signal in ms
        
        /** @cn
         * 4: 取值范围 [0,100], 混响持续的强度。
         */
        AUDIO_REVERB_STRENGTH = 4, // ([0,100]), the strength of the reverberation
    }

    
    /** @cn
     * 预设的语音变声效果。
     */
    export enum VOICE_CHANGER_PRESET {
        
        /** @cn
         * 原声，即关闭语音变声。
         */
        VOICE_CHANGER_OFF = 0x00000000, //Turn off the voice changer
        
        /** @cn
         * 变声：老男人。
         */
        VOICE_CHANGER_OLDMAN = 0x00000001,
        
        /** @cn
         * 变声：小男孩。
         */
        VOICE_CHANGER_BABYBOY = 0x00000002,
        
        /** @cn
         * 变声：小女孩。
         */
        VOICE_CHANGER_BABYGIRL = 0x00000003,
        
        /** @cn
         * 变声：猪八戒。
         */
        VOICE_CHANGER_ZHUBAJIE = 0x00000004,
        
        /** @cn
         * 变声：空灵。
         */
        VOICE_CHANGER_ETHEREAL = 0x00000005,
        
        /** @cn
         * 变声：绿巨人。
         */
        VOICE_CHANGER_HULK = 0x00000006,
        
        /** @cn
         * 美音：浑厚。
         */
        VOICE_BEAUTY_VIGOROUS = 0x00100001,//7,
        
        /** @cn
         * 美音：低沉。
         */
        VOICE_BEAUTY_DEEP = 0x00100002,
        
        /** @cn
         * 美音：圆润。
         */
        VOICE_BEAUTY_MELLOW = 0x00100003,
        
        /** @cn
         * 美音：假音。
         */
        VOICE_BEAUTY_FALSETTO = 0x00100004,
        
        /** @cn
         * 美音：饱满。
         */
        VOICE_BEAUTY_FULL = 0x00100005,
        
        /** @cn
         * 美音：清澈。
         */
        VOICE_BEAUTY_CLEAR = 0x00100006,
        
        /** @cn
         * 美音：高亢。
         */
        VOICE_BEAUTY_RESOUNDING = 0x00100007,
        
        /** @cn
         * 美音：嘹亮。
         */
        VOICE_BEAUTY_RINGING = 0x00100008,
        
        /** @cn
         * 美音：空旷。
         */
        VOICE_BEAUTY_SPACIAL = 0x00100009,
        
        /** @cn
         * 语聊美声：磁性（男）。此枚举为男声定制化效果，不适用于女声。若女声使用此音效设置，则音频可能会产生失真。
         */
        GENERAL_BEAUTY_VOICE_MALE_MAGNETIC = 0x00200001,
        
        /** @cn
         * 语聊美声：清新（女）。此枚举为女声定制化效果，不适用于男声。若男声使用此音效设置，则音频可能会产生失真。
         */
        GENERAL_BEAUTY_VOICE_FEMALE_FRESH = 0x00200002,
        
        /** @cn
         * 语聊美声：活力（女）。此枚举为女声定制化效果，不适用于男声。若男声使用此音效设置，则音频可能会产生失真。
         */
        GENERAL_BEAUTY_VOICE_FEMALE_VITALITY = 0x00200003
    }

    
    /** @cn
     * 预设的语音混响效果
     */
    export enum AUDIO_REVERB_PRESET {
        
        /** @cn
         * 原声，即关闭本地语音混响。
         */
        AUDIO_REVERB_OFF = 0x00000000, // Turn off audio reverb
        
        /** @cn
         * KTV（增强版）。
         */
        AUDIO_REVERB_FX_KTV = 0x00100001,
        
        /** @cn
         * 演唱会（增强版）。
         */
        AUDIO_REVERB_FX_VOCAL_CONCERT = 0x00100002,
        
        /** @cn
         * 大叔。
         */
        AUDIO_REVERB_FX_UNCLE = 0x00100003,
        
        /** @cn
         * 小姐姐。
         */
        AUDIO_REVERB_FX_SISTER = 0x00100004,
        
        /** @cn
         * 录音棚（增强版）。
         */
        AUDIO_REVERB_FX_STUDIO = 0x00100005,
        
        /** @cn
         * 流行（增强版）。
         */
        AUDIO_REVERB_FX_POPULAR = 0x00100006,
        
        /** @cn
         * R&B（增强版）。
         */
        AUDIO_REVERB_FX_RNB = 0x00100007,
        
        /** @cn
         * 留声机。
         */
        AUDIO_REVERB_FX_PHONOGRAPH = 0x00100008,
        
        /** @cn
         * 流行。
         */
        AUDIO_REVERB_POPULAR = 0x00000001,
        
        /** @cn
         * R&B。
         */
        AUDIO_REVERB_RNB = 0x00000002,
        
        /** @cn
         * 摇滚。
         */
        AUDIO_REVERB_ROCK = 0x00000003,
        
        /** @cn
         * 嘻哈。
         */
        AUDIO_REVERB_HIPHOP = 0x00000004,
        
        /** @cn
         * 演唱会。
         */
        AUDIO_REVERB_VOCAL_CONCERT = 0x00000005,
        
        /** @cn
         * KTV。
         */
        AUDIO_REVERB_KTV = 0x00000006,
        
        /** @cn
         * 录音棚。
         */
        AUDIO_REVERB_STUDIO = 0x00000007,
        
        /** @cn
         * 虚拟立体声。虚拟立体声是指将单声道的音轨渲染出立体声的效果，使频道内所有用户听到有空间感的声音
         * 效果。为达到更好的虚拟立体声效果，Agora 推荐在调用该方法前将 `setAudioProfile` 的 `profile` 参
         * 数设置为 `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO(5)`。
         */
        AUDIO_VIRTUAL_STEREO = 0x00200001
    }

    
    /** @cn
     * 用于旁路推流的输出音频的编解码规格，默认为 LC-AAC。
     */
    export enum AUDIO_CODEC_PROFILE_TYPE {
        
        /** @cn
         * 0: LC-AAC 规格，表示基本音频编码规格。
         */
        AUDIO_CODEC_PROFILE_LC_AAC = 0,
        
        /** @cn
         * 1: HE-AAC 规格，表示高效音频编码规格。
         */
        AUDIO_CODEC_PROFILE_HE_AAC = 1,
    }

    
    /** @cn
     * 远端音频流状态
     */
    export enum REMOTE_AUDIO_STATE {
        
        /** @cn
         * 0: 远端音频流默认初始状态。在
         * [REMOTE_AUDIO_REASON_LOCAL_MUTED]{@link agora.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_LOCAL_MUTED} (3)、
         * [REMOTE_AUDIO_REASON_REMOTE_MUTED]{@link agora.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_REMOTE_MUTED} (5) 或
         * [REMOTE_AUDIO_REASON_REMOTE_OFFLINE]{@link agora.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_REMOTE_OFFLINE} (7) 的情况下，会报告该状态。
         */
        REMOTE_AUDIO_STATE_STOPPED = 0,  // Default state, audio is started or remote user disabled/muted audio stream
        
        /** @cn
         * 1: 本地用户已接收远端音频首包。
         */
        REMOTE_AUDIO_STATE_STARTING = 1,  // The first audio frame packet has been received
        
        /** @cn
         * 2: 远端音频流正在解码，正常播放。在
         * [REMOTE_AUDIO_REASON_NETWORK_RECOVERY]{@link agora.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_NETWORK_RECOVERY} (2)、
         * [REMOTE_AUDIO_REASON_LOCAL_UNMUTED]{@link agora.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_LOCAL_UNMUTED} (4) 或
         * [REMOTE_AUDIO_REASON_REMOTE_UNMUTED]{@link agora.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_REMOTE_UNMUTED} (6) 的情况下，会报告该状态。
         */
        REMOTE_AUDIO_STATE_DECODING = 2,  // The first remote audio frame has been decoded or fronzen state ends
        
        /** @cn
         * 3: 远端音频流卡顿。在 [REMOTE_AUDIO_REASON_NETWORK_CONGESTION]{@link agora.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_NETWORK_CONGESTION} (1)
         * 的情况下，会报告该状态。
         */
        REMOTE_AUDIO_STATE_FROZEN = 3,    // Remote audio is frozen, probably due to network issue
        
        /** @cn
         * 4: 远端音频流播放失败。在 [REMOTE_AUDIO_REASON_INTERNAL]{@link agora.REMOTE_AUDIO_STATE_REASON.REMOTE_AUDIO_REASON_INTERNAL} (0)
         * 的情况下，会报告该状态。
         */
        REMOTE_AUDIO_STATE_FAILED = 4,    // Remote audio play failed
    }

    
    /** @cn
     * 远端音频流状态改变的具体原因
     */
    export enum REMOTE_AUDIO_STATE_REASON {
        
        /** @cn
         * 0: 内部原因。
         */
        REMOTE_AUDIO_REASON_INTERNAL = 0,
        
        /** @cn
         * 1: 网络阻塞。
         */
        REMOTE_AUDIO_REASON_NETWORK_CONGESTION = 1,
        
        /** @cn
         * 2: 网络恢复正常。
         */
        REMOTE_AUDIO_REASON_NETWORK_RECOVERY = 2,
        
        /** @cn
         * 3: 本地用户停止接收远端音频流或本地用户禁用音频模块。
         */
        REMOTE_AUDIO_REASON_LOCAL_MUTED = 3,
        
        /** @cn
         * 4: 本地用户恢复接收远端音频流或本地用户启用音频模块。
         */
        REMOTE_AUDIO_REASON_LOCAL_UNMUTED = 4,
        
        /** @cn
         * 5: 远端用户停止发送音频流或远端用户禁用音频模块。
         */
        REMOTE_AUDIO_REASON_REMOTE_MUTED = 5,
        
        /** @cn
         * 6: 远端用户恢复发送音频流或远端用户启用音频模块。
         */
        REMOTE_AUDIO_REASON_REMOTE_UNMUTED = 6,
        
        /** @cn
         * 7: 远端用户离开频道。
         */
        REMOTE_AUDIO_REASON_REMOTE_OFFLINE = 7,
    }

    
    /** @cn
     * @ignore
     * 远端视频流状态。
     */
    export enum REMOTE_VIDEO_STATE {
        
        /** @cn
         * 0: 远端视频默认初始状态。在 [REMOTE_VIDEO_STATE_REASON_LOCAL_MUTED]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_LOCAL_MUTED} (3)、
         * [REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED} (5) 或
         * [REMOTE_VIDEO_STATE_REASON_REMOTE_OFFLINE]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_REMOTE_OFFLINE} (7) 的情况下，会报告该状态。
         */
        REMOTE_VIDEO_STATE_STOPPED = 0,

        
        /** @cn
         * 1: 本地用户已接收远端视频首包。
         */
        REMOTE_VIDEO_STATE_STARTING = 1,

        
        /** @cn
         * 2: 远端视频流正在解码，正常播放。在
         * [REMOTE_VIDEO_STATE_REASON_NETWORK_RECOVERY]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_NETWORK_RECOVERY} (2)、
         * [REMOTE_VIDEO_STATE_REASON_LOCAL_UNMUTED]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_LOCAL_UNMUTED} (4)、
         * [REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED} (6) 或
         * [REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK_RECOVERY]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK_RECOVERY} (9) 的情况下，
         * 会报告该状态。
         */
        REMOTE_VIDEO_STATE_DECODING = 2,

        
        /** @cn
         * 3: 远端视频流卡顿。在
         * [REMOTE_VIDEO_STATE_REASON_NETWORK_CONGESTION]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_NETWORK_CONGESTION} (1) 或
         * [REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK} (8) 的情况下，会报告该状态。
         */
        REMOTE_VIDEO_STATE_FROZEN = 3,

        
        /** @cn
         * 4: 远端视频流播放失败。在
         * [REMOTE_VIDEO_STATE_REASON_INTERNAL]{@link agora.REMOTE_VIDEO_STATE_REASON.REMOTE_VIDEO_STATE_REASON_INTERNAL} (0) 的情况下，会报告该状态。
         */
        REMOTE_VIDEO_STATE_FAILED = 4
    }

    
    /** @cn
     * 发布状态。
     */
    export enum STREAM_PUBLISH_STATE {
        
        /** @cn
         * 0: 加入频道后的初始发布状态。
         */
        PUB_STATE_IDLE = 0,
        
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
        
        /** @cn
         * 2: 正在发布。
         */
        PUB_STATE_PUBLISHING = 2,
        
        /** @cn
         * 3: 发布成功。
         */
        PUB_STATE_PUBLISHED = 3
    }

    
    /** @cn
     * 订阅状态。
     */
    export enum STREAM_SUBSCRIBE_STATE {
        
        /** @cn
         * 0: 加入频道后的初始订阅状态。
         */
        SUB_STATE_IDLE = 0,
        
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
        
        /** @cn
         * 2: 正在订阅。
         */
        SUB_STATE_SUBSCRIBING = 2,
        
        /** @cn
         * 3: 收到了远端流，订阅成功。
         */
        SUB_STATE_SUBSCRIBED = 3
    }

    
    /** @cn
     * @ignore
     * 远端视频流状态切换原因。
     */
    export enum REMOTE_VIDEO_STATE_REASON {
        
        /** @cn
         * 0: 内部原因。
         */
        REMOTE_VIDEO_STATE_REASON_INTERNAL = 0,

        
        /** @cn
         * 1: 网络阻塞。
         */
        REMOTE_VIDEO_STATE_REASON_NETWORK_CONGESTION = 1,

        
        /** @cn
         * 2: 网络恢复正常。
         */
        REMOTE_VIDEO_STATE_REASON_NETWORK_RECOVERY = 2,

        
        /** @cn
         * 3: 本地用户停止接收远端视频流或本地用户禁用视频模块。
         */
        REMOTE_VIDEO_STATE_REASON_LOCAL_MUTED = 3,

        
        /** @cn
         * 4: 本地用户恢复接收远端视频流或本地用户启动视频模块。
         */
        REMOTE_VIDEO_STATE_REASON_LOCAL_UNMUTED = 4,

        
        /** @cn
         * 5: 远端用户停止发送视频流或远端用户禁用视频模块。
         */
        REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED = 5,

        
        /** @cn
         * 6: 远端用户恢复发送视频流或远端用户启用视频模块。
         */
        REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED = 6,

        
        /** @cn
         * 7: 远端用户离开频道。
         */
        REMOTE_VIDEO_STATE_REASON_REMOTE_OFFLINE = 7,

        
        /** @cn
         * 8: 弱网情况下，远端音视频流回退为音频流。
         */
        REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK = 8,

        
        /** @cn
         * 9: 网络情况改善时，远端音频流恢复为音视频流。
         */
        REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK_RECOVERY = 9
    }

    
    /** @cn
     * @ignore
     * 视频帧率。
     */
    export enum FRAME_RATE {
        
        /** @cn
         * 1: 1 fps
         */
        FRAME_RATE_FPS_1 = 1,
        
        /** @cn
         * 7: 7 fps
         */
        FRAME_RATE_FPS_7 = 7,
        
        /** @cn
         * 10: 10 fps
         */
        FRAME_RATE_FPS_10 = 10,
        
        /** @cn
         * 15: 15 fps
         */
        FRAME_RATE_FPS_15 = 15,
        
        /** @cn
         * 24: 24 fps
         */
        FRAME_RATE_FPS_24 = 24,
        
        /** @cn
         * 30: 30 fps
         */
        FRAME_RATE_FPS_30 = 30,
        
        /** ce
         * n60: 60 fps 仅适用于 WINDOWS 和 macOS 平台
         */
        FRAME_RATE_FPS_60 = 60,
    }

    
    /** @cn
     * @ignore
     * 视频编码的方向模式。
     */
    export enum ORIENTATION_MODE {
        
        /** @cn
         * 0: （默认）该模式下 SDK 输出的视频方向与采集到的视频方向一致。接收端会根据收到的视频旋转信息对视频进行旋转。该模式适用于接收端可以调整视频方向的场景。
         * - 如果采集的视频是横屏模式，则输出的视频也是横屏模式；
         * - 如果采集的视频是竖屏模式，则输出的视频也是竖屏模式。
         */
        ORIENTATION_MODE_ADAPTIVE = 0,
        
        /** @cn
         * 1: 该模式下 SDK 固定输出风景（横屏）模式的视频。如果采集到的视频是竖屏模式，则视频编码器会对其进行裁剪。该模式适用于当接收端无法
         * 调整视频方向时，如使用旁路推流场景下。
         */
        ORIENTATION_MODE_FIXED_LANDSCAPE = 1,
        
        /** @cn
         * 2: 该模式下 SDK 固定输出人像（竖屏）模式的视频，如果采集到的视频是横屏模式，则视频编码器会对其进行裁剪。该模式适用于当接收端无法
         * 调整视频方向时，如使用旁路推流场景下。
         */
        ORIENTATION_MODE_FIXED_PORTRAIT = 2,
    }

    
    /** @cn
     * @ignore
     * 带宽受限时的视频编码降级偏好
     */
    export enum DEGRADATION_PREFERENCE {
        
        /** @cn
         * （默认）降低编码帧率以保证视频质量
         */
        MAINTAIN_QUALITY = 0,
        
        /** @cn
         * 降低视频质量以保证编码帧率
         */
        MAINTAIN_FRAMERATE = 1,
        
        /** @cn
         * 预留参数，暂不支持
         */
        MAINTAIN_BALANCED = 2,
    }

    
    /** @cn
     * @ignore
     * 音视频流回退处理选项。
     */
    export enum STREAM_FALLBACK_OPTIONS {
        
        /** @cn
         * 0: 上行/下行网络较弱时，不对音视频流作回退处理，但不能保证音视频流的质量。
         */
        STREAM_FALLBACK_OPTION_DISABLED = 0,
        
        /** @cn
         * 1: 在下行网络条件较差时只接收视频小流（低分辨率、低码率视频流）。该选项只对  
         * [setRemoteSubscribeFallbackOption]{@link agora.setRemoteSubscribeFallbackOption}  有效，对  
         * [setLocalPublishFallbackOption]{@link agora.setLocalPublishFallbackOption}  方法无效。
         */
        STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW =1,
        
        /** @cn
         * 2: 上行/下行网络较弱时，先尝试只接收视频小流（低分辨率、低码率视频流）；如果网络环境无法显示视频，则再回退到只接收远端订阅的音频流。
         */
        STREAM_FALLBACK_OPTION_AUDIO_ONLY = 2,
    }

    
    /** @cn
     * @ignore
     * 摄像头采集偏好。
    */
    export enum CAPTURER_OUTPUT_PREFERENCE {
        
        /** @cn
         * （默认）自动调整采集参数。SDK 根据实际的采集设备性能及网络情况，选择合适的摄像头输出参数，在设备性能及视频预览质量之间，维持平衡。
         */
        CAPTURER_OUTPUT_PREFERENCE_AUTO = 0,
        
        /** @cn
         * 优先保证设备性能。SDK 根据用户在  [setVideoEncoderConfiguration]{@link agora.setVideoEncoderConfiguration}  
         * 中设置编码器的分辨率和帧率，选择最接近的摄像头输出参数，从而保证设备性能。在这种情况下，预览质量接近于编码器的输出质量。
         */
        CAPTURER_OUTPUT_PREFERENCE_PERFORMANCE = 1,
        
        /** @cn
         * 优先保证视频预览质量。SDK选择较高的摄像头输出参数，从而提高预览视频的质量。在这种情况下，会消耗更多的 CPU 及内存做视频前处理。
         */
        CAPTURER_OUTPUT_PREFERENCE_PREVIEW = 2,
    }

    
    /** @cn
     * 远端用户的需求优先级。如果将某个用户的优先级设为高，那么发给这个用户的音视频流的优先级就会高于其他用户。
     */
    export enum PRIORITY_TYPE {
        
        /** @cn
         * 用户需求优先级为高。
         */
        PRIORITY_HIGH = 50,
        
        /** @cn
         * （默认）用户需求优先级为正常。
         */
        PRIORITY_NORMAL = 100,
    }

    
    /** @cn
     * 网络连接状态。
     */
    export enum CONNECTION_STATE_TYPE {
        
        /** @cn
         * 1: 网络连接断开。
         * 该状态表示 SDK 处于:
         * - 调用  [joinChannel]{@link agora.joinChannel}  加入频道前的初始化阶段;
         * - 或调用  [leaveChannel]{@link agora.leaveChannel}  后的离开频道阶段。
         */
        CONNECTION_STATE_DISCONNECTED = 1,
        
        /** @cn
         * 2: 建立网络连接中。
         * 该状态表示 SDK 在调用  [joinChannel]{@link agora.joinChannel}  后正在与指定的频道建立连接。
         * - 如果成功加入频道，App 会收到  [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged}  回调，
         * 通知当前网络状态变成 [CONNECTION_STATE_CONNECTED]{@link agora.CONNECTION_STATE_TYPE.CONNECTION_STATE_CONNECTED} 。
         * - 建立连接后，SDK 还会初始化媒体，一切就绪后会回调  [onJoinChannelSuccess]{@link AgoraRtcEvents.onJoinChannelSuccess}  。
         */
        CONNECTION_STATE_CONNECTING = 2,
        
        /** @cn
         * 3: 网络已连接。
         * 该状态表示用户已经加入频道，可以在频道内发布或订阅媒体流。
         * 如果因网络断开或切换而导致 SDK 与频道的连接中断，SDK 会自动重连，此时应用程序会收到：
         * -  [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged}  回调，通知当前网络状态变成 
         * [CONNECTION_STATE_RECONNECTING]{@link agora.CONNECTION_STATE_TYPE.CONNECTION_STATE_RECONNECTING} 。
         * - 同时会收到  [onConnectionInterrupted]{@link AgoraRtcEvents.onConnectionInterrupted}  回调（已废弃）。
         */
        CONNECTION_STATE_CONNECTED = 3,
        
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
        
        /** @cn
         * 5: 网络连接失败。
         * 该状态表示 SDK 已不再尝试重新加入频道，用户必须要调用  [leaveChannel]{@link agora.leaveChannel}  离开频道。
         * - 如果用户还想重新加入频道，则需要再次调用  [joinChannel]{@link agora.joinChannel}  。
         * - 如果 SDK 因服务器端使用 RESTful API 禁止加入频道，则应用程序会收到  [onConnectionBanned]{@link AgoraRtcEvents.onConnectionBanned}  
         * 回调（已废弃）和  [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged}  回调。
         */
        CONNECTION_STATE_FAILED = 5,
    }

    
    /** @cn
     * 引起网络连接状态发生改变的原因。
     */
    export enum CONNECTION_CHANGED_REASON_TYPE {
        
        /** @cn
         * 0: 建立网络连接中。
         */
        CONNECTION_CHANGED_CONNECTING = 0,
        
        /** @cn
         * 1: 成功加入频道。
         */
        CONNECTION_CHANGED_JOIN_SUCCESS = 1,
        
        /** @cn
         * 2: 网络连接中断。 
         */
        CONNECTION_CHANGED_INTERRUPTED = 2,
        
        /** @cn
         * 3: 网络连接被服务器禁止。
         */
        CONNECTION_CHANGED_BANNED_BY_SERVER = 3,
        
        /** @cn
         * 4: 加入频道失败。SDK 在尝试加入频道 20 分钟后还是没能加入频道，会返回该状态，并停止尝试重连。
         */
        CONNECTION_CHANGED_JOIN_FAILED = 4,
        
        /** @cn
         * 5: 离开频道。
         */
        CONNECTION_CHANGED_LEAVE_CHANNEL = 5,
        
        /** @cn
         * 6: 不是有效的 APP ID。请更换有效的 APP ID 重新加入频道。 
         */
        CONNECTION_CHANGED_INVALID_APP_ID = 6,
        
        /** @cn
         * 7: 不是有效的频道名。请更换有效的频道名重新加入频道。 
         */
        CONNECTION_CHANGED_INVALID_CHANNEL_NAME = 7,
        
        /** @cn
         * 8: 生成的 Token 无效。一般有以下原因：
         * - 在控制台上启用了 App Certificate，但加入频道未使用 Token。当启用了 App Certificate，必须使用 Token。
         * - 在调用  [joinChannel]{@link agora.joinChannel}  加入频道时指定的 uid 与生成 Token 时传入的 uid 不一致。
         */
        CONNECTION_CHANGED_INVALID_TOKEN = 8,
        
        /** @cn
         * 9: 当前使用的 Token 过期，不再有效，需要重新在你的服务端申请生成 Token。 
         */
        CONNECTION_CHANGED_TOKEN_EXPIRED = 9,
        
        /** @cn
         * 10: 此用户被服务器禁止。 
         */
        CONNECTION_CHANGED_REJECTED_BY_SERVER = 10,
        
        /** @cn
         * 11: 由于设置了代理服务器，SDK 尝试重连。 
         */
        CONNECTION_CHANGED_SETTING_PROXY_SERVER = 11,
        
        /** @cn
         * 12: 更新 Token 引起网络连接状态改变。 
         */
        CONNECTION_CHANGED_RENEW_TOKEN = 12,
        
        /** @cn
         * 13: 客户端 IP 地址变更，可能是由于网络类型，或网络运营商的 IP 或端口发生改变引起。
         */
        CONNECTION_CHANGED_CLIENT_IP_ADDRESS_CHANGED = 13,
        
        /** @cn
         * 14: SDK 和服务器连接保活超时，进入自动重连状态 
         * [CONNECTION_STATE_RECONNECTING]{@link agora.CONNECTION_STATE_TYPE.CONNECTION_STATE_RECONNECTING}。
         */
        CONNECTION_CHANGED_KEEP_ALIVE_TIMEOUT = 14,
    }

    
    /** @cn
     * 网络连接类型
     */
    export enum NETWORK_TYPE {
        
        /** @cn
         * -1: 网络连接类型未知。 
         */
        NETWORK_TYPE_UNKNOWN = -1,
        
        /** @cn
         * 0: 网络连接已断开。
         */
        NETWORK_TYPE_DISCONNECTED = 0,
        
        /** @cn
         * 1: 网络类型为 LAN。
         */
        NETWORK_TYPE_LAN = 1,
        
        /** @cn
         * 2: 网络类型为 Wi-Fi(包含热点）。
         */
        NETWORK_TYPE_WIFI = 2,
        
        /** @cn
         * 3: 网络类型为 2G 移动网络。
         */
        NETWORK_TYPE_MOBILE_2G = 3,
        
        /** @cn
         * 4: 网络类型为 3G 移动网络。
         */
        NETWORK_TYPE_MOBILE_3G = 4,
        
        /** @cn
         * 5: 网络类型为 4G 移动网络。
         */
        NETWORK_TYPE_MOBILE_4G = 5,
    }

    
    /** @cn
     * Last mile 质量探测结果的状态。
     */
    export enum LASTMILE_PROBE_RESULT_STATE {
        
        /** @cn
         * 1: 表示本次 last mile 质量探测的结果是完整的。
         */
        LASTMILE_PROBE_RESULT_COMPLETE = 1,
        
        /** @cn
         * 2: 表示本次 last mile 质量探测未进行带宽预测，因此结果不完整。一个可能的原因是测试资源暂时受限。
         */
        LASTMILE_PROBE_RESULT_INCOMPLETE_NO_BWE = 2,
        
        /** @cn
         * 3: 未进行 last mile 质量探测。一个可能的原因是网络连接中断。
         */
        LASTMILE_PROBE_RESULT_UNAVAILABLE = 3
    }

    
    /** @cn
     * 语音路由
     */
    export enum AUDIO_ROUTE_TYPE {
        
        /** @cn
         * 使用默认的语音路由
         */
        AUDIO_ROUTE_DEFAULT = -1,
        
        /** @cn
         * 使用耳机为语音路由
         */
        AUDIO_ROUTE_HEADSET = 0,
        
        /** @cn
         * 使用听筒为语音路由
         */
        AUDIO_ROUTE_EARPIECE = 1,
        
        /** @cn
         * 使用不带麦的耳机为语音路由
         */
        AUDIO_ROUTE_HEADSET_NO_MIC = 2,
        
        /** @cn
         * 使用手机的扬声器为语音路由
         */
        AUDIO_ROUTE_SPEAKERPHONE = 3,
        
        /** @cn
         * 使用外接的扬声器为语音路由
         */
        AUDIO_ROUTE_LOUDSPEAKER = 4,
        
        /** @cn
         * 使用蓝牙耳机为语音路由
         */
        AUDIO_ROUTE_BLUETOOTH = 5,
        
        /** @cn
         * 使用 USB 外围设备为语音路由（仅适用于 macOS）
         */
        AUDIO_ROUTE_USB = 6,
        
        /** @cn
         * 使用 HDMI 外围设备为语音路由（仅适用于 macOS）
         */
        AUDIO_ROUTE_HDMI = 7,
        
        /** @cn
         * 使用 DisplayPort 外围设备为语音路由（仅适用于 macOS）
         */
        AUDIO_ROUTE_DISPLAYPORT = 8,
        
        /** @cn
         * 使用 Apple AirPlay 为语音路由（仅适用于 macOS）
         */
        AUDIO_ROUTE_AIRPLAY = 9,
    }

    
    /** @cn
     * 音频会话控制权限
     * Agora SDK 对 Audio Session 的控制权限
     */
    export enum AUDIO_SESSION_OPERATION_RESTRICTION {
        
        /** @cn
         * 没有限制，SDK 可以完全控制 Audio Session 操作。
         */
        AUDIO_SESSION_OPERATION_RESTRICTION_NONE = 0,
        
        /** @cn
         * SDK 不能更改 Audio Session 的 category。
         */
        AUDIO_SESSION_OPERATION_RESTRICTION_SET_CATEGORY = 1,
        
        /** @cn
         * SDK 不能更改 Audio Session 的 category，mode，categoryOptions。
         */
        AUDIO_SESSION_OPERATION_RESTRICTION_CONFIGURE_SESSION = 1 << 1,
        
        /** @cn
         * 离开某个频道时，SDK 会保持 Audio Session 处于活动状态。
         */
        AUDIO_SESSION_OPERATION_RESTRICTION_DEACTIVATE_SESSION = 1 << 2,
        
        /** @cn
         * 限制 SDK 对 Audio Session 进行任何操作，SDK 将不能再对 Audio Session 进行任何配置。
         */
        AUDIO_SESSION_OPERATION_RESTRICTION_ALL = 1 << 7,
    }

    
    /** @cn
     * @ignore
     * 摄像头方向
     */
    export enum CAMERA_DIRECTION {
        
        /** @cn
         * 0: 后置摄像头
         */
        CAMERA_REAR = 0,
        
        /** @cn
         * 1: 前置摄像头
         */
        CAMERA_FRONT = 1,
    }

    
    /** @cn
     * @ignore
     * 自上次统计后本地视频质量的自适应情况（基于目标帧率和目标码率）。
     */
    export enum QUALITY_ADAPT_INDICATION {
        
        /** @cn
         * 本地视频质量不变。
         */
        ADAPT_NONE = 0,
        
        /** @cn
         * 因网络带宽增加，本地视频质量改善。
         */
        ADAPT_UP_BANDWIDTH = 1,
        
        /** @cn
         * 因网络带宽减少，本地视频质量变差。
         */
        ADAPT_DOWN_BANDWIDTH = 2,
    }

    
    /** @cn
     * 跨频道媒体流转发出错的错误码。
     */
    export enum CHANNEL_MEDIA_RELAY_ERROR {
        
        /** @cn
         * 0: 一切正常。
         */
        RELAY_OK = 0,
        
        /** @cn
         * 1: 服务器回应出错。
         */
        RELAY_ERROR_SERVER_ERROR_RESPONSE = 1,
        
        /** @cn
         * 2: 服务器无回应。你可以调用 [leaveChannel]{@link agora.leaveChannel}  方法离开频道。
         */
        RELAY_ERROR_SERVER_NO_RESPONSE = 2,
        
        /** @cn
         * 3: SDK 无法获取服务，可能是因为服务器资源有限导致。
         */
        RELAY_ERROR_NO_RESOURCE_AVAILABLE = 3,
        
        /** @cn
         * 4: 发起跨频道转发媒体流请求失败。
         */
        RELAY_ERROR_FAILED_JOIN_SRC = 4,
        
        /** @cn
         * 5: 接受跨频道转发媒体流请求失败。
         */
        RELAY_ERROR_FAILED_JOIN_DEST = 5,
        
        /** @cn
         * 6: 服务器接收跨频道转发媒体流失败。
         */
        RELAY_ERROR_FAILED_PACKET_RECEIVED_FROM_SRC = 6,
        
        /** @cn
         * 7: 服务器发送跨频道转发媒体流失败。
         */
        RELAY_ERROR_FAILED_PACKET_SENT_TO_DEST = 7,
        
        /** @cn
         * 8: SDK 因网络质量不佳与服务器断开。你可以调用
         *  [leaveChannel]{@link agora.leaveChannel}  方法离开当前频道。
         */
        RELAY_ERROR_SERVER_CONNECTION_LOST = 8,
        
        /** @cn
         * 9: 服务器内部出错。
         */
        RELAY_ERROR_INTERNAL_ERROR = 9,
        
        /** @cn
         * 10: 源频道的 Token 已过期。
         */
        RELAY_ERROR_SRC_TOKEN_EXPIRED = 10,
        
        /** @cn
         * 11: 目标频道的 Token 已过期。
         */
        RELAY_ERROR_DEST_TOKEN_EXPIRED = 11,
    }

    
    /** @cn
     * 跨频道媒体流转发事件码。
     */
    export enum CHANNEL_MEDIA_RELAY_EVENT {
        
        /** @cn
         * 0: 网络中断导致用户与服务器连接断开。
         */
        RELAY_EVENT_NETWORK_DISCONNECTED = 0,
        
        /** @cn
         * 1: 用户与服务器建立连接。
         */
        RELAY_EVENT_NETWORK_CONNECTED = 1,
        
        /** @cn
         * 2: 用户已加入源频道。
         */
        RELAY_EVENT_PACKET_JOINED_SRC_CHANNEL = 2,
        
        /** @cn
         * 3: 用户已加入目标频道。
         */
        RELAY_EVENT_PACKET_JOINED_DEST_CHANNEL = 3,
        
        /** @cn
         * 4: SDK 开始向目标频道发送数据包。
         */
        RELAY_EVENT_PACKET_SENT_TO_DEST_CHANNEL = 4,
        
        /** @cn
         * 5: 服务器收到了目标频道发送的视频流。
         */
        RELAY_EVENT_PACKET_RECEIVED_VIDEO_FROM_SRC = 5,
        
        /** @cn
         * 6: 服务器收到了目标频道发送的音频流。
         */
        RELAY_EVENT_PACKET_RECEIVED_AUDIO_FROM_SRC = 6,
        
        /** @cn
         * 7: 目标频道已更新。
         */
        RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL = 7,
        
        /** @cn
         * 8: 内部原因导致目标频道更新失败。
         */
        RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL_REFUSED = 8,
        
        /** @cn
         * 9: 目标频道未发生改变，即目标频道更新失败。
         */
        RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL_NOT_CHANGE = 9,
        
        /** @cn
         * 10: 目标频道名为 NULL。
         */
        RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL_IS_NULL = 10,
        
        /** @cn
         * 11: 视频属性已发送至服务器。
         */
        RELAY_EVENT_VIDEO_PROFILE_UPDATE = 11,
    }

    
    /** @cn
     * 跨频道媒体流转发状态码。
     */
    export enum CHANNEL_MEDIA_RELAY_STATE {
        
        /** @cn
         * 0: SDK 正在初始化。
         */
        RELAY_STATE_IDLE = 0,
        
        /** @cn
         * 1: SDK 尝试跨频道。
         */
        RELAY_STATE_CONNECTING = 1,
        
        /** @cn
         * 2: 源频道主播成功加入目标频道。
         */
        RELAY_STATE_RUNNING = 2,
        
        /** @cn
         * 3: 发生异常，详见 `code` 中提示的错误信息。
         */
        RELAY_STATE_FAILURE = 3,
    }

    
    /** @cn
     * @ignore
     * [setVideoEncoderConfiguration]{@link agora.setVideoEncoderConfiguration}  的标准码率。（推荐）标准码率模式。该模式下，
     * 视频在通信和直播场景下的码率有所不同：通信场景下，码率与基准码率一致；直播场景下，码率对照基准码率翻倍。
     */
    export const STANDARD_BITRATE = 0

    
    /** @cn
     * @ignore
     * [setVideoEncoderConfiguration]{@link agora.setVideoEncoderConfiguration}  的兼容码率。 适配码率模式。该模式下，
     * 视频在通信和直播场景下的码率均与基准码率一致。直播下如果选择该模式，视频帧率可能会低于设置的值。
     */
    export const COMPATIBLE_BITRATE = -1

    
    /** @cn
     * @ignore
     * 使用系统默认最低编码码率。
     */
    export const DEFAULT_MIN_BITRATE = -1

    
    /** @cn
     * @deprecated
     * 服务端转码推流的生命周期。
     */
    export enum RTMP_STREAM_LIFE_CYCLE_TYPE {
        
        /** @cn
         * @deprecated 跟频道生命周期绑定，即频道内所有主播离开，服务端转码推流会在 30 秒之后停止。
         */
        RTMP_STREAM_LIFE_CYCLE_BIND2CHANNEL = 1,
        
        /** @cn
         * @deprecated 跟启动服务端转码推流的主播生命周期绑定，即该主播离开，服务端转码推流会立即停止。
         */
        RTMP_STREAM_LIFE_CYCLE_BIND2OWNER = 2,
    }

    
    /** @cn
     * @ignore
     * 屏幕共享的内容类型
     */
    export enum VideoContentHint {
        
        /** @cn
         * （默认）无指定的内容类型。
         */
        CONTENT_HINT_NONE,
        
        /** @cn
         * 内容类型为动画。当共享的内容是视频、电影或视频游戏时，推荐选择该内容类型。
         */
        CONTENT_HINT_MOTION,
        
        /** @cn
         * 内容类型为细节。当共享的内容是图片或文字时，推荐选择该内容类型。
         */
        CONTENT_HINT_DETAILS
    }

    
    /** @cn
     * 访问区域。
     */
    export enum AREA_CODE {
        
        /** @cn
         * 中国大陆。
         */
        AREA_CODE_CN = (1 << 0),
        
        /** @cn
         * 北美区域。
         */
        AREA_CODE_NA = (1 << 1),
        
        /** @cn
         * 欧洲区域。
         */
        AREA_CODE_EUR = (1 << 2),
        
        /** @cn
         * 除中国大陆以外的亚洲区域。
         */
        AREA_CODE_AS = (1 << 3),
        
        /** @cn
         * 日本区域。
         */
        AREA_CODE_JAPAN = (1 << 4),
        
        /** @cn
         * 印度区域。
         */
        AREA_CODE_INDIA = (1 << 5),
        
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

    
    /** @cn
     * 内置加密模式。
     */
    export enum ENCRYPTION_MODE {
        
        /** @cn
         * 1:（默认）128 位 AES 加密，XTS 模式。
         */
        AES_128_XTS = 1,
        
        /** @cn
         * 2: 128 位 AES 加密，ECB 模式。
         */
        AES_128_ECB = 2,
        
        /** @cn
         * 3: 256 位 AES 加密，XTS 模式。
         */
        AES_256_XTS = 3,
        
        /** @cn
         * 4: 128 位 SM4 加密，ECB 模式。
         */
        SM4_128_ECB = 4,
        
        /** @cn
         * 枚举值边界。
         */
        MODE_END,
    }

    
    /** @cn
     * 错误代码
     * 错误代码意味着 SDK 遇到不可恢复的错误，需要应用程序干预，例如打开摄像头失败会返回错误，应用程序需要提示用户不能使用摄像头。
     */
    export enum ERROR_CODE_TYPE {
        
        /** @cn
         * 0: 没有错误。
         */
        ERR_OK = 0,
        //1~1000
        
        /** @cn
         * 1: 一般性的错误（没有明确归类的错误原因）。
         */
        ERR_FAILED = 1,
        
        /** @cn
         * 2: API 调用了无效的参数。例如指定的频道名含有非法字符。
         */
        ERR_INVALID_ARGUMENT = 2,
        
        /** @cn
         * 3: RTC 引擎初始化失败。处理方法：
         * - 检查音频设备状态。
         * - 检查程序集完整性。
         * - 尝试重新初始化 RTC 引擎。
         */
        ERR_NOT_READY = 3,
        
        /** @cn
         * 4: RTC 引擎当前状态不支持此项操作。
         */
        ERR_NOT_SUPPORTED = 4,
        
        /** @cn
         * 5: 调用被拒绝。
         */
        ERR_REFUSED = 5,
        
        /** @cn
         * 6: 传入的缓冲区大小不足以存放返回的数据。
         */
        ERR_BUFFER_TOO_SMALL = 6,
        
        /** @cn
         * 7: SDK 尚未初始化，就调用其 API。请确认在调用 API 之前已初始化 Agora  引擎。
         */
        ERR_NOT_INITIALIZED = 7,
        
        /** @cn
         * 9: 没有操作权限，请检查用户是否授予 app 音视频设备使用权限。
         */
        ERR_NO_PERMISSION = 9,
        
        /** @cn
         * 10: API 调用超时。有些 API 调用需要 SDK 返回结果，如果 SDK 处理事件过长，超过 10 秒没有返回，会出现此错误。
         */
        ERR_TIMEDOUT = 10,
        
        /** @cn
         * 11: 请求被取消。仅供 SDK 内部使用，不通过 API 或者回调事件返回给 App。
         */
        ERR_CANCELED = 11,
        
        /** @cn
         * 12: 调用频率太高。仅供 SDK 内部使用，不通过 API 或者回调事件返回给 App。
         */
        ERR_TOO_OFTEN = 12,
        
        /** @cn
         * 13: SDK 内部绑定到网络 Socket 失败。仅供 SDK 内部使用，不通过 API 或者回调事件返回给 App。
         */
        ERR_BIND_SOCKET = 13,
        
        /** @cn
         * 14: 网络不可用。仅供 SDK 内部使用，不通过 API 或者回调事件返回给 App。
         */
        ERR_NET_DOWN = 14,
        
        /** @cn
         * 15: 没有网络缓冲区可用。仅供 SDK 内部使用，不通过 API 或者回调事件返回给 App。
         */
        ERR_NET_NOBUFS = 15,
        
        /** @cn
         * 17: 加入频道被拒绝。一般有以下原因：
         * - 用户已进入频道，再次调用加入频道的 API，例如  [joinChannel]{@link agora.joinChannel}  ，会返回此错误。停止调用该方法即可。
         * - 用户在调用  [startEchoTest]{@link agora.startEchoTest}  进行通话测试时，尝试加入频道。通话测试开始后，需要先调用  
         * [stopEchoTest]{@link agora.stopEchoTest}  结束当前测试，再加入频道。
         */
        ERR_JOIN_CHANNEL_REJECTED = 17,
        
        /** @cn
         * 18: 离开频道失败。一般有以下原因：
         * - 用户已离开频道，再次调用退出频道的 API，例如  [leaveChannel]{@link agora.leaveChannel}  ，会返回此错误。停止调用该方法即可。
         * - 用户尚未加入频道，就调用退出频道的 API。这种情况下无需额外操作。
         */
        ERR_LEAVE_CHANNEL_REJECTED = 18,
        
        /** @cn
         * 19: 资源已被占用，不能重复使用。
         */
        ERR_ALREADY_IN_USE = 19,
        
        /** @cn
         * 20: SDK 放弃请求，可能由于请求次数太多。
         */
        ERR_ABORTED = 20,
        
        /** @cn
         * 21: Windows 下特定的防火墙设置导致 SDK 初始化失败然后崩溃。
         */
        ERR_INIT_NET_ENGINE = 21,
        
        /** @cn
         * 22: 当用户 App 占用资源过多，或系统资源耗尽时，SDK 分配资源失败会返回该错误。
         */
        ERR_RESOURCE_LIMITED = 22,
        
        /** @cn
         * 101: 不是有效的 App ID。请更换有效的 App ID 重新加入频道。
         */
        ERR_INVALID_APP_ID = 101,
        
        /** @cn
         * 102: 不是有效的频道名。请更换有效的频道名重新加入频道。
         */
        ERR_INVALID_CHANNEL_NAME = 102,
        
        /** @cn
         * 103: 无法获取当前指定区域的服务器资源。请在调用  [initialize]{@link agora.initialize}  方法时尝试指定其他区域。
         */
        ERR_NO_SERVER_RESOURCES = 103,
        
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
        
        /** @cn
         * 111: 网络连接中断。仅适用于 Agora Web SDK。
         */
        ERR_CONNECTION_INTERRUPTED = 111, // only used in web sdk
        
        /** @cn
         * 112: 网络连接丢失。仅适用于 Agora Web SDK。
         */
        ERR_CONNECTION_LOST = 112, // only used in web sdk
        
        /** @cn
         * 113: 用户不在频道内。
         */
        ERR_NOT_IN_CHANNEL = 113,
        
        /** @cn
         * 114: 在调用  [sendStreamMessage]{@link agora.sendStreamMessage}  时，当发送的数据长度大于 1024 个字节时，会发生该错误。
         */
        ERR_SIZE_TOO_LARGE = 114,
        
        /** @cn
         * 115: 在调用  [sendStreamMessage]{@link agora.sendStreamMessage}  时，当发送的数据频率超过限制时（6 KB/s），会发生该错误。
         */
        ERR_BITRATE_LIMIT = 115,
        
        /** @cn
         * 116: 在调用  [createDataStream]{@link agora.createDataStream}  时，如果创建的数据通道过多（超过 5 个通道），会发生该错误。
         */
        ERR_TOO_MANY_DATA_STREAMS = 116,
        
        /** @cn
         * 117: 数据流发送超时。
         */
        ERR_STREAM_MESSAGE_TIMEOUT = 117,
        
        /** @cn
         * 119: 切换角色失败。请尝试重新加入频道。
         */
        ERR_SET_CLIENT_ROLE_NOT_AUTHORIZED = 119,
        
        /** @cn
         * 120: 解密失败，可能是用户加入频道用了不同的密码。请检查加入频道时的设置，或尝试重新加入频道。
         */
        ERR_DECRYPTION_FAILED = 120,
        
        /** @cn
         * 123: 此用户被服务器禁止。
         */
        ERR_CLIENT_IS_BANNED_BY_SERVER = 123,
        
        /** @cn
         * 124: 水印文件参数错误。
         */
        ERR_WATERMARK_PARAM = 124,
        
        /** @cn
         * 125: 水印文件路径错误。
         */
        ERR_WATERMARK_PATH = 125,
        
        /** @cn
         * 126: 水印文件格式错误。
         */
        ERR_WATERMARK_PNG = 126,
        
        /** @cn
         * 127: 水印文件信息错误。
         */
        ERR_WATERMARKR_INFO = 127,
        
        /** @cn
         * 128: 水印文件数据格式错误。
         */
        ERR_WATERMARK_ARGB = 128,
        
        /** @cn
         * 129: 水印文件读取错误。
         */
        ERR_WATERMARK_READ = 129,
        
        /** @cn
         * 130: 在调用  [addPublishStreamUrl]{@link agora.addPublishStreamUrl}  时，如果开启了加密，则会返回该错误(推流不支持加密流)。   
         */
        ERR_ENCRYPTED_STREAM_NOT_ALLOWED_PUBLISH = 130,
        
        /** @cn
         * 134: 无效的 User account.
         */
        ERR_INVALID_USER_ACCOUNT = 134,

        
        /** @cn
         * 151: CDN 相关错误。请调用  [removePublishStreamUrl]{@link agora.removePublishStreamUrl}  方法删除原来的推流地址，然后调用  
         * [addPublishStreamUrl]{@link agora.addPublishStreamUrl}  方法重新推流到新地址。
         */
        ERR_PUBLISH_STREAM_CDN_ERROR = 151,
        
        /** @cn
         * 152: 单个主播的推流地址数目达到上限 10。请删掉一些不用的推流地址再增加推流地址。
         */
        ERR_PUBLISH_STREAM_NUM_REACH_LIMIT = 152,
        
        /** @cn
         * 153: 操作不属于主播自己的流，如更新其他主播的流参数、停止其他主播的流。请检查 App 逻辑。
         */
        ERR_PUBLISH_STREAM_NOT_AUTHORIZED = 153,
        
        /** @cn
         * 154: 推流服务器出现错误。请调用  [addPublishStreamUrl]{@link agora.addPublishStreamUrl}  重新推流     */
            ERR_PUBLISH_STREAM_INTERNAL_SERVER_ERROR = 154,
        
        /** @cn
         * 155: 服务器无法找到数据流。
         */
        ERR_PUBLISH_STREAM_NOT_FOUND = 155,
        
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
        
        /** @cn
         * 1001: 加载媒体引擎失败。
         */
        ERR_LOAD_MEDIA_ENGINE = 1001,
        
        /** @cn
         * 1002: 启动媒体引擎开始通话失败。请尝试重新进入频道。
         */
        ERR_START_CALL = 1002,
        
        /** @cn
         * @deprecated
         * 1003: 从 v2.4.1 起废弃。请改用  [onLocalVideoStateChanged]{@link AgoraRtcEvents.onLocalVideoStateChanged} 回调中的 
         * `LOCAL_VIDEO_STREAM_ERROR_CAPTURE_FAILURE(4)`。
         * 启动摄像头失败，请检查摄像头是否被其他应用占用，或者尝试重新进入频道。
         */
        ERR_START_CAMERA = 1003,
        
        /** @cn
         * 1004: 启动视频渲染模块失败。
         */
        ERR_START_VIDEO_RENDER = 1004,
        
        /** @cn
         * 1005: 音频设备模块：音频设备出现错误（未明确指明为何种错误）。请检查音频设备是否被其他应用占用，或者尝试重新进入频道。
         */
        ERR_ADM_GENERAL_ERROR = 1005,
        
        /** @cn
         * 1006: 音频设备模块：使用 Java 资源出现错误。
         */
        ERR_ADM_JAVA_RESOURCE = 1006,
        
        /** @cn
         * 1007: 音频设备模块：设置的采样频率出现错误。
         */
        ERR_ADM_SAMPLE_RATE = 1007,
        
        /** @cn
         * 1008: 音频设备模块：初始化播放设备出现错误。请检查播放设备是否被其他应用占用，或者尝试重新进入频道。
         */
        ERR_ADM_INIT_PLAYOUT = 1008,
        
        /** @cn
         * 1009: 音频设备模块：启动播放设备出现错误。请检查播放设备是否正常，或者尝试重新进入频道。
         */
        ERR_ADM_START_PLAYOUT = 1009,
        
        /** @cn
         * 1010: 音频设备模块：停止播放设备出现错误。
         */
        ERR_ADM_STOP_PLAYOUT = 1010,
        
        /** @cn
         * 1011: 音频设备模块：初始化录音设备时出现错误。请检查录音设备是否正常，或者尝试重新进入频道。
         */
        ERR_ADM_INIT_RECORDING = 1011,
        
        /** @cn
         * 1012: 音频设备模块：启动录音设备出现错误。请检查录音设备是否正常，或者尝试重新进入频道。
         */
        ERR_ADM_START_RECORDING = 1012,
        
        /** @cn
         * 1013: 音频设备模块：停止录音设备出现错误。
         */
        ERR_ADM_STOP_RECORDING = 1013,
        
        /** @cn
         * 1015: 音频设备模块：运行时播放出现错误。请检查播放设备是否正常，或者尝试重新进入频道。
         */
        ERR_ADM_RUNTIME_PLAYOUT_ERROR = 1015,
        
        /** @cn
         * 1017: 音频设备模块：运行时录音错误。请检查录音设备是否正常，或者尝试重新进入频道。
         */
        ERR_ADM_RUNTIME_RECORDING_ERROR = 1017,
        
        /** @cn
         * 1018: 音频设备模块：录音失败。
         */
        ERR_ADM_RECORD_AUDIO_FAILED = 1018,
        
        /** @cn
         * 1022: 音频设备模块：初始化 Loopback 设备错误。
        */
        ERR_ADM_INIT_LOOPBACK = 1022,
        
        /** @cn
         * 1023: 音频设备模块：启动 Loopback 设备错误。
        */
        ERR_ADM_START_LOOPBACK = 1023,
        
        /** @cn
         * 1027: 音频设备模块：没有录音权限。请检查是否已经打开权限允许录音。
         */
        ERR_ADM_NO_PERMISSION = 1027,
        
        /** @cn
         * 1033: 音频设备模块：录制设备被占用。
         */
        ERR_ADM_RECORD_AUDIO_IS_ACTIVE = 1033,
        
        /** @cn
         * 1101: 音频设备模块：严重异常。
         */
        ERR_ADM_ANDROID_JNI_JAVA_RESOURCE = 1101,
        
        /** @cn
         * 1108: 音频设备模块：录制频率低于 50，常见为 0，即采集未启动，建议检查录音权限。
         */
        ERR_ADM_ANDROID_JNI_NO_RECORD_FREQUENCY = 1108,
        
        /** @cn
         * 1109: 音频设备模块：播放频率低于 50，常见为 0，即播放未启动，建议检查是否 AudioTrack 实例过多。
         */
        ERR_ADM_ANDROID_JNI_NO_PLAYBACK_FREQUENCY = 1109,
        
        /** @cn
         * 1111: 音频设备模块：AudioRecord 启动失败，系统 ROM 报错，建议重启 App 或重启手机、检查录音权限。
         */
        ERR_ADM_ANDROID_JNI_JAVA_START_RECORD = 1111,
        
        /** @cn
         * 1112: 音频设备模块：AudioTrack 启动失败，系统 ROM 报错，建议重启 App 或重启手机、检查播放权限。
         */
        ERR_ADM_ANDROID_JNI_JAVA_START_PLAYBACK = 1112,
        
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
        
        /** @cn
         * 1201: 音频设备模块：当前设备不支持音频输入，可能的原因是 Audio Session 的 category 
         * 配置不对或音频输入设备被占用。建议把后台所有 App 杀掉，重新加入频道。
         */
        ERR_ADM_IOS_INPUT_NOT_AVAILABLE = 1201,
        
        /** @cn
         * 1206: 音频设备模块：Audio Session 无法被启动。
         */
        ERR_ADM_IOS_ACTIVATE_SESSION_FAIL = 1206,
        
        /** @cn
         * 1210: 音频设备模块：初始化音频设备出错。一般出错是因为音频设备的设置参数错误。
         */
        ERR_ADM_IOS_VPIO_INIT_FAIL = 1210,
        
        /** @cn
         * 1213: 音频设备模块：重新初始化音频设备出错。一般出错是因为音频设备的设置参数错误。
         */
        ERR_ADM_IOS_VPIO_REINIT_FAIL = 1213,
        
        /** @cn
         * 1214: 音频设备模块：重新启动 Audio Unit 出错。一般出错是因为 Audio Session 的 category 设置与 Audio Unit 的设置不兼容。
         */
        ERR_ADM_IOS_VPIO_RESTART_FAIL = 1214,
        /** @ignore */
        ERR_ADM_IOS_SET_RENDER_CALLBACK_FAIL = 1219,
        /** @deprecated */
        ERR_ADM_IOS_SESSION_SAMPLERATR_ZERO = 1221,
        
        /** @cn
         * 1301: 音频设备模块：音频驱动异常或者兼容性问题 解决方案：禁用并重新启用音频设备，或者重启机器。
         */
        ERR_ADM_WIN_CORE_INIT = 1301,
        
        /** @cn
         * 1303: 音频设备模块：音频驱动异常或者兼容性问题 解决方案：禁用并重新启用音频设备，或者重启机器。
         */
        ERR_ADM_WIN_CORE_INIT_RECORDING = 1303,
        
        /** @cn
         * 1306: 音频设备模块：音频驱动异常或者兼容性问题 解决方案：禁用并重新启用音频设备，或者重启机器。
         */
        ERR_ADM_WIN_CORE_INIT_PLAYOUT = 1306,
        
        /** @cn
         * 1307: 音频设备模块：无可用音频设备 解决方案：插入音频设备。
         */
        ERR_ADM_WIN_CORE_INIT_PLAYOUT_NULL = 1307,
        
        /** @cn
         * 1309: 音频设备模块：音频驱动异常或者兼容性问题 解决方案：禁用并重新启用音频设备，或者重启机器。
         */
        ERR_ADM_WIN_CORE_START_RECORDING = 1309,
        
        /** @cn
         * 1311: 音频设备模块：系统内存不足或者机器性能较差 解决方案：重启机器或者更换机器。
         */
        ERR_ADM_WIN_CORE_CREATE_REC_THREAD = 1311,
        
        /** @cn
         * 1314: 音频设备模块：音频驱动异常 解决方案：禁用并重新启用音频设备，或者重启机器，或者更新声卡驱动。
         */
        ERR_ADM_WIN_CORE_CAPTURE_NOT_STARTUP = 1314,
        
        /** @cn
         * 1319: 音频设备模块：系统内存不足或者机器性能较差 解决方案：重启机器或者更换机器。
         */
        ERR_ADM_WIN_CORE_CREATE_RENDER_THREAD = 1319,
        
        /** @cn
         * 1320: 音频设备模块：音频驱动异常 解决方案：禁用并重新启用音频设备，或者重启机器，或者更新声卡驱动。
         */
        ERR_ADM_WIN_CORE_RENDER_NOT_STARTUP = 1320,
        
        /** @cn
         * 1322: 音频设备模块：无可用音频采集设备。解决方案：插入音频设备。
         */
        ERR_ADM_WIN_CORE_NO_RECORDING_DEVICE = 1322,
        
        /** @cn
         * 1323: 音频设备模块：无可用音频播放设备。解决方案：插入音频设备。
         */
        ERR_ADM_WIN_CORE_NO_PLAYOUT_DEVICE = 1323,
        
        /** @cn
         * 1351: 音频设备模块：音频驱动异常或者兼容性问题 解决方案：禁用并重新启用音频设备，或者重启机器，或者更新声卡驱动。
         */
        ERR_ADM_WIN_WAVE_INIT = 1351,
        
        /** @cn
         * 1353: 音频设备模块：音频驱动异常 解决方案：禁用并重新启用音频设备，或者重启机器，或者更新声卡驱动。
         */
        ERR_ADM_WIN_WAVE_INIT_RECORDING = 1353,
        
        /** @cn
         * 1354: 音频设备模块：音频驱动异常 解决方案：禁用并重新启用音频设备，或者重启机器，或者更新声卡驱动。
         */
        ERR_ADM_WIN_WAVE_INIT_MICROPHONE = 1354,
        
        /** @cn
         * 1355: 音频设备模块：音频驱动异常 解决方案：禁用并重新启用音频设备，或者重启机器，或者更新声卡驱动。
         */
        ERR_ADM_WIN_WAVE_INIT_PLAYOUT = 1355,
        
        /** @cn
         * 1356: 音频设备模块：音频驱动异常 解决方案：禁用并重新启用音频设备，或者重启机器，或者更新声卡驱动。
         */
        ERR_ADM_WIN_WAVE_INIT_SPEAKER = 1356,
        
        /** @cn
         * 1357: 音频设备模块：音频驱动异常 解决方案：禁用并重新启用音频设备，或者重启机器，或者更新声卡驱动。
         */
        ERR_ADM_WIN_WAVE_START_RECORDING = 1357,
        
        /** @cn
         * 1358: 音频设备模块：音频驱动异常 解决方案：禁用并重新启用音频设备，或者重启机器，或者更新声卡驱动。
         */
        ERR_ADM_WIN_WAVE_START_PLAYOUT = 1358,
        
        /** @cn
         * 1359: 音频设备模块：无录制设备。请检查是否有可用的录放音设备或者录放音设备是否已经被其他应用占用。
         */
        ERR_ADM_NO_RECORDING_DEVICE = 1359,
        
        /** @cn
         * 1360: 音频设备模块：无播放设备。
         */
        ERR_ADM_NO_PLAYOUT_DEVICE = 1360,

        // VDM error code starts from 1500
        
        /** @cn
         * 1501: 视频设备模块：没有摄像头使用权限。请检查是否已经打开摄像头权限。
         */
        ERR_VDM_CAMERA_NOT_AUTHORIZED = 1501,

        // VDM error code starts from 1500
        
        /** @cn
         * @deprecated 1502: 视频设备模块：摄像头正在使用中。
         * 从 v2.4.1 起废弃。请改用  [onLocalVideoStateChanged]{@link AgoraRtcEvents.onLocalVideoStateChanged}  回调中的 
         * `LOCAL_VIDEO_STREAM_ERROR_DEVICE_BUSY(3)`。
         */
        ERR_VDM_WIN_DEVICE_IN_USE = 1502,

        // VCM error code starts from 1600
        
        /** @cn
         * 1600: 视频设备模块：未知错误。
         */
        ERR_VCM_UNKNOWN_ERROR = 1600,
        
        /** @cn
         * 1601: 视频设备模块：视频编码器初始化错误。该错误为严重错误，请尝试重新加入频道。
         */
        ERR_VCM_ENCODER_INIT_ERROR = 1601,
        
        /** @cn
         * 1602: 视频设备模块：视频编码器错误。该错误为严重错误，请尝试重新加入频道。
         */
        ERR_VCM_ENCODER_ENCODE_ERROR = 1602,
        
        /** @cn
         * 1603: 视频设备模块：视频编码器设置错误。
         */
        ERR_VCM_ENCODER_SET_ERROR = 1603,
    }

    
    /** @cn
     * 亮度明暗对比度。
     */
    export enum LIGHTENING_CONTRAST_LEVEL {
        
        /** @cn
         * 低对比度。
         */
        LIGHTENING_CONTRAST_LOW = 0,
        
        /** @cn
         * 正常对比度。
         */
        LIGHTENING_CONTRAST_NORMAL,
        
        /** @cn
         * 高对比度。
         */
        LIGHTENING_CONTRAST_HIGH
    }

    
    /** @cn
     * 日志过滤分级
     */
    export enum LOG_FILTER_TYPE {
        
        /** @cn
         * 0: 不输出日志信息。
         */
        LOG_FILTER_OFF = 0,
        
        /** @cn
         * 0x080f: 输出所有 API 日志信息。
         * 如果你想获取最完整的日志，可以将日志级别设为该等级。
         */
        LOG_FILTER_DEBUG = 0x080f,
        
        /** @cn
         * 0x000f: 输出 CRITICAL、ERROR、WARNING 和 INFO 级别的日志信息。
         * 我们推荐你将日志级别设为该等级。
         */
        LOG_FILTER_INFO = 0x000f,
        
        /** @cn
         * 0x000e: 输出 CRITICAL、ERROR 和 WARNING 级别的日志信息。
         */
        LOG_FILTER_WARN = 0x000e,
        
        /** @cn
         * 0x000c: 输出 CRITICAL 和 ERROR 级别的日志信息。
         */
        LOG_FILTER_ERROR = 0x000c,
        
        /** @cn
         * 0x0008: 输出 CRITICAL 级别的日志信息。
         */
        LOG_FILTER_CRITICAL = 0x0008,
        /** @ignore */
        LOG_FILTER_MASK = 0x80f,
    }

    

    /** @cn
     * @ignore
     * 观测器的 Metadata 类型。当前仅支持视频类型的 Metadata 。
     */
    export enum METADATA_TYPE {
        
        /** @cn
         * Metadata 类型未知
         */
        UNKNOWN_METADATA = -1,
        
        /** @cn
         * Metadata 类型为视频
         */
        VIDEO_METADATA = 0,
    }

    
    /** @cn
     * @ignore
     * 视频像素格式
     */
    export enum VIDEO_PIXEL_FORMAT {
        
        /** @cn
         * 0: 格式未知
         */
        VIDEO_PIXEL_UNKNOWN = 0,
        
        /** @cn
         * 1: I420 格式
         */
        VIDEO_PIXEL_I420 = 1,
        
        /** @cn
         * 2: BGRA 格式
         */
        VIDEO_PIXEL_BGRA = 2,
        
        /** @cn
         * 3: NV21 格式
         */
        VIDEO_PIXEL_NV21 = 3,
        
        /** @cn
         * 4: RGBA 格式
         */
        VIDEO_PIXEL_RGBA = 4,
        
        /** @cn
         * 5: IMC2 格式
         */
        VIDEO_PIXEL_IMC2 = 5,
        
        /** @cn
         * 7: ARGB 格式
         */
        VIDEO_PIXEL_ARGB = 7,
        
        /** @cn
         * 8: NV12 格式
         */
        VIDEO_PIXEL_NV12 = 8,
        
        /** @cn
         * 16: I422 格式
         */
        VIDEO_PIXEL_I422 = 16,
    }

    
    /** @cn
     * 警告代码
     * 警告代码意味着 SDK 遇到问题，但有可能恢复，警告代码仅起告知作用，一般情况下应用程序可以忽略警告代码。
     */
    export enum WARN_CODE_TYPE {
        
        /** @cn
         * 8: 指定的 view 无效，使用视频功能时需要指定 view，如果 view 尚未指定，则返回该警告。
         */
        WARN_INVALID_VIEW = 8,
        
        /** @cn
         * 16: 初始化视频功能失败。有可能是因视频资源被占用导致的。用户无法看到视频画面，但不影响语音通信。
         */
        WARN_INIT_VIDEO = 16,
        
        /** @cn
         * 20: 请求处于待定状态。一般是由于某个模块还没准备好，请求被延迟处理。
         */
        WARN_PENDING = 20,
        
        /** @cn
         * 103: 没有可用的频道资源。可能是因为服务端没法分配频道资源。
         */
        WARN_NO_AVAILABLE_CHANNEL = 103,
        
        /** @cn
         * 104: 查找频道超时。在加入频道时 SDK 先要查找指定的频道，出现该警告一般是因为网络太差，连接不到服务器。
         */
        WARN_LOOKUP_CHANNEL_TIMEOUT = 104,
        
        /** @cn
         * @deprecated
         * 105: 查找频道请求被服务器拒绝。服务器可能没有办法处理这个请求或请求是非法的。从 v2.4.1 起废弃。请改用  
         * [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged}  回调中的 CONNECTION_CHANGED_REJECTED_BY_SERVER(10)。
         */
        WARN_LOOKUP_CHANNEL_REJECTED = 105,
        
        /** @cn
         * 106: 打开频道超时。查找到指定频道后，SDK 接着打开该频道，超时一般是因为网络太差，连接不到服务器。
         */
        WARN_OPEN_CHANNEL_TIMEOUT = 106,
        
        /** @cn
         * 107: 打开频道请求被服务器拒绝。服务器可能没有办法处理该请求或该请求是非法的。
         */
        WARN_OPEN_CHANNEL_REJECTED = 107,

        // sdk: 100~1000
        
        /** @cn
         * 111: 切换直播视频超时。
         */
        WARN_SWITCH_LIVE_VIDEO_TIMEOUT = 111,
        
        /** @cn
         * 118: 直播场景下设置用户角色超时。
         */
        WARN_SET_CLIENT_ROLE_TIMEOUT = 118,
        
        /** @cn
         * 121: TICKET 非法，打开频道失败。
         */
        WARN_OPEN_CHANNEL_INVALID_TICKET = 121,
        
        /** @cn
         * 122: 尝试打开另一个服务器。
         */
        WARN_OPEN_CHANNEL_TRY_NEXT_VOS = 122,
        
        /** @cn
         * 131: 频道连接不可恢复。
         */
        WARN_CHANNEL_CONNECTION_UNRECOVERABLE = 131,
        
        /** @cn
         * 132: IP 已改变。
         */
        WARN_CHANNEL_CONNECTION_IP_CHANGED = 132,
        
        /** @cn
         * 133: 端口已改变。
         */
        WARN_CHANNEL_CONNECTION_PORT_CHANGED = 133,
        
        /** @cn
         * 701: 打开伴奏出错。
         */
        WARN_AUDIO_MIXING_OPEN_ERROR = 701,
        
        /** @cn
         * 1014: 音频设备模块：运行时播放设备出现警告。
         */
        WARN_ADM_RUNTIME_PLAYOUT_WARNING = 1014,
        
        /** @cn
         * 1016: 音频设备模块：运行时录音设备出现警告。
         */
        WARN_ADM_RUNTIME_RECORDING_WARNING = 1016,
        
        /** @cn
         * 1019: 音频设备模块：没有采集到有效的声音数据。
         */
        WARN_ADM_RECORD_AUDIO_SILENCE = 1019,
        
        /** @cn
         * 1020: 音频设备模块：播放频率异常，可能造成音频卡顿。该异常原因为系统 CPU 占用率高，建议结束其他可能占用 CPU 的 app。
         */
        WARN_ADM_PLAYOUT_MALFUNCTION = 1020,
        
         /** @cn
          * 1021: 音频设备模块：录制频率异常，可能造成音频卡顿。该异常原因为系统 CPU 占用率高，建议结束其他可能占用 CPU 的 app。
         */
        WARN_ADM_RECORD_MALFUNCTION = 1021,
        
        /** @cn
         * 1025: 播放或录制音频时被系统事件（如来电）干扰。
        */
        WARN_ADM_CALL_INTERRUPTION = 1025,
        
        /** @cn
         * 1029：在通话过程中，Audio Session 的 category 必须设置成 AVAudioSessionCategoryPlayAndRecord，agora 会监控这个属性值。
         * 当这个值被修改成其他值的时候会触发这个告警，并强制设置回 AVAudioSessionCategoryPlayAndRecord。
         */
        WARN_ADM_IOS_CATEGORY_NOT_PLAYANDRECORD = 1029,
        
        /** @cn
         * 1031: 音频设备模块：录到的声音太低。
         */
        WARN_ADM_RECORD_AUDIO_LOWLEVEL = 1031,
        
        /** @cn
         * 1032: 音频设备模块：播放的声音太低。
         */
        WARN_ADM_PLAYOUT_AUDIO_LOWLEVEL = 1032,
        
        /** @cn
         * 1033: 音频设备模块：录制设备被占用。
         */
        WARN_ADM_RECORD_AUDIO_IS_ACTIVE = 1033,
        
        /** @cn
         * 1040: 音频设备模块：音频驱动异常。解决方案：禁用并重新启用音频设备，或者重启机器，或者更新声卡驱动
         */
        WARN_ADM_WINDOWS_NO_DATA_READY_EVENT = 1040,
        
        /** @cn
         * 1042: 音频采集设备和播放设备不一致，可能引起回声，建议使用同一设备采集和播放音频。
         */
        WARN_ADM_INCONSISTENT_AUDIO_DEVICE = 1042,
        
        /** @cn
         * 1051: （仅通信场景）音频信号处理模块：录制音频时监测到啸叫。
         */
        WARN_APM_HOWLING = 1051,
        
        /** @cn
         * 1052: 音频设备模块：音频播放会卡顿。
         */
        WARN_ADM_GLITCH_STATE = 1052,
        
        /** @cn
         * 1053: 音频信号处理模块：检测到残余回声，该回声可能由系统线程调度不及时或信号溢出导致。
         */
        WARN_APM_RESIDUAL_ECHO = 1053,
        /** @ignore */
        WARN_ADM_WIN_CORE_NO_RECORDING_DEVICE = 1322,
        
        /** @cn
         * 1323: 音频设备模块：无可用音频播放设备。解决方案：插入音频设备
         */
        WARN_ADM_WIN_CORE_NO_PLAYOUT_DEVICE = 1323,
        
        /** @cn
         * 1324: 音频设备模块：音频采集释放有误。解决方案：禁用并重新启用音频设备，或者重启机器，或者更新声卡驱动。
         */
        WARN_ADM_WIN_CORE_IMPROPER_CAPTURE_RELEASE = 1324,
        
        /** @cn
         * 1610: 超分告警：远端用户的原始视频流的分辨率超出了可以应用超分辨率算法的要求。
         */
        WARN_SUPER_RESOLUTION_STREAM_OVER_LIMITATION = 1610,
        
        /** @cn
         * 1611: 超分告警：已指定一个远端用户使用超分辨率算法。
         */
        WARN_SUPER_RESOLUTION_USER_COUNT_OVER_LIMITATION = 1611,
        
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
    
    /** @cn
     * 上行或下行 Last mile 网络质量探测结果。
     */
    export interface LastmileProbeOneWayResult {
        
        /** @cn
         * 丢包率。
         */
        packetLossRate: number
        
        /** @cn
         * 网络抖动 (ms)。
         */
        jitter: number
        
        /** @cn
         * 可用网络带宽预估 (bps)。
         */
        availableBandwidth: number
    }

    
    /** @cn
     * 上行或下行 Last mile 网络质量探测结果。
     */
    export interface LastmileProbeResult {
        
        /** @cn
         * Last mile 质量探测结果的状态。详见: [LASTMILE_PROBE_RESULT_STATE]{@link agora.LASTMILE_PROBE_RESULT_STATE}。
         */
        state: LASTMILE_PROBE_RESULT_STATE
        
        /** @cn
         * 上行网络质量报告。详见: [LastmileProbeOneWayResult]{@link agora.LastmileProbeOneWayResult}。
         */
        uplinkReport: LastmileProbeOneWayResult
        
        /** @cn
         * 下行网络质量报告。详见: [LastmileProbeOneWayResult]{@link agora.LastmileProbeOneWayResult}。
         */
        downlinkReport: LastmileProbeOneWayResult
        
        /** @cn
         * 往返时延 (ms)。
         */
        rtt: number
    }

    
    /** @cn
     * Last mile 网络探测配置。
     */
    export interface LastmileProbeConfig {
        
        /** @cn
         * 是否探测上行网络。有些用户，如直播频道中的普通观众，不需要进行网络探测:
         * - true: 探测。
         * - false: 不探测。
         */
        probeUplink: boolean
        
        /** @cn
         * 是否探测下行网络。
         * - true: 探测。
         * - false: 不探测。
         */
        probeDownlink: boolean
        
        /** @cn
         * 用户期望的最高发送码率，单位为 bps，范围为 [100000, 5000000]。Agora 推荐参考  
         * [setVideoEncoderConfiguration]{@link agora.setVideoEncoderConfiguration}  中的码率值设置该参数的值。
         */
        expectedUplinkBitrate: number
        
        /** @cn
         * 用户期望的最高接收码率，单位为 bps，范围为 [100000, 5000000]。
         */
        expectedDownlinkBitrate: number
    }

    
    /** @cn
     * 以数组的形式返回每个说话者的用户 ID 和音量信息。
     */
    export interface AudioVolumeInfo {
        
        /** @cn
         * 用户 ID。
         * - 在本地用户的回调中，`uid` 为 `0`。
         * - 在远端用户的回调中，`uid` 为瞬时音量最高的远端用户（最多 3 位）的 ID。
         */
        uid: number
        
        /** @cn
         * 用户的音量，取值范围为 [0,255]。如果用户调用了 [startAudioMixing]{@link agora.startAudioMixing}，则 `volume` 为用户混音后的音量。
         */
        volume: number
        
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
        
        /** @cn
         * 用户所在频道的频道名称。
         */
        channelId: string
    }

    
    /** @cn
     * 通话相关的统计信息。
     */
    export interface RtcStats {
        
        /** @cn
         * 通话时长（秒）。
         */
        duration: number
        
        /** @cn
         * 发送字节数（bytes）。
         */
        txBytes: number
        
        /** @cn
         * 接收字节数（bytes）。
         */
        rxBytes: number
        
        /** @cn
         * 发送音频字节数（bytes），累计值。
         */
        txAudioBytes: number
        
        /** @cn
         * @ignore
         * 发送视频字节数（bytes），累计值。
         */
        txVideoBytes: number
        
        /** @cn
         * 接收音频字节数（bytes），累计值。
         */
        rxAudioBytes: number
        
        /** @cn
         * @ignore
         * 接收视频字节数（bytes），累计值。
         */
        rxVideoBytes: number
        
        /** @cn
         * 发送码率（Kbps）。
         */
        txKBitRate: number
        
        /** @cn
         * 接收码率（Kbps）。
         */
        rxKBitRate: number
        
        /** @cn
         * 音频接收码率 (Kbps）。
         */
        rxAudioKBitRate: number
        
        /** @cn
         * 音频包的发送码率 (Kbps）。
         */
        txAudioKBitRate: number
        
        /** @cn
         * @ignore
         * 视频接收码率 (Kbps）。
         */
        rxVideoKBitRate: number
        
        /** @cn
         * @ignore
         * 视频发送码率 (Kbps）。
         */
        txVideoKBitRate: number
        
        /** @cn
         * 客户端-接入服务器延时 (毫秒)。
         */
        lastmileDelay: number
        
        /** @cn
         * 弱网对抗前客户端到 Agora 边缘服务器的丢包率 (%)。
         */
        txPacketLossRate: number
        
        /** @cn
         * 弱网对抗前 Agora 边缘服务器下行发送到客户端的丢包率 (%)
         */
        rxPacketLossRate: number
        
        /** @cn
         * 当前频道内的用户人数。
         * - 通信场景下，当前频道内的用户人数。
         * - 直播场景下，
         *     - 如果本地用户为观众，为频道内的主播人数 + 1；
         *     - 如果本地用户为主播，为频道内的主播人数。
         */
        userCount: number
        
        /** @cn
         * 当前 App 的 CPU 使用率 (%)。
         */
        cpuAppUsage: number
        
        /** @cn
         * 当前系统的 CPU 使用率 (%)。在多核环境中，该成员指多核 CPU 的平均使用率。计算方式为 100 - 任务管理中显示的系统空闲进程 CPU（%）。
         */
        cpuTotalUsage: number
        
        /** @cn
         * 客户端到本地路由器的往返时延 (ms)
         * 
         * @note （仅 iOS）自 3.1.2 版本起，该参数默认不生效。详见 [FAQ](https://docs.agora.io/cn/faq/local_network_privacy)。
         * 如需启用该参数，请[提交工单](https://agora-ticket.agora.io/)联系声网技术支持。
         */
        gatewayRtt: number
        
        /** @cn
         * 当前 App 的内存占比 (%)
         * 
         * @note 该值仅作参考。受系统限制可能无法获取。
         */
        memoryAppUsageRatio: number
        
        /** @cn
         * 当前系统的内存占比 (%)
         * @note 该值仅作参考。受系统限制可能无法获取。
         */
        memoryTotalUsageRatio: number
        
        /** @cn
         * 当前 App 的内存大小 (KB)
         * @note 该值仅作参考。受系统限制可能无法获取。
         */
        memoryAppUsageInKbytes: number
    }

    
    /** @cn
     * @ignore
     * 本地视频流上传统计信息。
     */
    export interface LocalVideoStats {
        
        /** @cn
         * 实际发送码率 (Kbps)。
         *
         * @note
         * 不包含丢包后重传视频等的发送码率。
         */
        sentBitrate: number
        
        /** @cn
         * 实际发送帧率 (fps)。
         *
         * @note
         * 不包含丢包后重传视频等的发送帧率。
         */
        sentFrameRate: number
        
        /** @cn
         * 本地视频编码器的输出帧率，单位为 fps。
         */
        encoderOutputFrameRate: number
        
        /** @cn
         * 本地视频渲染器的输出帧率，单位为 fps
         */
        rendererOutputFrameRate: number
        
        /** @cn
         * 当前编码器的目标编码码率 (Kbps)，该码率为 SDK 根据当前网络状况预估的一个值。
         */
        targetBitrate: number
        
        /** @cn
         * 当前编码器的目标编码帧率 (fps)。
         */
        targetFrameRate: number
        
        /** @cn
         * 统计周期内本地视频质量（基于目标帧率和目标码率）的自适应情况。详见： [QUALITY_ADAPT_INDICATION]{@link agora.QUALITY_ADAPT_INDICATION} 。
         */
        qualityAdaptIndication: QUALITY_ADAPT_INDICATION
        
        /** @cn
         * 视频编码码率（Kbps）。
         *
         * @note
         * 不包含丢包后重传视频等的编码码率。
         */
        encodedBitrate: number
        
        /** @cn
         * 视频编码宽度（px）。
         */
        encodedFrameWidth: number
        
        /** @cn
         * 视频编码高度（px）。
         */
        encodedFrameHeight: number
        
        /** @cn
         * 视频发送的帧数，累计值。
         */
        encodedFrameCount: number
        
        /** @cn
         * 视频的编码类型：[VIDEO_CODEC_TYPE]{@link agora.VIDEO_CODEC_TYPE}。
         */
        codecType: VIDEO_CODEC_TYPE
        
        /** @cn
         * 弱网对抗前客户端到 Agora 边缘服务器的视频丢包率 (%)。
         */
        txPacketLossRate: number
        
        /** @cn
         * 本地视频采集帧率 (fps)。
         */
        captureFrameRate: number
    }

    
    /** @cn
     * @ignore
     * 远端视频流的统计信息。
     */
    export interface RemoteVideoStats {
        
        /** @cn
         * 远端用户 ID，指定是哪个用户的视频流。
         */
        uid: number
        
        /** @cn
         * @deprecated
         * 延时 (毫秒)。
         * 在有音画同步机制的音视频场景中，你可以参考 RemoteAudioStats 里的 `networkTransportDelay`
         * 和 `jitterBufferDelay` 成员的值，了解视频的延迟数据。
         */
        delay: number
        
        /** @cn
         * 视频流的宽度（像素）。
         */
        width: number
        
        /** @cn
         * 视频流的高度（像素）。
         */
        height: number
        
        /** @cn
         * （上次统计后）接收到的码率(Kbps)。
         */
        receivedBitrate: number
        
        /** @cn
         * 远端视频解码器的输出帧率，单位为 fps。
         */
        decoderOutputFrameRate: number
        
        /** @cn
         * 远端视频渲染器的输出帧率，单位为 fps。
         */
        rendererOutputFrameRate: number
        
        /** @cn
         * 远端视频在使用抗丢包技术之后的丢包率(%)。
         */
        packetLossRate: number
        
        /** @cn
         * 视频流类型，大流或小流。
         */
        rxStreamType: REMOTE_VIDEO_STREAM_TYPE
        
        /** @cn
         * 远端用户在加入频道后发生视频卡顿的累计时长（ms）。通话过程中，视频帧率设置不低于 5 fps 时，连续渲染的两帧视频之间间隔超过 500 ms，
         * 则记为一次视频卡顿。
         */
        totalFrozenTime: number
        
        /** @cn
         * 远端用户在加入频道后发生视频卡顿的累计时长占视频总有效时长的百分比 (%)。视频有效时长是指远端用户加入频道后视频未被停止发送或禁用的时长。
         */
        frozenRate: number
        
        /** @cn
         * 视频有效时长（毫秒），即远端用户/主播加入频道后，既没有停止发送视频流，也没有禁用视频模块的通话时长。
         */
        totalActiveTime: number
        
        /** @cn
         * 远端视频流的累计发布时长（毫秒）。
         */
        publishDuration: number
    }

    
    /** @cn
     * 本地音频统计数据
     */
    export interface LocalAudioStats {
        
        /** @cn
         * 声道数。
         */
        numChannels: number
        
        /** @cn
         * 发送的采样率，单位为 Hz。
         */
        sentSampleRate: number
        
        /** @cn
         * 发送码率的平均值，单位为 Kbps。
         */
        sentBitrate: number
        
        /** @cn
         * 弱网对抗前本端到 Agora 边缘服务器的音频丢包率 (%)。
         */
        txPacketLossRate: number
    }

    
    /** @cn
     * 远端用户的音频统计
     */
    export interface RemoteAudioStats {
        
        /** @cn
         * 用户 ID，指定是哪个用户/主播的音频流。
         */
        uid: number
        
        /** @cn
         * 远端用户发送的音频流质量：[QUALITY_TYPE]{@link agora.QUALITY_TYPE}。
         */
        quality: number
        
        /** @cn
         * 音频发送端到接收端的网络延迟（毫秒）
         */
        networkTransportDelay: number
        
        /** @cn
         * 接收端到网络抖动缓冲的网络延迟（毫秒）
         */
        jitterBufferDelay: number
        
        /** @cn
         * 统计周期内的远端音频流的丢帧率 (%)。
         */
        audioLossRate: number
        
        /** @cn
         * 声道数。
         */
        numChannels: number
        
        /** @cn
         * 统计周期内接收到的远端音频采样率。
         */
        receivedSampleRate: number
        
        /** @cn
         * 接收流在统计周期内的平均码率（Kbps）。
         */
        receivedBitrate: number
        
        /** @cn
         * 远端用户在加入频道后发生音频卡顿的累计时长（ms）。通话过程中，音频丢帧率达到 4% 即记为一次音频卡顿。
         */
        totalFrozenTime: number
        
        /** @cn
         * 远端用户在加入频道后发生音频卡顿的累计时长占音频总有效时长的百分比 (%)。音频有效时长是指远端用户加入频道后音频未被停止发送或禁用的时长。
         */
        frozenRate: number
        
        /** @cn
         * 音频有效时长（毫秒），即远端用户/主播加入频道后，既没有停止发送音频流，也没有禁用音频模块的通话时长。
         */
        totalActiveTime: number
        
        /** @cn
         * 远端音频流的累计发布时长（毫秒）。
         */
        publishDuration: number
    }

    
    /** @cn
     * @ignore
     * 视频尺寸。
     */
    export class VideoDimensions {
        
        /** @cn
         * 视频帧宽度 (pixel)。
         */
        width: number
        
        /** @cn
         * 视频帧高度 (pixel)。
         */
        height: number

        constructor(width: number = 640, height: number = 480) {
            this.width = width
            this.height = height
        }
    }

    
    /** @cn
     * @ignore
     * 视频编码器配置的属性。
     */
    export class VideoEncoderConfiguration {
        
        /** @cn
         * 视频编码的分辨率 (px)。
         * 视频编码的像素，用于衡量编码质量，以长 &times; 宽表示，默认值为 640 x 360。用户可以自行设置分辨率: 
         * [VideoDimensions]{@link agora.VideoDimensions}。
         */
        dimensions: VideoDimensions
        
        /** @cn
         * 视频编码的帧率: [FRAME_RATE]{@link agora.FRAME_RATE} 。默认值为 15。该值不建议大于 30.
         */
        frameRate: FRAME_RATE
        
        /** @cn
         * 视频的最小帧率。默认值为 -1。
         */
        minFrameRate: number
        
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
        
        /** @cn
         * 最低编码码率，单位为 Kbps。
         * SDK 会根据网络状况自动调整视频编码码率。将参数设为高于默认值可强制视频编码器输出高质量图片，但在网络状况不佳情况下可能导致网络丢包并影响视频播放的流畅度造成卡顿。因此如非对画质有特殊需求，声网建议不要修改该参数的值。
         * @note 该参数仅适用于直播场景。
         */
        minBitrate: number
        
        /** @cn
         * 视频编码的方向模式: [ORIENTATION_MODE]{@link agora.ORIENTATION_MODE} 。
         */
        orientationMode: ORIENTATION_MODE
        
        /** @cn
         * 带宽受限时，视频编码降级偏好: [DEGRADATION_PREFERENCE]{@link agora.DEGRADATION_PREFERENCE} 。
         */
        degradationPreference: DEGRADATION_PREFERENCE
        
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

    
    /** @cn
     * @ignore
     * TranscodingUser 用于管理参与旁路直播的音视频转码合图的用户。最多支持 17 人同时参与转码合图。
     */
    export class TranscodingUser {
        
        /** @cn
         * 旁路主播的用户 ID。
         */
        uid: number
        
        /** @cn
         * 左上角的横向偏移。
         */
        x: number
        
        /** @cn
         * 左上角的纵向偏移。
         */
        y: number
        
        /** @cn
         * 推流视频的总宽度，默认值 360，单位为像素。
         */
        width: number
        
        /** @cn
         * 推流视频的总高度，默认值 640，单位为像素。
         */
        height: number
        
        /** @cn
         * 视频帧图层编号。
         * - 0:（默认）表示该区域图像位于最下层，
         * - 100: 表示该区域图像位于最上层。
         * @note
         * - 如果取值小于 0 或大于 100，会返回错误 [ERR_INVALID_ARGUMENT]{@link agora.ERR_INVALID_ARGUMENT} 。
         * - 从 v3.1.2 开始，支持将 `zOrder` 设置为 0。
         */
        zOrder: number
        
        /** @cn
         * 直播视频上用户视频的透明度。
         * - 0: 该区域图像完全透明；
         * - 1:（默认）该区域图像完全不透明。
         */
        alpha: number
        
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

    
    /** @cn
     * @ignore
     * 图像属性。
     * 用于设置直播视频的水印和背景图片的属性。
     */
    export class RtcImage {
        
        /** @cn
         * 直播视频上图片的 HTTP/HTTPS 地址。字符长度不得超过 1024 字节。
         */
        url: string
        
        /** @cn
         * 水印或背景图片在视频帧左上角的横轴坐标。
         */
        x: number
        
        /** @cn
         * 水印或背景图片在视频帧左上角的纵轴坐标。
         */
        y: number
        
        /** @cn
         * 水印或背景图片在视频帧上的宽度。
         */
        width: number
        
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

    
    /** @cn
     * @ignore
     * LiveTranscoding 定义。
     */
    export class LiveTranscoding {
        
        /** @cn
         * 推流视频的总宽度，默认值 360，单位为像素。
         * - 如果推视频流，`width` 值不得低于 64，否则 Agora 会调整为 64。
         * - 如果推音频流，请将 `width` 和 `height` 设为 0。
         */
        width: number
        
        /** @cn
         * 推流视频的总高度，默认值 640，单位为像素。
         * - 如果推视频流，`height` 值不得低于 64，否则 Agora 会调整为 64。
         * - 如果推音频流，请将 `width` 和 `height` 设为 0。
         */
        height: number
        
        /** @cn
         * 用于旁路推流的输出视频的码率。 单位为 Kbps。 400 Kbps 为默认值。用户可以根据 Video Profile 参考表中的码率值进行设置；如果设置的码率超出合理
         * 范围，Agora 服务器会在合理区间内自动调整码率值。
         */
        videoBitrate: number
        
        /** @cn
         * 用于旁路推流的输出视频的帧率。取值范围是 (0,30]，单位为 fps。15 fps 为默认值。
         * @note Agora 会将所有高于 30 fps 的帧率统一设为 30 fps。
         */
        videoFramerate: number
        
        /** @cn
         * @deprecated
         * - true: 低延时，不保证画质；
         * - false:（默认值）高延时，保证画质。
         */
        lowLatency: boolean
        
        /** @cn
         * 用于旁路直播的输出视频的 GOP。单位为帧。默认值为 30 帧。
         */
        videoGop: number
        
        /** @cn
         * 用于旁路推流的输出视频的编码规格: [VIDEO_CODEC_PROFILE_TYPE]{@link agora.VIDEO_CODEC_PROFILE_TYPE} 。
         * @note 如果你将这个参数设为其他值，Agora 会将其设为默认值 100。
         */
        videoCodecProfile: VIDEO_CODEC_PROFILE_TYPE
        
        /** @cn
         * 用于旁路直播的输出视频的背景色，格式为 RGB 定义下的十六进制整数，不要带 # 号，如 0xFFB6C1 表示浅粉色。默认 0x000000，黑色。
         */
        backgroundColor: number
        
        /** @cn
         * 参与合图的用户数量，默认 0。
         */
        userCount: number
        
        /** @cn
         * TranscodingUser
         */
        transcodingUsers: TranscodingUser[]
        
        /** @cn
         * 预留参数：用户自定义的发送到旁路推流客户端的信息。用于填充 H.264/H.265 视频中 SEI 帧内容。长度限制 4096 字节。关于 SEI 的详细信息，
         * 详见 [SEI 帧相关问题](https://docs.agora.io/cn/faq/sei)。
         */
        transcodingExtraInfo: string
        
        /** @cn
         * @deprecated 
         * 发送给 CDN 客户端的 metadata。
         */
        metadata: string
        
        /** @cn
         * 用于旁路直播的输出视频上的水印图片。添加后所有旁路直播的观众都可以看到水印。水印图片的定义详见 [RtcImage]{@link agora.RtcImage}。必须为 PNG 格式。
         */
        watermark: RtcImage
        
        /** @cn
         * 用于旁路直播的输出视频上的背景图片。添加后所有旁路直播的观众都可以看到背景图片。背景图片的定义详见 [RtcImage]{@link agora.RtcImage}。
         */
        backgroundImage: RtcImage
        
        /** @cn
         * 自定义音频采样率: [AUDIO_SAMPLE_RATE_TYPE]{@link agora.AUDIO_SAMPLE_RATE_TYPE} 。
         */
        audioSampleRate: AUDIO_SAMPLE_RATE_TYPE
        
        /** @cn
         * 用于旁路推流的输出音频的码率。单位为 Kbps，默认值为 48，最大值为 128。
         */
        audioBitrate: number
        
        /** @cn
         * 用于旁路推流的输出音频的声道数，默认值为 1。取值范围为 [1,5] 中的整型，建议取 1 或 2：
         * - 1: 单声道（默认）
         * - 2: 双声道
         * - 3: 三声道
         * - 4: 四声道
         * - 5: 五声道
         */
        audioChannels: 1 | 2 | 3 | 4 | 5
        
        /** @cn
         * @ignore
         * 用于旁路推流的输出视频的编码规格: [AUDIO_CODEC_PROFILE_TYPE]{@link agora.AUDIO_CODEC_PROFILE_TYPE} 。
         */
        audioCodecProfile: AUDIO_CODEC_PROFILE_TYPE
        
        /** @cn
         * 转码推流的高级功能。详见 [LiveStreamAdvancedFeature]{@link agora.LiveStreamAdvancedFeature}。
         */
        advancedFeatures: LiveStreamAdvancedFeature

        
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

    
    /** @cn
     * 摄像头采集偏好设置
     */
    export class CameraCapturerConfiguration {
        
        /** @cn
         * 摄像头采集偏好，详见 [CAPTURER_OUTPUT_PREFERENCE]{@link agora.CAPTURER_OUTPUT_PREFERENCE}。
         */
        preference: CAPTURER_OUTPUT_PREFERENCE
        
        /** @cn
         * （仅适用于 Android 和 iOS 平台）摄像头方向，详见 [CAMERA_DIRECTION]{@link agora.CAMERA_DIRECTION}。
         */
        cameraDirection: CAMERA_DIRECTION

        constructor(preference: CAPTURER_OUTPUT_PREFERENCE, cameraDirection: CAMERA_DIRECTION) {
            this.preference = preference
            this.cameraDirection = cameraDirection
        }
    }

    
    /** @cn
     * InjectStreamConfig 定义。
     */
    export class InjectStreamConfig {
        
        /** @cn
         * 添加进入直播的外部视频源宽度。默认值为 0，即保留视频源原始宽度。
         */
        width: number
        
        /** @cn
         * 添加进入直播的外部视频源高度。默认值为 0，即保留视频源原始高度。
         */
        height: number
        
        /** @cn
         * 用于旁路直播的输出视频的 GOP。单位为帧。默认值为 30 帧。
         */
        videoGop: number
        
        /** @cn
         * 添加进入直播的外部视频源帧率。默认值为 15 fps。
         */
        videoFramerate: number
        
        /** @cn
         * 添加进入直播的外部视频源码率。默认设置为 400 Kbps。
         * @note 视频码率的设置与分辨率相关。如果设置的视频码率超出合理范围，SDK 会按照合理区间自动设置码率。
         */
        videoBitrate: number
        
        /** @cn
         * 添加进入直播的外部音频采样率。默认值为 48000。详见 [AUDIO_SAMPLE_RATE_TYPE]{@link agora.AUDIO_SAMPLE_RATE_TYPE} 。
         * @note 声网建议目前采用默认值，不要自行设置。
         */
        audioSampleRate: AUDIO_SAMPLE_RATE_TYPE
        
        /** @cn
         * 添加进入直播的外部音频码率。默认值为 48 Kbps。
         * @note 声网建议目前采用默认值，不要自行设置。
         */
        audioBitrate: number
        
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

    
    /** @cn
     * [ChannelMediaInfo]{@link agora.ChannelMediaInfo} 类定义。
     */
    export class ChannelMediaInfo {
        
        /** @cn
         * 频道名。
         */
        channelName: string
        
        /** @cn
         * 能加入频道的 Token。
         */
        token: string
        
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

    
    /** @cn
     * [ChannelMediaRelayConfiguration]{@link agora.ChannelMediaRelayConfiguration} 类定义。
     */
    export class ChannelMediaRelayConfiguration {
        
        /** @cn
         * 源频道信息指针 `ChannelMediaInfo`，包含如下成员：
         * - `channelName`：源频道名。默认值为 `NULL`，表示 SDK 填充当前的频道名。
         * - `uid`：标识源频道中的转发媒体流的 UID。默认值为 0，表示 SDK 随机分配一个 `uid`。请确保设为 0。
         * - `token`：能加入源频道的 `token`。由你在 `srcInfo` 中设置的 `channelName` 和 `uid` 生成。
         *   - 如未启用 App Certificate，可直接将该参数设为默认值 `NULL`，表示 SDK 填充 App ID。
         *   - 如已启用 App Certificate，则务必填入使用 `channelName` 和 `uid` 生成的 `token`，且其中的 `uid` 必须为 0。
         */
        srcInfo: ChannelMediaInfo
        
        /** @cn
         * 目标频道信息指针 `ChannelMediaInfo`，包含如下成员：
         * - `channelName`：目标频道的频道名。
         * - `uid`：标识目标频道中的转发媒体流的 UID。取值范围为 0 到（2<sup>32</sup>-1），请确保不要将该参数设为目标频道的主播的 UID，并与目标频道中的所有 UID 不同。默认值为 0，表示 SDK 随机分配一个 UID。
         * - `token`：能加入目标频道的 `token`。由你在 `destInfos` 中设置的 `channelName` 和 `uid` 生成。
         *   - 如未启用 App Certificate，可直接将该参数设为默认值 `NULL`，表示 SDK 填充 App ID。
         *   - 如已启用 App Certificate，则务必填入使用 `channelName` 和 `uid` 生成的 `token`。
         */
        destInfos: ChannelMediaInfo[]
        
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

    
    /** @cn
     * 待共享区域相对于整个屏幕或窗口的位置，如不填，则表示共享整个屏幕或窗口。
     */
    export class Rectangle {
        
        /** @cn
         * 左上角的横向偏移。
         */
        x: number
        
        /** @cn
         * 左上角的纵向偏移。
         */
        y: number
        
        /** @cn
         * 待共享区域的宽。
         */
        width: number
        
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

    
    /** @cn
     * @deprecated
     * 定义视图区域。
     */
    export class Rect {
        
        /** @cn
         * 视图上边对应的纵坐标
         */
        top: number
        
        /** @cn
         * 视图左边对应的横坐标
         */
        left: number
        
        /** @cn
         * 视图底边对应的纵坐标
         */
        bottom: number
        
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

    
    /** @cn
     * @ignore
     * 待添加的水印图片的设置选项。
     */
    export class WatermarkOptions {
        
        /** @cn
         * 是否将水印设为预览时本地可见：
         * - true：(默认) 预览时水印本地可见；
         * - false：预览时水印本地不可见。
         */
        visibleInPreview: boolean
        
        /** @cn
         * 视频编码模式为横屏时的水印坐标。详见 [Rectangle]{@link agora.Rectangle}。
         */
        positionInLandscapeMode: Rectangle
        
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

    
    /** @cn
     * @ignore
     * 屏幕共享的编码参数配置。
     */
    export class ScreenCaptureParameters {
        
        /** @cn
         * 屏幕共享视频发送的最大像素值。
         * 默认值为 1920 &times; 1080，即 2073600 像素。该像素值为计费标准。
         * 当共享的屏幕分辨率宽高比与该值设置不一致时，SDK 按如下策略进行编码。假设 dimensions 为 1920 &times; 1080：
         * - 如果屏幕分辨率小于 dimensions，如 1000 &times; 1000，SDK 直接按 1000 &times; 1000 进行编码。
         * - 如果屏幕分辨率大于 dimensions，如 2000 &times; 1500，SDK 按屏幕分辨率的宽高比，即 4：3，取 dimensions 以内的最大分辨率进行编码，
         * 即 1440 &times; 1080。
         */
        dimensions: VideoDimensions
        
        /** @cn
         * 共享视频的帧率，单位为 fps；默认值为 5，建议不要超过 15。
         */
        frameRate: number
        
        /** @cn
         * 共享视频的码率，单位为 Kbps；默认值为 0，表示 SDK 根据当前共享屏幕的分辨率计算出一个合理的值。
         */
        bitrate: number
        
        /** @cn
         * 是否采集鼠标用于屏幕共享
         * - true: （默认）采集鼠标
         * - false: 不采集鼠标
         */
        captureMouseCursor: boolean
        
        /** @cn
         * 调用  [startScreenCaptureByWindowId]{@link agora.startScreenCaptureByWindowId}  方法共享窗口时，是否将该窗口前置。
         * - true: 前置窗口。
         * - false:（默认）不前置窗口。
         */
        windowFocus: boolean
        
        /** @cn
         * 待屏蔽窗口的 ID 列表。
         * - 调用  [startScreenCaptureByScreenRect]{@link agora.startScreenCaptureByScreenRect}  开启屏幕共享时，
         * 你可以通过该参数屏蔽指定的窗口。
         * - 开启屏幕共享后，你可以在调用  [updateScreenCaptureParameters]{@link agora.updateScreenCaptureParameters}  更新屏幕共享的配置参数时，
         * 通过该参数动态屏蔽指定的窗口。
         */
        excludeWindowList: any[]
        
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

    
    /** @cn
     * @ignore
     * `VideoCanvas` 类的视频显示设置。
     */
    export class VideoCanvas {
        
        /** @cn
         * 视频显示窗口 (view)。
         */
        view: any
        
        /** @cn
         * 视频渲染模式，详见 [RENDER_MODE_TYPE]{@link agora.RENDER_MODE_TYPE}。
         */
        renderMode: number
        
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
        
        /** @cn
         * 用户 ID
         */
        uid: number
        /** @ignore */
        priv: any // private data (underlying video engine denotes it)
        
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

    
    /** @cn
     * @ignore
     * 美颜选项。
     */
    export class BeautyOptions {
        
        /** @cn
         * 亮度明暗对比度。
         */
        lighteningContrastLevel: LIGHTENING_CONTRAST_LEVEL
        
        /** @cn
         * 亮度，取值范围为 [0.0, 1.0]，其中 0.0 表示原始亮度。可用来实现美白等视觉效果。
         */
        lighteningLevel: number
        
        /** @cn
         * 平滑度，取值范围为 [0.0, 1.0]，其中 0.0 表示原始平滑等级。可用来实现祛痘、磨皮等视觉效果。
         */
        smoothnessLevel: number
        
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

    
    /** @cn
     * UserInfo 的定义。
     */
    export interface UserInfo {
        
        /** @cn
         * 用户 ID。
         */
        uid: number
        
        /** @cn
         * 用户 Account。
         */
        userAccount: string
    }

    
    /** @cn
     * 配置内置加密模式和密钥。
     */
    export class EncryptionConfig {
        
        /** @cn
         * 内置加密模式，默认为 `AES_128_XTS` 加密模式。详见 [ENCRYPTION_MODE]{@link agora.ENCRYPTION_MODE}
         */
        encryptionMode: ENCRYPTION_MODE
        
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

    
    /** @cn
     * 频道媒体设置选项。
     */
    export class ChannelMediaOptions {
        
        /** @cn
         * 设置加入频道时是否自动订阅音频流：
         * - true：（默认）订阅。
         * - false：不订阅。
         * 
         * 该成员功能与 [muteAllRemoteAudioStreams]{@link agora.muteAllRemoteAudioStreams} 相同。 加入频道后，你可以通过 
         * `muteAllRemoteAudioStreams` 方法重新设置是否订阅频道内的远端音频流。
         */
        autoSubscribeAudio: boolean
        
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

    
    /** @cn
     * [Metadata]{@link agora.Metadata} 定义。
     */
    export class Metadata {
        
        /** @cn
         * 用户 ID。
         * - 对于接收者：发送该 Metadata 的远端用户的 ID
         * - 对于发送人：请忽略。
         */
        uid: number
        
        /** @cn
         * 接收到的或发送的 Metadata 的缓存大小。
         */
        size: number
        
        /** @cn
         * 接收到的或发送的 Metadata 的缓存地址。
         */
        buffer: Uint8Array
        
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


/** @cn
 * `AgoraRtcEvents` 类用于向应用程序发送回调通知。
 */
declare class AgoraRtcEvents {
    
    /** @cn
     * 发生警告回调。
     * 该回调方法表示 SDK 运行时出现了（网络或媒体相关的）警告。通常情况下，SDK 上报的警告信息 App 可以忽略，SDK 会自动恢复。比如和服务器失去连接时，
     * SDK 可能会上报 [WARN_OPEN_CHANNEL_TIMEOUT]{@link agora.WARN_OPEN_CHANNEL_TIMEOUT} 警告，同时自动尝试重连。
     */
    onWarning:
        
        /** @cn
         * @param warn 警告代码： [WARN_CODE_TYPE]{@link agora.WARN_CODE_TYPE} 。
         * @param msg 警告描述。
         */
        (warn: agora.WARN_CODE_TYPE, msg: string) => void

    
    /** @cn
     * 发生错误回调。
     * 该回调方法表示 SDK 运行时出现了（网络或媒体相关的）错误。通常情况下，SDK 上报的错误意味着 SDK 无法自动恢复，需要 App 干预或提示用户。 
     * 比如启动通话失败时，SDK 会上报 [ERR_START_CALL]{@link agora.ERR_START_CALL} 错误。App 可以提示用户启动通话失败，并调用  
     * [leaveChannel]{@link agora.leaveChannel}  退出频道。
     */
    onError:
        
        /** @cn
         * @param err 错误代码： [ERROR_CODE_TYPE]{@link agora.ERROR_CODE_TYPE} 。
         * @param msg 错误描述。
         */
        (err: agora.ERROR_CODE_TYPE, msg: string) => void

    
    /** @cn
     * 加入频道回调。
     * 该回调方法表示该客户端成功加入了指定的频道。
     * channel ID 基于  [joinChannel]{@link agora.joinChannel}  中指定的 channel name 分配。如果调用 `joinChannel` 时并没有指定 user ID。
     * 服务器会自动分配一个。
     */
    onJoinChannelSuccess:
        
        /** @cn
         * @param channel 频道名。
         * @param  uid 用户 ID。如果  [joinChannel]{@link agora.joinChannel}  中指定了 uid，则此处返回该 ID；否则使用 Agora 服务器自动分配的 ID。
         * @param  elapsed 从  [joinChannel]{@link agora.joinChannel}  开始到发生此事件过去的时间（毫秒）。
         */
        (channel: string, uid: number, elapsed: number) => void

    
    /** @cn
     * 重新加入频道回调。
     * 有时候由于网络原因，客户端可能会和服务器失去连接，SDK 会进行自动重连，自动重连成功后触发此回调方法。
     */
    onRejoinChannelSuccess:
        
        /** @cn
         * @param channel 频道名。
         * @param uid 用户 ID。
         * @param elapsed 从开始重连到重连成功的时间（毫秒）。
         */
        (channel: string, uid: number, elapsed: number) => void

    
    /** @cn
     * 离开频道回调。
     * App 调用  [leaveChannel]{@link agora.leaveChannel}  方法时，SDK提示 App 离开频道成功。在该回调方法中，App 可以得到此次通话的总通话时长、
     * SDK 收发数据的流量等信息。App 通过该回调获取通话时长以及 SDK 接收到或发送的数据统计信息。
     */
    onLeaveChannel:
        
        /** @cn
         * @param stats 通话的统计数据: [RtcStats]{@link agora.RtcStats}。
         */
        (stats: agora.RtcStats) => void

    
    /** @cn
     * 直播场景下用户角色已切换回调。
     * 直播场景下，当用户切换角色时会触发此回调，即主播切换为观众时，或观众切换为主播时。
     * 该回调由本地用户在加入频道后调用  [setClientRole]{@link agora.setClientRole}  改变用户角色触发的。
     */
    onClientRoleChanged:
        
        /** @cn
         * @param oldRole 切换前的角色: [CLIENT_ROLE_TYPE]{@link agora.CLIENT_ROLE_TYPE} 。
         * @param newRole 切换后的角色: [CLIENT_ROLE_TYPE]{@link agora.CLIENT_ROLE_TYPE} 。
         */
        (oldRole: agora.CLIENT_ROLE_TYPE, newRole: agora.CLIENT_ROLE_TYPE) => void

    
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
        
        /** @cn
         * @param uid 新加入频道的远端用户/主播 ID。
         * @param elapsed 从本地用户调用  [joinChannel]{@link agora.joinChannel}  到该回调触发的延迟（毫秒)。
         */
        (uid: number, elapsed: number) => void

    
    /** @cn
     * 远端用户（通信场景）/主播（直播场景）离开当前频道回调。
     * 提示有远端用户/主播离开了频道（或掉线）。用户离开频道有两个原因，即正常离开和超时掉线：
     * - 正常离开的时候，远端用户/主播会发送类似“再见”的消息。接收此消息后，判断用户离开频道。
     * - 超时掉线的依据是，在一定时间内（直播场景稍有延时），
     * 用户没有收到对方的任何数据包，则判定为对方掉线。在网络较差的情况下，有可能会误报。
     * 我们建议使用 Agora 实时消息 SDK 来做可靠的掉线检测。
     */
    onUserOffline:
        
        /** @cn
         * @param uid 离线用户或主播的用户 ID。
         * @param reason 离线原因: [USER_OFFLINE_REASON_TYPE]{@link agora.USER_OFFLINE_REASON_TYPE} 。
         */
        (uid: number, reason: agora.USER_OFFLINE_REASON_TYPE) => void

    
    /** @cn
     * 通话前网络上下行 last mile 质量报告回调。
     * 该回调描述本地用户在加入频道前的 last mile 网络探测的结果，其中 last mile 是指设备到 Agora 边缘服务器的网络状态。
     * 在调用  [enableLastmileTest]{@link agora.enableLastmileTest}  之后，该回调函数每 2 秒触发一次。如果远端有多个用户/主播，该回调
     * 每 2 秒会被触发多次。
     */
    onLastmileQuality:
        
        /** @cn
         * @param quality 网络上下行质量，基于上下行网络的丢包率和抖动计算，探测结果主要反映上行网络的状态。
         * 详见: [QUALITY_TYPE]{@link agora.QUALITY_TYPE} 。
         */
        (quality: agora.QUALITY_TYPE) => void

    
    /** @cn
     * 通话前网络质量探测报告回调。
     * 通话前网络上下行 Last mile 质量探测报告回调。在调用  [startLastmileProbeTest]{@link agora.startLastmileProbeTest}  之后，
     * SDK 会在约 30 秒内返回该回调。
     */
    onLastmileProbeResult:
        
        /** @cn
         * @param result 上下行 Last mile 质量探测结果。 详见: [LastmileProbeResult]{@link agora.LastmileProbeResult}。
         */
        (result: agora.LastmileProbeResult) => void

    
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

    
    /** @cn
     * @deprecated
     * 连接已被服务器禁止回调。该回调已废弃，被  [onConnectionStateChanged]{@link AgoraRtcEvents.onConnectionStateChanged}  取代。
     * 当你被服务端禁掉连接的权限时，会触发该回调。
     */
    onConnectionBanned: () => void

    
    /** @cn
     * API 方法已执行回调。
     */
    onApiCallExecuted:
        
        /** @cn
         * @param err 当该方法调用失败时 SDK 返回的错误码。如果方法调用失败，会返回错误码 [ERROR_CODE_TYPE]{@link agora.ERROR_CODE_TYPE} 。
         * 如果该方法调用成功，SDK 将返回 0。
         * @param api SDK 执行的 API。
         * @param result SDK 调用 API 的调用结果。
         */
        (err: agora.ERROR_CODE_TYPE, api: string, result: string) => void

    
    /** @cn
     * Token 已过期回调。
     * 在调用  [joinChannel]{@link agora.joinChannel} , 时如果指定了 Token，由于 Token 具有一定的时效，在通话过程中 SDK 可能由于网络原因
     * 和服务器失去连接，重连时可能需要新的 Token。
     * 该回调通知 App 需要生成新的 Token，然后调用 `joinChannel`，使用新的 Token 重新加入频道。
     */
    onRequestToken: () => void

    
    /** @cn
     * Token 服务即将过期回调。
     * 在调用  [joinChannel]{@link agora.joinChannel}  时如果指定了 Token，由于 Token 具有一定的时效，在通话过程中如果 Token 即将失效，SDK 
     * 会提前 30 秒触发该回调，提醒 App 更新 Token。 当收到该回调时，用户需要重新在服务端生成新的 Token，然后调用 
     * [renewToken]{@link agora.renewToken}  将新生成的 Token 传给 SDK。
     */
    onTokenPrivilegeWillExpire:
        
        /** @cn
         * @param token 即将服务失效的 Token。
         */
        (token: string) => void

    
    /** @cn
     * @deprecated 远端声音质量回调。
     * 该方法已废弃。请改用  [onRemoteAudioStats]{@link AgoraRtcEvents.onRemoteAudioStats}  方法。
     * 该回调描述远端用户在通话中的音频质量，针对每个远端用户/主播每 2 秒触发一次。如果远端同时存在多个用户/主播，该回调每 2 秒会被触发多次。
     */
    onAudioQuality:
        
        /** @cn
         * @param uid 用户 ID，指定是谁发的音频流。
         * @param quality 语音质量，详见: [QUALITY_TYPE]{@link agora.QUALITY_TYPE} 。
         * @param delay 音频包从发送端到接收端的延迟（毫秒）。包括声音采样前处理、网络传输、网络抖动缓冲引起的延迟。
         * @param lost 音频包从发送端到接收端的丢包率 (%)。
         */
        (uid: number, quality: agora.QUALITY_TYPE, delay: number, lost: number) => void

    
    /** @cn
     * 当前通话统计回调。
     * SDK 定期向 App 报告当前通话的统计信息，每两秒触发一次。
     */
    onRtcStats:
        
        /** @cn
         * @param stats RTC 引擎统计数据: [RtcStats]{@link agora.RtcStats}。
         */
        (stats: agora.RtcStats) => void

    
    /** @cn
     * 通话中每个用户的网络上下行 last mile 质量报告回调。
     * 该回调描述每个用户在通话中的 last mile 网络状态，其中 last mile 是指设备到 Agora 边缘服务器的网络状态。
     * 该回调每 2 秒触发一次。如果远端有多个用户，该回调每 2 秒会被触发多次。
     */
    onNetworkQuality:
        
        /** @cn
         * @param uid 用户 ID。表示该回调报告的是持有该 ID 的用户的网络质量。当 uid 为 0 时，返回的是本地用户的网络质量。
         * @param txQuality 该用户的上行网络质量，基于发送码率、上行丢包率、平均往返时延和网络抖动计算。该值代表当前的上行网络质量，
         * 帮助判断是否可以支持当前设置的视频编码属性。假设上行码率是 1000 Kbps，那么支持直播场景下 640 &times; 480 的分辨率、15 fps 的帧率没有问题，
         * 但是支持 1280 &times; 720 的分辨率就会有困难。详见 [QUALITY_TYPE]{@link agora.QUALITY_TYPE} 。
         * @param rxQuality 该用户的下行网络质量，基于下行网络的丢包率、平均往返延时和网络抖动计算。详见 [QUALITY_TYPE]{@link agora.QUALITY_TYPE} 。
         */
        (uid: number, txQuality: agora.QUALITY_TYPE, rxQuality: agora.QUALITY_TYPE) => void

    
    /** @cn
     * @ignore
     * 本地视频流统计信息回调。
     * 该回调描述本地设备发送视频流的统计信息，每 2 秒触发一次。
     * 
     * @note 如果你调用了 [enableDualStreamMode]{@link agora.enableDualStreamMode} 方法，该回调会报告视频大流的统计信息。
     */
    onLocalVideoStats:
        
        /** @cn
         * @param stats 本地视频流统计信息。详见: [LocalVideoStats]{@link agora.LocalVideoStats}。
         */
        (stats: agora.LocalVideoStats) => void

    
    /** @cn
     * @ignore
     * 通话中远端视频流的统计信息回调。
     *
     * 该回调描述远端用户在通话中端到端的视频流统计信息，
     * 针对每个远端用户/主播每 2 秒触发一次。如果远端同时存在多个用户/主播，
     * 该回调每 2 秒会被触发多次。
     */
    onRemoteVideoStats:
        
        /** @cn
         * @param stats 远端视频统计数据。详见: [RemoteVideoStats]{@link agora.RemoteVideoStats} 。
         */
        (stats: agora.RemoteVideoStats) => void

    
    /** @cn
     * 通话中本地音频流的统计信息回调。
     *
     * 该回调描述本地设备发送音频流的统计信息。SDK 每 2 秒触发该回调一次。
     */
    onLocalAudioStats:
        
        /** @cn
         * @param stats 本地音频统计数据。详见 [LocalAudioStats]{@link agora.LocalAudioStats}。
         */
        (stats: agora.LocalAudioStats) => void

    
    /** @cn
     * 通话中远端音频流的统计信息回调。用于取代  [onAudioQuality]{@link AgoraRtcEvents.onAudioQuality}  回调。
     * 该回调描述远端用户在通话中端到端的音频流统计信息。该回调函数针对每个发送音频流的远端用户/主播每 2 秒触发一次。如果远端有多个用户/主播发送音频流，
     * 该回调每 2 秒会被触发多次。
     */
    onRemoteAudioStats:
        
        /** @cn
         * @param stats 接收到的远端音频统计数据，详细定义见: [RemoteAudioStats]{@link agora.RemoteAudioStats}。
         */
        (stats: agora.RemoteAudioStats) => void

    

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
        
        /** @cn
         * @param state 当前的本地音频状态。详见 [LOCAL_AUDIO_STREAM_STATE]{@link agora.LOCAL_AUDIO_STREAM_STATE} 。
         * @param error 本地音频出错原因。详见 [LOCAL_AUDIO_STREAM_ERROR]{@link agora.LOCAL_AUDIO_STREAM_ERROR} 。
         */
        (state: agora.LOCAL_AUDIO_STREAM_STATE, error: agora.LOCAL_AUDIO_STREAM_ERROR) => void

    
    /** @cn
     * 远端音频流状态发生改变回调。
     * 远端用户/主播音频状态发生改变时，SDK 会触发该回调向本地用户报告当前的远端音频流状态。
     * @note 频道内的用户（通信场景）或主播（直播场景）人数超过 17 人时，该回调不生效。
     */
    onRemoteAudioStateChanged:
        
        /** @cn
         * @param uid 发生音频状态改变的远端用户 ID。
         * @param state 远端音频流状态。 详见 [REMOTE_AUDIO_STATE]{@link agora.REMOTE_AUDIO_STATE} 。
         * @param reason 远端音频流状态改变的具体原因。详见 [REMOTE_AUDIO_STATE_REASON]{@link agora.REMOTE_AUDIO_STATE_REASON} 。
         * @param elapsed 从本地用户调用  [joinChannel]{@link agora.joinChannel} 方法到发生本事件经历的时间，单位为 ms。
         */
        (uid: number, state: agora.REMOTE_AUDIO_STATE, reason: agora.REMOTE_AUDIO_STATE_REASON, elapsed: number) => void

    
    /** @cn
     * 音频发布状态改变回调。
     */
    onAudioPublishStateChanged:
        
        /** @cn
         * @param channel 频道名。
         * @param oldState 之前的发布状态，详见 [STREAM_PUBLISH_STATE]{@link agora.STREAM_PUBLISH_STATE}
         * @param newState 当前的发布状态，详见 [STREAM_PUBLISH_STATE]{@link agora.STREAM_PUBLISH_STATE}
         * @param elapseSinceLastState 两次状态变化时间间隔（毫秒）。
         */
        (channel: string, oldState: agora.STREAM_PUBLISH_STATE, newState: agora.STREAM_PUBLISH_STATE, elapseSinceLastState: number) => void

    
    /** @cn
     * @ignore
     * 视频发布状态改变回调。
     */
    onVideoPublishStateChanged:
        
        /** @cn
         * @param channel 频道名。
         * @param oldState 之前的发布状态，详见 [STREAM_PUBLISH_STATE]{@link agora.STREAM_PUBLISH_STATE}
         * @param newState 当前的发布状态，详见 [STREAM_PUBLISH_STATE]{@link agora.STREAM_PUBLISH_STATE}
         * @param elapseSinceLastState 两次状态变化时间间隔（毫秒）。
         */
        (channel: string, oldState: agora.STREAM_PUBLISH_STATE, newState: agora.STREAM_PUBLISH_STATE, elapseSinceLastState: number) => void

    
    /** @cn
     * 音频订阅状态发生改变回调。
     */
    onAudioSubscribeStateChanged:
        
        /** @cn
         * @param channel 频道名。
         * @param uid 远端用户的 ID。
         * @param oldState 之前的订阅状态，详见 [STREAM_SUBSCRIBE_STATE]{@link agora.STREAM_SUBSCRIBE_STATE}
         * @param newState 当前的订阅状态，详见 [STREAM_SUBSCRIBE_STATE]{@link agora.STREAM_SUBSCRIBE_STATE}
         * @param elapseSinceLastState 两次状态变化时间间隔（毫秒）。
         */
        (channel: string, uid: number, oldState: agora.STREAM_SUBSCRIBE_STATE, newState: agora.STREAM_SUBSCRIBE_STATE, elapseSinceLastState: number) => void

    
    /** @cn
     * @ignore
     * 视频订阅状态发生改变回调。
     */
    onVideoSubscribeStateChanged:
        
        /** @cn
         * @param channel 频道名。
         * @param uid 远端用户的 ID。
         * @param oldState 之前的订阅状态，详见 [STREAM_SUBSCRIBE_STATE]{@link agora.STREAM_SUBSCRIBE_STATE}
         * @param newState 当前的订阅状态，详见 [STREAM_SUBSCRIBE_STATE]{@link agora.STREAM_SUBSCRIBE_STATE}
         * @param elapseSinceLastState 两次状态变化时间间隔（毫秒）。
         */
        (channel: string, uid: number, oldState: agora.STREAM_SUBSCRIBE_STATE, newState: agora.STREAM_SUBSCRIBE_STATE, elapseSinceLastState: number) => void

    
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
        
        /** @cn
         * @param uid 远端最活跃用户的 ID。
         */
        (uid: number) => void

    
    /** @cn
     * @ignore
     * 视频功能已停止回调。
     * @deprecated 请改用  [onLocalVideoStateChanged]{@link AgoraRtcEvents.onLocalVideoStateChanged}  回调中的 
     * `LOCAL_VIDEO_STREAM_STATE_STOPPED(0)`。
     * 提示视频功能已停止。 App 如需在停止视频后对 view 做其他处理（比如显示其他画面），可以在这个回调中进行。
     */
    onVideoStopped: () => void

    
    /** @cn
     * @ignore
     * 已显示本地视频首帧回调。
     * 本地视频首帧显示在本地视图上时，SDK 会触发此回调。
     */
    onFirstLocalVideoFrame:
        
        /** @cn
         * @param width 本地渲染视频的宽 (px) 。
         * @param height 本地渲染视频的高 (px)。
         * @param elapsed 从调用  [joinChannel]{@link agora.joinChannel}  到发生此事件过去的时间（毫秒）。如果在 
         * [joinChannel]{@link agora.joinChannel} 前调用了 [startPreview]{@link agora.startPreview}，则是从 
         * [startPreview]{@link agora.startPreview} 到发生此事件过去的时间。
         */
        (width: number, height: number, elapsed: number) => void

    
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
        
        /** @cn
         * @param elapsed 从调用  [joinChannel]{@link agora.joinChannel}  方法到触发该回调的时间间隔（毫秒）。
         */
        (elapsed: number) => void

    
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
        
        /** @cn
         * @param uid 用户 ID，指定是哪个用户的视频流。
         * @param width 视频流宽（px）。
         * @param height 视频流高（px）。
         * @param elapsed 从本地调用  [joinChannel]{@link agora.joinChannel}  开始到该回调触发的延迟（毫秒)。
         */
        (uid: number, width: number, height: number, elapsed: number) => void

    
    /** @cn
     * @ignore
     * 已显示首帧远端视频回调。
     * 第一帧远端视频显示在视图上时，触发此调用。 App 可在此调用中获知出图时间（elapsed）。
     */
    onFirstRemoteVideoFrame:
        
        /** @cn
         * @param uid 用户 ID，指定是哪个用户的视频流。
         * @param width 视频流宽（px）。
         * @param height 视频流高（px）。
         * @param elapsed 从本地调用  [joinChannel]{@link agora.joinChannel}  到发生此事件过去的时间（毫秒)。
         */
        (uid: number, width: number, height: number, elapsed: number) => void

    
    /** @cn
     * 远端用户静音回调。
     * @deprecated 该回调已废弃。请改用  [onRemoteAudioStateChanged]{@link AgoraRtcEvents.onRemoteAudioStateChanged} 提示有远端用户已将其
     * 音频流静音（或取消静音）。
     * 该回调是由远端用户调用  [muteLocalAudioStream]{@link agora.muteLocalAudioStream}  方法关闭或开启音频发送触发的。
     * @note 频道内的用户（通信场景）或主播（直播场景）人数超过 17 人时，该回调不生效。
     */
    onUserMuteAudio:
        
        /** @cn
         * @param uid 用户 ID。
         * @param muted 该用户是否静音：
         * - true: 该用户已将音频静音；
         * - false: 该用户取消了音频静音。
         */
        (uid: number, muted: boolean) => void

    
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
        
        /** @cn
         * @param uid 远端用户 ID。
         * @param muted 该用户是否暂停发送其视频流
         * - true: 该用户已暂停发送其视频流；
         * - false: 该用户已恢复发送其视频流。
         */
        (uid: number, muted: boolean) => void

    
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
        
        /** @cn
         * @param uid 用户 ID，提示是哪个用户的视频流。
         * @param enabled
         * - true: 该用户已启用了视频功能。启用后，该用户可以进行视频通话或直播。
         * - false: 该用户已关闭了视频功能。关闭后，该用户只能进行语音通话或直播，不能显示、
         * 发送自己的视频，也不能接收、显示别人的视频。
         */
        (uid: number, enabled: boolean) => void

    
    /** @cn
     * @ignore
     * 音频设备变化回调。
     * 提示系统音频设备状态发生改变，比如耳机被拔出。
     */
    onAudioDeviceStateChanged:
        
        /** @cn
         * @param deviceId 设备 ID。
         * @param deviceType 设备类型定义: [MEDIA_DEVICE_TYPE]{@link agora.MEDIA_DEVICE_TYPE} 。
         * @param deviceState 设备状态定义: [MEDIA_DEVICE_STATE_TYPE]{@link agora.MEDIA_DEVICE_STATE_TYPE} 。
         */
        (deviceId: string, deviceType: agora.MEDIA_DEVICE_TYPE, deviceState: agora.MEDIA_DEVICE_STATE_TYPE) => void

    
    /** @cn
     * @ignore
     * 回放、录音设备、或 App 的音量发生改变。
     */
    onAudioDeviceVolumeChanged:
        
        /** @cn
         * @param deviceType 设备类型定义: [MEDIA_DEVICE_TYPE]{@link agora.MEDIA_DEVICE_TYPE} 。
         * @param volume 音量：范围 [0,255]。
         * @param muted
         * - true: 音频设备已被静音；
         * - false: 音频设备未被静音。
         */
        (deviceType: agora.MEDIA_DEVICE_TYPE, volume: number, muted: boolean) => void

    
     /** @cn
      * @ignore
      * @deprecated 摄像头就绪回调。
      * 提示已成功打开摄像头，可以开始捕获视频。如果摄像头打开失败，可在  [onError]{@link AgoraRtcEvents.onError}  中处理相应错误。
      * 该回调已废弃。请改用  [onLocalVideoStateChanged]{@link AgoraRtcEvents.onLocalVideoStateChanged}  回调中的 
      * [LOCAL_VIDEO_STREAM_STATE_CAPTURING]{@link agora.LOCAL_VIDEO_STREAM_STATE.LOCAL_VIDEO_STREAM_STATE_CAPTURING} (1)。
      */
    onCameraReady: () => void

    
    /** @cn
     * @ignore
     * 相机对焦区域已改变回调。
     * 该回调表示相机的对焦区域发生了改变。
     * 该回调是由本地用户调用 setCameraFocusPositionInPreview 方法改变对焦位置触发的。
     * 
     * @note 该回调只适用于 Android 和 iOS 平台。
     */
    onCameraFocusAreaChanged:
        
        /** @cn
         * @param x 发生改变的对焦区域的 x 坐标。
         * @param y 发生改变的对焦区域的 y 坐标。
         * @param width 发生改变的对焦区域的宽度。
         * @param height 发生改变的对焦区域的高度。
         */
        (x: number, y: number, width: number, height: number) => void

    
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

    
    /** @cn
     * @ignore
     * 摄像头曝光区域已改变回调。
     * 该回调是由本地用户调用 `setCameraExposurePosition` 方法改变曝光位置触发的。
     * @note 该回调只适用于 Android 和 iOS 平台。
     */
    onCameraExposureAreaChanged:
        
        /** @cn
         * @param x 发生改变的曝光区域的 x 坐标。
         * @param y 发生改变的曝光区域的 y 坐标。
         * @param width 发生改变的曝光区域的宽度。
         * @param height 发生改变的曝光区域的高度。
         */
        (x: number, y: number, width: number, height: number) => void

    
    /** @cn
     * 本地音乐文件播放已结束回调。
     * @deprecated 该回调已废弃。请改用 [onAudioMixingStateChanged]{@link AgoraRtcEvents.onAudioMixingStateChanged}。
     * 当调用  [startAudioMixing]{@link agora.startAudioMixing}  播放本地音乐文件结束后，会触发该回调。如果调用 
     * [startAudioMixing]{@link agora.startAudioMixing} 失败，会在  [onError]{@link AgoraRtcEvents.onError}  回调里返回错误码 。
     */
    onAudioMixingFinished: () => void

    
    /** @cn
     * 本地用户的音乐文件播放状态已改变回调。
     * 该回调在音乐文件播放状态发生改变时触发，并报告当前的播放状态和错误码。
     * 如果本地音乐文件不存在、文件格式不支持或无法访问在线音乐文件 URL，SDK 会返回警告码 
     * [WARN_AUDIO_MIXING_OPEN_ERROR]{@link agora.WARN_AUDIO_MIXING_OPEN_ERROR} (701)。
     */
    onAudioMixingStateChanged:
        
        /** @cn
         * @param state 音乐文件播放状态，详见 [AUDIO_MIXING_STATE_TYPE]{@link agora.AUDIO_MIXING_STATE_TYPE}
         * @param errorCode 错误码，详见 [AUDIO_MIXING_ERROR_TYPE]{@link agora.AUDIO_MIXING_ERROR_TYPE}
         */
        (state: agora.AUDIO_MIXING_STATE_TYPE, errorCode: agora.AUDIO_MIXING_ERROR_TYPE) => void

    
    /** @cn
     * 远端音乐文件播放已开始回调。
     * 当远端有用户调用  [startAudioMixing]{@link agora.startAudioMixing}  播放本地音乐文件，会触发该回调。
     */
    onRemoteAudioMixingBegin: () => void

    
    /** @cn
     * 远端音乐文件播放已结束回调。
     * 当远端有用户播放本地音乐文件结束，会触发该回调。
     */
    onRemoteAudioMixingEnd: () => void

    
    /** @cn
     * 本地音效文件播放已结束回调。
     * 当播放音效结束后，会触发该回调。
     */
    onAudioEffectFinished:
        
        /** @cn
         * @param soundId 指定音效的 ID。每个音效均有唯一的 ID。
         */
        (soundId: number) => void

    
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
        
        /** @cn
         * @param uid 远端用户 ID
         * @param elapsed 从本地用户调用  [joinChannel]{@link agora.joinChannel}  直至该回调触发的延迟，单位为毫秒。
         */
        (uid: number, elapsed: number) => void

    
    /** @cn
     * @ignore
     * 视频设备变化回调。
     * 该回调提示系统视频设备状态发生改变，比如被拔出或移除。如果设备已使用外接摄像头采集，外接摄像头被拔开后，视频会中断。
     */
    onVideoDeviceStateChanged:
        
        /** @cn
         * @param deviceId 设备 ID。
         * @param deviceType 设备类型: [MEDIA_DEVICE_TYPE]{@link agora.MEDIA_DEVICE_TYPE} 。
         * @param deviceState 设备状态: [MEDIA_DEVICE_STATE_TYPE]{@link agora.MEDIA_DEVICE_STATE_TYPE} 。
         */
        (deviceId: string, deviceType: agora.MEDIA_DEVICE_TYPE, deviceState: agora.MEDIA_DEVICE_STATE_TYPE) => void

    
    /** @cn
     * @ignore
     * 本地视频状态发生改变回调
     * 本地视频的状态发生改变时，SDK 会触发该回调返回当前的本地视频状态。
     * 在本地视频出现故障时，你可以通过该回调了解当前视频的状态以及出现故障的原因，方便排查问题。
     * @note 对某些机型而言，当本地视频采集设备正在使用中时，SDK 不会在本地视频状态发生改变时触发该回调，你需要自行做超时判断。
     */
    onLocalVideoStateChanged:
        
        /** @cn
         * @param localVideoState 本地视频状态，详见: [LOCAL_VIDEO_STREAM_STATE]{@link agora.LOCAL_VIDEO_STREAM_STATE} 。当本地视频状态为 [LOCAL_VIDEO_STREAM_STATE_FAILED]{@link agora.LOCAL_VIDEO_STREAM_STATE_FAILED} (3) 时，你可以在 `error` 参数中查看返回的错误原因。
         * @param error 本地视频出错原因，详见: [LOCAL_VIDEO_STREAM_ERROR]{@link agora.LOCAL_VIDEO_STREAM_ERROR} 。
         */
        (localVideoState: agora.LOCAL_VIDEO_STREAM_STATE, error: agora.LOCAL_VIDEO_STREAM_ERROR) => void

    
    /** @cn
     * @ignore
     * 本地或远端视频大小和旋转信息发生改变回调。
     */
    onVideoSizeChanged:
        
        /** @cn
         * @param uid 图像尺寸和旋转信息发生变化的用户的用户 ID（本地用户的 uid 为 0）。
         * @param width 视频流的宽度（像素）。
         * @param height 视频流的高度（像素）。
         * @param rotation 旋转信息 [0,360)。
         */
        (uid: number, width: number, height: number, rotation: number) => void

    
    /** @cn
     * @ignore
     * 远端视频状态发生改变回调。
     * @note 频道内的用户（通信场景）或主播（直播场景）人数超过 17 人时，该回调不生效。
     */
    onRemoteVideoStateChanged:
        
        /** @cn
         * @param uid 发生视频状态改变的远端用户 ID。
         * @param state 远端视频流状态。详见 [REMOTE_VIDEO_STATE]{@link agora.REMOTE_VIDEO_STATE} 。
         * @param reason 远端视频流状态改变的具体原因。详见 [REMOTE_VIDEO_STATE_REASON]{@link agora.REMOTE_VIDEO_STATE_REASON} 。
         * @param elapsed 从本地用户调用  [joinChannel]{@link agora.joinChannel}  方法到发生本事件经历的时间，单位为 ms。
         */
        (uid: number, state: agora.REMOTE_VIDEO_STATE, reason: agora.REMOTE_VIDEO_STATE_REASON, elapsed: number) => void

    
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
        
        /** @cn
         * @param uid 用户 ID，提示是哪个用户的视频流。
         * @param enabled
         * - true: 该用户已启用视频功能。启用后，其他用户可以接收到该用户的视频流。
         * - false: 该用户已关闭视频功能。关闭后，该用户仍然可以接收其他用户的视频流，
         * 但其他用户接收不到该用户的视频流。
         */
        (uid: number, enabled: boolean) => void

    
    /** @cn
     * 接收到对方数据流消息的回调。
     * 该回调表示本地用户收到了远端用户调用  [sendStreamMessage]{@link agora.sendStreamMessage}  方法发送的流消息。
     */
    onStreamMessage:
        
        /** @cn
         * @param uid 发送消息的用户 ID。
         * @param streamId Stream ID。
         * @param data 接收到的数据。
         * @param length 数据长度。
         */
        (uid: number, streamId: number, data: Uint8Array, length: number) => void

    
    /** @cn
     * 接收对方数据流消息发生错误的回调。
     * 该回调表示本地用户未收到远端用户调用 [sendStreamMessage]{@link agora.sendStreamMessage} 方法发送的流消息。
     */
    onStreamMessageError:
        
        /** @cn
         * @param uid 发送消息的用户 ID。
         * @param streamId Stream ID。
         * @param code 错误码: [ERROR_CODE_TYPE]{@link agora.ERROR_CODE_TYPE}。
         * @param missed 丢失的消息数量。
         * @param cached 数据流中断时，后面缓存的消息数量。
         */
        (uid: number, streamId: number, code: number, missed: number, cached: number) => void

    
    /** @cn
     * 媒体引擎成功加载的回调。
     */
    onMediaEngineLoadSuccess: () => void

    
    /** @cn
     * 媒体引擎成功启动的回调。
     */
    onMediaEngineStartCallSuccess: () => void

    
    /** @cn
     * 跨频道媒体流转发状态发生改变回调。
     *
     * 当跨频道媒体流转发状态发生改变时，SDK 会触发该回调，
     * 并报告当前的转发状态以及相关的错误信息。
     */
    onChannelMediaRelayStateChanged:
        
        /** @cn
         * @param state 跨频道媒体流转发状态。详见 [CHANNEL_MEDIA_RELAY_STATE]{@link agora.CHANNEL_MEDIA_RELAY_STATE} 。
         * @param code 跨频道媒体流转发出错的错误码。详见 [CHANNEL_MEDIA_RELAY_ERROR]{@link agora.CHANNEL_MEDIA_RELAY_ERROR} 。
         */
        (state: agora.CHANNEL_MEDIA_RELAY_STATE, code: agora.CHANNEL_MEDIA_RELAY_ERROR) => void

    
    /** @cn
     * 跨频道媒体流转发事件回调。
     *
     * 该回调报告跨频道媒体流转发过程中发生的事件。
     */
    onChannelMediaRelayEvent:
        
        /** @cn
         * @param code 跨频道媒体流转发事件码。详见 [CHANNEL_MEDIA_RELAY_EVENT]{@link agora.CHANNEL_MEDIA_RELAY_EVENT}。
         */
        (code: agora.CHANNEL_MEDIA_RELAY_EVENT) => void

    
    /** @cn
     * 已发送本地音频首帧回调。
     *
     * @deprecated 该回调已废弃，请改用  [onFirstLocalAudioFramePublished]{@link AgoraRtcEvents.onFirstLocalAudioFramePublished}  回调。
     */
    onFirstLocalAudioFrame:
        
        /** @cn
         * @param elapsed 从调用  [joinChannel]{@link agora.joinChannel}  方法直至该回调被触发的时间。
         */
        (elapsed: number) => void

    
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
        
        /** @cn
         * @param elapsed 从调用  [joinChannel]{@link agora.joinChannel}  方法到触发该回调的时间间隔（毫秒）。
         */
        (elapsed: number) => void

    
    /** @cn
     * 已接收远端音频首帧回调。
     * @deprecated 该回调已废弃。请改用  [onRemoteAudioStateChanged]{@link AgoraRtcEvents.onRemoteAudioStateChanged}。
     */
    onFirstRemoteAudioFrame:
        
        /** @cn
         * @param uid 发送音频帧的远端用户的用户 ID。
         * @param elapsed 从调用  [joinChannel]{@link agora.joinChannel}  方法直至该回调被触发的时间。
         */
        (uid: number, elapsed: number) => void

    
    /** @cn
     * RTMP 推流状态发生改变回调。
     * 
     * 该回调返回本地用户调用  [addPublishStreamUrl]{@link agora.addPublishStreamUrl}  或  
     * [removePublishStreamUrl]{@link agora.removePublishStreamUrl}  方法的结果。
     * RTMP 推流状态发生改变时，SDK 会触发该回调，并在回调中明确状态发生改变的 URL 地址及当前推流状态。
     * 该回调方便推流用户了解当前的推流状态；推流出错时，你可以通过返回的错误码了解出错的原因，方便排查问题。
     */
    onRtmpStreamingStateChanged:
        
        /** @cn
         * @param url 推流状态发生改变的 URL 地址。
         * @param state 当前的推流状态，详见 [RTMP_STREAM_PUBLISH_STATE]{@link agora.RTMP_STREAM_PUBLISH_STATE} 。
         * @param errCode 推流错误信息，详见 [RTMP_STREAM_PUBLISH_ERROR]{@link agora.RTMP_STREAM_PUBLISH_ERROR} 。
         */
        (url: string, state: agora.RTMP_STREAM_PUBLISH_STATE, errCode: agora.RTMP_STREAM_PUBLISH_ERROR) => void

    
    /** @cn
     * RTMP 推流事件回调。
     */
    onRtmpStreamingEvent:
        
        /** @cn
         * @param url RTMP 推流 URL。
         * @param eventCode RTMP 推流事件码。详见 [RTMP_STREAMING_EVENT]{@link agora.RTMP_STREAMING_EVENT}。
         */
        (url: string, eventCode: agora.RTMP_STREAMING_EVENT) => void

    
    /** @cn
     * 旁路推流已开启回调。
     * @deprecated 此方法已废弃，请改用  [onRtmpStreamingStateChanged]{@link AgoraRtcEvents.onRtmpStreamingStateChanged}
     * 该回调用于通知主播推流状态。
     */
    onStreamPublished:
        
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

    
    /** @cn
     * 旁路推流已停止回调。
     * @deprecated 此方法已废弃，请改用  [onRtmpStreamingStateChanged]{@link AgoraRtcEvents.onRtmpStreamingStateChanged}
     * 回调用于通知主播停止推流成功。
     */
    onStreamUnpublished:
        
        /** @cn
         * @param url 被删除的 RTMP 推流地址。
         */
        (url: string) => void

    
    /** @cn
     * 旁路推流设置已被更新回调。
     *
     * [setLiveTranscoding]{@link agora.setLiveTranscoding}  方法中的直播参数 `LiveTranscoding` 更新时，`onTranscodingUpdated` 
     * 回调会被触发并向主播报告更新信息。
     * 
     * @note 首次调用 `setLiveTranscoding` 方法设置转码参数 `LiveTranscoding` 时，不会触发此回调。
     */
    onTranscodingUpdated: () => void

    
    /** @cn
     * 输入在线媒体流状态回调。
     */
    onStreamInjectedStatus:
        
        /** @cn
         * @param url 在线媒体流的地址。
         * @param uid 用户 ID。
         * @param status 输入的在线媒体流状态: [INJECT_STREAM_STATUS]{@link agora.INJECT_STREAM_STATUS} 。
         */
        (url: string, uid: number, status: agora.INJECT_STREAM_STATUS) => void

    
    /** @cn
     * 语音路由已发生变化回调。
     * 当语音路由发生变化时，SDK 会触发此回调。
     */
    onAudioRouteChanged:
        
        /** @cn
         * @param routing 当前的语音路由。详见： [AUDIO_ROUTE_TYPE]{@link agora.AUDIO_ROUTE_TYPE} 。
         */
        (routing: agora.AUDIO_ROUTE_TYPE) => void

    
    /** @cn
     * @ignore
     * 本地发布流已回退为音频流回调。
     * 如果你调用了  [setLocalPublishFallbackOption]{@link agora.setLocalPublishFallbackOption}  接口并将 option 设置为 
     * [STREAM_FALLBACK_OPTION_AUDIO_ONLY]{@link agora.STREAM_FALLBACK_OPTIONS.STREAM_FALLBACK_OPTION_AUDIO_ONLY} ，当上行网络环境不理想、
     * 本地发布的媒体流回退为音频流时，或当上行网络改善、媒体流恢复为音视频流时，会触发该回调。
     * @note 如果本地发流已回退为音频流，远端的 App 上会收到  [onUserMuteVideo]{@link AgoraRtcEvents.onUserMuteVideo}  的回调事件。
     */
    onLocalPublishFallbackToAudioOnly:
        
        /** @cn
         * @param isFallbackOrRecover
         * - true: 由于网络环境不理想，本地发布的媒体流已回退为音频流；
         * - false: 由于网络环境改善，发布的音频流已恢复为音视频流。
         */
        (isFallbackOrRecover: boolean) => void

    
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
        
        /** @cn
         * @param uid 远端用户的用户 ID。
         * @param  isFallbackOrRecover
         * - true: 由于网络环境不理想，远端订阅流已回退为音频流；
         * - false: 由于网络环境改善，订阅的音频流已恢复为音视频流。
         */
        (uid: number, isFallbackOrRecover: boolean) => void

    
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
        
        /** @cn
         * @param uid  用户 ID，指定是哪个用户/主播的音频包。
         * @param delay 音频包从发送端到接收端的延时（毫秒）。
         * @param lost 音频包从发送端到接收端的丢包率 (%)。
         * @param rxKBitRate  远端音频包的接收码率（Kbps）。
         */
        (uid: number, delay: number, lost: number, rxKBitRate: number) => void

    
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
        
        /** @cn
         * @param uid 用户 ID，指定是哪个用户/主播的视频包。
         * @param delay 视频包从发送端到接收端的延时（毫秒）。
         * @param lost 视频包从发送端到接收端的丢包率 (%)。
         * @param rxKBitRate 远端视频包的接收码率（Kbps）。
         */
        (uid: number, delay: number, lost: number, rxKBitRate: number) => void

    
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
        
        /** @cn
         * @param enabled
         * - true: 麦克风已启用；
         * - false: 麦克风已禁用。
         */
        (enabled: boolean) => void

    
    /** @cn
     * 网络连接状态已改变回调。
     * 该回调在网络连接状态发生改变的时候触发，并告知用户当前的网络连接状态和引起网络状态改变的原因。
     */
    onConnectionStateChanged:
        
        /** @cn
         * @param state 详见： [CONNECTION_STATE_TYPE]{@link agora.CONNECTION_STATE_TYPE} 。
         * @param reason 详见： [CONNECTION_CHANGED_REASON_TYPE]{@link agora.CONNECTION_CHANGED_REASON_TYPE} 。
         */
        (state: agora.CONNECTION_STATE_TYPE, reason: agora.CONNECTION_CHANGED_REASON_TYPE) => void

    
    /** @cn
     * 本地网络类型发生改变回调。
     * 本地网络连接类型发生改变时，SDK 会触发该回调，并在回调中明确当前的网络连接类型。
     * 你可以通过该回调获取正在使用的网络类型；当连接中断时，该回调能辨别引起中断的原因是网络切换还是网络条件不好。
     */
    onNetworkTypeChanged:
        
        /** @cn
         * @param type 详见： [NETWORK_TYPE]{@link agora.NETWORK_TYPE} 。
         */
        (type: agora.NETWORK_TYPE) => void

    
    /** @cn
     * 本地用户成功注册 User Account 回调。
     * 本地用户成功调用  [registerLocalUserAccount]{@link agora.registerLocalUserAccount}  方法注册用户 User Account 或
     * 调用  [joinChannelWithUserAccount]{@link agora.joinChannelWithUserAccount}  加入频道后，
     * SDK 会触发该回调，并告知本地用户的 UID 和 User Account。
     */
    onLocalUserRegistered:
        
        /** @cn
         * @param uid 本地用户的 UID
         * @param userAccount 本地用户的 User Account
         */
        (uid: number, userAccount: string) => void

    
    /** @cn
     * 远端用户信息已更新回调。
     * 远端用户加入频道后， SDK 会获取到该远端用户的 UID 和 User Account，然后缓存一个包含了远端用户 UID 和 User Account 的 Mapping 表，
     * 并在本地触发该回调。
     */
    onUserInfoUpdated:
        
        /** @cn
         * @param uid 远端用户的 UID
         * @param info 标识用户信息的 [UserInfo]{@link agora.UserInfo}，包含用户 UID 和 User Account
         */
        (uid: number, info: agora.UserInfo) => void

    
    /** @cn
     * @ignore
     * 接收端已收到 Metadata。
     * 当接收到远端用户发送的 Metadata 时，SDK 会触发该回调。
     */
    onMetadataReceived:
        
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

    
    /** @cn
     *  在 Agora 引擎运行期间监听事件。
     */
    export function on<T extends Function>(type: string, callback: T, target?: any, useCapture?: boolean): T {
        return event.on(type, callback, target, useCapture)
    }

    
    /** @cn
     * 停止在 Agora 引擎运行期间监听事件。
     */
    export function off(type: string, callback?: Function, target?: any) {
        event.off(type, callback, target)
    }

    
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
