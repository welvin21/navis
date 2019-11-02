import React from 'react';
import PieChart from 'react-minimal-pie-chart';

const Charts = (props) => {
    const { progress } = props;
    return(
        <PieChart
            data={[
                { label: 'One', value: progress, color: '#00b300' },
            ]}
            style={{height : 250, width : 250}}
            animate = {true} 
            lineWidth = {25}
            label
            labelPosition = {0}
            totalValue = {100}
        />
    );
}

export default Charts