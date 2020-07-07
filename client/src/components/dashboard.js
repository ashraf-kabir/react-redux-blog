import _, { result, toArray } from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchChart, fetchChart2, fetchTestData } from '../actions/index';
import {
  Bar,
  Line,
  Pie,
  Doughnut,
  HorizontalBar,
  Polar,
  Radar,
} from 'react-chartjs-2';

import { Card, Button } from 'react-bootstrap';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchChart();
    this.props.fetchChart2();
    this.props.fetchTestData();
  }

  componentDidUpdate() {}

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
    location: 'City',
  };

  render() {
    // chart 1
    const arrayOfMonths = [];
    const arrayOfPosts = [];
    const arr = toArray(this.props.charts);
    // console.log(arr);
    arr.map((ar) => arrayOfMonths.push(ar.month));
    // console.log(arrayOfMonths);
    arr.map((ar) => arrayOfPosts.push(ar.number_of_posts));
    // console.log(arrayOfPosts);

    // chart 2
    const arrayOfMonths2 = [];
    const arrayOfPosts2 = [];
    const arr2 = toArray(this.props.chart2);
    // console.log(arr2);
    arr2.map((ar2) => arrayOfMonths2.push(ar2.month2));
    // console.log(arrayOfMonths2);
    arr2.map((ar2) => arrayOfPosts2.push(ar2.number_of_posts2));
    // console.log(arrayOfPosts2);

    // testdata
    const tdata = toArray(this.props.testdata);
    // console.log(tdata);
    var tdata2 = tdata;
    // arr = JSON.parse(JSON.stringify(arr).replace(/\s(?=\w+":)/g, ""));
    // tdata2 = JSON.parse(JSON.stringify(tdata).replace(/\s/g, ""));
    tdata2 = JSON.parse(JSON.stringify(tdata).replace(/\s/g, ''));
    // console.log(tdata);
    // console.log(tdata2);

    var totalImpressions = [];
    tdata2.map((ar5) =>
      totalImpressions.push(ar5.LifetimePostTotalImpressions)
    );
    // console.log(totalImpressions);

    const type1 = [];
    tdata2.map((ar9) => type1.push(ar9.Type));


    // table
    buildTable(tdata2);

    var totalReach2 = [];
    var posted = [];

    tdata2.map((ar7) => totalReach2.push(ar7.LifetimePostTotalReach));
    tdata2.map((ar8) => posted.push(ar8.Posted));

    function buildTable(tdata2) {
      var table = document.getElementById('myTable');
      const totalReach = [];
      const totalOrganicReach = [];
      const type = [];

      tdata2.map((ar3) => totalReach.push(ar3.LifetimePostTotalReach));
      tdata2.map((ar4) => totalOrganicReach.push(ar4.LifetimePostorganicreach));
      tdata2.map((ar9) => type.push(ar9.Type));

      // console.log(totalReach);
      // console.log(totalOrganicReach);
      for (var i = 0; i < tdata2.length; i++) {
        var row = `<tr>
                      <td>${i}</td>
                      <td>${tdata2[i].LifetimePostTotalReach}</td>
                      <td>${tdata2[i].LifetimePostorganicreach}</td>
                      <td>${tdata2[i].Type}</td>
                  </tr>`;
        table.innerHTML += row;
      }
    }

    // scorecard: sum & avg
    var sumOfTotalImpressions = 0;
    var avgOfTotalImpressions = 0;
    // console.log(totalImpressions);

    for (var j = 0; j < tdata2.length; j++) {
      //loop through the array
      sumOfTotalImpressions += tdata2[j].LifetimePostTotalImpressions;
      //Do the math!
    }

    avgOfTotalImpressions = sumOfTotalImpressions / tdata2.length;

    console.log(avgOfTotalImpressions);

    function getRandomColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    return (
      <div className='row'>
        <div className='col-md-12'>
          <div className='jumbotron'>
            <h1 className='display-3'>Welcome! to dashboard</h1>
            <p>
              This is a MERN stack based fully functioning blog system. Here,
              you can share your experience and ideas with other people.
            </p>
            <p>
              <Link
                className='btn btn-primary btn-lg'
                to='/posts'
                role='button'
              >
                Look the blog posts &raquo;
              </Link>
            </p>
          </div>
        </div>

        <div className='col-md-6 mb-4'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Avg Post Impressions</Card.Title>
              <Card.Text>{avgOfTotalImpressions}</Card.Text>
              <Button variant='primary'>Test Button</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='col-md-12'>
          <div className='mb-5'>
            <Line
              data={{
                labels: posted,
                datasets: [
                  {
                    data: totalReach2,
                    label: 'LifetimePostTotalReach Data',
                    borderColor: '#3e95cd',
                    fill: true,
                  },
                ],
              }}
              options={{
                title: {
                  display: true,
                  text: 'Lifetime Post Total Reach',
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
              }}
            />
          </div>
        </div>

        <div className='col-md-12'>
          <div className='mb-5'>
            <Bar
              data={{
                labels: posted,
                datasets: [
                  {
                    label: 'posts data',
                    data: totalReach2,
                    backgroundColor: [],
                  },
                ],
              }}
              options={{
                title: {
                  display: 'Title',
                  text: 'Monthly Posts Data',
                  fontSize: 25,
                },
                legend: {
                  display: true,
                  position: 'top',
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
              }}
            />
          </div>
        </div>

        <div className='col-md-12'>
          <div className='mb-5'>
            <Pie
              data={{
                labels: type1,
                datasets: [
                  {
                    label: 'Posts Data',
                    backgroundColor: [
                      '#3e95cd',
                      '#8e5ea2',
                      '#3cba9f',
                      '#e8c3b9',
                      '#c45850',
                      '#3e95cd',
                      '#8e5ea2',
                      '#3cba9f',
                      '#e8c3b9',
                      '#c45850',
                      '#3e95cd',
                      '#8e5ea2',
                    ],
                    data: [20, 15],
                  },
                ],
              }}
              options={{
                title: {
                  display: true,
                  text: 'Monthly Posts Data',
                },
              }}
            />
          </div>
        </div>

        <div className='col-md-12'>
          <table className='table table-striped'>
            <tr className='bg-info'>
              <th>Count</th>
              <th>Lifetime Post Total Reach</th>
              <th>Lifetime Post organic reach</th>
              <th>Type</th>
            </tr>
            <tbody id='myTable'></tbody>
          </table>
        </div>

        <div className='col-md-6'>
          <div className='mb-5'>
            <Bar
              data={{
                labels: arrayOfMonths,
                datasets: [
                  {
                    label: 'posts data',
                    data: arrayOfPosts,
                    backgroundColor: [
                      '#845EC2',
                      '#D65DB1',
                      '#759aab',
                      '#fa7e61',
                      '#59656f',
                      '#FFFF00',
                      '#17bebb',
                      '#d17a22',
                      '#ADFF2F',
                      '#c86fc9',
                      '#faa613',
                      '#00896F',
                    ],
                  },
                ],
              }}
              options={{
                title: {
                  display: 'Title',
                  text: 'Monthly Posts Data',
                  fontSize: 25,
                },
                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition,
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
              }}
            />
          </div>
        </div>

        <div className='col-md-6'>
          <div className='mb-5'>
            <Line
              data={{
                labels: arrayOfMonths,
                datasets: [
                  {
                    data: arrayOfPosts,
                    label: 'Posts Data',
                    borderColor: '#3e95cd',
                    fill: true,
                  },
                ],
              }}
              options={{
                title: {
                  display: true,
                  text: 'Monthly Posts Data',
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
              }}
            />
          </div>
        </div>

        <div className='col-md-6'>
          <div className='mb-5'>
            <Pie
              data={{
                labels: arrayOfMonths,
                datasets: [
                  {
                    label: 'Posts Data',
                    backgroundColor: [
                      '#3e95cd',
                      '#8e5ea2',
                      '#3cba9f',
                      '#e8c3b9',
                      '#c45850',
                      '#3e95cd',
                      '#8e5ea2',
                      '#3cba9f',
                      '#e8c3b9',
                      '#c45850',
                      '#3e95cd',
                      '#8e5ea2',
                    ],
                    data: arrayOfPosts,
                  },
                ],
              }}
              options={{
                title: {
                  display: true,
                  text: 'Monthly Posts Data',
                },
              }}
            />
          </div>
        </div>

        <div className='col-md-6'>
          <div className='mb-5'>
            <Bar
              data={{
                labels: arrayOfMonths2,
                datasets: [
                  {
                    label: 'posts data',
                    data: arrayOfPosts2,
                    backgroundColor: [
                      '#845EC2',
                      '#D65DB1',
                      '#759aab',
                      '#fa7e61',
                      '#59656f',
                      '#FFFF00',
                      '#17bebb',
                      '#d17a22',
                      '#ADFF2F',
                      '#c86fc9',
                      '#faa613',
                      '#00896F',
                    ],
                  },
                ],
              }}
              options={{
                title: {
                  display: 'Title',
                  text: 'Monthly Posts Data',
                  fontSize: 25,
                },
                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition,
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
              }}
            />
          </div>
        </div>

        <div className='col-md-6'>
          <div className='mb-5'>
            <Doughnut
              data={{
                labels: arrayOfMonths,
                datasets: [
                  {
                    label: 'Posts Data',
                    backgroundColor: [
                      '#3e95cd',
                      '#8e5ea2',
                      '#3cba9f',
                      '#e8c3b9',
                      '#c45850',
                      '#3e95cd',
                      '#8e5ea2',
                      '#3cba9f',
                      '#e8c3b9',
                      '#c45850',
                      '#3e95cd',
                      '#8e5ea2',
                    ],
                    data: arrayOfPosts,
                  },
                ],
              }}
              options={{
                title: {
                  display: true,
                  text: 'Monthly Posts Data',
                },
              }}
            />
          </div>
        </div>

        <div className='col-md-6'>
          <div className='mb-5'>
            <HorizontalBar
              data={{
                labels: arrayOfMonths,
                datasets: [
                  {
                    label: 'Posts Data',
                    backgroundColor: [
                      '#845EC2',
                      '#D65DB1',
                      '#759aab',
                      '#fa7e61',
                      '#59656f',
                      '#FFFF00',
                      '#17bebb',
                      '#d17a22',
                      '#ADFF2F',
                      '#c86fc9',
                      '#faa613',
                      '#00896F',
                    ],
                    data: arrayOfPosts,
                  },
                ],
              }}
              options={{
                legend: { display: false },
                title: {
                  display: true,
                  text: 'Monthly Posts Data',
                },
                scales: {
                  xAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
              }}
            />
          </div>
        </div>

        <div className='col-md-6'>
          <div className='mb-5'>
            <Polar
              data={{
                labels: arrayOfMonths,
                datasets: [
                  {
                    label: 'Posts Data',
                    backgroundColor: [
                      '#845EC2',
                      '#D65DB1',
                      '#759aab',
                      '#fa7e61',
                      '#59656f',
                      '#FFFF00',
                      '#17bebb',
                      '#d17a22',
                      '#ADFF2F',
                      '#c86fc9',
                      '#faa613',
                      '#00896F',
                    ],
                    data: arrayOfPosts,
                  },
                ],
              }}
              options={{
                title: {
                  display: true,
                  text: 'Monthly Posts Data',
                },
              }}
            />
          </div>
        </div>

        <div className='col-md-6'>
          <div className='mb-5'>
            <Radar
              data={{
                labels: arrayOfMonths,
                datasets: [
                  {
                    label: 'Posts Data',
                    fill: true,
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    data: arrayOfPosts,
                  },
                ],
              }}
              options={{
                title: {
                  display: true,
                  text: 'Monthly Posts Data',
                },
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    charts: state.charts,
    chart2: state.chart2,
    testdata: state.testdata,
  };
}

export default connect(mapStateToProps, {
  fetchChart,
  fetchChart2,
  fetchTestData,
})(Dashboard);
