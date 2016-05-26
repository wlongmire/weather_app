const React = require('react');
const ReactDOM = require('react-dom');

const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap')

const Weather = React.createClass({
  getInitialState:function() {
      return({
        isLoading:false
      });
  },

  handleSearch:function(location) {
    const that = this;

    debugger;
    
    that.setState({isLoading:true});

    openWeatherMap.getTemp(location).then(function(temp) {

      that.setState({
        location:location,
        temp:temp,
        isLoading:false
      });

    }, function (err){
      alert( err );
    });

  },

  render:function() {
    const {temp, isLoading, location} = this.state;
    const renderMsg = () => {
      const msg = (isLoading)?<h3>Fetching weather...</h3>:(temp && location)?<WeatherMessage location={location} temp={temp}/>:""
      return msg
    }

    return(
      <div>
        <WeatherForm onSearch={this.handleSearch}/>
        { renderMsg()}
      </div>
    );
  }
});

module.exports = Weather;
