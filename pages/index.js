import React from 'react';
import Layout from '../components/Layout';

function Homepage(props) {


    return (
        <Layout type="homepage" >{props.children}</Layout>
    )
}
export default Homepage;
