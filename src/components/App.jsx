import React from 'react';
import Header from "./Header";
import SearchBar from "./SearchBar";
import Body from "./Body";
import Footer from "./Footer";
import Card from "./Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

function App()
{
    return(<>
        <Header/>
        <Navbar></Navbar>
        <SearchBar/>
        
        <Body/><div style={{height:"1000px"}}>
        </div>
        <Card/>
       
        <Footer children={"hye you"}/>




    </>);
}
export default App;
