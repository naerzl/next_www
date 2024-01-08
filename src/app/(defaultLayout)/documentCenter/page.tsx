"use client"
import React from "react"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import Markdown from "markdown-to-jsx"
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material"
import ListItemIcon from "@mui/material/ListItemIcon"
import FiberManualRecord from "@mui/icons-material/FiberManualRecord"
import RadioButtonUnchecked from "@mui/icons-material/RadioButtonUnchecked"
import "./index.scss"
import {
  Huojian,
  Xiangmu,
  Denglu,
  Gongcheng,
  Wuzi,
  Shiyan,
  Jungong,
  Daochu,
  Duoren,
  App,
  Guanli,
} from "../../../../svg"
import { usePathname } from "next/navigation"
export const dynamic = "force-dynamic"

const FILE_CONTENT_KEY = "doc_fileContent"
const HIGH_LIGHT_KEY = "doc_Highlight"
const OPEN_LIST_KEY = "doc_openList"

const menuList: { [key: string]: any } = {
  commonLibrary: {
    title: "快速入门",
    permissionTag: "project_management_module_read",
    iconLogo: <Huojian />,
    children: {
      "create-project-first": {
        title: "创建项目",
        permissionTag: "structure_member_read",
        file: require("../../../../public/markdown/快速入门-1创建项目.md"),
      },
      "basic-configuration": {
        title: "基础配置",
        permissionTag: "unit_project_member_read",
        file: require("../../../../public/markdown/快速入门-2基础配置.md"),
      },
      "construction-plan": {
        title: "施工计划",
        permissionTag: "station_data_member_read",
        file: require("../../../../public/markdown/快速入门-3施工计划.md"),
      },
      "information-filling": {
        title: "信息填写",
        permissionTag: "station_data_member_read",
        file: require("../../../../public/markdown/快速入门-4信息填写.md"),
      },
      "report-export": {
        title: "报告导出",
        permissionTag: "station_data_member_read",
        file: require("../../../../public/markdown/快速入门-5报告导出.md"),
      },
    },
  },
  materialManagement: {
    title: "项目管理",
    permissionTag: "material_management_module_read",
    iconLogo: <Xiangmu />,
    children: {
      "create-project": {
        title: "创建项目",
        permissionTag: "material_approach_member_read",
        file: require("../../../../public/markdown/1项目管理-创建项目.md"),
      },
    },
  },
  testManagement: {
    title: "登录",
    permissionTag: "test_management_module_read",
    iconLogo: <Denglu />,
    children: {
      "first-login": {
        title: "首次登录",
        permissionTag: "material_approach_member_read",
        file: require("../../../../public/markdown/2登录-首次登录.md"),
      },
      "non-first-login": {
        title: "非首次登录",
        permissionTag: "material_approach_member_read",
        file: require("../../../../public/markdown/3登录-非首次登录.md"),
      },
    },
  },
  commonLibrarys: {
    title: "工程管理",
    permissionTag: "project_management_module_read",
    iconLogo: <Gongcheng />,
    children: {
      structures: {
        title: "构筑物",
        permissionTag: "structure_member_read",
        file: require("../../../../public/markdown/4工程管理-构筑物.md"),
        children: {
          "structures-item": {
            title: "构筑物",
            permissionTag: "structure_member_read",
            file: require("../../../../public/markdown/5工程管理-构筑物 -构筑物.md"),
          },
          "engineering-structure": {
            title: "工程结构",
            permissionTag: "structure_member_read",
            file: require("../../../../public/markdown/6工程管理-构筑物-工程结构.md"),
          },
          "design-data": {
            title: "设计数据",
            permissionTag: "structure_member_read",
            file: require("../../../../public/markdown/7工程管理-构筑物-设计数据.md"),
          },
          "process-management": {
            title: "工序管理",
            permissionTag: "structure_member_read",
            file: require("../../../../public/markdown/8工程管理-构筑物-工序管理.md"),
          },
        },
      },
      "unit-works": {
        title: "单位工程",
        permissionTag: "unit_project_member_read",
        file: require("../../../../public/markdown/9工程管理-单位工程.md"),
      },
      "work-site-data": {
        title: "工点数据",
        permissionTag: "station_data_member_read",
        file: require("../../../../public/markdown/10工程管理-工点数据.md"),
      },
    },
  },
  materialManagements: {
    title: "物资管理",
    permissionTag: "material_management_module_read",
    iconLogo: <Wuzi />,
    children: {
      "material-entry": {
        title: "物资进场",
        permissionTag: "material_approach_member_read",
        file: require("../../../../public/markdown/11物资管理-物资进场.md"),
      },
      "material-processing": {
        title: "物资加工",
        permissionTag: "material_processing_member_read",
        file: require("../../../../public/markdown/12物资管理-物资加工.md"),
      },
      "material-requisition": {
        title: "物资领用",
        permissionTag: "receipt_of_materials_member_read",
        file: require("../../../../public/markdown/13物资管理-物资领用.md"),
      },
    },
  },
  testManagements: {
    title: "试验管理",
    permissionTag: "test_management_module_read",
    iconLogo: <Shiyan />,
    children: {
      "trial-list": {
        title: "试验列表",
        permissionTag: "test_list_member_read",
        file: require("../../../../public/markdown/14试验管理-试验列表.md"),
      },
    },
  },
  dataTemplate: {
    title: "功能模块",
    permissionTag: "function_module_module_read",
    iconLogo: <Guanli />,
    children: {
      "construction-plan": {
        title: "施工计划",
        permissionTag: "structure_member_read",
        file: require("../../../../public/markdown/14-1功能模块-施工计划.md"),
        children: {
          "construction-plan-item": {
            title: "施工计划",
            permissionTag: "structure_member_read",
            file: require("../../../../public/markdown/15功能模块-施工计划-施工计划.md"),
          },
          "basic-data": {
            title: "基础数据",
            permissionTag: "structure_member_read",
            file: require("../../../../public/markdown/16功能模块-施工计划-设计数据.md"),
          },
          "inspection-batch": {
            title: "检验批",
            permissionTag: "structure_member_read",
            file: require("../../../../public/markdown/17功能模块-施工计划-检验批.md"),
          },
          "demand-planning": {
            title: "需求计划",
            permissionTag: "structure_member_read",
            file: require("../../../../public/markdown/18功能模块-施工计划-需求计划.md"),
          },
        },
      },
    },
  },
  userManagement: {
    title: "用户管理",
    permissionTag: "user_management_module_read",
    iconLogo: <Duoren />,
    children: {
      "member-list": {
        title: "成员列表",
        permissionTag: "member_management_member_read",
        file: require("../../../../public/markdown/19用户管理-成员列表.md"),
      },
    },
  },
  completionManagement: {
    title: "竣工管理",
    permissionTag: "completion_management_module_read",
    iconLogo: <Jungong />,
    children: {
      "completion-data": {
        title: "竣工资料",
        permissionTag: "completion_data_member_read",
        file: require("../../../../public/markdown/20竣工管理-竣工资料.md"),
      },
    },
  },
  queue: {
    title: "导出管理",
    permissionTag: "export_management_module_read",
    iconLogo: <Daochu />,
    children: {
      "export-task": {
        title: "导出任务",
        permissionTag: "export_task_member_read",
        file: require("../../../../public/markdown/21导出管理-导出任务.md"),
      },
    },
  },
  app: {
    title: "APP",
    permissionTag: "export_management_module_read",
    iconLogo: <App />,
    children: {
      "material-entry": {
        title: "物资进场",
        permissionTag: "receipt_of_materials_member_read",
        file: require("../../../../public/markdown/22app-物资进场登记.md"),
      },
      "material-testing": {
        title: "物资试验",
        permissionTag: "receipt_of_materials_member_read",
        file: require("../../../../public/markdown/25app-物资试验登记.md"),
      },
      "material-processing": {
        title: "物资加工",
        permissionTag: "receipt_of_materials_member_read",
        file: require("../../../../public/markdown/23app-物资加工登记.md"),
      },
      "material-requisition": {
        title: "物资领用",
        permissionTag: "receipt_of_materials_member_read",
        file: require("../../../../public/markdown/24app-物资领用登记.md"),
      },
      "construction-log": {
        title: "施工日志",
        permissionTag: "receipt_of_materials_member_read",
        file: require("../../../../public/markdown/26app-施工日志.md"),
      },
      "personal-center": {
        title: "个人中心",
        permissionTag: "receipt_of_materials_member_read",
        file: require("../../../../public/markdown/27app-个人中心.md"),
      },
      "set-up": {
        title: "设置",
        permissionTag: "receipt_of_materials_member_read",
        file: require("../../../../public/markdown/28app-设置.md"),
      },
    },
  },
}

