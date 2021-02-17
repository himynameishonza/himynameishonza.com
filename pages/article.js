import React from 'react';
import Layout from '../components/Layout';

function Article(props) {


    return (
        <Layout type="article" >{props.children}</Layout>
    )
}
export default Article;
