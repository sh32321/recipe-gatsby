import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

const recipes = ({ recipes = [] }) => {
  //  { recipes=[] } --> if recipes are not provided, then will give an empty array
  return (
    <div className="recipes-list">
      {recipes.map(recipes => {
        const { id, title, image, preTime, cookTime } = recipes
        const img = getImage(image)
        const slug = slugify(title, { lower: true })
        return (
          <Link to={`/${slug}`} className="recipe" key={id}>
            <GatsbyImage image={img} className="recipe-img" alt={title} />
            <h5>{title}</h5>
            <p>
              Prep: {preTime}min | Cook : {cookTime}min
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default recipes
