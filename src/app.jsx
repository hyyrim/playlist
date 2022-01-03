import { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';
import data from './videoList.json';

function App() {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	const selectVideo = (video) => {
		setSelectedVideo(video);
	};

	useEffect(() => {
		const requestOptions = {
			method: 'GET',
			redirect: 'follow',
		};

		fetch(
			`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=playlist&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&regionCode=KR`,
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => setVideos(result.items))
			.catch((error) => console.log('error', error));
	}, []);

	// console.log(data.items);
	// useEffect(() => setVideos(data.items), []);

	return (
		<div className={styles.app}>
			<section className={styles.content}>
				{selectedVideo && (
					<div className={styles.detail}>
						<VideoDetail video={selectedVideo} />
					</div>
				)}
				<div className={styles.list}>
					<VideoList
						videos={videos}
						onVideoClick={selectVideo}
						display={selectedVideo ? 'list' : 'grid'}
					/>
				</div>
			</section>
		</div>
	);
}

export default App;
