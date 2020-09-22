import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content} from "react-mdl"
import { Link } from "react-router-dom"
import Sidebar from "./components/sidebar";


function App() {
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
              <Sidebar />
              <Content />
          </Layout>
    </div>
  );
}

export default App;
