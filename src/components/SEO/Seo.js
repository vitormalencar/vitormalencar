import React from "react"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from "./useSiteMetadata"

export const SEO = ({ post }) => {
  const defaults = useSiteMetadata()
  console.log(title)
  if (defaults.baseUrl === "" && typeof window !== "undefined") {
    defaults.baseUrl = window.location.origin
  }

  if (defaults.baseUrl === "") {
    console.error("Please set a baseUrl in your site metadata!")
    return null
  }

  const title = post ? post.title : defaults.title
  const description = post ? post.description : defaults.description
  const url = new URL(post ? post.path : "", defaults.baseUrl)
  const image = post && post.image ? new URL(post.image, defaults.baseUrl) : false

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta name="keywords" content={defaults.keywords} />
      {image && <meta name="image" content={image} />}

      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="vitormalencar" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  )
}
