import React from 'react'
import Img3 from '../assets/loader.svg'

export default function Loder({list}) {
  return (
    
   <div>
   {
    list.length>0 ?
    <div className='w-full flex justify-center'>
    <img src={Img3} alt="" width={100} height={100} />
     </div>
     :" "
   }



   </div>
    
  )
}
