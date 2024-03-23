import React from 'react';
import { Menus } from './Menu.style';
import { Footer } from 'Footer/Footer';

export const Menu = ({ scrollToSection, setIsModalOpen }) => {
     const handleMenuClick = (name) => {
        setIsModalOpen(false); 
        scrollToSection(name); 
    };
    return (
        <Menus>
            <ul><li className='list-item'><button type='button' onClick={() => handleMenuClick('about')} className='item-button'>ABOUT</button></li>
                <li className='list-item'> <button type='button' onClick={() => handleMenuClick('map')} className='item-button'>MIND-MAP</button></li>
                <li className='list-item'><button type='button' onClick={() => handleMenuClick('faq')} className='item-button'>FAQ</button></li>
                <li className='list-item'><button type='button' onClick={() => handleMenuClick('arts')} className='item-button'>ARTS</button></li>
                <li className='list-item'><button type='button' onClick={() => handleMenuClick('mint')}  className='item-button'>MINT</button></li>
            </ul>
<Footer/>
             </Menus>
    );
};