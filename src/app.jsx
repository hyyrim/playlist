import { useEffect, useState } from 'react';
import styles from './app.module.css';
import Keywords from './components/keywords/keywords';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';
import data from './videoList.json';

function App({ youtube }) {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	const keywords = ['코딩', '운동', '수면', '드라이브'];
	const channel = [
		'essential;',
		'리플레이',
		'네고막을책임져도될까',
		'Ode Studio Seoul',
	];

	const selectVideo = (video) => {
		setSelectedVideo(video);
	};

	const search = (query) => {
		youtube
			.search(query) //
			.then(
				(videos) => setVideos(videos), //
				setSelectedVideo(null)
			);
	};

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
				<SearchHeader onSearch={search} />
			</header>
			<section>
				<Keywords keywords={keywords} channel={channel} />
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
