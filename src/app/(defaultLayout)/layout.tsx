"use client"
import React from "react"
import "../../app/globals.scss"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <DynamicComponent /> */}
      {children}
    </>
  )
}
