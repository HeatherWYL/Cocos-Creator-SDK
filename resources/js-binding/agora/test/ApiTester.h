#ifndef ApiTester_h
#define ApiTester_h

#include "../common/utils/MacroUtil.h"
#include "LogJson.h"

#define AGORO_ENABLE_TEST

namespace agora {
namespace common {

class APICaseHandler {
public:
  virtual void handleAPICase(int apiType, const char *paramter) = 0;
  virtual ~APICaseHandler() {}
};

LogJson &GetApiJsonLogger();

void BeginApiTest(const char *caseFilePath, APICaseHandler *apiCaseHandler);

void CompareAndDumpApiTestResult(const char *caseFilePath,
                                 const char *dumpFilePath,
                                 APICaseHandler *apiCaseHandler);

#ifdef AGORO_ENABLE_TEST

#define LOG_JSON(...) OVERLOADED_MACRO(LOG_JSON, __VA_ARGS__)
#define LOG_JSON0() agora::common::GetApiJsonLogger().log()
#define LOG_JSON1(t1) agora::common::GetApiJsonLogger().log(t1)
#define LOG_JSON2(t1, t2) agora::common::GetApiJsonLogger().log(t1, t2)
#define LOG_JSON3(t1, t2, t3) agora::common::GetApiJsonLogger().log(t1, t2, t3)
#define LOG_JSON4(t1, t2, t3, t4)                                              \
  agora::common::GetApiJsonLogger().log(t1, t2, t3, t4)
#define LOG_JSON5(t1, t2, t3, t4, t5)                                          \
  agora::common::GetApiJsonLogger().log(t1, t2, t3, t4, t5)
#define LOG_JSON6(t1, t2, t3, t4, t5, t6)                                      \
  agora::common::GetApiJsonLogger().log(t1, t2, t3, t4, t5, t6)
#define LOG_JSON7(t1, t2, t3, t4, t5, t6, t7)                                  \
  agora::common::GetApiJsonLogger().log(t1, t2, t3, t4, t5, t6, t7)
#define LOG_JSON8(t1, t2, t3, t4, t5, t6, t7, t8)                              \
  agora::common::GetApiJsonLogger().log(t1, t2, t3, t4, t5, t6, t7, t8)
#define LOG_JSON9(t1, t2, t3, t4, t5, t6, t7, t8, t9)                          \
  agora::common::GetApiJsonLogger().log(t1, t2, t3, t4, t5, t6, t7, t8, t9)
#define LOG_JSON10(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10)                    \
  agora::common::GetApiJsonLogger().log(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10)
#define LOG_JSON11(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11)               \
  agora::common::GetApiJsonLogger().log(t1, t2, t3, t4, t5, t6, t7, t8, t9,    \
                                        t10, t11)
#define LOG_JSON12(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12)          \
  agora::common::GetApiJsonLogger().log(t1, t2, t3, t4, t5, t6, t7, t8, t9,    \
                                        t10, t11, t12)
#define LOG_JSON13(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13)     \
  agora::common::GetApiJsonLogger().log(t1, t2, t3, t4, t5, t6, t7, t8, t9,    \
                                        t10, t11, t12, t13)
#define LOG_JSON14(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13,     \
                   t14)                                                        \
  agora::common::GetApiJsonLogger().log(t1, t2, t3, t4, t5, t6, t7, t8, t9,    \
                                        t10, t11, t12, t13, t14)
#define LOG_JSON15(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13,     \
                   t14, t15)                                                   \
  agora::common::GetApiJsonLogger().log(t1, t2, t3, t4, t5, t6, t7, t8, t9,    \
                                        t10, t11, t12, t13, t14, t15)
#else

#define LOG_JSON(...)

#endif

} // namespace common
} // namespace agora

#endif /* ApiTester_h */
