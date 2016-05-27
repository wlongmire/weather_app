const { Link } = require('react-router')
const React = require('react');
const ReactDOM = require('react-dom');

const About = React.createClass({
  render:function() {
    return(
      <div>
        <h1 className="page-title text-center">About Us</h1>
        <div className="center">
          <p>An example app allow us to get realtime from any city. Made with <Link to="http://openweathermap.org/">openWeatherMap.org</Link>. Code hosted on <Link to="https://github.com/wlongmire/weather_app">github</Link>.</p>
        </div>
      </div>
    );
  }
});

module.exports = About;
