import React from 'react';
import { SideBarProps } from './SideBar.props';
import { Menu } from '../Menu/Menu';
import { Search } from '../../components';
import LogoIcon from '../../images/logo.svg';
import Link from 'next/link';

export const SideBar = ({ ...props }: SideBarProps): JSX.Element => {
    return (
        <div {...props}>
            <Link href={'/'}>
                <LogoIcon />
            </Link>
            <Search />
            <Menu />
        </div>
    );
};
