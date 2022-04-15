import type { GetStaticProps } from 'next';
import { WithLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';

const Search = (): JSX.Element => {
    return (
        <div>
            Search
        </div>
    );
};

export default WithLayout(Search);


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    //initial category
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
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