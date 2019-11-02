import React, { Component } from "react";
import { Input, Button, List } from "antd";
import "./index.less";
import store from "./store/index";
import {
  getInputValueAction,
  getAddListItemAction,
  getDelListItemAction,
  getTodoList
} from "./store/actionCreators";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.updateHandle);
  }

  render() {
    return (
      <div className="container">
        <Input
          value={this.state.inputValue}
          placeholder="todo info"
          className="input"
          onChange={this.changeInputValue}
        />
        <Button type="primary" onClick={this.addListItem}>
          添加
        </Button>
        <List
          className="list"
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.delListItem.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }

  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action);
  }

  updateHandle = () => {
    this.setState(store.getState());
  };
  changeInputValue = e => {
    const action = getInputValueAction(e.target.value);
    store.dispatch(action);
  };
  addListItem = () => {
    const action = getAddListItemAction();
    store.dispatch(action);
  };

  delListItem = index => {
    const action = getDelListItemAction(index);
    store.dispatch(action);
  };
}
