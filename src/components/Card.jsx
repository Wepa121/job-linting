import CardTools from "components/CardTools"
import CardInfo from "components/CardInfo"
import { FaTimes } from "react-icons/fa"

function Card({item}) {
  return (
    <div className = "card">
      <CardInfo item = {item}/>
      <CardTools item = {item}/>
      <button className="delete">
        <FaTimes color="red"/>
      </button>
    </div>
  )
}

export default Card
