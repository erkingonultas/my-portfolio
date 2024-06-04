import React from "react";
import './certifications.css';
import { motion } from "framer-motion";
import MetaLogo from '../../assets/icons/meta-logo.png';
import TestDomeLogo from '../../assets/icons/testdome-logo.png';
import BounLogo from '../../assets/icons/boun.png';

const Certifications = () => {
    return (
        <section className="certifications" id="certifications">
            <h2 style={{ 'fontWeight': "900" }} >CERTIFICATES & ACHIEVEMENTS</h2>
            <div className="certificate">
                {certifications.map((certificate) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className='certificate__item'
                        key={certificate.title}
                    >
                        <img src={certificate.img} alt={certificate.title} className="certificate__img" />
                        <div>
                            <h2>{certificate.title}</h2>
                            <a href={certificate.id} target="_blank" rel="noopener noreferrer">
                            View Details
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

const certifications = [
    { title: 'BOUN Master\'s Degree of Software Engineering', img: BounLogo },
    { title: 'Meta Frontend Developer Professional Certificate', id: 'https://coursera.org/share/d543da01389139310390f856f6735171', img: MetaLogo },
    { title: 'TestDome, Flutter Developer', id: 'https://www.testdome.com/certificates/dc7e176d623445ed9d1a13703f688be1', img: TestDomeLogo },
];

export default Certifications