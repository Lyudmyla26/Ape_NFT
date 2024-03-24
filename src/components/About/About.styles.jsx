import styled from 'styled-components';
import about from '../../images/About1x.png'
import about_2x from '../../images/About2x.png'
import '../../font/BiroScript/stylesheet.css';
import '../../font/MessinaSans/stylesheet.css';
import abouttablet from '../../images/abouttablet1x.png'
import abouttablet2x from '../../images/abouttablet2x.png'
import desctop1x from '../../images/desctop1x.png'
import desctop2x from '../../images/desctop2x.png'

export const Abouts = styled.div`
  margin-top: 50px;

  .thumb-about{
  width: 216px;
  margin: 0 auto ;
  @media only screen and (min-width: 768px) {
display: flex;
flex-wrap: wrap;
gap: 15px;
width: 592px;
position: relative;
}
@media only screen and (min-width: 1280px) {
width: 1032px;
}

  }
  .title-about{
  font-size: 40px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 10px;
  @media only screen and (min-width: 768px) {
width: calc((100% - 30px) / 2);
  font-size: 60px;
}
@media only screen and (min-width: 1280px) {
  font-size: 100px;
}
  }
  .title-abouts{
  color: ${props => props.theme.color.primary_pink}; 
  }
  .note1{
  font-family: 'Messina Sans Mono', sans-serif; 
  font-size: 16px;
  font-weight: 400;
  line-height: 1.18;
  text-transform: uppercase; 
  text-align: right;
  margin-bottom: 20px;
    @media only screen and (min-width: 768px) {
width: calc((100% - 30px) / 2);
text-align: right;
}
@media only screen and (min-width: 1280px) {
  font-size: 24px;
}
  }
  .note2{
  font-family: 'Messina Sans Mono', sans-serif; 
  font-size: 12px;
  font-weight: 400;
  line-height: 1.16;
  text-transform: uppercase; 
  text-align: center;
  margin-bottom: 30px;
    @media only screen and (min-width: 768px) {
width: calc((100% - 30px) / 2);
  font-size: 16px;
   line-height: 1.19;
}
@media only screen and (min-width: 1280px) {
  font-size: 24px;
}
  }
  .close{
  display: block;
  margin: 0 auto 15px;
  }
  .abouts-avatar {
  display: block;
  background-image: url(${about});
  background-repeat: no-repeat;
  width: 216px;
  height: 292px;
    @media only screen and (min-width: 768px) {
  background-image: url(${abouttablet});
   width: 313px;
  height: 422px;
  position: absolute;
    right: 0;
    bottom: 0;
}
@media only screen and (min-width: 1280px) {
  background-image: url(${desctop1x});
   width: 492px;
  height: 662px;
}
  }
    @media
  only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (min-resolution: 192dpi) {
    .abouts-avatar {
      background-image: url(${about_2x});
      background-size: 216px 292px;
       @media only screen and (min-width: 768px) {
    background-image: url(${abouttablet2x});
    background-size: 313px 422px;
}
  @media only screen and (min-width: 1280px) {
    background-image: url(${desctop2x});
    background-size: 492px 662px;

}
    }
}
  .tape-container{
   padding: 6px 0px 6px 0px;
   background-color: ${props => props.theme.color.primary_pink};
   width: 100%;
   overflow: hidden;
  }
  .tape{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  }
  .tape li{
  font-size: 36px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;  
  }
  .tape li> .close{
  margin: 0;
  }
    `