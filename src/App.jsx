import './reset.css';
import React from 'react';
import Router from './shared/Router';
import { v4 as UUID } from 'uuid';
import styled from 'styled-components';

function App() {

  return (
    <WrapContent>
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