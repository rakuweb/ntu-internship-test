import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang={`ja-JP`}>
        <Head>
          <link rel="icon" href="/favicons/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/svg/ntu-job.svg"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/svg/ntu-job.svg"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/svg/ntu-job.svg"
          />
          {/* <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          /> */}
          {/* <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" /> */}
          <meta charSet={`utf-8`} />
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;1,700&family=Oswald:wght@700&display=swap"
            rel="stylesheet"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
