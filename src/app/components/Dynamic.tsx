"use client"
import React from "react"

const side1 = "/static/image/u5505.jpg"
const side2 = "/static/image/u5506.jpg"
const side3 = "/static/image/u5507.jpg"

const textList = [
  {
    title: "数字化驱动建筑业高质量发展",
    text: "随着科技飞速发展，数字化已经成为各行各业的发展趋势。建筑业从增量时代逐渐转向存量时代，也由粗放式逐渐转向精细化管控。数字化转型不仅有助于提高建筑企业的竞争力，还能更好地满足人们的需求。",
  },
  {
    title: "推动施工企业成本精细化管理",
    text: "党的二十大报告提出：高质量发展是全面建设社会主义现代化国家的首要任务，各行各业都在深入思考如何实现高质量发展，建筑业也不例外，而其中非常重要的参与方就是施工企业。",
  },
  {
    title: "数字化转型关键在人",
    text: "当前，我国经济由高速增长阶段转向高质量发展阶段，建筑业进入转型升级发展的关键时期，在技术变革、产业升级多重因素叠加之下，建筑企业人力资源管理的要求和标准不断变化，建筑产业工人队伍老龄化严重、高技能人才青黄不接等问题也使得建筑企业人力资源管理面临较为严峻的挑战",
  },
]

function Dynamic() {
  const [active, setActive] = React.useState(0)

  const timeId = React.useRef<{ id: number }>({ id: -1 })

  React.useEffect(() => {
    timeId.current.id = window.setTimeout(() => {
      active >= 2 ? setActive(0) : setActive((pre) => pre + 1)
    }, 5000)
    return () => {
      clearTimeout(timeId.current.id)
    }
  })

  const hanldeClickSwiper = (index: number) => {
    setActive(index)
  }

  const changeSilde = () => {
    switch (active) {
      case 0:
        return (
          <div className="w-full h-full flex justify-center items-center aspect-video relative">
            <img src={side1} alt="" className="object-cover block w-full h-full" />
            <div className="w-full h-full mask3 absolute z-10"></div>
          </div>
        )
      case 1:
        return (
          <div className="w-full h-full flex justify-center items-center aspect-video relative">
            <img src={side2} alt="" className="object-cover block w-full h-full" />
            <div className="w-full h-full mask3 absolute z-10"></div>
          </div>
        )
      default:
        return (
          <div className="w-full h-full flex justify-center items-center aspect-video relative">
            <img src={side3} alt="" className="object-cover block w-full h-full" />
            <div className="w-full h-full mask3 absolute z-10"></div>
          </div>
        )
    }
  }

  return (
    <div className="dynamic w-3/4  mt-10 mx-auto mb-10">
      <h4 className="font-bold text-2xl mb-6 Xfull:text-4xl Xfull:">最新动态</h4>
      <div className="h-[550px]  flex">
        <div className="w-3/5 h-full">
          <div className="w-full h-full relative">
            {changeSilde()}
            <div
              className="w-full h-24 text-white absolute bottom-0 indent-8 px-4 z-10 pt-5"
              style={{ backgroundColor: "rgba(0,0,0,.7)" }}>
              云计算、大数据、人工智能、区块链等一系列前沿技术的飞跃式发展，正驱动着企业数字化转型的进程不断加速，尤其在技术与行业深度融合的当下，中国企业数字化转型也出现了新的机遇与挑战。
            </div>
          </div>
        </div>
        <div className="flex-1 bg-[#f2f2f2] grid p-3 text-left">
          {textList.map((item, index) => (
            <div
              onClick={() => {
                hanldeClickSwiper(index)
              }}
              className={`${
                active == index ? "bg-[#d7d7d7]" : ""
              } px-4 py-3 rounded-sm cursor-pointer`}
              key={index}>
              <h4 className="text-xl  underline underline-offset-[6px] mb-3">{item.title}</h4>
              <p className="indent-8 leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dynamic
