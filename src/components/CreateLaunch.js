function CreateLaunch({addLaunch}){
    function handleSubmit (e){
        
        e.preventDefault()
        const newLaunch = {
            name : e.target[0].value,
            details: e.target[2].value,
            success: e.target[1].value,
        }
    fetch("http://localhost:9292/launches",{
        method: "POST",
        headers:{
            "content-type" : "application/json",
            "accept" : "application/json"
        },
        body: JSON.stringify(newLaunch)
    })
    .then(resp => resp.json())
    .then(resp => {
        console.log(resp)
        addLaunch(resp)
    })
    // .then(postedLaunch => {const addNewLaunch = Object.assign(launches, postedLaunch)
    //     setLaunches(addNewLaunch)})
    }
    return(
        <div>
          <form onSubmit={handleSubmit}>
            <label>Launch Name:</label>
                <input type='text' name="launchName" placeholder='Launch Name'></input>
            <label>Flight Success:</label>
                <input type='boolean' name='flightSuccess'placeholder='Flight Success'></input>
            <label>Outcome Details:</label>
                <input type='text' name='flightDetails' placeholder='Outcome Details:'></input>
                <input type='submit'></input>
          </form>
        </div>
    )
}

export default CreateLaunch