import {useEffect, useState} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CardList from "components/CardList"
import JobForm from "components/JobForm"
import useJobsState from "templates/hooks/useJobsState"


function App() {
  const [edit, setEdit] = useState({
    data: {},
    isEdit: false
  })
  const {jobs, fetchJobs, insertJob, deleteJob, updateJob} = useJobsState();

  const [filterObj, setFilterObj] = useState({
    role: "",
    level: "",
    languages: [],
    tools : []
  })


  useEffect(() => {
    fetchJobs(filterObj);
  }, [filterObj]);

  // create new Job
  const handleAdd = (tempObj)=>{
    insertJob(tempObj);
  }

  // Delete job
    const handleDelete = (id)=>{
    deleteJob(id)
  }
  // Update job
  const handleUpdate = (id, payload) =>{
    updateJob(id, payload)
    setEdit({
      data: {},
      isEdit: false
    })
  }

  const handleEdit = (data) => {
    setEdit({data, isEdit: true})
  }

  return (
    <Router>
      <div className = "container">
        <Routes>
          <Route path="/" element = {<CardList list = {jobs} 
                                      handleDelete = {handleDelete} 
                                      handleEdit = {handleEdit}
                                      filterObj = {filterObj}
                                      setFilter = {(obj) => setFilterObj(obj)}/>} />
          <Route path="/add" element = {<JobForm handleAdd = {handleAdd}/>} />
          <Route path="/edit/:id" element = {<JobForm edit = {edit} handleUpdate = {handleUpdate}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
