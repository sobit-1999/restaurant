

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import { ImageListItemBar } from '@mui/material';
import AOS from "aos";
import "aos/dist/aos.css";
import { dates } from '../../dates';


export default function CardOvqatlar() {

  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
      <Box sx={{
         maxWidth: { xs: '100%', sm: '100%', }, 
         bgcolor: 'black', 
         color: 'azure' 
         }}>
        {dates.map(item1 => {return item1.taomlar.map(item2 =>{return <>
         <h2 className='name'>{item2.nomi}</h2>
      <Tabs
      key={item2.id}
        value={0}
        indicatorColor=""
        variant="scrollable"
        aria-label="scrollable auto tabs example"
      >  { item2.turi.map(item => {
           return       <Box sx={{ marginX: 9, marginTop: 3}}>
         <img
            className='img'
            data-aos-delay="200"
            data-aos-duration="1800"
            data-aos-easing="ease-in-out-cubic" 
            data-aos="zoom-in-down"
            src={item.img}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
            width='350px'
            height='280px'
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<div            
               data-aos-delay="200"
            data-aos-duration="1800"
            data-aos-easing="ease-in-out-cubic" 
            data-aos="fade-up"
             className='name-sum'>
              <span>NARHI - {item.sum} so'm</span>
               <h4>NOMI - {item.name}</h4>
               </div>}
            position="below"
          />
        </Box>})}
      </Tabs> </> })})}
    </Box>
  );
}
