import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AboutImg = () => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 160, height: 160) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
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
      const imageFixed = image.node.childImageSharp.fixed
      return (
        <Img
          alt={"Vitor Alencar headshot"}
          fixed={imageFixed}
          className="w-180 h-180  rounded-full g-image g-image--lazy g-image--loaded"
        />
      )
    }}
  />
)

export default AboutImg
