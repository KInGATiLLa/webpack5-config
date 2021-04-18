import _ from 'lodash';
import './style.css';
import Img from './img.png';
import Data from './data.xml';
import Notes from './data.csv';

import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

const a = document.createElement('div');

a.innerHTML = _.join(['Hello', 'webpack'], ' ');
a.classList.add('hello');

a.appendChild(document.createElement('br'));

const myIcon = new Image();
myIcon.src = Img;
myIcon.width = 100;

a.appendChild(myIcon);

document.body.appendChild(a);

console.log('hello');
console.log('Data xml >', Data);
console.log('Notes csv >', Notes);
