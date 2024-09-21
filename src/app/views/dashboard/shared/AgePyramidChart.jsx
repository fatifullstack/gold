import React from 'react';
import { useTheme } from "@mui/material/styles";
import ReactECharts from 'echarts-for-react';

const AgePyramidChart = ({ height, color = [] }) => {
    const theme = useTheme();
    // Configuration du graphique
    const option = {
         title: {
            text: 'Pyramide des âges',
            subtext: 'Données fictives',
             left: 'center',
         },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
        },
        legend: {
            show: true,
            itemGap: 10,
            icon: "circle",
            bottom: 0,
            textStyle: { color: theme.palette.text.secondary, fontSize: 13, fontFamily: "roboto" }
        },
        xAxis: [
            {
                type: 'value',
                name: 'Population',
                position: 'bottom',
                axisLabel: {
                    formatter: '{value}',
                },
                splitLine: {
                    show: false,
                },
            },
            {
                type: 'value',
                name: 'Population',
                position: 'bottom',
                axisLabel: {
                    formatter: '{value}',
                },
                splitLine: {
                    show: false,
                },
            },
        ],
        yAxis: {
            type: 'category',
            data: ['25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59'],
        },
        series: [
            {
                name: 'Hommes',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    position: 'insideRight',
                },
                data: [32, 25, , 34, 45, 27, 55, , 31, 42, 29, 33, 52, 51, 28, 32],
                itemStyle: {
                    color: '#1f77b4',
                },
            },
            {
                name: 'Femmes',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    position: 'insideLeft',
                },
                data: [32, 25, , 34, 45, 27, 55, , 31, 42, 29, 33, 52, 51, 28, 32],
                itemStyle: {
                    color: '#ff7f0e',
                },
            },
        ],
    };

    return <ReactECharts style={{ height: height }} option={{ ...option, color: [...color] }} />;
};

export default AgePyramidChart;
