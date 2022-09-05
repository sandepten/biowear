import { RecoilRoot } from "recoil";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <div>
        <div className="fixed top-0 z-10 w-full">
          <Navbar />
        </div>
        <div className="w-full">
          <Navbar />
        </div>
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  );
}

export default MyApp;
