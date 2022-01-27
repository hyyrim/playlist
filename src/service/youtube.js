

class Youtube {
	constructor(httpClient) {
		this.client = httpClient;
	}

	async setPlayList() {
		const response = await this.client.get('search', {
			params: {
				part: 'snippet',
				maxResults: 30,
				q: 'playlist',
				type: 'video',
				regionCode: 'KR',
			},
		});
		return response.data.items.map((item) => ({
			...item,
			id: item.id.videoId,
		}));

		// const response = await fetch(
		// 	`/search?part=snippet&maxResults=30&q=playlist&type=video&key=${this.key}&regionCode=KR`,
		// 	this.getRequestOptions
		// );
		// const result_1 = await response.json();
		// return result_1.items;
		// // .catch((error) => console.log('error', error));
	}

	async search(query) {
		const response = await this.client.get('search', {
			params: {
				part: 'snippet',
				maxResults: 30,
				q: query,
				type: 'video',
				regionCode: 'KR',
			},
		});
		return response.data.items.map((item) => ({
			...item,
			id: item.id.videoId,
		}));

		// const response = await fetch(
		// 	`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&type=video&regionCode=KR&key=${this.key}`,
		// 	this.getRequestOptions
		// );
		// const result_1 = await response.json();
		// return result_1.items;
		// // .catch((error) => console.log('error', error));
	}
}

export default Youtube;
