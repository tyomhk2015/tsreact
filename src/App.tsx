import React from 'react';
import './App.css';
import Todos from './components/Todos';

function App() {
  const customProps : string[] = ['React','Typescript','Next','Node.js','socketIO'];
  return (
    <div>
      <Todos customProps={customProps}/>
    </div>
  );
}

export default App;
