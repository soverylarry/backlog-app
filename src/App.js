import React, { useState } from 'react';
import './App.css';
<<<<<<< HEAD
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl"
import Grid from "react-mdl"
import Cell from "react-mdl"
=======
import { Layout, Header, Navigation, Drawer, Content} from "react-mdl"
>>>>>>> c0f458b... App.js changes
import { Link } from "react-router-dom"
import MediaCard from "./components/card"
import API from "./utils/API";
<<<<<<< HEAD
//import CreateNewmedia from "./components/createnewmedia";
=======
//import CreateNewMedia from "./components/createnewmedia";
>>>>>>> c0f458b... App.js changes

function App() {
  const [mediaList, setMediaList] = useState([]);

    const getFullMediaList = () => {
      API.getFullMediaList()
        .then(res => setMediaList(res.data))
        .catch(err => console.log(err));
    }

    const printMediaList = () => {
      for (let i; i < mediaList.length; i++) {
        
      }
    }

    //POST route
    /*const addMediaToList = event => {
        API.addMediaToList()
    }*/

  return (
    <div className="demo-big-content">
          <Layout>
<<<<<<< HEAD
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
=======
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
            {/* <CreateNewMedia /> */}
>>>>>>> c0f458b... App.js changes
          </Layout>
    </div>
  );
}

export default App; 
