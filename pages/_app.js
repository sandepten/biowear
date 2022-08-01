import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="fixed top-0 z-10 w-full">
        <Navbar />
      </div>
      {/* This is how i have fixed the navbar fixed margin problem by always having a navbar hidden behind the real navbar without being fixed */}
      <div className="w-full">
        <Navbar />
      </div>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
