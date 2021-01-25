import '@styles/globals.css'
import Head from 'next/head'


function Application({ Component, pageProps }) {
  return <>
    <Head>
        <script type="text/javascript" async src="//cdn-kube.vf-dev3.net/vf-v2.js" />   
    </Head>

    <Component {...pageProps} />
  </>
}

export default Application
