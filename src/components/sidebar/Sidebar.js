import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import {  Box, IconButton, List, ListItem,  ListItemText } from '@mui/material';
import { dates } from '../../dates';
import { Link } from 'react-router-dom';
import Password from '../contener/pasword/Pasword';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



export default function Sidebar() {
  
  const passwords= ['oshpaz.js', 'shashlikchi.js', 'barmen.js', 'afitsant.js',  'admin.js']
//   const buyurtmaArr = useSelector((state) => state.todo.afitsantName)
  
// //   console.log(buyurtmaArr.map(i => {return i.mijozlar}));
// //   const buyurtmaMijozlarArr = buyurtmaArr.map(i => {return i.mijozlar})
// //   const mijozlarArr = []
// // for (let i = 0; i < buyurtmaMijozlarArr.length; i++) {
// //   mijozlarArr.push(...buyurtmaMijozlarArr[i])
// // }
// // console.log(mijozlarArr);
// //   const arrChek =[]
// //   for (let i = 0; i < mijozlarArr.length; i++) {
// //        if (mijozlarArr[i].chek === undefined && mijozlarArr[i].buyurtma.length>0) {
// //           arrChek.push('')
// //          }  
// //       }
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })

  const [login, setlogin ] = React.useState(true)
  const [eror, setEror] = React.useState(false)

  const [state, setState] = React.useState({
    open: false,
    vertical: 'center',
    horizontal: 'center',
  });


  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
    alert( 
        ` *                             PASWORDLAR
    
       *      kuzatuvchi - pasword = admin.js  
       *      oshpaz - pasword = oshpaz.js 
       *      afitsant - pasword = afitsant.js 
       *      barmen - pasword = barmen.js
       *      shashlikchi - pasword = shashlikchi.js `)
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const loginFunction = () => {
     setlogin(false)
     for (let i = 0; i < passwords.length; i++) {
      if( passwords[i] !== values.password )  {
         setEror(true)
      }
      }
  }

  const menuBar = () => {
    if (values.password!== passwords[4] ) {
      setValues({ ...values, password: '' }) 
      setlogin(true)
    }
    setState({ ...state, open: false }) 

  
  }

  const buttons = (
    <React.Fragment >  
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleClick({
                vertical: 'top',
                horizontal: 'center',
              })}
          >
            <AccountCircleIcon/>
          </IconButton>
    </React.Fragment>
  );

  const aa = (

    <Box>   
          <h1 style={{textAlign: 'center'}}>VAZIFANGIZ</h1>
     { login ? <Password values={values} setValues={setValues} paswordFunction={loginFunction} eror={eror}/>:
   <>
     <List>
      {values.password === passwords[0] ?
         <ListItem >
           <ListItemText  primary='OSHPZA'   />
           <Link to='/oshpaz'>  
        <IconButton onClick={menuBar}
        sx={{ 
          background: 'green', 
          marginLeft: 5, 
          color: 'sandybrown',
          "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1.1)',
            backgroundColor: 'green',
            color: 'black'
          }}}>
          <ArrowForwardIosIcon/>
        </IconButton>
      </Link>
      </ListItem>
       : <>{values.password===passwords[1] ?
         <ListItem>
        <ListItemText primary='SHASHLIKCHI'   />
           <Link to='/shashlikchi'>  
        <IconButton onClick={menuBar}
        sx={{ 
          background: 'green', 
          marginLeft: 5, 
          color: 'sandybrown',
          "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1.1)',
            backgroundColor: 'green',
            color: 'black'
          }}}>
          <ArrowForwardIosIcon/>
        </IconButton>
      </Link>
      </ListItem>
      :<> { values.password===passwords[2]?
         <ListItem>
        <ListItemText primary='BARMEN'   />
           <Link to='/barmen'>  
        <IconButton onClick={menuBar}
        sx={{ 
          background: 'green', 
          marginLeft: 5, 
          color: 'sandybrown',
          "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1.1)',
            backgroundColor: 'green',
            color: 'black'
          }}}>
          <ArrowForwardIosIcon/>
        </IconButton>
      </Link>
      </ListItem>
       :<>{values.password===passwords[3]?
      <ListItem>
        <ListItemText primary='AFITSANT'   />
        <Link to='/afitsant'>
        <IconButton  onClick={menuBar}
        sx={{ 
          background: 'green', 
          marginLeft: 5, 
          color: 'sandybrown',
          "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1.1)',
            backgroundColor: 'green',
            color: 'black'
          }}}>
          <ArrowForwardIosIcon/>
        </IconButton>
      </Link>
      <br/>
      </ListItem>
      :<div>{values.password===passwords[4]?
       <>
      <IconButton sx={{
        marginLeft:-19, 
        background:'red',
        "&:hover": {
          cursor: 'pointer',
          transform: 'scale(1.1)',
          backgroundColor: 'red',
          color: 'black'
        }
      }} onClick={() => {
              setValues({ ...values, password: '' }) 
              setlogin(true)
      }}><ArrowBackIcon/>
      </IconButton>
      {dates.map((item, i) => {return  <ListItem 
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginX: 'auto',
        borderRadius: '1px solid orange',
        justifyContent: 'space-between'
        }}>
        <ListItemText primary={item.name}   />
        <Link to={item.to}>
        <IconButton onClick={menuBar} 
        sx={{ background: 'green',
         marginLeft: 5, 
         color: 'sandybrown',
         "&:hover": {
          cursor: 'pointer',
          transform: 'scale(1.1)',
          backgroundColor: 'green',
          color: 'black'
        }
        }}
        >
          <ArrowForwardIosIcon/>
        </IconButton>
      </Link>
      </ListItem>  })}
      <ListItem>
        <ListItemText primary='AFITSANT'   />
        <Link to='/afitsant'>
        <IconButton onClick={menuBar}
        sx={{ 
          background: 'green', 
          marginLeft: 5, 
          color: 'sandybrown',
          "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1.1)',
            backgroundColor: 'green',
            color: 'black'
          }}}
        >
          <ArrowForwardIosIcon/>
        </IconButton>
      </Link>
      </ListItem>
      </>
      :<Password values={values} setValues={setValues} paswordFunction={loginFunction} eror={eror}/>
        } 
        </div>
       }</>}</>}</>}
    </List> 
   </>
    }
    </Box>
  );
  return (
    <>
    <Box 
    >
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={aa}
        key={vertical + horizontal}
        />
    </Box>
  </>
  );
}
