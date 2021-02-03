import React, { useEffect, useState } from "react";
import StyleWrapper from "./styles";
import { Layout, Menu, Tag } from "antd";
const { Header } = Layout;
const Headers = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    setUsername(JSON.parse(sessionStorage.getItem("account")).username);
  }, []);
  return (
    <StyleWrapper>
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <div
          className="label-user"
          style={{
            display: "block",
            width: "100%",
            height: "64px",
            textAlign: "right",
            paddingRight: "10px",
          }}
        >
          <Tag color="blue">username : {username}</Tag>
        </div>
      </Header>
    </StyleWrapper>
  );
};

export default Headers;
