import React, {Component} from 'react';
import PubSub from 'pubsub-js'
class List extends Component {
    state = {
        list:[],
        isFirst:true,
        isLoading:false,
        err:''
    }
    componentDidMount() {
        this.token = PubSub.subscribe('at',(msg,data)=>{
            console.log(msg,data)
            this.setState(data)
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }

    render() {
        const {list,isFirst,isLoading,err} = this.state;
        return (
            <div>
                {
                    isFirst?<h2>欢迎</h2>:
                        isLoading?<h2>Loading...</h2>:
                            err?<h2>{err}</h2>:
                                list.map((item)=>{
                                    return (
                                        <div key={item.id}>
                                            <a href={item.html_url}></a>
                                            <img src={item.avatar_url} alt=""/>
                                            <span>{item.login}</span>
                                        </div>
                                    )
                                })
                }
            </div>
        );
    }
}

export default List;