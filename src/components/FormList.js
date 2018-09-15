import React, { Component } from 'react';


class FormList extends Component {
  state = {
  }

  render() {
    return (
      <ul>
        <FormListItem/>
      </ul>
    );
  }
}

class FormListItem extends Component {
  state = {

  }

  render() {
    return (
      <li>city, state</li>
    );
  }
}

export default FormList;
