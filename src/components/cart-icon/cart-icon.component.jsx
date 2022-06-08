import React, { useContext } from 'react'

import { CartContext } from '../../context/cart/cart.context';
import {ShoppingIcon,ItemCount,CartIconContainer} from  './cart-icon.styles.jsx';


const CartIcon = () => {
  const {isOpenCart,setIsOpenCart} = useContext(CartContext);

  const toggleCart = () => setIsOpenCart(!isOpenCart)
  const {cartCount} = useContext(CartContext);
  return (
    <CartIconContainer onClick={toggleCart}>
        <ShoppingIcon  />
        <ItemCount className='item-count' >{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon