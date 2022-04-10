import Head from 'next/head'
import Layout from '/components/Layout/Layout'
import Sidebar from '/components/UI/Sidebar'
import Main from '/components/UI/Main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>GMarket - Wallmart Store</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/icons/logo.png' />
        <link
          rel='stylesheet'
          type='text/css'
          charset='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
      </Head>

      <Layout>
        <Sidebar />
        <Main />
      </Layout>
    </div>
  )
}
