import styled from 'styled-components';
import '../../font/BiroScript/stylesheet.css';
import '../../font/MessinaSans/stylesheet.css';
export const Collections = styled.div`
@media only screen and (min-width: 768px) {
width: 592px;
    display: block;
    margin: auto;
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
}
.list-map{
display: flex;
gap: 24px;
margin-bottom: 24px;
list-style: none;
overflow: hidden;
justify-content: center;
@media only screen and (min-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
.list-map li{
border-radius: 12px;
width: 216px;
height: 256px;
flex-direction: column;
display: none; 
@media only screen and (min-width: 768px) {
width: 284px;
height: 336px;
  }

}
.list-map img{
border-radius: 19px;   
@media only screen and (min-width: 768px) {
border-radius: 24px;
  } 
}
.list-map li.active {
display: block;
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

