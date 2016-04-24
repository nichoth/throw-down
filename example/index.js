var yo = require('yo-yo')
var color = require('randomcolor')
var Component = require('./component')
var Emitter = require('events').EventEmitter
var bus = new Emitter()

var onChange = bus.on.bind(bus, 'change')
setInterval(function() {
  bus.emit('change', {
    number: Math.random(),
    color: color()
  })
}, 1000)

function App (data) {
  data = data || { number: 0, color: 'black' }
  return yo`
    <div id="app">
      <span style="color: ${data.color};">${data.number}</span>
      ${Component('my content')}
    </div>
  `
}

var app = App()

onChange(function update(data) {
  yo.update(app, App(data))
})

document.body.appendChild(app)