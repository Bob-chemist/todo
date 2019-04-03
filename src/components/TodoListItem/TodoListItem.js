import React from 'react';
import classes from './TodoListItem.module.sass';

const TodoListItem = props => {
  const {
    label,
    onDeleted,
    onToggleImportant,
    onToggleDone,
    done,
    important,
  } = props;

  let cls = `${classes.TodoListItemLabel} ${done ? classes.done : ''} ${
    important ? classes.important : ''
  }`;

  return (
    <span className={classes.TodoListItem}>
      <span className={cls} onClick={onToggleDone}>
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onToggleImportant}
      >
        <i className="fa fa-exclamation" />
      </button>
      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDeleted}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
