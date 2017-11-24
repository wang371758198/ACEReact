import React, { Component } from "react";
import Grid from '../../../components/Grid';

class NavigationList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("加载之前");
  }

  componentDidMount() {
    console.log("加载完成");
  }

  componentWillReceiveProps() {}

  shouldComponentUpdate() {}

  componentWillUpdate() {}

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    return (
      <div
        className="page-content"
        style={{ height: "100%", overflow: "auto", padding: 0 }}
      >
       <Grid/>
      </div>
    );
  }
}
export default NavigationList;
