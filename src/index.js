require('exports-loader?file,parse=helpers.parse!./globals.js');
// 使用exports-loader不能使用import语法
// import {file} from "./globals.js"

function component() {
  let element = document.createElement('div')

  element.innerHTML = join(['Hello', 'webpack'], ' ')
  
  // 假设我们处于 `window` 上下文
  this.alert("Hmmm, this probably isn't a great idea...")
  
  return element
}

document.body.appendChild(component())
