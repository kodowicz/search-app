import React, { Component } from 'react';
import { FormContext } from './App';
import styled from 'styled-components';


const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Label = styled.label`
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 5px;
  color: #aaa;
  font-size: 20px;
  transition: 0.3s;
  letter-spacing: 0.5px;
`;

const BorderLine = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #3399ff;
  transition: 0.4s;
`;

const Input = styled.input`
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #333232;
  border: 0;
  width: 100%;
  padding: 4px 25px 4px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label}, &.hasContent ~ ${Label} {
    top: -16px;
    font-size: 12px;
    color: #3399FF;
    transition: 0.3s;
  }

  &:focus ~ ${BorderLine}, &.hasContent ~ ${BorderLine} {
    width: 100%;
    transition: 0.4s;
  }
`;

const Button = styled.button`
  width: 17px;
  height: 18px;
  border: none;
  background: none;
  position: absolute;
  bottom: 7px;
  right: 3px;
  padding: 0
`;

const Svg = styled.svg`
  height: 100%;
  width: 100%;
`;


class FormInput extends Component {

  render() {
    return (
      <FormContext.Consumer>
        {(context) => (
          <InputWrapper>
            <Input
              onChange={context.inputHasContent}
              type="text" placeholder="" aria-label="search city or state"
            />
            <Label htmlFor="input">search city or state</Label>
            <BorderLine />
            {context.state.inputHasContent &&
              <Button
                type="reset">
                <Svg aria-hidden="true" viewBox="0 0 23 23" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59
                  6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#201F1F"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </Svg>
              </Button>
            }
          </InputWrapper>
        )}
      </FormContext.Consumer>
    );
  }
}



export default FormInput;
