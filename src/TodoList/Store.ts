// import {observable, computed,configure,action} from 'mobx';
import {
  observable,
  computed,
  configure,
  action,
} from "../modules/mobx/lib/mobx";

import { enableLogging } from "mobx-logger";

// mobx 日志,只有本地开发环境会有日志
enableLogging({
  predicate: () => true,
  action: true,
  reaction: true,
  transaction: true,
  compute: true,
});

// 不允许在动作外部修改状态,修改store必须使用action
configure({
  enforceActions: "observed",
});

class TodoListStore {
  @observable public data = { height: 20, width: 10 };
  



  
  // @observable public title:string = 'haha';

  // @computed get pageTitle () {
  //     return this.title || '没有标题';
  // }

  // init (){
  //     setTimeout(() => {
  //        this.update();
  //     }, 1000);
  // }

  // @action
  // update(){
  //     this.title = '111111';
  // }
}
export default new TodoListStore();
