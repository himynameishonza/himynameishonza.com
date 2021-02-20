import fetch from 'isomorphic-fetch';

const apiURL = 'https://befmpc9h.api.sanity.io/v1/data/query/production?query=';

export function getHomepagePosts() {
    return fetch(
        apiURL +
            `*%5B_type%20%3D%3D%20%22post%22%20%26%26%20categories%5B0%5D._ref%20in%20*%5B_type%3D%3D%22category%22%20%26%26%20slug!%3D%22venku-zase-prsi%22%5D._id%20%5D%7B%22categoryNames%22%3A%20categories%5B%5D-%3E%7Btitle%7D%2C%20...%7D%7C%20order(publishedAt%20desc)%5B0...4%5D%0A`
    );
}

export function getPostsVZP() {
    return fetch(
        apiURL +
            `%2A%5B_type%3D%3D%27post%27%26%26%2A%5B_type%3D%3D%22category%22%26%26slug%3D%3D%22venku-zase-prsi%22%5D%5B0%5D._id%20in%20categories%5B%5D._ref%5D%7B...%7D%7Corder%28publishedAt%20desc%29%5B0...4%5D`
    );
}

export function getPost(slug) {
    return fetch(
        apiURL + `*[slug.current=="${slug}"]{"categoryNames":categories[]->{title},%20...}`
    );
}

export function getPostsInCategory(category) {
    return fetch(
        apiURL +
            `*%5B_type%3D%3D%27post%27%26%26*%5B_type%3D%3D%22category%22%26%26slug%3D%3D%22${category}%22%5D%5B0%5D._id%20in%20categories%5B%5D._ref%5D%7B%22categoryNames%22%3A%20categories%5B%5D-%3E%7Btitle%2C%20slug%7D%2C%20...%7D%7Corder(publishedAtdesc)`
    );
}
