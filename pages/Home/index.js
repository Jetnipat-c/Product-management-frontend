import React, { useState, useEffect } from "react";
import StyleWrapper from "../../styles/components/styles-home";
import Layouts from "../../Layouts/Layouts";
import { Divider, Input, Table } from "antd";
import { service } from "../../service/index";
import withAuth from "../../hoc/withAuth";
//const { Search } = Input;
const columns = [
  {
    title: "รหัสสินค้า",
    dataIndex: "product_id",
    key: "product_id",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "บริษัท",
    dataIndex: "company",
    key: "company",
    responsive: ["md"],
  },
  {
    title: "รหัสสินค้า",
    dataIndex: "receipt_code",
    key: "receipt_code",
    responsive: ["md"],
  },
  {
    title: "ขนาด",
    dataIndex: "product_size",
    key: "product_size",
    responsive: ["md"],
  },
  {
    title: "ความกว้าง",
    dataIndex: "product_width",
    key: "product_width",
    responsive: ["lg"],
  },
  {
    title: "สี",
    dataIndex: "product_color",
    key: "product_color",
    responsive: ["lg"],
  },
  {
    title: "วันที่นำเข้า",
    dataIndex: "createdAt",
    key: "createdAt",
    responsive: ["lg"],
    render: (text) => <label>{text.slice(0, 10)}</label>,
  },
  {
    title: "ราคาที่ซื้อ",
    dataIndex: "price",
    key: "price",
    responsive: ["lg"],
  },
  {
    title: "อื่นๆ",
    dataIndex: "note",
    key: "note",
    responsive: ["lg"],
  },
];

const Home = () => {
  const [data, setData] = useState([]);
  //console.log(data);
  useEffect(async () => {
    let res = await service({
      url: `/product/stock`,
      methods: "get",
    });
    if (res && res.status === 200) {
      setData(res.data);
    } else {
    }
  }, []);
  //const onSearch = (value) => console.log(value);
  return (
    <StyleWrapper>
      <Layouts>
        <Divider>
          <h1>คลังสินค้า</h1>
        </Divider>
        <div className="box-table">
          <div className="box-table-item">
            <Table columns={columns} dataSource={data} rowKey="product_id" />
          </div>
        </div>
      </Layouts>
    </StyleWrapper>
  );
};

//export default Home;
export default withAuth(Home);
