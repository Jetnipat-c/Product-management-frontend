import React, { useState, useEffect } from "react";
import StyleWrapper from "./styles";
import Layouts from "../../Layouts/Layouts";
import { Divider, Input, Empty, message, Card } from "antd";
import { service } from "../../service/index";

const { Search } = Input;

function Findbyid() {
  const [data, setData] = useState([]);
  const [cards, setCards] = useState(false);
  const [error, setError] = useState(false);
  console.log(data);
  console.log(cards);
  
  const onSearch = async (value) => {
    console.log(value);
    let product_id = value;
    let res = await service({
      url: `/product/stock/${product_id}`,
      methods: "get",
    });
    if (res && res.status === 200 && res.data != null) {
      setData(res.data);
      setCards(true);
    } else {
      setCards(false);
      setError(true);
      warning();
    }
  };

  const warning = () => {
    message.warning("There is no data in the system.");
  };
  return (
    <StyleWrapper>
      <Layouts>
        <Divider>ค้นหากระจกในคลัง</Divider>

        <div className="box-search">
          <div className="box-item">
            <div className="box-search-width">
              <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                onSearch={onSearch}
              />
            </div>
          </div>

          <div className="box-item">
            {cards ? (
              <div>
                <Card
                  size="small"
                  title={"รหัสสินค้า : " + data.product_id}
                  style={{ width: 300 }}
                >
                  <p>{"ขนาด : " + data.product_size}</p>
                  <p>{"ความกว้าง : " + data.product_width}</p>
                  <p>{"สี : " + data.product_color}</p>
                  <p>{"วันที่บันทึกสินค้า : " + data.createdAt.slice(0, 10)}</p>
                </Card>
              </div>
            ) : (
              <div>
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              </div>
            )}
          </div>
        </div>
      </Layouts>
    </StyleWrapper>
  );
}

export default Findbyid;
