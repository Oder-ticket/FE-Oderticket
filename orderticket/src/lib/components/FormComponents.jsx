import React from "react";
import {Form, Input} from "antd";
//amount
function FormComponents(data) {
  return (
      <div className={`te`}>
          <h1 key={"asd"}>{data.data.title}</h1>
          <Form>
              {console.log(data.data.array)}
              {
                  data?.data?.array?.map((item,index)=>{
                      return (
                          <Form.Item key = {index}>
                              <Input/>
                          </Form.Item>
                      )
                  })
              }

          </Form>
      </div>
  )
}


export default FormComponents;
