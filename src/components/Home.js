import React from 'react';
import HomeCSS from './Home.module.css';
// import chain from '/Digital-Chain.jpg';
const Home = () => {
  return (
    <React.Fragment>
      <br />
      <div className="home">
        <div className="container">
          <div className="row align-items-center my-5">
            <div className="col-lg-7">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src={'./Digital-Chain.jpg'}
                alt=""
              />
            </div>
            <div className="col-lg-5">
              <h1 className="font-weight-light">Home</h1>
              <p className={HomeCSS.welcome}>
                Welcome to the MediChain App, User.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
