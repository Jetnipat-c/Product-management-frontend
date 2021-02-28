import React, { useState, useEffect } from "react";
import StyleWrapper from "../../styles/components/styles-timeline";
import Layouts from "../../Layouts/Layouts";
import { Divider, Input, Empty, message, Card, Steps } from "antd";
import { service } from "../../service/index";
import withAuth from "../../hoc/withAuth";

const { Step } = Steps;
const { Search } = Input;

const Timeline = () => {
  const [data, setData] = useState([]);
  console.log("data =", data);
  const [cards, setCards] = useState(false);
  const [error, setError] = useState(false);

  const onSearch = async (value) => {
    let product_id = value;
    let res = await service({
      url: `/product/timeline/${product_id}`,
      methods: "get",
    });
    if (res && res.status === 200 && res.data != null && res.data.length > 0) {
      console.log(res.data);
      let arr_length = res.data.length - 1;
      setData(res.data[arr_length]);
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
              // data.map((item, index) => {
              //   return (
              //     <div key={index}>
              //       <Steps size="small" current={item.work.work_id}>
              //         <Step title="คลังสินค้า" />
              //         <Step title="ขั้นตอนที่ 1" />
              //         <Step title="ขั้นตอนที่ 2" />
              //       </Steps>
              //     </div>
              //   );
              // })
              <div>
                <Steps size="default" current={data.work.work_id - 1}>
                  <Step title="คลังสินค้า" description={data.workflow_start} />
                  <Step title="ขั้นตอนที่ 1" />
                  <Step title="ขั้นตอนที่ 2" />
                </Steps>
              </div>
            ) : (
              <div>Not found</div>
            )}
          </div>
        </div>
      </Layouts>
    </StyleWrapper>
  );
};
export default Timeline;
