import { useState } from "react"
import { useNavigate } from "react-router-dom"

import RadioForm from "./RadioForm"
import TextForm from "./TextForm"
import CheckForm from "./CheckForm"

function JobForm({handleAdd, edit}) {
  const navigate = useNavigate()
  console.log(edit)
  const [formData, setFormData] = useState({
    company: "",
    logo: "",
    location: "",
    position: "",
  })

  const [formRadio, setFormRadio] = useState({
    newX: "",
    featured: "",
    role: "",
    level: "",
    contract: "",
  })

  const [formCheck, setFormCheck] = useState({
    languages: [],
    tools: []
  }) 

  const handleSubmit = (e) => {
    e.preventDefault()
    
    setFormData({ company: "", logo: "", location: "", position: "" })
    setFormRadio({ newX: "", featured: "", role: "", level: "", contract: "" })
    setFormCheck({languages: [], tools: []})
    
    const obj = {...formData, ...formRadio, ...formCheck}
    obj.languages = `{${obj.languages.join(", ")}}`
    obj.tools = `{${obj.tools.join(", ")}}`
    handleAdd(obj)
    navigate("/")
  }


  return (
    <div className="form-card">
      <form className="form" onSubmit={handleSubmit}>
        <TextForm formData = {formData} setData = {(x) => setFormData(x)}/>
        <RadioForm formRadio = {formRadio} setRadio = {(x) => setFormRadio(x)}/>
        <CheckForm formCheck = {formCheck} setCheck = {(x) => setFormCheck(x)}/>
        <button type= "submit" className="btn-submit">Add Job </button>
        <button className="btn-submit" onClick={() => navigate("/")}>Back To Home</button>
      </form>
    </div>
  )
}

export default JobForm