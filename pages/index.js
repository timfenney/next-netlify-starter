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
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <amp-iframe
          width="200"
          height="100"
          sandbox="allow-scripts allow-same-origin"
          layout="responsive"
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAyAS599A2GGPKTmtNr9CptD61LE4gN6oQ&q=iceland"
        >
        </amp-iframe>
      </main>

      <Footer />
    </div>
  )
}

export const config = { amp: true }
