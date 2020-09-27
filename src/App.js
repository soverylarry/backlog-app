import React, { useState } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl"
import Grid from "react-mdl"
import Cell from "react-mdl"
import { Link } from "react-router-dom"
import MediaCard from "./components/card"
import API from "./utils/API";

//import CreateNewmedia from "./components/createnewmedia";

function App() {
  const [mediaList, setMediaList] = useState([]);

    const getFullMediaList = event => {
        API.getFullMediaList()
            .then(res => setMediaList(res.data))
            .catch(err => console.log(err));
    }

    //POST route
    /*const addMediaToList = event => {
        API.addMediaToList()
    }*/

  return (
    <div className="demo-big-content">
          <Layout>
              <Header title="Sample Title" className= "header" scroll>
                  <Navigation>
                      <Link to="/">Home</Link>
                      <Link to="/movies">Movies</Link>
                      <Link to="/books">Books</Link>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                      <Link to="/">Home</Link>
                      <Link to="/movies">Movies</Link>
                      <Link to="/books">Books</Link>
                  </Navigation>
               </Drawer>
              <Content />
    {/* <CreateNewmedia /> */}
          </Layout>
    </div>
  );
}

export default App; 
