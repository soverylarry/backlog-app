import React from "react";
import { Header, Navigation } from "react-mdl";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <Header title="Sample Title" className="header" scroll>
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/books">Books</Link>
      </Navigation>
    </Header>
  );
}
export default NavBar;
