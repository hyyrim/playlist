import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchHeader = memo(({ onSearch, toMainPage }) => {
	const inputRef = useRef(null);

	const handleSearch = (e) => {
		e.preventDefault();
		const value = inputRef.current.value;
		onSearch(value);
		inputRef.current.value = '';
	};
	return (
		<header className={styles.header}>
			<div className={styles.logo} onClick={toMainPage}>
				<FontAwesomeIcon
					className={styles.icon}
					icon={faPlayCircle}
				></FontAwesomeIcon>
				<h1 className={styles.title}>Playlist</h1>
			</div>
			<form className={styles.search} onSubmit={handleSearch}>
				<input
					className={styles.input}
					ref={inputRef}
					type="text"
					placeholder="Search"
				/>
				<button className={styles.button}>
					<FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
				</button>
			</form>
		</header>
	);
});
export default SearchHeader;
