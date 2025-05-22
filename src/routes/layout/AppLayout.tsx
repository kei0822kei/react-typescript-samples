import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Outlet } from 'react-router-dom';
import SideBar from "./SideBar";
import TopBar from './TopBar';

const drawerWidth = 200;
const mainBackgroundColor = "#f5f5f5"

export default function AppLayout() {

  return (
    <Box sx={{
      display: 'flex',
      backgroundColor: mainBackgroundColor,
      minHeight: "100vh",
    }}>

      <CssBaseline />
      <TopBar
        drawerWidth={drawerWidth}
      />
      <SideBar
        drawerWidth={drawerWidth}
      />

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}


