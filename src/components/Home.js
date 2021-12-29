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
    console.log(launches.length)
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
    function renderLaunches(launchObj){
        setLaunches(launchObj)
    }

    return(
        <div>
          <h1>SpaceX Launch Compilation</h1>
          <Companies handleNewCompany={handleNewCompany} deleteCompany={deleteCompany} allCompanies={allCompanies}/>
          <LaunchScreen allCompanies={allCompanies} addLaunchAfterPost={addLaunchAfterPost} removeLaunchAfterDelete={removeLaunchAfterDelete} renderLaunches={renderLaunches} launches={launches} />
        </div>
    )
}

export default Home