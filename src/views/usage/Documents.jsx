import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import solidGauge from 'highcharts/modules/solid-gauge';
import highchartsMore from 'highcharts/highcharts-more.js';

// Initialize the modules
highchartsMore(Highcharts);
solidGauge(Highcharts);

// Sample data
const sampleData = {
    income: 9882,
    percentages: [
        { value: 24, color: '#f7a35c' },
        { value: 28, color: '#90ed7d' },
        { value: 82, color: '#7cb5ec' }
    ]
};

const generateChartOptions = (data) => {
    return {
        chart: {
            type: 'solidgauge',
            height: '200px', // Adjust this value as needed
            margin: [0, 0, 0, 0],
            spacing: [0, 0, 0, 0]
        },
        title: null,
        tooltip: {
            enabled: false
        },
        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: [
                {
                    outerRadius: '112%',
                    innerRadius: '88%',
                    backgroundColor: Highcharts.color(data.percentages[0].color).setOpacity(0.3).get(),
                    borderWidth: 0
                },
                {
                    outerRadius: '87%',
                    innerRadius: '63%',
                    backgroundColor: Highcharts.color(data.percentages[1].color).setOpacity(0.3).get(),
                    borderWidth: 0
                },
                {
                    outerRadius: '62%',
                    innerRadius: '38%',
                    backgroundColor: Highcharts.color(data.percentages[2].color).setOpacity(0.3).get(),
                    borderWidth: 0
                }
            ]
        },
        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },
        series: data.percentages.map((item, index) => ({
            data: [
                {
                    color: item.color,
                    radius: `${112 - index * 25}%`,
                    innerRadius: `${88 - index * 25}%`,
                    y: item.value
                }
            ]
        })),
        credits: {
            enabled: false
        }
    };
};

const Documents = () => {
    const options = generateChartOptions(sampleData);

    return (
        <Card style={{ padding: '16px' }}>
            <Typography variant="h6">Documents</Typography>
            <Box mt={2} display="flex" justifyContent="center" style={{ height: '200px' }}>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </Box>
            <Typography variant="h5" align="center">
                Income
            </Typography>
            <Typography variant="h4" align="center" fontWeight="bold">
                {sampleData.income}/mo
            </Typography>
            <Box display="flex" justifyContent="center" mt={2}>
                {sampleData.percentages.map((item, index) => (
                    <Box key={index} mx={1} textAlign="center">
                        <Box
                            width={30}
                            height={30}
                            bgcolor="white"
                            borderRadius="50%"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            border={`2px solid ${item.color}`}
                        >
                            <Typography variant="body2" fontWeight="bold" style={{ color: item.color }}>
                                {item.value}%
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Card>
    );
};
export default Documents;
