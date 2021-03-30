import React, {Component} from 'react';
import './index.css'
class Item extends Component {
    state = {
        mouse:false
    }
    handleMouse = (flag)=>{
        return ()=>{
            this.setState({
                mouse:flag
            })
        }
    }
    toggleState = (id)=>{
        return (event)=>{
           this.props.getChange(id,event.target.checked)
        }
    }
    render() {
        const {del,name,children,done,id} = this.props
        return (
            <div style={{backgroundColor: this.state.mouse?"#ddd":"white"}}
                className="aaa" onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <input type="checkbox" checked={done} onChange={this.toggleState(id)}/>
                <span>{name}</span>
                {this.state.mouse?<button className="btn" onClick={del}>删除</button>:''}

                {children}
            </div>
        );
    }
}

export default Item;