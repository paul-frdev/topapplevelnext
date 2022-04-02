import type { GetStaticProps } from 'next';
import { useState } from 'react';
import { Button, Htag, Input, Ptag, Rating, Tag, TextArea } from '../components';
import { WithLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

const Home = ({ menu }: HomeProps): JSX.Element => {
  const [rating, setRating] = useState(4);
  return (
    < >
      <Rating rating={rating} isEditable={true} setRating={setRating} />
      <Input placeholder='текст'/>
      <TextArea placeholder='Текст отзыва'/>
    </>
  );
};

export default WithLayout(Home);


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  //initial category
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number
}