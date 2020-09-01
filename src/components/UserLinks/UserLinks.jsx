import React from 'react'
import './UserLinks.css'

const UserLinks = (props) => {
  const {
    config: { userLinks },
    labeled,
  } = props

  if (!userLinks) {
    return null
  }

  return (
    <div className='user-links'>
      {userLinks.map((link) => (
        <a href={link.url}>
          <button type='button' key={link.label}>
            {labeled ? link.label : ''}
          </button>
        </a>
      ))}
    </div>
  )
}

export default UserLinks
