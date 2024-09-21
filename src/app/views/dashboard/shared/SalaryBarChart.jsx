import React from 'react';
import { useTheme } from "@mui/material/styles";
import ReactECharts from 'echarts-for-react';

const SalaryBarChart = ({ height }) => {
    const theme = useTheme();

    // Configuration du graphique
    const option = {
        title: {
            text: 'Salaire Moyen par Sexe',
            subtext: 'Données fictives',
            left: 'center',
            top: 'top',
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} €',
        },
        legend: {
            show: true,
            itemGap: 10,
            icon: "circle",
            bottom: 0,
            textStyle: { color: theme.palette.text.secondary, fontSize: 13, fontFamily: "roboto" }
        },
        xAxis: {
            type: 'category',
            data: ['Homme', 'Femme'],
            axisLabel: {
                color: theme.palette.text.secondary,
                margin: 10,
            },
            axisLine: {
                lineStyle: {
                    color: theme.palette.text.secondary,
                },
            },
            barCategoryGap: '50%', // Ajuste l'espacement entre les barres
        },
        yAxis: {
            type: 'value',
            name: 'Salaire Moyen',
            nameLocation: 'end', // Positionne le nom de l'axe à l'extrémité
            nameTextStyle: {
                color: theme.palette.text.secondary,
                padding: [0, 0, 0, 10], // Ajuste l'espacement du texte
            },
            axisLabel: {
                formatter: '{value} €', // Ajoute deux espaces non-cassants avant la valeur
                color: theme.palette.text.secondary,
                margin: 5,
            },
            axisLine: {
                lineStyle: {
                    color: theme.palette.text.secondary,
                },
            },
            splitLine: {
                lineStyle: {
                    color: theme.palette.divider,
                },
            },
        },
        series: [
            {
                name: 'Salaire Moyen',
                type: 'bar',
                data: [3500, 2800], // Salaire moyen pour Homme et Femme respectivement
                itemStyle: {
                    color: (params) => params.dataIndex === 0 ? '#1f77b4' : '#ff7f0e', // Couleurs pour Homme et Femme
                },
                label: {
                    show: true,
                    position: 'top',
                },
                barWidth: '30%', // Ajuste la largeur des barres
                barMinHeight: 10, // Assure une hauteur minimale pour les barres
            },
        ],
    };

    return <ReactECharts style={{ height: height }} option={option} />;
};

export default SalaryBarChart;
