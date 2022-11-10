
function CardTools({item, filterObj, setFilter}) {
  const {role, level, languages, tools} = item

  const setLanguages = (i) => {
    if(!filterObj.languages.includes(i)){
      setFilter({
        ...filterObj, 
        languages: filterObj.languages.concat([i])
      })
    }
  }

  const setTools = (i) => {
    if(!filterObj.tools.includes(i)){
      setFilter({
        ...filterObj, 
        tools: filterObj.tools.concat([i])
      })
    }
  }

  return (
    <div className = "card-tools">
        <p className="card-tools-item" onClick={() => setFilter({...filterObj, role})}>{role}</p>
        <p className="card-tools-item" onClick={() => setFilter({...filterObj, level})}>{level}</p>
        {languages.map((item, index) => <p key = {index} className="card-tools-item" onClick={() => setLanguages(item)}>{item}</p>)}
        {tools.map((item, index) => <p key = {index} className="card-tools-item" onClick={() => setTools(item)}>{item}</p>)}
      </div>
  )
}

export default CardTools