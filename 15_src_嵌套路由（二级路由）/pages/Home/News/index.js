import React, {Component} from 'react';
import ListItem from "../../../components/ListItem";
class News extends Component {
    state = {
        list:[
            {
                name:"news1"
            },
            {
                name:"news2"
            }
        ]
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((item)=>{
                            return  <ListItem {...item}></ListItem>
                        })
                    }

                </ul>
            </div>
        );
    }
}

export default News;