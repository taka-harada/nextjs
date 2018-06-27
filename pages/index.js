import Layout from './components/MyLayout'
import Head from 'next/head'

const Index = (props) => (
  <Layout>
    <Head>
      <title key="title">タイトル</title>
    </Head>
    <div>
    	<h1>Index Page.</h1>
    	<p>This page was rendered on the server side: {props.isServer.toString()}</p>
      <p>Hello Next.js</p>
    </div>
  </Layout>
);

Index.getInitialProps = async function(){
  return {
    isServer: typeof window === 'undefined'
  }
};

export default Index
