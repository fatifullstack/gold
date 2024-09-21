import React from 'react';
import { useTheme } from "@mui/material/styles";
import ReactECharts from 'echarts-for-react';

const BoxplotChart = ({ height }) => {
    const theme = useTheme();

    // Sample data for the boxplot
    const data = [
        [850, 900, 950, 1000, 1050], // Data for Category A
        [800, 850, 900, 950, 1000],  // Data for Category B
        [750, 800, 850, 900, 950],    // Data for Category C
        [700, 750, 800, 850, 900],    // Data for Category D
    ];

    // Configuration of the boxplot chart
    const option = {
        title: {
            text: 'Boxplot Example',
            left: 'center',
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                return `Category: ${params[0].name}<br/>
                        Min: ${params[0].data[0]}<br/>
                        Q1: ${params[0].data[1]}<br/>
                        Median: ${params[0].data[2]}<br/>
                        Q3: ${params[0].data[3]}<br/>
                        Max: ${params[0].data[4]}`;
            },
        },
        xAxis: {
            type: 'category',
            data: ['Category A', 'Category B', 'Category C', 'Category D'],
            axisLine: {
                lineStyle: {
                    color: theme.palette.text.secondary,
                },
            },
            axisLabel: {
                color: theme.palette.text.secondary,
            },
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: theme.palette.text.secondary,
                },
            },
            axisLabel: {
                color: theme.palette.text.secondary,
            },
        },
        series: [
            {
                name: 'Boxplot',
                type: 'boxplot',
                data: data,
                tooltip: {
                    formatter: function (params) {
                        return `Category: ${params.name}<br/>
                                Min: ${params.data[0]}<br/>
                                Q1: ${params.data[1]}<br/>
                                Median: ${params.data[2]}<br/>
                                Q3: ${params.data[3]}<br/>
                                Max: ${params.data[4]}`;
                    },
                },
            },
        ],
    };

    return <ReactECharts style={{ height: height }} option={option} />;
};

export default BoxplotChart;
