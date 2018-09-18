import React, { Component } from 'react';
import styled from 'styled-components';
import { FormProvider } from '../App';
import FormInput from './FormInput';
import FormList from './FormList';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  margin: 0 auto;
`;

class Main extends Component {
  render() {
    return (
      <main>
        <FormProvider>
          <Form role="search">
            <FormInput />
            <FormList />
          </Form>
        </FormProvider>
      </main>
    );
  }
};

export default Main;
