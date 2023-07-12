import type { MenuProps } from "antd";
import {
  AppstoreOutlined,
  UserSwitchOutlined,
  DotChartOutlined,
  LogoutOutlined,
  CloudUploadOutlined
} from "@ant-design/icons";

import { Link } from "react-router-dom";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export const menuItems: MenuProps["items"] = [

  getItem(<Link to="/">Аналитика</Link>, "1", <DotChartOutlined />),

  getItem("Конфигурация", "sub2", <AppstoreOutlined />, [
    getItem(<Link to="/staff">Персонал</Link>, "2"),
    getItem(<Link to="/product">Продукты</Link>, "3"),
  ]),

  getItem("Учет", "sub3", <CloudUploadOutlined />, [
    getItem(<Link to="/order">Заказы</Link>, "4"),
    getItem(<Link to="/expense">Издержки</Link>, "5"),
    getItem(<Link to="/ads">Реклама</Link>, "6"),
  ]),

  getItem("Выход", "11", <LogoutOutlined />),
];

export const staffOptions = [
  { value: "Управляющий", label: "Управляющий" },
  { value: "Менеджер", label: "Менеджер" },
  { value: "Склад", label: "Склад" },
  { value: "SMM", label: "SMM" },
]
