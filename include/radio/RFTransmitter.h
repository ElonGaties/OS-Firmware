#pragma once

#include "ShockerCommandType.h"
#include "ShockerModelType.h"

#include <esp32-hal-rmt.h>

#include <freertos/queue.h>
#include <freertos/task.h>

#include <cstdint>

namespace OpenShock {
  class RFTransmitter {
  public:
    RFTransmitter(uint8_t gpioPin);
    ~RFTransmitter();

    inline uint8_t GetTxPin() const { return m_txPin; }

    inline bool ok() const { return m_rmtHandle != nullptr && m_queueHandle != nullptr && m_taskHandle != nullptr; }

    bool SendCommand(ShockerModelType model, uint16_t shockerId, ShockerCommandType type, uint8_t intensity, uint16_t durationMs, bool overwriteExisting = true);
    void ClearPendingCommands();

  private:
    void destroy();
    void TransmitTask();

    uint8_t m_txPin;
    rmt_obj_t* m_rmtHandle;
    QueueHandle_t m_queueHandle;
    TaskHandle_t m_taskHandle;
  };
}  // namespace OpenShock
