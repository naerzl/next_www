import { FetchParams } from "@/types/api"
import { ReqRegisterParams } from "./../types/index.d"
import { fetcher } from "@/libs/fetch"

// 申请试用
export const reqPostRegister = (url: string, { arg }: FetchParams<ReqRegisterParams>) =>
  fetcher({ url, arg, method: "post" })

//   获取短信验证码
export const reqGetRegisterPhoneCode = (url: string, { arg }: FetchParams<{ phone: string }>) =>
  fetcher({ url, arg })
