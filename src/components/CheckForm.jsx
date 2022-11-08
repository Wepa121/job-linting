
function CheckForm({formCheck, setCheck}) {
  
  const handleChange = (e) => {
    if(!formCheck[e.target.id].includes(e.target.value)){
      setCheck({
        ...formCheck, 
        [e.target.id]:[...formCheck[e.target.id], e.target.value]
      })
    }
    else{
      setCheck({
        ...formCheck,
        [e.target.id]: formCheck[e.target.id].filter((item) => item !== e.target.value)
      })

    }
  }

  return (
    <div>
      <div>
        <p>Which skills does the Company need?</p>
        <label>
          <input
            name="language"
            type="checkbox" 
            id = "languages" 
            value="HTML"
            onChange={handleChange}
            checked = {formCheck.languages.includes("HTML")}
          />
          HTML
        </label>
        <label>
          <input
            name="language"
            type="checkbox" 
            id = "languages" 
            value="CSS"
            onChange={handleChange}
            checked = {formCheck.languages.includes("CSS")}
          />
          Css
        </label>
        <label>
          <input
            name="language"
            type="checkbox" 
            id = "languages" 
            value="JavaScript"
            onChange={handleChange}
            checked = {formCheck.languages.includes("JavaScript")}
          />
        JavaScript
        </label>
        <label>
          <input
            name="language"
            type="checkbox"
            id = "languages" 
            value="Python"
            onChange={handleChange}
            checked = {formCheck.languages.includes("Python")}
          />
          Python
        </label>
        <label>
          <input
            name="language"
            type="checkbox" 
            id = "languages" 
            value="Ruby"
            onChange={handleChange}
            checked = {formCheck.languages.includes("Ruby")}
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
            checked = {formCheck.tools.includes("React")}
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
            checked = {formCheck.tools.includes("Sass")}
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
            checked = {formCheck.tools.includes("Ruby")}
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
            checked = {formCheck.tools.includes("RoR")}
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
            checked = {formCheck.tools.includes("Vue")}
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
            checked = {formCheck.tools.includes("Django")}
          />
          Django
        </label>
      </div>
    </div>
  )
}

export default CheckForm