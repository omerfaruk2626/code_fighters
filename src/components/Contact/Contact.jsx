import React, { useState } from 'react';

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setFormData({ username: '', email: '', message: '' });
    };

    return (
        <div id="contact">
            <div className="content">
                <div className="form" id="formSection">
                    <p className='message text-center mt-3'>We would love to hear from you.</p>
                    <form className="contactForm" onSubmit={handleSubmit}>
                        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Enter your username" /><br /><br />
                        <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" /><br /><br />
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Type your message here" rows="4"></textarea><br />
                        <input className="submit btn btn-light" type="submit" value="SEND" />
                    </form>
                </div>
                {isModalOpen && (
                    <div id="overlay">
                        <div id="modal">
                            <p style={{ color: 'red', fontWeight: 'bold', borderBottom: '2px solid white' }}>Your message has been sent successfully.</p>
                            <div id="modalContent">
                                <p><strong>Username:</strong> {formData.username}</p>
                                <p><strong>Email:</strong> {formData.email}</p>
                                <p><strong>Message:</strong> {formData.message}</p>
                            </div>
                            <button onClick={closeModal}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Contact;
