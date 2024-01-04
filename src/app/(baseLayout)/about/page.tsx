import React from "react"
import DevelopmentHistory from "./components/DevelopmentHistory"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "关于我们",
  description: "这是关于我们页面",
}

function About() {
  return (
    <>
      <main className="mt-16 w-full mx-auto about overflow-auto">
        <div
          className="banner relative overflow-hidden h-[500px]"
          style={{ background: "rgba(0,0,0,.4)" }}>
          <img
            src="/static/image/about/banner.jpg"
            className="absolute top-0 -z-10 h-full w-full object-left-top object-cover"
            alt=""
          />
          <div className="max-w-[1920px] mx-auto">
            <div className="text-white w-3/4 mx-auto mt-28 mb-10">
              <h3 className="text-[40px]">关于我们</h3>
              <p className="text-lg mt-5 mb-4">
                基于数字化技术，提供适用于各施工企业项目不同施工阶段的方案，以满足对工程数字化的需求
              </p>
              <button className="py-1 px-3 border border-[#e5d2d2]">立即咨询</button>
            </div>
          </div>
        </div>

        <div className=" max-w-[1920px] mx-auto">
          <div className="w-3/4 mx-auto mt-14">
            <div className="flex justify-between gap-10 items-center text-railway_303 mb-5 px-4">
              <h2 className="text-3xl font-bold flex-shrink-0 border-b-2 border-railway_deep_red pb-2">
                公司简介
              </h2>
              <p className="text-xl leading-9">
                北京筑宬科技是一家致力于工程数字化开发的企业，为施工企业提供全方位的工程数字化解决方案，深耕行业数十载，明确了解行业痛点，可以提供从项目开始至项目竣工一站式工程资料解决方案，同时为施工企业过程管理资料提供自动化的生成服务。
              </p>
            </div>
            <div className="w-full h-87  relative overflow-hidden rounded-sm">
              <div className="w-full h-full mask absolute top-0 left-0 z-10"></div>
              <img
                src="/static/image/about/u5505.jpg"
                className="w-full h-full object-cover"
                alt=""
                style={{ objectPosition: "0 -305px" }}
              />
            </div>
          </div>

          <div className="w-3/4 mx-auto mt-14 bg-[#f2f2f2] p-8">
            <div className="w-full mx-auto overflow-hidden">
              <div className="flex justify-between gap-10 items-center text-railway_303 mb-5">
                <p className="text-xl leading-9">
                  公司成立于2023年5月，注重锐意革新，始终坚持创新、诚信、客户至上原则，提供最贴近用户的工程数字化服务，公司始终以客户需求为服务核心，用最专业的服务打造出让客户满意的产品。
                </p>
                <h2 className="text-3xl font-bold flex-shrink-0 border-b-2 border-railway_deep_red pb-2">
                  服务宗旨
                </h2>
              </div>
              <div className="w-full h-85">
                <div className="w-full h-full relative overflow-hidden rounded-sm">
                  <div className="w-full h-full mask absolute top-0 left-0 z-10"></div>
                  <img
                    src="/static/image/about/u5954.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-3/4 mx-auto mt-14">
            <div className="flex justify-between gap-10 items-center text-railway_303 mb-5 px-4">
              <h2 className="text-3xl font-bold flex-shrink-0 border-b-2 border-railway_deep_red pb-2">
                商业价值
              </h2>
              <p className="text-xl leading-9">
                筑宬科技设计开发的产品从根本上解决了工程行业数字化的问题，将项目的设计数据、过程数据全部收集到系统，然后再通过系统进行逐级汇总，最终将过程中所需的资料自动的生成，真正解放了管理人员，使工程管理更加适应时代的进步，商业价值巨大。
              </p>
            </div>
            <div className="w-full h-85  relative overflow-hidden rounded-sm">
              <div className="w-full h-full mask absolute top-0 left-0 z-10"></div>
              <img
                src="/static/image/about/u5991.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>

          <DevelopmentHistory />
        </div>
      </main>
    </>
  )
}

export default About
