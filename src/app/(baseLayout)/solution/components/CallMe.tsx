import React from "react"

function CallMe() {
  return (
    <div className="mt-10">
      <div className="flex h-14 items-end gap-2 border-b-2 mb-5 pb-2 text-black">
        <h4 className="text-2xl font-bold ">联系我们</h4>
        <p className="text-sm">选择合适的配置方案</p>
      </div>
      <div className="mask h-[32.5rem] border relative  mb-10 ">
        <img
          className="absolute top-0 block right-0 h-full -z-10"
          src="/static/image/solution/bg4.png"
          alt=""
        />
        <div
          className="absolute top-1/2 -translate-y-32 py-[36px]"
          style={{ backgroundColor: "rgba(0,0,0,.5)" }}>
          <div className="grid gap-y-4 px-8 ">
            <p className="text-2xl  mb-3">联系售前工程师，帮助您选择合适的配置方案</p>
            <div>
              <button className="bg-[#7e0000] py-1 px-3 text-gray-100 border border-[#e5d2d2] rounded-sm">
                立即咨询
              </button>
            </div>
            <div className="flex items-center">
              <i className="iconfont icon-phone text-2xl"></i>
              <span>18059802645</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallMe
