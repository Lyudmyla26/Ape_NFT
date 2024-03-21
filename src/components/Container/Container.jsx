import { ContainersStyle } from './Container.styled';
import React from 'react';


export const Container = ({children}) => {
    return(
        <ContainersStyle>
            {children}
        </ContainersStyle>
    );
};
