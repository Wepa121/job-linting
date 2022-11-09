import CardTools from "components/CardTools"
import CardInfo from "components/CardInfo"
import { FaTimes } from "react-icons/fa"
import { FaEdit } from "react-icons/fa"

function Card({item, handleDelete}) {
  const {id} = item

  const onClickDelete = ()=>{
    if(window.confirm("Delete the Job?")){
      handleDelete(id)
    }
  }

  const onClickEdit = () => {

  }
  
  return (
    <div className = "card">
      <CardInfo item = {item}/>
      <CardTools item = {item}/>
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
