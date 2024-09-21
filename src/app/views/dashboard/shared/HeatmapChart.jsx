import React from 'react';
import { useTheme } from "@mui/material/styles";
import ReactECharts from 'echarts-for-react';

const HeatmapChart = ({ height }) => {
    const theme = useTheme();

    // Sample data for the heatmap
    const data = [
        [0, 0, 5], [0, 1, 10], [0, 2, 15],
        [1, 0, 20], [1, 1, 25], [1, 2, 30],
        [2, 0, 35], [2, 1, 40], [2, 2, 45],
    ];

    // Configuration of the heatmap chart
    const option = {
        title: {
            text: 'Heatmap Example',
            left: 'center',
        },
        tooltip: {
            position: 'top',
        },
        xAxis: {
            type: 'category',
            data: ['A', 'B', 'C'],
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
            type: 'category',
            data: ['1', '2', '3'],
            axisLine: {
                lineStyle: {
                    color: theme.palette.text.secondary,
                },
            },
            axisLabel: {
                color: theme.palette.text.secondary,
            },
        },
        visualMap: {
            min: 0,
            max: 50,
            calculable: true,
            inRange: {
                color: [theme.palette.primary.main, theme.palette.secondary.main],
            },
            textStyle: {
                color: theme.palette.text.secondary,
            },
        },
        series: [
            {
                name: 'Heatmap',
                type: 'heatmap',
                data: data,
                label: {
                    show: true,
                },
                itemStyle: {
                    borderColor: theme.palette.background.default,
                    borderWidth: 1,
                },
            },
        ],
    };

    return <ReactECharts style={{ height: height }} option={option} />;
};

export default HeatmapChart;
