import styled from 'styled-components';
import about from '../../images/About1x.png'
import '../../font/BiroScript/stylesheet.css';
import '../../font/MessinaSans/stylesheet.css';

export const Abouts = styled.div`
  margin-top: 50px;

  .thumb-about{
  max-width: 216px;
  margin: 0 auto ;
  }
  .title-about{
  font-size: 40px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 10px;
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
  }
  .note2{
  font-family: 'Messina Sans Mono', sans-serif; 
  font-size: 12px;
  font-weight: 400;
  line-height: 1.16;
  text-transform: uppercase; 
  text-align: center;
  margin-bottom: 30px;
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