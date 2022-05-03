import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    {
      allFile {
        totalCount
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              layout: FIXED
              placeholder: TRACED_SVG
              transformOptions: { grayscale: false }
              width: 200
              height: 200
            )
          }
        }
      }
    }
  `)
  const nodes = data.allFile.nodes
  console.log(nodes)

  return (
    <Wrapper>
      {nodes.map((item, index) => {
        const pathToImg = getImage(item)
        return (
          <article key={index} className="item">
            <p>{item.name}</p>
            <GatsbyImage
              image={pathToImg}
              alt={item.name}
              className="gallery-img"
            />
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  /* gap: 20px; */
  .item {
    margin: 20px;
  }
  p {
    font-size: 14px;
    color: darkgray;
    font-family: "Courier New", Courier, monospace;
    font-style: italic;
    margin: auto;
  }

  .gallery-img {
    border-radius: 20px;
  }
`

export default Gallery
