"use client"
// import { Inter } from "next/font/google"
import React from "react"
import "../../app/globals.scss"
import dynamic from "next/dynamic"
// const inter = Inter({ subsets: ["latin"] })

const DynamicComponent = dynamic(() => import("@/components/Nav"), { ssr: false })
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <DynamicComponent /> */}
      {children}
    </>
  )
}
