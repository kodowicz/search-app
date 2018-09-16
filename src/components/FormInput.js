import React, { Component } from 'react';
import { FormContext } from '../App';

class FormInput extends Component {

  render() {
    return (
      <FormContext.Consumer>
        {(context) => (
          <input
            onChange={context.inputHasContent}
            type="text" placeholder="" aria-label="search city or state"
          />
        )}
      </FormContext.Consumer>
    );
  }
}



export default FormInput;
