import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '../Redux/store'

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
