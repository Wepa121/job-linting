import CardTools from "components/CardTools"
import CardInfo from "components/CardInfo"

function Card({item}) {
  return (
    <div className = "card">
      <CardInfo item = {item}/>
      <CardTools item = {item}/>
    </div>
  )
}

export default Card
