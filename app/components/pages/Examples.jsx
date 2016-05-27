const { Link } = require('react-router');
const React = require('react');

const Examples = React.createClass({
  render: function() {
    return(
      <div>
          <h1 className="page-title text-center">Examples</h1>
          <p className="text-center">Below are some example cities using our App.</p>
          <ol>
            <li><Link to="/?location=Philadelphia">Philadelphia, PA</Link></li>

            <li><Link to="/?location=Austin">Austin, TX</Link></li>

          </ol>
      </div>
    )
  }
});

module.exports = Examples
