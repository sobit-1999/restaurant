import {  IconButton,   Paper } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { deleteMijoz } from '../../redux/features/card/cardSlice';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import AOS from 'aos';
import ClearIcon from '@mui/icons-material/Clear';



export default function AfitsantMijoz({item, id}) {
    const dispatch = useDispatch()
    
    React.useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#000',
        color: 'orange',
        border: '1px solid orange',
         display: 'flex',
         justifyContent: 'space-around',
         alignItems: 'center',
        fontFamily: 'monospace',
        transition: '1.3s',
        padding: '10px',
        "&:hover": {
          transform: 'scale(1.1)',
          backgroundColor: 'aliceblue',
          color: 'black',
          border: 'none',
          boxShadow:
          "1px 1px 5px 2px aliceblue,0px 2px 2px 0px rgba(100,0,0,0.9),0px 1px 5px 0px rgba(0,0,0,0.12)"
       }
        
      }));

  return (
 <>
      <Item 
            sx={{
              width: 370, 
              borderRadius: 3,
              marginX: '20px',
              marginY:3,
              }}>
      <h2>  {item.orni+' Mijoz'} </h2>
      <Box>
       <Link to={'/'+item.orni+'mijoz'}> 
       <IconButton
        sx={{
          color: 'green',
          background: 'none', 
          transition: '1s',
          "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1.3)',
            backgroundColor: 'green',
            color: 'black'
          }
        }}>
        <ArrowForwardIosOutlinedIcon/>
        </IconButton>
        </Link>
        <IconButton
          onClick={(e) => dispatch(deleteMijoz(item.orni))}
        sx={{
          color: 'red',
          background: 'none', 
          transition: '1s',
          "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1.3)',
            backgroundColor: 'red',
            color: 'black'
          }
        }}
        >
        <ClearIcon />
        </IconButton>
        </Box>
        </Item>
        </>
  )
}
