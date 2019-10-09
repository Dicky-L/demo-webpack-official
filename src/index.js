<<<<<<< HEAD
import _ from 'lodash'
import printMe from './print.js'
import './style.css'

function component() {
  let element = document.createElement('div')
  let btn = document.createElement('button')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  btn.innerHTML = '点击这里，然后查看 console！'
  btn.onclick = printMe

  element.appendChild(btn)
  return element
}

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

  return element
}

document.body.appendChild(component())
>>>>>>> tree-shaking
