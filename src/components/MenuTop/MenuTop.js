import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/img/original.svg";

import "./MenuTop.scss";
import MenuItem from "antd/lib/menu/MenuItem";

export default function MenuTop() {
  return (
    <div className="menu-top">
      <div className="menu-top__logo">
        <Logo />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/New-movies">Ultimos Lanzamientos</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/Popular">Populares</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/Search">Buscador</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
