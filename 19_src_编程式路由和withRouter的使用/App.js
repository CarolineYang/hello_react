import React, {Component} from 'react';
import {nanoid} from "nanoid";
import {NavLink,BrowserRouter,Route,Switch,Redirect,withRouter} from 'react-router-dom'
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Test from "./pages/Test"
import Header from "./components/Header"
import MyNavLink from "./components/MyNavLink";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routes:[
                {
                    to:'/home',
                    children:'home',
                },
                {
                    to:'/about',
                    children:'abouwwwt'
                }
            ],

        }
    }
    forward = ()=>{
        this.props.history.goForward()
    }
    back = ()=>{
        this.props.history.goBack()
    }
    go = ()=>{

    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="page-header">
                            <h2>React Router Demo</h2>
                            <button onClick={this.forward}>前进</button>
                            <button onClick={this.back}>后退</button>
                            <button onClick={this.go}>go</button>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-2">
                        <div className="list-group">
                            {/*在React中靠路由连接实现切换组件--编写路由链接*/}
                            {
                                this.state.routes.map((item,index)=>{
                                    return(
                                        <MyNavLink {...item} key={index}></MyNavLink>
                                    )
                                })
                            }
                            {/*<MyNavLink to='/home' name="Homeww"></MyNavLink>*/}
                            {/*<MyNavLink to='/about' name="About"></MyNavLink>*/}
                            {/*<NavLink activeClassName="atigui" className="list-group-item"  to="/home">Home</NavLink>*/}
                            {/*<NavLink activeClassName="atigui" className="list-group-item" to="/about">About</NavLink>*/}
                        </div>
                    </div>
                    <div className="col-xl-10">
                        <div className="panel">
                            <div className="panel-body">
                                <Header a={1333}></Header>
                                {/*/!*注册路由*/ /*exact={true}开启精准匹配}*/}

                                <Switch>
                                    {/*<Route path="/about" component={Test}/>*/}
                                    {/*<Route exact path="/about" component={About}/>*/}
                                    <Route path="/about"  component={About}/>
                                    <Route path="/home" component={Home}/>
                                    {/*redirect是兜底的人，要是以上路由都匹配不上就指定他去默认页就是to  重定向redirect*/}
                                    <Redirect to='/home' />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
// withRouter是加工一下一般组件，让一般组件具备路由组件所特有的API，且的返回值是一个新组件
export default withRouter(App);