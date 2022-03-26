import React from 'react';
import { PtagProps } from './Ptag.props';
import styles from './Ptag.module.css';
import cn from 'classnames';

export const Ptag = ({ tag = 'sm', children, className }: PtagProps): JSX.Element => {
    return (
        <p className={cn(styles.p, className, {
            [styles.md]: tag === 'md',
            [styles.xl]: tag === 'xl',
            [styles.sm]: tag === 'sm'
        })}>
            {children}
        </p>
    );
};
