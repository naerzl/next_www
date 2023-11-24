import React from "react"
import "@/styles/apply.scss"
import ApplyForm from "./components/ApplyForm"

function Apply() {
  const img3 = "/static/image/apply/apply_bg2.jpg"

  return (
    <>
      <div className="relative w-full mx-auto  mt-16 apply overflow-hidden  min-w-[90rem] pt-40 pb-28 flex items-center">
        <img src={img3} className="h-full block w-full object-cover absolute top-0 -z-10" alt="" />
        <div className="max-w-[1920px] mx-auto w-full pb-52">
          <div className="w-3/4 mx-auto flex  px-[10px]">
            <div className="text-white  mt-28 w-3/5">
              <h3 className="text-[40px]">申请试用</h3>
              <p className="text-lg mt-5 mb-4">
                针对想深入了解我们的用户，我们开通了试用一个月的服务，有助于深入了解我们的产品
              </p>
              <button className="py-1 px-3 border border-[#e5d2d2]">立即试用</button>
            </div>

            <ApplyForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Apply

export const metadata = {
  title: "申请试用",
  description: "这是申请试用页面",
}
