import styled from 'styled-components';
import mobile from '../../images/hero-1x.png'
export const Heros = styled.div`
  padding: 10px 10px 15px
  height: 542px;
  max-width: 480px;
  width: 100%;
  margin-top: 50px;
  background-color: ${props => props.theme.color.primary_pink};
  border-radius: 12px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .List{
  position: absolute;
  top: 5px;
  right: 5px;
  }
  .List> li{
  border-radius: 8px;
  padding: 10px;
  width: 48px;
  height: 48px;
  backdrop-filter: blur(12px);
  background: rgba(30, 30, 30, 0.1);

  }
  .List>li:not(:last-child){
    margin-bottom: 10px;
  }
   .Avatar {
    display: block;
    background-image: url(${mobile});
    background-repeat: no-repeat;
    width: 216px;
    height: 284px;
  }
  .Description{
    font-family: 'BiroScriptPlus';
    width: 217px;
  }
  .Top{
    font-family: 'BiroScriptPlus';
    font-size: 16px;
    font-weight: 400px;
  }
  `