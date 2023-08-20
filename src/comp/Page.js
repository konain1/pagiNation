import React from 'react'
import { useState } from 'react'




function Page({apiData}) {



  const [startIndex,setStartIndex] = useState(1)

  const [pageNo,setPageNo] = useState(1)


const NextHandler = ()=>{

 
  setStartIndex(startIndex+1)
}
const PrevHandler = ()=>{
  
 
  setStartIndex(startIndex-1)
}

const pageNoHandler = (event)=>{
  console.log(event.target.innerHTML)
  setStartIndex(event.target.innerHTML)
}


  return (
    <>
    <div className='photos'>

    {apiData.slice(startIndex *10 -10,startIndex*10).map((item,key)=>{

        return ( <div key={item.id} > <img src={item.thumbnailUrl} className='photo'/><p>{item.id}</p></div>)
      })}


    </div>

    {
      startIndex > 0 ? <button className='nextPrev' onClick={PrevHandler} id='prev'>Prev</button> : 'Plz press Next Button'

    }
    {
        startIndex < (apiData.length / 10 ) -1 ?  <button  id='next' className='nextPrev' onClick={NextHandler}>Next</button> : 'plz Press Prev Button'
     }

     <div className='pageNo'>
    

     
      {apiData.slice(1,apiData.length / 10).map((item,key)=>{
        return <button onClick={(e)=>pageNoHandler (e)} className={startIndex == item.id -1 ?'currentItem':''}  key={item.id} >{item.id -1  }</button>
      })} 

      
     

    </div>
    </>
   
  )
}

export default Page
