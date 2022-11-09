import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import RadioForm from "./RadioForm"
import TextForm from "./TextForm"
import CheckForm from "./CheckForm"

function JobForm({handleAdd, edit, handleUpdate}) {
  const navigate = useNavigate()

  useEffect(()=>{
    if(edit.isEdit){
      const {data} = edit
      setFormData({
        company: data.company,
        logo: data.logo,
        location: data.location,
        position: data.position
      })
      setFormRadio({
        newX: "" + data.new,
        featured: "" + data.featured,
        role: data.role,
        level: data.level,
        contract: data.contract
      })
      setFormCheck({
        languages: data.languages,
        tools: data.tools
      })
    }
  }, [edit])    //mesele bar edit son back to home son add job mesele ine


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
    if(edit.isEdit){
      handleUpdate(edit.data.id, obj)
    }else{
      handleAdd(obj)
    }
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