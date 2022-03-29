import React from 'react';
import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({ size = 'sm', color = 'ghost', href, children, className, ...props }: TagProps): JSX.Element => {
    return (
        <div className={cn(styles.tag, className, {
            [styles.sm]: size === 'sm',
            [styles.md]: size === 'md',
            [styles.ghost]: color === 'ghost',
            [styles.red]: color === 'red',
            [styles.green]: color === 'green',
            [styles.primary]: color === 'primary',
            [styles.grey]: color === 'grey'
        })}
            {...props}
        >{
                href ? <a href={href}>{children}</a> : <>{children}</>
            }
        </div>
    );
};
