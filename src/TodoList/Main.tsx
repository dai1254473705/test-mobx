import React, {Component} from 'react';
import { observer } from "../modules/mobx-react/mobxreact.cjs.development";
import TodoListStore from './Store';
import { observable } from "../modules/mobx/lib/mobx";
// import { observable } from 'mobx';

@observer
export default class TodoList extends Component {
  @observable haha = 1;
  render(){
    return (
      <div>
        {TodoListStore.pageTitle}
      </div>
    )
  }
}