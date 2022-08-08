import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from '../sidebar/Sidebar';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SearchAppBar({values, setValues}) {
  return (
    <Box sx={{ flexGrow: 1, marginY: 10, }}>
      <AppBar position="fixed" sx={{
        left: '45%', 
        right: '45%', 
        width: '10%', 
        borderRadius: 5, 
        background: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
}}>
        <Toolbar 
        className='header'
        sx={{
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-around',
        }}>
          <IconButton>
         <Link to='/'>
          <HomeIcon sx={{ 
        color: 'aliceblue', marginTop:'5px', marginX:2}}/>
         </Link>
          </IconButton>
        <Sidebar />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
