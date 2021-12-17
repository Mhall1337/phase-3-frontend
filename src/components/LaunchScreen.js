import { useState } from "react"
import { useEffect } from "react"

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
        


return(
    <div>
       {/* <CreateLaunch /> */}
       {launches.map((launch, index)=>
           <div key={index}>
            <p><strong>Name: </strong>{launch.name}</p>
            <p><strong>Flight was successful:</strong>{launch.success}</p>
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