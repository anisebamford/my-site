import '../styles/globals.css'
import {LocalContextProvider} from "../context/LocalContextProvider"
import {StylesWrapper} from "../components/StylesWrapper"

function Application({ Component, pageProps }) {
  return <LocalContextProvider>
    <StylesWrapper>
      <Component {...pageProps} />
    </StylesWrapper>
  </LocalContextProvider>
}

export default Application
