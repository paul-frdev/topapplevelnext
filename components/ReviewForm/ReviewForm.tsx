import React from 'react';
import { ReviewFormProps } from './ReviewForm.props';

import styles from './ReviewForm.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { TextArea } from '../TextArea/TextArea';
import { Button } from '../Button/Button';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {



    return (
        <div className={cn(styles.reviewForm, className)}
            {...props}
        >
            <Input />
            <Input />
            <div className={styles.rating}>
                <span>Оценка:</span>
                <Rating rating={0} />
            </div>
            <TextArea />
            <div className={styles.submit}>
                <Button appearance='primary'>Отправить</Button>
                <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
            </div>
        </div>
    );
};
