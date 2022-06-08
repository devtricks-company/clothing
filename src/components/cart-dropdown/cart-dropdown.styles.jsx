import styled from 'styled-components';
import {
  BaseButton,
  GoogleButton,
  InvertedButton

} from '../button/button.styles';


export const CartDropDownContainer = styled.div`
position: absolute;
width: 300px;
height: 400px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 90px;
right: 40px;
z-index: 5;

${BaseButton},
${GoogleButton},
${InvertedButton}
 {
  margin-top: auto;
}

`;


export const EmptyMessage = styled.span`
  font-size:18px;
  margin:50px auto;
`


export const CartItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
`

