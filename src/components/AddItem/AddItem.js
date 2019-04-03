import React, { Component } from 'react';
import classes from './AddItem.module.sass';

export default class AddItem extends Component {
  state = {
    label: '',
  };

  onLabelChange = e => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({
      label: '',
    });
  };

  render() {
    return (
      <form action="#" className={classes.AddItem} onSubmit={this.onSubmit}>
        <label htmlFor="add">Add new event</label>
        <input
          id="add"
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="Add new event"
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary" type="submit">
          Add
        </button>
      </form>
    );
  }
}
