import Layout from "../components/layout/index"
import React from "react"
import fetch from "isomorphic-unfetch"
import {withRouter} from 'next/router'
import Markdown from 'react-markdown'

const Post = (props) => (
  <Layout>
    <h1>{props.post.title.rendered}</h1>
    <div
      dangerouslySetInnerHTML={{
          __html: props.post.content.rendered
      }}
    />
  </Layout>
)

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://uniapp-api.hivelocity.co.jp/wp-json/wp/v2/blog/${id}`);
  const post = await res.json();

  return { post }
}

//class Post extends React.Component {
//  static async getInitialProps() {
//    const { slug, apiRoute } = context.query;
//    const res = await fetch('http://uniapp-api.hivelocity.co.jp/wp-json/wp/v2/blog?_embed');
//    const post = await res.json();
//    return { post };
//  }

//  render() {
//    return (
//      <Layout>
//        <h1>{this.props.post.title.rendered}</h1>
//        <div
//          dangerourlySetInnerHTML={{
//              __html: this.props.post.content.rendered
//          }}
//        />
//      </Layout>
//    );
//  }
//}

//const Page = withRouter((props) => (
//  <Layout>
//    <h1>{props.router.query.title}</h1>
//    <p>This is the blog content.</p>
//  </Layout>
//))

export default Post
