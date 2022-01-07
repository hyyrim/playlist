import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import Keywords from './components/keywords/keywords';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';
import data from './videoList.json';

function App({ youtube, recommend }) {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	const selectVideo = (video) => {
		setSelectedVideo(video);
	};

	const search = useCallback((query) => {
		youtube
			.search(query) //
			.then(
				(videos) => setVideos(videos), //
				setSelectedVideo(null)
			);
	}, []);

	const toMainPage = useCallback(() => {
		youtube
			.setPlayList() //
			.then((video) => setVideos(video));
		setSelectedVideo(null);
	}, []);

	useEffect(() => {
		youtube
			.setPlayList() //
			.then((videos) => setVideos(videos));
	}, []);

	// console.log(data.items);
	// useEffect(() => setVideos(data.items), []);

	return (
		<div className={styles.app}>
			<header>
				<SearchHeader onSearch={search} toMainPage={toMainPage} />
			</header>
			<section>
				<Keywords recommend={recommend} onSearch={search} />
			</section>
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
