import React from 'react';
import { TopPageComponentProps } from './TopPageComponent.props';

export const TopPageComponent = ({ firstCategory, page, products }: TopPageComponentProps): JSX.Element => {
    return (
        <div>
            {products && products.length}
        </div>
    );
};
