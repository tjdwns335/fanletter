import React from 'react'
import ResetStyle from './ResetStyle'
import Router from './shared/Router';
import { v4 as uuidv4 } from 'uuid';

function App() {
  return (
    <>
      <ResetStyle />
      <Router />
    </>
  )
}

export default App