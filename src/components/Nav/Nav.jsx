import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { colors } from '@mui/material';
import FitnessCenterSharpIcon from '@mui/icons-material/FitnessCenterSharp';


function Nav() {
  const user = useSelector((store) => store.user);


  const drawerWidth = 200;

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,

      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,

      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,

      }),
    }),
  );

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),

    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));


  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLinkClick = () => {
    handleDrawerClose();
  };
  return (
    <div className="nav">
      {/* <Link to="/home">
        <h2 className="nav-title">Title Of App</h2>
        <h2 className="nav-title">Home Page</h2>

      </Link> */}
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        <Box sx={{ display: 'flex', }}>
          <CssBaseline />
          <AppBar position="fixed" open={open} sx={{ backgroundColor: '#94cbfd' }}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
              >
                <MenuIcon />
              </IconButton>
              <Link id='home' className="" to="/home">
                <div style={{ display: 'flex', alignItems: 'center', color: 'black' }}>
                  <FitnessCenterSharpIcon fontSize="large" />
                  <Typography variant="" noWrap component="div" sx={{ color: 'black', fontSize: '30px', fontWeight: 'bold', fontFamily: 'sans-serif', paddingLeft: '10px' }}>
                    HealthyMe
                  </Typography>
                </div>


              </Link>


            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </DrawerHeader>
            <Divider />
            {user.id && (
              <>
                <Link id='home' className="navLink" to="/user" onClick={handleLinkClick}>
                  Home
                </Link>

                <Link className="navLink" to="/info" onClick={handleLinkClick}>
                  Info Page
                </Link>

                <Link className="navLink" to="/profile" onClick={handleLinkClick}>
                  Profile Page
                </Link>

                <Link className="navLink" to="/calculator" onClick={handleLinkClick}>
                  Calculator Page
                </Link>

                <Link className="navLink" to="/simulator" onClick={handleLinkClick}>
                  Simulator Page
                </Link>

                <Link className="navLink" to="/faqs" onClick={handleLinkClick}>
                  Fun Faqs
                </Link>

                <LogOutButton className="navLink" onClick={handleLinkClick} />
              </>
            )}
            <Divider />

          </Drawer>
          <Main open={open}>
            <DrawerHeader />
            {/* <Typography paragraph>
              test 1
            </Typography> */}

          </Main>
        </Box>

      </div>
    </div>

  );
}

export default Nav;

