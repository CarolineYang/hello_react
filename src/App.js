import React, {Component} from 'react';
import {nanoid} from "nanoid";
import axios from "axios";
import './App.css'
import List from "./components/List";
import Search from "./components/Search";
class App extends Component {
    state = {
        list:[],
        isFirst:true,
        isLoading:false,
        err:''
    }
    //更新app的state
    updateAppState = (stateObj)=>{
        this.setState(stateObj);
    }
    render() {
        return (
            <div>
                <Search updateAppState={this.updateAppState}></Search>
                <List {...this.state}></List>
            </div>
        );
    }
}

export default App;