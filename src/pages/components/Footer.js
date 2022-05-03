import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>Recipes</span>. Built with Lily
      </p>
    </footer>
  )
}

export default Footer
