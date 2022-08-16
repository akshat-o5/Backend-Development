// HEADER COMPONENT FOR TODO LIST

// rfc -> REACT FUNCTION COMPONENT
import React from "react";

// IMPORTING PROTOTYPES
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

// props:

//We use props in React to pass data from one component to another (from a parent component to a child component(s)).

// Props is just a shorter way of saying properties.

// They are useful when you want the flow of data in your app to be dynamic.

export default function header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home<span class="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>

          {/* WE USE props.searchBar so hide or display search bar based upon it's boolean value        */}

          {props.searchBar ? <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form> : ""}
        </div>
      </nav>
    </div>
  );
}






// prop types

header.propTypes = {
  title : PropTypes.string,
  searchBar : PropTypes.bool.isRequired
}



// default props
// IT HOLDS DEFAULT VALUES 

header.defaultProps = {
  title: "Your Title Here",
  searchBar : true
}