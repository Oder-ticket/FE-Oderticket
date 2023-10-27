import React, { useEffect, useState } from "react";
import LayoutAuthentication from "../../lib/layout/layout.authentication";
import clsx from "clsx";
import { Button, Checkbox, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import confirm from "antd/es/modal/confirm";
import { Link } from "react-router-dom";
import { FormProvider } from "antd/es/form/context";
import {
  confimPassword,
  spaceBetween,
  spaceLeft,
  special,
  structureMail,
  uppercase,
} from "../../lib/components/Validation";

function Signup() {
  const [status, setStatus] = useState(false);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    setStatus(false);
  };

  const onFinishFailed = (errorInfo) => {
    const element = document.querySelector(
      `[name="${errorInfo.errorFields[0].name[0]}"]`
    );

    form.getFieldError;
    setStatus(true);
    element.focus();
  };

  useEffect(() => {
    const element = document.querySelector("#emailSignup");
    element.focus();
  }, []);

  return (
    <LayoutAuthentication>
      <FormProvider>
        <Form
          onFinishFailed={onFinishFailed}
          form={form}
          onFinish={onFinish}
          name="basic"
          initialValues={{ remember: true }}
          className={`border-solid border-black border-[2px] rounded-md min-h-[500px] p-6 w-[300px]`}
          autoComplete="off"
        >
          <h1 className="font-bold text-center text-[50px]">Đăng ký</h1>
          <Form.Item
            hasFeedback={status}
            validateStatus={status ? "error" : ""} // Set the validation status to 'success'
            // Display a success message
            name="emailSignup"
            className=" "
            rules={[
              { required: true, message: "Không được để trống" },
              { max: 30, message: "Ít hơn 30 từ" },
              { min: 5, message: "Nhiều hơn 5 từ" },
              { whitespace: true, message: "Không được có khoảng trắng" },
              {
                //[a-zA-Z0-9._-]
                validator: (_, value) => {
                  // const getValueTrim = (value) => {
                  //   return value.trim();
                  // };

                  if (!structureMail(value))
                    return Promise.reject("excample@gmail.com");
                  if (uppercase(value))
                    return Promise.reject("Không được viết hoa");
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input
              id="emailSignup"
              name="emailSignup"
              placeholder="Email"
              prefix={<UserOutlined />}
              className=""
              type="text"
            ></Input>
          </Form.Item>
          <Form.Item
            hasFeedback={status}
            validateStatus={status ? "error" : ""} // Set the validation status to 'success'
            // Display a success message
            name="usernameSignup"
            className=" "
            rules={[
              { required: true, message: "Không được để trống" },
              { max: 30, message: "Ít hơn 30 từ" },
              { min: 5, message: "Nhiều hơn 5 từ" },
              { whitespace: true, message: "Không được có khoảng trắng" },
              { enum: ["@"], message: "Có ký tự đặc biệt @" },
              {
                validator: (_, value) => {
                  if (spaceBetween(value))
                    return Promise.reject("Có khoảng trắng");

                  if (spaceLeft(value))
                    return Promise.reject("Có khoảng trắng");
                  if (uppercase(value))
                    return Promise.reject("Không được viết hoa");

                  if (!special(value))
                    return Promise.reject("Có ký tự đặt biệt");
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input
              id="usernameSignup"
              name="usernameSignup"
              placeholder="Tên đăng nhập"
              prefix={<UserOutlined />}
              className=""
              type="text"
            ></Input>
          </Form.Item>
          <Form.Item
            hasFeedback={status}
            validateStatus={status ? "error" : ""}
            className=""
            name="passwordSignup"
            rules={[
              { required: true, message: "Không được để trống" },
              { max: 30, message: "Ít hơn 30 từ" },
              { min: 5, message: "Nhiều hơn 5 từ" },
              { whitespace: true, message: "Không được có khoảng trắng" },
              {
                validator: (_, value) => {
                  if (special(value))
                    return Promise.reject("Phải có ký tự đặc biệt");
                  if (uppercase(value))
                    return Promise.reject("Phải có 1 từ viết hoa");
                  if (spaceBetween(value))
                    return Promise.reject("Khoảng trắng");
                  if (spaceLeft(value))
                    return Promise.reject("Khoảng trắng đầu hàng");
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input
              name="passwordSignup"
              placeholder="Mật khẩu"
              prefix={<LockOutlined />}
              type="text"
            ></Input>
          </Form.Item>
          <Form.Item
            hasFeedback={status}
            validateStatus={status ? "error" : ""}
            className=""
            name="confimpasswordSignup"
            validateFirst={true}
            rules={[
              { required: true, message: "Không được để trống" },
              { max: 30, message: "Ít hơn 30 từ" },
              { min: 5, message: "Nhiều hơn 5 từ" },
              { whitespace: true, message: "Không được có khoảng trắng" },
              { enum: ["@"], message: "Có ký tự đặc biệt @" },
              {
                validator: (_, value) => {
                  // const regex = /^\s/;
                  // regex.test(value)

                  if (special(value))
                    return Promise.reject("Phải có ký tự đặc biệt");
                  if (!uppercase(value))
                    return Promise.reject("Phải có 1 từ viết hoa");
                  if (spaceBetween(value))
                    return Promise.reject("Khoảng trắng");
                  if (spaceLeft(value))
                    return Promise.reject("Khoảng trắng đầu hàng");
                  if (!confimPassword(value, form))
                    return Promise.reject("Không trùng mật khẩu");

                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input
              name="confimpasswordSignup"
              placeholder="Xác nhận mật khẩu"
              prefix={<LockOutlined />}
              type="text"
            ></Input>
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" className="bg-black" type="primary" block>
              Đăng ký
            </Button>
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Button type="dashed" className="border-blue-600 font-bold">
                <Link to={"/signin"} className="text-[10px]">
                  Quay lại đăng nhập
                </Link>
              </Button>
            </Form.Item>
          </Form.Item>
        </Form>
      </FormProvider>
    </LayoutAuthentication>
  );
}

export default Signup;
