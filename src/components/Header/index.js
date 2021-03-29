import React, {Component} from 'react';
import Proptypes from 'prop-types'
class Header extends Component {
    static propTypes = {
        onChange:Proptypes.func.isRequired
    }
    keyup = (event)=>{
        const{keyCode,target} = event;
        if(keyCode!== 13){
            return;
        }
        this.props.onChange(target.value);
        target.value = ""
    }

    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.keyup} placeholder="请输入项目" />

            </div>
        );
    }
}

export default Header;