import React, {Component} from 'react';
import {nanoid} from "nanoid";
import {NavLink,BrowserRouter,Route} from 'react-router-dom'
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header"
class App extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="page-header">
                            <h2>React Router Demo</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-2">
                        <div className="list-group">
                            {/*在React中靠路由连接实现切换组件--编写路由链接*/}
                                <NavLink activeClassName="atigui" className="list-group-item"  to="/home">Home</NavLink>
                                <NavLink activeClassName="atigui" className="list-group-item" to="/about">About</NavLink>
                        </div>
                    </div>
                    <div className="col-xl-10">
                        <div className="panel">
                            <div className="panel-body">
                                <Header a={1333}></Header>
                                {/*注册路由*/}
                                <Route path="/about" component={About}/>
                                <Route path="/home" component={Home}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;