import Head from '../components/head'
import Layout from '../layouts';
import withUser from '../auth/withUser';

const Home = (props) => {
   const { user = {} } = props.auth || {};
   return (
      <Layout {...props}>
         <Head title="Home" />
         <div>{JSON.stringify(user,null,2)}</div>
      </Layout>
   )
}

export default withUser(Home)
