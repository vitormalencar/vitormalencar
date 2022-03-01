/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: `Vitor Alencar`,
    author: `Vitor Alencar`,
    keywords: `Vitor Alencar,vitormalencar,personal website, blog, developer,tech,pwa,web`,
    description: `Software Engineer • Consultant • Speaker • Traveler`,
    siteUrl: `https://www.vitormalencar.com/`,
    baseUrl: `https://www.vitormalencar.com/`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
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
