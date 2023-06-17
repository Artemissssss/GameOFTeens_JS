import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/img/logo.png" />
        <link href="https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main/>
        <NextScript />
      </body>
    </Html>
  )
}
