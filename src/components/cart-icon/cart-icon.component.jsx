import React, { useContext } from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { CartContext } from '../../context/cart/cart.context';
import './cart-icon.styles.scss';
const CartIcon = () => {
  const {isOpenCart,setIsOpenCart} = useContext(CartContext);

  const toggleCart = () => setIsOpenCart(!isOpenCart)
  const {cartCount} = useContext(CartContext);
  return (
    <div className='cart-icon-container' onClick={toggleCart}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count' >{cartCount}</span>
    </div>
  )
}

export default CartIcon