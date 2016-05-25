const React = require('react');

const WeatherForm = React.createClass({
  render:function(){
    return(
      <div>
        <h1>Get Weather</h1>
        <div><input type="text"></input></div>
        <div><button>Get Weather</button></div>
      </div>);
  }
});

module.exports = WeatherForm;
