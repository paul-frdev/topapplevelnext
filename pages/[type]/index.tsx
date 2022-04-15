import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { WithLayout } from '../../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../../interfaces/menu.interface';
import { firstLevelMenu } from '../../helpers/helpers';
import { ParsedUrlQuery } from 'querystring';
import { API } from '../../helpers/api';

const Type = ({ firstCategory }: TypeProps): JSX.Element => {
    return (
        <div>
            Type: {firstCategory}
        </div>
    );
};

export default WithLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: firstLevelMenu.map(m => '/' + m.route),
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    //initial category
    // const firstCategory = 0;
    if (!params) return { notFound: true };

    const firstCategoryItem = firstLevelMenu.find(menu => menu.route === params.type);
    if (!firstCategoryItem) return { notFound: true };

    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
        firstCategory: firstCategoryItem.id
    });
    return {
        props: {
            menu,
            firstCategory: firstCategoryItem.id
        }
    };
};

interface TypeProps extends Record<string, unknown> {
    menu: MenuItem[],
    firstCategory: number
}