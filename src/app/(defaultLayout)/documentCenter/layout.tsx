"use client"
import React from "react"
import Side from "@/app/(defaultLayout)/documentCenter/components/Side"

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col">
      <nav className="w-full h-16 fixed top-0 left-0 box-border bg-white z-50 transition-colors duration-100 min-w-[90rem] shadow-md max-2xl:absolute phone:hidden">
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
      <div className="flex flex-1 mt-16 overflow-hidden" style={{ height: "100vh - 4rem" }}>
        <div className="h-full w-[15rem]">
          <Side />
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  )
}

export default Layout
