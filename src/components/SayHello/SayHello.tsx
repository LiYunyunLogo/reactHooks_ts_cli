import React, { useState } from "react"
import './style.scss'

function SayHello(){
    const num = 10
    const [data,setData] = useState({name:'liyunyun'})
    
    return(
        <div>
            Hello!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!{data.name}
        </div>
    )
}
export default SayHello