import React, { useContext } from 'react';
import { MenuProps } from './Menu.props';
import { AppContext } from '../../context/app.context';

import styles from './Menu.module.css';
import cn from 'classnames';


export const Menu = ({ ...props }: MenuProps): JSX.Element => {
    const { menu, firstCategory, setMenu } = useContext(AppContext);
    return (
        <div {...props}>
            <ul>
                {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
            </ul>
        </div>
    );
};
