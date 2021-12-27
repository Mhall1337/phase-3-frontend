import Companies from "./Companies"
import LaunchScreen from "./LaunchScreen"
import { useState, useEffect } from "react"

function Home(){

    const [allCompanies, setCompanies] = useState([])

    function handleNewCompany(company){
        setCompanies([...allCompanies, company])
    }
    function deleteCompany({id}){
        setCompanies(allCompanies.filter(launch => launch.id !== id))

        fetch(`http://localhost:9292/companies/${id}`,{
            method: 'DELETE'
        })
            .then(resp => resp.json())
            .then()
    }

    useEffect(()=>{
        fetch("http://localhost:9292/companies")
        .then(resp => resp.json())
        .then(companies => setCompanies(companies))
    },[])


    return(
        <div>
          <h1>SpaceX Launch Compilation</h1>
          <Companies handleNewCompany={handleNewCompany} deleteCompany={deleteCompany} allCompanies={allCompanies}/>
          <LaunchScreen allCompanies={allCompanies}/>
        </div>
    )
}

export default Home