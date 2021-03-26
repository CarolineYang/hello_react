import './App.css';
import React from 'react'
import Hello from "./components/hello/hello";
import Welcome from "./components/Welcome";
import TemInput from "./components/TemInput";
class App extends React.Component {
    state = {
        typea:'c',
        tem:''
    }
    changes1 = (a)=>{
        console.log('ww',a)
        this.setState({
            typea:'c',
            tem: a
        })
    }
    changes2 = (b)=>{
        this.setState({
            typea:'d',
            tem: b
        })
    }
    render() {
        let a = 0,b=0
        if(this.state.typea==="c"){
            a = Number.isNaN(parseInt(this.state.tem)) ? '' : parseInt(this.state.tem)
        }else{
            a = Number.isNaN(parseInt(this.state.tem)) ? '' : parseInt(this.state.tem)
        }
        if(this.state.typea==="d") {
            b = Number.isNaN(parseInt(this.state.tem)) ? '' : parseInt(this.state.tem) + 2

        }else{
            b = Number.isNaN(parseInt(this.state.tem)) ? '' : parseInt(this.state.tem)+3
        }
        console.log('render',this.state.tem)
        return (
            <div className="App">
                <Hello/>
                <Welcome></Welcome>
                <TemInput typea='c' tem={a} onChange1={this.changes1}></TemInput>
                <TemInput typea='d' tem={b} onChange1={this.changes2}></TemInput>
            </div>
        )
    }
}
export default App;
