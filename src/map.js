import React, {Component} from 'react';

class App extends Component {
    names = ["aa", "bb", "cc", "dd", "ee"];

    emps = [
        {name : "ddd", age:12, phone:"188xxxxxxxx"},
        {name : "ffff", age:22, phone:"118xxxxxxxx"},
        {name : "aaa", age:33, phone:"144xxxxxxxx"},
        {name : "cccc", age:44, phone:"185xxxxxxxx"},
        {name : "ffffffff", age:55, phone:"189xxxxxxxx"},
        {name : "ggg", age:66, phone:"181xxxxxxxx"},
    ];

    //数组放jsx语法
    btns = [<button>aa</button>, <button>bb</button>, <button>cc</button>, <button>dd</button>]

    showBtns(){
        let arr = []

        this.names.forEach((item, index) =>{
            arr.push(<button key={index}>{item}</button>)
        });
        return arr;
    }

    showList(){
        let arr = []

        this.names.forEach((item, index) =>{
            arr.push(<li key={index}>{item}</li>)
        });
        return arr;
    }

    showLi(){
        let arr = []

        this.emps.forEach((item, index) =>{
            arr.push(
                <tr key={index}>
                    <td>{index}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.phone}</td>
                </tr>
            );
        });
        return arr;
    }

    showNameMap(){
        return this.names.map((item, index) => {
            return <button key={index}>{item}</button>
        });
    }

    showLiMap(){
        return this.names.map((item, index) => {
           return <li key={index}>{item}</li>
        });
    }

    showTrMap(){
        return this.emps.map((item, index) => {
            return(
                <tr key={index}>
                    <td>{index}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.phone}</td>
                </tr>
                )
        });
    }

    render() {
        return (
            <div>
                {this.showNameMap()}
                {this.showLiMap()}
                <div>{this.names}</div>
               {/* <div>{this.btns}</div>*/}
                <div>{this.showBtns()}</div>
                <div>{this.showList()}</div>
                <table border="1">
                    <thead>
                    <tr>
                        <td>序号</td>
                        <td>姓名</td>
                        <td>年龄</td>
                        <td>电话</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.showLi()}
                    {this.showTrMap()}
                    </tbody>
                </table>
            </div>
        );
    }
}



export default App;


