import React from 'react'

function ValidationErrorMessage(props) {
  return (
    <>{props.touched &&<p className=' text-red-800'>{props.message}</p>}</>
  )
}

export default ValidationErrorMessage
