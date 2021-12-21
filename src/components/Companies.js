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

    return(
        <div>
            <CreateCompany handleNewCompany={handleNewCompany}/>
            {allCompanies.map((company, index) => 
                <p key={index}>{company.company_name}</p>
            )}
        </div>
    )
}
export default Companies