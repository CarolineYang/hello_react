import React, {Component} from 'react';
import {nanoid} from "nanoid";
import axios from "axios";
import './App.css'
import List from "./components/List";
import Search from "./components/Search";
class App extends Component {

    render() {
        return (
            <div>
                <Search></Search>
                <List></List>
            </div>
        );
    }
}

export default App;