import React from 'react';
import { useTheme } from "@mui/material/styles";
import ReactECharts from 'echarts-for-react';

const DepartmentBarChart = ({ height }) => {
    const theme = useTheme();
    
    // Configuration du graphique
    const option = {
        title: {
            text: 'Répartition des Employés',
            subtext: 'Données fictives',
            left: 'center',
            top: 'top',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
            formatter: '{b}: {c} employés',
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
            data: ['Info', 'HR', 'Marketing', 'Ventes', 'Finance'],
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
            name: 'Nombre',
            nameLocation: 'end',
            nameTextStyle: {
                color: theme.palette.text.secondary,
                padding: [0, 0, 0, 20], // Ajuste l'espacement du texte
            },
            axisLabel: {
                formatter: '{value}',
                color: theme.palette.text.secondary,
                margin: 10, // Ajoute de l'espace entre le label et l'axe
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
                name: 'Employés',
                type: 'bar',
                data: [120, 80, 90, 70, 60], // Nombre d'employés dans chaque département
                itemStyle: {
                    color: '#1f77b4', // Couleur des barres
                },
                label: {
                    show: true,
                    position: 'top',
                },
                barWidth: '30%', // Ajuste la largeur des barres
            },
        ],
    };

    return <ReactECharts style={{ height: height }} option={option} />;
};

export default DepartmentBarChart;
