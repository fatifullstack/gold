import React from 'react';
import { useTheme } from "@mui/material/styles";
import ReactECharts from 'echarts-for-react';

const CandlestickChart = ({ height }) => {
    const theme = useTheme();

    // Sample data for the candlestick chart
    const data = [
        ['2023-01-01', 220, 230, 210, 240],
        ['2023-01-02', 250, 260, 240, 270],
        ['2023-01-03', 270, 280, 260, 290],
        ['2023-01-04', 260, 270, 250, 280],
        ['2023-01-05', 280, 290, 270, 300],
    ];

    // Configuration of the candlestick chart
    const option = {
        title: {
            text: 'Candlestick Chart Example',
            left: 'center',
        },
        tooltip: {
            trigger: 'axis',
            formatter: (params) => {
                const [item] = params;
                return `${item.name}<br/>
                        Open: ${item.data[1]}<br/>
                        Close: ${item.data[2]}<br/>
                        Low: ${item.data[3]}<br/>
                        High: ${item.data[4]}`;
            },
        },
        xAxis: {
            type: 'category',
            data: data.map(item => item[0]),
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
                name: 'Candlestick',
                type: 'candlestick',
                data: data.map(item => item.slice(1)),
                itemStyle: {
                    color: theme.palette.success.main, // Bullish (close > open)
                    borderColor: theme.palette.success.main,
                    borderColor0: theme.palette.error.main, // Bearish (close < open)
                    color0: theme.palette.error.main,
                },
            },
        ],
    };

    return <ReactECharts style={{ height: height }} option={option} />;
};

export default CandlestickChart;
