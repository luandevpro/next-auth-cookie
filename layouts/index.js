import Link from "next/link";
import styled from 'styled-components';


const Layout = (props) => {
   return (
      <div>
         <Ul>
            <Li>
               <Link href="/">
                  <a>Home</a>
               </Link>
            </Li>
         </Ul>    
         {props.children}
      </div>
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