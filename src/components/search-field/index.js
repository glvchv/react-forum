import React from 'react';
import styles from './index.module.css';

const SearchField = (props) => {
    const options = [
        { value: 'all', label: 'See all' },
        { value: 'sports', label: 'Sports' },
        { value: 'entertainment', label: 'Entertainment' },
        { value: 'education', label: 'Education' },
        { value: 'technology', label: 'Technology' },
        { value: 'other', label: 'Other' }
    ]
    return (
        <div className={styles.wrapper}>
            <p>Search by category:</p>
            <select onChange={props.filterBySelect}>
                {options.map((o, i) => {
                    return (<option key={i} value={o.value}>{o.label}</option>)
                })}
            </select>
            <label>Search by word:</label>
            <input type='text' onChange={props.filterPostsByWord}/>
            <button value='newest' className={styles.buttons} onClick={props.filterByButton}>Newest</button>
            <button value='top' className={styles.buttons} onClick={props.filterByButton}>Top rated</button>
        </div>
    )
}

export default SearchField;