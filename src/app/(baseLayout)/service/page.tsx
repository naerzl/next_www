"use client"
import { IconButton, InputAdornment, InputBase, Divider, FilterOptionsState } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import React from "react"
import { useRouter } from "next/navigation"
import { FILE_CONTENT_KEY, HIGH_LIGHT_KEY, OPEN_LIST_KEY } from "../../remove"
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import "../service/index.scss"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { CircularProgress, Typography } from '@mui/material';

const mayBeFind = [
  {
    col: [
      {
        text: "项目如何创建？",
        key: "create-project-first",
      },
      {
        text: "项目如何转正？",
        key: "",
      },
      {
        text: "项目已过期？",
        key: "",
      },
    ],
  },
  {
    col: [
      {
        text: "如何注册账号？",
        key: "",
      },
      {
        text: "App登录失败？",
        key: "",
      },
      {
        text: "导出检验批？",
        key: "inspection-batch",
      },
    ],
  },
  {
    col: [
      {
        text: "施工日志填写？",
        key: "",
      },
      {
        text: "快速创建工程结构？",
        key: "create-project",
      },
      {
        text: "如何生成物资需求计划？",
        key: "demand-planning",
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
    path: "/ceshi",
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
    key: "create-project-first",
  },
  {
    titile: "【文档】创建项目操作手册",
    date: "2024-01-02",
    key: "create-project",
  },
  {
    titile: "【文档】客户端工程管理操作手册",
    date: "2024-01-03",
    key: "structures",
  },
  {
    titile: "【文档】生成物资需求计划操作手册",
    date: "2024-01-03",
    key: "demand-planning",
  },
  {
    titile: "【文档】物资配合比操作手册",
    date: "2024-01-03",
    key: ""
  },
  {
    titile: "【文档】物资损耗系数操作手册",
    date: "2024-01-03",
    key: ""
  },
  {
    titile: "【文档】施工计划配置操作手册",
    date: "2024-01-03",
    key: "construction-plan-item",
  },
  {
    titile: "【文档】工程结构操作手册",
    date: "2024-01-03",
    key: "engineering-structure",
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
  const router = useRouter()
  // tabsList列表跳转
  const goToPage = (tab: string) => {
    if (tab === "") {
    } else if (tab === "/documentCenter") {
      localStorage.removeItem(FILE_CONTENT_KEY)
      localStorage.removeItem(OPEN_LIST_KEY)
      localStorage.removeItem(HIGH_LIGHT_KEY)
      window.open("/documentCenter/doc?key=create-project-first")
    } else {
      router.push(tab)
      console.log(tab)
    }
  }
  // 电话邮箱咨询
  function handleContact(type: string, content: string) {
    if (type === "phone") {
      window.location.href = `tel:${content}`
    } else if (type === "email") {
      window.location.href = `mailto:${content}`
    }
  }
  // 您可能要找？跳转
  function handleDocumentClick(key: string) {
    const documentUrl = `/documentCenter/doc?key=${key}`
    window.open(documentUrl)
  }
  // 最近更新跳转
  function handleUpdata(key: string) {
    const updataUrl = `/documentCenter/doc?key=${key}`
    window.open(updataUrl)
  }
  // 搜索栏
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const keyword = [
    { label: "项目管理/创建项目", key: "create-project", title: "申请项目、试用" },
    { label: "登录/首次登录", key: "first-login", title: "登录、忘记密码、退出登录" },
    { label: "登录/非首次登录", key: "non-first-login", title: "非首次、登录、忘记密码、退出登录" },
    { label: "工程管理/构筑物/构筑物", key: "structures-item", title: "工程管理、构筑物" },
    { label: "工程管理/构筑物/工程结构", key: "engineering-structure", title: "新建、构筑物、工程结构、结构、循环" },
    { label: "工程管理/构筑物/设计数据", key: "design-data", title: "设计数据、数据" },
    { label: "工程管理/构筑物/工序管理", key: "process-management", title: "工序、工作量" },
    { label: "工程管理/单位工程", key: "unit-works", title: "单位工程、解除、关联范围" },
    { label: "工程管理/工点数据", key: "work-site-data", title: "工点数据、解除、关联范围" },
    { label: "物资管理/物资进场", key: "material-entry-managements", title: "材料、物资进场、进场、登记" },
    { label: "物资管理/物资加工", key: "material-processing-managements", title: "材料、物资加工、加工、登记" },
    { label: "物资管理/物资领用", key: "material-requisition-managements", title: "材料、物资领用、领用、登记" },
    { label: "试验管理/试验列表", key: "trial-list", title: "材料、试验、登记" },
    { label: "功能模块/施工计划/施工计划", key: "construction-plan-item", title: "横道图、工期、施工计划、排期" },
    { label: "功能模块/施工计划/基础数据", key: "basic-data", title: "设计数据" },
    { label: "功能模块/施工计划/检验批", key: "inspection-batch", title: "检验批、记录表、质量验收" },
    { label: "功能模块/施工计划/需求计划", key: "demand-planning", title: "物资、物资需求、物资明细、明细" },
    { label: "用户管理/成员列表", key: "member-list", title: "成员、角色、成员权限、权限" },
    { label: "竣工管理/竣工资料", key: "completion-data", title: "资料、模板" },
    { label: "导出管理/导出任务", key: "export-task", title: "检验批、导出任务、导出、下载" },
    { label: "App/物资进场", key: "material-entry", title: "App、材料、物资进场、进场、登记" },
    { label: "App/物资试验", key: "material-testing", title: "App、材料、试验、登记" },
    { label: "App/物资加工", key: "material-processing", title: "App、材料、物资加工、加工、登记" },
    { label: "App/物资领用", key: "material-requisition", title: "App、材料、物资领用、领用、登记" },
    { label: "App/施工日志", key: "construction-log", title: "App、施工日志、日志" },
    { label: "App/个人中心", key: "personal-center", title: "App、项目信息、账号" },
    { label: "App/设置", key: "set-up", title: "App、退出登录" },
  ];
  // 搜索跳转
  function handleSearch(selectedOption: { label: string; key: string } | null) {
    if (selectedOption) {
      const { key } = selectedOption;
      const searchUrl = `/documentCenter/doc?key=${key}`
      window.open(searchUrl);
      setTimeout(() => {
        setInputValue('');
      }, 100); 
    }
    
  }
  function CustomNoOptions() {
    return (
      <Typography>未找到相关内容</Typography>
    );
  }
  // 搜索框下拉提示的开关
  function handleInputChange(event: any, value: any) {
    setInputValue(value);
    if (value) {
      setOpen(true);
    } else {
      setOpen(false);
      setInputValue('');
    }
  }
  return (
    <>
      <main className="mt-16 w-full mx-auto service dropdownContainer">
        {/* 搜索 */}
        <div className="banner h-[31.25rem] bg-railway_deep_red overflow-hidden text-center w-full">
          <div className="max-w-[1920px] mx-auto w-full flex flex-col justify-center gap-y-8 items-center h-full">
            <h2 className="text-center text-white text-[40px] ">欢迎使用服务支持</h2>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={keyword}
              filterOptions={function (options: { label: string; key: string; title: string; }[]): { label: string; key: string; title: string; }[] {
                const mate = keyword.filter((suggestion) =>
                  suggestion.title.toLowerCase().includes(inputValue)
                );
                return mate
              }}
              getOptionLabel={function (mate) {
                return mate.label
              }}
              sx={{ width: 580, background: "#f8fafb", borderRadius: '8px' }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="欢迎使用服务支持"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton className="iconBtn">
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
              onChange={(event, value) => handleSearch(value)}
              noOptionsText={<CustomNoOptions />}
              open={open}
              onClose={() => setOpen(false)}
              onInputChange={handleInputChange}
              inputValue={inputValue}
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
                        <li key={index}
                          className="h-10 border-b mb-2 border-[#797979] text-railway_303 text-sm leading-10 hover:font-bold cursor-pointer"
                          onClick={() => handleDocumentClick(col.key)}>
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
                    <span onClick={() => handleUpdata(news.key)} className="updata">{news.titile}</span>
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
                  <button
                    className="text-sm py-2 px-4 my-7 bg-railway_deep_red text-white"
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
