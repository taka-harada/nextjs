import React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="ja">
        <Head>
          <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Lato:300,400,700,900"/>
        </Head>
        <body className="l-body">
          <Main/>
          <NextScript/>
        </body>
      </html>
    )
  }
}
