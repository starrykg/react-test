import React, {Component} from 'react';
import './App.css'

class App extends Component {
    state = {size : 28};

    showCss(){
        if (this.state.size < 32) {
            return "normal success";
        }
        if (this.state.size < 38) {
            return "normal warning";
        }
        if (this.state.size < 44) {
            return "normal danger";
        }
    }

    render() {
        return (
            <div>
                {/*sx语法中,风格写成对象类型*/}
                <div style={{color: "red", fontSize: this.state.size}}>hello world</div>
                <button onClick={() => this.setState({size: this.state.size + 2})}>变大</button>
                <p className = {this.showCss()}>{this.state.size}</p>
            </div>
        );
    }
}

export default App;