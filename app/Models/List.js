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
            <i class="fa fa-trash action text-danger" title="delete List" onclick="app.listsController.destroy('${this.id}')"></i>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12 pt-2 pb-4" id="checkboxes">
            <ul>
                <li><input type="checkbox"> checkbox 1</li>
                <li><input type="checkbox"> checkbox 2</li>
                <li><input type="checkbox"> checkbox 3</li>
                <li><input type="checkbox"> checkbox 4</li>
            </ul>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12 p-0">
            <form class="w-100" onsubmit="">
                <div class="d-flex  mb-1">
                    <input type="text" name="task" placeholder="Task..." id="task">
                    <button class="btn btn-outline-success" type="submit">+</button>
                </div>

            </form>
        </div>
    </div>

</div>`
  }
}