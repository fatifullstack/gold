import React from 'react';
import { useTheme } from "@mui/material/styles";
import ReactECharts from 'echarts-for-react';

const FunnelChart = ({ height }) => {
    const theme = useTheme();

    // Sample data for the funnel chart
    const data = [
        { value: 1000, name: 'Step 1: Visitors' },
        { value: 800, name: 'Step 2: Interested' },
        { value: 600, name: 'Step 3: Evaluated' },
        { value: 400, name: 'Step 4: Engaged' },
        { value: 200, name: 'Step 5: Converted' },
    ];

    // Configuration of the funnel chart
    const option = {
        title: {
            text: 'Funnel Chart Example',
            left: 'center',
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} ({d}%)',
        },
        series: [
            {
                name: 'Funnel',
                type: 'funnel',
                left: '10%',
                width: '80%',
                height: '70%',
                data: data,
                label: {
                    show: true,
                    position: 'inside',
                    color: theme.palette.text.primary,
                },
                itemStyle: {
                    borderColor: theme.palette.background.default,
                    borderWidth: 1,
                },
                emphasis: {
                    itemStyle: {
                        borderColor: theme.palette.primary.main,
                        borderWidth: 2,
                    },
                },
            },
        ],
    };

    return <ReactECharts style={{ height: height }} option={option} />;
};

export default FunnelChart;
