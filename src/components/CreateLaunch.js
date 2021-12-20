function CreateLaunch(){
    function addNewLaunch(){
    fetch("http://localhost:9292/launches",{
        method: "POST",
        headers:{
            "content-type" : "application/json",
            "accept" : "application/json"
        },
        body: JSON.stringify()
    })
    .then(resp => resp.json())
    .then(resp => console.log(resp))
    }
    return(
        <div>
            <form>
                <label>Launch Name:</label>
                <input type='text' placeholder='Launch Name'></input>
                <label>Flight Success:</label>
                <input type='text' placeholder='Flight Success'></input>
                <label>Outcome Details:</label>
                <input type='text' placeholder='Outcome Details:'></input>
                <input type='submit'></input>
            </form>
            
        </div>
    )
}

export default CreateLaunch