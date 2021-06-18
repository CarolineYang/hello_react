import React, {Component} from 'react';
import qs from 'querystring'
//urlencode key=value&key=value
class Detail extends Component {
    render() {
        const {location:{state}} = this.props;
        // const {location:{search}} = this.props;
        // const obj = qs.parse(search.replace('?',""));
        console.log(this.props)
        return (
            <ul>
                <li>name:{state.name}</li>
                <li>id:{state.id}</li>
            </ul>
        );
    }
}

export default Detail;