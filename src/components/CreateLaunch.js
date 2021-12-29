function CreateLaunch({addLaunchAfterPost, allCompanies}){

    
    function handleSubmit (e){
        e.preventDefault()
        const newLaunch = {
            name : e.target[0].value,
            details: e.target[2].value,
            success: e.target[1].value,
            companyName: e.target[3].value
        }
        e.target.reset()
    fetch("http://localhost:9292/launches",{
        method: "POST",
        headers:{
            "content-type" : "application/json",
            "accept" : "application/json"
        },
        body: JSON.stringify(newLaunch)
    })
    .then(resp => resp.json())
    .then(resp => addLaunchAfterPost(resp))
    }


    return(
        <div>
            <h1>Create A Launch</h1>
          <form onSubmit={handleSubmit}>
            <label>Launch Name:</label>
                <input type='text' name="launchName" placeholder='Launch Name'></input>
            <label>Flight Success:</label>
            <select>
                    <option value='true'>True</option>
                    <option value ='false'>False</option>
            </select>
            <label>Outcome Details:</label>
                <input type='text' name='outcomeDetails' placeholder="Outcome Details"></input>
            <label>Company Name:</label>
                <select>
                    {allCompanies.map((company, index) => <option key={index}>{company.company_name}</option>)}   
                </select>    
                <input type='submit'></input>
          </form>
        </div>
    )
}

export default CreateLaunch