import React, {Component} from 'react';
import Proptypes from 'prop-types'
import './index.module.css'
import Item from "../Item";
class List extends Component {
    static propTypes = {
        list:Proptypes.array.isRequired
    }
    render() {
        const {list} = this.props;
        return (
            <div className="todolist">
                {
                    list.map( (item)=> {
                        return (<Item {...item} key={item.id} getChange={this.props.getChange} del={()=>this.props.del(item.id)}>
                            <button>hhh</button>
                        </Item>)
                    })
                }
            </div>
        );
    }
}

export default List;