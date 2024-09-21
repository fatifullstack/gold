import { Fragment } from "react";
import { Card, Grid, styled, useTheme } from "@mui/material";
import RowCards from "./shared/RowCards";
import StatCards from "./shared/StatCards";
import StatCards2 from "./shared/StatCards2";
import TopSellingTable from "./shared/TopSellingTable";
import AgePyramidChart from "./shared/AgePyramidChart";
import PieChartContrat from "./shared/PieChartContrat";
import GradePieChart from "./shared/GradePieChart";
import GenderPieChart from "./shared/GenderPieChart";
import SalaryBarChart from "./shared/SalaryBarChart";
import DepartmentBarChart from "./shared/DepartmentBarChart";
import RadarChart from "./shared/RadarChart";
import ScatterChart from "./shared/ScatterChart";
import AreaChart from "./shared/AreaChart";
import HeatmapChart from "./shared/HeatmapChart";
import TreemapChart from "./shared/TreemapChart";
import FunnelChart from "./shared/FunnelChart";
import BoxplotChart from "./shared/BoxplotChart";
import CandlestickChart from "./shared/CandlestickChart";
import SankeyChart from "./shared/SankeyChart";

// STYLED COMPONENTS
const ContentBox = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" }
}));

const Title = styled("span")(() => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginRight: ".5rem",
  textTransform: "capitalize"
}));

const SubTitle = styled("span")(({ theme }) => ({
  fontSize: "0.875rem",
  color: theme.palette.text.secondary
}));

const H4 = styled("h4")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginBottom: "16px",
  textTransform: "capitalize",
  color: theme.palette.text.secondary
}));

export default function Analytics() {
  const { palette } = useTheme();

  return (
    <Fragment>
      <ContentBox className="analytics">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <StatCards />
          </Grid>
          <Grid
            item
            xs={12}
            container
            direction="row"
            spacing={2}>
            <Grid item xs={12} md={4}>
              <Card sx={{ px: 3, py: 2, mb: 3 }}>
                <GenderPieChart
                  height="330px"
                  color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ px: 3, py: 2, mb: 3 }}>
                {/*<Title>Type de contrats</Title>
                <SubTitle></SubTitle> */}
                <PieChartContrat height="330px" />
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ px: 3, py: 2, mb: 3 }}>
                {/* <Title>Age pyramid</Title>
                <SubTitle>Last 30 days</SubTitle>*/}

                <AgePyramidChart
                  height="330px"
                  color={[palette.primary.dark, palette.primary.light]}
                />
              </Card>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            container
            direction="row"
            spacing={2}>
            <Grid item xs={12} md={4}>
              <Card sx={{ px: 3, py: 2, mb: 3 }}>
                <SalaryBarChart
                  height="330px"
                  color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ px: 3, py: 2, mb: 3 }}>
                {/*<Title>Type de contrats</Title>
                <SubTitle></SubTitle> */}
                <GradePieChart height="330px" />
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ px: 3, py: 2, mb: 3 }}>
                <DepartmentBarChart
                  height="330px"
                  color={[palette.primary.dark, palette.primary.light]}
                />
              </Card>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            container
            direction="row"
            spacing={2}>
            <Grid item xs={12} md={4}>
              <Card sx={{ px: 3, py: 2, mb: 3 }}>
                <RadarChart
                  height="330px"
                  color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ px: 3, py: 2, mb: 3 }}>
                {/*<Title>Type de contrats</Title>
                <SubTitle></SubTitle> */}
                <ScatterChart height="330px" />
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ px: 3, py: 2, mb: 3 }}>
                <AreaChart
                  height="330px"
                  color={[palette.primary.dark, palette.primary.light]}
                />
              </Card>
            </Grid>
          </Grid>

          
          <Grid
            item
            xs={12}
            container
            direction="row"
            spacing={2}>
            <Grid item xs={12} md={4}>
              <Card sx={{ px: 3, py: 2, mb: 3 }}>
                <HeatmapChart
                  height="330px"
                  color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ px: 3, py: 2, mb: 3 }}>
                {/*<Title>Type de contrats</Title>
                <SubTitle></SubTitle> */}
                <TreemapChart height="330px" />
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ px: 3, py: 2, mb: 3 }}>
                <FunnelChart
                  height="330px"
                  color={[palette.primary.dark, palette.primary.light]}
                />
              </Card>
            </Grid>
          </Grid>


          <Grid
            item
            xs={12}
            container
            direction="row"
            spacing={2}>
            <Grid item xs={12} md={4}>
              <Card sx={{ px: 3, py: 2, mb: 3 }}>
                <BoxplotChart
                  height="330px"
                  color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ px: 3, py: 2, mb: 3 }}>
                {/*<Title>Type de contrats</Title>
                <SubTitle></SubTitle> */}
                <CandlestickChart height="330px" />
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ px: 3, py: 2, mb: 3 }}>
                <SankeyChart
                  height="330px"
                  color={[palette.primary.dark, palette.primary.light]}
                />
              </Card>
            </Grid>
          </Grid>


          <Grid item xs={12}>
            <TopSellingTable />
            <StatCards2 />

            <H4>Ongoing Projects</H4>
            <RowCards />
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
}
