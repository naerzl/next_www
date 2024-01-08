"use client"
import React from "react"
import reactStringReplace from "react-string-replace"
import Markdown from "markdown-to-jsx"
const file1 = require("../../../../public/markdown/快速入门-1创建项目.md")

const menuList: { [key: string]: any } = {
  "create-project-first": {
    title: "创建项目",
    fileName: "快速入门-1创建项目.md",
    file: require("../../../../public/markdown/快速入门-1创建项目.md"),
  },
  "basic-configuration": {
    title: "基础配置",
    fileName: "快速入门-2基础配置.md",
    file: require("../../../../public/markdown/快速入门-2基础配置.md"),
  },
  "construction-plan1": {
    title: "施工计划",
    fileName: "快速入门-3施工计划.md",
    file: require("../../../../public/markdown/快速入门-3施工计划.md"),
  },
  "information-filling": {
    title: "信息填写",
    fileName: "station_data_member_read",
    file: require("../../../../public/markdown/快速入门-4信息填写.md"),
  },
  "report-export": {
    title: "报告导出",
    fileName: "station_data_member_read",
    file: require("../../../../public/markdown/快速入门-5报告导出.md"),
  },
  "create-project": {
    title: "创建项目",
    fileName: "material_approach_member_read",
    file: require("../../../../public/markdown/1项目管理-创建项目.md"),
  },
  "first-login": {
    title: "首次登录",
    fileName: "material_approach_member_read",
    file: require("../../../../public/markdown/2登录-首次登录.md"),
  },
  "non-first-login": {
    title: "非首次登录",
    fileName: "material_approach_member_read",
    file: require("../../../../public/markdown/3登录-非首次登录.md"),
  },
  structures: {
    title: "构筑物",
    fileName: "structure_member_read",
    file: require("../../../../public/markdown/4工程管理-构筑物.md"),
  },
  "structures-item": {
    title: "构筑物",
    fileName: "structure_member_read",
    file: require("../../../../public/markdown/5工程管理-构筑物 -构筑物.md"),
  },
  "engineering-structure": {
    title: "工程结构",
    fileName: "structure_member_read",
    file: require("../../../../public/markdown/6工程管理-构筑物-工程结构.md"),
  },
  "design-data": {
    title: "设计数据",
    fileName: "structure_member_read",
    file: require("../../../../public/markdown/7工程管理-构筑物-设计数据.md"),
  },
  "process-management": {
    title: "工序管理",
    fileName: "structure_member_read",
    file: require("../../../../public/markdown/8工程管理-构筑物-工序管理.md"),
  },
  "material-entry": {
    title: "物资进场",
    fileName: "material_approach_member_read",
    file: require("../../../../public/markdown/11物资管理-物资进场.md"),
  },
  "material-processing": {
    title: "物资加工",
    fileName: "material_processing_member_read",
    file: require("../../../../public/markdown/12物资管理-物资加工.md"),
  },
  "material-requisition": {
    title: "物资领用",
    fileName: "receipt_of_materials_member_read",
    file: require("../../../../public/markdown/13物资管理-物资领用.md"),
  },
  "trial-list": {
    title: "试验列表",
    fileName: "test_list_member_read",
    file: require("../../../../public/markdown/14试验管理-试验列表.md"),
  },
  "construction-plan": {
    title: "施工计划",
    fileName: "structure_member_read",
    file: require("../../../../public/markdown/14-1功能模块-施工计划.md"),
    children: {},
  },
  "construction-plan-item": {
    title: "施工计划",
    fileName: "structure_member_read",
    file: require("../../../../public/markdown/15功能模块-施工计划-施工计划.md"),
  },
  "basic-data": {
    title: "基础数据",
    fileName: "structure_member_read",
    file: require("../../../../public/markdown/16功能模块-施工计划-设计数据.md"),
  },
  "inspection-batch": {
    title: "检验批",
    fileName: "structure_member_read",
    file: require("../../../../public/markdown/17功能模块-施工计划-检验批.md"),
  },
  "demand-planning": {
    title: "需求计划",
    fileName: "structure_member_read",
    file: require("../../../../public/markdown/18功能模块-施工计划-需求计划.md"),
  },
  "member-list": {
    title: "成员列表",
    fileName: "member_management_member_read",
    file: require("../../../../public/markdown/19用户管理-成员列表.md"),
  },
  "completion-data": {
    title: "竣工资料",
    fileName: "completion_data_member_read",
    file: require("../../../../public/markdown/20竣工管理-竣工资料.md"),
  },
  "export-task": {
    title: "导出任务",
    fileName: "export_task_member_read",
    file: require("../../../../public/markdown/21导出管理-导出任务.md"),
  },
  "material-entry-app": {
    title: "物资进场",
    fileName: "receipt_of_materials_member_read",
    file: require("../../../../public/markdown/22app-物资进场登记.md"),
  },
  "material-testing": {
    title: "物资试验",
    fileName: "receipt_of_materials_member_read",
    file: require("../../../../public/markdown/25app-物资试验登记.md"),
  },
  "material-processing-app": {
    title: "物资加工",
    fileName: "receipt_of_materials_member_read",
    file: require("../../../../public/markdown/23app-物资加工登记.md"),
  },
  "material-requisition-app": {
    title: "物资领用",
    fileName: "receipt_of_materials_member_read",
    file: require("../../../../public/markdown/24app-物资领用登记.md"),
  },
  "construction-log": {
    title: "施工日志",
    fileName: "receipt_of_materials_member_read",
    file: require("../../../../public/markdown/26app-施工日志.md"),
  },
  "personal-center": {
    title: "个人中心",
    fileName: "receipt_of_materials_member_read",
    file: require("../../../../public/markdown/27app-个人中心.md"),
  },
  "set-up": {
    title: "设置",
    fileName: "receipt_of_materials_member_read",
    file: require("../../../../public/markdown/28app-设置.md"),
  },
}

export default function Page() {
  let text = '<b class="text-railway_blue">这是HTML</b>'

  let key = "施工计划"

  const [filterLists, setFilterLists] = React.useState<any[]>([])

  const handleFilterWithKey = () => {
    const menuListValues = Object.values(menuList)
    let list = menuListValues.map((item, index) => {
      let indexStr = item.file.indexOf(key)
      if (indexStr > -1) {
        item.file = item.file.replace(key, `<a id="al-${index}">${key}</a>`)
        return item
      }
      return
    })

    list = list.filter((item) => item)

    console.log(list)
    setFilterLists(list)
  }

  React.useEffect(() => {
    handleFilterWithKey()
  }, [])

  return (
    <>
      {filterLists.map((item, index) => (
        // <div key={index} dangerouslySetInnerHTML={{ __html: item.file }}></div>
        <Markdown key={index}>{item.file}</Markdown>
      ))}
      <a href="#al-2">锚点</a>
    </>
  )
}
