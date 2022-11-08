import {useEffect, useState} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
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
  const handleAdd = (tempObj)=>{
    // const tempObj = {
    //   company:"FaceIt",
    //   logo:"./images/faceit.svg",
    //   newX: false, 
    //   featured: false, 
    //   position: "Junior Backend Developer", 
    //   role: "Backend", 
    //   level: "Junior", 
    //   contract: "Full Time", 
    //   location: "UK only", 
    //   languages: "{Ruby}", 
    //   tools: "{RoR}"
    // }
    console.log("run")
    
    insertJob(tempObj);
  }

  // Delete job but need id
  const handleDelete = ()=>{
    deleteJob(7)
  }

  return (
    <Router>
      <div className = "container">
        <div className = "new"> 
          {jobs && jobs.map((item, index) => <div className = "users" key = {index}>
              <p>{item.id}</p>
              <p>{item.company}</p>
              <p>-</p>
            </div>
          )}
        </div>
        <button onClick={handleAdd}>add Job</button>
        <button onClick={handleDelete}>Delete</button>
        <p>s</p>
        <Routes>
          <Route path="/" element = {<CardList list = {list}/>} />
          <Route path="/add" element = {<JobForm handleAdd = {handleAdd}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
