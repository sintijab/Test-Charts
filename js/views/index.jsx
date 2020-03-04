import React, { Component } from "react";
import axios from 'axios';
import ViewContainer from '../templates/ViewContainer';
import { requestData } from '../utils/functions';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: [],
    }
    this.getChartData = this.getChartData.bind(this);
  }

  getChartData() {
    requestData('data.json').then((res) => {
        if (res && res.data) {
          this.setState({ chartData: res.data });
        }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  componentDidMount() {
    this.getChartData();
  }

  render() {
    const { chartData } = this.state;
	  return(
      <div>
        <ViewContainer data={chartData} />
      </div>
	  )
  }
}
