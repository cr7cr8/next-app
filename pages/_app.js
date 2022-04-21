import '../styles/globals.css'
import React, { useContext } from "react"
import { context, ContextProvider } from "../ContextProvider"

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <h2>aaa</h2>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

export default MyApp
