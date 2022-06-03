import React, { useContext } from 'react'
import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../context/cart/cart.context';
const CartDropDown = () => {
  const {cartItems} = useContext(CartContext);

  return (

    <div className='cart-dropdown-container'  >
        {console.log(cartItems)}    
        {cartItems.map(item => <CartItem key={item.id} cartItem={item} /> )}
        <Button buttonType='inverted'>Go To Checkout</Button>
    </div>
  )
}

export default CartDropDown