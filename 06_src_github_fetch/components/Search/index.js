import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import axios from "axios";
class Search extends Component {
    keyup = async (event)=>{
        if(event.keyCode == 13){
            PubSub.publish('at', {isFirst:false,isLoading:true});
            //fetch兼容性不高 老版本的浏览器
            fetch('https://api.github.com/search/users?q='+this.input.value).then(function(res){
                console.log('成功了',res.json())
                return res.json();
            },(err)=>{
                console.log('失败',err)
            }).then((res)=>{
                console.log('aa',res)
            },(err)=>{
                console.log('sjiaa',err)
            })
            // //await只管请求成功的值所以借用try 右侧必须是promise实例
            // try{
            //     const res = await fetch('https://api.github.com/search/users?q='+this.input.value);
            //     const data = await res.json();
            //     console.log(data)
            // }catch(err){
            //     console.log('请求出错',err)
            // }
            // try{
            //     const res = await axios.get('https://api.github.com/search/users?q='+this.input.value);
            //     // const data = await res.json();
            //     console.log(res.data)
            // }catch(err){
            //     console.log('请求出错',err)
            // }

            // axios.get('https://api.github.com/search/users?q='+this.input.value).then((res)=>{
            //     //请求成功后通知App更新状态
            //     PubSub.publish('at', {isLoading:false,list:res.data.items});
            // },(err)=>{
            //     PubSub.publish('at', {err:err.message,isLoading:false});
            // })
        }else{

        }
    }
    render() {
        return (
            <div style={{margin:'20px'}}>
                <input type="text" ref={c =>this.input=c} onKeyUp={this.keyup}/>
            </div>
        );
    }
}

export default Search;