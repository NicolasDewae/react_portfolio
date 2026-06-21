// src/components/contactForm/ContactForm.tsx
import { contact } from '../../data/i18n';
import './ContactForm.css';

interface ContactFormProps {
  data: boolean;
}

const ContactForm = ({ data }: ContactFormProps) => {
  const item = data ? contact.fr[0] : contact.en[0];

  return (
    <form
      className="contact-form"
      action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_MY_EMAIL}`}
      method="POST"
    >
      <input type="hidden" name="_next" value="/contact" />
      <div>
        <input type="text" name="firstname" placeholder={item.firstName} />
        <input type="text" name="lastname" placeholder={item.lastName} />
      </div>
      <div>
        <input type="email" name="email" placeholder={item.email} />
      </div>
      <div>
        <textarea name="message" placeholder={item.message} />
      </div>
      <input type="hidden" name="_captcha" value="true" />
      <div>
        <button type="submit">{item.button}</button>
      </div>
    </form>
  );
};

export default ContactForm;
