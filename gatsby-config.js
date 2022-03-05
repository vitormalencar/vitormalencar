/* eslint-disable no-undef */
/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `Vitor Alencar`,
    author: `Vitor Alencar`,
    siteUrl: `https://www.vitormalencar.com/`,
    baseUrl: `https://www.vitormalencar.com/`,
    description: `Software Engineer • Consultant • Speaker • Traveler`,
    keywords: `Vitor Alencar,vitormalencar,personal website, blog, developer,tech,pwa,web`,
    social: {
      twitter: "vitormalencar",
      instagram: "vitormalencar",
      github: "vitormalencar",
    },
  },
  plugins: [
    `gatsby-plugin-cname`,
    `gatsby-plugin-sharp`,

    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `images`, path: `${__dirname}/src/images/` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `pages`, path: `${__dirname}/src/pages/` },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        purpose: `maskable`,
        name: `Vitor Alencar`,
        display: `standalone`,
        theme_color: `#000000`,
        short_name: `Vitormalencar`,
        background_color: `#000000`,
        icon: "src/images/favicon.png",
      },
    },
  ],
}
