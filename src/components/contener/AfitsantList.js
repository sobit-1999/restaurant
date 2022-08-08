import * as React from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


export default function AfitsantList({data}) {
    // console.log(name.map(i => {return i.mijozlar[2]}));
    const sum = data.mijozlar.map(item => {return item.buyurtma.map((item2, i) => {return item2.sumCount})})
    // console.log(sum);
    const arrSum=[]
for (let i = 0; i < sum.length; i++) {
    arrSum.push(...sum[i])
}
console.log(arrSum);
const afitsantIshHaqi =arrSum.length>0? arrSum.reduce((x,y) => x+y):0
  return (
    <Link to={'/'+data.name+'-afitsant'} > 
        <Grid container wrap="nowrap" spacing={2} sx={{color: 'aliceblue', fontSize: 70}}>
          <Grid item>
            <Avatar>{data.name}</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography sx={{ fontSize:25}} noWrap>{data.name} Afitsant</Typography>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography sx={{ fontSize:25}} noWrap>{(afitsantIshHaqi*0.1+afitsantIshHaqi)*0.1} SO'M</Typography>
          </Grid>
        </Grid>
      </Link>
  )
}
