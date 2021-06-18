import React, {Component} from 'react';
import ListItem from "../../../components/ListItem";
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
                            return  <ListItem {...item} handleClick={this.handleClick}></ListItem>
                        })
                    }
                </ul>
                {
                    this.state.currentList?<span>{JSON.stringify(this.state.currentList)}</span>:<div></div>
                }

            </div>
        );
    }
}

export default News;