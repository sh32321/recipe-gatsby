import React from "react"
import Layout from "./components/Layout"
import Gallery from "../examples/Gallery"
import AllRecipes from "./components/AllRecipes"
import styled from "styled-components"
import SEO from "./components/SEO"

const recipes = ({ recipes }) => {
  return (
    <Layout>
      <SEO title="RECIPES" />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default recipes
