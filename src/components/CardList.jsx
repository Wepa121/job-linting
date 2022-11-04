import Card from "components/Card"

function CardList({list}) {
  return (
    <div>
      {list.map((item, index) => <Card item = {item} key = {index}/>)}
    </div>
  )
}

export default CardList