import { Layout, Menu } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";

import { Home } from "./routes/home";
import { UtilsDemo } from "./routes/utilsDemo";
import { WidgetProps } from "../contract";
import OneFeLogo from "../assets/1fe-logo.svg";

/**
 * Suggestion: setup the top level routing for your application here.
 */
export const Router: React.FC<WidgetProps> = (props) => {
  const navigate = useNavigate();

  const { Header } = Layout;

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 0,
          width: "100%",
          display: "inline-flex",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <img style={{ width: "80px" }} src={OneFeLogo} alt="1FE Logo" />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["HOME"]}
          items={[
            {
              key: "HOME",
              label: "Home",
              onClick: () => navigate(""), // favor navigating with relative route (for bathtub compatability)
            },
            {
              key: "UTILS",
              label: "Utils",
              onClick: () => navigate("utils"), // favor navigating with relative route (for bathtub compatability)
            },
          ]}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Routes>
        <Route path="/" element={<Home {...props} />} />
        <Route path="/utils" element={<UtilsDemo />} />
        <Route path="*" element={<h1>{"404"}</h1>} />
      </Routes>
    </Layout>
  );
};
