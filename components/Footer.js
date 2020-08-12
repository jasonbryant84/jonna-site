import React from 'react';
import {Fragment} from 'react'
import CopyContext from './ContentContext';
import styled  from 'styled-components'

export default function Footer(props) {
    const year = new Date().getFullYear()
    
    return (
        <CopyContext.Consumer>
            {context => (
                <Section>
                    The Naked Koala &copy; {year}
                </Section>
            )}
        </CopyContext.Consumer>
    );
}

const Section = styled.section`
    margin: 10vh 0 2vh;
    padding: 0 5vw;
`