"use client"
import React from "react"
import { REGEXP_PHONE, SECONDS } from "@/libs/const"
import useCountDown from "@/hooks/useCountDown"
import { message } from "antd"
import { ReqRegisterParams } from "../types"
import useSWRMutaton from "swr/mutation"
import { reqGetRegisterPhoneCode, reqPostRegister } from "../api"
import { Button, TextField, Select, MenuItem } from "@mui/material"
import { ErrorMessage } from "@hookform/error-message"
import { useForm, SubmitHandler } from "react-hook-form"
import useDebounce from "@/hooks/useDebounce"

const selectOption = [
  { value: 1, label: "铁路" },
  { value: 2, label: "公路" },
  { value: 3, label: "市政" },
]

function ApplyForm() {
  const { count, start } = useCountDown(SECONDS, () => {})
  const {
    handleSubmit,
    register,
    trigger,
    getValues,
    formState: { errors },
    reset
  } = useForm<ReqRegisterParams>()

  const { trigger: postRegisterApi } = useSWRMutaton("/register", reqPostRegister)
  const { trigger: getRegisterPhoneCodeApi } = useSWRMutaton(
    "/register/code",
    reqGetRegisterPhoneCode,
  )

  const { run: onSubmit }: { run: SubmitHandler<ReqRegisterParams> } = useDebounce(
    async (values: ReqRegisterParams) => {
      await postRegisterApi(values)
      reset()
      message.success("注册成功")
    },
  )

  const handleBlur = (name: keyof ReqRegisterParams) => {
    trigger(name)
  }
  const { run: handleClick } = useDebounce(async () => {
    trigger("phone")
    // 校验手机号是否合法
    if (REGEXP_PHONE.test(getValues("phone"))) {
      // 校验手机号是否合法
      // 开始计时
      start()
      const res = await getRegisterPhoneCodeApi({ phone: getValues("phone") })

      console.log(`code=${res.code}`)
    }
    // 调佣api
  })

  return (
    <div className="bg-white  p-12 rounded-2xl  min-w-[500px] w-2/5">
      <h4 className="mb-10 text-2xl font-bold">注册项目试用账号</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="flex h-full flex-col">
        <div className="relative pb-[70px]">
          <TextField
            {...register("project_name", { required: "请输入您的项目名称" })}
            variant="outlined"
            label="项目名称"
            fullWidth
            className="absolute h-10"
            error={Boolean(errors.project_name)}
            onBlur={() => {
              handleBlur("project_name")
            }}
            size="small"
          />
          <ErrorMessage
            errors={errors}
            name="project_name"
            render={({ message }) => (
              <p className="text-railway_error text-sm absolute top-[42px] left-0">{message}</p>
            )}
          />
        </div>
        <div className="relative pb-[70px]">
          <TextField
            variant="outlined"
            label="手机号"
            size="small"
            className="absolute h-10"
            fullWidth
            {...register("phone", {
              required: "请输入您的手机号",
              pattern: {
                value: REGEXP_PHONE,
                message: "手机号格式不正确",
              },
            })}
            onBlur={() => {
              handleBlur("phone")
            }}
            error={Boolean(errors.phone)}
          />
          <ErrorMessage
            errors={errors}
            name="phone"
            render={({ message }) => (
              <p className="text-railway_error text-sm  absolute top-[42px] left-0">{message}</p>
            )}
          />
        </div>

        <div className="relative pb-[70px]">
          <div className="flex justify-between h-10 absolute w-full">
            <TextField
              label="验证码"
              variant="outlined"
              size="small"
              className="flex-1"
              {...register("code", {
                required: "请输入您的验证码",
              })}
              onBlur={() => {
                handleBlur("code")
              }}
            />
            <Button
              variant="outlined"
              className="w-28 ml-4"
              onClick={handleClick}
              disabled={count !== SECONDS}>
              {count === SECONDS ? "发送验证码" : count}
            </Button>
          </div>
          <ErrorMessage
            errors={errors}
            name="code"
            render={({ message }) => (
              <p className="text-railway_error text-sm absolute top-[42px] left-0">{message}</p>
            )}
          />
        </div>

        <div className="relative pb-[70px]">
          <Select
            error={Boolean(errors.code)}
            id="icon"
            fullWidth
            size="small"
            className="absolute h-10"
            defaultValue={1}>
            {selectOption.map((item) => (
              <MenuItem value={item.value} key={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div className="relative pb-[70px]">
          <TextField
            {...register("name", { required: "请输入您的名字" })}
            variant="outlined"
            label="姓名"
            size="small"
            className="absolute h-10"
            error={Boolean(errors.name)}
            fullWidth
            onBlur={() => {
              handleBlur("name")
            }}
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => (
              <p className="text-railway_error text-sm absolute top-[42px]">{message}</p>
            )}
          />
        </div>

        <div className="relative pb-[70px]">
          <TextField
            {...register("job", { required: "请输入您的职务" })}
            variant="outlined"
            label="职务"
            size="small"
            className="absolute h-10"
            fullWidth
            error={Boolean(errors.job)}
            onBlur={() => {
              handleBlur("job")
            }}
          />
          <ErrorMessage
            errors={errors}
            name="job"
            render={({ message }) => (
              <p className="text-railway_error text-sm absolute top-[42px]">{message}</p>
            )}
          />
        </div>

        <Button type="submit" variant="contained" className="bg-[#1565c0] mx-auto block mt-6">
          提交注册
        </Button>
      </form>
    </div>
  )
}

export default ApplyForm
