const React = require('react');
const ReactDOM = require('react-dom');

const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const ErrorModal = require('ErrorModal');
const openWeatherMap = require('openWeatherMap')

const Weather = React.createClass({
  getInitialState:function() {
      return({
        isLoading:false
      });
  },

  handleSearch:function(location) {
    const that = this;
    that.setState({
      isLoading:true,
      errorMessage: undefined,
      location:undefined,
      temp:undefined
    });

    openWeatherMap.getTemp(location).then(function(temp) {

      that.setState({
        location:location,
        temp:temp,
        isLoading:false
      });

    }, function (err){
      that.setState({
        isLoading: false,
        errorMessage: err.message
      });
    });

  },

  handleUrlLocation: function(location) {

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }

  },

  componentDidMount: function() {
    const location = this.props.location.query.location;
    this.handleUrlLocation(location);
  },

  componentWillReceiveProps: function (newProps) {
    const location = newProps.location.query.location;
    this.handleUrlLocation(location);
  },

  render:function() {
    const {temp, isLoading, location, errorMessage} = this.state;

    const renderErr = () => {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={ errorMessage }/>
        );
      }
    }

    const renderMsg = () => {
      const msg = (isLoading)?<h3 className="text-center">Fetching weather...</h3>:(temp && location)?<WeatherMessage location={location} temp={temp}/>:"";
      return msg
    }

    return(
      <div>
        <h1 className="page-title text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        { renderMsg() }
        { renderErr() }
      </div>
    );
  }
});

module.exports = Weather;
