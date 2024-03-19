import styled from 'styled-components';
import '../../font/BiroScript/stylesheet.css';
import '../../font/MessinaSans/stylesheet.css';
export const Mindmep = styled.div`
.title{
font-size: 44px;
font-weight: 900;
line-height: 1;   
text-transform: uppercase;
text-align: center;
margin-top: 30px;
margin-bottom: 10px;
}
.list-map{
display: flex;
gap: 10px;
margin-bottom: 15px;
list-style: none;
overflow: hidden;
justify-content: center;
}
.list-map li{
border-radius: 12px;
padding: 24px 12px;
width: 216px;
height: 242px;
background-color: ${props => props.theme.color.primary_text_black};
flex-direction: column;
display: none;
    
}
.list-map li.active {
display: block;
}
.list-map li:last-child{
background-color: ${props => props.theme.color.primary_pink};
}
.list-map li>p {
font-family: 'Messina Sans Mono', sans-serif; 
font-size: 12px;
font-weight: 400;
line-height: 1.16;   
text-transform: uppercase;
}
.list-map li>h3{
font-size: 32px;
font-weight: 900;
line-height: 1;   
text-transform: uppercase;
margin-top: 60px;
    
} 
.icon-map{
display: block;
margin-left: auto;
}
.map-button{
display: flex;  
justify-content: center;
gap:48px;
list-style: none;
}
.button-map{
background-color: transparent;
border: none;
color: inherit;
font-family: 'Biro Script Plus', sans-serif; 
font-size: 24px;
font-weight: 400;
line-height: 1;   
cursor: pointer;

}`