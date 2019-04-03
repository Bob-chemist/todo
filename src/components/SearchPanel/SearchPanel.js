import React from 'react';
import classes from './SearchPanel.module.sass';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';

const SearchPanel = props => {
  const {
    onSearchHandler,
    onClearFilter,
    onActiveFilter,
    onDoneFilter,
    term,
  } = props;
  return (
    <div className="d-flex">
      <input
        className={'form-control ' + classes.SearchPanel}
        placeholder="search"
        onChange={e => onSearchHandler(e.target.value)}
        value={term}
      />
      <ItemStatusFilter
        onClearFilter={onClearFilter}
        onActiveFilter={onActiveFilter}
        onDoneFilter={onDoneFilter}
      />
    </div>
  );
};

export default SearchPanel;
