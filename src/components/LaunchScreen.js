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
       {launches.map((launch, index)=>
           <div key={index}>
            <h4>Name:{launch.name}</h4>
            <p>Flight was successful:{launch.success}</p>
            <p><strong>Outcome Details:</strong> {launch.details}</p>
            <p>Flight number: {launch.flight_number}</p>
           </div> 
       )}
    </div>
)
}
export default LaunchScreen