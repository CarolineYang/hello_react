import React, {Component} from 'react';
import ListItem from "../../../components/ListItem";
import Detail from "./Detail";
import {Link,Route} from "react-router-dom";
class Message extends Component {
    state = {
        list:[
            {
                name:'message1',
                key:1,
            },
            {
                key:2,
                name:'message2'
            },
            {
                key:3,
                name:'message3'
            }
        ]
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((item)=>{
                            //向路由组件传递params参数
                            return <li key={item.key}><Link to={`/home/message/detail/${item.key}/${item.name}`}>{item.name}</Link></li>
                        })
                    }
                </ul>
                {/*声明接收params参数*/}
                <Route path='/home/message/detail/:id/:name' component={Detail}></Route>
            </div>
        );
    }
}

export default Message;