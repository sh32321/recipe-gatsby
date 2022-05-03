import React from "react"
import Layout from "./components/Layout"
import { graphql } from "gatsby"
import Recipes from "./components/Recipes"
import SEO from "./components/SEO"

const contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>CONTACT ME</h3>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print,
            </p>
            <p>
              and publishing industries for previewing layouts and visual
              mockups.!!
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xoqrprdw"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">
                  YOUR NAME
                  <input type="text" name="name" id="name" />
                </label>
              </div>
              <div className="form-row">
                <label htmlFor="email">
                  YOUR EMAIL
                  <input type="text" email="email" id="email" />
                </label>
              </div>
              <div className="form-row">
                <label htmlFor="message">
                  MESSAGE
                  <textarea type="text" name="message" id="message"></textarea>
                </label>
              </div>
              <button type="submit" className="btn block">
                SUBMIT
              </button>
            </form>
          </article>
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
      filter: { featured: { eq: false } }
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

export default contact
