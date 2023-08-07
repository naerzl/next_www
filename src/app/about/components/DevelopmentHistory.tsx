"use client"
import React from "react"

const developList = [
  {
    date: "2023.07",
    content: [{ text: "公司软件正式开发" }],
  },
  {
    date: "2023.06",
    content: [{ text: "公司软件规划阶段，根据需求，软件进行了全面的讨论和设计" }],
  },
  {
    date: "2023.05",
    content: [{ text: "提出想法,立项，注册公司" }],
  },
]

function DevelopmentHistory() {
  const [tag, setTag] = React.useState(0)
  return (
    <div className="w-3/4 mx-auto mt-10 bg-[#f2f2f2] py-20 pl-25 mb-10">
      <div className="w-full mx-auto overflow-hidden flex justify-between gap-10 items-center text-railway_303">
        <h2 className="text-3xl font-bold flex-shrink-0 border-b-2 border-railway_deep_red">
          发展历程
        </h2>
        <div className="flex-1 h-full flex">
          <ul className="border-l-2 border-[#d7d7d7]  w-full relative">
            {developList.map((item, index) => (
              <li
                onClick={() => setTag(index)}
                className="py-4 pl-2 cursor-pointer"
                key={item.date}
                style={index == tag ? { color: "#7e0000" } : {}}>
                <span className="mr-5">{item.date}</span>
                <span className="w-2/3">{item.content[0].text}</span>
              </li>
            ))}
            <li className="line w-[1px] h-10 bg-[#7e0000] absolute -left-[1px] top-2"></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DevelopmentHistory
