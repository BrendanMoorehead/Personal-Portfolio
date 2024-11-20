import { useState } from 'react';
import emailjs from 'emailjs-com';
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <form
      onSubmit={sendEmail}
      className="relative max-w-2xl mx-auto flex flex-col bg-neutral-800 p-6 rounded-3xl overflow-hidden gap-4"
    >
      <div className="flex flex-col gap-1">
        <label className="form-label">Name</label>
        <input
          type="text"
          name="user_name"
          className="form-input bg-neutral-900 rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="user_email"
          className="form-input bg-neutral-900 rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-1 pb-4">
        <label className="form-label">Message</label>
        <textarea
          name="message"
          className="form-input bg-neutral-900 rounded-xl form-textarea"
        />
      </div>
      <input
        type="submit"
        value="SEND"
        disabled={isSubmitting}
        className="w-full py-2 rounded-xl gradient text-white flex items-center justify-center button"
      />

      {stateMessage && <p className="text-center">{stateMessage}</p>}
    </form>
  );
};
export default ContactForm;
