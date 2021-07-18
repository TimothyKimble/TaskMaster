import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"
import NotificationService from "../Services/NotificationServices.js";


function _draw() {
  let template = ''
  let lists = ProxyState.lists
  lists.forEach(list => template += list.Template)
  document.getElementById('lists').innerHTML = template
}


export default class ListsController {
  constructor() {
    ProxyState.on('lists', _draw)
    ProxyState.on('tasks', _draw)
    ProxyState.on('lists', saveState)
    ProxyState.on('tasks', saveState)


    loadState()
  }

  createList() {
    event.preventDefault()
    let form = event.target
    let newList = {
      name: form.name.value,
      color: form.color.value,

    }
    listsService.createList(newList)
    form.reset()
  }

  async destroy(id) {
   
    if(await NotificationService.confirmAction("Are you sure you want to delete this List?") === true){
    listsService.destroy(id)
    NotificationService.toast("Deleted Successfully")}
  } 

  addTask(listID) {
    event.preventDefault()
    let form = event.target
    let newTask = {
      listID,
      name: form.task.value
    }
    listsService.addTask(newTask)
    form.reset()
  }

  toggledTaskSelection(taskId){
    console.log(taskId, ProxyState.tasks)
    const existingTask = ProxyState.tasks.find(x => x.id === taskId)
    existingTask.checked = !existingTask.checked
    listsService.toggledTaskSelection()
   }

  

  async removeTask(id) {
    console.log(id)
    if(await NotificationService.confirmAction("Are you sure you want to delete this task?") === true){
    listsService.removeTask(id)
    NotificationService.toast("Deleted Successfully")}
  }

  onPageLoad(id){
    document.getElementById(id).checked = false
  }
}