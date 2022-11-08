
function RadioForm({formRadio, setRadio}) {
  
  const handleChange = (e) => {
    setRadio({
      ...formRadio,
      [e.currentTarget.id] : e.currentTarget.value
    })
  }
  return (
    <div>
      <p>Is the Company New?</p>
        <label>
          <input 
            name="new"
            type="radio"
            id="new"
            value = "true"
            checked = {formRadio.new === "true"}
            onChange = {handleChange}
             />
          Yes
        </label>
        <label>
          <input 
            name="new"
            type="radio"
            id="new"
            value = "false"
            checked = {formRadio.new === "false"}
            onChange = {handleChange}
            />
          No
        </label>

        <p>Is the Company Featured?</p>
        <label>
          <input 
            name="featured"
            type="radio"
            id="featured"
            value = "true"
            checked = {formRadio.featured === "true"}
            onChange = {handleChange}
            />
          Yes
        </label>
        <label>
          <input 
            name="featured"
            type="radio"
            id="featured"
            value = "false"
            checked = {formRadio.featured === "false"}
            onChange = {handleChange}
            />
          No
        </label>

        <p>What should the role of the developer be?</p>
        <label>
          <input 
            name="role"
            type="radio"
            id="role"
            value = "Frontend"
            checked = {formRadio.role === "Frontend"}
            onChange = {handleChange}
            />
          Frontend
        </label>
        <label>
          <input 
            name="role"
            type="radio"
            id="role"
            value = "Backend"
            checked = {formRadio.role === "Backend"}
            onChange = {handleChange}
            />
          Backend
        </label>
        <label>
          <input 
            name="role"
            type="radio"
            id="role"
            value = "Fullstack"
            checked = {formRadio.role === "Fullstack"}
            onChange = {handleChange}
            />
          Fullstack
        </label>

        <p>What should the developer level be?</p>
        <label>
          <input 
            name="level"
            type="radio"
            id="level"
            value = "Junior"
            checked = {formRadio.level === "Junior"}
            onChange = {handleChange}
            />
          Junior
        </label>
        <label>
          <input 
            name="level"
            type="radio"
            id="level"
            value = "Midweight"
            checked = {formRadio.level === "Midweight"}
            onChange = {handleChange}
            />
          Midweight
        </label>
        <label>
          <input 
            name="level"
            type="radio"
            id="level"
            value = "Senior"
            checked = {formRadio.level === "Senior"}
            onChange = {handleChange}
            />
          Senior
        </label>

        <p>What about Contract?</p>
        <label>
          <input 
            name="contract"
            type="radio"
            id="contract"
            value = "Part Time"
            checked = {formRadio.contract === "Part Time"}
            onChange = {handleChange}
            />
          Part Time
        </label>
        <label>
          <input 
            name="contract"
            type="radio"
            id="contract"
            value = "Full Time"
            checked = {formRadio.contract === "Full Time"}
            onChange = {handleChange}
            />
          Full Time
        </label>
        <label>
          <input 
            name="contract"
            type="radio"
            id="contract"
            value = "Contract"
            checked = {formRadio.contract === "Contract"}
            onChange = {handleChange}
            />
          Contract
        </label>
    </div>
  )
}

export default RadioForm