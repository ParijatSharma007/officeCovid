import React from 'react'
import { Box, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { ICountry, ICountryTotal } from '@/interfaces/interfaces';
const CommonGraph = dynamic(import('./CommonGraph'))

interface IGraph {
    countryTotalNumbers : ICountryTotal,
    chartData : ICountry
}

const Graph = ({countryTotalNumbers, chartData} : IGraph) => {
  return (
    <Box sx={{
        justifyContent : "center",
        alignItems : "center"
    }}>
    <Box
        display={"flex"}
        flexDirection={"row"}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box display={"flex"} flexDirection={"column"}>
          <Typography variant="h3" textAlign={"center"}>
            Total recovered : {countryTotalNumbers.totalRecovered}
          </Typography>
          <CommonGraph
            color={["green"]}
            title ="Recovered"
            xAxis={chartData.dates}
            yAxis={chartData.recovered}
          />
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <Typography variant="h3" textAlign={"center"}>
            Total tested : {countryTotalNumbers.totalTested}
          </Typography>
          <CommonGraph
            color={["yellow"]}
            title ="Tested"
            xAxis={chartData.dates}
            yAxis={chartData.tested}
          />
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box display={"flex"} flexDirection={"column"}>
          <Typography variant="h3" textAlign={"center"}>
            Total deceased : {countryTotalNumbers.totalDeceased}
          </Typography>
          <CommonGraph
            color={["red"]}
            title ="Deceased"
            xAxis={chartData.dates}
            yAxis={chartData.deceased}
          />
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <Typography variant="h3" textAlign={"center"}>
            Total confirmed on : {countryTotalNumbers.totalConfirmed}
          </Typography>
          <CommonGraph
            color={["orange"]}
            title ="Confimed"
            xAxis={chartData.dates}
            yAxis={chartData.confirmed}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Graph
