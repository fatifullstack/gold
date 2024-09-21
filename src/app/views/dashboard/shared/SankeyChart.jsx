import React from 'react';
import { useTheme } from "@mui/material/styles";
import ReactECharts from 'echarts-for-react';

const SankeyChart = ({ height }) => {
    const theme = useTheme();

    // Sample data for the Sankey diagram
    const data = {
        nodes: [
            { name: 'A' },
            { name: 'B' },
            { name: 'C' },
            { name: 'D' },
            { name: 'E' },
        ],
        links: [
            { source: 'A', target: 'B', value: 5 },
            { source: 'A', target: 'C', value: 10 },
            { source: 'B', target: 'D', value: 7 },
            { source: 'C', target: 'D', value: 2 },
            { source: 'D', target: 'E', value: 5 },
        ],
    };

    // Configuration of the Sankey chart
    const option = {
        title: {
            text: 'Sankey Diagram Example',
            left: 'center',
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c}',
        },
        series: [
            {
                type: 'sankey',
                layout: 'none',
                data: data.nodes,
                links: data.links,
                itemStyle: {
                    borderColor: theme.palette.background.default,
                    borderWidth: 1,
                    color: theme.palette.primary.main,
                },
                lineStyle: {
                    color: theme.palette.secondary.main,
                    opacity: 0.5,
                },
                label: {
                    textStyle: {
                        color: theme.palette.text.primary,
                    },
                },
            },
        ],
    };

    return <ReactECharts style={{ height: height }} option={option} />;
};

export default SankeyChart;
