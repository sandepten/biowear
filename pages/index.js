import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <div className='relative'>
      <Head>
        <title>Biowear</title>
      </Head>
      {/* <Navbar/> */}
      <div className='relative h-[95vh] w-screen -z-10 hidden lg:block'>
        <Image src={'/landscape-banner.jpg'} layout="fill" objectFit="cover" alt="Pic of clothes"/>
      </div>
      <div className='relative h-[95vh] w-screen -z-10 lg:hidden'>
        <Image src={'/mobile-banner1.jpg'} layout="fill" objectFit="cover" alt="Pic of clothes"/>
      </div>
      <div className='absolute bottom-10 lg:top-40 lg:left-32'>
        <Banner/>
      </div>
    </div>
  )
}
