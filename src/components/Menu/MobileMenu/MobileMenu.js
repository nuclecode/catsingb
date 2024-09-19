'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react';
import styles from './MobileMenu.module.scss';
import Link from 'next/link';

const routes = [
    { path: '/', name: 'Home' },
    { path: '/available-kittens', name: 'Available Kittens' },
    { path: '/our-cats', name: 'Our Cats' },
    { path: '/stud-service', name: 'Stud Service' },
    { path: '/best-practices', name: 'Best Practices' },
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact' },
];

const MobileMenu = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isLinkClicked, setLinkClicked] = useState(false);

    const handleLinkClick = () => {
        setLinkClicked(true);
        setTimeout(() => {
            setMenuOpen(false);
            setLinkClicked(false);
        }, 300);
    };

    useEffect(() => {
        setMenuOpen(false);
    }, []);

    return (
        <div className={styles.mobileMenuWrapper}>
            <div className={styles.hamburgerContainer}>
                <Hamburger
                    toggled={isMenuOpen}
                    toggle={setMenuOpen}
                    size={35}
                    duration={0.4}
                    color="#4E3A1F"
                />
            </div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className={`${styles.fullScreenMenu} ${isLinkClicked ? styles.slideOut : ''}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ pointerEvents: isLinkClicked ? 'none' : 'auto' }}
                    >
                        <nav className={styles.navMenu}>
                            <motion.ul
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {routes.map((route, idx) => (
                                    <motion.li
                                        key={route.path}
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 260,
                                            damping: 20,
                                            delay: 0.1 + idx / 10,
                                        }}
                                    >
                                        <Link href={route.path} onClick={handleLinkClick}>
                                            {route.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MobileMenu;
