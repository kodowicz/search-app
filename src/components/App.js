import React, { Component } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import image from '../images/background.jpg';

const Application = createGlobalStyle`
  body {
    background: url(${image}) center 35% / cover no-repeat;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-size: 26px;
    font-weight: 300;
    font-family: 'Open Sans', sans-serif;
  }

  * {
    box-sizing: border-box
  }

  ul {
    &::-webkit-scrollbar {
      width: 7px;
      background: rgba(0,0,0,.15);
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(0,0,0,.5);
      border-radius: 10px
    }
  }
`;


const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

export const FormContext = React.createContext();

export class FormProvider extends Component {
  state = {
    cities: [],
    matchedCities: [],
    input: '',
    inputHasContent: false
  }

  componentDidMount() {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        let partOfData = [];
        data.map(place => {
          if (partOfData.length >= 50) return;
          partOfData.push(place)
        });
        this.setState({ cities: partOfData })
      })
      .catch(err => {
        return console.log("We have problem with fetch, code of error - " + err);
      });
  }

  render() {
    return (
      <FormContext.Provider value={{
        state: this.state,

        inputHasContent: (event) => {
          if (event.target.value) {
            this.setState({
              input: event.target.value,
              inputHasContent: true
            })
          } else {
            this.setState({
              input: '',
              inputHasContent: false
            })
          }
        }
      }}>
        {this.props.children}
      </FormContext.Provider>
    );
  }
}


const App = () => (
  <React.Fragment>
    <Application />
    <Header />
    <Main />
    <Footer />
  </React.Fragment>
);

export default App;
