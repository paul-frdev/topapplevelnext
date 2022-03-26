import type { NextPage } from 'next';
import { Button, Htag, Ptag, Rating, Tag } from '../components';

const Home: NextPage = (): JSX.Element => {
  return (
    <div >
      <Htag tag='h1'>Привет</Htag>
      <Htag tag='h2'>Привет</Htag>
      <Htag tag='h3'>Привет</Htag>

      <Button appearance='primary' className='button'>Button</Button>
      <Button appearance='ghost' arrow='right'>Button</Button>
      <Ptag tag='sm'>Ptag</Ptag>
      <Ptag tag='md'>Ptag</Ptag>
      <Ptag tag='xl'>Ptag</Ptag>

     <Tag color='ghost' size='sm'>Tag</Tag>
     <Tag color='green' size='md'>Tag</Tag>
     <Tag color='grey' size='sm'>Tag</Tag>
     <Tag color='primary' size='md'>Tag</Tag>
     <Tag color='red' size='md' href='/'>Tag</Tag>
     <Rating rating={4}/>
    </div>
  );
};

export default Home;
