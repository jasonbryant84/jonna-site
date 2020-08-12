import {Fragment} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CustomHead from '../components/CustomHead'
import ProductSlider from '../components/ProductSlider'
import ListItems from '../components/ListItems'

export default function App() {
  return (
    <Fragment>
      <CustomHead />

      <div className="App">
        <ProductSlider/>
        <ListItems/>
      </div>
    </Fragment>
  );
}