
import { createGlobalStyle } from "styled-components";

 import Background from "../assets/Black.jpg"
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    
 }      
 body{
  background-image:url(${Background});
  background-repeat:no-repeat;
 background-size:1000vw;
  
  background-position: center center;
  

 } 
`

export default GlobalStyle;