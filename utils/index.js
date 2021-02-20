import React from 'react';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Keyboard events
export function useKeyboardEvent(key, callback) {
    useEffect(() => {
        const handler = function (event) {
            if (event.key === key) {
                callback();
            }
        };
        window.addEventListener('keydown', handler);
        return () => {
            window.removeEventListener('keydown', handler);
        };
    }, []);
}

// Router
export function goBack() {
    const router = useRouter();
    //return () => router.back();
}

// Date formater
export function dateFormater(date) {
    const d = new Date(date);
    return d.getDate();
}

// Month formater
export function monthFormater(date, type) {
    const month = new Array(
        'Ledna',
        'Února',
        'Března',
        'Dubna',
        'Května',
        'Června',
        'Července',
        'Srpna',
        'Září',
        'Října',
        'Listopadu',
        'Prosince'
    );

    const shortMonth = new Array(
        'Led',
        'Úno',
        'Bře',
        'Dub',
        'Kvě',
        'Čer',
        'Čvc',
        'Srp',
        'Zář',
        'Říj',
        'List',
        'Pro'
    );

    const d = new Date(date);
    const yearString = d.getFullYear().toString();
    return type === 'short'
        ? shortMonth[d.getMonth()] + ' ' + yearString.slice(2)
        : month[d.getMonth()] + ' ' + yearString;
}

// Reading time
export function readingTime(data) {
    let wordCount = 0;
    let humanTime;
    let finalTime;

    data.forEach(function (block) {
        block.children.forEach(function (paragraphs) {
            wordCount = wordCount + paragraphs.text.split(' ').length;
        });
    });
    humanTime = Math.round(wordCount / 150);

    if (humanTime < 2) {
        finalTime = 'Čtení na minutu';
    }

    if (humanTime > 1 && humanTime < 5) {
        finalTime = 'Čtení na ' + humanTime + ' minuty';
    }

    if (humanTime > 4) {
        finalTime = 'Čtení na ' + humanTime + ' minut';
    }

    return finalTime;
}

// Prepare serializers
export const serializers = {
    types: {
        code: props => (
            <pre data-language={props.node.language}>
                <code>{props.node.code}</code>
            </pre>
        ),
    },
};

// Get config
export const config = {
    projectId: 'befmpc9h',
    dataset: 'production',
    useCdn: true,
};

// Get client and builder
export const client = sanityClient(config);
export const builder = imageUrlBuilder(client);

// Get URL from source
export const urlFor = source => {
    return builder.image(source);
};

// Return plan text
export function plainText(content) {
    const newContent = blocksToText(content);
    const contentToString = newContent.toString().slice(0, 400);
    return contentToString;
}

const defaults = {nonTextBehavior: 'remove'};

function blocksToText(blocks, opts = {}) {
    const options = Object.assign({}, defaults, opts);
    return blocks.map(block => {
        if (block._type !== 'block' || !block.children) {
            return options.nonTextBehavior === 'remove' ? '' : `[${block._type} block]`;
        }
        const words = block.children
            .map(child => child.text)
            .join('')
            .split(' ')
            .join(' ');
        return words;
    });
}

// Get category name by reference ID
export function getCategory(reference) {
    // console.log(reference);
    return reference;
}
