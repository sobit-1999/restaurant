
import Aos from "aos";
import { useEffect } from "react";
import { useSelector} from "react-redux";
import HodimlarMijozlari from './HodimlarMijozlari';
import { Box } from "@mui/system";



export default function ContenerAll({name}) {


  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

    const buyurtmalar = useSelector((state) => state.todo.afitsantName);

    const buyurtma1 = buyurtmalar.map(item => {return item.mijozlar })
    const buyurtmaArr1 = [...buyurtma1[0],...buyurtma1[1],...buyurtma1[2],...buyurtma1[3],...buyurtma1[4],...buyurtma1[5],...buyurtma1[6],...buyurtma1[7]]
 
const arrChek =[]
for (let i = 0; i < buyurtmaArr1.length; i++) {
     if (buyurtmaArr1[i].chek === undefined && buyurtmaArr1[i].buyurtma.length>0) {
      arrChek.push('')
     }  
}

return (
    <>
       <h2 
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
       > {name.name}
        </h2> 
      {buyurtmaArr1.length ?  <Box sx={{
        display: 'flex', 
        alignItems: 'center', 
        flexFlow: 'row wrap', 
        justifyContent: 'center'
        }} >
        {buyurtmaArr1.map((item, i )=> {return item.buyurtma.length ? 
        <div  key={i}  >
            <HodimlarMijozlari  data={item} name={name} mijozOrni={i} arrChek={buyurtmaArr1} />
         </div> : ''    })}
</Box>: 
<h3>HOZIRCHA BUYURTMA YOQ...</h3>}
    </>
  )
}