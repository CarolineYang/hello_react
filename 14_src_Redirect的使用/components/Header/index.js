import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                header
                {this.props.a}
            </div>
        );
    }
}

export default Header;