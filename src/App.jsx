import './reset.css';
import React from 'react';
import Router from './shared/Router';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import styled from 'styled-components';
import FormContent from './components/FormContent';

function App() {
  const girlGroup = [
    {
      id: crypto.randomUUID(),
      name: "효정",
    },
    {
      id: crypto.randomUUID(),
      name: "미미",
    },
    {
      id: crypto.randomUUID(),
      name: "유아",
    },
    {
      id: crypto.randomUUID(),
      name: "승희",
    },
    {
      id: crypto.randomUUID(),
      name: "유빈",
    },
    {
      id: crypto.randomUUID(),
      name: "아린",
    },
  ]
  return (
    <WrapContent>
      <Header girlGroup={girlGroup} />
      <FormContent girlGroup={girlGroup} />
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