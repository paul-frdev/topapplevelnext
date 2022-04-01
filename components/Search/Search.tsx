import React from 'react';
import { SearchProps } from './Search.props';
import SearchIcon from './search.svg';

import styles from './Search.module.css';
import cn from 'classnames';

export const Search = ({ onsubmit, className, ...props }: SearchProps): JSX.Element => {
    return (
        <form {...props}>
            <div className={styles.wrapper}>
                <input className={styles.input} type="text" placeholder='поиск' />
                <button className={styles.btn}>
                    <SearchIcon />
                </button>
            </div>
        </form>
    );
};
