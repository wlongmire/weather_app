const React = require('react');

const WeatherMessage = React.createClass({
  render:function(){
    return(<div>
      <h3>The temp in the place is this.</h3>
    </div>);
  }
});

module.exports = WeatherMessage;
