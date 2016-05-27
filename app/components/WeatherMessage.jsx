const React = require('react');

const WeatherMessage = (props) => {
  return(
    <div>
      <h4 className="text-center">{props.location } is { props.temp } degrees.</h4>
    </div>
  );
};

module.exports = WeatherMessage;
