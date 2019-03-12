import React, { Component } from 'react'
import Router from "next/router";
import { Formik } from "formik";
import FormField from "./FormField.js";
import { loginUser } from "../auth";

export default class Login extends Component {
   constructor(props){
      super(props);
      this.state = {
         email: "Shanna@melissa.tv",
         password: "anastasia.net",
      }
   }
   handleSubmit = (values,{resetForm}) => {
      loginUser(values.email,values.password).then(() => {
         Router.push("/")
      });
      resetForm({
         email: "",
         password: ""
      })
   }
  render() {
     var { email , password} = this.state;
    return (
      <Formik 
         initialValues={{email,password}}
         onSubmit = {this.handleSubmit}
         render={(props) => <FormField {...props}/>}
      />
    )
  }
}
