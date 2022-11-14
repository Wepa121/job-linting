import RadioForm from "./RadioForm"
import TextForm from "./TextForm"
import CheckForm from "./CheckForm"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Ara({formik, edit}) {
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(edit.isEdit){
      const {data} = edit
      formik.setValues({
        ...data, newX: data.new.toString(), featured: data.featured.toString(),
      })
    }
  }, [edit])

  return (
    <div className="form-card">
      <form className="form" onSubmit={formik.handleSubmit}>
        <TextForm formik = {formik} />
        <RadioForm formik = {formik} />
        <CheckForm formik = {formik} />
        <button type= "submit" className="btn-submit">Add Job </button>
        <button className="btn-submit" onClick={() => navigate("/")}>Back To Home</button>
      </form>
    </div>
  )
}

export default Ara