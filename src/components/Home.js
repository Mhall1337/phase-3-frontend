import Companies from "./Companies"
import CreateCompany from "./CreateCompany"

function Home(){
    return(
        <div>
          <h1>SpaceX Launch Compilation</h1>
          <CreateCompany />
          <Companies />
        </div>
    )
}

export default Home