import React from 'react';
import { useTheme } from "@mui/material/styles";
import ReactECharts from 'echarts-for-react';

const GenderPieChart = ({ height }) => {
    const theme = useTheme();
    
    // Configuration du graphique
    const option = {
        title: {
            text: 'Répartition Homme / Femme',
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
                name: 'Genre',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 400, name: 'Homme' },
                    { value: 300, name: 'Femme' }
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

export default GenderPieChart;
