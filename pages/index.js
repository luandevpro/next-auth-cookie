import Head from '../components/head'
import Layout from '../layouts';

const Home = (props) => {
   return (
      <Layout {...props}>
         <Head title="Home" />
         <div>home</div>
      </Layout>
   )
}

export default Home
