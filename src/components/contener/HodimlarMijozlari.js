import React, { useState } from 'react'
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Badge, Box, Collapse, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import TableBarIcon from '@mui/icons-material/TableBar';
import CheckIcon from '@mui/icons-material/Check';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';


export default function HodimlarMijozlari({data, name, mijozOrni, b, arrChek }) {
  
    const [open, setOpen] = useState(false);
    const taomTuri = name.taomlar.map(item => {return item.turi})
    const taomTuriAll = taomTuri.length>1?[...taomTuri[0], ...taomTuri[1]]:[...taomTuri[0]]
    const dataArr  = data.buyurtma
    
    const hodimArr = []

    for (let i = 0; i < taomTuriAll.length; i++) {
      for (let j = 0; j < dataArr.length; j++) {
          if (taomTuriAll[i].id ===dataArr[j].id) {
            hodimArr.push(dataArr[j])
          }
          
      }
  }
    console.log(data.buyurtma.length);
  const hodimlarMijozlari = <Box 
  sx={{
    display: 'flex', 
    alignItems: 'center',
    justifyContent: "space-around",
    marginY: -3
  }}>
  <h2>  {mijozOrni+1} Mijoz </h2>
   {data.chek===true ? 
   <IconButton 
   sx={{ background: '',
   color: 'green',
   }}
   >
     <CheckIcon/>
   </IconButton>:
   <IconButton
   sx={{ 
     background: '',
     color:'red',
  }}
  >
    <Badge badgeContent={hodimArr.length>0 ? hodimArr.length: 0} color="secondary">
     <NotificationImportantIcon
     className='xodim-mijoz-habar'
     />
              </Badge>
   </IconButton>
    }
  </Box>

console.log(hodimArr);


  return (<>
       {hodimArr.length>0? <List
            sx={{
              width: 370, 
              bgcolor: 'black', 
              border: '1px solid orange', 
              borderRadius: 5,
              marginX: '20px',
              marginY:3
              }}
          >
            <ListItemButton onClick={(e) => (setOpen(!open))}>
              <ListItemIcon>
                <TableBarIcon sx={{fontSize:50, color: 'rgb(196, 113, 41)'}} />
              </ListItemIcon>
              <ListItemText primary={hodimlarMijozlari} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
             <ol>
            { hodimArr.map((item) => (
              
              <li> {item.label} {item.count}-ta</li>
             )) }
              
              </ol>
                </ListItemButton>
              </List>
            </Collapse>
            
          </List>
        :''  
        }
  </>
  )
}
