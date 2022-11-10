import { useNavigate } from "react-router-dom"
import Card from "components/Card"


function CardList({list, handleDelete, handleEdit, filterObj, setFilter}) {
  const navigate = useNavigate()
  return (
    <div>
      <div>
        {list.map((item, index) => <Card item = {item} key = {index} 
                                    handleDelete = {handleDelete} 
                                    handleEdit = {handleEdit}
                                    filterObj = {filterObj}
                                    setFilter = {setFilter}/>)}
        <button className="btn-submit" onClick={() => navigate("/add")}>Add a New Job</button>
      </div>
    </div>
  )
}

export default CardList