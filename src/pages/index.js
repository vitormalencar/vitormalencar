import React from "react"
import App from "../components/App"
import { SEO } from "../components/SEO/Seo"
import "../style/style.css"

const Index = () => {
  return (
    <>
      <SEO title="home" />
      <App />
    </>
  )
}

export default Index
