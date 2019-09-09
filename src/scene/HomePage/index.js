import React from 'react'

import { Link } from 'react-router-dom';

import './homepage.css';

export default function HomePage() {
  return (
    <div className='home-container'>
      Home Page !
      <p className='link-to-page'>
        <Link to='landing-page'>
          landing page
        </Link>
      </p>
    </div>
  )
}
