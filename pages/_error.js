import Layout from '../components/Layout';

function Error({ statusCode }) {
    return <Layout type="error" statusCode={statusCode} />;
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
