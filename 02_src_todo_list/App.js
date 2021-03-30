import React, {Component} from 'react';
import {nanoid} from "nanoid";
import './App.css'
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
class App extends Component {
    state = {
        list:[
            {
                name:'吃饭',
                id:0,
                done:false
            },
            {
                name:'睡觉',
                id:1,
                done:true
            }

        ]
    }
    change = (target)=>{
        let {list} = this.state;
        list.unshift(
            {
                name:target,
                id:nanoid(),
                done:false
            }
            )
        this.setState({
            list:list
        })
    }
    getChange = (id,target)=>{
        let {list} = this.state;
        for(let i=0;i<list.length;i++){
            if(list[i].id == id){
                list[i].done = !list[i].done
                break;
            }
        }
        this.setState({
            list:list
        })
    }
    del = (tar)=>{
        const {list} = this.state;
        const li = list.filter((item)=>{
            if(item.id!= tar){
                return item
            }
        })
        this.setState({
            list:li
        })
    }
    toggleAll = (tar)=>{
        const {list} = this.state;
        list.map(function (item,index) {
            list[index].done = tar;
        })
        this.setState({
            list
        })
    }
    render() {
        const {list} = this.state;
        return (
            <div>
                <Header onChange={this.change}></Header>
                <List list={list} del={this.del} getChange={this.getChange}></List>
                <Footer list={list} toggleAll={this.toggleAll}></Footer>
            </div>
        );
    }
}

export default App;