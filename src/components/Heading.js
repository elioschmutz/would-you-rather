import React from 'react'

const Heading = (props) => {
  return (
    <div className="row my-3">
      <div className="col">
        <h1>{props.children}</h1>
      </div>
    </div>
  )
}

export default Heading
