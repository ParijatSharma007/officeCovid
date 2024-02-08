import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface Item {
  header : string, 
  data: number
}

export default function OverViewCard({header ,data} : Item) {
  const card = (
    <Box sx={{borderRadius : "6px"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {header}
        </Typography>
        <Typography variant="h5" component="div">

        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {data}
        </Typography>
      </CardContent>
    </Box>
  );
  return (
    <Box sx={{ minWidth: 220 , padding : "10px", borderRadius:"20px"}}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}