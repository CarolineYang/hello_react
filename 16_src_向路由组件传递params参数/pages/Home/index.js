import React, {Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import News from "./News";
import Message from "./Message";
import MyNavLink from "../../components/MyNavLink";
class Home extends Component {
    constructor() {
        super();

    }
    render() {
        return (
            <div>
                <h1>
                    我是Home
                </h1>
                <ul className="nav nav-tabs">
                    <li>
                        <MyNavLink to='/home/news' children='news'></MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to='/home/message' children='message'></MyNavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path='/home/news' component={News}></Route>
                    <Route path='/home/message' component={Message}></Route>
                    <Redirect to='/home/news'></Redirect>
                </Switch>

                {/*<News {...this.state}></News>*/}
            </div>

        );
    }
}

export default Home;