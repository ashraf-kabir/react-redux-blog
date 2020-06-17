import _, { result, toArray } from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchChart } from '../actions/index';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {

  componentWillMount() {
      this.props.fetchChart();
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }


  renderChart(chart) {
    // var months = [chart.month];
    // var nops = [chart.number_of_posts];
    const months = [chart.month];
    // var months2 = JSON.parse(months);
    const nops = [chart.number_of_posts];
    // var nops2 = JSON.parse(nops);
    console.log(months);
    // console.log(months2);
    console.log(nops);
    // console.log(nops2);
    return (
      <div key={chart._id}>
        <Bar
            data={
              {
                labels: months,
                datasets:[
                  {
                    label: 'months data',
                    data: nops,
                    backgroundColor:[
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(153, 102, 255, 0.6)',
                      'rgba(255, 159, 64, 0.6)',
                      'rgba(255, 99, 132, 0.6)'
                    ]
                  }
                ]
              }
            }
            options={{
              title:{
                display:'Title',
                text:'Largest Cities In USA',
                fontSize:25
              },
              legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
              }
            }}
          />
      </div>
    );
  }

  
  render() {
    // const {post} = this.props;
    // console.log(chart);
    const {chart} = this.props;
    console.log(chart);
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-3">Welcome!</h1>
          <p>This is a MERN stack based fully functioning blog system. Here, you can share your experience and ideas with other people.</p>
          <p><Link className="btn btn-primary btn-lg" to="/posts" role="button">Look the blog posts &raquo;</Link></p>
        </div>
        {/* chart */}

        <div className="chart">

          {_.map(this.props.charts, chart => {
              return this.renderChart(chart);
          })}

        </div>

      </div>
    );
  }
}


function mapStateToProps(state) {
  return { charts: state.charts };
}

export default connect(mapStateToProps, { fetchChart })(Chart);