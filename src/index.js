import React from 'react';
import ReactDOM from 'react-dom';

const name = React.createElement('h1', null, 'Adam Dixon');
const title = React.createElement('p', null, 'Aspiring Software Developer');
const header = React.createElement('div', {id: "header"}, [name, title]);

const attributeArray = ["Quick Learner", "Hard-working", "Loves Coffee"];
const attributes = attributeArray.map((attribute) => React.createElement('li', null, attribute));
const attributeList = React.createElement('ul',null, attributes);

const link = React.createElement('a', {href: "https://github.com/Adam3192"}, 'My Github Page');
const footer = React.createElement('div', {id: "footer"}, link);

const container = React.createElement('div', null, [header, attributeList, footer]);

ReactDOM.render(
  container,
  document.getElementById('root')
);






