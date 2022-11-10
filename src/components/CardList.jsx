import { useNavigate } from "react-router-dom"
import Card from "components/Card"
import JobFilter from "./JobFilter"

function CardList({list, handleDelete, handleEdit, filterObj, setFilter}) {
  const navigate = useNavigate()
  const {role, level, languages, tools} = filterObj

  return (
    <div>
      {(role || level || languages.length > 0 || tools.length > 0 ) && <JobFilter filterObj = {filterObj} setFilter = {setFilter}/>}
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