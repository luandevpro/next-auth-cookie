import Head from '../components/head'
import Layout from '../layouts';
import Login from "../components/Login";

const LoginUser = (props) => {
   return (
      <Layout>
         <Head title="Login" />
         <div>
            <Login />
         </div>
      </Layout>
   )
}

export default LoginUser
