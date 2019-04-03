import React from 'react';
import TodoListItem from '../TodoListItem';
import classes from './TodoList.module.sass';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map(({ id, hidden, ...item }) => {
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...item}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return <ul className={'list-group ' + classes.TodoList}>{elements}</ul>;
};

export default TodoList;
