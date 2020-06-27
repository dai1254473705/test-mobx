import React, {Component} from 'react';
import { observer } from "mobx-react";
import TodoListStore from './Store';

@observer
export default class TodoList extends Component {
  render(){
    return (
      <div>
        {TodoListStore.pageTitle}
      </div>
    )
  }
}