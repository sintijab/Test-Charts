import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';

import styles from './index.scss';

export default class Chart extends Component {
  componentDidMount() {
    const { data } = this.props;
    if (Object.keys(data).length) {
      this.highChartsRender();
    }
  }

  componentDidUpdate() {
    this.highChartsRender();
  }

  highChartsRender() {
    const { data, hasSmallViewPorts } = this.props;
    const { chart } = data;
    const chartSeries = chart.data.series.map((item, index) => ({
      name: data.bullets[index] ? data.bullets[index].text : '',
      data: item,
      color: index === 0 ? '#3EDA83' : '#FF0000',
    }));
    Highcharts.chart({
      chart: {
        type: 'column',
        renderTo: 'vulnerability-chart',
        ...!hasSmallViewPorts && { width: 700 },
        ...!hasSmallViewPorts && { height: 400 },
        ...hasSmallViewPorts && { width: window.innerWidth },
      },
      title: {
        floating: true,
        text: '',
      },
      xAxis: {
        categories: chart.data.labels,
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: '',
        },
      },
      plotOptions: {
        column: {
          pointPadding: 0.1,
          borderWidth: 0,
        },
      },
      legend: {
        enabled: false,
      },
      series: chartSeries,
    });
  }

  render() {
    return (
      <div id="vulnerability-chart" className={styles.chart} />
    );
  }
}

Chart.propTypes = {
  data: PropTypes.objectOf(PropTypes.oneOfType(
    [PropTypes.array, PropTypes.object],
  )),
  hasSmallViewPorts: PropTypes.bool,
};

Chart.defaultProps = {
  data: {},
  hasSmallViewPorts: false,
};
