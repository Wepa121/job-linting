import {useEffect, useState} from "react"

import CardList from "components/CardList"
import JobForm from "components/JobForm"
import useJobsState from "templates/hooks/useJobsState"


function App() {
  const {jobs, fetchJobs, insertJob, deleteJob} = useJobsState();

  const [list, setList] = useState(require("data/data.json"))

  useEffect(() => {
    fetchJobs();
  }, []);

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
    
    insertJob(tempObj);
  }

  // Delete job but need id
  const handleDelete = ()=>{
    deleteJob(7)
  }
  console.log("appp")
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
      <button onClick={handleDelete}>Delete</button>
      <CardList list = {list}/>
      <JobForm/>
    </div>
  );
}

export default App;
