import React from 'react';
import './Header.css';


export default function HomePage () {
  return (
    <header className='pageHeader'>
      <div className='container'>

        <div className='top-wrapper'>
              
        </div>
        <div className="main-wrapper">
          <h1>Free-plastic market!</h1>
          <h4> A progressive online supermarket, efficient, reliable and different. </h4>
          <div className="buttons-wrapper">
            <a href="https://docs.nestjs.com" className="btn btn-primary d-inline-block">Sign on</a>
            <a  className="btn btn-secondary d-inline-block">

              <span>Shop now</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
