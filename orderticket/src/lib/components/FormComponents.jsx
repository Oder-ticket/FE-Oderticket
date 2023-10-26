import React from "react";
import { Form, Input } from "antd";
import { cn } from "../utils/utils";
import { secureHeapUsed } from "crypto";

const baseClass= "";
function FormComponents({children, className}) {
  return (
    <Form className={cn(baseClass, className)}>
      {children}
    </Form>
  );
}


export default FormComponents;



