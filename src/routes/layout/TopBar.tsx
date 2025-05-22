import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const topbarBackgroundColor = "#03827e"

interface TopBarProps {
  drawerWidth: number,
}

const TopBar = ({ drawerWidth }: TopBarProps) => {

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: topbarBackgroundColor,
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          React + Typescript Samples
        </Typography>
      </Toolbar>
    </AppBar>
  )

}

export default TopBar
