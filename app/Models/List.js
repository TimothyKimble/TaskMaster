import { generateId } from "../Utils/GenerateID.js"
import { ProxyState } from "../AppState.js"

export default class List {
  constructor({ name, color, id = generateId() }) {
    this.id = id
    this.name = name
    this.color = color
  }

  get Template() {
    return `
    <div class="col-md-3 d-flex justify-content-center flex-column m-4">
    <div class="row bg-primary">
        <div class="col-md-12 text-center">
            <h4 class="m-0">${this.name}</h4>
            <p class="m-0">2/4</p>
            <i class="fa fa-lg fa-trash action text-danger" title="delete List" onclick="app.listsController.destroy('${this.id}')"></i>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12 pt-2 pb-4  d-flex" id="checkboxes">
            <ul class="d-flex flex-wrap flex-column text-wrap">
                ${this.MyTasks}
            </ul>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12 p-0">
            <form class="w-100" onsubmit="app.listsController.addTask('${this.id}')">
                <div class="d-flex  mb-1 ">
                    <input class="w-100" type="text" name="task" placeholder="Task..." id="task" required minlength="3" maxlength="50">
                    <button class="btn btn-outline-success" type="submit">+</button>
                </div>

            </form>
        </div>
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