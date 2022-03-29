import React from 'react';
import { SideBarProps } from './SideBar.props';
import { Menu } from '../Menu/Menu';

import styles from './SideBar.module.css';
import cn from 'classnames';

export const SideBar = ({ ...props }: SideBarProps): JSX.Element => {
    return (
        <div {...props}>
            <Menu />
        </div>
    );
};
 