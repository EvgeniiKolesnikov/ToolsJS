import Post from './Post'
import webpackLogo from './assets/webpack-logo.png'
import './styles/style.css'

// import json from './assets/json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'


console.log('Hello, world');

function addTitle() {
  const title = document.querySelector('title').textContent
  const body = document.querySelector('body')
  body.insertAdjacentHTML("afterbegin", `<h1>${title}</h1>`)
}
addTitle()

const post = new Post('Webpack Post Title', webpackLogo);
console.log('Post to String', post.toString());

// console.log('JSON:', json);
// console.log('XML:', xml);
// console.log('CSV:', csv);