import React from "react";
import { Menu } from "antd";
import { LoginForm, RegisterForm } from "../../components";
import { useAuth } from "../../hooks";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";
import { Dashboard } from "../dashboard";

export const Home: React.FC = () => {
  const { auth, logout } = useAuth();

  return (
    <>
      <BrowserRouter>
        <Menu mode="horizontal">
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/"></Link>
          </Menu.Item>
          {!auth.auth && (
            <Menu.Item
              key="Login-Link"
              style={{ right: "0", position: "absolute" }}
            >
              <Link to="/login">Login</Link>
            </Menu.Item>
          )}
          {auth.auth && (
            <SubMenu
              key="SubMenu"
              style={{ right: "0", position: "absolute" }}
              title={
                <>
                  Olá, <b>{auth.user}</b>
                </>
              }
            >
              <Menu.Item>
                <Link to="/dashboard">Dashboard</Link>
              </Menu.Item>
              <Menu.Item
                onClick={(): void => {
                  logout();
                }}
              >
                Logout
              </Menu.Item>
            </SubMenu>
          )}
        </Menu>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
          }}
        >
          <Switch>
            <Route exact path="/">
              Home Page
            </Route>
            <Route exact path="/login">
              <LoginForm />
            </Route>
            <Route exact path="/register">
              <RegisterForm />
            </Route>
            <Route
              exact
              path="/dashboard"
              render={(): React.ReactNode =>
                auth.auth ? <Dashboard /> : <Redirect to="/login" />
              }
            />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};
