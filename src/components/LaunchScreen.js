import { useState } from "react"
import { useEffect } from "react"
import CreateLaunch from './CreateLaunch.js'

function LaunchScreen(){
    const [launches, setLaunches] = useState([])
    useEffect(()=>{
      fetch("http://localhost:9292/launches")
      .then((r) => r.json())
      .then(launches => setLaunches(launches))
    },[])

    function deleteLaunch({id}){
        setLaunches(launches.filter(launch => launch.id !== id))
        fetch(`http://localhost:9292/launches/${id}`,{
            method: 'DELETE'
        })
            .then(resp => resp.json())
            .then()
    }
    function defineSuccess(launchSuccess){
     if(launchSuccess == 0){
           return 'false'
        }else if(launchSuccess == 1){
           return 'true'
        }
    }


return(
    <div>
       <CreateLaunch />
       {launches.map((launch, index)=>
           <div key={index}>
            <p><strong>Name: </strong>{launch.name}</p>
            <p><strong>Lift off was successful:</strong>{defineSuccess(launch.success)}</p>
            <p><strong>Outcome Details:</strong> {launch.details}</p>
            <p><strong>Flight number:</strong> {launch.flight_number}</p>
            <button onClick={()=>deleteLaunch(launch)}>Delete Launch</button>
            <hr></hr>
           </div> 
       )}
    </div>
)
}
export default LaunchScreen