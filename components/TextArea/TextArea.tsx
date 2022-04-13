import React, { ForwardedRef, forwardRef } from 'react';
import { TextAreaProps } from './TextArea.props';
import styles from './TextArea.module.css';
import cn from 'classnames';

export const TextArea = forwardRef(({ error, className, ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
        <div className={cn(styles.textAreaWrapper, className, {
            [styles.error]: error
        })}>
            <textarea className={cn(styles.textarea)} ref={ref} {...props} />
            {error &&
                <span className={styles.errorMessage}>
                    {error.message}
                </span>
            }
        </div>
    );
});
