import { useStaticQuery, graphql } from "gatsby"

export const useOgImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "og.jpg" }) {
        childImageSharp {
          fixed(width: 1200, height: 632) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return data.file.childImageSharp.fixed
}
