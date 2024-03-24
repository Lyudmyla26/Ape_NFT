import styled from 'styled-components';
import '../../font/BiroScript/stylesheet.css';
import '../../font/MessinaSans/stylesheet.css';
export const Menus = styled.div`
display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: 1;
    padding: 80px 24px 40px;
    background-color: ${(props) => props.theme.color.primary_black};
    overflow: hidden;
    align-items: center;
    justify-content: center;
    visibility: visible;
    pointer-events: all;
    position: fixed;
    top: 0;
    right: 0;
    overflow-y: auto;
     @media only screen and (min-width: 1280px) {
 width: 480px;
    height: 80px;
    padding: 10px;
    top: 55px;
    right: 104px;
    backdrop-filter: blur(12px);
background: ${(props) => props.theme.color.primary_grey};
border-radius: 12px;
  } 
    ul{
      @media only screen and (min-width: 1280px) {
    display: flex;
    gap: 10px
  } 
    }
    
.item-button{
  font-family: 'Messina Sans Mono', sans-serif; 
  font-size: 24px;
  color: ${(props) => props.theme.color.primary_white};
  font-weight: 600;
  line-height: 1.2;
  background-color: transparent;
  border: none;
  @media only screen and (min-width: 1280px) {
  font-size: 16px;
  color: ${(props) => props.theme.color.primary_text_black};
   line-height: 1.18;
   width: 80px;
    height: 80px;
    display: flex;
align-items: center;
justify-content: center;
  } 
    }
.list-item{
   margin: 0 0 22px;
    }
    `