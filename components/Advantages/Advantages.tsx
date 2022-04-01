import React from 'react';
import { AdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.css';
import CheckIcon from './check.svg';
import { Htag } from '../Htag/Htag';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {

    return (
        <div className={styles.advantages}>
            {advantages && advantages.map(advantage => (
                <div key={advantage._id} className={styles.wrapper}>
                    <CheckIcon className={styles.icon}/>
                    <div className={styles.title}>{advantage.title}</div>
                    <hr className={styles.vline}/>
                    <div className={styles.description}>{advantage.description}</div>
                </div>
            ))}
        </div>
    );
};
