import React from 'react'
import {BaseButton,GoogleButton,InvertedButton} from './button.styles.jsx'

export const BUTTON_TYPE_CLASSESS = {
  base:'base',
    google:'google-sign-in',
    inverted:'inverted'
}

const getButton = (buttonType= 'base') => ({
  [BUTTON_TYPE_CLASSESS.base]:BaseButton,
  [BUTTON_TYPE_CLASSESS.google] : GoogleButton,
  [BUTTON_TYPE_CLASSESS.inverted]:InvertedButton
}[buttonType])
const Button = ({children,buttonType, ...otherProps}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton {...otherProps}>
        {children}
    </CustomButton>
  )
}

export default Button