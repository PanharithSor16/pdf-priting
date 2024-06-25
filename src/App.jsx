// src/App.js
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import html2pdf from 'html2pdf.js';
import PrintComponent from './components/PrintComponent';
import Label from './pages/Label';

const App = () => {

  return (
  <>
  <Label/>
  </>
  );
};

export default App;
