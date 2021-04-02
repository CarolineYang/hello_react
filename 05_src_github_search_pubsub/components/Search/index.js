import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import axios from "axios";
class Search extends Component {
    keyup = (event)=>{
        if(event.keyCode == 13){
            PubSub.publish('at', {isFirst:false,isLoading:true});
            axios.get('https://api.github.com/search/users?q='+this.input.value).then((res)=>{
                //请求成功后通知App更新状态
                PubSub.publish('at', {isLoading:false,list:res.data.items});
            },(err)=>{
                PubSub.publish('at', {err:err.message,isLoading:false});
            })
        }else{

        }
    }
    render() {
        return (
            <div>
                <input type="text" ref={c =>this.input=c} onKeyUp={this.keyup}/>
            </div>
        );
    }
}

export default Search;