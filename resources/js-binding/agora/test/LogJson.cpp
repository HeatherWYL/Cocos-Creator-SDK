#include "LogJson.h"


namespace agora {
namespace common {
using namespace rtc;

LogJson::LogJson() {
    document_.SetObject();
}

void LogJson::log(int apiType, const VideoEncoderConfiguration& videoEncoderConfiguration) {
    
}

void LogJson::log(int apiType, const CameraCapturerConfiguration& cameraCapturerConfiguration) {
    
}

void LogJson::log(int apiType, unsigned int displayId, const rtc::Rectangle& regionRect, const rtc::ScreenCaptureParameters& captureParams) {
    
}

void LogJson::log(int apiType, const rtc::Rectangle& screenRect, const rtc::Rectangle& regionRect, const rtc::ScreenCaptureParameters& captureParams) {
    
}

void LogJson::log(int apiType, rtc::view_t windowId, const rtc::Rectangle& regionRect, const rtc::ScreenCaptureParameters& captureParams) {
    
}

void LogJson::log(int apiType, const rtc::ScreenCaptureParameters& captureParams) {
    
}

void LogJson::log(int apiType, const rtc::Rectangle& regionRect) {
    
}

void LogJson::log(int apiType, const rtc::LastmileProbeConfig& config) {
    
}

void LogJson::log(int apiType, const rtc::LiveTranscoding& transcoding) {
    
}

void LogJson::log(int apiType, const rtc::RtcImage& watermark) {
    
}

void LogJson::log(int apiType, const char* watermarkUrl, const rtc::WatermarkOptions& options) {
    
}

void LogJson::log(int apiType, bool enabled, const rtc::BeautyOptions& options) {
    
}

void LogJson::log(int apiType, const char* url, const rtc::InjectStreamConfig& config) {
    
}

void LogJson::log(int apiType, const rtc::ChannelMediaRelayConfiguration& configuration) {
    
}

void LogJson::log(int apiType, const rtc::VideoCanvas& canvas) {
    
}

void LogJson::log(int apiType, rtc::IMetadataObserver::Metadata *metadata) {
    
}

}
}
