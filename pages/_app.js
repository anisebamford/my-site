import '../styles/globals.css'
import {LocalContextProvider} from "../context/LocalContextProvider"

function Application({ Component, pageProps }) {
  return <LocalContextProvider>
    <Component {...pageProps} />
  </LocalContextProvider>
}

export default Application
