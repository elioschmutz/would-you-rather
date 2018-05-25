import './UserName.css'
import React from 'react'


const UserName = () => {
  return (
    <div className="user-name">
      <div style={{ backgroundImage: 'url("./fallback-user.png")' }} className="user-image" />
      <span>James Bond</span>
    </div>
  )
}

export default UserName
