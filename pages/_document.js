import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charset="utf-8" />
          <title>OverJob</title>
          <link rel="icon" href="/favicon.ico"></link>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href={"https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800&display=swap"} rel="stylesheet"></link>
          <meta name="description" content="Um lugar para encontrar vagas" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument