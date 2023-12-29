'use client'
import { IconButton, InputAdornment, InputBase, Divider } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import React from "react"
import { useRouter } from "next/navigation"

export const metadata = {
  title: "服务支持",
  description: "这是服务支持页面",
}

const mayBeFind = [
  {
    col: [
      {
        text: "没有收到授权邮件？",
      },
      {
        text: "授权账户信息不匹配？",
      },
      {
        text: "验证激活失败？",
      },
    ],
  },
  {
    col: [
      {
        text: "各版本是否能够相互转换？",
      },
      {
        text: "如何在企业中部署？",
      },
      {
        text: "离线环境如何部署？",
      },
    ],
  },
  {
    col: [
      {
        text: "拜访数据中心",
      },
      {
        text: "关于营销政策和售后政策",
      },
      {
        text: "数据安全实验室",
      },
    ],
  },
]

const tabsList = [
  {
    name: "文档中心",
    path: '/documentCenter'
  },
  {
    name: "视频指导",
    path: ''
  },
  {
    name: "开发者中心",
    path: ''
  },
  {
    name: "下载中心",
    path: '/downloadCenter'
  },
]

const newsList = [
  {
    titile: "【文档】Windows环境下数据迁移到Linux环境操作手册 V3.0.2版",
    date: "2023-06-25",
  },
  {
    titile: "【文档】Linux环境下数据迁移到Windows环境操作手册 V1.2.0版",
    date: "2023-06-25",
  },
  {
    titile: "【下载】数字证书增量更新包 V20.04.12",
    date: "2023-06-25",
  },
  {
    titile: "【文档】用户手册 V9.5版",
    date: "2023-06-25",
  },
  {
    titile: "【开发】开发者平台增加新通道",
    date: "2023-06-25",
  },
  {
    titile: "【视频】新手入门指引教程 V3.0",
    date: "2023-06-25",
  },
  {
    titile: "【下载】数字证书增量更新包 V20.03.11",
    date: "2023-06-25",
  },
  {
    titile: "【下载】Windows驱动程序包 V20.16.9",
    date: "2023-06-25",
  },
]

const bottomList = [
  {
    title: "售前咨询",
    icon: "icon-phone",
    content: "18059802645",
  },
  {
    title: "售后服务",
    icon: "icon-phone",
    content: "18059802042",
  },
  {
    title: "商务合作",
    icon: "icon-duanxinguanli",
    content: "business@zctc.cc",
  },
]
function Service() {
  const router = useRouter();
  const goToPage = (tab:string) => {
    if(tab === ''){
        console.log('111')
    }else{
      console.log(tab)
      router.push(tab);
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
                  className="w-49 h-25 rounded-lg border border-[#797979] text-xl text-railway_303 leading-[6.25rem] hover:bg-[#f5f5f5]">
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
                  <button className="text-sm py-2 px-4 my-7 bg-railway_deep_red text-white">
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
