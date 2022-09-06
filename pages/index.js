import { onAuthStateChanged } from "firebase/auth";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loginState, userNameState } from "../atoms/signAtoms";
import Banner from "../components/Banner";
import Emailnews from "../components/Emailnews";
import Footer from "../components/Footer";
import { auth } from "../firebase";

export default function Home() {
  const [login, setLogin] = useRecoilState(loginState);
  const [userName, setUserName] = useRecoilState(userNameState);

  //? This function is for checking if the user is logged in
  const monitorAuthState = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user is Logged in");
        setLogin(true);
        setUserName(user.displayName.split(" ")[0]);
      } else {
        console.log("user is not Logged in");
        setLogin(false);
      }
    });
  };
  useEffect(() => {
    monitorAuthState();
  }, []);

  return (
    <div>
      <div className="relative">
        <Head>
          <title>Biowear</title>
        </Head>
        {/* <Navbar/> */}
        <div className="relative -z-10 hidden h-[95vh] lg:block ">
          <Image
            priority
            src={"/landscape-banner.jpg"}
            layout="fill"
            objectFit="cover"
            alt="Pic of clothes"
          />
        </div>
        <div className="relative -z-10 h-[95vh] lg:hidden">
          <Image
            priority
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
