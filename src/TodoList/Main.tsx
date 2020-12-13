import React, { Component } from "react";
import { observer } from "../modules/mobx-react/mobxreact.cjs.development";
import TodoListStore from "./Store";
import { observable, autorun,computed } from "../modules/mobx/lib/mobx";
import { threadId } from "worker_threads";
// import { observable } from 'mobx';

@observer
export default class TodoList extends Component {
  @observable private data = { height: 20, width: 10 };
  @computed get count(){
    return this.data.height + this.data.width;
  }
  componentDidMount(){
    autorun(()=>{
      console.log(this.data.height);
    })
  }
  onclick = ()=>{
    this.data.height ++ ;
  }

  render() {
  return <div onClick={this.onclick}>{this.data.height}-count:{this.count}</div>;
  }
}
