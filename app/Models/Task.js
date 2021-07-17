import { generateId } from "../Utils/GenerateID.js";

export default class Task {
  constructor({ name, listID, id = generateId() }) {
    this.id = id
    this.listID = listID
    this.name = name
  }

  get Template() {
    return `<li class="d-flex text-wrap justify-content-center"><input type="checkbox" class="px-2 d-flex big-checkbox"> <h4 class="px-2">${this.name}</h4> <span class="action txt-danger " onclick="app.listsController.removeTask('${this.id}')"><i class="fa fa-lg fa-trash action text-danger" title="delete List" ></i></span></li>`
  }
}