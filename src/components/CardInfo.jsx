import photo from "assets/photosnap.svg"

function CardInfo({item}){
  const {company, featured} = item;
  
  return (
    <div className = "card-info">
        <img src = {photo} alt= "photo" className = "card-info-image"/>
        <div className = "card-info-data">
          <div className = "card-info-company"> 
            <p>{company}</p>
            <p>NEW!</p>
            <p>FEATURED</p>
          </div>
          <p className = "card-info-position">Senior Fronend Developer</p>
          <ul>
            <li>1d ago</li>
            <li>Full Time</li>
            <li>USA only</li>
          </ul>
        </div>
    </div>
  )
}

export default CardInfo