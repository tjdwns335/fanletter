import './reset.css';
import React from 'react';
import Router from './shared/Router';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import FormContent from './components/FormContent';
import styled from 'styled-components';

function App() {
  return (
    <WrapContent>
      <Header />
      <FormContent />
      <Router />
    </WrapContent>
  )
}

export default App

const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;