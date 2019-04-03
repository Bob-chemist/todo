import React from 'react';

const ItemStatusFilter = props => {
  const buttons = [
    {
      label: 'All',
      name: 'all',
    },
    {
      label: 'Active',
      name: 'active',
    },
    {
      label: 'Done',
      name: 'done',
    },
  ];

  const renderButtons = arr => {
    return arr.map(({ name, label }) => {
      const isActive = name === props.filtered;
      const classCSS = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button
          key={name}
          type="button"
          className={`btn ${classCSS}`}
          onClick={() => props.onFilterHandler(name)}
        >
          {label}
        </button>
      );
    });
  };

  return <div className="btn-group">{renderButtons(buttons)}</div>;
};

export default ItemStatusFilter;
