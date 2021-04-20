import React from 'react';
import Layout from '../components/Layout';
import { getFeed } from '../api';
import '../styles/global.scss';
import ReactGA from 'react-ga';

export class Feed extends React.Component {
    componentDidMount() {
        ReactGA.initialize('UA-176555731-1');
        ReactGA.pageview(window.location.pathname + window.location.search, [], 'Feed');
    }

    render() {
        return (
            <Layout
                type="feed"
                data={this.props.posts.result}
                title="Deník"
                description="Všechno to, co jsem nechtěl dávat nikam jinam."
            />
        );
    }
}

Feed.getInitialProps = async ({ req }) => {
    const res = await getFeed();

    const json = await res.json();
    return { posts: json };
};

export default Feed;
