export default function Contact() {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>
                We would love to hear from you! Whether you have questions, need more information, or want to schedule a visit, feel free to reach out to us using the contact information below.
            </p>
            <address>
                <strong>Email:</strong> <a href="mailto:info@ourcattery.com">info@ourcattery.com</a><br />
                <strong>Phone:</strong> (123) 456-7890<br />
                <strong>Address:</strong> 123 Cat Lane, Feline City, FC 12345
            </address>
            <p>
                Alternatively, you can use the form below to send us a message:
            </p>
            <form action="mailto:info@ourcattery.com" method="post" enctype="text/plain">
                <label htmlFor="name">Name:</label><br />
                <input type="text" id="name" name="name" /><br />
                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email" name="email" /><br />
                <label htmlFor="message">Message:</label><br />
                <textarea id="message" name="message" rows="4" cols="50"></textarea><br />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
}
