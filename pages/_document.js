import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';
import { getServerSideToken , getUserScript } from '../auth';

export default class MyDocument extends Document {
   static async getInitialProps(ctx) {
      const sheet = new ServerStyleSheet();
      const page = ctx.renderPage((App) => (props) =>
         sheet.collectStyles(<App {...props} />),
      );
      const styleTags = sheet.getStyleElement();
      const userData = await getServerSideToken(ctx.req);
      return { ...page, styleTags , ...userData};
  }

  render () {   
     var { user } = this.props 
    return (
      <html>
        <Head>
          <title>My page</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={{__html: getUserScript(user)}}/>
        </body>
      </html>
    )
  }
}