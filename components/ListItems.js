import React from 'react';
import {Fragment} from 'react'
import CopyContext from './ContentContext'
import ProductSection from './ProductSection'
import styled  from 'styled-components'


export default function ListItems(props) {
    return (
        <CopyContext.Consumer>
            {context => (
                <ProductsSection>
                    <ProductSection>
                        <h3>Oils</h3>
                        { context.oils.map((item, key) => (
                            <p key={key}>{item.product}</p>
                        )) }
                    </ProductSection>

                    <ProductSection>
                        <h3>Soaps</h3>
                        { context.soaps.map((item, key) => (
                            <p key={key}>{item.product}</p>
                        )) }
                    </ProductSection>
                    
                    <ProductSection>
                        <h3>Lotions</h3>
                        { context.lotions.map((item, key) => (
                            <p key={key}>{item.product}</p>
                        )) }
                    </ProductSection>
                </ProductsSection>
            )}
        </CopyContext.Consumer>
    );
}

const ProductsSection = styled.section`
    display: flex;
    flex-direction: row;
    padding: 0 5vw;

    section {
        flex-grow: 1;
    }
`