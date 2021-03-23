import React, {Component} from 'react';



class TemInput extends Component {

    changes = (e)=>{
        console.log('aa???',e.target.value)
        this.props.onChange1(e.target.value)
    }
    render() {
        return (
            <div>
                <input type="text" value={this.props.tem} onChange={this.changes}/>
            </div>
        );
    }
}

export default TemInput;