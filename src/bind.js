import React, {Component} from 'react';

class App extends Component {
    //双向数组绑定的值：会变化
    state = {uname: "xxxxxx", pwd : "", newPwd:"", agree: false};

    _onChange = (event) =>{
        //事件默认是DOM事件，但是react对DOM进行了处理；处理之后的事件叫同步事件
        //同步事件：当值被传入后，会自动销毁自身
        //想要打印出事件中的值则必须调用
        //event.persist();
        //persist() 调用之后才能看到打印，看到的是之前的值；支队打印有影响；对于实际数值没有关系
        //console.log(event);
        console.log(event.target.value);
        let pwd = event.target.value;
        //语法糖 {pwd ：pwd} -> {pwd}
        this.setState({pwd});
    };

    _changeAgree = (event) => {
        event.persist();
        console.log(event);
        let agree = event.target.checked;
        this.setState({agree})
    }

    render() {
        return (
            <div>
                <br/>
                {/*报错：value被指定，导致输入框只读*/}
                <input type = "text" placeholder="用户名" value={this.state.uname} readOnly/>
                <br/>
                <input type = "text" placeholder="密码" value={this.state.pwd} onChange={this._onChange} />
                <br/>
                <input type = "text" placeholder="新密码" value={this.state.newPwd} onChange={(event) => this.setState({newPwd:event.target.value})} />
                <br/>
                <div>
                    <input type="checkbox" checked={this.state.agree} onChange={this._changeAgree}/>同意协议条款
                </div>
                <br/>
                <button onClick={() => alert("登陆成功")} disabled={!this.state.agree}>登录</button>
                <br/>
            </div>
        );
    }
}

export default App;