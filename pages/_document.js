import Document, { Html, Head, Main, NextScript } from 'next/document';
import { withRouter } from 'next/router';

export default class CustomDocument extends Document {
    render() {
        return (
            <Html lang="cs">
                <Head />
                <body className="theme--light">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
