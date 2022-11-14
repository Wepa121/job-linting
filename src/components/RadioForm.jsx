
function RadioForm({formik}) {
  const {handleChange} = formik  

  return (
    <div>
      <p>Is the Company New?</p>
        <label>
          <input 
            name="newX"
            type="radio"
            value = "true"
            checked = {formik.values.newX === "true"}
            onChange = {handleChange}
             />
          Yes
        </label>
        <label>
          <input 
            name="newX"
            type="radio"
            value = "false"
            checked = {formik.values.newX === "false"}
            onChange = {handleChange}
            />
          No
          {(formik.errors.newX && formik.touched.newX) && <p className="error">{formik.errors.newX}</p>}
        </label>

        <p>Is the Company Featured?</p>
        <label>
          <input 
            name="featured"
            type="radio"
            value = "true"
            checked = {formik.values.featured === "true"}
            onChange = {handleChange}
            />
          Yes
        </label>
        <label>
          <input 
            name="featured"
            type="radio"
            value = "false"
            checked = {formik.values.featured === "false"}
            onChange = {handleChange}
            />
          No
          {(formik.errors.featured && formik.touched.featured) && <p className="error">{formik.errors.featured}</p>}
        </label>

        <p>What should the role of the developer be?</p>
        <label>
          <input 
            name="role"
            type="radio"
            value = "Frontend"
            checked = {formik.values.role === "Frontend"}
            onChange = {handleChange}
            />
          Frontend
        </label>
        <label>
          <input 
            name="role"
            type="radio"
            value = "Backend"
            checked = {formik.values.role === "Backend"}
            onChange = {handleChange}
            />
          Backend
        </label>
        <label>
          <input 
            name="role"
            type="radio"
            value = "Fullstack"
            checked = {formik.values.role === "Fullstack"}
            onChange = {handleChange}
            />
          Fullstack
          {(formik.errors.role && formik.touched.role) && <p className="error">{formik.errors.role}</p>}
        </label>

        <p>What should the developer level be?</p>
        <label>
          <input 
            name="level"
            type="radio"
            value = "Junior"
            checked = {formik.values.level === "Junior"}
            onChange = {handleChange}
            />
          Junior
        </label>
        <label>
          <input 
            name="level"
            type="radio"
            value = "Midweight"
            checked = {formik.values.level === "Midweight"}
            onChange = {handleChange}
            />
          Midweight
        </label>
        <label>
          <input 
            name="level"
            type="radio"
            value = "Senior"
            checked = {formik.values.level === "Senior"}
            onChange = {handleChange}
            />
          Senior
          {(formik.errors.level && formik.touched.level) && <p className="error">{formik.errors.level}</p>}
        </label>

        <p>What about Contract?</p>
        <label>
          <input 
            name="contract"
            type="radio"
            value = "Part Time"
            checked = {formik.values.contract === "Part Time"}
            onChange = {handleChange}
            />
          Part Time
        </label>
        <label>
          <input 
            name="contract"
            type="radio"
            value = "Full Time"
            checked = {formik.values.contract === "Full Time"}
            onChange = {handleChange}
            />
          Full Time
        </label>
        <label>
          <input 
            name="contract"
            type="radio"
            value = "Contract"
            checked = {formik.values.contract === "Contract"}
            onChange = {handleChange}
            />
          Contract
          {(formik.errors.contract && formik.touched.contract) && <p className="error">{formik.errors.contract}</p>}
        </label>
    </div>
  )
}

export default RadioForm