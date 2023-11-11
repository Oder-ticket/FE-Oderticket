import { Menu } from "antd";
import React from "react";
import { itemsMenu } from "../utils/data";
function MenuItem() {
  return (
    <Menu
      className="h-full border-r-[1px] border-solid border-[#424242FF]"
      theme="light"
      mode="inline"
    >
      {itemsMenu.map((items, index) => {
        return (
          <Menu.Item
            className="font-bold mt-[24px]"
            icon={items.icon}
            key={index}
          >
            {items.label}
          </Menu.Item>
        );
      })}
    </Menu>
  );
}

export default MenuItem;
