import React, { useEffect, useState, KeyboardEvent } from 'react';
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
        const updatedArray = ratingArray.map((r: JSX.Element, index: number) => {
            return (
                <span
                    className={cn(styles.star, {
                        [styles.filled]: index < currentRating,
                        [styles.editable]: isEditable
                    })}
                    onMouseEnter={() => changeDisplay(index + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => handleClick(index + 1)}
                >
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(event: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(index + 1, event)}
                    />
                </span>
            );
        });

        setRatingArray(updatedArray);
    };

    const handleClick = (index: number) => {
        if (!isEditable || !setRating) return;
        setRating(index);
    };

    const handleSpace = (index: number, event: KeyboardEvent<SVGAElement>) => {
        if (event.code !== 'Space' || !setRating) return;
        setRating(index);
    };

    const changeDisplay = (index: number) => {
        if (!isEditable) return;

        constructRating(index);
    }


    return (
        <div {...props}>
            {ratingArray.map((rating, index) => (
                <span key={index}>{rating}</span>
            ))}
        </div>
    );
};
