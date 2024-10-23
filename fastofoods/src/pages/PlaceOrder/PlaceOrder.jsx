import React from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import { useContext } from 'react'
const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className='place-order'>
        <div className="place-order-left">
          <p className="title">Delivary Information</p>
          <div className="multi-fields">
            <input type="text" placeholder='first name' />
            <input type="text" placeholder='last name' />
          </div>
          <input type="email" placeholder='Email address' />
          <input type="text" placeholder='Street' />
          <div className="multi-fields">
            <input type="text" placeholder='City' />
            <input type="text" placeholder=' State' />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Zip code ' />
            <input type="text" placeholder=' Country' />
          </div>
          <input type="text" placeholder='Phone' />
        </div>
        <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <br/>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
             
            </div>
            <hr/>

            <div className="cart-total-details">
              <p>Delivary Fee</p>
              <p>₹{getTotalCartAmount()===0?0:2}</p>

            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Total</p>
              <p>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
        </div>
    </form>
  )
}

export default PlaceOrder
