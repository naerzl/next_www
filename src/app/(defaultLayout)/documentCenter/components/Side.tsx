"use client"
import React from "react"
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material"
import FiberManualRecord from "@mui/icons-material/FiberManualRecord"
import RadioButtonUnchecked from "@mui/icons-material/RadioButtonUnchecked"
import ListItemIcon from "@mui/material/ListItemIcon"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import { HIGH_LIGHT_KEY, OPEN_LIST_KEY } from "@/app/remove"
import {
  App,
  Daochu,
  Denglu,
  Duoren,
  Gongcheng,
  Guanli,
  Huojian,
  Jungong,
  Shiyan,
  Wuzi,
  Xiangmu,
} from "../../../../../svg"
import { useRouter, useSearchParams } from "next/navigation"

const menuList: { [key: string]: any } = {
  commonLibrary: {
    title: "快速入门",
    permissionTag: "project_management_module_read",
    iconLogo: <Huojian />,
    children: {
      "create-project-first": {
        title: "创建项目",
        permissionTag: "structure_member_read",
      },
      "basic-configuration": {
        title: "基础配置",
        permissionTag: "unit_project_member_read",
      },
      "construction-plan-commonLibrary": {
        title: "施工计划",
        permissionTag: "station_data_member_read",
      },
      "information-filling": {
        title: "信息填写",
        permissionTag: "station_data_member_read",
      },
      "report-export": {
        title: "报告导出",
        permissionTag: "station_data_member_read",
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
      },
      "non-first-login": {
        title: "非首次登录",
        permissionTag: "material_approach_member_read",
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
        children: {
          "structures-item": {
            title: "构筑物",
            permissionTag: "structure_member_read",
          },
          "engineering-structure": {
            title: "工程结构",
            permissionTag: "structure_member_read",
          },
          "design-data": {
            title: "设计数据",
            permissionTag: "structure_member_read",
          },
          "process-management": {
            title: "工序管理",
            permissionTag: "structure_member_read",
          },
        },
      },
      "unit-works": {
        title: "单位工程",
        permissionTag: "unit_project_member_read",
      },
      "work-site-data": {
        title: "工点数据",
        permissionTag: "station_data_member_read",
      },
    },
  },
  materialManagements: {
    title: "物资管理",
    permissionTag: "material_management_module_read",
    iconLogo: <Wuzi />,
    children: {
      "material-entry-managements": {
        title: "物资进场",
        permissionTag: "material_approach_member_read",
      },
      "material-processing-managements": {
        title: "物资加工",
        permissionTag: "material_processing_member_read",
      },
      "material-requisition-managements": {
        title: "物资领用",
        permissionTag: "receipt_of_materials_member_read",
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
        children: {
          "construction-plan-item": {
            title: "施工计划",
            permissionTag: "structure_member_read",
          },
          "basic-data": {
            title: "基础数据",
            permissionTag: "structure_member_read",
          },
          "inspection-batch": {
            title: "检验批",
            permissionTag: "structure_member_read",
          },
          "demand-planning": {
            title: "需求计划",
            permissionTag: "structure_member_read",
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
      },
      "material-testing": {
        title: "物资试验",
        permissionTag: "receipt_of_materials_member_read",
      },
      "material-processing": {
        title: "物资加工",
        permissionTag: "receipt_of_materials_member_read",
      },
      "material-requisition": {
        title: "物资领用",
        permissionTag: "receipt_of_materials_member_read",
      },
      "construction-log": {
        title: "施工日志",
        permissionTag: "receipt_of_materials_member_read",
      },
      "personal-center": {
        title: "个人中心",
        permissionTag: "receipt_of_materials_member_read",
      },
      "set-up": {
        title: "设置",
        permissionTag: "receipt_of_materials_member_read",
      },
    },
  },
}

const list = ["construction-plan", "structures"]

function Side() {
  const [openList, setOpenList] = React.useState<string[]>([])
  const [selectedMenu, setSelectedMenu] = React.useState<any>("")

  const router = useRouter()

  const searchParams = useSearchParams()

  const goto = (menu: any, key: string, key2: any) => {
    setSelectedMenu(key)
    router.push(`/documentCenter/doc?key=${key2}`)
  }

  const handleClickOpen = (key: string, key2: string) => {
    setOpenList((pre) =>
      openList.includes(key) ? pre.filter((item) => item !== key) : [...pre, key],
    )

    if (list.includes(key2)) {
      router.push(`/documentCenter/doc?key=${key2}`)
    }
  }

  const findHightKey = (menu: any, keyParams: string) => {
    const menuArr = Object.keys(menu)
    let keys: string[] = []
    menuArr.forEach((key) => {
      if (key == keyParams) {
        keys.push(key)
      }
      if (menu[key].children) {
        const res = findHightKey(menu[key].children, keyParams)
        if (res.length > 0) {
          keys.push(key, ...res)
        }
      }
    })
    return keys
  }

  React.useEffect(() => {
    const key = searchParams.get("key")
    const keys = findHightKey(menuList, key!)
    setSelectedMenu("/" + keys.join("/"))
    const cloneOpens = structuredClone(keys)
    cloneOpens.splice(keys.length - 1, 1)
    let openListState: string[] = []
    cloneOpens.forEach((str, index) => {
      if (index == 0) {
        openListState.push("/" + str)
      } else {
        openListState.push(openListState[index - 1] + "/" + str)
      }
    })
    setOpenList(openListState)
  }, [])

  const scrollable = {
    overflowY: "auto",
    maxHeight: "100vh",
  }
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
                handleClickOpen(fullKey, key)
              } else {
                goto(menu[key], fullKey, key)
              }
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
  )
}

export default Side
