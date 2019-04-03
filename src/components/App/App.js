import React, { Component } from 'react';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import classes from './App.module.sass';
import AddItem from '../AddItem';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';

export default class App extends Component {
  state = {
    todoData: [
      this.createTodoItem('Drink coffee'),
      this.createTodoItem('Learn React'),
      this.createTodoItem('Make App'),
      this.createTodoItem('Drink tea'),
    ],
    term: '',
    filtered: 'all',
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: Math.random(),
      hidden: false,
    };
  }

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const res = todoData.filter(el => el.id !== id);
      return {
        todoData: res,
      };
    });
  };

  addItem = data => {
    if (data.trim() === '') return;
    const newItem = this.createTodoItem(data);
    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, newItem],
      };
    });
  };

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important'),
      };
    });
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done'),
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id);
    const newItem = { ...arr[idx], [propName]: !arr[idx][propName] };
    const newTodoData = [...arr];
    newTodoData[idx] = newItem;
    return newTodoData;
  }

  search(arr, term) {
    if (term === '') return arr;
    return arr.filter(
      el => ~el.label.toLowerCase().indexOf(term.trim().toLowerCase())
    );
  }

  filter(arr, filtered) {
    switch (filtered) {
      case 'all':
        return arr;
      case 'active':
        return arr.filter(el => !el.done);
      case 'done':
        return arr.filter(el => el.done);
      default:
        return arr;
    }
  }

  onSearchHandler = term => {
    this.setState({ term });
  };

  onFilterHandler = filtered => {
    this.setState({ filtered });
  };

  render() {
    const { todoData, term, filtered } = this.state;
    const visibleItems = this.filter(this.search(todoData, term), filtered);
    const doneElements = todoData.filter(el => el.done).length;
    const todoElements = todoData.length - doneElements;
    return (
      <div className={classes.App}>
        <AppHeader toDo={todoElements} done={doneElements} />
        <div className={classes.topPanel + ' d-flex'}>
          <SearchPanel onSearchHandler={this.onSearchHandler} term={term} />
          <ItemStatusFilter
            filtered={filtered}
            onFilterHandler={this.onFilterHandler}
          />
        </div>
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}
