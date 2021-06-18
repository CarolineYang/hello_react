import React, {Component} from 'react';

class Detail extends Component {
    render() {
        console.log(this.props)
        return (
            <ul>
                <li>name:{this.props.location.state.name}</li>
            </ul>
        );
    }
}

export default Detail;