import React from "react"
import Layout from "./components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Recipes from "./components/Recipes"
import SEO from "./components/SEO"

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="ABOUT" description="This is about page" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Lorem</h2>
            <p>Lorem ipsum is placeholder text commonly used in the graphic,</p>
            <p>Lorem ipsum is placeholder text commonly used in the graphic,</p>
            <Link to="/contact" className="btn">
              CONTACT
            </Link>
          </article>
          <StaticImage
            src="../assets/Images/rib.jpg"
            alt="salt"
            className="about-img"
            placeholder="tracedSVG"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this!</h5>
          <Recipes recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        cookTime
        id
        title
        preTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
