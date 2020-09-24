import React from "react";
import data from "./scripts/seedDB.js";
import { NavBar } from "./src/components/navbar";

class SearchFilter extends NavBar {
  state = {
    viewMovies: [] ,
    viewBooks: [],
    viewAll: [],
    status: []
  };
  render(){
    return (
        <div>
          <button id="mediaStatus">
            {data.filter(data => data.status === "In Progress").map (filteredMedia =>(
                <li>
                  {filteredMedia.status}
                </li>
              ))};
          </button> 
        </div>
        
    )

  }
}
export default SearchFilter;