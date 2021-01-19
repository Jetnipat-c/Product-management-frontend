import React, { useState } from "react";
import StyleWrapper from "./styles";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Home() {
  const [collapsed, setcollapsed] = useState(false);
  const handleClick = (e) => {
    console.log("click ", e);
  };

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setcollapsed(collapsed);
  };
  return (
    <StyleWrapper>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="80"
          width="300"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo">
            <h1>Phattotech Companny</h1>
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <SubMenu key="sub1" icon={<UserOutlined />} title="กระจก">
              <Menu.Item key="1">ค้นหากระจกในคลัง</Menu.Item>
              <Menu.Item key="2">ค้นหากระจกรายชิ้น</Menu.Item>
              <Menu.Item key="3">เพิ่มกระจกลงระบบ</Menu.Item>
              <Menu.Item key="4">แก้ไขข้อมูลกระจก</Menu.Item>
              <Menu.Item key="5">ลบกระจกในระบบ</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="บันทึกติดตาม">
              <Menu.Item key="6">ขั้นตอนที่ 1</Menu.Item>
              <Menu.Item key="7">ขั้นตอนที่ 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="8" icon={<PieChartOutlined />}>
              เช็คประวัติกระจก
            </Menu.Item>
            {/* <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>   
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {/* Bill is a cat. */}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </StyleWrapper>
  );
}

export default Home;
