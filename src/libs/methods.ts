// import { OAUTH2_ACCESS_TOKEN } from "./const"
// import { getCookie } from "./cookies"

// oauth1.0发送statement

// 生成随机五个字符串
export function generateRandomString() {
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let result = ""

  for (let i = 0; i < 5; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length)
    result += characters.charAt(randomIndex)
  }
  return result
}

// 从cookie里面获取access_token
// export function getCookieAccessToken() {
//   const authCodeOfCookie =
//     getCookie(OAUTH2_ACCESS_TOKEN as string) &&
//     JSON.parse(getCookie(OAUTH2_ACCESS_TOKEN as string) as string)
//   return authCodeOfCookie.access_token
// }

export function checkObjectEquality(obj1: any, obj2: any) {
  //指向同一内存
  if (obj1 === obj2) return true
  let bankInfo = Object.getOwnPropertyNames(obj1),
    oldBankInfo = Object.getOwnPropertyNames(obj2)
  //判断属性值是否相等
  if (bankInfo.length !== oldBankInfo.length) return false

  for (let i = 0, max = bankInfo.length; i < max; i++) {
    let prop_name = bankInfo[i]
    if (obj1[prop_name] !== obj2[prop_name]) {
      return false
    }
  }
  return true
}
