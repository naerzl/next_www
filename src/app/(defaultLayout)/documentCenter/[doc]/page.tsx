"use client"
import React from "react"
import Markdown from "markdown-to-jsx"
import '../../documentCenter/index.scss'
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

const list = [
  {
    key: "create-project-first",
    file: require("../../../../../public/markdown/快速入门-1创建项目.md"),
  },
  {
    key: "basic-configuration",
    file: require("../../../../../public/markdown/快速入门-2基础配置.md"),
  },
  {
    key: "construction-plan",
    file: require("../../../../../public/markdown/快速入门-3施工计划.md"),
  },
  {
    key: "information-filling",
    file: require("../../../../../public/markdown/快速入门-4信息填写.md"),
  },
  {
    key: "report-export",
    file: require("../../../../../public/markdown/快速入门-5报告导出.md"),
  },
  {
    key: "create-project",
    file: require("../../../../../public/markdown/1项目管理-创建项目.md"),
  },
  {
    key: "first-login",
    file: require("../../../../../public/markdown/2登录-首次登录.md"),
  },
  {
    key: "non-first-login",
    file: require("../../../../../public/markdown/3登录-非首次登录.md"),
  },
  {
    key: "structures",
    file: require("../../../../../public/markdown/4工程管理-构筑物.md"),
  },
  {
    key: "structures-item",
    file: require("../../../../../public/markdown/5工程管理-构筑物 -构筑物.md"),
  },

  {
    key: "engineering-structure",
    file: require("../../../../../public/markdown/6工程管理-构筑物-工程结构.md"),
  },
  {
    key: "design-data",
    file: require("../../../../../public/markdown/7工程管理-构筑物-设计数据.md"),
  },
  {
    key: "process-management",
    file: require("../../../../../public/markdown/8工程管理-构筑物-工序管理.md"),
  },
  {
    key: "unit-works",
    file: require("../../../../../public/markdown/9工程管理-单位工程.md"),
  },
  {
    key: "work-site-data",
    file: require("../../../../../public/markdown/10工程管理-工点数据.md"),
  },
  {
    key: "material-entry",
    file: require("../../../../../public/markdown/11物资管理-物资进场.md"),
  },
  {
    key: "material-processing",
    file: require("../../../../../public/markdown/12物资管理-物资加工.md"),
  },
  {
    key: "material-requisition",
    file: require("../../../../../public/markdown/13物资管理-物资领用.md"),
  },
  {
    key: "trial-list",
    file: require("../../../../../public/markdown/14试验管理-试验列表.md"),
  },
  {
    key: "basic-data",
    file: require("../../../../../public/markdown/16功能模块-施工计划-设计数据.md"),
  },
  {
    key: "inspection-batch",
    file: require("../../../../../public/markdown/17功能模块-施工计划-检验批.md"),
  },
  {
    key: "demand-planning",
    file: require("../../../../../public/markdown/18功能模块-施工计划-需求计划.md"),
  },

  {
    key: "member-list",
    file: require("../../../../../public/markdown/19用户管理-成员列表.md"),
  },
  {
    key: "completion-data",
    file: require("../../../../../public/markdown/20竣工管理-竣工资料.md"),
  },
  {
    key: "export-task",
    file: require("../../../../../public/markdown/21导出管理-导出任务.md"),
  },
  {
    key: "material-entry",
    file: require("../../../../../public/markdown/22app-物资进场登记.md"),
  },
  {
    key: "material-testing",
    file: require("../../../../../public/markdown/25app-物资试验登记.md"),
  },
  {
    key: "material-processing",
    file: require("../../../../../public/markdown/23app-物资加工登记.md"),
  },
  {
    key: "material-requisition",
    file: require("../../../../../public/markdown/24app-物资领用登记.md"),
  },
  {
    key: "construction-log",
    file: require("../../../../../public/markdown/26app-施工日志.md"),
  },
  {
    key: "personal-center",
    file: require("../../../../../public/markdown/27app-个人中心.md"),
  },
  {
    key: "set-up",
    file: require("../../../../../public/markdown/28app-设置.md"),
  },
]

function Page(props: any) {
  const scrollTop = React.useRef<HTMLDivElement | null>(null)

  const [markdownContent, setMarkdownContent] = React.useState("")

  const findFile = (key: string) => {
    const findItem = list.find((item) => item.key == key)
    if (findItem) {
      setMarkdownContent(findItem.file)
    }
    return
  }

  React.useEffect(() => {
    findFile(props.params.doc)
  }, [])

  return (
    <div className={`flex-1 rightContent px-10 py-5`} ref={scrollTop}>
      <Markdown>{markdownContent}</Markdown>
    </div>
  )
}

export default Page
