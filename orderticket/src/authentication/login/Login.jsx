import React from "react";
import LayoutAuthentication from "../../lib/layout/layout.authentication";
import FormComponents from "../../lib/components/FormComponents.jsx";


function Login() {
    const data = {
        array:[1,2,3,4,5,6],
        title:"Login",
    }
  return (

       <LayoutAuthentication>
           <FormComponents  data ={data}></FormComponents>
       </LayoutAuthentication>

  );
}

export default Login;
