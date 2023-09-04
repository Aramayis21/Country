import './App.css';
import axios from 'axios';
import store from './redux/store';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Main } from './components/Main/Main';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { Info } from './components/Info/Info';
import Error from './components/Header/Error';

export const instance = axios.create({
  baseURL: 'https://restcountries.com/v3.1'
})

function App() {
  const dispatch = useDispatch()
  const state = useSelector((state)=> state.countries)
  const text = useSelector((state)=> state.text)
  const [info,setInfo] = useState(null)

  useEffect(()=>{
    if(text ===  ''){

      instance.get('/all')
      .then(res => dispatch({type : 'get_countries' , payload : res.data}))
    }if(text !== ''){
        instance.get(`/name/${text}`)
    .then(res => dispatch({type : 'get_countries' , payload : res.data}))
    .catch((e) => {
      console.error(e.message)
    })
    }
    
  }, [text])

  // useEffect(() => {
  //   instance.get('/name')
  //   .then(res => dispatch({type : 'get_countries' , payload : res.data}))
  // },[text])

  
  // useEffect(()=>{
  //   instance.get(`/name/${text}`)
  //   .then(res => dispatch({type : 'get_countries' , payload : res.data}))
  // },[text])
  return (
    <div className="App">
      <Header/>
      <Routes>
    <Route path='/' element={<Main setInfo={setInfo}/>}/>
    <Route path='/Info/:name' element ={ <Info info={info}/>}/>
      </Routes>
        
    </div>
  );
}

export default App;
