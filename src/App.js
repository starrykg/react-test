import React, {Component} from 'react';
import Axios from "axios";
import './App.css';

//react 本身不具备网络请求，与vue相同
// npm i axios
class App extends Component {
    url = "http://127.0.0.1:8080/"

    //网络请求的数据：异步 刷新

    state = {data : null};


    getData(pno){
        Axios.get(this.url + pno).then((res) => {
            console.log("zzzzzzzzzzzzzzz",res);
            this.setState({data : res});
        });
    }

    componentDidMount() {
        this.getData(1);
/*        Axios.get(this.url).then((res) => {
            console.log("zzzzzzzzzzzzzzz",res);
            this.setState({data : res})
        }
     )*/
    }

    getContent(){
        Axios.get(this.url).then((res) => {
                console.log("rrrrrrrrr",res);
                this.setState({data : res})
            }
        )
    }

    showContent(){
        console.log("xxxxxxxxx",this.state.data)
        return this.state.data.data.data.map((item, index) => {
            let pubTime = item.time * 1000;
            let date = new Date(pubTime)
            pubTime = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`

            return <div key={index} className="cell">
                {/*webpack:打包工具要求本地图片使用require来引入*/}
                <img src={require("./assets/a.jpeg")} alt=""/>
                <span>{item.title}</span>
                <span>{item.name}</span>
                <span>{pubTime}</span>
            </div>
        });
    }

    showPage(){
        let arr =[];
        console.log("xxxxxxxxxxxxxxxx",this.state.data.data.count)
        for (let i = 1; i <= this.state.data.data.count ; i++){
            arr.push(<span key={i}
                           className={this.state.data.data.pageNum === i ? "cur" : ""}
                            onClick={() => this.getData(i)}
            >{i}</span>);
        }

        return arr;
    }

    //条件渲染
    showPrev(){
        if (this.state.data.data.pageNum === 1){
            return <span className="default">上一页</span>
        }else{
            return  <span onClick={() => this.getData(this.state.data.data.pageNum - 1)}>上一页</span>
        }
    }


    //条件渲染
    showNext(){
        if (this.state.data.data.pageNum === this.state.data.data.count){
            return <span className="default">下一页</span>
        }else{
            return  <span onClick={() => this.getData(this.state.data.data.pageNum + 1)}>下一页</span>
        }
    }

    render() {
        //网络请求是异步的
        if (!this.state.data) return <div></div>;

        return (
            <div className="news">
                <div className="content">{this.showContent()}</div>
                <div className="page">
                    {this.showPrev()}
                    {this.showPage()}
                    {this.showNext()}
                </div>
            </div>
        );
    }
}

export default App;