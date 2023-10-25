import React from "react";
import { Form, Input } from "antd";
//amount
function FormComponents(data) {
  return (
    <div
      className={`p-16 ${
        data.data.title === "login" ? `w-[500px]` : "w-[400px]"
      }`}
    >
      <h1 key={"asd"}>{data.data.title}</h1>
      <Form>
        {console.log(data.data.array)}
        {data?.data?.array?.map((item, index) => {
          return (
            <Form.Item key={index}>
              <Input className="w-full" />
            </Form.Item>
          );
        })}
      </Form>
    </div>
  );
}

export default FormComponents;
