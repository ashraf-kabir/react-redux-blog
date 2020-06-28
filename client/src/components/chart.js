import _, { result, toArray } from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchChart } from '../actions/index';
import {Bar, Line, Pie, Doughnut, HorizontalBar, Polar, Radar} from 'react-chartjs-2';

class Chart extends Component {

  // state = {
  //   month1: '',
  //   data1:{}
  // }

  componentDidMount() {
      this.props.fetchChart();
      // this.props.fetchChart2();
  }

  // handleChart = async (chart) => {
  //   const fetchedData = await fetchData(chart);

  //   console.log(fetchedData);
  //   this.setState({ month1: month, data1: number_of_posts });
  // }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  // renderChart(chart) {

  //   const months = [chart.month];
  //   const nops = [chart.number_of_posts];

  //   return (
  //       <Bar
  //           data={
  //             {
  //               labels: ['Jan', 'Feb', 'Mar'],
  //               datasets:[
  //                 {
  //                   label: 'months data',
  //                   data: [
  //                     65, 54, 60
  //                   ],
  //                   backgroundColor:[
  //                     'rgba(255, 99, 132, 0.6)',
  //                     'rgba(54, 162, 235, 0.6)',
  //                     'rgba(255, 206, 86, 0.6)',
  //                     'rgba(75, 192, 192, 0.6)',
  //                     'rgba(153, 102, 255, 0.6)',
  //                     'rgba(255, 159, 64, 0.6)',
  //                     'rgba(255, 99, 132, 0.6)'
  //                   ]
  //                 }
  //               ]
  //             }
  //           }
  //           options={{
  //             title:{
  //               display:'Title',
  //               text:'Largest Cities In USA',
  //               fontSize:25
  //             },
  //             legend:{
  //               display:this.props.displayLegend,
  //               position:this.props.legendPosition
  //             }
  //           }}
  //         />
  
  //   );
  // }

  
  render() {
    // const { month1, data1 } = this.state;
    // const {post} = this.props;
    // console.log(chart);
    // const {chart} = this.props;
    const arr = toArray(this.props.charts);

    console.log(arr);

    // const arr2 = JSON.stringify(this.props.month);
    const arrayOfMonths=[];
    arr.map(ar=>arrayOfMonths.push(ar.month)); 
    console.log(arrayOfMonths);


    const arrayOfPosts=[];
    arr.map(ar=>arrayOfPosts.push(ar.number_of_posts)); 
    console.log(arrayOfPosts);

    // console.log(this.props.charts.length);
    // const charts2 = this.props.charts;
    // console.log(arr2);
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-3">Welcome!</h1>
          <p>This is a MERN stack based fully functioning blog system. Here, you can share your experience and ideas with other people.</p>
          <p><Link className="btn btn-primary btn-lg" to="/posts" role="button">Look the blog posts &raquo;</Link></p>
        </div>

        <div className="chart">
          <div className="mb-5">
            <Bar
              data={
                {
                  labels: arrayOfMonths,
                  datasets:[
                    {
                      label: 'posts data',
                      data: arrayOfPosts,
                      backgroundColor:["#845EC2", "#D65DB1","#759aab","#fa7e61","#59656f","#FFFF00","#17bebb","#d17a22","#ADFF2F","#c86fc9","#faa613","#00896F"]
                    }
                  ]
                }
              }
              options={
                {
                  title:{
                    display:'Title',
                    text:'Monthly Posts Data',
                    fontSize:25
                  },
                  legend:{
                    display:this.props.displayLegend,
                    position:this.props.legendPosition
                  },
                  scales: {
                    yAxes: [{
                      ticks: {
                        beginAtZero: true
                      }
                    }]
                  }
                }
              }
            />
          </div>

        <Line
          data={
            {
              labels: arrayOfMonths,
              datasets: [{ 
                  data: arrayOfPosts,
                  label: "Posts Data",
                  borderColor: "#3e95cd",
                  fill: true
                }
              ]
            }
          }
          options= {
            {
              title: {
                display: true,
                text: 'Monthly Posts Data'
              },
              scales: {
                xAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          }
        />

        <Pie
          data={
            {
              labels: arrayOfMonths,
              datasets: [
                {
                  label: "Posts Data",
                  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2"],
                  data: arrayOfPosts
                }
              ]
            }
          }
          options={
            {
              title: {
                display: true,
                text: 'Monthly Posts Data'
              }
            }
          }
        />

        <Doughnut
          data={
            {
              labels: arrayOfMonths,
              datasets: [
                {
                  label: "Posts Data",
                  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2"],
                  data: arrayOfPosts
                }
              ]
            }
          }
          options={
            {
              title: {
                display: true,
                text: 'Monthly Posts Data'
              }
            }
          }
        />

        <HorizontalBar
        data={
          {
            labels: arrayOfMonths,
            datasets: [
              {
                label: "Posts Data",
                backgroundColor:["#845EC2", "#D65DB1","#759aab","#fa7e61","#59656f","#FFFF00","#17bebb","#d17a22","#ADFF2F","#c86fc9","#faa613","#00896F"],
                data: arrayOfPosts
              }
            ]
          }
        }
        options={
          {
            legend: { display: false },
            title: {
              display: true,
              text: 'Monthly Posts Data'
            },
            scales: {
              xAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        }
        />

        <Polar
          data={
              {
              labels: arrayOfMonths,
              datasets: [
                {
                  label: "Posts Data",
                  backgroundColor: ["#845EC2", "#D65DB1","#759aab","#fa7e61","#59656f","#FFFF00","#17bebb","#d17a22","#ADFF2F","#c86fc9","#faa613","#00896F"],
                  data: arrayOfPosts
                }
              ]
            }
          }
          options={
            {
              title: {
                display: true,
                text: 'Monthly Posts Data'
              }
            }
          }
        />
        
        <Radar
          data={
              {
              labels: arrayOfMonths,
              datasets: [
                {
                  label: "Posts Data",
                  fill: true,
                  backgroundColor: "rgba(179,181,198,0.2)",
                  borderColor: "rgba(255,99,132,1)",
                  pointBorderColor: "#fff",
                  pointBackgroundColor: "rgba(179,181,198,1)",
                  data: arrayOfPosts
                }
              ]
            }
          }
          options={
            {
              title: {
                display: true,
                text: 'Monthly Posts Data'
              }
            }
          }
        />

        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { charts: state.charts };
}

export default connect(mapStateToProps, { fetchChart })(Chart);