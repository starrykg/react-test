import React, {Component} from 'react';

class App extends Component {
    state = {show: false};

    showSon(){
        if (this.state.show){
            return <Son name="test" />
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({show : !this.state.show})}>切换子组件的显示状态</button>
                {this.showSon()}
            </div>
        );
    }
}

class Son extends Component {
    state = {count : 1};
    //生命周期函数
    //组件在生成 更新 销毁 过程中，都会调用固定的函数

    componentDidMount() {
        //mount 挂载 代表组件首次生成病展示出来
        console.log("componentDidMount 触发")

        //利用成员属性保存定时器：成员属性可以跨方法使用
        this.timer = setInterval(() => {
            this.setState({count: this.state.count + 1})
        }, 1000);
        //通常载此方法中发送网络请求，获取数据
    }

    componentWillUnmount() {
        //unmount
        console.log("componentWillUnmount 触发")
        //通常载此方法销毁资源：例如定时器
        clearInterval(this.timer);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //state 参数state是原值
        console.log("prevProps:",prevProps, "props", this.props)
        console.log("prevState:",prevState, "state",this.state)
        //console.log("snapshot:",snapshot)
    }

    //面试经常问： 如何提高react的渲染效率
    //答：通過本函數，設計一些策略，什麼時候需要刷新什麼時候不需要刷新
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        //通过次方法的返回值，来决定页面需不需要刷新

        if (nextState.count % 2 === 0){
            //代表偶數不會刷新到頁面上
            return false;
        }else{
            return true;
        }
    }

    render() {
        return (
            <h1>我是子组件:{this.state.count}</h1>
        );
    }
}

export default App;