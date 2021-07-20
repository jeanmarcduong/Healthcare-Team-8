import React from 'react';
import FileCSS from './FileCabinet.module.css';

const FileCabinet = () => {
  return (
    <React.Fragment>
      <div className={FileCSS.container}>
        <h1>Medical Information</h1>

        <h4 className={FileCSS}>Name</h4>
        <p className={FileCSS.profileInfo}>John Doe</p>

        <h4 className={FileCSS}>Medication</h4>
        <p className={FileCSS.profileInfo}>None</p>

        <h4 className={FileCSS}>Diagnoses</h4>
        <p className={FileCSS.profileInfo}>None</p>
        <h4 className={FileCSS}>Test Results</h4>
        <p className={FileCSS.profileInfo}>None </p>
        <h4 className={FileCSS}>Allergies</h4>
        <p className={FileCSS.profileInfo}>None</p>
        <h4 className={FileCSS}>Password</h4>
        <p className={FileCSS.profileInfo}>sZKOn1xEZ4T9oDzp </p>
        <button className="submit">Decrypt</button>
      </div>
    </React.Fragment>
  );
};

export default FileCabinet;
