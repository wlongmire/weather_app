const React = require('react');

const WeatherMessage = (props) => {
  return(
    <div>
      <h3 className="text-center">{props.location } is { props.temp } degrees.</h3>
    </div>
  );
};

module.exports = WeatherMessage;
