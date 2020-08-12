import React from 'react';
import {Fragment} from 'react'
import CopyContext from './ContentContext';
import styled  from 'styled-components'

export default function ProductSection(props) {
    return (
        <CopyContext.Consumer>
            {context => (
                <Section>
                    {props.children}
                </Section>
            )}
        </CopyContext.Consumer>
    );
}

const Section = styled.section`
    
`