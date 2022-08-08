import {  IconButton } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addMijozlar, indexAfitsant } from '../../redux/features/card/cardSlice';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AOS from 'aos';
import AfitsantMijoz from './AfitsantMijoz';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';




export default function Afitsant({name, mijozlar, id}) {
    const dispatch = useDispatch()


    React.useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
    const nMijoz = (e) => {
    dispatch(addMijozlar(id))
    dispatch(indexAfitsant(id))

}
  return (
    <Box sx={{
        paddingX: 10,
        paddingBottom: 10,
        fontFamily: 'fantasy'
        }}>
        <h1 data-aos="fade-right">{name+' Afitsant'}</h1>
        <IconButton
                onClick={nMijoz}
                sx={{
                  position: 'fixed', 
                  color: 'black',
                  background: 'gold', 
                  zIndex: 1,
                  width: 60,
                  height: 60,
                  bottom: 5,
                  "&:hover": {
                    cursor: 'pointer',
                    transform: 'scale(1.1)',
                    backgroundColor: 'rgb(274, 210, 191)',
                  }
                  
                }}
                >    
              <PlaylistAddIcon 
                 data-aos="fade-down"
                />
            </IconButton>


        <Box  sx={{display: 'flex', alignItems: 'center', flexFlow: 'row wrap', justifyContent: 'center'}}>
  {mijozlar.map((item, index) => {return <div key={index}>
    <AfitsantMijoz item={item} id={id} />
    </div>
})}
</Box>

<Link to={'/afitsant'}> 
      <ArrowBackIosIcon
      sx={{  
        position: 'fixed', 
        zIndex: 1,
        top: 25,
        left:25,
        color: 'red',
        fontSize: 30
      }}/>
       </Link>
    </Box>
  )
}
