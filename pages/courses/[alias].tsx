import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useState } from 'react';
import { WithLayout } from '../../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../../interfaces/menu.interface';
import { TopPageModel } from '../../interfaces/topPage.interface';
import { ParsedUrlQuery } from 'querystring';
import { ProductModel } from '../../interfaces/product.interface';


//initial category
const firstCategory = 0;

const Course = ({ menu, page, products }: CourseProps): JSX.Element => {

    return (
        < >
            {products && products.length}
        </>
    );
};

export default WithLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });

    return {
        paths: menu.flatMap(m => m.pages.map(page => '/courses/' + page.alias)),
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {

    if (!params) return { notFound: true };

    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });

    // after that receive page
    const { data: page } = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
    const { data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
        category: page.category,
        limit: 10
    });

    return {
        props: {
            menu,
            firstCategory,
            page,
            products
        }
    };
};

interface CourseProps extends Record<string, unknown> {
    menu: MenuItem[],
    firstCategory: number,
    page: TopPageModel,
    products: ProductModel[]
}