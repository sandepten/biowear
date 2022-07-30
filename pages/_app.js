import Navbar from '../components/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div>
    <Navbar/>
    <Component {...pageProps} />
  </div>
}

export default MyApp
