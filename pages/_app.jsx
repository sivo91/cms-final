import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import Layout from '../components/Layout'
import { ChakraProvider } from "@chakra-ui/react";
import NextNProgress from 'nextjs-progressbar';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
       <>
      
       <ChakraProvider>
          <NextNProgress />
          <Layout>

            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>  
       </>
  )
}

export default MyApp