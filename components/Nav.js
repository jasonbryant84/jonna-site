import React from 'react'
import {Fragment} from 'react'
import CopyContext from './ContentContext'
import styled  from 'styled-components'
import Koala from '../assets/svgs/koala'
// import '../assets/css/swiper-vars.scss'

export default function Nav(props) {
    return (
        <CopyContext.Consumer>
            {context => (
                <CustomNav className="App-header">
                    <Container>
                        <Brand>
                            <h1>Naked</h1>
                            <Koala />
                            <h1>Koala</h1>
                        </Brand>
                    </Container>
                </CustomNav>
            )}
        </CopyContext.Consumer>
    );
}

const CustomNav = styled.nav`
    top: 0;
    width: 100%;
    background: white;
    position: fixed;
    z-index: 2;

    h1 {
        display: inline;
    }
` // Full Nav

const Container = styled.div`
    padding: 0 5vw;
    display: flex;
    align-items: center; 
    justify-content: center;
    flex-direction: row;
` // Container with Padding

const Brand = styled.div`
    display: flex;
    flex-direction: flow;
`