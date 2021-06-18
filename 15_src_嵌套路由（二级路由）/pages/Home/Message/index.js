import React, {Component} from 'react';
import ListItem from "../../../components/ListItem";
class Message extends Component {
    state = {
        list:[
            {
                name:'message1'
            },
            {
                name:'message2'
            },
            {
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
                            return <ListItem {...item} />
                        })
                    }

                </ul>
            </div>
        );
    }
}

export default Message;