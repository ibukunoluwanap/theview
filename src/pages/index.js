import Head from 'next/head'
import Navbar from '@/components/navigation/navbar/navbar'
import Footer from '@/components/navigation/footer/footer'
import Category from '@/components/category/category'
import Search from '@/components/search/search'
import Hotel from '@/components/hotel/hotel'
import ExploreHotel from '@/components/hotel/ExploreHotel'
import Place from '@/components/place/place'

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <meta name="description" content="The only web3 CELO-based Travel guide." />
        <meta name="keywords" content="blockchain, web3, blockchain technology, travel guide, travel" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" type="image/x-icon" href="/logo.svg" />
        <meta name="author" content="Ibukunoluwa Naphtali (The View)" />
        <title>The View</title>

        <meta property="og:title" content="The View" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:image:width" content="1277" />
        <meta property="og:image:height" content="473" />
        <meta property="og:url" content="https://ibukunoluwanap.github.io/theview" />
        <meta property="og:description" content="The only web3 CELO-based Travel guide." />
        <meta property="og:site_name" content="The View" />

        <meta name="twitter:image:alt" content="The View" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ibukunoluwanap" />
      </Head>

      <Navbar />

      <main>
        <Category />
        <Search />
        <Hotel />
        <ExploreHotel />
        <Place />
      </main>

      <Footer />
    </>
  )
}
