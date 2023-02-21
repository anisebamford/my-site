import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {DarkModeToggle} from "../components/DarkModeToggle"

export default function Home() {
  return (
      <div className="container">
        <DarkModeToggle />
        <Head>
          <title>Next.js Starter!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Header title="Welcome to my app!" />
          <p className="description">
            Get started by editing <code>pages/index.js</code> Blepp
          </p>
        </main>

        <Footer />
      </div>
  )
}
