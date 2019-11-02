import React from 'react';
import {
    AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, LineChart
  } from 'recharts';
import PieChart from 'react-minimal-pie-chart';

const style = {
    container : {
        margin : 10,
        display : 'grid',
        gridTemplateAreas : 
        `
        'x y'
        'b b'
        `
    },
    data1 : {
        gridArea : 'x'
    }
}

const data1 = [
    {
      name: 'Oct 29', uv : 3000, pv: 1398, z: 2100, amt: 2210,
    },
    {
      name: 'Oct 30', uv: 2000, pv: 9800, z: 2110,amt: 2290,
    },
    {
      name: 'Oct 31', uv: 2780, pv: 3908, z: 2200, amt: 2000,
    },
    {
      name: 'Nov 1', uv: 1890, pv: 4800,z: 2900, amt: 2181,
    },
    {
      name: 'Nov 2', uv: 2390, pv: 3800, z: 2650,amt: 2500,
    },
    {
      name: 'Nov 3', uv: 3490, pv: 4300, z: 2500,amt: 2100,
    },
  ];

  const data2 = [
    {
      name: 'May', electronic: 4000, clothing: 2400, amt: 2400,
    },
    {
      name: 'June', electronic: 3000, clothing: 1398, amt: 2210,
    },
    {
      name: 'July', electronic: 2000, clothing: 9800, amt: 2290,
    },
    {
      name: 'Aug', electronic: 2780, clothing: 3908, amt: 2000,
    },
    {
      name: 'Sept', electronic: 1890, clothing: 4800, amt: 2181,
    },
    {
      name: 'Oct', electronic: 2390, clothing: 3800, amt: 2500,
    },
    {
      name: 'Nov', electronic: 3490, clothing: 4300, amt: 2100,
    },
  ];

  const data3 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 400 },
    { name: 'Group F', value: 300 },
    { name: 'Group G', value: 300 },
    { name: 'Group H', value: 200 },
  ];

  const data4 = [
    {
      name: 'May', China: 4000, Thailand: 4300, amt: 2400,
    },
    {
      name: 'June', China: 3000, Thailand: 1398, amt: 2210,
    },
    {
      name: 'July', China: 2000, Thailand: 1800, amt: 2290,
    },
    {
      name: 'Aug', China: 2780, Thailand: 3908, amt: 2000,
    },
    {
      name: 'Sept', China: 1890, Thailand: 4800, amt: 2181,
    },
    {
      name: 'Oct', China: 2390, Thailand: 3800, amt: 2500,
    },
    {
      name: 'Nov', China: 3490, Thailand: 2400, amt: 2100,
    },
  ];


const Analytics = () => {
    return(
        <div style={style.container}>
            <div style={style.data1}>
                <h3>Documents submitted</h3>
                <AreaChart width={650} height={250} data={data1}
                margin={{ top: 0,right : 0, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorZ" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff3333" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ff6666" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                <Area type="monotone" dataKey="z" stroke="#DC143C" fillOpacity={1} fill="url(#colorZ)" />
                </AreaChart>
            </div>
            <div style={{gridArea : 'y'}}>
                <h3>Goods sold type</h3>
                <BarChart
                    width={500}
                    height={300}
                    data={data2}
                    margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="electronic" stackId="a" fill="#8884d8" />
                    <Bar dataKey="clothing" stackId="a" fill="#82ca9d" />
                </BarChart>
            </div>
            <div style={{gridArea : 'b', display : 'grid', gridTemplateColumns : '25% 75%'}}>
                <div style={{width : 250, height : 250}}>
                    <h3>Insured partners</h3>
                    <br/>
                    <PieChart
                    data={[
                        { title: 'One', value: 10, color: '#8884d8' },
                        { title: 'Two', value: 15, color: '#82ca9d' },
                        { title: 'Three', value: 20, color: '#DC143C' },
                    ]}
                    />
                </div>
                <div>
                    <h3>Hong Kong top export destinations November 2019</h3>
                    <LineChart
                        width={850}
                        height={300}
                        data={data4}
                        margin={{
                        top: 0, right: 0, left: 0, bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="China" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="Thailand" stroke="#82ca9d" />
                    </LineChart>
                </div>
            </div>

        </div>
    );
}

export default Analytics;