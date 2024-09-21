import React from 'react';
import { useTheme } from "@mui/material/styles";
import ReactECharts from 'echarts-for-react';

const ScatterChart = ({ height }) => {
    const theme = useTheme();

    // Generate random data for the scatter plot
    const generateRandomData = (numPoints) => {
        return Array.from({ length: numPoints }, () => [
            Math.random() * 100, // X value
            Math.random() * 100  // Y value
        ]);
    };

    const data = generateRandomData(50); // Generate 50 random points

    // Configuration of the scatter chart
    const option = {
        title: {
            text: 'Scatter Chart Example',
            left: 'center',
        },
        tooltip: {
            trigger: 'item',
            formatter: 'X: {c[0]}<br/>Y: {c[1]}',
        },
        xAxis: {
            name: 'X Axis',
            type: 'value',
            splitLine: {
                show: false,
            },
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
            name: 'Y Axis',
            type: 'value',
            splitLine: {
                show: false,
            },
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
                name: 'Scatter',
                type: 'scatter',
                data: data,
                itemStyle: {
                    color: theme.palette.primary.main,
                },
            },
        ],
    };

    return <ReactECharts style={{ height: height }} option={option} />;
};

export default ScatterChart;
