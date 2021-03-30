import React, {Component} from 'react';
import {nanoid} from "nanoid";
import axios from "axios";
import './App.css'
class App extends Component {
    state = {
        students:[],
        cars:[]
    }
    getStudent = ()=>{
        axios.get('http://localhost:3000/api1/students').then((res)=>{
            console.log('ssss',res.data)
            this.setState({
                students:res.data
            })
        },(err)=>{
            console.log('失败了')
        })
    }
    getCars = ()=>{
        axios.get('http://localhost:3000/api2/cars').then((res)=>{
            console.log('ssss',res.data)
            this.setState({
                cars:res.data
            })
        },(err)=>{
            console.log('失败了')
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudent}>点我获取学生数据</button>
                <button onClick={this.getCars}>点我获取汽车数据</button>
                <ul>
                    {
                        this.state.students.map((item)=> {
                            return (
                                <li key={item.id}>{item.name}+{item.age}</li>
                            )
                        })
                    }
                </ul>
                <ul>
                    {
                        this.state.cars.map((item)=> {
                            return (
                                <li key={item.id}>{item.name}+{item.price}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default App;