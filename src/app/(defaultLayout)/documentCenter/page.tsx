"use client"
import React from "react"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import Markdown from 'markdown-to-jsx';
import { Collapse, List, ListItemButton, ListItemText, } from "@mui/material"
export const dynamic = "force-dynamic"
// const file = ()=>import('./createProject.md')
// const file1 = require('./createProject.md')

const menuList: { [key: string]: any } = {
  commonLibrary: {
    title: "快速入门",
    permissionTag: "project_management_module_read",
    children: {
      "create-project-first": {
        title: "创建项目",
        permissionTag: "structure_member_read",
        file: require('../../../../public/markdown/快速入门-1创建项目.md')
      },
      "basic-configuration": {
        title: "基础配置",
        permissionTag: "unit_project_member_read",
        file: require('../../../../public/markdown/快速入门-2基础配置.md')
      },
      "construction-plan": {
        title: "施工计划",
        permissionTag: "station_data_member_read",
        file: require('../../../../public/markdown/快速入门-3施工计划.md')
      },
      "information-filling": {
        title: "信息填写",
        permissionTag: "station_data_member_read",
        file: require('../../../../public/markdown/快速入门-4信息填写.md')
      },
      "report-export": {
        title: "报告导出",
        permissionTag: "station_data_member_read",
        file: require('../../../../public/markdown/快速入门-5报告导出.md')
      },
    },
  },
  materialManagement: {
    title: "项目管理",
    permissionTag: "material_management_module_read",
    children: {
      "create-project": {
        title: "创建项目",
        permissionTag: "material_approach_member_read",
        file: require('../../../../public/markdown/1项目管理-创建项目.md')
      }
    },
  },
  testManagement: {
    title: "登录",
    permissionTag: "test_management_module_read",
    children: {
      "first-login": {
        title: "首次登录",
        permissionTag: "material_approach_member_read",
        file: require('../../../../public/markdown/2登录-首次登录.md')
      },
      "non-first-login": {
        title: "非首次登录",
        permissionTag: "material_approach_member_read",
        file: require('../../../../public/markdown/3登录-非首次登录.md')
      }
    },
  },
  commonLibrarys: {
    title: "工程管理",
    permissionTag: "project_management_module_read",
    children: {
      "structures": {
        title: "构筑物",
        permissionTag: "structure_member_read",
        file: require('../../../../public/markdown/4工程管理-构筑物.md'),
        children: {
          "structures-item": {
            title: "构筑物",
            permissionTag: "structure_member_read",
            file: require('../../../../public/markdown/5工程管理-构筑物 -构筑物.md')
          },
          "engineering-structure": {
            title: "工程结构",
            permissionTag: "structure_member_read",
            file: require('../../../../public/markdown/6工程管理-构筑物-工程结构.md')
          },
          "design-data": {
            title: "设计数据",
            permissionTag: "structure_member_read",
            file: require('../../../../public/markdown/7工程管理-构筑物-设计数据.md')
          },
          "process-management": {
            title: "工序管理",
            permissionTag: "structure_member_read",
            file: require('../../../../public/markdown/8工程管理-构筑物-工序管理.md')
          },
        }
      },
      "unit-works": {
        title: "单位工程",
        permissionTag: "unit_project_member_read",
        file: require('../../../../public/markdown/9工程管理-单位工程.md')
      },
      "work-site-data": {
        title: "工点数据",
        permissionTag: "station_data_member_read",
        file: require('../../../../public/markdown/10工程管理-工点数据.md')
      },
    },
  },
  materialManagements: {
    title: "物资管理",
    permissionTag: "material_management_module_read",
    children: {
      "material-entry": {
        title: "物资进场",
        permissionTag: "material_approach_member_read",
        file: require('../../../../public/markdown/11物资管理-物资进场.md')
      },
      "material-processing": {
        title: "物资加工",
        permissionTag: "material_processing_member_read",
        file: require('../../../../public/markdown/12物资管理-物资加工.md')
      },
      "material-requisition": {
        title: "物资领用",
        permissionTag: "receipt_of_materials_member_read",
        file: require('../../../../public/markdown/13物资管理-物资领用.md')
      },
    },
  },
  testManagements: {
    title: "试验管理",
    permissionTag: "test_management_module_read",
    children: {
      "trial-list": {
        title: "试验列表",
        permissionTag: "test_list_member_read",
        file: require('../../../../public/markdown/14试验管理-试验列表.md')
      },
    },
  },
  dataTemplate: {
    title: "功能模块",
    permissionTag: "function_module_module_read",
    children: {
      "construction-plan": {
        title: "施工计划",
        permissionTag: "structure_member_read",
        file: require('../../../../public/markdown/14-1功能模块-施工计划.md'),
        children: {
          "construction-plan-item": {
            title: "施工计划",
            permissionTag: "structure_member_read",
            file: require('../../../../public/markdown/15功能模块-施工计划-施工计划.md')
          },
          "basic-data": {
            title: "基础数据",
            permissionTag: "structure_member_read",
            file: require('../../../../public/markdown/16功能模块-施工计划-设计数据.md')
          },
          "inspection-batch": {
            title: "检验批",
            permissionTag: "structure_member_read",
            file: require('../../../../public/markdown/17功能模块-施工计划-检验批.md')
          },
          "demand-planning": {
            title: "需求计划",
            permissionTag: "structure_member_read",
            file: require('../../../../public/markdown/18功能模块-施工计划-需求计划.md')
          },
        }
      }
    }
  },
  userManagement: {
    title: "用户管理",
    permissionTag: "user_management_module_read",
    children: {
      "member-list": {
        title: "成员列表",
        permissionTag: "member_management_member_read",
        file: require('../../../../public/markdown/19用户管理-成员列表.md')
      },
    },
  },
  completionManagement: {
    title: "竣工管理",
    permissionTag: "completion_management_module_read",
    children: {
      "completion-data": {
        title: "竣工资料",
        permissionTag: "completion_data_member_read",
        file: require('../../../../public/markdown/20竣工管理-竣工资料.md')
      },
    },
  },
  queue: {
    title: "导出管理",
    permissionTag: "export_management_module_read",
    children: {
      "export-task": {
        title: "导出任务",
        permissionTag: "export_task_member_read",
        file: require('../../../../public/markdown/21导出管理-导出任务.md')
      },
    },
  },
  app: {
    title: "APP",
    permissionTag: "export_management_module_read",
    children: {
      "material-entry": {
        title: "物资进场",
        permissionTag: "receipt_of_materials_member_read",
        file: require('../../../../public/markdown/22app-物资进场登记.md')
      },
      "material-testing": {
        title: "物资试验",
        permissionTag: "receipt_of_materials_member_read",
        file: require('../../../../public/markdown/25app-物资试验登记.md')
      },
      "material-processing": {
        title: "物资加工",
        permissionTag: "receipt_of_materials_member_read",
        file: require('../../../../public/markdown/23app-物资加工登记.md')
      },
      "material-requisition": {
        title: "物资领用",
        permissionTag: "receipt_of_materials_member_read",
        file: require('../../../../public/markdown/24app-物资领用登记.md')
      },
      "construction-log": {
        title: "施工日志",
        permissionTag: "receipt_of_materials_member_read",
        file: require('../../../../public/markdown/26app-施工日志.md')
      },
      "personal-center": {
        title: "个人中心",
        permissionTag: "receipt_of_materials_member_read",
        file: require('../../../../public/markdown/27app-个人中心.md')
      },
      "set-up": {
        title: "设置",
        permissionTag: "receipt_of_materials_member_read",
        file: require('../../../../public/markdown/28app-设置.md')
      },
    },
  },
}

