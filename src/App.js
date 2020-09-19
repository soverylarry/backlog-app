import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from "react-mdl"
import { Link } from "react-router-dom"


function App() {
  return (
    <div className="demo-big-content">
      <div style={{height: '300px', position: 'relative'}}>
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
          </Layout>
      </div>
    </div>
  );
}

export default App;
