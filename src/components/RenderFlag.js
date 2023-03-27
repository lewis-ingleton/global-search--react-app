import React from "react";
import { useState, useEffect } from "react";

function RengerFlag() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState("name");
  const [filterParam, setFilterParam] = useState("");
  const [hideList, setHideList] = useState(false);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setFilterParam(e.target.value);
    setHideList(true);
  };

  const data = Object.values(items);

  function search(items) {
    console.log(items);
    return items.filter((item) => {
      if (item.name != "") {
        console.log(item.name);
        return item.name.toString().toLowerCase().indexOf(q.toLowerCase()) > -1;
        // });
      } else if (filterParam === "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }

  if (error) {
    return (
      <p>
        {error.message}, if you get this error, the free API I used might have
        stopped working, but I created a simple example that demonstrate how
        this works,{" "}
        <a href="https://codepen.io/Spruce_khalifa/pen/mdXEVKq">
          {" "}
          check it out{" "}
        </a>{" "}
      </p>
    );
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div className="wrapper">
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search for..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <span className="sr-only">Search countries here</span>
          </label>

          <div className="select">
            <form onSubmit={handleSearch}>
              <button
                className="custom-button"
                aria-label="Filter Countries By Region"
              >
                Search
              </button>
            </form>
            <span className="focus"></span>
          </div>
        </div>
        <ul className="card-grid">
          {hideList &&
            search(data).map((item) => (
              <li>
                <div className="card-image">
                  <img src={item.flag.large} alt={item.name} />
                </div>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
export default RengerFlag;
