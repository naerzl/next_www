"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "@/styles/home.scss"
import { useRouter } from "next/navigation"

function HomeSwiper() {
  const router = useRouter()
  const hanldeClick = (tag: number) => {
    router.push(`/solution?tag=${tag} `)
  }
  return (
    <div className="relative">
      <Swiper
        className="w-full h-[70vh] max-h-[1000px]"
        loop
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        modules={[Autoplay]}
        onSlideChange={() => {}}
        onSwiper={() => {}}>
        <SwiperSlide className="w-full flex justify-center items-center aspect-video border relative">
          <div
            className="w-full h-full flex flex-col justify-end items-center"
            style={{
              backgroundImage: 'url("static/image/side1.png")',
              backgroundSize: "cover",
            }}>
            <div className="max-w-[1920px] mx-auto z-30 w-full">
              <div className="w-3/4  mx-auto leading-[2.75rem] text-3xl text-white  text-left mb-6 Xfull:mb-20 pl-6">
                <strong className="text-4xl Xfull:text-6xl   inline-block Xfull:leading-[6rem] ">
                  数字化浪潮将施工企业<br></br>因数字化、智能化而变得敏捷、高效、生机勃勃
                </strong>
                <br />
                <p className="mt-16 w-full">
                  我们致力打造开放、灵活、易用、安全的工程数字平台， <br />
                  构建实现整个工程行业数字化的基石和土壤。 让工程行业创新、产业升级，万物相知相应。
                </p>
              </div>
            </div>
            <div className="mx-auto w-3/4 h-40 mb-8"></div>
          </div>
          <div className="w-full h-full mask absolute top-0 z-20"></div>
        </SwiperSlide>
        <SwiperSlide className="w-full flex justify-center items-center aspect-video border relative">
          <div
            className="w-full h-full flex flex-col justify-end items-center"
            style={{
              backgroundImage: 'url("static/image/side2.jpg")',
              backgroundSize: "cover",
            }}>
            <div className="max-w-[1920px] mx-auto z-30 w-full">
              <div className="w-3/4  mx-auto leading-[2.75rem] text-3xl text-white  text-left mb-6 Xfull:mb-20 pl-6">
                <strong className="text-4xl Xfull:text-6xl   inline-block Xfull:leading-[6rem] ">
                  数字化浪潮将施工企业<br></br>因数字化、智能化而变得敏捷、高效、生机勃勃
                </strong>
                <br />
                <p className="mt-16 w-full">
                  我们致力打造开放、灵活、易用、安全的工程数字平台， <br />
                  构建实现整个工程行业数字化的基石和土壤。 让工程行业创新、产业升级，万物相知相应。
                </p>
              </div>
            </div>
            <div className="mx-auto w-3/4 h-40 mb-8"></div>
          </div>
          <div className="w-full h-full mask absolute top-0 z-20"></div>
        </SwiperSlide>
        <SwiperSlide className="w-full flex justify-center items-center aspect-video border relative">
          <div
            className="w-full h-full flex flex-col justify-end items-center"
            style={{
              backgroundImage: 'url("static/image/side3.png")',
              backgroundSize: "cover",
            }}>
            <div className="max-w-[1920px] mx-auto z-30 w-full">
              <div className="w-3/4  mx-auto leading-[2.75rem] text-3xl text-white  text-left mb-6 Xfull:mb-20 pl-6">
                <strong className="text-4xl Xfull:text-6xl   inline-block Xfull:leading-[6rem] ">
                  数字化浪潮将施工企业<br></br>因数字化、智能化而变得敏捷、高效、生机勃勃
                </strong>
                <br />
                <p className="mt-16 w-full">
                  我们致力打造开放、灵活、易用、安全的工程数字平台， <br />
                  构建实现整个工程行业数字化的基石和土壤。 让工程行业创新、产业升级，万物相知相应。
                </p>
              </div>
            </div>
            <div className="mx-auto w-3/4 h-40 mb-8"></div>
          </div>
          <div className="w-full h-full mask absolute top-0 z-20"></div>
        </SwiperSlide>
      </Swiper>
      <img
        src="/static/image/swiper_bg.svg"
        className="absolute -bottom-10 left-0 w-full z-10 h-52"
        alt=""
      />
      <div className="absolute bottom-8 left-0 right-0 mx-auto  h-40  z-10 shadow-xls max-w-[1920px]">
        <ul className=" h-full flex ul w-3/4 mx-auto bg-white">
          <li
            className="flex-1 px-6 text-center flex flex-col justify-center cursor-pointer"
            onClick={() => {
              hanldeClick(1)
            }}>
            <div className="text-xl">项目初期</div>
            <hr className="my-1" />
            <span className="text-xs">全方位一站式服务</span>
          </li>
          <li
            className="flex-1 px-6 text-center flex flex-col justify-center cursor-pointer"
            onClick={() => {
              hanldeClick(2)
            }}>
            <div className="text-xl">项目中期</div>
            <hr className="my-1" />
            <span className="text-xs">局部介入至竣工档案移交</span>
          </li>
          <li
            className="flex-1 px-6 text-center flex flex-col justify-center cursor-pointer"
            onClick={() => {
              hanldeClick(3)
            }}>
            <div className="text-xl">项目后期</div>
            <hr className="my-1" />
            <span className="text-xs">轻度介入，快速移交档案</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HomeSwiper
