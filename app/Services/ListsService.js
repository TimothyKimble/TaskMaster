import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import Task from "../Models/Task.js";


class ListsService {

  createList(newList) {
    ProxyState.lists = [...ProxyState.lists, new List(newList)]
  }

  addTask(newTask) {
    ProxyState.tasks = [...ProxyState.tasks, new Task(newTask)]
  }
  destroy(id) {
    ProxyState.lists = ProxyState.lists.filter(list => list.id != id)
    ProxyState.tasks = ProxyState.tasks.filter(task => task.listID != id)
  }

  removeTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)
  }
}

export const listsService = new ListsService()