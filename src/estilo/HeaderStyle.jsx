import styled from "styled-components";

export const StyleHeader= styled.header`
background-color:#e8dedd;
height:12vh;
display:flex;
align-items:center;
justify-content:center;

a{
    text-decoration:none;
    color:#000000;
   
}

`
export const Navegacao= styled.nav`
display:flex;
width:100vw;
justify-content:space-around;



@media(max-width:800px){
width:80vw;
}

`
export const Lista=styled.li`
border-radius:50px;
display:flex;
justify-content:space-around;
align-items:center;
border:2px solid #000000;
width:200px;
&:hover{
    font-size:20px;
    background:#ffffff;
}

`;
export const Ul=styled.ul`
display:flex;
width :800px;
justify-content:space-around;
height:5vh;


`