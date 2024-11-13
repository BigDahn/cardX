import { useState } from 'react'
import data from '../data'
import Accordion from './Accordion'

const Accord = () => {
  const [moreInfo,setMoreInfo] = useState()
  return (
    <div>
      {data.map((d)=>{
      
        return <Accordion key={d.id} d={d} moreInfo={moreInfo} setMoreInfo={setMoreInfo}/>

      })}

    </div>
  )
}

export default Accord
