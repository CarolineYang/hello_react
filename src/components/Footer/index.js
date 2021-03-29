import React, {Component} from 'react';

class Footer extends Component {
    changeAll = (event)=>{
        this.props.toggleAll(event.target.checked)
    }
    render() {
        const {list} = this.props;
        let count = list.reduce((pre,next)=>{return pre + (next.done?1:0)},0);

        return (
            <div className="footer">
                <input type="checkbox" checked={count==list.length?true:false} onChange={this.changeAll}/>
                <span>已完成{count}/全部{list.length}</span>
            </div>
        );
    }
}

export default Footer;