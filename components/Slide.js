import React from 'react';
import {Fragment} from 'react'
import CopyContext from './ContentContext';
import styled  from 'styled-components'

export default function Slide(props) {
    return (
        <CopyContext.Consumer>
            {context => (
                <CustomSlide>
                    {props.children}
                </CustomSlide>
            )}
        </CopyContext.Consumer>
    );
}

const CustomSlide = styled.section`
    height: 100%;
    background-color: papayawhip;
`