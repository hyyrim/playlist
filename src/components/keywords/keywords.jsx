import React from 'react';
import Keyword from './keyword/keyword';
import styles from './keywords.module.css';

const Keywords = ({ keywords, channel }) => {
	return (
		<div className={styles.container}>
			<ul className={styles.keywords}>
				테마
				{keywords.map((item) => {
					return <Keyword keyword={item} />;
				})}
			</ul>
			<ul className={styles.channel}>
				채널
				{channel.map((item) => {
					return <Keyword keyword={item} />;
				})}
			</ul>
		</div>
	);
};

export default Keywords;
