import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video }) => {
	return (
		<section className={styles.detail}>
			<iframe
				id="ytplayer"
				type="text/html"
				width="100%"
				height="500px"
				src={`https://www.youtube.com/embed/${video.id.videoId}`}
				frameBorder="0"
				allowFullScreen
			></iframe>
			<h2>{video.snippet.title}</h2>
			<h3>{video.snippet.channelTitle}</h3>
			<p className={styles.description}>{video.snippet.description}</p>
		</section>
	);
};

export default VideoDetail;
