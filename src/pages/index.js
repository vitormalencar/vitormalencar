import React from "react"
import App from "../components/App"
import { SEO } from "../components/SEO/Seo"
import { useOgImage } from "../components/SEO/useOgImage"
import "../style/style.css"

const Index = () => {
  const image = useOgImage()
  return (
    <>
      <SEO title="home" image={image} />
      <App />
    </>
  )
}

export default Index
