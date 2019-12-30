import React from "react"
import { Button } from "antd-mobile"
import CommonHeader from "components/header/CommonHeader"
const Mine = ()=>{
  var wx =  window.wx
  let scanQRCode =()=>{
   wx.ready(() => { 
     wx.scanQRCode({
        needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
          var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
          console.log(result)
        }
      });
    })
  }
  let takePicture = ()=>{
    console.log(2)
  }
    return (
      <>
        <CommonHeader>我的</CommonHeader>
        <Button type="primary" onClick={scanQRCode} inline style={{ margin: '10px 0 0 10px' }}>扫描二维码</Button>
        <Button type="primary" onClick={takePicture} inline style={{ margin: '10px 0 0 10px' }}>拍照</Button>
      </>
    )
}

export default Mine