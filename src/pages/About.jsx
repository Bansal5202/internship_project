import React from 'react'
import{Link}from 'react-router-dom'
function About(props) {
  return (
    <div>
      <h3>About Page</h3>
      <Link to='/'>Home</Link>
      <div>i am {props.name}</div>
    </div>
  )
}

export default About
