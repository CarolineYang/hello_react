import React, {Component} from 'react';

class Item extends Component {
    render() {
        return (
            <div className="block">
                    <a href={this.props.html_url} >
                        <img src={this.props.avatar_url} alt="头像"/>
                        <p>{this.props.login}</p>
                    </a>

            </div>

        );
    }
}

export default Item;