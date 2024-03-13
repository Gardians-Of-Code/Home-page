import { useState } from 'react';
import './App.css';
import MotivationalQuote from './MotivationalQuote';
import Greeting from './Greeting';
import Bookmarks from './Bookmarks';
import Search from './Search';
import ToDo from './ToDo';

function App() {

  return (
    <div className='App'>
      <ToDo />
      <Bookmarks />
      <MotivationalQuote />
      <Greeting />
      <Search />
    </div>
  );
}

export default App;
