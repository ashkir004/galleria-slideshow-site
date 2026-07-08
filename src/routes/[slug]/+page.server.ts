import dataFile from '$lib/data.json';
import { formatSlug } from '$lib/utils.js';

export async function load({ params }) {
    const slug = params.slug;
    const item = dataFile.find((item) => formatSlug(item.name) === slug);

    if (!item) {
        return {
            status: 404,
            error: new Error('Item not found'),
        };
    }

    return {
        item,
    };
}