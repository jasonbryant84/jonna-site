import '../assets/css/global.scss'
import '../assets/css/swiper.scss'
import ContextProvider from '../components/ContextProvider'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Nav/>
      <Component {...pageProps} />
      <Footer/>
    </ContextProvider>
  )
}

export default MyApp
