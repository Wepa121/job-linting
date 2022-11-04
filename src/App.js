import {useState} from "react"

import CardList from "components/CardList"

import useQuery from "templates/hooks/useQuery"

import {queryJobs} from "data/query"
import { insertJobs } from "data/query"


function App() {
  const [list, setList] = useState(require("data/data.json"))
  
  const [obj, setObj] = useState("as")

  const {Jobs} = useQuery(queryJobs)
  const insJ = useQuery(insertJobs(obj))

  const handleClick = ()=>{
    const tempObj = {
      company:"MyHome",
      logo:"./images/myhome.svg",
      newX: false, 
      featured: false, 
      position: "Junior Frontend Developer", 
      role: "Frontend", 
      level: "Junior", 
      contract: "5d ago", 
      location: "USA only", 
      languages: "{CSS, JavaScript}", 
      tools: "{}"
    }

    setObj(tempObj)
  }
  // console.log(obj)
  // console.log("ins", insJ)
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
