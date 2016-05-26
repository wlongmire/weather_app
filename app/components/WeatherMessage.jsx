const React = require('react');

const WeatherMessage = (props) => {
  return(
    <div>
      <h3>{props.location } is { props.temp } degrees.</h3>
    </div>
  );
};

module.exports = WeatherMessage;
