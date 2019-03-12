import React, { Component } from 'react'
import { Form , Field } from "formik";

export default class FormField extends Component {
   render() {
      return (
         <Form>
            <label htmlFor="email">Email</label>
            <Field 
               name="email"
               placeholder="Email..."
            />
            <br/>
            <label htmlFor="password">Password</label>
            <Field 
               name="password"
               placeholder="Password..."
               type="password"
            />
            <button type="submit">Submit</button>
         </Form>
      )
   }
}
