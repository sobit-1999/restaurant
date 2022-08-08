import { Select, MenuItem, Box, IconButton, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { dates } from "../../dates";
import { addTask, decrement, increment,  updateValue, chekFunction } from "../../redux/features/card/cardSlice";
import List from "../../redux/features/card/List";
import AOS from "aos";
import { useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from "react-router-dom";


const Mijoz = ({name, data, useSnackbar }) => {

  const { enqueueSnackbar } = useSnackbar();

  
  const value = useSelector((state) => state.todo.inputTaskValue);
  const count = useSelector((state) => state.todo.count)
  const arraySumCount = data.buyurtma.map((item, i) => {return item.sumCount})
  const umumiySumCount = arraySumCount.length>0? arraySumCount.reduce((x, y) => x+y):[]
  const umumiySumCountFoiz = umumiySumCount+umumiySumCount*0.1
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(updateValue(e.target.value));
  }
  return (
    <>
      <h3
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      >{name} - AFITSANT {data.orni} - MIJOZIGA BUYURTMA</h3>
         <div >
        {dates.map(item1 => {return item1.taomlar.map((item2, i) => {return<span className='card'>
       
     { <Select 
       value={value} key={i} 
       id='select'
       onChange={handleChange} 
       displayEmpty
       inputProps={{ 'aria-label': 'Without label' }}
       sx={{
        background: value ?'black' : 'rgb(39, 34, 34)',
        color: 'orange',
        zIndex: 1,
          fontSize: 10,
          paddingX: -5,
          paddingY: -3
       }}
       > 
       
       <MenuItem value=""
         sx={{
          fontSize:10
         }}
       >
            <em>{item2.nomi}</em>
          </MenuItem>

       {item2.turi.map((item3, index) => 
       {return <MenuItem
       value={item3.name}
       sx={{
        fontSize:10,
        padding: -5
       }}
       key={index} >
        {item3.name}
        </MenuItem>})}
        </Select>}
         </span>}) })}

    </div>
    
    <IconButton 
    sx={{
      background: 'rgb(39, 34, 34)',
      margin: 2,
      color: 'orange',
      "&:hover": {
        cursor: 'pointer',
        transform: 'scale(1.1)',
        backgroundColor: 'rgb(39, 34, 34)',
        color: 'black'
      }
    }}
    onClick={()=> dispatch(increment())}>
      <AddIcon/>
      </IconButton>
    <span style={{marginTop: 5}}>{count}</span> 
     <IconButton 
         sx={{
          background: 'rgb(39, 34, 34)',
          color: 'orange',
          margin: 2,
          "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1.1)',
            backgroundColor: 'rgb(39, 34, 34)',
            color: 'black',
          }
        }}
     onClick={()=> dispatch(decrement())}><RemoveIcon/></IconButton>
      <Button onClick={(e) => {
        dispatch(addTask(data.orni))
        }}
        sx={{
          paddingX:3,
          paddingY: 1,
          background: 'rgb(39, 34, 34)',
          color: 'orange',
          margin: 2,
          "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1.1)',
            backgroundColor: 'rgb(39, 34, 34)',
            color: 'black',
          }
        }}
        >QO'SHISH
        </Button>
        <Button 
        
        onClick={(e) => {
        dispatch(chekFunction(data.orni))
        enqueueSnackbar('Muvafaqiyatli yakunlandi', {variant: 'success'});

      }}
        sx={{
          paddingX:3,
          paddingY: 1,
          background: 'rgb(89, 14, 34)',
          color: 'black',
          margin: 2,
          "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1.1)',
            backgroundColor: 'rgb(99, 4, 34)',
            color: 'black',
          }
        }}
        >YAKUNLASH
        </Button>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "20px",
          background: 'rgb(39, 34, 34)',
           marginX: '28%',
           color: 'rgb(241, 246, 251)',
           borderRadius: 5,
           marginBottom: 5
           
          }}
          >
        {data.buyurtma.length ? (
          data.buyurtma.map((todo) => <List key={todo.orni} {...todo} />)
          ) 
          : (
            <h3
            data-aos="flip-up"
            >Ovqat tanlang...</h3>
        )}

      </Box> 
      <Link to={'/'+name+'-afitsant'}> 
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
      <Box
      sx={{  
        position: 'fixed', 
        zIndex: 1,
        bottom: 5,
        left:'5%',
        border: '1px solid orange',
        paddingX: '20px',
        paddingY: 1,
        borderRadius:2
        
      }}
      >
        <h4
        >UMUMIY-HISOB {umumiySumCount}
        </h4>
        <h4
        >10% TO'LOV - {umumiySumCountFoiz}
        </h4>
        </Box>
        </>
  );
};

export default Mijoz;

