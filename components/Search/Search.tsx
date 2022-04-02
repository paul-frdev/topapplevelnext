import React, { useState } from 'react';
import { SearchProps } from './Search.props';
import SearchIcon from './search.svg';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';


import styles from './Search.module.css';
import cn from 'classnames';
import { useRouter } from 'next/router';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {

    const [search, setSearch] = useState('');
    const router = useRouter();

    const goToSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        });
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            goToSearch();
        }
    };

    return (
        <div {...props} className={cn(className, styles.search)}>
            <Input
                className={styles.input}
                placeholder='поиск...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button
                appearance='primary'
                className={styles.btn}
                onClick={goToSearch}
            >
                <SearchIcon />
            </Button>
        </div>
    );
};
