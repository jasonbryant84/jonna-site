import React from 'react';
import {Fragment} from 'react'
import CopyContext from './ContentContext';

export default function ListItems(props) {
    return (
        <CopyContext.Consumer>
            {context => (
                <Fragment>
                    { context.oils.map((item, key) => (
                        <p key={key}>{item}</p>
                    )) }
                </Fragment>
            )}
        </CopyContext.Consumer>
    );
}