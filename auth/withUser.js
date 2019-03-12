import React  from 'react';
import { getServerSideToken , getClientSideToken } from "./index";

export default Component => {
   return class extends React.Component{
      static async getInitialProps({req}) {
         const auth = req ? getServerSideToken(req) : getClientSideToken();
         return { auth };
       }
      render(){
         return <Component {...this.props}/>
      }
   }
}