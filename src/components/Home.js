import Companies from "./Companies"
import LaunchScreen from "./LaunchScreen"
import { useState, useEffect } from "react"

function Home(){

    const [allCompanies, setCompanies] = useState([])
    const [launches, setLaunches] = useState([])

    function handleNewCompany(company){
        setCompanies([...allCompanies, company])
    }
    function deleteCompany({id}){
        setCompanies(allCompanies.filter(company => company.id !== id))
        setLaunches(launches.filter(launch => launch.company_id !== id))
        fetch(`http://localhost:9292/companies/${id}`,{
            method: 'DELETE'
        })
            .then(resp => resp.json())
            .then()
    }
    
    useEffect(()=>{
        fetch("http://localhost:9292/launches")
        .then((r) => r.json())
        .then(launches => setLaunches(launches))
      },[])
  
    useEffect(()=>{
        fetch("http://localhost:9292/companies")
        .then(resp => resp.json())
        .then(companies => setCompanies(companies))
    },[])

    function addLaunchAfterPost(newLaunch){ 
        setLaunches([...launches, newLaunch])
    }
    function removeLaunchAfterDelete(id){
        setLaunches(launches.filter(launch => launch.id !== id))
    }
    console.log(launches.slice(-1))

    return(
        <div>
          <h1>Rocket Launch Compilation</h1>
          <Companies handleNewCompany={handleNewCompany} deleteCompany={deleteCompany} allCompanies={allCompanies}/>
          <LaunchScreen allCompanies={allCompanies} addLaunchAfterPost={addLaunchAfterPost} removeLaunchAfterDelete={removeLaunchAfterDelete} launches={launches} />
        </div>
    )
}

export default Home