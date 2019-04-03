import React, { Component } from 'react';

class ItemStatusFilter extends Component {
  state = {
    buttons: [
      {
        label: 'All',
        className: ['btn', 'btn-info'],
        onClick: this.props.onClearFilter,
      },
      {
        label: 'Active',
        className: ['btn', 'btn-outline-secondary'],
        onClick: this.props.onActiveFilter,
      },
      {
        label: 'Done',
        className: ['btn', 'btn-outline-secondary'],
        onClick: this.props.onDoneFilter,
      },
    ],
  };

  renderButtons = () => {
    return this.state.buttons.map(el => {
      return (
        <button
          key={el.label}
          type="button"
          className={el.className.join(' ')}
          onClick={() => {
            el.onClick();
            this.changeClasses(el.label);
          }}
        >
          {el.label}
        </button>
      );
    });
  };

  changeClasses = label => {
    this.setState(({ buttons }) => {
      buttons.map(el => {
        const newEl = { ...el };
        newEl.label === label
          ? (newEl.className[1] = 'btn-info')
          : (newEl.className[1] = 'btn-outline-secondary');
        return newEl;
      });
    });
  };

  render() {
    return <div className="btn-group">{this.renderButtons()}</div>;
  }
}

export default ItemStatusFilter;
