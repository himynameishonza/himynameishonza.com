import {withRouter, useRouter} from 'next/router';
import {getPostsInCategory} from '../../api/';
import {useState, useEffect} from 'react';
import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import '../../styles/global.scss';
import ReactGA from 'react-ga';

const IndexPage = ({posts}) => {
    const [postData, setData] = useState(posts);

    const router = useRouter();
    const {category} = router.query;

    useEffect(() => {
        getPostsInCategory(category).then(res => res.json().then(json => setData(json.result)));
        ReactGA.initialize('UA-176555731-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [category]);

    return postData ? <Layout data={postData} type="archive" category={category} /> : <Loading />;
};

IndexPage.getInitialProps = async ({req}) => {
    if (typeof window !== 'undefined') {
        return {data: null};
    }
    const category = req.url.replace('/rubrika/', '');
    const res = await getPostsInCategory(category);
    const json = await res.json();
    const data = json.result;
    return {data};
};

export default withRouter(IndexPage);
