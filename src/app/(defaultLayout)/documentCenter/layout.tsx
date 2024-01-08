"use client"
import React from "react"
import Side from "@/app/(defaultLayout)/documentCenter/components/Side"

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex">
      <div className="h-full w-[15rem]">
        <Side />
      </div>
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  )
}

export default Layout
