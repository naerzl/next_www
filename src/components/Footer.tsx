import React from "react"

function Footer() {
  return (
    <footer className={`w-full mx-auto  footer min-w-[90rem] max-h-[16.75rem] phone:hidden`}>
      <div className="relative bg_box">
        <img
          src="/static/image/footer_bg.jpg"
          className="absolute top-0 block w-full h-full object-cover -z-10"
          alt=""
        />
        <div className=" mx-auto pt-8 pb-6  max-w-[1920px]">
          <div className="flex  mx-auto w-3/4   justify-between text-white">
            <div>
              <h3 className="font-bold text-2xl underline-offset-[12px] underline decoration-[3px]">
                产品模块
              </h3>
              <div className="flex mt-8">
                <dl className="mr-20">
                  <dd className="mb-3">检验批</dd>
                  <dd className="mb-3">施工日志</dd>
                  <dd>施工记录</dd>
                </dl>
                <dl className="mr-20">
                  <dt className="mb-3">产值进度</dt>
                  <dd className="mb-3">竣工资料</dd>
                  <dd>施工计划</dd>
                </dl>
                <dl className="mr-20">
                  <dt className="mb-3">物资管理</dt>
                  <dd className="mb-3">试验管理</dd>
                  <dd>台账管理</dd>
                </dl>
                <dl>
                  <dt className="mb-3">克缺管理</dt>
                  <dd>文档管理</dd>
                </dl>
              </div>
            </div>
            <div className="text-right">
              <h3 className="font-bold text-2xl mb-8 underline-offset-[12px] underline decoration-[3px]">
                联系我们
              </h3>
              <div className="flex gap-1 text-sm justify-end">
                <i className="iconfont icon-phone "></i>18059802645
              </div>
              <div className="my-4 flex gap-1 text-sm justify-end">
                <i className="iconfont icon-duanxinguanli "></i>business@zctc.cc
              </div>
              <div className="flex gap-1 text-sm justify-end">
                <i className="iconfont icon-daohangdizhi "></i>
                北京市丰台区航丰路1号院2号楼16层1612
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-1">
        <div className="max-w-[1920px] mx-auto">
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            className="block text-gray-300 text-xs mx-auto w-3/4 ">
            <span>Copyright © 2023 北京筑宬科技有限公司</span>
            <span>京ICP备2023015715号-3</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
