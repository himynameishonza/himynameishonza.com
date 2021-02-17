import React from 'react';
import Layout from '../components/Layout';
import {getHomepagePosts} from '../api/';
import '../styles/global.scss';
import ReactGA from 'react-ga';

export class Homepage extends React.Component {
    componentDidMount() {
        ReactGA.initialize('UA-176555731-1');
        ReactGA.pageview(window.location.pathname + window.location.search, [], 'Homepage');
    }

    render() {
        return <Layout type="homepage" data={this.props.posts.result} />;
    }
}

Homepage.getInitialProps = async ({req}) => {
    const res = await getHomepagePosts();
    const json = await res.json();
    return {posts: json};
};

export default Homepage;
