import React from 'react';
import ReactDOM from 'react-dom';

const name = React.createElement('h1', null, 'Adam Dixon');
const title = React.createElement('p', null, 'Aspiring Software Developer');
const header = React.createElement('div', null, [name, title]);

const attributeArray = ["Quick Learner", "Hard-working", "Loves Coffee"];
const attributes = attributeArray.map((attribute) => React.createElement('li', null, attribute));
const attributeList = React.createElement('ul',null, attributes);

const link = React.createElement('a', {href: "https://www.youtube.com/"}, 'My Github Page');
const footer = React.createElement('div', null, link);

const container = React.createElement('div', null, [header, attributeList, footer]);

ReactDOM.render(
  container,
  document.getElementById('root')
);






