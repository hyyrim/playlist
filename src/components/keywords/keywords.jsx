import React from 'react';
import Keyword from './keyword/keyword';
import styles from './keywords.module.css';

const Keywords = ({ recommend, onSearch }) => {
	return (
		<div className={styles.container}>
			<ul className={styles.keywords}>
				<p className={styles.description}>테마</p>
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
				<p className={styles.description}>채널</p>
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
