import React from 'react';
import './App.css';
import { PersonScore } from './component/personScore';
import YourComponent from './component/dragAndDrop';
import EditableButton from './component/editContent';
import HtmlComponent from './component/reactHtmlParser';

function App() {
  return (
    <div className="App">
      <PersonScore />
      <YourComponent />
      <EditableButton />
      <HtmlComponent />
    </div>
  );
}

export default App;
