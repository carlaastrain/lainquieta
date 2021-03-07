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
          <h3> Living well begins with eating well. Thats why we ban hydrogenated fats, high-fructose corn syrup, artificial sweeteners and more than 100 flavours, colours and preservatives commonly found in food. If you want to know what goes into the products you buy, our standards make it easy, because if it doesnt meet the standards, we wont sell it. </h3>
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
