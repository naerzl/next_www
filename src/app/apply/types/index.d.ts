// 注册接口参数
export interface ReqRegisterParams {
  phone: string
  name: string
  job: string
  code: string
  company: string
}

// 注册接口结果类型

export type ReqRegisterResponse = ReqFetch<string>
