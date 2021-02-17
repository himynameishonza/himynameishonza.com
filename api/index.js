import fetch from 'isomorphic-fetch';

export function getHomepagePosts() {
    return fetch(
        `https://befmpc9h.api.sanity.io/v1/data/query/production?query=*[_type%20in%20["post"]]|%20order(publishedAt desc)[0...4]`
    );
}

export function getPostsFeatured() {
    return fetch(
        `https://befmpc9h.api.sanity.io/v1/data/query/production?query=*[_type%20in%20["post"]]|%20order(publishedAt desc)[2...4]`
    );
}

export function getPostsVZP() {
    return fetch(
        `https://befmpc9h.api.sanity.io/v1/data/query/production?query=*[_type%20in%20["post"]]|%20order(publishedAt desc)[0...4]`
    );
}

export function getPost(slug) {
    return fetch(
        `https://befmpc9h.api.sanity.io/v1/data/query/production?query=*[slug.current=="${slug}"]`
    );
}

export function getPostsInCategory(category) {
    return fetch(
        `https://befmpc9h.api.sanity.io/v1/data/query/production?query=*[_type%20==%20"${category}"]|%20order(publishedAt desc)`
    );
}
