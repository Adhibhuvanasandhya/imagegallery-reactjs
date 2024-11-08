import ReactDOM from 'react-dom/client';

import "./style.css"

import one from "./assets/images/b1.jpg"
import two from  "./assets/images/b2.jpg"
import three from "./assets/images/b3.jpg"
import four from "./assets/images/b4.jpg"
import five from "./assets/images/b5.jpg"
import six from "./assets/images/b6.jpg"
import seven from "./assets/images/b7.jpg"
import eight from "./assets/images/b8.png"



const root = ReactDOM.createRoot(document.getElementById('root'));


function Gallery(propt)
{
  return(
    <div className="gallery-item" >
        <img className="gallery-image" src={propt.photo} alt='birds'></img>
        <p>{propt.name}</p>
    </div>
  )
}

var list =[
  {
    photo: one,
    name :"Kingfisher"
  },
  {
    photo: two,
    name :"Mangrove Blue Flycatcher"
  },
  {
    photo: three,
    name :"Toco Toucan"
  },
  {
    photo: four,
    name :"Cockatoos"
  },
  {
    photo: five,
    name :"Penguin"
  },
  {
    photo: six,
    name :"Sparrow"
  },
  {
    photo: seven,
    name :"Pigeon"
  },
  {
    photo: eight,
    name :"Eurasian Blue Tit"
  },
]

root.render(
  <div className="gallery-container">
    {
       list.map(function(item)
      {
        return <Gallery photo= {item.photo} name={item.name}></Gallery>
      })
    }
    
  

  </div>
  
)
