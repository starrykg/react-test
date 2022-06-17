import React, {Component} from 'react';



//js 文件 webstorm 提示react的 js
class App extends Component {

  state = {num : 1, isLogin: false};

  showLevel(){
      //此方法刷新时就触发
      //判断的条件是和state相关，有关系，setState自动刷新
      if (this.state.num == 1) return <h3>您的称号是黑铁</h3>
      if (this.state.num == 2) return <h3>您的称号是黄金</h3>
      if (this.state.num == 3) return <h3>您的称号是白银</h3>
      if (this.state.num == 4) return <h3>您的称号是钻石</h3>
  }

  showUser(){
      if (this.state.isLogin){
          return (
              <div>
                  欢迎，xxx
                  <button onClick={() => this.setState({isLogin : false})}>退出</button>|<a href="">用户中心</a>
              </div>
          )
      }else{
          return (
              <div>
                  <button onClick={() => this.setState({isLogin : true})}>登录</button>|<button>注册</button>
              </div>
          )
      }
  }

  render() {
    return (
        <div>
            <div>当前等级:{this.state.num}</div>
            <div onClick={() => this.setState({num: this.state.num + 1})}>增加</div>
            {this.showLevel()}
            <hr />
            {this.showUser()}
        </div>
    );
  }
}

export default App;



