import React from 'react';
import './Body.css';

export default function Body () {
  return (
    <div>

      <div className="highlights-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-4 highlight-block">
              <div className="icon-wrapper">
                <img src="/assets/shopping-cart.svg" />
              </div>
              <h5>Extensible</h5>
              <p> Gives you true flexibility by allowing use of any other libraries thanks to modular
            architecture. </p>
            </div>
            <div className="col-md-4 highlight-block">
              <div className="icon-wrapper">
                <img src="/assets/organic.svg"/>
              </div>
              <h5>Versatile</h5>
              <p> An adaptable ecosystem that is a fully-fledged backbone for all kinds of server-side
            applications. </p>
            </div>
            <div className="col-md-4 highlight-block">
              <div className="icon-wrapper">
                <img src="/assets/handshake.svg"/>
              </div>
              <h5>Progressive</h5>
              <p> Takes advantage of latest JavaScript features, bringing design patterns and mature solutions to
            Node.js world. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="enterprise-wrapper" id="enterprise">
        <div className="container">
          <div className="enterprise-column">
            <h2> The first supermarket designed thinking sustainable </h2>
            <p> Plastic free products, have what you want without moving from your home </p>
            <a href="https://enterprise.nestjs.com" className="btn btn-secondary d-inline-block">See our products</a>
          </div>
        </div>
      </div>
    </div>

  );
}
