import { useNavigate } from "react-router-dom"
import { Formik } from "formik"
import * as Yup from "yup"


import Ara from "./Ara"

function JobForm({handleAdd, edit, handleUpdate}) {
  const navigate = useNavigate() 

  const JobsSchema = Yup.object().shape({
    company : Yup.string()
      .min(2, "Too short!")
      .max(50, "Too Long!")
      .required("Please insert Company Name"),
    logo : Yup.string()
      .min(2, "Too short!")
      .max(50, "Too Long!")
      .required("Please insert logo"),
    location : Yup.string()
      .min(2, "Too short!")
      .max(50, "Too Long!")
      .required("Please insert Location"),
    position : Yup.string()
      .min(2, "Too short!")
      .max(50, "Too Long!")
      .required("Please insert Position"),
    newX: Yup.string().required("Please choose (new)"),
    featured: Yup.string().required("Please choose (featured)"),
    role: Yup.string().required("Please choose (role)"),
    level: Yup.string().required("Please choose (level)"),
    contract: Yup.string().required("Please choose (contract)")
  })
  
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
    validationSchema = { JobsSchema }
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