import React from 'react';
import { Heros } from './Hero.styled';
import {ReactComponent as FrameSvg} from "../../images/Frame.svg";
import {ReactComponent as DiscordSvg} from "../../images/discord.svg";
import {ReactComponent as LogomarkSvg} from "../../images/Logomark-Blue.svg";
import {ReactComponent as LogoSvg} from "../../images/logo.svg";
export const Hero = () => {
    return (
        <Heros>
            <a href='../App.jsx'><FrameSvg className="header-logo" width={48} height={32}/></a>
           
            <ul className='list'>
                <li className='navigation'><button className='button-menu' type='button'>Menu</button></li>
                <li className="navigation"><button className='button-menu' type='button'><DiscordSvg  width={16} height={16}/></button></li>
                <li className="navigation"><button className='button-menu' type='button'><LogomarkSvg width={16} height={16}/></button></li>
                <li className="navigation"><button className='button-menu' type='button'><LogoSvg  width={16} height={16}/></button></li>
            </ul>
            <p className="top"> diD yOu seE iT ?</p>
            <h1 className="title">YACHT APES</h1>
            <p className="expression">Apes aRe eveRywhere</p>
            <span className="avatar" />
            <button className="name">MEET APES</button>
            <p className='description'>Yacht Ape is a collection of unique digital apes that you can own in NFT format</p>
        </Heros>
    );
};