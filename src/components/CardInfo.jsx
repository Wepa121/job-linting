import photo from "assets/photosnap.svg"

function CardInfo({item}){
  const {company, position, featured, contract, location} = item;
  
  return (
    <div className = "card-info">
        <img src = {photo} alt= "photos" className = "card-info-image"/>
        <div className = "card-info-data">
          <div className = "card-info-company"> 
            <p>{company}</p>
            {item.new && <p>NEW!</p>}
            {featured && <p>FEATURED</p>}
          </div>
          <p className = "card-info-position">{position}</p>
          <ul>
            <li>1d ago</li>
            <li>{contract}</li>
            <li>{location}</li>
          </ul>
        </div>
    </div>
  )
}

export default CardInfo