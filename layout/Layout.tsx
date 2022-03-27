import React, { FunctionComponent } from 'react';
import { LayoutProps } from './Layout.props';
import { SideBar } from './Sidebar/SideBar';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { AppContextProvider, IAppContext } from '../context/app.context';

import styles from './Layout.module.css';
import cn from 'classnames';

const Layout = ({ children }: LayoutProps): JSX.Element => {
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

export const WithLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>
        );
    };
};