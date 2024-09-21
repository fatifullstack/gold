import React from 'react';
import { useTheme } from "@mui/material/styles";
import ReactECharts from 'echarts-for-react';

const RadarChart = ({ height }) => {
    const theme = useTheme();

    // Configuration of the radar chart
    const option = {
        title: {
            text: 'Radar Chart Example',
            left: 'center',
        },
        tooltip: {
            trigger: 'item',
        },
        legend: {
            data: ['Category A', 'Category B'],
            bottom: 0,
            textStyle: {
                color: theme.palette.text.secondary,
            },
        },
        radar: {
            indicator: [
                { name: 'Math', max: 100 },
                { name: 'Science', max: 100 },
                { name: 'English', max: 100 },
                { name: 'History', max: 100 },
                { name: 'Art', max: 100 },
            ],
            shape: 'circle',
            splitArea: {
                areaStyle: {
                    color: [
                        'rgba(255, 255, 255, 0.5)',
                        'rgba(220, 220, 220, 0.5)',
                    ],
                },
            },
        },
        series: [
            {
                name: 'Scores',
                type: 'radar',
                data: [
                    {
                        value: [80, 90, 70, 85, 75], // Scores for Category A
                        name: 'Category A',
                    },
                    {
                        value: [70, 60, 85, 70, 90], // Scores for Category B
                        name: 'Category B',
                    },
                ],
                itemStyle: {
                    color: theme.palette.primary.main,
                },
                areaStyle: {
                    color: theme.palette.secondary.main,
                },
            },
        ],
    };

    return <ReactECharts style={{ height: height }} option={option} />;
};

export default RadarChart;
