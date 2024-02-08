import { Box } from '@mui/material'
import dynamic from 'next/dynamic'
import React, { memo } from 'react'
import { ApexOptions } from 'apexcharts'
const Chart = dynamic(() => import("react-apexcharts"), {ssr : false})

interface Graph {
    xAxis : string[],
    yAxis : number[],
    color : string[]
}
interface ISeries
{
  name:string,
  data:number[]
}

interface IState{
  options:ApexOptions,
  series : ISeries[]
}

const CommonGraph = ({xAxis, yAxis, color} : Graph) => {

    const state:IState = {
        options: {
          chart: {
            id: "basic-bar"
          },
          
          xaxis: {
            categories: xAxis
          },
  
          fill:{
            colors:color
          }
        },
        series: [
          {
            name: "-Dates-",
            data: yAxis
          }
        ]
      };
  return (
    <Box padding={"30px"}>
         <Chart
              options={state.options}
              series={state.series}
              type="area"
              width="650"
            />
    </Box>
  )
}

export default memo(CommonGraph)
