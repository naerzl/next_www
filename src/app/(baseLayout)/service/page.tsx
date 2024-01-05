"use client"
import { IconButton, InputAdornment, InputBase, Divider } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import React from "react"
import { useRouter } from "next/navigation"

const mayBeFind = [
  {
    col: [
      {
        text: "项目如何创建？",
      },
      {
        text: "项目如何转正？",
      },
      {
        text: "项目已过期？",
      },
    ],
  },
  {
    col: [
      {
        text: "如何注册账号？",
      },
      {
        text: "App登录失败？",
      },
      {
        text: "导出检验批？",
      },
    ],
  },
  {
    col: [
      {
        text: "施工日志填写？",
      },
      {
        text: "快速创建工程结构？",
      },
      {
        text: "如何生成物资需求计划？",
      },
    ],
  },
]

const tabsList = [
  {
    name: "文档中心",
    path: "/documentCenter",
  },
  {
    name: "视频指导",
    path: "",
  },
  {
    name: "开发者中心",
    path: "",
  },
  {
    name: "下载中心",
    path: "/downloadCenter",
  },
]

const newsList = [
  {
    titile: "【文档】快速入门操作手册",
    date: "2024-01-02",
  },
  {
    titile: "【文档】创建项目操作手册",
    date: "2024-01-02",
  },
  {
    titile: "【文档】客户端工程管理操作手册",
    date: "2024-01-03",
  },
  {
    titile: "【文档】生成物资需求计划操作手册",
    date: "2024-01-03",
  },
  {
    titile: "【文档】物资配合比操作手册",
    date: "2024-01-03",
  },
  {
    titile: "【文档】物资损耗系数操作手册",
    date: "2024-01-03",
  },
  {
    titile: "【文档】施工计划配置操作手册",
    date: "2024-01-03",
  },
  {
    titile: "【文档】工程结构操作手册",
    date: "2024-01-03",
  },
]

const bottomList = [
  {
    title: "售前咨询",
    icon: "icon-phone",
    content: "18059802645",
    type: "phone",
  },
  {
    title: "售后服务",
    icon: "icon-phone",
    content: "18059802042",
    type: "phone",
  },
  {
    title: "商务合作",
    icon: "icon-duanxinguanli",
    content: "business@zctc.cc",
    type: "email",
  },
]
function Service() {
  const router = useRouter();
  const goToPage = (tab: string) => {
    if (tab === '') {
      console.log('111')
    } else if (tab === '/documentCenter') {
      window.open(tab)
    } else {
      router.push(tab);
      console.log(tab);
      
    }
  };
  function handleContact(type: string, content: string) {
    if (type === "phone") {
      window.location.href = `tel:${content}`;
    } else if (type === "email") {
      window.location.href = `mailto:${content}`;
    }
  };
  return (
    <>
      <main className="mt-16 w-full mx-auto service ">
        {/* 搜索 */}
        <div className="banner h-[31.25rem] bg-railway_deep_red overflow-hidden text-center w-full">
          <div className="max-w-[1920px] mx-auto w-full flex flex-col justify-center gap-y-8 items-center h-full">
            <h2 className="text-center text-white text-[40px] ">欢迎使用服务支持</h2>
            <InputBase
              className="w-[580px] bg-[#f8fafb] border rounded-md px-2 mx-auto h-12"
              placeholder="搜索服务与支持"
              size="medium"
              startAdornment={
                <InputAdornment position="start">
                  <IconButton
                    type="button"
                    edge="end"
                    sx={{ p: "10px" }}
                    aria-label="search"
                    disableRipple>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
        </div>

        <div className="max-w-[1920px] mx-auto">
          <div className="bg-[#f2f2f2] overflow-hidden pt-3 pb-6">
            <div className="w-3/4  mx-auto ">
              <h4 className="text-lg mt-5 mb-3">您可能要找</h4>
              <ul className="flex justify-between px-2">
                {mayBeFind.map((row, index) => (
                  <li className="w-60" key={index}>
                    <ul>
                      {row.col.map((col, index) => (
                        <li
                          key={index}
                          className="h-10 border-b mb-2 border-[#797979] text-railway_303 text-sm leading-10 hover:font-bold cursor-pointer">
                          {col.text}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-3/4  mx-auto">
            <ul className="flex justify-between py-14 text-center px-28">
              {tabsList.map((tab) => (
                <li
                  onClick={() => goToPage(tab.path)}
                  key={tab.name}
                  className={`w-49 h-25 rounded-lg border border-[#797979] text-xl text-railway_303 leading-[6.25rem] hover:bg-[#f5f5f5] 
                  ${tab.path === "/documentCenter" ? "bg-white" : "bg-[#D7D7D7]"}`}>
                  {tab.name}
                </li>
              ))}
            </ul>
            <Divider sx={{ bgcolor: "#000" }} orientation="horizontal" />
            <div className="text-railway_303 ">
              <div className="flex justify-between py-6 pr-6">
                <span className="text-2xl ">最近更新</span>
                <span className="text-lg self-end">更新日期</span>
              </div>
              <ul className="pl-5 pr-6">
                {newsList.map((news) => (
                  <li key={news.titile} className="flex justify-between py-2">
                    <span>{news.titile}</span>
                    <span>{news.date}</span>
                  </li>
                ))}
              </ul>
              <Divider sx={{ bgcolor: "#000", my: 1 }} orientation="horizontal" />
              <div className="text-right text-[#7e0000] mb-5 mt-3 pr-4">
                <button className="text-lg">查看全部</button>
              </div>
            </div>
          </div>

          <div className="bg-[#f2f2f2]  w-3/4 mx-auto py-10  mb-10">
            <ul className="flex justify-between px-32 items-center h-full">
              {bottomList.map((item, index) => (
                <li key={index} className="text-center w-44">
                  <div className="text-3xl text-center">{item.title}</div>
                  <button className="text-sm py-2 px-4 my-7 bg-railway_deep_red text-white"
                    onClick={() => handleContact(item.type, item.content)}>
                    立即咨询
                  </button>
                  <div className="flex items-center justify-center gap-2">
                    <i className={`iconfont ${item.icon} text-[2.25rem]`}></i>
                    <span className="text-lg">{item.content}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

export default Service
