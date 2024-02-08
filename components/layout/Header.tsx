import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { MuiThemeContext } from '@/mui-theme/MuiThemeProvider';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
export default function Header() {

  const {mode, setMode} = React.useContext<any>(MuiThemeContext)
  const changeTheme = () => {
    React.useEffect(() => {
      setMode(() => {
        if (typeof window !== "undefined"){
          if(mode === 'light'){
            window.localStorage.setItem('theme', 'dark')
            return 'dark'
          }
          if(mode === 'dark'){
            window.localStorage.setItem('theme', 'light')
            return 'light'
          }
        }
      })
    }, [])
  }
  return (
    <Box sx={{ flexGrow: 1 , boxShadow : "0px"}}>
      <AppBar position="static" sx={{backgroundColor : "white", boxShadow : "0px"}}>
        <Toolbar sx={{backgroundColor : mode==='dark' ? 'black' : 'white', boxShadow : "0px"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 , color : mode==='dark' ? 'white' : 'dark', textAlign : "center"}}>
            COVID NEWS
          </Typography>
          {mode === "light" ? <DarkModeIcon onClick={changeTheme}/> : <LightModeOutlinedIcon onClick={changeTheme}/>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}