import React, {Component} from 'react';
import qs from 'querystring'
//urlencode key=value&key=value
class Detail extends Component {
    render() {
        const {location:{search}} = this.props;
        const obj = qs.parse(search.replace('?',""));
        console.log(qs.parse(search.replace('?',"")))
        return (
            <ul>
                <li>name:{obj.name}</li>
                <li>id:{obj.id}</li>
            </ul>
        );
    }
}

export default Detail;