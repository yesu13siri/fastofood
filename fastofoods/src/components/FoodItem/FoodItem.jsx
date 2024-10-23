import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import rating from "../../assets/rating_starts.png"
import star from "../../assets/add_icon_white.png"
import star2 from "../../assets/remove_icon_red.png"
import star3 from "../../assets/add_icon_green.png"
import { StoreContext } from '../../context/StoreContext'



function Fooditem({ id, name, price, description, image }) {

  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)
 
  return (
    <div className='food-item'>
      <div className="food-item-img-container">

        <img src={image} alt="" className="food-item-img" />
        {!cartItems[id]
          ? <img className='add' onClick={() =>addToCart(id)} src={assets.add_icon_white} alt="" />
          : <div className='food-item-counter'>
            <img onClick={() =>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
             <p>{cartItems[id]}</p> 
          
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} />

          </div>}

      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={rating} alt='' />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}


export default Fooditem
