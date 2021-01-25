import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useAmp } from 'next/amp'

export default function Home() {
  let isAmp = useAmp()
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="article" />
        <meta property="og:description" content="Your Guide to AMP" />
        <meta property="og:image" content="https://www.fillmurray.com/200/300" />
        <meta property="og:image:alt" content="Bill Murray" />
        <meta property="vf:section" content="bill" />

        <meta property="vf:owner" content="viafoura-uuid:00000000-0000-4000-8000-00000003655b" />
        <meta property="vf:owner" content="viafoura-id:1097600000000" />
        <meta property="vf:owner" content="viafoura-id:222555" />
        <meta property="vf:owner" content="loginradius:222555" />
        <meta property="vf:owner" content="cookie:12345" />
        <script type="text/javascript" async src="//cdn-kube.vf-dev3.net/vf-v2.js" />
      </Head>

      <main>
        <div className='viafoura'>
            <vf-tray-trigger floating='true' />
        </div>
        <div className='viafoura'>
            <vf-conversations />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export const config = { amp: false }
