import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useAmp } from 'next/amp'
import Link from 'next/link'

export default function Home() {
  let isAmp = useAmp()
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/no_amp">
        <a>No AMP</a>
      </Link>
      <main>
        <Header title="Welcome to my Amp!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <div style={{
          minHeight: 600,
          minWidth: '100vw',
          background: 'lightskyblue',
        }} />
        <amp-iframe
          width="200"
          height="100"
          sandbox="allow-scripts allow-same-origin"
          layout="responsive"
          frameborder="0"
          src="https://kube.vf-dev2.click/eng2/amp-widget-v3.html?container=hola&isAmpPage=true"
        >
        </amp-iframe>
      </main>

      <Footer />
    </div>
  )
}

export const config = { amp: true }
