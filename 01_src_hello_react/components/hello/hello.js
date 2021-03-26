import React,{Component} from "react";
// import './hello.module.css'
import hello from './hello.module.css'
class Hello extends Component{
    render() {
        return (
            <div>
                <span className={hello.title}>title</span>
                <h1 className="hello">hello</h1>
            </div>

        )
    }
}
export default Hello