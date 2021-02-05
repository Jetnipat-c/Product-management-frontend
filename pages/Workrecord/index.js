import React, { useState, useEffect } from "react";
import StyleWrapper from "../../styles/components/styles-workrecord";
import Layouts from "../../Layouts/Layouts";
import { Divider, Input, Button, Select } from "antd";
import dynamic from "next/dynamic";
import { service } from "../../service/index";
const QrReader = dynamic(() => import("react-qr-reader"), {
  ssr: false,
});
const Workrecord = () => {
  const [result, setResult] = useState("");
  const [camera, setCamera] = useState(false);

  const openCamera = async () => {
    console.log(camera);
    setCamera(!camera);
  };

  const handleScan = async (data) => {
    setResult(data);

    var obj = JSON.parse(data, function (key, value) {
      if (key == "product_id") {
        callBackend(value);
        openCamera();
        return console.log("สนใจ", value);
      } else {
        //return console.log("ไม่สนใจ", value);
      }
    });
  };

  const callBackend = async (product_id) => {
    if (product_id != null && product_id != "") {
      console.log("scan success");
      let res = await service({
        url: `/product/product_work1`,
        method: "post",
        data: { product_id: product_id },
      });

      if (res && res.status === 200) {
        alert("success");
      } else {
        alert("error");
      }
    } else {
      //console.log("scan fails");
    }
  };
  const handleError = async (err) => {
    console.error(err);
  };

  const handleClick = async () => {};
  return (
    <StyleWrapper>
      <Layouts>
        <Divider>
          <h1>บันทึกงาน</h1>
        </Divider>
        <div className="container">
          <div className="container-component">
            <div className="btn-box">
              <div>
                <Input
                  addonBefore="Product Id"
                  value={result}
                  onClick={handleClick}
                />
              </div>
            </div>
            <div className="btn-box">
              <Button type="primary" onClick={openCamera}>
                เปิดกล้อง
              </Button>
            </div>
            <div className="btn-box">
              {camera ? (
                <div>
                  <QrReader
                    delay={500}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: "100%", height: "300px" }}
                  />
                  <p>{result}</p>
                </div>
              ) : (
                <div>Camera Off!</div>
              )}
            </div>
          </div>
        </div>
      </Layouts>
    </StyleWrapper>
  );
};
export default Workrecord;
