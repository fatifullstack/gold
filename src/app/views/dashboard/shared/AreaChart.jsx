import React from 'react';
import { useTheme } from "@mui/material/styles";
import ReactECharts from 'echarts-for-react';

const AreaChart = ({ height }) => {
    const theme = useTheme();

    // Sample data for the area chart
    const xData = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const seriesData = [
        {
            name: 'Sales',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            data: [120, 200, 150, 80, 70, 110, 130],
            itemStyle: {
                color: theme.palette.primary.main,
            },
        },
        {
            name: 'Expenses',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            data: [50, 80, 60, 70, 60, 90, 100],
            itemStyle: {
                color: theme.palette.secondary.main,
            },
        },
    ];

    // Configuration of the area chart
    const option = {
        title: {
            text: 'Area Chart Example',
            left: 'center',
        },
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['Sales', 'Expenses'],
            bottom: 0,
            textStyle: {
                color: theme.palette.text.secondary,
            },
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xData,
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
        series: seriesData,
    };

    return <ReactECharts style={{ height: height }} option={option} />;
};

export default AreaChart;
