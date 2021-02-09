import Head from 'next/Head';

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
    </Head>
);

export default Index;
