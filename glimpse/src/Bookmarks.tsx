import { useState } from "react";
import "./Bookmarks.css";
import InputBookmark from "./InputBookmark";
import bkmrk from './Props/bookmark';

function Bookmarks() {
  const [showBookmarks, setShowBookmarks] = useState<boolean>(false);
  const [bookmark, setBookmark] = useState<string>('');
  const [bookmarks, setBookmarks] = useState<bkmrk[]>([]);

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();
    // if(bookmark){
    //   setBookmarks[...bookmarks, {id: Date.now(), bookmark: bookmark, isDone: false}]
    // }
  }

  // console.log(bookmark);

  const toggleBookmarks = () => {
    setShowBookmarks(!showBookmarks);
  };

  return (
    <div className="bookmark-container">
      <button className="bookmark-button" onClick={toggleBookmarks}>
        Bookmarks
      </button>
      {showBookmarks && (
        <div className="bookmark-dropdown">
            <ul className="types">
              <li><button className="bookmark-types">Date</button></li>
              <li><button className="bookmark-types">Frequency</button></li>
              <li><button className="bookmark-types">ML Tag</button></li>
              <li><button className="bookmark-types">Custom Tag</button></li>
            </ul>
            <ul className="bookmarks">
              <li><div className="bookmark-elements">Bookmark 1</div></li>
              <li><div className="bookmark-elements">Bookmark 2</div></li>
              <li><div className="bookmark-elements">Bookmark 3</div></li>
              <li><div className="bookmark-elements">Bookmark 4</div></li>
            </ul>
            <InputBookmark bookmark={bookmark} setBookmark={setBookmark} handleAdd={handleAdd}/>
        </div>
      )}
    </div>
  );
}

export default Bookmarks;
