import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const CreditUsage = () => {
    const options = {
        title: {
            text: null
        },
        xAxis: {
            categories: Array.from({ length: 14 }, (_, i) => i + 1)
        },
        yAxis: {
            title: {
                text: 'Usage'
            }
        },
        series: [
            {
                name: 'Usage',
                data: [10, 15, 9, 18, 12, 10, 20, 14, 16, 12, 17, 19, 15, 16],
                type: 'column'
            }
        ],
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        }
    };

    return (
        <Card style={{ padding: '16px' }}>
            <Typography variant="h6">Usage By Model</Typography>
            <Typography variant="h4">20,245</Typography>
            <Typography variant="body2" color="green">
                ↑ 1.2% vs last year
            </Typography>
            <Box mt={2}>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </Box>
        </Card>
    );
};

export default CreditUsage;
