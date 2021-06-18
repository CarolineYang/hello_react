import React, {Component} from 'react';

class ListItem extends Component {
    handleClick = ()=>{
        this.props.handleClick(this.props);
    }
    render() {
        return (
            <li onClick={this.handleClick}>
                {this.props.name}
            </li>
        );
    }
}

export default ListItem;