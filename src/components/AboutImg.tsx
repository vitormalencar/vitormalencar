import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const AboutImg = () => (
  <StaticQuery
    query={graphql`{
  images: allFile {
    edges {
      node {
        relativePath
        name
        childImageSharp {
          gatsbyImageData(width: 160, height: 160, placeholder: TRACED_SVG, layout: FIXED)
        }
      }
    }
  }
}
`}
    render={(data) => {
      const image = data.images.edges.find((n) =>
        n.node.relativePath.includes("instagram-profile")
      )
      if (!image) return null
      const imageFixed = image.node.childImageSharp.gatsbyImageData
      return (
        <GatsbyImage
          image={imageFixed}
          alt={"Vitor Alencar headshot"}
          className="w-180 h-180  rounded-full g-image g-image--lazy g-image--loaded" />
      );
    }}
  />
)

export default AboutImg
