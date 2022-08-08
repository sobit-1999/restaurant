import { useDispatch } from "react-redux";
import {  deleteTask } from "./cardSlice";
import ClearIcon from '@mui/icons-material/Clear';
import Aos from "aos";
import { useEffect } from "react";

const List = ({ id, label, sum, count, sumCount }) => {
  
  
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  const dispatch = useDispatch();
  return (
    // <div

    // >
      <div
      data-aos="fade-right"
           className="card-mijoz"
           style={{
            display: "flex",
            alignItems: "center",
            padding: '10px',
            transition: '1s',

           }}
      >
      <h3 style={{marginRight: 18}}> {label} </h3>
     <h4> Narxi - {sum}  Soni - {count} ta  Umumiy narxi - {sumCount} </h4>
     {/* </> */}
        <ClearIcon 
         onClick={() => dispatch(deleteTask(id))}
         sx={{
           marginTop: -3,
           marginLeft: 3,
           color: 'red', 
           transition: '1s',
              "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1.5)',
            backgroundColor: 'red',
            color: 'black',
            borderRadius: '50%'

          }
          }}
          />
          </div>
    // </div>
  );
};

export default List;
