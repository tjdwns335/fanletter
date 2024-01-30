import React from 'react'
import ResetStyle from './ResetStyle'
import Router from './shared/Router';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import FormContent from './components/FormContent';

function App() {
  return (
    <>
      <Header />
      <FormContent />
      <ResetStyle />
      <Router />
    </>
  )
}

export default App