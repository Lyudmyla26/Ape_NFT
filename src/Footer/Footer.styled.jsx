import styled from 'styled-components';

export const Footers = styled.div`
margin: 35px 0 15px;
display: flex;
justify-content: center;

.description{
width: 216px;
text-align: center;
text-transform: uppercase;
font-family: 'Messina Sans Mono', sans-serif; 
font-size: 12px;
font-weight: 400;
line-height: 1.16;
color: ${(props) => props.theme.color.primary_white}
}`