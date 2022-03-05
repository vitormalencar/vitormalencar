import { useStaticQuery, graphql } from "gatsby"

export const useOgImage = () => {
  const data = useStaticQuery(graphql`{
  file(relativePath: {eq: "og.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 1200, height: 632, layout: FIXED)
    }
  }
}
`)
  return data.file.childImageSharp.gatsbyImageData;
}
