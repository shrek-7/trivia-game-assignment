import React from 'react';
import './loader.css';

const Loader = (props) => {
  return (
    <section className='loading-container flex flex-center flex-align-center'>
      <div className='lds-ellipsis'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Loader;