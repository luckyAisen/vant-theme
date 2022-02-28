import type { Menu } from "./interface";
import menusV3 from "@/json/menus-v3.json";

const BASE_MENU: Menu[] = [
  {
    type: "group",
    label: "基础样式变量",
    key: "Base",
    children: [
      {
        label: "Base 基础样式",
        key: "Base",
      },
    ],
  },
];

export const APP_MENU_LIST: Menu[] = [...BASE_MENU, ...menusV3];
