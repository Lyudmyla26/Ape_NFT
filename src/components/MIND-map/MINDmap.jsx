import React, { useState } from 'react';
import {ReactComponent as ArrowSvg} from "../../images/up-left-arrow.svg";
import { Mindmep } from './MINDmap.styled';

export const Map = () => {
    const [activeSlide, setActiveSlide] = useState(0); 
    const slides = [
        { key: 1, text: "All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own", title: "YAPE DROP" },
        { key: 2, text: "Launch of the 2nd YACHT Collection Releasing the first version of the Ape Slam Game", title: "New Collection" },
        { key: 3, text: "Launch your own token, the proceeds of which will go to a global fund to LAUNCH YACHT CLUB AND PROMOTE it", title: "Token" },
        { key: 4, text: <a rel="noreferrer" href="https://learnenglishteens.britishcouncil.org/skills/reading/a2-reading/mind-maps" target="_blank" ><ArrowSvg className='icon-map'/></a>, title: "Learn more in mind map" } // Додавання пустого тексту для останнього слайда
    ];

    const nextSlide = () => {
        if (activeSlide === slides.length - 1) {
            return; // Нічого не робимо, якщо вже на останньому слайді
        } else {
            setActiveSlide(prevIndex => prevIndex + 1);
        }
    };

    const prevSlide = () => {
        if (activeSlide === 0) {
            return; // Нічого не робимо, якщо вже на першому слайді
        } else {
            setActiveSlide(prevIndex => prevIndex - 1);
        }
    };
    
    return (
        <Mindmep>
            <h2 className='title'>MIND map</h2>
            <ul className='list-map'>
            {slides.map((slide, index) => (
                    <li key={slide.key} className={index === activeSlide ? 'active' : ''}>
                        <p>{slide.text}</p>
                        <h3>{slide.title}</h3>
                    </li>
                ))} </ul>
            <ul className='map-button'>
            <li><button type='button' className='button-map' onClick={prevSlide}>Prev</button></li>
            <li><button type='button' className='button-map' onClick={nextSlide} >Next</button></li></ul>
        </Mindmep>
    );
};