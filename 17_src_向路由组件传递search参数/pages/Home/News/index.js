import React, {Component} from 'react';
// import ListRoute from "../../../components/ListRoute";
import {Link, Route} from 'react-router-dom'
import Detail from "../News/Detail";
class News extends Component {
    state = {
        list:[
            {
                key:1,
                name:"news1"
            },
            {
                key:2,
                name:"news2"
            }
        ],
        currentList:null
    }

    handleClick = (data)=>{
        this.setState({
            currentList:data
        })
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((item)=>{
                            return  <Link key={item.key} to={`/home/news/detail?id=${item.key}&name=${item.name}`}>{item.name}</Link>
                        })
                    }
                </ul>
                {
                    this.state.currentList?<span>{JSON.stringify(this.state.currentList)}</span>:<div></div>
                }
                {/*search参数无需声明接收*/}
                <Route path='/home/news/detail' component={Detail}></Route>
            </div>
        );
    }
}

export default News;