export default function Page() {
  const [openList, setOpenList] = React.useState<string[]>([])
  const [markdownContent, setMarkdownContent] = React.useState("")

  const pathName = usePathname()

  // 处理展开合并方法
  const handleClickOpen = (key: string) => {
    setOpenList((pre) =>
      openList.includes(key) ? pre.filter((item) => item !== key) : [...pre, key],
    )
  }
  // 默认展示
  const [selectedMenu, setSelectedMenu] = React.useState<any>("")

  React.useEffect(() => {
    const storeFileContent = localStorage.getItem(FILE_CONTENT_KEY)
    if (storeFileContent) {
      setMarkdownContent(storeFileContent)
      setOpenList(JSON.parse(localStorage.getItem(OPEN_LIST_KEY) ?? "[]"))
      let higtLightKey = localStorage.getItem(HIGH_LIGHT_KEY)!
      setSelectedMenu(higtLightKey)
      const newClassName =
        higtLightKey.includes("app/") || higtLightKey.includes("commonLibrary/information-filling")
          ? "app-specific-class"
          : ""
      setCustomClassName(newClassName)
    } else {
      setSelectedMenu("/commonLibrary/create-project-first")
      setMarkdownContent(menuList.commonLibrary.children["create-project-first"].file)
      setOpenList(["/commonLibrary"])
    }
  }, [pathName])

  // 点击展示不同的文档
  const [customClassName, setCustomClassName] = React.useState("")

  const scrollTop = React.useRef<HTMLDivElement | null>(null)

  const goto = (menu: any, key: string) => {
    if (menu.file) {
      localStorage.setItem(FILE_CONTENT_KEY, menu.file)
      localStorage.setItem(HIGH_LIGHT_KEY, key)
      localStorage.setItem(OPEN_LIST_KEY, JSON.stringify(openList))
      setMarkdownContent(menu.file)
      setSelectedMenu(key)
      const newClassName =
        key.includes("app/") || key.includes("commonLibrary/information-filling")
          ? "app-specific-class"
          : ""
      setCustomClassName(newClassName)
      if (scrollTop.current) {
        scrollTop.current.scrollTop = 0
      }
    }
  }

  const content = {
    height: "calc(100vh - 4rem)",
  }

  const scrollable = {
    overflowY: "auto",
    maxHeight: "100vh",
  }

  // 递归渲染层级菜单
  const renderMenuTree = (menu: { [key: string]: any }, parentKey = "", level = 0) => {
    return Object.keys(menu).map((key, index) => {
      const fullKey = `${parentKey}/${key}`
      const hasChildren = menu[key].children
      const marginLeft = 15 * level
      const itemStyle: React.CSSProperties = {}
      if (level === 2) {
        itemStyle.marginLeft = "2rem"
      }
      // 子菜单样式
      const fontStyle =
        level === 0
          ? { fontWeight: "normal", fontSize: "1.1em", color: "black" }
          : level === 1
          ? { fontWeight: "normal", fontSize: ".9em" }
          : { fontWeight: "normal", fontSize: ".9em" }

      // 是否选中选择图标
      const CircleIcon = selectedMenu === fullKey ? FiberManualRecord : RadioButtonUnchecked
      // 顶级菜单的图标大小
      const listItemIconStyle = (level: any) => {
        return level === 0 ? {} : { minWidth: "30px", marginRight: "-1rem" }
      }
      return (
        <React.Fragment key={fullKey}>
          <ListItemButton
            sx={{
              color: "#44566c",
              marginLeft: `${marginLeft}px`,
              bgcolor: selectedMenu === fullKey ? "grey.400" : "inherit",
              "&:hover": {
                bgcolor: "grey.300",
              },
            }}
            onClick={() => {
              if (hasChildren) {
                handleClickOpen(fullKey)
              }
              goto(menu[key], fullKey)
            }}>
            {level === 0 && <ListItemIcon className="iconLogo">{menu[key].iconLogo}</ListItemIcon>}
            {level > 0 && (
              <ListItemIcon style={listItemIconStyle(level)}>
                <CircleIcon color="action" className="text-[0.6rem]" />
              </ListItemIcon>
            )}
            <ListItemText
              primary={menu[key].title}
              primaryTypographyProps={{ style: { ...fontStyle } }}
            />
            {hasChildren ? openList.includes(fullKey) ? <ExpandLess /> : <ExpandMore /> : null}
          </ListItemButton>
          {hasChildren && (
            <Collapse in={openList.includes(fullKey)} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {renderMenuTree(menu[key].children, fullKey, level + 1)}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      )
    })
  }

  return (
    <div className="flex mt-16" style={content}>
      <nav className="w-full h-16 fixed top-0 left-0 box-border z-50 transition-colors duration-100 min-w-[90rem] shadow-md max-2xl:absolute phone:hidden">
        <div className="w-full h-full">
          <div className=" w-full h-full mx-auto flex items-center px-4">
            <div className="flex text-xl items-center">
              <img className="h-8 transition-all" src="/static/image/logo2.png" alt="" />
              <span className="ml-2">筑宬科技</span>
            </div>
            <div className="mx-2">|</div>
            <div className="text-base">文档中心</div>
          </div>
        </div>
      </nav>
      <List
        sx={{
          width: "100%",
          maxWidth: "15rem",
          bgcolor: "#f2f2f2",
          height: "100%",
          margin: "0",
          padding: "0",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        style={scrollable as React.CSSProperties}>
        {renderMenuTree(menuList)}
      </List>
      <div
        className={`flex-1 rightContent px-10 py-5 ${customClassName}`}
        style={scrollable as React.CSSProperties}
        ref={scrollTop}>
        <Markdown key={customClassName}>{markdownContent}</Markdown>
      </div>
    </div>
  )
}
