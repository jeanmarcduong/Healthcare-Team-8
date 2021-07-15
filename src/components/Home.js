var crypto = require('crypto');

var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
console.log('This is the key: ' + mykey);
var mystr = mykey.update('abc', 'utf8', 'hex');
console.log('This is the string: ' + mystr);
mystr += mykey.final('hex');

console.log(mystr); //34feb914c099df25794bf9ccb85bea72

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the web application</h1>
    </div>
  );
};

export default Home;
