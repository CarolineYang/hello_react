import React, {Component} from 'react';
import axios from "axios";
class Search extends Component {
    search = ()=>{
        const {keyWordElement:{value}} = this;
        // console.log(this.refs.sss.value)
        //发送请求前通知app更新状态
        this.props.updateAppState({
            isFirst:false,isLoading:true
        })
        axios.get('https://api.github.com/search/users?q='+value).then((res)=>{
            //请求成功后通知App更新状态
            this.props.updateAppState({
                list:res.data.items,isLoading:false
            })
            console.log(res.data.items)
        },(err)=>{
            this.props.updateAppState({
                err:err.message,isLoading:false
            })
        })
    }
    render() {
        return (
            <div className="form-control">
                <input className="" type="text" ref={c=>this.keyWordElement = c}/>
                <button className="btn btn-success" onClick={this.search}>搜索</button>
            </div>
        );
    }
}

export default Search;