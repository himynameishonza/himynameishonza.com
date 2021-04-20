export default {
    name: 'feed',
    title: 'Feed',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Název',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'contentType',
            title: 'Typ příspěvku',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Text', value: 'text' },
                    { title: 'Video', value: 'video' },
                    { title: 'Audio', value: 'audio' },
                    { title: 'Kniha', value: 'kniha' },
                    { title: 'Hra', value: 'hra' },
                    { title: 'Film', value: 'film' }
                ]
            }
        },
        {
            name: 'publishedAt',
            title: 'Publikováno',
            type: 'datetime',
        },
        {
            name: 'body',
            title: 'Obsah',
            type: 'blockContent',
        },
        {
            name: 'attachment',
            title: 'Příloha',
            type: 'text',
        },
    ],
};
