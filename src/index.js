import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import Youtube from './service/youtube';
import Recommend from './components/keywords/Recommend';
import axios from 'axios';

const httpClient = axios.create({
	baseURL: 'https://youtube.googleapis.com/youtube/v3',
	params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});
const youtube = new Youtube(httpClient);
const recommend = new Recommend();

ReactDOM.render(
	<React.StrictMode>
		<App youtube={youtube} recommend={recommend} />
	</React.StrictMode>,
	document.getElementById('root')
);
