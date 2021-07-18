import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []

  lists = [
    {
      "id": "kZ4o5NDbbE",
      "name": "Tester",
      "color": "#1fdba6"
    }
  ]

  tasks = [
    {
      "id": "X664MyA1fh",
      "listID": "kZ4o5NDbbE",
      "name": "Testing My Tester Because Testing Is Important So."
    },
    {
      "id": "THe4yrMCYW",
      "listID": "kZ4o5NDbbE",
      "name": "Checking that completed tasks are counted",
      "checked": true
    }
  ]

  complete = 0
  tasked = 0

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
