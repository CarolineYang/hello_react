import React, {Component} from 'react';
import {nanoid} from "nanoid";
import {Link,BrowserRouter,Route} from 'react-router-dom'
import './App.css'
import Home from "./components/Home";
import About from "./components/About";
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
                                <Link className="list-group-item" to="/home">Home</Link>
                                <Link className="list-group-item" to="/about">About</Link>
                        </div>
                    </div>
                    <div className="col-xl-10">
                        <div className="panel">
                            <div className="panel-body">
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