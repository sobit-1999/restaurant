import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AfitsantList from './AfitsantList';


const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 520,
  color: theme.palette.text.primary,
}));

export default function AfitsantLar() {
  const name = useSelector((state) => state.todo.afitsantName);
    // console.log(name.map(i => {return i.mijozlar[2]}));
    const sum = name[0].mijozlar.map(item => {return item.buyurtma.map((item2, i) => {return item2.sumCount})})
    console.log(sum);
    const arr=[]
for (let i = 0; i < sum.length; i++) {
  const element = sum[i];
  arr.push(...sum[i])
  console.log(element);
}
console.log(arr);
  return (
    <div>
        <Box>
            <h1>AFITSANTLAR</h1>

            <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 4 }}>
    {name.map((item, index) => {return <StyledPaper
        sx={{
          my: 2,
          mx: 'auto',
          p: 3,
          background: 'rgb(55, 35, 35)',
          borderRadius: 5,
        }}
        key={index}
      > <AfitsantList data={item}/>
      </StyledPaper>
      })}
    </Box>
    <Link to='/'> 
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
    </div>
  )
}
