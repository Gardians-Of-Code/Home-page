import "./Bookmarks.css";
import bkmrk from './Props/bookmark';

function InputBookmark({ bookmark, setBookmark , handleAdd}: bkmrk) {
  return (
    <form className="newBookmark" onSubmit={handleAdd}>
      <input
        type="text"
        id="inputBookmark"
        placeholder="Add New Bookmark"
        value={bookmark}
        onChange={(e) => {
          setBookmark(e.target.value);
        }}
      />
      <button className="add"></button>
    </form>
  );
}

export default InputBookmark;
