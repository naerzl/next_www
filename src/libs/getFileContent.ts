import fs from "fs"
import path from "path"

let pathName = path.join(__dirname, "../../public/markdown/1项目管理-创建项目.md")

export function getContent() {
  const res = fs.readFileSync(pathName, "utf-8")
  console.log(res)
}
