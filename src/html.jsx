import React from "react"

export default function HTML({
  body,
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  postBodyComponents,
}) {
  return (
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* Primary Meta Tags */}
        <title>Vitor Alencar</title>
        <meta name="title" content="Vitor Alencar" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Vitor Alencar" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="True" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="keywords"
          content="vitor alencar, vitormalencar, roberto vitor"
        />
        <meta
          name="description"
          content="Software Engineer, Front-End • Consultant • Speaker • Traveler"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Vitor Alencar" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Vitor Alencar" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://raw.githubusercontent.com/vitormalencar/vitormalencar/master/assets/artwork.png/"
        />
        <meta property="og:title" content="Vitor Alencar" />
        <meta
          property="og:description"
          content="Software Engineer, Front-End • Consultant • Speaker • Traveler"
        />
        <meta property="og:image" content />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://raw.githubusercontent.com/vitormalencar/vitormalencar/master/assets/artwork.png/"
        />
        <meta property="twitter:title" content="Vitor Alencar" />
        <meta
          property="twitter:description"
          content="Software Engineer, Front-End • Consultant • Speaker • Traveler"
        />
        <meta property="twitter:image" content />

        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://vitormalencar.com" />
        {headComponents}
      </head>
      <body className="bg-night overflow-x-hidden" {...bodyAttributes}>
        {preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  )
}
