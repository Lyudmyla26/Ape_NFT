import styled from 'styled-components';
import '../../font/BiroScript/stylesheet.css';
import '../../font/MessinaSans/stylesheet.css';
export const Mindmep = styled.div`
@media only screen and (min-width: 768px) {
width: 592px;
margin: 0 auto;
}  
@media only screen and (min-width: 1280px) {
width: 1032px;
} 

.title{
font-size: 44px;
font-weight: 900;
line-height: 1;   
text-transform: uppercase;
text-align: center;
margin-top: 30px;
margin-bottom: 10px;
@media only screen and (min-width: 768px) {
font-size: 60px;
  }
  @media only screen and (min-width: 1280px) {
font-size: 140px;
margin-top: 50px ;
margin-bottom: 50px ;
  }
}
.list-map{
display: flex;
gap: 10px;
margin-bottom: 15px;
list-style: none;
overflow: hidden;
justify-content: center;
@media only screen and (min-width: 768px) {
    flex-wrap: wrap;
}
}
.list-map li{
border-radius: 12px;
padding: 24px 12px;
width: 216px;
height: 242px;
background-color: ${props => props.theme.color.primary_text_black};
display: none;
@media only screen and (min-width: 768px) {
display: flex;
flex-direction: column;
justify-content: space-between;
width: calc((100% - 30px) / 2);
height: 284px;
} 
@media only screen and (min-width: 1280px) {
height: 480px;
}   
}
.list-map li.active {
display: flex;
flex-direction: column;
justify-content: space-between;
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
 @media only screen and (min-width: 765px) {
width: 128px;
margin-left: auto;
}
@media only screen and (min-width: 1280px) {
font-size: 24px;
line-height: 1.2;
width: 256px;
}
}
.list-map li>h3{
font-size: 32px;
font-weight: 900;
line-height: 1;   
text-transform: uppercase;
@media only screen and (min-width: 1280px) {
font-size: 64px;
line-height: 1;
}
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
@media only screen and (min-width: 768px) {
display: none;
}
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