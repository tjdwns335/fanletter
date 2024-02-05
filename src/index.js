import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import GlobalStyle from 'GlobalStyle';
import MemberContextProvider from 'context/MemberContext';
import LetterContextProvider from 'context/LetterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LetterContextProvider>
    <MemberContextProvider>
      <App />
      <GlobalStyle />
    </MemberContextProvider>
  </LetterContextProvider>
);
