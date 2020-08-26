#ifndef LogJson_h
#define LogJson_h

#include <string>
#include <type_traits>
#include "../common/IBridgeCommon.h"
#include "../common/rapidjson/document.h"
#include "../common/utils/MacroUtil.h"

namespace agora {
namespace common {



inline rapidjson::Value createValue(const char* t, rapidjson::Document& doc){
    rapidjson::Value v(t, doc.GetAllocator());
    return v;
}

template <typename T, typename std::enable_if<!std::is_same<T, const char*>::value, int>::type a =0>
rapidjson::Value createValue(T i, rapidjson::Document& doc){
    rapidjson::Value v(i);
    return v;
}

template <typename T>
void addMember(rapidjson::Value& obj, const char* k, T v, rapidjson::Document& doc) {
    rapidjson::Value key(k, doc.GetAllocator());
    rapidjson::Value value = createValue(v, doc);
    obj.AddMember(key, value, doc.GetAllocator());
}


class LogJson {
    
public:
    LogJson();
    
    void log(int apiType) {
        auto apiTypeString = std::to_string(apiType);
        rapidjson::Value obj(rapidjson::kObjectType);
        
        rapidjson::Value apiTypeKey(apiTypeString.c_str(), document_.GetAllocator());
        document_.AddMember(apiTypeKey, obj, document_.GetAllocator());
    }
    
    void log(int apiType, const agora::rtc::VideoEncoderConfiguration& videoEncoderConfiguration);
    void log(int apiType, const agora::rtc::CameraCapturerConfiguration& cameraCapturerConfiguration);
    void log(int apiType, unsigned int displayId, const rtc::Rectangle& regionRect, const rtc::ScreenCaptureParameters& captureParams);
    void log(int apiType, const rtc::Rectangle& screenRect, const rtc::Rectangle& regionRect, const rtc::ScreenCaptureParameters& captureParams);
    void log(int apiType, rtc::view_t windowId, const rtc::Rectangle& regionRect, const rtc::ScreenCaptureParameters& captureParams);
    void log(int apiType, const rtc::ScreenCaptureParameters& captureParams);
    void log(int apiType, const rtc::Rectangle& regionRect);
    void log(int apiType, const rtc::LastmileProbeConfig& config);
    void log(int apiType, const rtc::LiveTranscoding& transcoding);
    void log(int apiType, const rtc::RtcImage& watermark);
    void log(int apiType, const char* watermarkUrl, const rtc::WatermarkOptions& options);
    void log(int apiType, bool enabled, const rtc::BeautyOptions& options);
    void log(int apiType, const char* url, const rtc::InjectStreamConfig& config);
    void log(int apiType, const rtc::ChannelMediaRelayConfiguration& configuration);
    void log(int apiType, const rtc::VideoCanvas& canvas);
    void log(int apiType, rtc::IMetadataObserver::Metadata *metadata);
    
    
    
    
    template <typename T>
    void log(int apiType, const char* key, T t) {
        auto apiTypeString = std::to_string(apiType);
        rapidjson::Value obj(rapidjson::kObjectType);
        
        addMember(obj, key, t, document_);
        
        rapidjson::Value apiTypeKey(apiTypeString.c_str(), document_.GetAllocator());
        document_.AddMember(apiTypeKey, obj, document_.GetAllocator());
    }
    
    template <typename T1, typename T2>
    void log(int apiType,
                    const char* key1, T1 t1,
                    const char* key2, T2 t2
                    ) {
        auto apiTypeString = std::to_string(apiType);
        rapidjson::Value obj(rapidjson::kObjectType);

        addMember(obj, key1, t1, document_);
        addMember(obj, key2, t2, document_);
        
        rapidjson::Value apiTypeKey(apiTypeString.c_str(), document_.GetAllocator());
        document_.AddMember(apiTypeKey, obj, document_.GetAllocator());
    }
    
    template <typename T1, typename T2, typename T3>
    void log(int apiType,
                    const char* key1, T1 t1,
                    const char* key2, T2 t2,
                    const char* key3, T3 t3
                    ) {
        auto apiTypeString = std::to_string(apiType);
        rapidjson::Value obj(rapidjson::kObjectType);

        addMember(obj, key1, t1, document_);
        addMember(obj, key2, t2, document_);
        addMember(obj, key3, t3, document_);
        
        rapidjson::Value apiTypeKey(apiTypeString.c_str(), document_.GetAllocator());
        document_.AddMember(apiTypeKey, obj, document_.GetAllocator());
    }
    
    template <typename T1, typename T2, typename T3, typename T4>
    void log(int apiType,
                    const char* key1, T1 t1,
                    const char* key2, T2 t2,
                    const char* key3, T3 t3,
                    const char* key4, T4 t4
                    ) {
        auto apiTypeString = std::to_string(apiType);
        rapidjson::Value obj(rapidjson::kObjectType);

        addMember(obj, key1, t1, document_);
        addMember(obj, key2, t2, document_);
        addMember(obj, key3, t3, document_);
        addMember(obj, key4, t4, document_);
        
        rapidjson::Value apiTypeKey(apiTypeString.c_str(), document_.GetAllocator());
        document_.AddMember(apiTypeKey, obj, document_.GetAllocator());
    }
    
