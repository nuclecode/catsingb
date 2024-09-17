import styles from './HeroLanding.module.scss';
import { MdStar } from "react-icons/md";

const HeroSection = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1>Pedigree Elf Kittens</h1>
                <p>from extensively tested parents</p>
            </div>
            <div className={styles.rectangle}>
                <img src="/sphynx_image-hero-landing.png" alt="sphynx cat on the hero section of the landing page"
                     className={styles.heroImage}/>
            </div>
            <div className={styles.review}>
                <div className={styles.rating}>
                    <span className={styles.reviewNumber}>5</span>
                    <MdStar className={styles.starIcon}/>

                </div>
                <span className={styles.reviewText}>Reviews</span>
            </div>
        </section>
    );
};

export default HeroSection;