import React, { useContext } from 'react'
import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../context/cart/cart.context';
import { useNavigate } from 'react-router-dom';
const CartDropDown = () => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (

    <div className='cart-dropdown-container'  >
        {console.log(cartItems)}    
        {cartItems.map(item => <CartItem key={item.id} cartItem={item} /> )}
        <Button buttonType='inverted' onClick={goToCheckoutHandler}>Go To Checkout</Button>
    </div>
  )
}

export default CartDropDown