    template <typename T1, typename T2, typename T3, typename T4, typename T5>
    void log(int apiType,
                    const char* key1, T1 t1,
                    const char* key2, T2 t2,
                    const char* key3, T3 t3,
                    const char* key4, T4 t4,
                    const char* key5, T5 t5
                    ) {
        auto apiTypeString = std::to_string(apiType);
        rapidjson::Value obj(rapidjson::kObjectType);

        addMember(obj, key1, t1, document_);
        addMember(obj, key2, t2, document_);
        addMember(obj, key3, t3, document_);
        addMember(obj, key4, t4, document_);
        addMember(obj, key5, t5, document_);
        
        rapidjson::Value apiTypeKey(apiTypeString.c_str(), document_.GetAllocator());
        document_.AddMember(apiTypeKey, obj, document_.GetAllocator());
    }
    
    template <typename T1, typename T2, typename T3, typename T4, typename T5, typename T6>
    void log(int apiType,
                    const char* key1, T1 t1,
                    const char* key2, T2 t2,
                    const char* key3, T3 t3,
                    const char* key4, T4 t4,
                    const char* key5, T5 t5,
                    const char* key6, T6 t6
                    ) {
        auto apiTypeString = std::to_string(apiType);
        rapidjson::Value obj(rapidjson::kObjectType);

        addMember(obj, key1, t1, document_);
        addMember(obj, key2, t2, document_);
        addMember(obj, key3, t3, document_);
        addMember(obj, key4, t4, document_);
        addMember(obj, key5, t5, document_);
        addMember(obj, key6, t6, document_);
        
        rapidjson::Value apiTypeKey(apiTypeString.c_str(), document_.GetAllocator());
        document_.AddMember(apiTypeKey, obj, document_.GetAllocator());
    }
    
    template <typename T1, typename T2, typename T3, typename T4, typename T5, typename T6, typename T7>
    void log(int apiType,
                    const char* key1, T1 t1,
                    const char* key2, T2 t2,
                    const char* key3, T3 t3,
                    const char* key4, T4 t4,
                    const char* key5, T5 t5,
                    const char* key6, T6 t6,
                    const char* key7, T7 t7
                    ) {
        auto apiTypeString = std::to_string(apiType);
        rapidjson::Value obj(rapidjson::kObjectType);

        addMember(obj, key1, t1, document_);
        addMember(obj, key2, t2, document_);
        addMember(obj, key3, t3, document_);
        addMember(obj, key4, t4, document_);
        addMember(obj, key5, t5, document_);
        addMember(obj, key6, t6, document_);
        addMember(obj, key7, t7, document_);
        
        rapidjson::Value apiTypeKey(apiTypeString.c_str(), document_.GetAllocator());
        document_.AddMember(apiTypeKey, obj, document_.GetAllocator());
    }
    
private:
    rapidjson::Document document_;
    
};


}
}

// #define myMacro(...) OVERLOADED_MACRO( myMacro, __VA_ARGS__ )
// #define myMacro0() someFunc()
// #define myMacro1( arg1 ) someFunc( arg1 )
// #define myMacro2( arg1, arg2 ) someFunc( arg1, arg2 )

#define DECLARE_LOGJSON agora::common::LogJson logJson_;

#define LOG_JSON(...) OVERLOADED_MACRO( LOG_JSON, __VA_ARGS__ )
#define LOG_JSON0() logJson_.log()
#define LOG_JSON1(t1) logJson_.log(t1)
#define LOG_JSON2(t1, t2) logJson_.log(t1, t2)
#define LOG_JSON3(t1, t2, t3) logJson_.log(t1, t2, t3)
#define LOG_JSON4(t1, t2, t3, t4) logJson_.log(t1, t2, t3, t4)
#define LOG_JSON5(t1, t2, t3, t4, t5) logJson_.log(t1, t2, t3, t4 ,t5)
#define LOG_JSON6(t1, t2, t3, t4, t5, t6) logJson_.log(t1, t2, t3, t4 ,t5, t6)
#define LOG_JSON7(t1, t2, t3, t4, t5, t6, t7) logJson_.log(t1, t2, t3, t4 ,t5, t6, t7)
#define LOG_JSON8(t1, t2, t3, t4, t5, t6, t7, t8) logJson_.log(t1, t2, t3, t4 ,t5, t6, t7, t8)
#define LOG_JSON9(t1, t2, t3, t4, t5, t6, t7, t8, t9) logJson_.log(t1, t2, t3, t4 ,t5, t6, t7, t8, t9)
#define LOG_JSON10(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10) logJson_.log(t1, t2, t3, t4 ,t5, t6, t7, t8, t9, t10)
#define LOG_JSON11(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11) logJson_.log(t1, t2, t3, t4 ,t5, t6, t7, t8, t9, t10, t11)
#define LOG_JSON12(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12) logJson_.log(t1, t2, t3, t4 ,t5, t6, t7, t8, t9, t10, t11, t12)
#define LOG_JSON13(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13) logJson_.log(t1, t2, t3, t4 ,t5, t6, t7, t8, t9, t10, t11, t12, t13)
#define LOG_JSON14(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14) logJson_.log(t1, t2, t3, t4 ,t5, t6, t7, t8, t9, t10, t11, t12, t13, t14)
#define LOG_JSON15(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15) logJson_.log(t1, t2, t3, t4 ,t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15)




#define GET_MACRO(_0)

#endif /* LogJson_hpp */
