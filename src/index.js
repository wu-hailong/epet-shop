import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/reset.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { get } from "utils/http"
ReactDOM.render(
    <App />, 
    document.getElementById('root')
);

serviceWorker.unregister();
var wx = window.wx
;(async function(){
    let result = await get({
        url:"/weixin/sign"
    })
    let { appId, timestamp,nonceStr, signature } = result
    wx.config({
        // debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId, // 必填，公众号的唯一标识
        timestamp, // 必填，生成签名的时间戳
        nonceStr, // 必填，生成签名的随机串
        signature,// 必填，签名
        jsApiList: ["scanQRCode"] // 必填，需要使用的JS接口列表
    })
})()
