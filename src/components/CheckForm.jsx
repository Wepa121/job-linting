
function CheckForm({formik}) {
  const {handleChange} = formik

  return (
    <div>
      <div>
        <p>Which skills does the Company need?</p>
        <label>
          <input
            name="languages"
            type="checkbox" 
            id = "languages" 
            value="HTML"
            onChange={handleChange}
            checked = {formik.values.languages.includes("HTML")}
          />
          HTML
        </label>
        <label>
          <input
            name="languages"
            type="checkbox" 
            id = "languages" 
            value="CSS"
            onChange={handleChange}
            checked = {formik.values.languages.includes("CSS")}
          />
          Css
        </label>
        <label>
          <input
            name="languages"
            type="checkbox" 
            id = "languages" 
            value="JavaScript"
            onChange={handleChange}
            checked = {formik.values.languages.includes("JavaScript")}
          />
        JavaScript
        </label>
        <label>
          <input
            name="languages"
            type="checkbox"
            id = "languages" 
            value="Python"
            onChange={handleChange}
            checked = {formik.values.languages.includes("Python")}
          />
          Python
        </label>
        <label>
          <input
            name="languages"
            type="checkbox" 
            id = "languages" 
            value="Ruby"
            onChange={handleChange}
            checked = {formik.values.languages.includes("Ruby")}
          />
          Ruby
        </label>
      </div>

      <div>
        <p>Which tools does the Company need?</p>
        <label>
          <input
            name="tools"
            type="checkbox" 
            id = "tools" 
            value="React"
            onChange={handleChange}
            checked = {formik.values.tools.includes("React")}
          />
          React
        </label>
        <label>
          <input
            name="tools"
            type="checkbox" 
            id = "tools" 
            value="Sass"
            onChange={handleChange}
            checked = {formik.values.tools.includes("Sass")}
          />
          Sass
        </label>
        <label>
          <input
            name="tools"
            type="checkbox" 
            id = "tools" 
            value="Ruby"
            onChange={handleChange}
            checked = {formik.values.tools.includes("Ruby")}
          />
        Ruby
        </label>
        <label>
          <input
            name="tools"
            type="checkbox"
            id = "tools" 
            value="RoR"
            onChange={handleChange}
            checked = {formik.values.tools.includes("RoR")}
          />
          RoR
        </label>
        <label>
          <input
            name="tools"
            type="checkbox" 
            id = "tools" 
            value="Vue"
            onChange={handleChange}
            checked = {formik.values.tools.includes("Vue")}
          />
          Vue
        </label>
        <label>
          <input
            name="tools"
            type="checkbox" 
            id = "tools" 
            value="Django"
            onChange={handleChange}
            checked = {formik.values.tools.includes("Django")}
          />
          Django
        </label>
      </div>
    </div>
  )
}

export default CheckForm