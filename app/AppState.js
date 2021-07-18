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
    },
    {
      "id": "rvHRv2LlnK",
      "name": "Tester 2",
      "color": "#46b0dd"
    },
    {
      "id": "nTvmBOSo7G",
      "name": "Tester 3",
      "color": "#bb78f2"
    }
  ]

  tasks = [
    {
      "id": "X664MyA1fh",
      "listID": "kZ4o5NDbbE",
      "name": "Testing My Tester Because Testing Is Important So.",
      "checked": false
    },
    {
      "id": "THe4yrMCYW",
      "listID": "kZ4o5NDbbE",
      "name": "Checking that completed tasks are counted",
      "checked": true
    },
    {
      "id": "uOgPSwgHCx",
      "listID": "rvHRv2LlnK",
      "name": "Each List has it's own Task Form",
      "checked": true
    },
    {
      "id": "zGPYzNJw7l",
      "listID": "rvHRv2LlnK",
      "name": "Task Title and Body is between 3-50 Characters",
      "checked": true
    },
    {
      "id": "gyLnRBtbXg",
      "listID": "nTvmBOSo7G",
      "name": "Tasks Marked as complete persist on Reload",
      "checked": true
    },
    {
      "id": "SHXR7Wu7NX",
      "listID": "nTvmBOSo7G",
      "name": "Forms can't be submitted without required fields",
      "checked": true
    },
    {
      "id": "dDYaJDTJGO",
      "listID": "rvHRv2LlnK",
      "name": "Delete me to test it",
      "checked": false
    },
    {
      "id": "qWYMIIv2SE",
      "listID": "nTvmBOSo7G",
      "name": "All Data persists in Local Storage!",
      "checked": true
    },
    {
      "id": "nkqz8w49Sp",
      "listID": "kZ4o5NDbbE",
      "name": "Better popups, toasts, strikethrough",
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
