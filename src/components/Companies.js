import { useEffect, useState } from "react";
import CreateCompany from "./CreateCompany";

function Companies(){
    const [allCompanies, setCompanies] = useState([])

    useEffect(()=>{
        fetch("http://localhost:9292/companies")
        .then(resp => resp.json())
        .then(companies => setCompanies(companies))
    },[])
    
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

    return(
        <div>
            <CreateCompany handleNewCompany={handleNewCompany}/>
            {allCompanies.map((company, index) => 
            <div key={index}>
                <p>{company.company_name}<button onClick={()=>deleteCompany(company)}>remove</button></p>
                
            </div>
            )}
        </div>
    )
}
export default Companies