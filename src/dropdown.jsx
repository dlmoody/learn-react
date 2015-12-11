
//

var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');


module.exports = React.createClass({

  handleClick: function() {
    this.setState({open: !this.state.open });

  },
  getInitialState: function() {
    return { open: false}
  },
  handleItemClick: function(item) {
    console.log(item + ' was clicked')
    this.setState({
      open: false,
      itemTitle: item
    });

  },
  render: function() {

    var list = this.props.items.map(function(itemVal) {
      return <ListItem
        item={itemVal}
        whenClicked={this.handleItemClick}
        className={(this.state.itemTitle === itemVal) ? "active" : "" }
      />
    }.bind(this));

    return <div className="dropdown">
      <Button onClick={this.handleClick} className="btn-default" title={this.state.itemTitle || this.props.title}  subTitleClassName="caret" />

      <ul className={"dropdown-menu " + (this.state.open ? "show" : "")} >
        {list}
      </ul>
      </div>
  }
});



