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
    back = ()=>{
        this.props.history.goBack();
    }
    forward = ()=>{
        this.props.history.goForward();
    }
    replaceShow = (id,name)=>{
       //编写一段代码让其实现跳转到detail组件且为replace跳转
        //params参数
        // this.props.history.replace(`/home/message/detail/${id}/${name}`);
        //search参数
        // this.props.history.replace(`/home/message/detail?id=${id}&name=${name}`);
        //state参数
        let obj = {
            pathname:'/home/message/detail',
            state:{
                id,name
            }
        }
        this.props.history.replace(obj);
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((item)=>{
                            //向路由组件传递search参数
                            return (
                                <li key={item.key}>
                                    <Link to={`/home/message/detail/${item.key}/${item.name}`}>{item.name}</Link>
                                    <button>push查看</button>&nbsp;
                                    <button onClick={()=>this.replaceShow(item.key,item.name)}>replace查看</button>
                                </li>
                            )
                        })
                    }
                </ul>
                {/*声明接收params参数*/}
                {/*<Route path='/home/message/detail/:id/:name' component={Detail}></Route>*/}
                {/*接收search参数*/}
                <Route path='/home/message/detail' component={Detail}></Route>

                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>
            </div>
        );
    }
}

export default Message;