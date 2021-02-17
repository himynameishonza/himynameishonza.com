export default {
    name: 'category',
    title: 'Kategorie',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Název',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Popis',
            type: 'text',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'string',
        },
    ],
};
