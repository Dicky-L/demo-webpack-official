require('exports-loader?file,parse=helpers.parse!./globals.js')
// 使用exports-loader不能使用import语法
// import {file} from "./globals.js"

function component() {
  let element = document.createElement('div')

  element.innerHTML = join(['Hello', 'webpack'], ' ')

  return element
}

document.body.appendChild(component())

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    console.log("We retrieved some data! AND we're confident it will work on a variety of browser distributions.")
    console.log(json)
  })
  .catch(error => console.error('Something went wrong when fetching this data: ', error))
