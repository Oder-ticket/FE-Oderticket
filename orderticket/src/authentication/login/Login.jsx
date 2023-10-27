import React, { useEffect, useState } from "react";
import LayoutAuthentication from "../../lib/layout/layout.authentication";
import clsx from "clsx";
import { Button, Checkbox, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import confirm from "antd/es/modal/confirm";
import { Link } from "react-router-dom";
import { special, uppercase } from "../../lib/components/Validation";

function Login() {
  const [status, setStatus] = useState(false);
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo) => {
    const element = document.querySelector(
      `[name="${errorInfo.errorFields[0].name[0]}"]`
    );
    element.focus();
  };
  const onGenderChange = (value) => {
    setStatus(false);
  };
  useEffect(() => {
    const element = document.querySelector("#username");
    element.focus();
  }, []);

  return (
    <LayoutAuthentication>
      <Form
        onFinishFailed={onFinishFailed}
        form={form}
        onFinish={onFinish}
        name="basic"
        initialValues={{ remember: true }}
        className={`border-solid border-black border-[2px] rounded-md h-[500px] p-6 w-[300px]`}
      >
        <h1 className="font-bold text-center text-[50px]">Login</h1>
        <Form.Item
          hasFeedback={status}
          validateStatus={status ? "error" : ""} // Set the validation status to 'success'
          // Display a success message
          name="username"
          className=" "
          rules={[
            { required: true, message: "Không được để trống!" },
            { max: 30, message: "Ít hơn 30 từ" },
            { min: 5, message: "Nhiều hơn 5 từ" },
            { whitespace: true, message: "Không được có khoảng trắng" },
            { enum: ["@"], message: "Có ký tự đặc biệt @" },
          ]}
        >
          <Input
            id="username"
            name="username"
            onChange={onGenderChange}
            placeholder="Tên đăng nhập"
            prefix={<UserOutlined />}
            className=""
            type="text"
          ></Input>
        </Form.Item>
        <Form.Item
          className=""
          name="password"
          rules={[
            { required: true, message: "Không được để trống!" },
            { max: 30, message: "Ít hơn 30 từ" },
            { min: 5, message: "Nhiều hơn 5 từ" },
            { whitespace: true, message: "Không được có khoảng trắng" },
          ]}
        >
          <Input
            name="password"
            placeholder="Mật khẩu"
            prefix={<LockOutlined />}
            type="password"
          ></Input>
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>
              <h6 className="text-[10px]">Nhớ mật khẩu</h6>
            </Checkbox>
          </Form.Item>
          <a href="" className=" ml-[50px] text-[10px] text-blue-700">
            Quên mật khẩu
          </a>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" className="bg-black" type="primary" block>
            Login
          </Button>
          Or{" "}
          <Link to={"/signup"} className="text-blue-700">
            register now!
          </Link>
        </Form.Item>
      </Form>
    </LayoutAuthentication>
  );
}

export default Login;
