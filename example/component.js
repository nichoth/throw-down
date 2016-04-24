var yo = require('yo-yo')

module.exports = function Component(_yield) {
    var id = "id" + parseInt(Math.random()*1000000)
    var open = true

    function onload () {
      console.log(id + "loaded!")
    }

    function onupdate () {
      console.log(id + "mutated")
    }

    function onunload () {
      console.log(id + "unloaded!")
    }

    function toggle () {
      open = !open;
      yo.update(document.querySelector("#"+id), render(_yield))
    }

    function render (_yield) {
      var content = open ?
        yo`<div> It's Open </div>` :
        yo`<div> It's Closed </div>`

      return yo`
        <div id=${id}>
          ${id}
          <button onclick=${toggle}>Toggle</button>
          <span>
            ${content}
          </span>
          <hr />
          ${_yield}
        </div>
      `
    }

    return render(_yield)
}

