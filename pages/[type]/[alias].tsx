import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useState } from 'react';
import { WithLayout } from '../../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory, TopPageModel } from '../../interfaces/topPage.interface';
import { ParsedUrlQuery } from 'querystring';
import { ProductModel } from '../../interfaces/product.interface';
import { firstLevelMenu } from '../../helpers/helpers';


//initial category
// const firstCategory = 0;

const Course = ({ menu, page, products }: CourseProps): JSX.Element => {

    return (
        < >
            {products && products.length}
        </>
    );
};

export default WithLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];
    for (const m of firstLevelMenu) {
        const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
            firstCategory: m.id
        });
        paths = paths.concat(menu.flatMap(s => s.pages.map(page => `/${m.route}/${page.alias}`)));
    }
    // console.log(paths);

    return {
        paths,
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {

    if (!params) return { notFound: true };

    const firstCategoryItem = firstLevelMenu.find(menu => menu.route === params.type);
    if (!firstCategoryItem) return { notFound: true };

    try {
        const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
            firstCategory: firstCategoryItem.id
        });

        if (menu.length === 0) return { notFound: true };
        // after that receive page
        const { data: page } = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
        const { data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
            category: page.category,
            limit: 10
        });

        return {
            props: {
                menu,
                firstCategory: firstCategoryItem.id,
                page,
                products
            }
        };
    } catch {
        return {
            notFound: true
        };
    }
};

interface CourseProps extends Record<string, unknown> {
    menu: MenuItem[],
    firstCategory: TopLevelCategory,
    page: TopPageModel,
    products: ProductModel[]
}