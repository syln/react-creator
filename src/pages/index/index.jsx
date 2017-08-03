import React from 'react';
import ReactDOM from 'react-dom';
import './style.less';
import imgLoad from '../../assets/images/ab.jpg'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"keyword": ""};
    this.refreshKeyword = this.refreshKeyword.bind(this);
  }

  refreshKeyword(name) {
    this.setState({"keyword": name});
  }

  render() {
    return (
      <div className="container">
        <section className="jumbotron">
          <h3 className="jumbotron-heading">脚手架使用说明</h3>
          <pre>
            <h3>运行命令</h3>
            <p>npm start</p>
            <p>npm run build</p>
          </pre>
          <pre>
            <h3>设置代理</h3>
            <p>在package.json中设置proxy</p>
          </pre>
           <pre>
            <h3>静态资源文件夹</h3>
            <p>src/assets</p>
            <img src={imgLoad} alt=""/>
          </pre>
          <pre>
            <h3>打包后静态资源路径前缀设置</h3>
            <p>package.json --> homepage</p>
          </pre>
        </section>
      </div>
    );
  }
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);