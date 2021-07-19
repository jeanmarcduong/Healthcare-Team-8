import React from 'react';
import FileCSS from './FileCabinet.module.css';

const FileCabinet = () => {
  return (
    <React.Fragment>
      <div className={FileCSS.container}>
        <h1>Profile</h1>

        <h4 className={FileCSS}>Name</h4>
        <p className={FileCSS.profileInfo}>John Doe</p>

        <h4 className={FileCSS}>Wallet</h4>
        <p className={FileCSS.profileInfo}>$12345</p>

        <h4 className={FileCSS}>Email</h4>
        <p className={FileCSS.profileInfo}>johndoe@email.com</p>
      </div>
    </React.Fragment>
  );
};

export default FileCabinet;
