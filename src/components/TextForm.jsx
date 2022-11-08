
function TextForm({formData, setData}) {
  
  const handleChange = (e)=>{
    setData({
      ...formData, 
      [e.target.id] : e.target.value
    })
  }
  return (
    <div className="form-text">
      <label>
        Company Name
        <input 
          name="company"
          id="company"
          value = {formData.company}
          onChange = {handleChange}/>
      </label>
      <label>
        Logo
        <input 
          name = "logo"
          id="logo"
          value = {formData.logo}
          onChange = {handleChange}/>
      </label>
      <label>
        Location
        <input 
          name = "location"
          id="location"
          value = {formData.location}
          onChange = {handleChange}/>
      </label>
      <label>
        Position
        <input 
          name = "position"
          id="position"
          value = {formData.position}
          onChange = {handleChange}/>
      </label>
    </div>
  )
}

export default TextForm