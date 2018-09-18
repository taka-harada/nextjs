import React from 'react'
import Link from 'next/link'
import fetch from "isomorphic-unfetch"
import Layout from "../components/layout/index.js"

class Index extends React.Component {
  static async getInitialProps() {
    const postsRes = await fetch('https://uniapp-api.hivelocity.co.jp/wp-json/wp/v2/blog?_embed');
    //const postsRes = await fetch('https://api.basestation.jp/wp-json/wp/v2/blog?_embed');
    const posts = await postsRes.json();
    return { posts };
  }

  render() {
    const posts = this.props.posts.map((post, index) => {
      return (
        <ul key={index}>
          <li>
            <Link
              route="post"
              as={`/blog/${post.id}`}
              href={`/blog?id=${post.id}&apiRoute=post`}
            >
              <a>{post.title.rendered}</a>
            </Link>
          </li>
        </ul>
      );
    });
    return (
      <Layout>
        <h2>Blog List</h2>
        {posts}
      </Layout>
    );
  }
}

//const Index = () => (
//  <div>
//    <h1>Blog List</h1>
//    <Link href="/blog">
//      <a>Go to the recent posts</a>
//    </Link>
//  </div>
//)

export default Index
