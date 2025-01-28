
import image from './image.jpg'

function Card() {


  return(
    <div className="card">
      
      <img className='card-image' src={image} alt="profile picture"></img>
      <h2 className='card-title' >Sreeja</h2>
      <p>it doesnt matter who I am</p>

    </div>
  );
}

export default Card