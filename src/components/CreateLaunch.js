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
                <input></input>
            </form>
            
        </div>
    )
}