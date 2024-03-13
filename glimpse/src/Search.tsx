import { useRef, useState } from "react";
import "./Search.css";

function Search() {
  const FormRef = useRef<HTMLFormElement>(null);
  const ButtonRef = useRef<HTMLButtonElement>(null);
  const InputRef = useRef<HTMLInputElement>(null);

  const [Active, setActive] = useState<boolean>(false);

  const performSearch = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let query = InputRef.current?.value;
    let search_engine = "";
    if (Active == true) {
      search_engine = "bing";
    } else {
      search_engine = "google";
    }
    if (query !== undefined) {
      if (query.trim() !== "") {
        window.location.href =
          "https://www." + search_engine + ".com/search?q=" + encodeURIComponent(query);
      }
    }
};

  const toggleSearch = () => {
    if (Active == false) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <div id="alternate_search" className="search">
      <form ref={FormRef} id="searchForm" onSubmit={performSearch}>
        <input
          ref={InputRef}
          type="text"
          id="searchInput"
          className="searchbar"
          placeholder={Active==false ? "Type Your Google search" : "Type Your Bing search"}
        />
        <button
          type="button"
          ref={ButtonRef}
          id="toggle_button"
          onClick={toggleSearch}
          className={Active==false ? "google" : "bing"}
        ></button>
      </form>
    </div>
  );
}

export default Search;
