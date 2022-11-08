import CardTools from "components/CardTools"
import CardInfo from "components/CardInfo"
import { FaTimes } from "react-icons/fa"

function Card({item, handleDelete}) {
  const {id} = item

  const handleClick = ()=>{
    if(window.confirm("Delete the Job?")){
      handleDelete(id)
    }
  }
  
  return (
    <div className = "card">
      <CardInfo item = {item}/>
      <CardTools item = {item}/>
      <button className="delete" onClick={handleClick}>
        <FaTimes color="red"/>
      </button>
    </div>
  )
}

export default Card
