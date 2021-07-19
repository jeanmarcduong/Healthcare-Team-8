import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Navigation from './components/Navigation';
import Information from './components/Information';
import Example from './components/Example';
import FileCabinet from './components/FileCabinet';
var crypto = require('crypto');

//password to this was called mypassword
const encrypt = () => {
  var mykey = crypto.createCipher('aes-128-cbc', 'O7oGkXbdHpWeUwSB');
  console.log('This is the key: ' + mykey);
  var mystr = mykey.update('Hello World', 'utf8', 'hex');
  console.log('This is the string: ' + mystr);
  mystr += mykey.final('hex');
  console.log(mystr); //34feb914c099df25794bf9ccb85bea72
  //this application is called medichain
};
encrypt();

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/information" exact component={() => <Information />} />
          <Route path="/example" exact component={() => <Example />} />
          <Route path="/files" exact component={() => <FileCabinet />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
