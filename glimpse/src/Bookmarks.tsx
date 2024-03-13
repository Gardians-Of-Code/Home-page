import { useState } from "react";
import "./Bookmarks.css";

function Bookmarks() {
  const [showBookmarks, setShowBookmarks] = useState<boolean>(false);

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
          <div className="bookmark-elements">Bookmark 1</div>
          <div className="bookmark-elements">Bookmark 2</div>
        </div>
      )}
    </div>
  );
}

export default Bookmarks;
