import React, { useMemo } from 'react'
import { Box } from '@mui/material'
import OverViewCard from './OverViewCard'
import { TotalNumbers } from '@/interfaces/interfaces'

export interface FlexingOverView {
  totalNumbers: TotalNumbers
}



const FlexingOverView = ({ totalNumbers }: FlexingOverView) => {
  const flexData = useMemo(() => [
    {
      header: "Confirmed",
      data: totalNumbers.totalConfirmed
    },
    {
      header: "Deceased",
      data: totalNumbers.totalDied
    },
    {
      header: "Rocoverd",
      data: totalNumbers.totalRecovered
    },
    {
      header: "Tested",
      data: totalNumbers.totalTested
    },
    {
      header: "vaccinated1",
      data: totalNumbers.totalvaccinated1
    },
    {
      header: "vaccinated2",
      data: totalNumbers.totalvaccinated2
    }], [])
  return (
    <Box display={"flex"}
      flexDirection={"row"}
      margin={"auto"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {flexData.map((item, idx: number) => {
        return <OverViewCard
          key={idx}
          header={item.header}
          data={item.data}
        />
      })}
    </Box>
  )
}

export default FlexingOverView
