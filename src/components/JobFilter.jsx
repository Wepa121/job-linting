
function JobFilter({filterObj, setFilter}) {
  const {role, level, languages, tools} = filterObj

  const setLanguages = (i) => {
    setFilter({
      ...filterObj, 
      languages: filterObj.languages.filter(item => item !== i)
    })
  }

  const setTools = (i) => {
    setFilter({
      ...filterObj, 
      tools: filterObj.tools.filter(item => item !== i)
    })
  }

  return (
    <div className="card filter">
      <p>JobFIlter</p>
      {role && <p className="card-tools-item" onClick={() => setFilter({...filterObj, role: ""})}>{role}</p>}
      {level && <p className="card-tools-item" onClick={() => setFilter({...filterObj, level: ""})}>{level}</p>}
      {languages.map((item, index) => <p key = {index} className="card-tools-item" onClick={() => setLanguages(item)}>{item}</p>)}
      {tools.map((item, index) => <p key = {index} className="card-tools-item" onClick={() => setTools(item)}>{item}</p>)}
    </div>
  )
}

export default JobFilter