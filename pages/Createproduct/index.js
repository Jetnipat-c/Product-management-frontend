import React, { useState, useEffect } from "react";
import StyleWrapper from "./styles";
import Layouts from "../../Layouts/Layouts";
import { Divider, message, Button } from "antd";
import { service } from "../../service/index";

function Createproduct() {
  const [company, setCompany] = useState("");
  const [receipt_code, setReceipt_code] = useState("");
  const [product_width, setProduct_width] = useState("");
  const [product_size, setProduct_size] = useState("");
  const [product_color, setProduct_color] = useState("");
  const [price, setPrice] = useState("");
  const [note, setNote] = useState("");

  const handle = async () => {
    let res = await service({
      url: `/product/createproduct`,
      method: "post",
      data: {
        company: company,
        receipt_code: receipt_code,
        product_width: product_width,
        product_size: product_size,
        product_color: product_color,
        price: price,
        note: note,
      },
    });
    if (res && res.status === 200) {
      success();
    } else {
      error();
    }
  };

  const success = () => {
    message.success("This is a success message");
  };

  const error = () => {
    message.error("This is an error message");
  };
  return (
    <StyleWrapper>
      <Layouts>
        <Divider>เพิ่มกระจกในคลัง</Divider>
        <div className="create-product-box">
          {/* ################################################### */}
          <label>ชื่อบริษัท</label>
          <select id="company" onChange={(e) => setCompany(e.target.value)}>
            <option value="">None</option>
            <option value="company-a">Company A</option>
            <option value="company-b">Company B</option>
            <option value="company-c">Company C</option>
            <option value="company-d">Company D</option>
          </select>
          <br />
          {/* ################################################### */}
          <label>รหัสใบเสร็จ</label>
          <input
            type="text"
            name="receipt-code"
            onChange={(e) => setReceipt_code(e.target.value)}
          />
          <br />
          {/* ################################################### */}
          <label>ความหนากระจก</label>
          <select
            id="thickness"
            onChange={(e) => setProduct_width(e.target.value)}
          >
            <option value="">None</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="15">15</option>
            <option value="19">19</option>
          </select>
          <br />
          {/* ################################################### */}
          <label>ขนาด</label>
          <select id="size" onChange={(e) => setProduct_size(e.target.value)}>
          <option value="">None</option>
            <option value="24*84">24*84</option>
            <option value="24*96">24*96</option>
            <option value="24*120">24*120</option>
            <option value="24*144">24*144</option>
            <option value="30*84">30*84</option>
            <option value="30*96">30*96</option>
          </select>
          <br />
          {/* ################################################### */}

          <label>สีกระจก</label>
          <select id="color" onChange={(e) => setProduct_color(e.target.value)}>
          <option value="">None</option>
            <option value="color_1">กระจกใส</option>
            <option value="color_2">กระจกใสเขียว</option>
            <option value="color_3">กระจกชาดำ</option>
            <option value="color_4">กระจกเงาใส</option>
            <option value="color_5">กระจกเงาชา</option>
            <option value="color_6">กระจกเงาดำ</option>
          </select>
          <br />
          {/* ################################################### */}
          <label>ราคาที่ซื้อ</label>
          <input
            type="text"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          {/* ################################################### */}
          <label>อื่นๆ</label>
          <input
            type="text"
            name="note"
            onChange={(e) => setNote(e.target.value)}
          />
          <br />
          {/* ################################################### */}
          <Button type="primary" onClick={handle}>
            บันทึกข้อมูล
          </Button>
        </div>
      </Layouts>
    </StyleWrapper>
  );
}

export default Createproduct;
