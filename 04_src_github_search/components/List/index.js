import React, {Component} from 'react';
import Item from '../Item/index'

class List extends Component {

    render() {
        const {list,isFirst,isLoading,err} = this.props;
        return (
            <div>
                {
                    isFirst?<span>欢迎你</span>:
                        isLoading?<span>Loading...</span>:
                            err?<span>{err}</span>:
                    list.map((value)=>{
                        return (<Item {...value} key={value.id}></Item>)
                    })
                }

            </div>
        );
    }
}

export default List;