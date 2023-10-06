#pragma once

#include <ArduinoJson.h>
#include <WString.h>

#include <cstdint>

namespace OpenShock::CaptivePortal {
  bool Init();

  void SetAlwaysEnabled(bool alwaysOn);
  bool IsAlwaysEnabled();

  bool IsRunning();
  void Update();

  bool SendMessageTXT(std::uint8_t socketId, const char* data, std::size_t len);
  bool SendMessageBIN(std::uint8_t socketId, const std::uint8_t* data, std::size_t len);
  inline bool SendMessageTXT(std::uint8_t socketId, const String& message) {
    return SendMessageTXT(socketId, message.c_str(), message.length());
  }
  inline bool SendMessageJSON(std::uint8_t socketId, const DynamicJsonDocument& doc) {
    String message;
    serializeJson(doc, message);
    return SendMessageTXT(socketId, message);
  }

  bool BroadcastMessageTXT(const char* data, std::size_t len);
  bool BroadcastMessageBIN(const std::uint8_t* data, std::size_t len);
  inline bool BroadcastMessageTXT(const String& message) {
    return BroadcastMessageTXT(message.c_str(), message.length());
  }
  inline bool BroadcastMessageJSON(const DynamicJsonDocument& doc) {
    String message;
    serializeJson(doc, message);
    return BroadcastMessageTXT(message);
  }
};  // namespace OpenShock::CaptivePortal
