import React, {useState, useEffect, useContext} from 'react';
import {Fragment} from 'react'
import CopyContext from './ContentContext';
import Slide from './Slide';
import styled  from 'styled-components'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
// import '../assets/css/swiper.scss'

// https://swiperjs.com/react/


export default function ProductSlider(props) {
    const copy = useContext(CopyContext)
    const [products, updateProducts] = useState(copy.oils.concat(copy.soaps, copy.lotions))
    const [curItem, updateCurrentProduct] = useState(products[0])

    function handleChange(e) {
        const curProd = products[e.activeIndex]
        updateCurrentProduct(curProd)
    }

    useEffect(() => {
        console.log(curItem)
      });


    return (
        <CopyContext.Consumer>
            {context => (
                <CustomWrapper>
                    <Copy>
                        <h3>{curItem.product}</h3>
                        <p>{curItem.description}</p>
                    </Copy>
                    <Slider>
                        <Swiper
                            spaceBetween={0} //50
                            slidesPerView={1} //3
                            onSlideChange={(e) => handleChange(e)}
                            // onSwiper={(swiper) => console.log(swiper)}
                            style={{ height: '100%' }}
                        >
                            {products.map((item, key) => {
                                    return (
                                        <SwiperSlide key={key}>
                                            <Slide className="custom-slide">{item.product}</Slide>
                                        </SwiperSlide>
                                    )
                            })}
                        </Swiper>
                    </Slider>
                </CustomWrapper>
            )}
        </CopyContext.Consumer>
    );
}
const CustomWrapper = styled.div`
    width: 100%;
    height: 60vh;
    margin-top: 69px;
    display: flex;
    flex-direction: row;

    & > section {
        flex-grow: 1;
        width: 50%;
    }
`

const Copy = styled.section`
    width: 50vw;
    margin: 5vh 5vw;
    flex-grow: 1;
`

const Slider = styled.section`
    width: 50vw;
    flex-grow: 1;
`