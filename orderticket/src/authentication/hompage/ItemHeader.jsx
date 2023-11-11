import { Input, Menu } from "antd";
import React from "react";
import { itemsMenu } from "../../lib/utils/data";
import { SearchOutlined } from "@ant-design/icons";
export const SearchHeader = () => {
  return (
    <Input
      prefix={<SearchOutlined></SearchOutlined>}
      className="w-[272px] h-[24px]"
      placeholder="Tìm tên phim"
    ></Input>
  );
};
export const Navigation = () => {
  return (
    <Menu className=" w-[600px]" mode="horizontal">
      {itemsMenu.map((items, index) => {
        return (
          <Menu.Item className="font-bold" icon={items.icon} key={index}>
            {items.label}
          </Menu.Item>
        );
      })}
    </Menu>
  );
};
