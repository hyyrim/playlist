import React from 'react';
import styles from './keyword.module.css';

const Keyword = ({ name, search, onSearch }) => {
	return (
		<li>
			<button className={styles.button} onClick={() => onSearch(search)}>
				{name}
			</button>
		</li>
	);
};

export default Keyword;
