import React from 'react';
import Keyword from './keyword/keyword';
import styles from './keywords.module.css';

const Keywords = ({ recommend, onSearch }) => {
	return (
		<div className={styles.container}>
			<ul className={styles.keywords}>
				테마
				{recommend.keywords.map((item) => {
					return (
						<Keyword
							key={item.key}
							name={item.name}
							search={item.search}
							onSearch={onSearch}
						/>
					);
				})}
			</ul>
			<ul className={styles.channel}>
				채널
				{recommend.channel.map((item) => {
					return (
						<Keyword
							key={item.key}
							name={item.name}
							search={item.search}
							onSearch={onSearch}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default Keywords;
