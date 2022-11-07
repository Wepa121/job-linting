import {useState} from "react"

import CardList from "components/CardList"
import useQuery from "templates/hooks/useQuery"
import {queryJobs} from "data/query"
import { insertJobs } from "data/query"

function App() {
  const [list, setList] = useState(require("data/data.json"))
  const [jobs, setJobs] = useState([])

  // get list of jobs
  useQuery(queryJobs, setJobs)

  // create new Job
  const handleClick = ()=>{
    const tempObj = {
      company:"FaceIt",
      logo:"./images/faceit.svg",
      newX: false, 
      featured: false, 
      position: "Junior Backend Developer", 
      role: "Backend", 
      level: "Junior", 
      contract: "Full Time", 
      location: "UK only", 
      languages: "{Ruby}", 
      tools: "{RoR}"
    }
    const query = insertJobs(tempObj)
    
    const createJobs = async () => { 
      const res = await fetch("https://hasura-production-45b5.up.railway.app/v1/graphql",{
      method: "POST", 
      headers:{
        "content-type" : "application/json",
        "x-hasura-admin-secret" : "wepawepa121"
      },
      body: JSON.stringify({
        query
      })
    })
      const data = await res.json()
      setJobs([...jobs, data.data.insert_Jobs_one])
      
    }
    createJobs()
  }

  return (
      <div className = "container">
        <div className = "new"> 
          {jobs && jobs.map((item, index) => <div className = "users" key = {index}>
              <p>{item.id}</p>
              <p>{item.company}</p>
              <p>-</p>
            </div>
          )}
          <p>----------------------------</p>
        </div>
        <button onClick={handleClick}>add Job</button>
        <CardList list = {list}/>
      </div>
  );
}

export default App;
