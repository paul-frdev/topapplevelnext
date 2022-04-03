import React from 'react';
import { ProductProps } from './Product.props';

import styles from './Product.module.css';
import cn from 'classnames';

import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { priceRu } from '../../helpers/helpers';
import { Divider } from '../Divider/Divider';

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
  return (
    <Card color={'white'} className={styles.product}>
      <div className={styles.logo}>
        <img
          src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
          alt={product.title}
          className={styles.imgLogo}
        />
      </div>
      <div className={styles.title}>
        {product.title}
      </div>
      <div className={styles.price}>
        {priceRu(product.price)}
        {product.oldPrice
          &&
          <Tag className={styles.oldPrice} color='green' size='tiny'>
            {priceRu(product.price - product.oldPrice)}
          </Tag>}
      </div>
      <div className={styles.credit}>
        {priceRu(product.credit)}/<span>мес</span>
      </div>
      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={styles.tags}>
        {product.categories.map(category => <Tag className={styles.category} key={category} color='ghost' size={'sm'}>{category}</Tag>)}
      </div>
      <div className={styles.priceTitle}>цена</div>
      <div className={styles.creditTitle}>кредит</div>
      <div className={styles.reviewTitle}>{product.reviewCount} отзывов</div>

      <Divider className={styles.hr} />
      <div className={styles.description}>{product.description}</div>
      <div className={styles.feature}>фичи</div>
      <div className={styles.advBlock}>
        {product.advantages && <div className={styles.advantages}>
          <div className={styles.advantagesTitle}>Преймущества</div>
          {product.advantages}
        </div>}
        {product.disadvantages && <div className={styles.disAdvantages}>
          <div className={styles.disAdvantagesTitle}>Недостатки</div>
          {product.disadvantages}
        </div>}
      </div>
      <Divider className={styles.hr} />
      <div className={styles.actions}>
        <Button appearance='primary'>Узнать подробнее</Button>
        <Button className={styles.reviewBtn} appearance='ghost' arrow={'right'}>Узнать подробнее</Button>
      </div>
    </Card>
  );
};
