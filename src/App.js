import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Page from './comp/Page';



function App() {

  const [apiData,setApiData] = useState([])

  const getProducts = async()=>{

     const productData = await axios.get('https://jsonplaceholder.typicode.com/photos')
     setApiData(productData.data)
     console.log(productData.data)

  }

console.log(apiData)
  useEffect(()=>{
    getProducts()
  },[])


  return (
    <div className="App">
    <h1>Gallery</h1>
    <Page apiData={apiData}/>
    </div>
  );
}

export default App;
