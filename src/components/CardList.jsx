import { useNavigate } from "react-router-dom"
import Card from "components/Card"

function CardList({list, handleDelete}) {
  const navigate = useNavigate()
  return (
    <div>
      {list.map((item, index) => <Card item = {item} handleDelete = {handleDelete} key = {index}/>)}
      <button className="btn-submit" onClick={() => navigate("/add")}>Add a New Job</button>
    </div>
  )
}

export default CardList