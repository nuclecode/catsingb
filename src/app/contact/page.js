'use client';
import React, { useState } from 'react';
import styles from './Contact.module.scss';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        phone: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'email' || name === 'phone') {
            setErrors({
                ...errors,
                [name]: '',
            });
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;
        return phoneRegex.test(phone);
    };

    const handleBlur = (e) => {
        if (e.target.name === 'email' && !validateEmail(e.target.value)) {
            setErrors({ ...errors, email: 'Please enter a valid email address' });
        }
        if (e.target.name === 'phone' && !validatePhone(e.target.value)) {
            setErrors({ ...errors, phone: 'Please enter a valid phone number with country code' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let valid = true;

        if (!validateEmail(formData.email)) {
            setErrors({ ...errors, email: 'Please enter a valid email address' });
            valid = false;
        }

        if (!validatePhone(formData.phone)) {
            setErrors({ ...errors, phone: 'Please enter a valid phone number with country code' });
            valid = false;
        }

        if (!valid) return;

        setIsSubmitting(true);
        try {
            await addDoc(collection(db, 'contacts'), {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
                timestamp: new Date()
            });

            setSuccessMessage('Your message has been sent successfully!');
            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error('Error submitting the form: ', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.contactContainer}>
            <h1>Contact Us</h1>
            <p>
                We would love to hear from you! Whether you have questions, need more information, or want to schedule a
                visit,
                feel free to reach out to us using the contact information below.
            </p>
            <address>
                <strong>Email:</strong> <a href="mailto:verdigris-cats@proton.me">verdigris-cats@proton.me</a><br/>
                <strong>Phone:</strong> +44(0)7565475880<br/>
            </address>
            <p>
                Alternatively, you can use the form below to send us a message:
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" className={styles.required}>Name</label><br/>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Luigi"
                    value={formData.name}
                    onChange={handleChange}
                    required
                /><br/>

                <label htmlFor="email" className={styles.required}>Email</label><br/>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="luigi@catmail.meow"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email ? styles.error : ''}
                    required
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}<br/>

                <label htmlFor="phone" className={styles.required}>Phone</label><br/>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="+44 1234567890"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.phone ? styles.error : ''}
                    required
                />
                {errors.phone && <p className={styles.error}>{errors.phone}</p>}<br/>

                <label htmlFor="message">Message:</label><br/>
                <textarea
                    id="message"
                    name="message"
                    placeholder="I'm interested in a kitten..."
                    value={formData.message}
                    onChange={handleChange}
                ></textarea><br/>

                <input
                    type="submit"
                    value={isSubmitting ? "Sending..." : "Send"}
                    disabled={isSubmitting}
                />

                {successMessage && <p className={styles.success}>{successMessage}</p>}
            </form>
        </div>
    );
}
