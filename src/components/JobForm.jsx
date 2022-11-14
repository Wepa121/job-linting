import { useNavigate } from "react-router-dom"
import { Formik } from "formik"


import Ara from "./Ara"

function JobForm({handleAdd, edit, handleUpdate}) {
  const navigate = useNavigate() 

  const handleError = (values) => {
    const errors = {}
    if(!values.company) errors.company = "Please insert Copmany name"
    else if(values.company.trim().length < 5) errors.company = "Company name must be at least ten character"

    if(!values.logo) errors.logo = "Please insert Logo name"
    else if(values.logo.trim().length < 5) errors.logo = "Logo name must be at least ten character"

    if(!values.location) errors.location = "Please insert location name"
    else if(values.location.trim().length < 5) errors.location = "Location name must be at least ten character"

    if(!values.position) errors.position = "Please insert Position name"
    else if(values.position.trim().length < 5) errors.position = "Position name must be at least ten character"

    if(!values.newX) errors.newX = "Please choose one of them (new)"

    if(!values.featured) errors.featured = "Please choose one of them (featured)"

    if(!values.role) errors.role = "Please choose one of them (role)"

    if(!values.level) errors.level = "Please choose one of them (level)"

    if(!values.contract) errors.contract = "Please choose one of them (contract)"
    return errors
  }
  
  const handleSubmit = (values) => {
    if(edit && edit.isEdit){
      handleUpdate(edit.data.id, values)
    }
    else{
      handleAdd(values)
    }
    navigate("/")
  }


  return (
    <Formik
    initialValues = {{
      company: "",
      logo: "",
      location: "",
      position: "",
      newX: "",
      featured: "",
      role: "",
      level: "",
      contract: "",
      languages: [],
      tools: []
    }}
    validate = { handleError }
    onSubmit = { handleSubmit }
    >
      {(formik) => {
        return(<Ara formik = {formik} edit = {edit}/>)
      }}
    </Formik>
  )
}

JobForm.defaultProps = {
  handleAdd: null,
  edit: null,
  handleUpdate: null, 
}

export default JobForm