import Head from 'next/head';

const Index = props => (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>
            {props.title ? props.title + ' – Hi My Name is Honza' : 'Hi My Name is Honza'}
        </title>
        <meta
            name="description"
            content={
                props.description
                    ? props.description
                    : 'Jmenuju se Honza. Mám názor a nebojim se ho použít.'
            }
        />
        <meta
            property="og:title"
            content={props.title ? props.title + ' – Hi My Name is Honza' : 'Hi My Name is Honza'}
        />
        <meta
            property="og:description"
            content={
                props.description
                    ? props.description
                    : 'Jmenuju se Honza. Mám názor a nebojim se ho použít.'
            }
        />
        <meta property="og:image" content={props.ogImage ? props.ogImage : '/static/og-dark.jpg'} />
        <meta property="og:url" content={props.url ? props.url : 'https://himynameishonza.com'} />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta property="og:type" content="website" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/static/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/static/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
    </Head>
);

export default Index;
