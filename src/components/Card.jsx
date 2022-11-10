import {useNavigate} from "react-router-dom"
import { FaTimes, FaEdit } from "react-icons/fa"
import CardTools from "components/CardTools"
import CardInfo from "components/CardInfo"

function Card({item, handleDelete, handleEdit, filterObj, setFilter}) {
  const navigate = useNavigate();

  const onClickDelete = ()=>{
    if(window.confirm("Delete the Job?")){
      handleDelete(item.id)
    }
  }

  const onClickEdit = () => {
    navigate("/add")
    handleEdit(item)
  }
  
  return (
    <div className = "card">
      <CardInfo item = {item}/>
      <CardTools item = {item} filterObj = {filterObj} setFilter = {setFilter}/>
      <button className="delete" onClick={onClickDelete}>
        <FaTimes color="red"/>
      </button>
      <button className="edit" onClick={onClickEdit}>
        <FaEdit color="grey"/>
      </button>
    </div>
  )
}

export default Card

// edit basylanson forma navigate bolmaly we shon ID sindaky datalar forma goyulmaly
// submit bolanda eger editden bolsa update bolmaly, eger sheyle bolsa create bolmaly