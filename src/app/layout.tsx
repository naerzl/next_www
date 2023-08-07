"use client"
import { Inter } from "next/font/google"
import React from "react"
import Footer from "@/components/Footer"
import "./globals.scss"
import dynamic from "next/dynamic"

const inter = Inter({ subsets: ["latin"] })

const DynamicComponent = dynamic(() => import("@/components/Nav"), { ssr: false })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" id="_next">
      <body className={inter.className}>
        <DynamicComponent />
        {children}
        <Footer />
      </body>
    </html>
  )
}
