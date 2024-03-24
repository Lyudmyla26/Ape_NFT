// Hero.jsx
import React, { useEffect, useState } from 'react';
import { Heros } from './Hero.styled';
import {ReactComponent as FrameSvg} from "../../images/Frame.svg";
import {ReactComponent as DiscordSvg} from "../../images/discord.svg";
import {ReactComponent as LogomarkSvg} from "../../images/Logomark-Blue.svg";
import {ReactComponent as LogoSvg} from "../../images/logo.svg";
import { Menu } from 'components/Menu/Menu';
import { Section } from 'Section/Section';



export const Hero = ({scrollToMap, scrollToSection}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isListFixed, setIsListFixed] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.querySelector('.df');
            const isFixed = window.scrollY > heroSection.offsetHeight;
            setIsListFixed(isFixed);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  useEffect(() => {
    if (isModalOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}, [isModalOpen]);
    const handleMenuClick = (e) => {
        e.preventDefault();
        setIsModalOpen(!isModalOpen);
    };

 

    return (
    
        <Section>
        <Heros>
            <div className='df'>
            <a href='../App.jsx'><FrameSvg className={`header-logo ${isModalOpen ? 'white' : ''}`} width={48} height={32}/></a>
           
            <ul className="list">
    <li className={`navigation ${isListFixed ? 'fixed' : ''}`}><button type='button' onClick={handleMenuClick} className={`menu modal ${isModalOpen ? 'white' : ''}`} >{isModalOpen ? 'Close' : 'Menu'}</button></li>
    <li  className={`navigation ${isListFixed ? 'fixed' : ''}`}><a href="https://lyudmyla26.github.io/Resume-html-css/" target='_blank' rel="noreferrer" className={`menu ${isModalOpen ? 'white' : ''}`}  ><DiscordSvg className='discord-svg' width={16} height={16}/></a></li>
    <li className={`navigation ${isListFixed ? 'fixed' : ''}`}><a href="https://lyudmyla26.github.io/Resume-html-css/" target='_blank' rel="noreferrer" className={`menu ${isModalOpen ? 'white' : ''}`} ><LogomarkSvg className='discord-svg' width={16} height={16}/></a></li>
    <li className={`navigation ${isListFixed ? 'fixed' : ''}`}><a href="https://lyudmyla26.github.io/Resume-html-css/" target='_blank' rel="noreferrer" className={`menu ${isModalOpen ? 'white' : ''}`} ><LogoSvg className='discord-svg' width={16} height={16}/></a></li>
                </ul>
                <div className='info'>
            <p className="top"> diD yOu seE iT ?</p>
            <h1 className="title">YACHT <span className='title-span'>APES</span></h1>
            <p className="expression">Apes aRe eveRywhere</p>
            <span className="avatar" />
            <button className="name" type='button' onClick={scrollToMap}>MEET APES</button>
            <p className='description'>Yacht Ape is a collection of unique digital apes that you can own in NFT format</p>
                {isModalOpen && <Menu setIsModalOpen={setIsModalOpen} scrollToSection={scrollToSection} />}
           </div>
                </div>
            </Heros>
            </Section>
    );
};
