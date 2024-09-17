import styles from './about.module.scss';

export default function About() {
    return (
        <div>
            <h1>About Us</h1>
            <p>
                We are a small hobby cattery focusing on a single breed - Experimental Elf cat.
                We are dedicated to providing healthy and happy kittens to loving homes.
                Our passion for felines drives us to ensure each kitten receives the best care and socialization.
                Learn more about us and our commitment to responsible breeding.
            </p>
            <p>
                Our cattery is committed to the highest standards of care, and we take pride in the well-being of our cats. We are a family-run operation with years of experience and a deep love for the breed. Feel free to contact us if you have any questions or would like to learn more about our services.
            </p>

            <section>
                <div className={styles.aboutCattery}>
                    <h2>The Cattery</h2>
                        <p>Our cats are the epicentre of the house. They are the kings and queens, doing whatever they are up to, while our job is to make sure they get the best possible conditions and to capture their wonderful, spoilt lives on camera. </p>
                        <p>We are in the process of creating our lines and we dedicate 100% of our time to ensure the cats are quality representatives of the Experimental Elf breed.</p>
                </div>

                <div className={styles.aboutCattery}>
                    <h2>TICA Registration</h2>
                    {/*IMAGE OF A TICA CERTIFICATE GOES HERE*/}
                    <p>All of our cats are registered with TICA on the Active register.</p>
                    <p>Whenever a kitten goes to a new home, they leave TICA registered as Active (if the new owners are looking to breed) or non-Active, aka as a pet.</p>
                </div>
            </section>
        </div>
    );
}
