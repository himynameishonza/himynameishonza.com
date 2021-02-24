import Document, { Html, Head, Main, NextScript } from 'next/document';
import { readThemeCookie } from '../utils/cookies';
export default class CustomDocument extends Document {
    render() {
        return (
            <Html lang="cs">
                <Head theme={readThemeCookie()} />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
