import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="fixed top-0 z-10 w-full">
        <Navbar />
      </div>
      <div className="w-full">
        <Navbar />
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
