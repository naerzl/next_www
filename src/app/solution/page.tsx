import React from "react"
import "@/styles/solution.scss"
import SolutionContent from "./components/SolutionContent"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "解决方案",
  description: "这是解决方案页面",
}

function Solution() {
  return (
    <>
      <main className="mt-16 w-full mx-auto solution ">
        <SolutionContent />
      </main>
    </>
  )
}

export default Solution
