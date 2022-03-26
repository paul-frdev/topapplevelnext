import React from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowRight from './arrow-right.svg';

export const Button = ({ appearance, children, className, arrow = 'none', ...props }: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance === 'primary',
                [styles.ghost]: appearance === 'ghost'
            })}
            {...props}
        >
            {children}
            {arrow !== 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow === 'down'
            })}>
                <ArrowRight className='arrow-right'/>
            </span>}
        </button>
    );
};
