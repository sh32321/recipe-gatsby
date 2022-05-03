import React from "react"
import { graphql } from "gatsby"
import Recipes from "../pages/components/Recipes"
import Layout from "../pages/components/Layout"
import SEO from "../pages/components/SEO"

const TagTemplate = ({ data, pageContext }) => {
  console.log("pageContext>>", pageContext)
  const recipes = data.allContentfulRecipe.nodes

  return (
    <Layout>
      <SEO title={pageContext.tag} />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <Recipes recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(
      sort: { order: ASC, fields: title }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        cookTime
        preTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default TagTemplate
