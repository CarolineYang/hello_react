import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
class ListRoute extends Component {
    handleClick = ()=>{
        this.props.handleClick(this.props);
    }
    render() {
        return (
            <li onClick={this.handleClick}>
                <NavLink to={`/home/message`}></NavLink>
            </li>
        );
    }
}

export default ListRoute;