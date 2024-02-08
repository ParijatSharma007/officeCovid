import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

export default function Spinner({size} : any) {

  return (
    <Box sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        minHeight:"100vh"
    }}>
        <CircularProgress disableShrink size={size}/>
    </Box>
    )
}
