import styled from 'styled-components';
import mobile from '../../images/hero-1x.png'
import '../../font/BiroScript/stylesheet.css';
import '../../font/MessinaSans/stylesheet.css';
export const Heros = styled.div`
  padding: 10px 10px 15px;
  max-width: 480px;
  width: 100%;
  margin-top: 50px;
  background-color: ${props => props.theme.color.primary_pink};
  border-radius: 12px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
  .header-logo{
  position: absolute;
  top: 15px;
  left: 5px;
  }
  .list{
  position: fixed;
  top: 55px;
  right: 10px;
  }
  .list> li{
  border-radius: 8px;
  padding: 10px;
  width: 48px;
  height: 48px;
  backdrop-filter: blur(12px);
  background: rgba(30, 30, 30, 0.1);

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
  }
  .top{
  font-family: 'Biro Script Plus', sans-serif; 
  font-size: 16px;
  color: ${(props) => props.theme.color.primary_text_black}
  font-weight: bold;
  line-height: 1.6;
  margin-top: 28px;
  margin-bottom: 10px
  }
  .title{
  font-size: 44px;
  line-height: 1;
  letter-spacing: 0.01em;
  color: ${(props) => props.theme.color.primary_text_black}
  margin-bottom: 10px;
  text-align: center;
  }
  .expression{
  font-family: 'Biro Script Plus', sans-serif; 
  font-size: 16px;
  color: ${(props) => props.theme.color.primary_text_black}
  font-weight: bold;
  line-height: 1.6;
  margin-bottom: 20px;
  }
  .description{
  width: 217px;
  font-family: 'Messina Sans Mono', sans-serif; 
  font-size: 12px;
  color: ${(props) => props.theme.color.primary_text_black}
  font-weight: 400;
  line-height: 1.16;
  text-transform: uppercase;
  text-align: center;
  margin: 10px 0 ;
 }
  .name{
  border-radius: 8px;
  padding: 10px 0 12px 0;
  color: ${(props) => props.theme.color.primary_text_black}
  text-align: center;
  width: 216px;
  height: 41px;
  backdrop-filter: blur(12px);
  background: rgba(30, 30, 30, 0.1);
  font-size: 16px;
  line-height: 1.18;
  border: none;
  }
  .name:hover,
  /name:focus {
    color: ${(props) => props.theme.color.primary_white}
  }
  .navigation{
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  cursor: pointer;
  }
  .button-menu{
  font-family: 'Messina Sans Mono', sans-serif; 
  font-size: 12px;
  font-weight: 600;
  line-height: 1.16;
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  cursor: pointer;
  }
  
  `