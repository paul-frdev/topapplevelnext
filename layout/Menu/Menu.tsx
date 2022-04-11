import React, { useContext } from 'react';
import { MenuProps } from './Menu.props';
import { AppContext } from '../../context/app.context';
import { firstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';

import styles from './Menu.module.css';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '../../helpers/helpers';

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
          <Link href={`/${route}/${page.alias}`} key={page._id}>
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
