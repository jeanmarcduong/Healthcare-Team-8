import React from 'react';
import ExampleCSS from './Example.module.css';
//The idea for this page is when you type in the text box, it's being outputted at the same type that you're type
const Example = () => {
  return (
    <React.Fragment>
      <div className={ExampleCSS.container}>
        <div>
          <form>
            <h3>Input</h3>
            <label htmlFor="input"></label>
            <input
              type="text"
              id="input"
              name="firstname"
              value="Hello World"
              readOnly
            />

            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              name="lastname"
              value="O7oGkXbdHpWeUwSB"
              readOnly
            />
          </form>
        </div>

        <div>
          <h3>Output</h3>
          <p>e4b0fae74d3433f1328a780588dc3ac3</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Example;
