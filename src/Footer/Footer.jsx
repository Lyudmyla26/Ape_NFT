import React from 'react';
import { Footers } from './Footer.styled';
import { Section } from 'Section/Section';

export const Footer = () => {
    return (
        <Section>
        <Footers>
            <p className='description'>© Yacht ape 2024 all rights reserved</p>
            </Footers>
            </Section>
    );
};