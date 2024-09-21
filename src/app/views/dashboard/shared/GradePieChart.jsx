import React from 'react';
import { useTheme } from "@mui/material/styles";
import ReactECharts from 'echarts-for-react';

const GradePieChart = ({ height }) => {
    const theme = useTheme();

    // Configuration du graphique
    const option = {
        title: {
            text: 'Répartition des Grades',
            subtext: 'Données fictives',
            left: 'center',
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        legend: {
            show: true,
            itemGap: 10,
            icon: "circle",
            bottom: 0,
            textStyle: { color: theme.palette.text.secondary, fontSize: 13, fontFamily: "roboto" }
        },
        series: [
            {
                name: 'Grades',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 100, name: 'Grade 1' },
                    { value: 200, name: 'Grade 2' },
                    { value: 150, name: 'Grade 3' },
                    { value: 50, name: 'Grade 4' },
                    { value: 75, name: 'Grade 5' }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                    },
                },
            },
        ],
    };

    return <ReactECharts style={{ height: height }} option={option} />;
};

export default GradePieChart;
