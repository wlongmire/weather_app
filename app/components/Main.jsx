const React = require('react');
const ReactDOM = require('react-dom');

const Nav = require('Nav');

const Main = React.createClass({
  render:function() {
    return(
      <div>
        <Nav />

        <div className="row">

          <div className="medium-6 large-4 small-centered columns">
              {this.props.children}
          </div>

        </div>

      </div>
    );
  }
});

module.exports = Main;
