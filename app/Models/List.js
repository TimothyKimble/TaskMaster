import { generateId } from "../Utils/GenerateID.js"
import { ProxyState } from "../AppState.js"

export default class List {
  constructor({ name, color, id = generateId() }) {
    this.id = id
    this.name = name
    this.color = color
    
  }

  get Template() {
    const listTasks= ProxyState.tasks.filter(x => x.listID === this.id)
    return `
    <div class="col-md-3 d-flex  flex-column m-4">
    
    <div class="row bg-primary border-left border-right border-primary border-top">
        <div class="col-md-12 text-center text-light" style="background-color: ${this.color}">
            <h4  class="m-0">${this.name}</h4>
            <p class="m-0">${listTasks.filter(x => x.checked).length}/${listTasks.length}</p>
            <i class="fa fa-lg fa-trash action text-danger" title="delete List" onclick="app.listsController.destroy('${this.id}')"></i>
        </div>
    </div>

    <div class="row border-left border-right border-primary bg-light">
        <div class="col-md-12 pt-2 pb-4  d-flex justify-content-center viewHeightCol" id="checkboxes">
            <ul class="row d-flex flex-wrap flex-column text-wrap p-0">
                ${this.MyTasks}
            </ul>
        </div>
    </div>

    <div class="row d-flex border-left border-right border-primary border-bottom bg-light">
        
            <form class="w-100 col-md-12 p-0" onsubmit="app.listsController.addTask('${this.id}')">
                <div class="d-flex  mb-1 ">
                    <input class="w-100" type="text" name="task" placeholder="Task..." id="task" required minlength="3" maxlength="50">
                    <button class="btn btn-outline-success" type="submit">+</button>
                </div>

            </form>
        
    </div>

</div>`
  }

  get MyTasks() {
    let template = ''
    let tasks = ProxyState.tasks.filter(task => task.listID === this.id)
    tasks.forEach(t => {
      template += t.Template
    })
    if (!template) {
      template += "No Tasks"
    }
    return template
  }
}