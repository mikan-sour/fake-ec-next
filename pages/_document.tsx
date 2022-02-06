import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import React from 'react';

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato"
          rel="stylesheet"
        />
        </Head>
        <body>
          <Main />
          <div id='modal-portal'/>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument