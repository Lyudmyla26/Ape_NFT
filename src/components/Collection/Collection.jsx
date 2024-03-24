import React, { useState, useEffect } from 'react';
import { Collections } from './Collections.style';
import { Section } from 'Section/Section';

export const Collection = ({ art }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1280) {
                setSlidesToShow(4);
            } else if (screenWidth >= 768) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(1);
            }
        };
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const slides = [
        { key: 1, img1x: require('../../images/Maskgroup1-1x.jpg'), img2x: require('../../images/Maskgroup1-2x.jpg') },
        { key: 2, img1x: require("../../images/Maskgroup2-1x.jpg"), img2x: require('../../images/Maskgroup2-2х.jpg') },
        { key: 3, img1x: require("../../images/Maskgroup3-1x.jpg"), img2x: require('../../images/Maskgroup3-2х.jpg') },
        { key: 4, img1x: require("../../images/Maskgroup4-1x.jpg"), img2x: require('../../images/Maskgroup4-2х.jpg') },
        { key: 5, img1x: require("../../images/Maskgroup5-1x.jpg"), img2x: require('../../images/Maskgroup5-2х.jpg') },
        { key: 6, img1x: require("../../images/Maskgroup6-1x.jpg"), img2x: require('../../images/Maskgroup6-2х.jpg') },
        { key: 7, img1x: require("../../images/Maskgroup7-1x.jpg"), img2x: require('../../images/Maskgroup7-2х.jpg') }
    ];

    const nextSlide = () => {
        if (activeSlide === slides.length - slidesToShow) {
            return;
        } else {
            setActiveSlide(prevIndex => prevIndex + slidesToShow);
        }
    };

    const prevSlide = () => {
        if (activeSlide === 0) {
            return;
        } else {
            setActiveSlide(prevIndex => prevIndex - slidesToShow);
        }
    };

    return (
        <Section>
            <Collections id={art}>
                <h2 className='title'>COLLECTION</h2>
                <ul className='list-map'>
                    {slides.slice(activeSlide, activeSlide + slidesToShow).map((slide, index) => (
    <li key={slide.key} className={index < slidesToShow ? 'active' : ''}>
        <img srcSet={`${slide.img1x} 1x, ${slide.img2x} 2x`} src={slide.img1x} alt={`Slide ${index}`} />
    </li>
))}
                </ul>
                <ul className='map-button'>
                    <li><button type='button' className='button-map' onClick={prevSlide}>Prev</button></li>
                    <li><button type='button' className='button-map' onClick={nextSlide}>Next</button></li>
                </ul>
            </Collections>
        </Section>
    );
};