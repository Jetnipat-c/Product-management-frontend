import React, { useEffect, useState } from "react";
import StyleWrapper from "./styles";
import Router from "next/router";
import { Layout, Tag } from "antd";
const { Header } = Layout;
const Headers = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    setUsername(JSON.parse(localStorage.getItem("account")).username);
  }, []);
  const logout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("account");
    Router.reload();
  };
  return (
    <StyleWrapper>
      {}
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
          <Tag color="#f50" onClick={logout}>
            Log out
          </Tag>
        </div>
      </Header>
    </StyleWrapper>
  );
};

export default Headers;
