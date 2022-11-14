
function TextForm({formik}) {

  return (
    <div className="form-text">
      <label>
        Company Name
        <input 
          name="company"
          id="company"
          {...formik.getFieldProps("company")}/>
      </label>
      {(formik.errors.company && formik.touched.company) && <p className="error">{formik.errors.company}</p>}
      
      <label>
        Logo
        <input 
          name = "logo"
          id="logo"
          {...formik.getFieldProps("logo")}/>    
      </label>
      {(formik.errors.logo && formik.touched.logo) && <p className="error">{formik.errors.logo}</p>}

      <label>
        Location
        <input 
          name = "location"
          id="location"
          {...formik.getFieldProps("location")}/>
      </label>
      {(formik.errors.location && formik.touched.location) && <p className="error">{formik.errors.location}</p>}
      
      <label>
        Position
        <input 
          name = "position"
          id="position"
          {...formik.getFieldProps("position")}/>
      </label>
      {(formik.errors.position && formik.touched.position) && <p className="error">{formik.errors.position}</p>}
    </div>
  )
}

export default TextForm