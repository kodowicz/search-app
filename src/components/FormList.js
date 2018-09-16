import React, { Component } from 'react';
import { FormContext } from '../App';


class FormList extends Component {
  state = {
  }

  findMatches = (wordToMatch, cities) => {
    return cities.filter(place => {
      const matchPattern = new RegExp(wordToMatch, 'gi');
      return place.city.match(matchPattern) || place.state.match(matchPattern)
    });
  };
  
  render() {
    return (
      <FormContext.Consumer>
        {(context) => {
          const matchedPlaces = this.findMatches(context.state.input, context.state.cities);
          return (
            <React.Fragment>
              <ul>
                {matchedPlaces.map(place =>
                  <FormListItem
                    key={place.rank}
                    place={place}
                  />
                )}
              </ul>
            </React.Fragment>
          );
        }}
      </FormContext.Consumer>
    );
  }
}

class FormListItem extends Component {
  state = {

  }

  render() {
    return (
      <li>{this.props.place.city}, {this.props.place.state}</li>
    );
  }
}

export default FormList;
