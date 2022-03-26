import React, { useEffect, useState } from 'react';
import { RatingProps } from './Rating.props';
import StarIcon from './star.svg';
import styles from './Rating.module.css';
import cn from 'classnames';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>([...Array(5)].fill(<></>));


    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((rating: JSX.Element, index: number) => {
            return (
                <StarIcon
                    className={cn(styles.star, {
                        [styles.filled]: index < currentRating
                    })}
                />
            );
        });

        setRatingArray(updatedArray);
    };

    
    return (
        <div {...props}>
            {ratingArray.map((rating, index) => (
                <span key={index}>{rating}</span>
            ))}
        </div>
    );
};
