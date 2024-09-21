import React from 'react';
import { useTheme } from "@mui/material/styles";
import ReactECharts from 'echarts-for-react';

const TreemapChart = ({ height }) => {
    const theme = useTheme();

    // Sample data for the treemap
    const data = [
        {
            name: 'Category A',
            value: 500,
            children: [
                { name: 'Subcategory A1', value: 200 },
                { name: 'Subcategory A2', value: 300 },
            ],
        },
        {
            name: 'Category B',
            value: 800,
            children: [
                { name: 'Subcategory B1', value: 400 },
                { name: 'Subcategory B2', value: 200 },
                { name: 'Subcategory B3', value: 200 },
            ],
        },
        {
            name: 'Category C',
            value: 300,
        },
    ];

    // Configuration of the treemap chart
    const option = {
        title: {
            text: 'Treemap Example',
            left: 'center',
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c}',
        },
        series: [
            {
                type: 'treemap',
                layout: 'fluid',
                data: data,
                label: {
                    show: true,
                    formatter: '{b}',
                    color: theme.palette.text.primary,
                },
                itemStyle: {
                    borderColor: theme.palette.background.default,
                    borderWidth: 1,
                    gap: 2,
                },
                levels: [
                    {
                        itemStyle: {
                            // Style for the first level
                            borderColor: theme.palette.primary.main,
                            borderWidth: 2,
                        },
                    },
                    {
                        itemStyle: {
                            // Style for the second level
                            borderColor: theme.palette.secondary.main,
                            borderWidth: 1,
                        },
                    },
                ],
            },
        ],
    };

    return <ReactECharts style={{ height: height }} option={option} />;
};

export default TreemapChart;
