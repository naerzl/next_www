"use client"
import React from "react"
import { useState } from "react";
import { CSSProperties } from 'react';
import QRCode from 'qrcode.react';
function side() {
    const divStyle = {
        width: '100%',
        height: '100vh',
        backgroundImage: 'url(/static/image/download_bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: '10vh',
        paddingLeft: '9vw'
    }
    const [isHovered, setIsHovered] = useState(false);
    const boxStyle: CSSProperties = {
        visibility: isHovered ? 'visible' : 'hidden',
    };
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    // 扫码跳转
    const url = `${process.env.NEXT_PUBLIC_WEB_URL}/idCode/`
    // const url = `http://192.168.2.81:3003/idCode/`

    // 点击下载
    const handleAndroidClick = () => {
        const apkUrl = 'https://zctc-docs.oss-cn-beijing.aliyuncs.com/app/app-release.apk';
        const link = document.createElement('a');
        link.href = apkUrl;
        link.setAttribute('download', 'app-release.apk');
        link.click();
        link.remove()
    };
    return (
        <>
            <div style={divStyle}>
                <div className="text-2xl font-bold">筑宬App</div>
                <div className="text-base text-gray-400">Android、IOS</div>
                <div className="text-3xl mt-10 mb-5 ">&nbsp;&nbsp;打造灵活、易用的平台，</div>
                <div className="text-3xl mb-20">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;便捷、快速的记录工程从开始、施工到竣工的相关数据。</div>
                <div className="w-36 h-12 flex items-center justify-center rounded bg-sky-300 text-base text-white" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>立即下载</div>
                <div className="w-48 h-24 flex rounded-md bg-white  items-center justify-around" style={boxStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <QRCode value={url} size={80} />
                    <div className="text-base flex flex-col content-around h-20 justify-around">
                        <h1 >手机扫码下载</h1>
                        <div className="text-lime-700 text-sm flex" onClick={handleAndroidClick}>
                            <i className="icon-xiazai iconfont"></i>Android
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default side
