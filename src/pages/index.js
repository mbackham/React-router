import React, { Component } from "react";
import {Link} from 'react-router-dom'
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { cid: 555, title: "koma blog" },
        { cid: 666, title: "asd applu" },
        { cid: 777, title: "sdf  banana" },
      ],
    };
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((item, index) => {
            return <li key={index}>
                <Link to={'/list/'+item.cid}>{item.title}</Link>
                </li>;
          })}
        </ul>
        <h2>技术胖</h2>
      </div>
    );
  }
}

export default Index;
