import React, { useState } from 'react';
import {ReactComponent as CloseSvg} from "../../images/add-sharp.svg";
import { ReactComponent as DiscordSvg } from "../../images/discord5.svg";
import {ReactComponent as KittenSvg} from "../../images/SVG_MetaMask_Icon_Color 1.svg";
import { Forms } from './Form.styled';
import { Section } from 'Section/Section';
export const Form = ({mint}) => {
    const [errors, setErrors] = useState({
        name: '',
        email: '',
    }); 
       const [formData, setFormData] = useState({
        name: '',
        email: '',
       });
    const [isSubmitting, setIsSubmitting] = useState(false); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        const newErrors = {};
        

        
        if (formData.name.trim() === '') {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        if (formData.name.length <= 3) {
            newErrors.name = 'Email is too short, should be more than 3';
            isValid = false;
        }

        if (formData.email.length <= 3) {
            newErrors.email = 'Email is too short, should be more than 3';
            isValid = false;
        }

        if (isValid) {
            setIsSubmitting(true);
            console.log('Form submitted successfully:', formData);
            setFormData({ name: '', email: '' });
             setTimeout(() => {
                setIsSubmitting(false);
            }, 2000);
        } else {
           setErrors(newErrors);
        }
         
    };

    return (
        <Section>
        <Forms onSubmit={handleSubmit} id={mint}>
            <h2 className='title'>Are you in?</h2>
            <CloseSvg className="close" width={36} height={36} />
            <p className='description'>Join the YACHT APE community to be one of the first to receive our limited edition NFT</p>
            <form>
            <label className="form-label">
      <DiscordSvg className="icon" width={24} height={24} />
                    <input type="text" name="name" required value={formData.name} className={errors.name ? 'invalid-input' : 'valid-input'}
                    onChange={handleChange}  placeholder="@username"/>
                </label>
                {errors.name && <span className="error">{errors.name}</span>}
    <label className="form-label">
     <KittenSvg className="icon" width={24} height={24} />
                    <input
        type="text"
        name="email"
        required
        className={errors.email ? 'invalid-input' : 'valid-input'}
        placeholder="Wallet address"
        value={formData.email}
        onChange={handleChange}
    />
                </label>
                 {errors.email && <span className="error">{errors.email}</span>}
                <button type='submit' className='button-form'> {isSubmitting ? 'MINTED' : errors.name || errors.email ? 'ERROR' : 'MINT'}</button>
            </form>  
            </Forms>
            </Section>
    );
};