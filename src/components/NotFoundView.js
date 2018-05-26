import React from 'react'
import Heading from './Heading.js'

const NotFoundView = () => {
  return (
    <div className="row h-100 d-flex justify-content-center align-items-center">
      <div className="col-md-4">
        <div className="error-template">
          <Heading>Oops!</Heading>
          <h2>404 Not Found</h2>
          <div className="error-details">
            Sorry, an error has occured, Requested page not found!
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundView
