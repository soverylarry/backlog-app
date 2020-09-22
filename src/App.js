import React from 'react';
import './App.css';
import { Layout, Content} from "react-mdl";
import './src/components/navbar/index.js';


function App() {
  return (
    <div className="demo-big-content">
          <Layout>
              <navbar>
              </navbar>
              <Content />
          </Layout>
    </div>
  );
}

export default App;
