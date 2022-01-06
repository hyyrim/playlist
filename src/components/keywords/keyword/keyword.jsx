import React from 'react';
import styles from './keyword.module.css';

const Keyword = ({ keyword }) => {
	return (
		<li>
			<button>{keyword}</button>
		</li>
	);
};

export default Keyword;
