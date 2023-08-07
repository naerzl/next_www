"use client"
import Link from "next/link"
import React from "react"
import { usePathname } from "next/navigation"

const navList = [
  {
    id: 1,
    name: "首页",
    path: "/",
  },
  {
    id: 2,
    name: "解决方案",
    path: "/solution",
  },
  {
    id: 3,
    name: "申请试用",
    path: "/apply",
  },
  {
    id: 4,
    name: "服务支持",
    path: "/service",
  },
  {
    id: 5,
    name: "关于我们",
    path: "/about",
  },
]

const Nav = () => {
  const pathName = usePathname()
  const [scroll, setScroll] = React.useState(0)
  window.onscroll = () => {
    setScroll(document.documentElement.scrollTop)
  }

  React.useEffect(() => {
    setScroll(document.documentElement.scrollTop)
  })
  const conditionFn = () => {
    return pathName == "/" && scroll < 200
  }
  const navBgChange = () => {
    return conditionFn()
      ? { backgroundColor: "transparent", color: "#fff" }
      : { backgroundColor: "#fff" }
  }

  const liStyle = () => {
    return conditionFn() ? { borderBottom: "2px solid  #fff" } : { borderBottom: "2px solid  #000" }
  }

  return (
    <nav
      className={
        "w-full h-16  fixed top-0 left-0  box-border  z-50 transition-colors duration-100 min-w-[90rem] shadow-md max-2xl::absolute"
      }
      style={navBgChange()}>
      <div
        className={`flex items-center justify-between w-full h-full  ${
          conditionFn() ? "mask" : ""
        } px-4`}>
        <h1 className="text-xl">
          <Link href={"/"} className={`flex items-center gap-2`}>
            {conditionFn() ? (
              <img className="h-8 transition-all" src="/static/image/logo1.png" alt="" />
            ) : (
              <img className="h-8 transition-all" src="/static/image/logo2.png" alt="" />
            )}
            筑宬科技
          </Link>
        </h1>
        <div className="max-w-[1920px] w-full h-full mx-auto absolute top-0 left-0 right-0">
          <ul className="w-[1000px] flex justify-between  mx-auto text-center h-full items-center gap-20 Xfull:w-3/4">
            {navList.map((nav) => (
              <li
                key={nav.id}
                className={`w-25 h-10 leading-9`}
                style={pathName == nav.path ? liStyle() : {}}>
                <Link href={nav.path} className={`w-full block`}>
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="line "></div>
        </div>
        <a href="" className={`mr-3`}>
          登录
        </a>
      </div>
    </nav>
  )
}

export default Nav
