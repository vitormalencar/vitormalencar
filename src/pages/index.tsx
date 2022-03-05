import React from "react"
import App from "../components/App"
import SEO from "../components/Seo"
import { useOgImage } from "../hooks/useOgImage"

import "../styles/global.css"

const Index = () => {
  const image = useOgImage()
  return (
    <>
      <SEO
        title="Home"
        image={image}
        description="Hi, I'm a software engineer based in Berlin. I'm passionate about building software that improves the lives of people."
        keywords={[
          "vitor",
          "vitormalencar",
          "node",
          "next",
          "react",
          "redux",
          "berlin",
          "apollo",
          "gatsby",
          "graphql",
          "javascript",
          "typescript",
          "redux-saga",
          "react-hooks",
          "redux-thunk",
          "react native",
          "redux-persist",
          "content creator",
          "software engineer",
          "Senior Software Engineer",
        ]}
      />
      <App />
    </>
  )
}

export default Index
