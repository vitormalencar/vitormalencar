import React from "react"
import { Helmet } from "react-helmet"
import App from "../components/App"
import "../style/style.css"

const Index = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Vitor Alencar"}</title>
        <html lang={"en"} />
        <meta name="description" content={"Vitor Alencar"} />
      </Helmet>
      <App />
    </>
  )
}

export default Index
