import { generateId } from "../Utils/GenerateID.js";

export default class Task {
  constructor({ name, listID, checked, id = generateId() }) {
    this.id = id
    this.listID = listID
    this.name = name
    this.checked = checked
    
  }

  get Template() {
    console.log(this.checked)
    return `<li class="d-flex text-wrap my-1"><div class="col-11  d-flex align-items-center"><input type="checkbox" ${this.checked ? 'checked' : ''} class=" d-flex big-checkbox" onclick="app.listsController.toggledTaskSelection('${this.id}')" id="${this.id}" ><label for="${this.id}" class="strikethrough"> <h6 class="m-0 pl-1 strikethrough">${this.name}</h6></label> </div> <div class="col-1 d-flex p-0 justify-content-center"><span class="action txt-danger d-flex justify-content-end " onclick="app.listsController.removeTask('${this.id}')"><i class="d-flex align-self-center fa fa-lg fa-trash action text-danger" title="delete List" ></i></span></div></li>`
  }

}