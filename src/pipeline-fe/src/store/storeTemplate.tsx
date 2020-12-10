// import { action, decorate, observable, computed } from "mobx";
import autoStore from "./autoStore";

class storeTemplate {
  //   idea: IIdea = {} as IIdea;
  //   ideas: IIdea[] = [];

  constructor() {
    autoStore(this);
  }
}
//decorate(storeTemplate, {
// example: observable,
// example: action,
// example: computed,
//});

export default new storeTemplate();
