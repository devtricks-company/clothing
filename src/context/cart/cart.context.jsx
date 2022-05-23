import { createContext, useState } from "react";

export const CartContext = createContext({
    isOpenCart:false,
    setIsOpenCart: () => {}
});

export const CartProvider = ({children}) => {
    const [isOpenCart,setIsOpenCart] = useState(false);
    const value = {
        isOpenCart,
        setIsOpenCart
    }

    return <CartContext.Provider value={value} >
        {children}
    </CartContext.Provider>
}