export default {
    name: 'post',
    title: 'Příspěvky',
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
            name: 'mainImage',
            title: 'Obrázek (výchozí)',
            type: 'image',
            fields: [
                {
                    name: 'author',
                    title: 'Autor',
                    type: 'string',
                },
            ],
            options: {
                hotspot: true,
            },
        },
        {
            name: 'mainImageDark',
            title: 'Obrázek (tmavý)',
            type: 'image',
            fields: [
                {
                    name: 'author',
                    title: 'Autor',
                    type: 'string',
                },
            ],
            options: {
                hotspot: true,
            },
        },
        {
            name: 'categories',
            title: 'Kategorie',
            type: 'array',
            of: [{type: 'reference', to: {type: 'category'}}],
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
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const {author} = selection;
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`,
            });
        },
    },
};
