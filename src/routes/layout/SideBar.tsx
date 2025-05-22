import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';

const drawerBodyColor = "#ffffff"
const drawerBackgroundColor = "#10736e"
const ContentsList = [
  { text: "visjs", path: "/visjs" },
]

interface SideBarProps {
  drawerWidth: number,
}

const SideBar = ({ drawerWidth }: SideBarProps) => {

  const drawer = (
    <div>
      <Toolbar sx={{ justifyContent: "center" }}>
        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          href="/"
        >
          <HomeIcon />
        </IconButton>
      </Toolbar>

      <Divider />

      <List>
        {ContentsList.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="permanent"
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: drawerBackgroundColor,
            color: drawerBodyColor,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

export default SideBar
