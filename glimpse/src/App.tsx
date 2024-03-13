import { useState } from 'react';
import './App.css';
import ExpandableBookmarks from './ExpandableBookmarks';
import MotivationalQuote from './MotivationalQuote';
import Greeting from './Greeting';
import Props from './Props/bookmark';
import Search from './Search';

function App() {
  // const [Bookmark, setBookmark] = useState<Props>();
  // const [Bookmarks, setBookmarks] = useState<Props[]>([]);

  // console.log(Bookmark);

  return (
    <div className='App'>
      {/* <ExpandableBookmarks /> */}
      <MotivationalQuote />
      <Greeting />
      <Search />
    </div>
  );
}

export default App;
