"use client"
import { useSearchParams } from "next/navigation"
import React from "react"
import CallMe from "./CallMe"

function SolutionContent() {
  const searchParams = useSearchParams()

  const [tab, setTab] = React.useState(searchParams.get("tag") || 1)
  const handleChangeTab = (tab: number) => {
    setTab(tab)
  }
  return (
    <>
      <div className="banner relative overflow-hidden h-[500px]">
        <img
          src="/static/image/solution/solotion_bg.jpg"
          className="absolute top-0 -z-10 h-full w-full object-left-top object-cover"
          alt=""
        />
        <div className="max-w-[1920px] mx-auto">
          <div className="text-white w-3/4 mx-auto mt-28 mb-10">
            <h3 className="text-[40px]">解决方案</h3>
            <p className="text-lg mt-5 mb-4">
              基于数字化技术，提供适用于各施工企业项目不同施工阶段的方案，以满足对工程数字化的需求
            </p>
            <button className="py-1 px-3 border border-[#e5d2d2]">立即咨询</button>
            <ul className="flex mt-25 justify-between text-center text-lg">
              <li
                style={tab == 1 ? { backgroundColor: "rgba(255,255,255,.15)" } : {}}
                className="w-36 border border-white rounded-md py-4 px-6 cursor-pointer"
                onClick={() => handleChangeTab(1)}>
                项目伊始
              </li>
              <li
                style={tab == 2 ? { backgroundColor: "rgba(255,255,255,.15)" } : {}}
                className="w-36 border border-white rounded-md py-4 px-6 cursor-pointer"
                onClick={() => handleChangeTab(2)}>
                项目中期
              </li>
              <li
                style={tab == 3 ? { backgroundColor: "rgba(255,255,255,.15)" } : {}}
                className="w-36 border border-white rounded-md py-4 px-6 cursor-pointer"
                onClick={() => handleChangeTab(3)}>
                项目后期
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto text-white">
        {/* 前期 */}
        {tab == 1 && (
          <div className="mx-auto w-3/4 anaphase mt-8">
            <div className="flex h-14 items-end gap-2 border-b-2 mb-5 pb-2 text-black">
              <h4 className="text-2xl font-bold ">项目前期</h4>
              <p className="text-sm">适用于未开工或刚开工不久的项目</p>
            </div>

            <div className="mask h-[32.5rem] border relative">
              <img
                className="absolute top-0 block h-full w-full object-cover -z-10"
                src="/static/image/solution/bg10.jpg"
                alt=""
              />
              <div
                className="absolute top-10 left-0 w-full py-[18px]"
                style={{ backgroundColor: "rgba(0,0,0,.4)" }}>
                <p className="w-full text-left text-3xl leading-[46px]  text-white   pl-12">
                  从项目进场开始就应用筑宬工程数字化软件是最佳的选择<br></br>
                  软件可以生成从项目开始到项目结束所涉及的<br></br>
                  施工组织设计、施工方案、施工交底、汇报材料、检验批、施工日志、记录表、试验报告、物资需求计划、物资进场、施工计划等各种资料
                </p>
              </div>
            </div>
            <div className="mask h-[32.5rem] border relative">
              <img
                className="absolute top-0 block w-full h-full object-cover -z-10"
                src="/static/image/solution/bg9.jpg"
                alt=""
              />
              <div
                className="absolute top-1/2 -translate-y-1/2  w-full py-[18px]"
                style={{ backgroundColor: "rgba(0,0,0,.5)" }}>
                <p className="pl-12 text-3xl  w-full text-left  leading-[46px] text-white  ">
                  利用系统还可以将过程资料随时的归档<br></br>
                  而且非常方便的进行数字化，项目管理过程中的资料不再费事得调用纸质版的资料，直接调用数字化的资料即可
                </p>
              </div>
            </div>
            <div className="mask h-[32.5rem] border relative">
              <img
                className="absolute top-0 block w-full h-full object-cover -z-10"
                src="/static/image/solution/bg8.jpg"
                alt=""
              />
              <div
                className="absolute top-1/2 -translate-y-1/2  w-full py-[18px]"
                style={{ backgroundColor: "rgba(0,0,0,.5)" }}>
                <p className="pr-12  text-3xl  text-right text-white  leading-[46px]">
                  通过系统可以将传统的过程管理<br></br>
                  以纸质版资料为主的工作方式，转变为以数字化资料为主的工作方式<br></br>
                  前者管理费事，查询困难，后者查询快捷，管理方便，最终将大幅提高管理效率
                </p>
              </div>
            </div>

            <CallMe />
          </div>
        )}

        {/* 中期 */}
        {tab == 2 && (
          <div className="mx-auto w-3/4 anaphase mt-8">
            <div className="flex h-14 items-end gap-2 border-b-2 mb-5 pb-2 text-black">
              <h4 className="text-2xl font-bold ">项目中期</h4>
              <p className="text-sm">适用于已经开始干了一定规模或者还剩余一定规模的项目</p>
            </div>

            <div className="mask h-[32.5rem] border relative">
              <img
                className="absolute top-0 block h-full w-full -z-10 object-cover"
                src="/static/image/solution/bg7.jpg"
                alt=""
              />
              <div
                className="absolute top-10 left-0 w-full py-[18px]"
                style={{ backgroundColor: "rgba(0,0,0,.5)" }}>
                <p className="w-full text-left text-3xl leading-[46px]  text-white   pl-12">
                  项目中期是指项目已经开工一段时间了，相应的资料生成的比较多了，无法从头开始应用系统的项目
                </p>
              </div>
            </div>
            <div className="mask h-[32.5rem] border relative">
              <img
                className="absolute top-0 block w-full h-full object-cover -z-10"
                src="/static/image/solution/bg6.jpg"
                alt=""
              />
              <div
                className="absolute top-1/2 -translate-y-1/2  w-full py-[18px]"
                style={{ backgroundColor: "rgba(0,0,0,.5)" }}>
                <p className="pl-12 text-3xl  w-full text-left  leading-[46px] text-white  ">
                  针对已经进入项目中期的项目，用户可以选择全面应用或部分应用<br></br>
                  如果采用全面应用的话，我们会帮助用户把前期要做的工作集中补充完善，后续工作自动化处理
                  <br></br>
                  针对某些移交竣工的资料，也可以通过系统把前期的资料重新生成或将已有的成果纳入系统，统一管理
                </p>
              </div>
            </div>
            <div className="mask h-[32.5rem] border relative">
              <img
                className="absolute top-0 block w-full h-full object-cover -z-10"
                src="/static/image/solution/bg5.jpg"
                alt=""
              />
              <div
                className="absolute top-1/2 -translate-y-1/2  w-full py-[18px]"
                style={{ backgroundColor: "rgba(0,0,0,.5)" }}>
                <p className="pr-12  text-3xl  text-right text-white  leading-[46px]">
                  如果是刚进入中期的项目<br></br>
                  可以下决心应用我们的软件系统，使用后您会发现这是做的非常明智的选择
                </p>
              </div>
            </div>

            <CallMe />
          </div>
        )}

        {/* 前期 */}
        {tab == 3 && (
          <div className="mx-auto w-3/4 anaphase mt-8">
            <div className="flex h-14 items-end gap-2 border-b-2 mb-5 pb-2 text-black">
              <h4 className="text-2xl font-bold ">项目后期</h4>
              <p className="text-sm">适用于项目即将竣工，开始整理资料之前的阶段</p>
            </div>

            <div className="mask h-[32.5rem] border relative">
              <img
                className="absolute top-0 block h-full -z-10"
                src="/static/image/solution/bg1.jpg"
                alt=""
              />
              <div
                className="absolute top-10 left-0 w-full py-[18px]"
                style={{ backgroundColor: "rgba(0,0,0,.5)" }}>
                <p className="w-full text-left text-3xl leading-[46px]  text-white   pl-12">
                  筑宬软件<br></br>
                  针对处于项目后期的工程项目提供的服务<br></br>
                  主要是竣工资料的文整和前期资料的集中修正和补缺
                </p>
              </div>
            </div>
            <div className="mask h-[32.5rem] border relative">
              <img
                className="absolute top-0 block w-full h-full object-cover -z-10"
                src="/static/image/solution/bg2.jpg"
                alt=""
              />
              <div
                className="absolute top-1/2 -translate-y-1/2  w-full py-[18px]"
                style={{ backgroundColor: "rgba(0,0,0,.5)" }}>
                <p className="pl-12 text-3xl  w-full text-left  leading-[46px] text-white  ">
                  竣工文整通过专业的服务, 可以快速的进行整理移交工作<br></br>
                  针对前期资料不全或者错误率比较高的项目，软件系统可以通过前期的台账<br></br>
                  快速准确的生成所需的竣工资料，而且确保各个部门之间数据的关联准确，做到免检
                </p>
              </div>
            </div>
            <div className="mask h-[32.5rem] border relative">
              <img
                className="absolute top-0 block w-full h-full object-cover -z-10"
                src="/static/image/solution/bg3.jpg"
                alt=""
              />
              <div
                className="absolute top-1/2 -translate-y-1/2  w-full py-[18px]"
                style={{ backgroundColor: "rgba(0,0,0,.5)" }}>
                <p className="pr-12  text-3xl  text-right text-white  leading-[46px]">
                  如果您的项目已经到项目后期，可以放心的把项目交给我们<br></br>
                  我们可以通过数字化系统帮您快速移交档案资料，避免后期的大量的人力投入<br></br>
                  真正的做到“工竣料清”
                </p>
              </div>
            </div>
            <CallMe />
          </div>
        )}
      </div>
    </>
  )
}

export default SolutionContent
