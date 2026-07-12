import dataFile from '$lib/data.json';

export async function load() {
	return {
		summaries: dataFile.map((item) => ({
			name: item.name,
			artist: item.artist,
			thumbnail: item.images.thumbnail
		}))
	};
}
