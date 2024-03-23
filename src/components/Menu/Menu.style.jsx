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
    
.item-button{
  font-family: 'Messina Sans Mono', sans-serif; 
  font-size: 24px;
  color: ${(props) => props.theme.color.primary_white};
  font-weight: 600;
  line-height: 1.2;
  background-color: transparent;
  border: none;
    }
.list-item{
   margin: 0 0 22px;
    }
    `