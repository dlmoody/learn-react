var React = require('react');


var Badge = React.createClass({
  render: function() {
    return <button className={"btn " + this.props.className} type="button">
      {this.props.title}
      <span className={this.props.subTitleClassName} >{this.props.subTitle}</span>
    </button>
  }
});

module.exports = Badge;