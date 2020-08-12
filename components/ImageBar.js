import React from 'react';
import {Fragment} from 'react'
import CopyContext from './ContentContext';
import styled  from 'styled-components'

export default function ImageBar(props) {
    const style = {
        background: `url(./assets/img/${props.filename}.jpg) center 20% / cover no-repeat scroll`
    }

    return (
        <CopyContext.Consumer>
            {context => (
                <Bar style={style}/>
            )}
        </CopyContext.Consumer>
    );
}

const Bar = styled.section`
	width: 100% !important;
	max-width: none !important;
	height: 65vh;
	margin-bottom: 7vh;
    background-color: papayawhip;
    background-size: cover !important;
`