function side() {
  const [openList, setOpen] = React.useState<string[]>([])
  const [markdownContent, setMarkdownContent] = React.useState('')
  const pathName = '/currentPath';
  // 处理展开合并方法
  const handleClickOpen = (key: string) => {
    setOpen((pre) => (
      openList.includes(key)
        ? pre.filter((item) => item !== key)
        : [...pre, key]
    ));
  };
  // 默认展示
  const [selectedMenu, setSelectedMenu] = React.useState<string | null>(null);
  React.useEffect(() => {
    const autoOpen = (menu: any) => {
      for (const key in menu) {
        if (menu[key].children) {
          autoOpen(menu[key].children);
        } else if (pathName.startsWith(menu[key].path)) {
          setOpen((pre) => [...pre, key]);
        }
      }
    };
    autoOpen(menuList);
    const createProjectKey = "create-project-first";
    handleClickOpen(createProjectKey);
    setSelectedMenu(createProjectKey);
    goto(menuList.commonLibrary.children[createProjectKey]);
  }, [pathName]);
  // 点击展示不同的文档
  const goto = (menu: any) => {
    console.log(menu.file);
    if (menu.file) {
      setMarkdownContent(menu.file)
    } else {
      setMarkdownContent('')
    }
  }
  const content = {
    height: "calc(100vh - 4rem)"
  }
  const scrollable = {
    overflowY: 'auto',
    maxHeight: '100vh',
  };
  // 递归渲染层级菜单
  const renderMenuTree = (menu: { [key: string]: any }, parentKey = '', level = 0) => {
    return Object.keys(menu).map((key, index) => {
      const fullKey = `${parentKey}/${key}`;
      const hasChildren = menu[key].children;
      const marginLeft = 30 * level;
      const isSelected = selectedMenu === fullKey;
      return (
        <React.Fragment key={fullKey}>
          <ListItemButton
            sx={{
              color: "#44566c", marginLeft: `${marginLeft}px`, bgcolor: isSelected ? "grey.300" : "inherit",
              '&:hover': {
                bgcolor: "grey.200",
              },
            }}
            onClick={() => {
              if (hasChildren) {
                handleClickOpen(fullKey);
              }
              setSelectedMenu(fullKey);
              goto(menu[key]);
            }}
          >
            <ListItemText>{menu[key].title}</ListItemText>
            {hasChildren ? (openList.includes(fullKey) ? <ExpandLess /> : <ExpandMore />) : null}
          </ListItemButton>
          {hasChildren && (
            <Collapse in={openList.includes(fullKey)} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {renderMenuTree(menu[key].children, fullKey, level + 1)}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <div className="flex mt-16" style={content}>
      <List
        sx={{ width: "100%", maxWidth: "15rem", bgcolor: "background.paper", height: "100%", margin: "0", padding: "0" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        style={scrollable as React.CSSProperties}
      >
        {renderMenuTree(menuList)}
      </List>
      <div className="flex-1" style={scrollable as React.CSSProperties}>
        <Markdown children={markdownContent} />
      </div>
    </div>
  );
}

export default side
