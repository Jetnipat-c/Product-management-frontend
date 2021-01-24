import React, { useState, useEffect } from "react";
import StyleWrapper from "./styles";
import Layouts from "../../Layouts/Layouts";
import { Divider, Input, Empty, Table } from "antd";
import { service } from "../../service/index";

const { Search } = Input;
const columns = [
  {
    title: "รหัสสินค้า",
    dataIndex: "product_id",
    key: "product_id",
    render: (text) => <a>{text}</a>,
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
    width: 200,
  },
];

function Home() {
  const [data, setData] = useState([]);
  const [emptys, setEmptys] = useState(false);
  console.log(data);
  useEffect(async () => {
    let res = await service({
      url: `/product/stock`,
      methods: "get",
    });
    if (res && res.status === 200) {
      setData(res.data);
    } else {
      setEmptys(true);
    }
  }, []);
  const onSearch = (value) => console.log(value);
  return (
    <StyleWrapper>
      <Layouts>
        <Divider>คลังสินค้า</Divider>

        <div className="box-table">
          <div className="box-table-item">
            <Table columns={columns} dataSource={data} />
          </div>
          <div className="box-table-item">
            {emptys ? (
              <div>
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </Layouts>
    </StyleWrapper>
  );
}

export default Home;
