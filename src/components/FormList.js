import React, { Component } from 'react';
import { FormContext } from './App';
import styled from 'styled-components';


const List = styled.ul`
  list-style: none;
  padding: 10px 0;
  margin: 0;
  height: auto;
  max-height: 320px;
  width: 100%;
  overflow-y: auto;
  background-color: white;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.4)
`;

const ListItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  width: 88%;
  margin: 0 auto;
  padding: 12px 10px 2px 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: #282828;
  color: #494D50;
  border-bottom: 1px solid #c6d5e3;
`;

const Button = styled.button`
  border: none;
  background: none;
  width: 15px;
  height: 15px;
  padding: 0
`;

const Svg = styled.svg`
  width: 15px;
  height: 15px;
  transform: rotate(0.25turn);
`;

const Details = styled.div`
  width: 100%;
  padding: 15px 35px;
  transition: opacity 0.2s ease-out;
`;

const Paragraf = styled.p`
  font-size: 14px;
  color: #3B3636;
  margin: 2px 0;
  font-weight: 300
`;
class FormList extends Component {

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
              {context.state.inputHasContent &&
                <List>
                  {matchedPlaces.map(place =>
                    <FormListItem
                      key={place.rank}
                      place={place}
                    />
                  )}
                </List>
              }
            </React.Fragment>
          );
        }}
      </FormContext.Consumer>
    );
  }
}

class FormListItem extends Component {
  state = {
    isExpanded: false
  };

  expandDetails = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({ isExpanded: !prevState.isExpanded }))
  };

  render() {
    const { city, state } = this.props.place;
    return (
      <FormContext.Consumer>
        {(context) => (
          <ListItem>
            <span onClick={this.expandDetails}>{city}, {state}</span>
            <DetailsButton onClick={this.expandDetails} />
            { this.state.isExpanded && <DetailsList place={this.props.place} isExpanded={this.state.isExpanded} /> }
          </ListItem>
        )}
      </FormContext.Consumer>
    );
  };
};

const DetailsButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <Svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 477.175 477.175">
      <g>
        <path fill="#4F5256" d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5   c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z   " fill="#333232"/>
      </g>
    </Svg>
  </Button>
);

const DetailsList = (props) => {
  const { city, growth_from_2000_to_2013, population, state } = props.place;
  const { isExpanded } = props.isExpanded;

  return (
    <Details>
      <Paragraf>city: {city}</Paragraf>
      <Paragraf>state: {state}</Paragraf>
      <Paragraf>population: {population}</Paragraf>
      <Paragraf>the growth since 2000: {growth_from_2000_to_2013}</Paragraf>
    </Details>
  );
};


export default FormList;
