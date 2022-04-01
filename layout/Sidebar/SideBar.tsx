import React from 'react';
import { SideBarProps } from './SideBar.props';
import { Menu } from '../Menu/Menu';

export const SideBar = ({ ...props }: SideBarProps): JSX.Element => {
    return (
        <div {...props}>
            <Menu />
        </div>
    );
};
