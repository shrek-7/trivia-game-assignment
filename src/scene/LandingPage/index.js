import React, { useEffect } from 'react';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import {store} from '../../store';
import { Link } from 'react-router-dom';

import gif from '../../assets/source.gif';
import './landingpage.css';

export default function LandingPage() {


  useEffect(() => {
    store.dispatch(showLoading());
    setTimeout(() => {
      store.dispatch(hideLoading());
    }, 5000);
  }, [])

  return (
    <div className='landing-page-container'>
      <p className='link-to-page'>
        <Link to='home-page'>
          home page
        </Link>
      </p>
      <img alt='superhero gif' className='landing-img' src={gif} />
    </div>
  )
}
