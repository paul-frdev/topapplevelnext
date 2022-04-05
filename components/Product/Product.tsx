import React, { useState } from 'react';
import { ProductProps } from './Product.props';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { declOfNum, priceRu } from '../../helpers/helpers';
import { Divider } from '../Divider/Divider';
import Image from 'next/image';

import styles from './Product.module.css';
import cn from 'classnames';
import { Review } from '../Review/Review';


export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {

  const [isReviewOpened, setInReviewOpened] = useState(false);
  return (
    <>
      <Card color={'white'} className={styles.product}>
        <div className={styles.logo}>
          <Image
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
            alt={product.title}
            width={70}
            height={70}
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
        <div className={styles.reviewTitle}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</div>

        <Divider className={styles.hr} />
        <div className={styles.description}>{product.description}</div>
        <div className={styles.feature}>
          {product.characteristics.map((character => (
            <div className={styles.characteristics} key={character.name}>
              <span className={styles.characteristicName}>{character.name}</span>
              <span className={styles.characteristicDots}></span>
              <span className={styles.characteristicValue}>{character.value}</span>
            </div>
          )))}
        </div>
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
        <Divider className={cn(styles.hr, styles.hr2)} />
        <div className={styles.actions}>
          <Button appearance='primary'>Узнать подробнее</Button>
          <Button
            className={styles.reviewBtn}
            appearance='ghost'
            arrow={isReviewOpened ? 'down' : 'right'}
            onClick={() => setInReviewOpened(() => !isReviewOpened)}
          >
            Узнать подробнее
          </Button>
        </div>
      </Card>
      <Card color='blue' className={cn(styles.reviews, {
        [styles.opened]: isReviewOpened,
        [styles.closed]: !isReviewOpened
      })}>
        {product.reviews.map(review => (
          <Review key={review._id} review={review}/>
        ))}
      </Card>
    </>
  );
};
