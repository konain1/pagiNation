import React from 'react'
import { useState } from 'react'




function Page({apiData}) {



  const [startIndex,setStartIndex] = useState(1)


const NextHandler = ()=>{

  setStartIndex(startIndex+1)
}
const PrevHandler = ()=>{
  if(setStartIndex < 1){
    document.getElementById('prev').style.display = 'none'
  }

  setStartIndex(startIndex-1)
}



  return (
    <>
    <div className='photos'>
    {apiData.slice(startIndex *10 -10,startIndex*10).map((item,key)=>{
        return ( <div key={item.id} > <img src={item.thumbnailUrl} className='photo'/><p>{item.id}</p></div>)
      })}

    </div>



     <div className='pageNo'>
    {
      startIndex >= 0 ? <button onClick={PrevHandler} id='prev'>Prev</button> : 'Plz press Next Button'

    }

     
      {apiData.slice(1,apiData.length / 10).map((item,key)=>{
        return <button className={startIndex == item.id -1 ?'currentItem':''}  key={item.id} >{item.id -1}</button>
      })} 

      {
        startIndex < apiData.length ?  <button onClick={NextHandler}>Next</button> : 'plz Press Prev Button'
      }
     

    </div>
    </>
   
  )
}

export default Page
