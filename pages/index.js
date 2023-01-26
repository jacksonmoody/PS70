import Home from '../components/home'
import Projects from '../components/projects'
import Head from 'next/head'

export default function Main() {
  return (
    <>
      <Head>
        <title>PS70 Portfolio: Home</title>
      </Head>
      <div className="main">
        <Home />
        <Projects />
      </div>
    </>

  )
}