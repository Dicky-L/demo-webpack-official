<<<<<<< HEAD
<<<<<<< HEAD
import _ from 'lodash'
import printMe from './print.js'
import './style.css'

// function component() {
//   let element = document.createElement('div')
//   let btn = document.createElement('button')

//   element.innerHTML = _.join(['Hello', 'webpack'], ' ')

//   btn.innerHTML = '点击这里，然后查看 console！'
//   btn.onclick = printMe

//   element.appendChild(btn)
//   return element
// }

// document.body.appendChild(component())

<<<<<<< HEAD
let element = component()
document.body.appendChild(element)

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!')
    document.body.removeChild(element)
    element = component()
    document.body.appendChild(element)
  })
}
=======
import { cube } from './math.js'

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
}

function component() {
  let element = document.createElement('pre')

  element.innerHTML = ['Hello webpack!', '5 cubed is equal to ' + cube(5)].join('\n\n')

=======
require('exports-loader?file,parse=helpers.parse!./globals.js')
// 使用exports-loader不能使用import语法
// import {file} from "./globals.js"

function component() {
  let element = document.createElement('div')

  element.innerHTML = join(['Hello', 'webpack'], ' ')

>>>>>>> shimming
  return element
}

document.body.appendChild(component())
<<<<<<< HEAD
>>>>>>> tree-shaking
=======

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    console.log("We retrieved some data! AND we're confident it will work on a variety of browser distributions.")
    console.log(json)
  })
  .catch(error => console.error('Something went wrong when fetching this data: ', error))
>>>>>>> shimming
=======
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration)
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}
>>>>>>> progressive-web-application
