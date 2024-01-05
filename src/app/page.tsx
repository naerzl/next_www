import "swiper/css"
import "@/styles/home.scss"
import HomeSwiper from "./components/HomeSwiper"
import React from "react"

import { Metadata } from "next"
import Dynamic from "./components/Dynamic"
import dynamic from "next/dynamic"
import Footer from "@/components/Footer"
const DynamicComponent = dynamic(() => import("@/components/Nav"), { ssr: false })
// 111

export const metadata: Metadata = {
  title: "首页",
  description: "12-29 app下载",
}

const teamList = [
  {
    name: "Mr ZHNAG",
    job: "首席执行官",
    src: "/static/image/avatar2.jpg",
    content:
      "资深品牌管理专家，对中小企业经营管理有独到见解 ，曾服务于多家世界500强跨国企业，具有丰富的国际品牌推广运作及管理经验，观点：态度决定命运、气度决定格局、底蕴的厚度决定事业的高度",
  },
  {
    name: "Miss QIU",
    src: "/static/image/avatar1.jpg",
    job: "首席战略官",
    content:
      "用经济学家的眼光来看待企业的经济效益和利润最大化，用管理学家的眼光看待企业的制度建设和团队管理，用战略学家的眼光高瞻远瞩，用心理学家的眼光走进员工的心理世界。",
  },
  {
    name: "Mr WANG",
    job: "产品经理",
    src: "/static/image/avatar3.png",
    content:
      "多年项目管理经验，擅长市场推广、整合资源在中小企业、快消品行业等领域成功案例众多具有广泛社会人脉，与主流媒体保持多年良好合作关系",
  },
]
const buddyList = [
  {
    name: "中国中铁",
    src: "/static/image/u5539.png",
  },
  { name: "中国铁建", src: "/static/image/u5540.png" },
  { name: "中国交建", src: "/static/image/u5541.png" },
  { name: "中国建筑", src: "/static/image/u5542.png" },
]

export default function Home() {
  return (
    <>
    <DynamicComponent />
      <main className="w-full mx-auto  home ">
        <HomeSwiper />
        <div className="max-w-[1920px] mx-auto">
          <div className="w-full  flex justify-center items-center  mt-5 Xfull:mt-20">
            <img
              src="/static/image/ditu.png"
              alt=""
              className="w-[62.5rem] h-[43.75rem] Xfull:w-[78.125rem] Xfull:h-[54.65rem]"
            />
          </div>
          <div className="team w-3/4  mx-auto mt-5 py-8 Xfull:mt-16">
            <h4 className="font-bold text-2xl mb-4 Xfull:text-4xl Xfull:mb-8">我们的团队</h4>
            <p className="text-lg indent-8 Xfull:text-xl Xfull:leading-8">
              我们是一个充满热情和创造力的团队，由一群年轻有为的专业人士组成。我们的团队成员来自不同的领域，并在各自的领域内拥有着丰富的经验和深厚的技能。团队合作是我们成功的关键。我们注重团队成员之间的合作与互助，以达到更好的项目结果。我们相信，当每个人都能充分发挥他们的特长和技能时，我们的团队将变得更强大、更富有创造力。
            </p>
            <ul className="w-full mt-8 Xfull:mt-14">
              {teamList.map((item, index) => (
                <li
                  className="h-48 flex mt-8 Xfull:mt-20"
                  key={index}
                  style={index % 2 == 1 ? { flexDirection: "row-reverse" } : {}}>
                  <div className="rounded-full h-full aspect-square">
                    <img src={item.src} alt="" className="rounded-full  aspect-square " />
                  </div>
                  <div className="text-4xl mx-8 flex flex-col justify-center gap-y-4">
                    <div>{item.name}</div>
                    <div>{item.job}</div>
                  </div>
                  <div
                    className="w-[37.5rem] flex items-center h-44 Xfull:w-[50rem] px-6 py-4 text-xl  flex-shrink-0 indent-8 Xfull:leading-8"
                    style={{ boxShadow: "0px 5px 10px rgba(0,0,0,.3)" }}>
                    {item.content}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="team w-3/4  mx-auto  mt-5  py-8">
            <h4 className="font-bold text-2xl text-right Xfull:text-4xl">我们的合作伙伴</h4>
            <p className="text-lg leading-6 text-right mt-3 mb-10">信赖，让我们的业务遍布全球</p>
            <ul className="flex h-40 justify-center gap-x-44 ">
              {buddyList.map((item, index) => (
                <li className="" key={index}>
                  <div className="h-32 flex items-center justify-center">
                    <img src={item.src} className="w-32" alt="" />
                  </div>
                  <p className="text-center text-2xl">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>

          <Dynamic />
        </div>
      </main>
      <Footer />
    </>
  )
}
