import React from "react";

function Contact() {
    return (
        <div>
            <div
                className="container-fluid bg-white rounded p-4 m-4"
            >
                <h1>Contact</h1>
                <p>For more information, please contact us at:</p>
                <p>Phone: 555-555-5555</p>
                <p>Email: <a href="mailto:hezarehee.h@gmail.com">hezarehee.h@gmail.com</a></p>
                <address>
                    <h2>Location</h2>
                    <p>1234 Main St</p>
                    <p>City, State 12345</p>
                </address>
            </div>
            <div className="container-fluid bg-white routnded p-4 m-4">
                <article className="col-6 d-flex">
                    <h1>Contact us</h1>
                    <form action="https://formspree.io/f/xnqoqzqz" method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" className="form-control" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send</button>
                    </form>
                </article>
            </div>
        </div>
    );
}

export default Contact;