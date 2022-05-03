import React from "react"
import { Link } from "gatsby"
import Layout from "./components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "./components/AllRecipes"
import SEO from "./components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="HOME" />
      <main classNameAll="page">
        <header className="hero">
          <StaticImage
            src="../assets/Images/rib.jpg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simple Recipes</h1>
              <h4>Fluffy</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}
