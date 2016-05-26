const React = require('react');

const WeatherMessage = (props) => {
  return(
    <div>
      <h3>{this.props.location } is { this.props.temp } degrees.</h3>
    </div>
  );
};

module.exports = WeatherMessage;
