import React from 'react';
import Layout from '../components/Layout';
import {getHomepagePosts, getPostsVZP} from '../api/';
import '../styles/global.scss';
import ReactGA from 'react-ga';

export class Homepage extends React.Component {
    componentDidMount() {
        ReactGA.initialize('UA-176555731-1');
        ReactGA.pageview(window.location.pathname + window.location.search, [], 'Homepage');
    }

    render() {
        console.log(this.props);
        return (
            <Layout
                type="homepage"
                data={this.props.posts.result}
                dataVzp={this.props.vzpPosts.result}
            />
        );
    }
}

Homepage.getInitialProps = async ({req}) => {
    const res = await getHomepagePosts();
    const res2 = await getPostsVZP();

    const json = await res.json();
    const json2 = await res2.json();

    return {posts: json, vzpPosts: json2};
};

export default Homepage;
