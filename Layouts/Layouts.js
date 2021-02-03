import React from "react";
import StyleWrapper from "./styles";
import { Layout, Breadcrumb, BackTop } from "antd";
import Siderbar from "../components/Siderbar/index";
import Footers from "../components/Footers/index";
const { Header, Content } = Layout;
function Layouts(props) {
  return (
    <StyleWrapper>
      <BackTop />
      <Layout style={{ minHeight: "100vh" }}>
        <Siderbar />

        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: "80vh" }}
            >
              {props.children}
            </div>
          </Content>
          <Footers />
        </Layout>
      </Layout>
    </StyleWrapper>
  );
}

export default Layouts;
