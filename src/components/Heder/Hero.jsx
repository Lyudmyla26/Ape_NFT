import React from 'react';
import { Heros } from './Hero.styled';
export const Hero = () =>{
    return(
    <Heros>
    {/* <svg className="Icons"><use href="../../images/symbol-defs.svg#icon-Logo"></use></svg> */}
       <ul className='List'>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       </ul>
        <p className="Top"> diD yOu seE iT ?</p>
        <h1 className="Title" >YACHT APES</h1>
        <p className="Expression">Apes aRe eveRywhere</p>
        <span className="Avatar" />
        <h3 className="Name">MEET APES</h3>
        <p className='Description'>Yacht Ape is a collection of unique digital apes that you can own in NFT format</p>
    </Heros>
    );
}