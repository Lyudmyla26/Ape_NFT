import { styled } from 'styled-components';

export const ContainersStyle = styled.div`
  margin: 0 auto;
  padding: 0 5px ;
  outline: 2px solid red;
  outline-offset: -2px; 
  
  

  @media screen and (min-width: 480px) {
    max-width: 480px;
    padding: 0 27px;
  }

  @media screen and (min-width: 768px) {
    max-width: 736px;
    padding: 0 27px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 34px;
  }
`;