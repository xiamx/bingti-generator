import React from 'react';
import ReactDOM from 'react-dom';

require('bulma/css/bulma.css');
require('./style.css');

class IllnessGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {illness: 'linux'};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({illness: event.target.value});
  }
  render() {
    return (
      <div className="container">
        <h1 className="title extraspaced">
          请问我这是得了 <input onChange={this.handleChange} className="illinput" type="text" placeholder="linux"/> 病了吗?
        </h1>
        <h2 className="subtitle">
          本人实实在在一个伪 {this.state.illness}-er ，选公司，选岗位全都是以只做 {this.state.illness} 平台的事情，
          前段时间在一家公司实习，期初也是搞 {this.state.illness} 下的云计算方面的，后来年终了事情比较少，
          另外一个经理让我帮我管理下公司机房，
          我明确和他说了，．我只做 {this.state.illness} 相关的， windows 相关的服务我不管，结果这几天这个
          经理非让我调研 vsphere 的 HA ，尼玛我从心里就极度反感，跟经理说了，我不了解啊，经理来了句你学啊，
          这几天都懒得搞，随便看点文章，实验也不想做了．反正就是不想搞 windows 那套．请问我这是得了 {this.state.illness} 病了吗?
        </h2>
      </div>
    )
  }

}

ReactDOM.render(
  <section className="hero is-fullheight">
    <div className="hero-content">
      <IllnessGenerator />
    </div>
    <footer>
      <div>
        受 <a href="https://www.v2ex.com/t/254162">https://www.v2ex.com/t/254162</a> 启发
      </div>
      <div>
        Github <a href="https://github.com/xiamx">xiamx</a>
      </div>
    </footer>
  </section>
,
  document.getElementById('content')
);
