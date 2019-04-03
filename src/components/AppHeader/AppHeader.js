import React from 'react';
import classes from './AppHeader.module.sass';

const AppHeader = ({ toDo, done }) => {
  return (
    <div className={classes.AppHeader + ' d-flex'}>
      <h1>My ToDo</h1>
      <h2>
        {toDo} more to do, {done} done
      </h2>
    </div>
  );
};

export default AppHeader;
