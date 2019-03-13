import { Fragment } from 'react'
import Link from "next/link";
import Router from "next/router";
import styled from 'styled-components';
import { logoutUser } from '../auth';


const Layout = (props) => {
   const { user = {}} = props.auth || {};
   const setLogOut = () => {
      logoutUser().then(() => Router.push("/"))
   }
   return (
      <Wrapper>
         <Ul>
            <Li>
               <Link href="/">
                  <a>Home</a>
               </Link>
            </Li>
            {
               user && user.email ?
               <Fragment>
                  <Li>
                     <Link href="/profile">
                        <a>Profile</a>
                     </Link>
                  </Li>
                  <Li onClick={setLogOut}>
                     Logout
                  </Li>
               </Fragment>
               :
               <Li>
                  <Link href="/login">
                     <a>Login</a>
                  </Link>
               </Li>
            }
            
         </Ul>
         {props.children}
      </Wrapper>
   )
}

export default Layout

const Ul = styled.ul`
   list-style-type: none;
   display: flex;
   justify-content: space-around;
   font-size: 28px;
`
const Li = styled.li`
   a {
      text-decoration: none;
   }
`