import React from 'react';
import './App.css';
import { Layout, Content} from "react-mdl";
import NavBar from './components/navbar';


function App() {
  return (
    <div className="demo-big-content">
          <Layout>
              <NavBar />
              <Content />
          </Layout>
    </div>
  );
}

export default App;
