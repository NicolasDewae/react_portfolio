// src/components/inputMail/InputMail.tsx
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import './InputMail.css';

const InputMail = () => {
  const postUrl = `https://protonmail.us13.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe url={postUrl} />
    </div>
  );
};

export default InputMail;
