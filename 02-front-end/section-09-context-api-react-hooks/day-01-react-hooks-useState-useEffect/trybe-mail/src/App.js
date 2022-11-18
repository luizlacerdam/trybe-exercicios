import './App.css';
import React, { useState } from 'react';
import Menssages from './components/Menssages';
import SelectAll from './components/SelectAll';
import Header from './components/Header';
import messagesList from './data/messagesList';


function App() {

  const [messages, setMessagesList] = useState(messagesList)

  return (
    <div className="body">
      <Header />
      <SelectAll />
     <Menssages messages={messages}/>
    </div>
  );
}

export default App;
