import React from 'react';
import ContentContext from './ContentContext';
import products from '../content/products.json';

export default function ContextProvider(props) {
    // fetch

    return (
        <ContentContext.Provider value={products}>
            {props.children}
        </ContentContext.Provider>
    );
}