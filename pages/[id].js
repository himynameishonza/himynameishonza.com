import {withRouter, useRouter} from 'next/router';
import {getPost} from '../api/';
import {useState, useEffect} from 'react';
import Layout from '../components/Layout';
import '../styles/global.scss';
import ReactGA from 'react-ga';

const Post = ({data}) => {
    const [postData, setData] = useState(data);
    const [renderError, setRenderError] = useState(false);

    const router = useRouter();
    const {id} = router.query;

    function checkRender() {
        setTimeout(() => {
            setRenderError(true);
        }, 3000);
    }

    useEffect(
        () => {
            getPost(id).then(res => res.json().then(json => setData(json.result[0])));
            ReactGA.initialize('UA-176555731-1');
            ReactGA.pageview(window.location.pathname + window.location.search);
        },
        [id],
        checkRender()
    );

    return postData && postData.length !== 0 ? (
        <Layout data={postData} type="article" />
    ) : renderError ? (
        <Layout type="error" statusCode={404} />
    ) : (
        <Layout type="loading" />
    );
};

Post.getInitialProps = async ({req}) => {
    if (typeof window !== 'undefined') {
        return {data: null};
    }

    const id = req.url.replace('/', '');
    const res = await getPost(id);
    const json = await res.json();
    const data = json.result[0];
    return {data};
};

export default withRouter(Post);
