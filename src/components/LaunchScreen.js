import { useState } from "react"
import { useEffect } from "react"
function LaunchScreen(){
    const [launches, setLaunches] = useState([])
    useEffect(()=>{
      fetch("http://localhost:9292/launches")
      .then((r) => r.json())
      .then(launches => setLaunches(launches))
    },[])

    console.log(launches[1])
return(
    <div>
       launches
       {launches.map(launch=>
           <div>
            <h4>Name:{launch.name}</h4>
           </div> 
       )}
    </div>
)
}
export default LaunchScreen