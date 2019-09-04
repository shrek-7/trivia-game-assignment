import React from 'react'

import './header.css';

export default function Header(props) {

  const { name } = props;

  return (
    <div className='header-container flex flex-start flex-align-center'>
      <p>{name}</p>
    </div>
  )
}
