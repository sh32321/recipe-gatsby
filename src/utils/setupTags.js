import React from "react"

const setupTags = recipes => {
  const allTags = {}
  recipes.forEach(recipe => {
    recipe?.content?.tags?.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
  })
  const newTagList = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b
    // console.log(firstTag.localeCompare(secondTag))
    return firstTag.localeCompare(secondTag)
  })

  return newTagList
}

export default setupTags
