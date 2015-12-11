
var React = require('react');
var ReactDOM = require('react-dom');
var Dropdown = require('./dropdown');


var options = {
  title: 'Choose a Dessert',
  items: [
    'Apple Pie',
    'Peach Cobbler',
    'Pie'
  ]
};

var element = React.createElement(Dropdown, options);
ReactDOM.render(element, document.querySelector('.container'));