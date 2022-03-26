import React from 'react';
import { LayoutProps } from './Layout.props';
import { SideBar } from './Sidebar/SideBar';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

import styles from './Layout.module.css';
import cn from 'classnames';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <>
            <Header />
            <div>
                <SideBar />
                <div>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
};
