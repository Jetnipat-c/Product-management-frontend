import React, { useState, useEffect } from "react";
import StyleWrapper from "../../styles/components/styles-editproduct";
import Layouts from "../../Layouts/Layouts";
import { Divider, Input, Empty, message, Card } from "antd";
import withAuth from "../../hoc/withAuth";
const Editproduct = () => {
  return (
    <StyleWrapper>
      <Layouts>
        <Divider>
          <h1>แก้ไขข้อมูลสินค้า</h1>
        </Divider>
      </Layouts>
    </StyleWrapper>
  );
};
export default withAuth(Editproduct);
