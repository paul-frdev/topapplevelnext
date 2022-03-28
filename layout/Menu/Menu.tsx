import React, { useContext } from 'react';
import { MenuProps } from './Menu.props';
import { AppContext } from '../../context/app.context';
import { firstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/topPage.interface';

import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';

import styles from './Menu.module.css';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

const firstLevelMenu: firstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
    { route: 'services', name: 'сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
    { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
];


export const Menu = ({ ...props }: MenuProps): JSX.Element => {
    const { menu, firstCategory, setMenu } = useContext(AppContext);
    const router = useRouter();

    const openedSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(menuActive => {
            if (menuActive._id.secondCategory === secondCategory) {
                menuActive.isOpened = !menuActive.isOpened;
            }
            return menuActive;
        }));
    };

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(menuFirst => (
                    <div key={menuFirst.route}>
                        <Link href={`/${menuFirst.route}`}>
                            <a>
                                <div className={cn(styles.firstLevel, {
                                    [styles.firstLevelActive]: menuFirst.id === firstCategory
                                })}>
                                    {menuFirst.icon}
                                    <span>{menuFirst.name}</span>
                                </div>
                            </a>
                        </Link>
                        {menuFirst.id === firstCategory && buildSecondLevel(menuFirst)}
                    </div>
                ))}
            </>
        );
    };

    const buildSecondLevel = (menuItem: firstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(menuSecond => {
                    if (menuSecond.pages.map(page => page.alias).includes(router.asPath.split('/')[2])) {
                        menuSecond.isOpened = true;
                    }
                    return (
                        <div key={menuSecond._id.secondCategory}>
                            <div className={styles.secondLevel} onClick={() => openedSecondLevel(menuSecond._id.secondCategory)}>{menuSecond._id.secondCategory}</div>
                            <div className={cn(styles.secondLevelBlock, {
                                [styles.secondLevelBlockOpened]: menuSecond.isOpened
                            })}>
                                {buildThirdLevel(menuSecond.pages, menuItem.route)}
                            </div>
                        </div>
                    );

                })}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            <div>
                {pages.map(page => (
                    <Link href={`/${route}/${page.alias}`}>
                        <a className={cn(styles.thirdLevel, {
                            [styles.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath
                        })}>
                            {page.category}
                        </a>
                    </Link>
                ))}
            </div>
        );
    };
    return (
        <div className={styles.menu} {...props}>
            {buildFirstLevel()}
        </div>
    );
};
