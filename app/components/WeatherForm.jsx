const React = require('react');

const WeatherForm = React.createClass({
  onFormSubmit:function(e) {
      e.preventDefault();
      const location = this.refs.location.value;

      if (location.length > 0) {
          this.refs.location.value = '';
          this.props.onSearch(location);
      }
  },

  render:function(){
    return(
      <div>
        <h1 className="text-center">Get Weather</h1>
        <form onSubmit={ this.onFormSubmit }>
          <div><input type="text" ref="location"></input></div>
          <div><button className="expanded button hollow">Get Weather</button></div>
        </form>
      </div>);
  }
});

module.exports = WeatherForm;
