import React from 'react';
import classes from './SearchPanel.module.sass';

const SearchPanel = props => {
  const { onSearchHandler, term } = props;
  return (
    <div className="d-flex">
      <input
        className={'form-control ' + classes.SearchPanel}
        placeholder="search"
        onChange={e => onSearchHandler(e.target.value)}
        value={term}
      />
    </div>
  );
};

export default SearchPanel;
