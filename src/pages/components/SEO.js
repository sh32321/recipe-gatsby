import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

const query = graphql`
  {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const metaDesc = description || site.siteMetadata.description
  return (
    <Helmet
      title={`${title}  |  ${site.siteMetadata.title}`}
      meta={[{ name: `description`, content: metaDesc }]}
      htmlAttributes={{ lang: "en" }}
    ></Helmet>
  )
}

export default SEO
