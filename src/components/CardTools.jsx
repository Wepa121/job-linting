
function CardTools({item}) {
  const {role, level, languages, tools} = item

  return (
    <div className = "card-tools">
        <p className="card-tools-item">{role}</p>
        <p className="card-tools-item">{level}</p>
        {languages.map((i, index) => <p key = {index} className="card-tools-item">{i}</p>)}
        {tools.map((i, index) => <p key = {index} className="card-tools-item">{i}</p>)}
      </div>
  )
}

export default CardTools