import React from "react"
import Helmet from "react-helmet"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

export function SEO({
  lang,
  meta,
  image,
  title,
  keywords,
  pathname,
  description,
}: {
  lang?: string
  meta?: any[]
  image: {
    src: string
    height: number
    width: number
  }
  title: string
  keywords: string[]
  pathname?: string
  description?: string
}) {
  const defaults = useSiteMetadata()
  const metaDescription = description || defaults.description
  const metaImage =
    image && image.src ? `${defaults.siteUrl}${image.src}` : null
  const metaUrl = `${defaults.siteUrl}${pathname}`

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${defaults.title}`}
      meta={[
        { property: `og:url`, content: metaUrl },
        { property: `og:title`, content: title },
        { property: `og:type`, content: `website` },
        { property: `og:description`, content: metaDescription },

        { name: `twitter:title`, content: title },
        { name: `description`, content: metaDescription },
        { name: `twitter:description`, content: metaDescription },
        { name: `twitter:creator`, content: `@${defaults.social.twitter}` },
      ]
        .concat(
          metaImage
            ? [
                { property: `og:image`, content: metaImage },
                { property: `og:image:alt`, content: title },
                { property: "og:image:width", content: image.width },
                { property: "og:image:height", content: image.height },
                { name: `twitter:card`, content: `summary_large_image` },
              ]
            : [{ name: `twitter:card`, content: `summary` }]
        )
        .concat(
          keywords.length > 0
            ? { name: `keywords`, content: keywords.join(`, `) }
            : []
        )
        .concat(meta || [])}
    />
  )
}

export default SEO