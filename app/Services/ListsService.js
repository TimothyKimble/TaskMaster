import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";


class ListsService {

  createList(newList) {
    ProxyState.lists = [...ProxyState.lists, new List(newList)]
  }
  destroy(id) {
    ProxyState.lists = ProxyState.lists.filter(list => list.id != id)
  }
}

export const listsService = new ListsService()