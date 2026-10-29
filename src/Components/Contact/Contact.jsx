import React, { useState } from 'react';
import './Contact.css';
import { CiMail } from 'react-icons/ci';
import { MdAddIcCall } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';

const Contact = () => {
  const [formStatus, setFormStatus] = useState({ submitting: false, type: '', message: '' });

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormStatus({ submitting: true, type: '', message: '' });

    const form = event.target;
    const accessKey = import.meta.env.VITE_WEB3FORM_ACCESS_KEY;

    if (!accessKey) {
      const errorMsg = 'Web3Forms Access Key is missing in .env (VITE_WEB3FORM_ACCESS_KEY).';
      setFormStatus({ submitting: false, type: 'error', message: errorMsg });
      alert(errorMsg);
      return;
    }

    const payload = {
      access_key: accessKey,
      name: form.name?.value || '',
      email: form.email?.value || '',
      message: form.message?.value || ''
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      if (data.success) {
        setFormStatus({
          submitting: false,
          type: 'success',
          message: data.message || 'Thank you! Your message has been sent successfully.'
        });
        alert(data.message || 'Message sent successfully!');
        form.reset();
      } else {
        const errorMsg = data.message || 'Error sending message. Please try again.';
        setFormStatus({ submitting: false, type: 'error', message: errorMsg });
        alert(errorMsg);
      }
    } catch (err) {
      console.error('Web3Forms submission error:', err);
      const errorMsg = err?.message || 'Failed to submit form. Please check your internet connection and try again.';
      setFormStatus({ submitting: false, type: 'error', message: errorMsg });
      alert(errorMsg);
    }
  };

  return (
    <section id="contact" className="contact reveal-on-scroll">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-container">
        <div className="contact-left">
          <h2>Let's talk</h2>
          <p className="ready-to-work">
            I am currently available to take on new projects so feel free to send me a message about anything that you want me to work on .You can contact anytime
          </p>
          <div className="contact-details">
            <a href="mailto:eshikakumaribgs@gmail.com" className="contact-info">
              <CiMail size={22} className="contact-icon" />
              <p>eshikakumaribgs@gmail.com</p>
            </a>
            <a href="tel:9508694719" className="contact-info">
              <MdAddIcCall size={22} className="contact-icon" />
              <p>9508694719</p>
            </a>
            <div className="contact-info">
              <IoLocationOutline size={22} className="contact-icon" />
              <p>Patna ,Bihar</p>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form onSubmit={onSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                name="name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                name="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Write your message here</label>
              <textarea
                name="message"
                id="message"
                rows="6"
                placeholder="Enter your message"
                required
              />
            </div>

            <div className="form-action-row">
              <button
                type="submit"
                className="submitnow"
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? 'Sending...' : 'Submit now'}
              </button>
              {formStatus.message && (
                <div
                  className={`form-feedback ${formStatus.type === 'success' ? 'feedback-success' : 'feedback-error'}`}
                  role="status"
                >
                  {formStatus.message}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
