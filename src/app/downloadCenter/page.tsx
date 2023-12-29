"use client"
import React from "react"
import { useState, useEffect } from "react";
import { CSSProperties } from 'react';
import QRCode from 'qrcode.react';
import './download.css';
function side() {
    const [isHovered, setIsHovered] = useState(false);
    const [isDownloadVisible, setDownloadVisible] = useState(true);
    // const [isButtonActive, setIsButtonActive] = useState(false);
    const boxStyle: CSSProperties = {
        visibility: isDownloadVisible && isHovered ? 'visible' : 'hidden',
    };
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    // 扫码跳转
    const url = 'http://192.168.2.17/'
    // const buttonStyle: CSSProperties = {
    //     backgroundColor: isButtonActive ? '#003366' : 'bg-sky-300',
    // };
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
    // 立即下载
    // const handledownload = () => {
    //     const userAgent = navigator.userAgent;
    //     if (/android/i.test(userAgent)) {
    //         window.location.href = 'https://zctc-docs.oss-cn-beijing.aliyuncs.com/app/app-release.apk';
    //     } else if (/iPad|iPhone|iPod/.test(userAgent)) {
    //         window.location.href = 'https://apps.apple.com/cn/app/%E7%AD%91%E5%AE%AC/id6473721984';
    //     }
    // }
    // 扫码分辨设备类型
    const [count, setCount] = useState('');
    useEffect(() => {
        const userAgent = navigator.userAgent;
        let device = '';
        if (/android/i.test(userAgent)) {
            device = 'Android';
        } else if (/iPad|iPhone|iPod/.test(userAgent)) {
            device = 'iOS';
        } else {
            device = 'Unknown';
        }
        setCount(device);
        if (device === 'Android') {
            // setIsButtonActive(true);
            window.location.href = 'https://zctc-docs.oss-cn-beijing.aliyuncs.com/app/app-release.apk';
        } else if (device === 'iOS') {
            window.location.href = 'https://apps.apple.com/cn/app/%E7%AD%91%E5%AE%AC/id6473721984';
            // setIsButtonActive(true);
        }
    }, []);
    return (
        <>
            <div className="custom-background phone:text-lg">
                <div className="text-2xl font-bold phone:text-lg">筑宬App</div>
                <div className="text-base text-gray-400 phone:text-lg">Android、IOS</div>
                    <div className="text-3xl mt-10 mb-5 phone:text-lg">&nbsp;&nbsp;打造灵活、易用的平台，</div>
                    <div className="text-3xl mb-20 phone:text-lg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;便捷、快速的记录工程从开始、施工到竣工的相关数据。</div>
                <div className="w-36 h-12 flex items-center justify-center rounded bg-sky-300 text-base text-white phone:text-lg"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    // onClick={handledownload}
                    >立即下载
                </div>
                <div className="w-48 h-24 flex rounded-md bg-white  items-center justify-around phone:text-lg"
                    style={boxStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <QRCode value={url} size={80} />
                    <div className="text-base flex flex-col content-around h-20 justify-around phone:text-lg">
                        <h1 >手机扫码下载</h1>
                        <div className="text-lime-700 text-sm flex phone:text-lg" onClick={handleAndroidClick}>
                            <i className="icon-xiazai iconfont phone:text-lg"></i>Android
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default side
