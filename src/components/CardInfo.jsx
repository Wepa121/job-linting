import Image from "assets/Image";

function CardInfo({item}){
  const {company, position, featured, contract, location, logo} = item;
  console.log(logo)
  return (
    <div className = "card-info">
        <Image logo = {logo}/>
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