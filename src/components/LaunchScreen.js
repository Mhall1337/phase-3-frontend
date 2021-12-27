import { useState } from "react"
import { useEffect } from "react"
import CreateLaunch from './CreateLaunch.js'

function LaunchScreen({allCompanies}){
    
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
     if(launchSuccess === true){
           return 'Lift off was successful'
        }else if(launchSuccess === false){
           return 'Rocket failed to lift off'
        }
    }
    function addLaunch(newLaunch){ 
        setLaunches([...launches, newLaunch])
    }
return(
    <div>
       <CreateLaunch addLaunch={addLaunch} allCompanies={allCompanies}/>
       {launches.map((launch, index)=>
         <div key={index}>
            <p><strong>Name: </strong>{launch.name}</p>
            <p><strong>Launch success:</strong>{defineSuccess(launch.success)}</p>
            <p><strong>Outcome Details:</strong> {launch.details}</p>
            <p><strong>Flight number:</strong> {launch.flight_number}</p>
            <p><strong>Company:</strong>{launch.company.company_name}</p>
            <button onClick={()=>deleteLaunch(launch)}>Delete Launch</button>
            <hr></hr>
         </div> 
       )}
    </div>
)
}
export default LaunchScreen