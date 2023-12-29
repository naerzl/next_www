"use client"
import React, { useEffect, useState } from 'react';

function Side() {
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
            window.location.href = 'https://zctc-docs.oss-cn-beijing.aliyuncs.com/app/app-release.apk';
        } else if (device === 'iOS') {
            window.location.href = 'https://apps.apple.com/cn/app/%E7%AD%91%E5%AE%AC/id6473721984';
        }
    }, []);
    return (
        <div>The detected operating system is: {count}</div>
    );
}

export default Side;