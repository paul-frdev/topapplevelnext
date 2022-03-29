import React from 'react';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';

import cn from 'classnames';


export const Footer = ({ ...props }: FooterProps): JSX.Element => {
    return (
        <div {...props} >
            <div className={styles.footerContainer}>
                <p className={styles.footerRights}>OwlTop © <span>{new Date().getFullYear()}</span> Все права защищены</p>
                <div className={styles.footerPolicy}>
                    <a href="#" className={styles.footerLink}>Пользовательское соглашение</a>
                    <a href="#" className={styles.footerLink}>Политика конфиденциальности</a>
                </div>
            </div>
        </div>
    );
};
