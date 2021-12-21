import { useEffect, useState } from "react";

function Companies(){
    const [allCompanies, setCompanies] = useState([])
    useEffect(()=>{
        fetch("http://localhost:9292/companies")
        .then(resp => resp.json())
        .then(companies => setCompanies(companies))
    },[])
    

    return(
        <div>
            {allCompanies.map((company, index) => 
                <p key={index}>{company.company_name}</p>
            )}
        </div>
    )
}
export default Companies