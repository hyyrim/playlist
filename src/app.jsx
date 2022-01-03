import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';
import data from './videoList.json';

function App() {
	const [videos, setVideos] = useState([]);

	/*
  useEffect(() => {const requestOptions = {
		method: 'GET',
		redirect: 'follow',
	};

	fetch(
		`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=playlist&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
		requestOptions
	)
		.then((response) => response.json())
		.then((result) => console.log(result))
		.catch((error) => console.log('error', error))}, [])  
	
  */
	// console.log(data.items);
	useEffect(() => setVideos(data.items), []);

	return <VideoList videos={videos} />;
}

export default App;
