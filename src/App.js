import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl"
import Grid from "react-mdl"
import Cell from "react-mdl"
import { Link } from "react-router-dom"
import MediaCard from "./components/card/card"


function App() {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header title="Sample Title" className="header" scroll>
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
                <Content>
                    <MediaCard />
                </Content>
            </Layout>
        </div>
    );
}

export default App; 
