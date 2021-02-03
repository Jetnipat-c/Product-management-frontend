import React, { useState } from "react";
import StyleWrapper from "./styles";
import { Layout } from "antd";
const { Footer } = Layout;
function Footers() {
  return (
    <div>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </div>
  );
}

export default Footers;
