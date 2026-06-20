'use client';
// src/components/inputMail/InputMail.tsx
import dynamic from 'next/dynamic';
import './InputMail.css';

const MailchimpSubscribe = dynamic(() => import('react-mailchimp-subscribe'), { ssr: false });

const InputMail = () => {
  const postUrl = `https://protonmail.us13.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`;

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe url={postUrl} />
    </div>
  );
};

export default InputMail;
