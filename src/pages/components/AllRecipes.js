import React from "react"
import TagList from "./TagList"
import Recipes from "./Recipes"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        cookTime
        id
        title
        preTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

const AllRecipes = () => {
  const data = useStaticQuery(query)
  //   console.log("data>>>>>", data)
  const recipes = data.allContentfulRecipe.nodes
  console.log("recipes>>>>", recipes)
  return (
    <section className="recipes-container">
      <TagList recipes={recipes} />
      <Recipes recipes={recipes} />
    </section>
  )
}

export default AllRecipes
