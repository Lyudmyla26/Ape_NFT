import React, { useEffect, useState } from 'react';
import { Menus } from './Menu.style';

export const Menu = ({ scrollToSection, setIsModalOpen }) => {
    const [isTablet, setIsTablet] = useState(window.innerWidth >= 1280);

    useEffect(() => {
        const handleResize = () => {
            setIsTablet(window.innerWidth >= 1280);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
     const handleMenuClick = (name) => {
        setIsModalOpen(false); 
        scrollToSection(name); 
    };
    return (
        <Menus>
            <ul><li className='list-item'><button type='button' onClick={() => handleMenuClick('about')} className='item-button'>ABOUT</button></li>
                <li className='list-item'> <button type='button' onClick={() => handleMenuClick('map')} className='item-button'>{isTablet? "M-MAP": "MIND-MAP" }</button></li>
                <li className='list-item'><button type='button' onClick={() => handleMenuClick('faq')} className='item-button'>FAQ</button></li>
                <li className='list-item'><button type='button' onClick={() => handleMenuClick('arts')} className='item-button'>ARTS</button></li>
                <li className='list-item'><button type='button' onClick={() => handleMenuClick('mint')}  className='item-button'>MINT</button></li>
            </ul>

             </Menus>
    );
};