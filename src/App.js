import {useState} from "react"

import CardList from "components/CardList"
import useQuery from "templates/hooks/useQuery"
import {queryJobs} from "data/query"
import { insertJobs } from "data/query"

function App() {
  const [list, setList] = useState(require("data/data.json"))
  
  // get list of Jobs
  const {Jobs} = useQuery(queryJobs)

  // create new Job
  const handleClick = ()=>{
    const tempObj = {
      company:"Loop Studios",
      logo:"./images/loop-studios.svg",
      newX: false, 
      featured: false, 
      position: "Software Engineer", 
      role: "Fullstack", 
      level: "Midweight", 
      contract: "Full Time", 
      location: "Worldwide", 
      languages: "{JavaScript}", 
      tools: "{Ruby, Sass}"
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
      console.log(data.data.insert_Jobs_one)
    }
    createJobs()
  }

  
  return (
      <div className = "container">
        <div className = "new"> 
          {Jobs && Jobs.map((item, index) => <div className = "users" key = {index}>
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
