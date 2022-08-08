import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FormControl, IconButton, InputAdornment, InputLabel, List, OutlinedInput } from '@mui/material'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Password({values, setValues, paswordFunction, eror}) {

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
  return (
    <List
      sx={{ 
        width: '100%', 
        maxWidth: 360, 
        bgcolor: 'none',
        display:' flex',
        alignItems:'center'
      }}
      aria-label="contacts">
                <FormControl sx={{ m: 1, width: 'auto' , color:'orange', background: '', borderRadius: 2, padding:'0' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">{eror?'Error':'Password'}</InputLabel>
          <OutlinedInput
           sx={{padding:-1}}
          error = {eror}
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <IconButton
                 sx={{
                  fontSize:'42px', 
                  color: 'orange',
                  transition: '1s',
                  background: 'green',
                  "&:hover": {
                    cursor: 'pointer',
                    transform: 'scale(1.2)',
                    background: 'green'
                  }
                  }}>
         <ArrowForwardIosIcon 
         onClick={paswordFunction}
         />
        </IconButton>
    </List>
  )
}
