import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import image from './images/background.jpg';

const Application = styled.div`
  background: url(${image}) center 35% / cover no-repeat;
  height: 100vh;
`;


const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

export const FormContext = React.createContext();

export class FormProvider extends Component {
  state = {
    cities: [],
    matchedCities: [],
    input: null
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
              input: event.target.value
            })
          } else {
            this.setState({
              input: ''
            })
          }
        }
      }}>
        {this.props.children}
      </FormContext.Provider>
    );
  }
}


class App extends Component {
  render() {
    return (
      <Application>
        <Header />
        <Main />
        <Footer />
      </Application>
    );
  }
}

export default App;
