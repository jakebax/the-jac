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
        <a href={link.url} key={link.label}>
          <button type='button'>{labeled ? link.label : ''}</button>
        </a>
      ))}
    </div>
  )
}

export default UserLinks
