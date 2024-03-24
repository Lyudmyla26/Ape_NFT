import styled from 'styled-components';
import mobile from '../../images/hero-1x.png'
import '../../font/BiroScript/stylesheet.css';
import '../../font/MessinaSans/stylesheet.css';
import mobile_2x from '../../images/hero-2x.png'
import tablet from '../../images/tablet1x.png'
import tablet2x from '../../images/tablet2x.png'
import desctop1x from '../../images/herodesctop1x.png'
import desctop2x from '../../images/herodesctop2x.png'

export const Heros = styled.div`
  padding: 10px 10px 15px;
  max-width: 480px;
  width: 100%;
  margin-top: 50px;
  background-color: ${props => props.theme.color.primary_pink};
  border-radius: 12px; 
 @media only screen and (min-width: 768px) {
    max-width: 736px;
    display: block;
    margin: 50px auto;
  } 
  @media only screen and (min-width: 1280px) {
  max-width: 1248px;
  padding: 0 10px;
  } 
.df{
display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
}
  .header-logo{
  position: absolute;
   z-index: 2;
  top: 15px;
  left: 5px;
  transition-property: fill;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    @media only screen and (min-width: 1280px) {
  width: 72px;
  height: 50px;
  } 
  }
  .header-logo:hover path,
  .header-logo:focus path{
    fill: ${(props) => props.theme.color.primary_white};
  }

  .list{
  position: fixed;
  z-index: 2;
  top: 55px;
  right: 10px;
   @media only screen and (min-width: 768px) {
    right: 25px;
  } 
  }
  .list> li{
  border-radius: 8px;
  padding: 10px;
  width: 48px;
  height: 48px;
  backdrop-filter: blur(12px);
  background: ${(props) => props.theme.color.primary_grey};
    @media only screen and (min-width: 1280px) {
 width: 80px;
  height: 80px;
  } 

  }
  .list>li:not(:last-child){
  margin-bottom: 10px;
  }
  .avatar {
  display: block;
  background-image: url(${mobile});
  background-repeat: no-repeat;
  width: 216px;
  height: 284px;

  @media only screen and (min-width: 768px) {
  background-image: url(${tablet});
  width: 283px;
  height: 386px;
  position: absolute;
  left: 45%;
  transform: translateX(-45%);
  top: 60px;
  } 
   @media only screen and (min-width: 1280px) {
  background-image: url(${desctop1x});
   width: 463px;
  height: 612px;
  top: 74px;
  } 
  }
  @media
  only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (min-resolution: 192dpi) {
    .avatar {
      background-image: url(${mobile_2x});
      background-size: 216px 284px;

    @media only screen and (min-width: 768px) {
    background-image: url(${tablet2x});
     background-size: 283px 386px;
  } 
   @media only screen and (min-width: 1280px) {
  background-image: url(${desctop2x});
  background-size: 463px 612px;
  } 
    }
}
  .top{
  font-family: 'Biro Script Plus', sans-serif; 
  font-size: 16px;
  color: ${(props) => props.theme.color.primary_text_black};
  font-weight: bold;
  line-height: 1.6;
  margin-top: 28px;
  margin-bottom: 10px;

    @media only screen and (min-width: 768px) {
    font-size: 20px;
  line-height: 1.65;
  margin-top: 150px;
  order: 1;
  } 
    @media only screen and (min-width: 1280px) {
 font-size: 24px;
  line-height: 1.67;
  } 
  }
  .title{
  font-size: 44px;
  line-height: 1;
  letter-spacing: 0.01em;
  color: ${(props) => props.theme.color.primary_text_black};
  margin-bottom: 10px;
  text-align: center;
   @media only screen and (min-width: 768px) {
    font-size: 78px;
    line-height: 1;
    letter-spacing: 0.01em;
    order: 2;
  } 
   @media only screen and (min-width: 1280px) {
 font-size: 140px;
  line-height: 1.67;
  } 
  }
  .title-span{
     @media only screen and (min-width: 768px) {
  margin-left: 140px;
  } 
     @media only screen and (min-width: 1280px) {
  margin-left: 180px;
  } 
  }
  .expression{
  font-family: 'Biro Script Plus', sans-serif; 
  font-size: 16px;
  color: ${(props) => props.theme.color.primary_text_black};
  font-weight: bold;
  line-height: 1.6;
  margin-bottom: 20px;
  @media only screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.65;
    order: 3;
    margin-bottom: 0px;
  } 
    @media only screen and (min-width: 1280px) {
  font-size: 24px;
  line-height: 1.66;
  } 
  }
  .description{
  width: 217px;
  font-family: 'Messina Sans Mono', sans-serif; 
  font-size: 12px;
  color: ${(props) => props.theme.color.primary_text_black};
  font-weight: 400;
  line-height: 1.16;
  text-transform: uppercase;
  text-align: center;
  margin: 10px 0 ;
   @media only screen and (min-width: 768px) {
 margin-left: auto;
 text-align: justify;
 order: 4;
  width: 190px;
  } 
  @media only screen and (min-width: 1280px) {
  width: 337px;
  font-size: 16px;
  line-height: 1.19;
  } 
 }
  .name{
  border-radius: 8px;
  padding: 10px 0 12px 0;
  color: ${(props) => props.theme.color.primary_text_black};
  text-align: center;
  width: 216px;
  height: 41px;
  backdrop-filter: blur(12px);
  background: ${(props) => props.theme.color.primary_grey};
  font-weight: 900;
  font-size: 16px;
  line-height: 1.18;
  border: none;
  cursor: pointer;
  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  @media only screen and (min-width: 768px) {
 margin-left: auto;
 order: 5;
width: 190px;
  height: 41px;

  } 
   @media only screen and (min-width: 1280px) {
 margin-bottom: 55px;
 width: 337px;
  height: 70px;
  font-size: 28px;
  line-height: 1.21;
  } 
  }
  .name:hover,
  .name:focus {
    color: ${(props) => props.theme.color.primary_white};
  }
  .navigation{
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  cursor: pointer;
  }
  .menu{
  font-family: 'Messina Sans Mono', sans-serif; 
  font-size: 12px;
  font-weight: 600;
  line-height: 1.16;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.primary_text_black};
  cursor: pointer;
   transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
  @media only screen and (min-width: 1280px) {
 font-size: 16px;
  line-height: 1.18;
 
  } 
  }
  .menu:hover,
  .menu:focus{
    color: ${(props) => props.theme.color.primary_white};
  
  }
  .discord-svg{
  transition-property: fill;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
  @media only screen and (min-width: 1280px) {
 margin-bottom: 35px;
 width: 24px;
  height: 24px;
 
  } 
  }
 .discord-svg:hover path,
 .discord-svg:focus path {
  fill:  ${(props) => props.theme.color.primary_white};
}

.navigation.fixed .discord-svg path {
    fill: ${(props) => props.theme.color.primary_white};
}
.navigation.fixed .modal{
  color: ${(props) => props.theme.color.primary_white};
}
.navigation.fixed .menu{
  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
}
.navigation.fixed .menu:hover,
.navigation.fixed .menu:focus {
    color: ${(props) => props.theme.color.primary_pink};
}
.navigation.fixed .menu:hover .discord-svg path,
.navigation.fixed .menu:focus .discord-svg path {
    fill: ${(props) => props.theme.color.primary_pink};
}
.navigation.fixed .menu .discord-svg{
  transition-property: fill;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
}
.list.fixed .list-item {
    background-color: rgba(255, 255, 255, 0.1);
}
.navigation > button{
  background-color: transparent;
  border: none;
}
.header-logo.white path{
  fill: ${(props) => props.theme.color.primary_white};
  
}

.header-logo.white:hover path,
.header-logo.white:focus path{
  fill: ${(props) => props.theme.color.primary_pink};
}
.menu.white path{
  fill: ${(props) => props.theme.color.primary_white};
  color: ${(props) => props.theme.color.primary_white};
}
.menu.white {
  color: ${(props) => props.theme.color.primary_white};
  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
}
.menu.white .discord-svg path{
  transition-property: fill;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
}
.menu.white:hover .discord-svg path,
.menu.white:focus .discord-svg path{
  fill: ${(props) => props.theme.color.primary_pink};
}
  .menu.white:hover,
  .menu.white:focus {
  color: ${(props) => props.theme.color.primary_pink};
}
.info{
  display: flex;
    flex-direction: column;
    align-items: center;

     @media only screen and (min-width: 768px) {
     align-items: flex-start;

  } 
}
  `