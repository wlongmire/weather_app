const React = require('react');
const ReactDOM = require('react-dom');

const Nav = require('Nav');

const Main = React.createClass({
  render:function() {
    return(
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
