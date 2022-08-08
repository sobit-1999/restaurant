import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Afitsant from './components/contener/Afitsant';
import AfitsantLar from './components/contener/AfitsantLar';
import CardOvqatlar from './components/contener/CardOvqatlar';
import ContenerAll from './components/contener/ContenerAll';
import Mijoz from './components/contener/Mijoz';
import Header from './components/header/Header';
import { dates } from './dates';
import { SnackbarProvider, useSnackbar } from 'notistack';


function App() {
  

  const name = useSelector((state) => state.todo.afitsantName);
console.log(name);
  return (
    <SnackbarProvider 
            maxSnack={1}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}>
    <BrowserRouter>
    <div className="App">
      <Header/>
    <Routes>
    {dates.map((item, i) => <Route key={i} path={item.to} element={<ContenerAll name = {item}/>}/>)}
    <Route path='/' element={<CardOvqatlar/>}/>
    <Route path='/afitsant' element={<AfitsantLar/>}/>
    {name.map((item, index ) => {return <Route key={index} path={'/'+item.name+'-afitsant'} element={<Afitsant name={item.name} mijozlar={item.mijozlar} id={item.id}/>}/>})}
    {name.map((item, index) => {return  item.mijozlar.map(mijoz => {return <Route key={index} path={'/'+mijoz.orni+'mijoz'} element={<Mijoz data={mijoz} name={item.name} useSnackbar={useSnackbar}/>}/>})})}
     </Routes>
    </div>
    </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
