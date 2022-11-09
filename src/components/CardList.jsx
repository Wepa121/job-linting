import { useNavigate } from "react-router-dom"
import Card from "components/Card"

function CardList({list, handleDelete, handleEdit}) {
  const navigate = useNavigate()
  return (
    <div>
      {list.map((item, index) => <Card item = {item} key = {index} handleDelete = {handleDelete} handleEdit = {handleEdit}/>)}
      <button className="btn-submit" onClick={() => navigate("/add")}>Add a New Job</button>
    </div>
  )
}

export default CardList