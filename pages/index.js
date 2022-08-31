import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Emailnews from "../components/Emailnews";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Head>
          <title>Biowear</title>
        </Head>
        {/* <Navbar/> */}
        <div className="relative -z-10 hidden h-[95vh] lg:block ">
          <Image
            src={"/landscape-banner.jpg"}
            layout="fill"
            objectFit="cover"
            alt="Pic of clothes"
          />
        </div>
        <div className="relative -z-10 h-[95vh] lg:hidden">
          <Image
            src={"/about-page-pic.jpg"}
            layout="fill"
            objectFit="cover"
            alt="Pic of clothes"
          />
        </div>
        <div className="absolute top-10 left-0 right-0 mx-auto text-center font-Catalish text-[9rem] text-gray-50 md:top-14 md:text-[10rem] lg:hidden lg:text-black">
          B
        </div>
        <div className="absolute top-[40%] left-0 right-0 mx-auto md:top-1/2 lg:top-[25%] lg:right-auto lg:left-5 xl:left-20">
          <Banner />
        </div>
      </div>
      {/* <div className="relative left-0 right-0 mx-auto"> */}
      <div>
        <Emailnews />
      </div>
      <Footer />
    </div>
  );
}
