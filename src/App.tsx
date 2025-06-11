import React, { useState } from "react";
import { LaptopOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import CreateTaskForm from "./Components/CreateTaskForm";
import AllTasks from "./Components/AllTasks";

const { Header, Content, Footer, Sider } = Layout;

const subMenuTitles: string[] = ["All Tasks", "Create Task"];

const items2: MenuProps["items"] = [UserOutlined, LaptopOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `${key}`,
      icon: React.createElement(icon),
      label: subMenuTitles[index],
    };
  }
);

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [menu, setMenu] = useState(1);

  const handleMenuChange = (e: { key: string }) => {
    setMenu(Number(e.key));
  };

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div
          className="demo-logo"
          style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
        >
          Kaiburr Project
        </div>
      </Header>
      <div style={{ padding: "0 48px" }}>
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            height: "85vh",
          }}
        >
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
              items={items2}
              onClick={handleMenuChange}
            />
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {menu === 1 ? (
              <AllTasks></AllTasks>
            ) : (
              <CreateTaskForm></CreateTaskForm>
            )}
          </Content>
        </Layout>
      </div>
      <Footer style={{ textAlign: "center" }}>
        Ant Design © {new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;
