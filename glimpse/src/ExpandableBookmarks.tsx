import React, { useState } from 'react';
// import Props from './Props/bookmark';
// import PropTypes from 'prop-types';

const ExpandableBookmarks = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bookmark-container">
      <button className="bookmark-button" onClick={toggleExpansion}>
        Bookmarks
      </button>
      {isExpanded && (
        <ul className='list-group'>
            <li className='list-group-item'>Hello 1</li>
            <li className='list-group-item'>Hello 2</li>
            <li className='list-group-item'>Hello 3</li>
            <li className='list-group-item'>Hello 4</li>
          {/* {bookmarks.map((bookmark) => (
            <li key={Date.now()} className='list-group-item'>
              <a href={bookmark.link} target="_blank" rel="noopener noreferrer">
                {bookmark.title}
              </a>
            </li>
          ))} */}
        </ul>
      )}
    </div>
  );
};

export default ExpandableBookmarks;